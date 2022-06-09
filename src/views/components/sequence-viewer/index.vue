<template>
  <div class="sequence" ref="sequence"></div>
</template>

<script lang="ts">
export default {
  name: "sequence"
};
</script>
<script setup lang="ts">
import * as seqviz from "seqviz-umd";
import { onMounted, ref, watchEffect } from "vue";
const sequence = ref(null);

interface Props {
  /** An NCBI accession ID or iGEM part ID. Populates options.name, options.seq, and options.annotations */
  accession?: string;
  /** The name of the sequence/plasmid. */
  name?: string;
  /** The DNA sequence to render. */
  seq?: string;
  /** The complement sequence. Inferred from seq by default */
  compSeq?: string;
  /**
   * An array of annotation objects for the viewer.
   * Each annotation object requires 0-based start (inclusive) and end (exclusive) indexes.
   * For forward arrows, set the annotation's direction to 1 and -1 for reverse arrows.
   * A direction of 0 or no direction produces annotations without arrows.
   * Names (optional) are rendered on top the annotation.
   */
  annotations?: SeqViz.Annotation[];
  /** A File, Blob, or body (string/utf8) from a FASTA, Genbank, SnapGene, or SBOL file. Populates options.name, options.seq, and options.annotations. */
  file?: string | File;
  /** This is a feature specific to BioBricks (options.accession). The library currently supports BBa_K1362091, BBa_K823055, pSB1A3, pSB1A7, pSB1AC3, pSB1AK3, pSB1AT3, pSB1C3, pSB1K3, and pSB1T3. */
  backbone?: string;
  /**
   * An array of color hex codes for annotation coloring.
   * [
      "#9DEAED", // cyan
      "#8FDE8C", // green
      "#CFF283", // light green
      "#8CDEBD", // teal
      "#F0A3CE", // pink
      "#F7C672", // orange
      "#F07F7F", // red
      "#FAA887", // red-orange
      "#F099F7", // magenta
      "#C59CFF", // purple
      "#6B81FF", // blue
      "#85A6FF", // light blue
    ]
   */
  colors?: string[];
  /**
   * An object mapping bp to color where bp is a nucleotide or 0-based index. Example:
   * { "A": "#FF0000", "T": "blue", 12: "#00FFFF" }
   */
  bpColors?: {
    [key: number]: string;
  };
  /**
   * A functions that returns whether to copy the selected range on the viewer(s) to the user's clipboard.
   * An example of an options.copyEvent function for copying after ctrl+c or meta+c events:
   * event => event.key === "c" && (event.metaKey || event.ctrlKey);
   */
  copyEvent?: (event: KeyboardEvent) => void;
  /** An array of restriction enzyme names whose recognition sites should be shown. Example: ["PstI", "EcoRI"]. This is case-insensitive. */
  enzymes?: string[];
  /**
   * Unsupported enzymes can also be passed through an object where the keys are the enzymes' names and the values are the enzymes. Additionally, if a highlightColor is passed the recognition site will be highlighted with the appropriate color.
   * {
      Cas9: {
        rseq: "NGG", // recognition sequence
        fcut: 0, // cut index on FWD strand, relative to start of rseq
        rcut: 1, // cut index on REV strand, relative to start of rseq
        highlightColor: "#D7E5F0" // highlight recognition site with color
      }
    }
   */
  enzymesCustom?: {
    [key: string]: SeqViz.IEnzyme;
  };
  /**
   * Callback executed after a search event. Called once on initial render. Accepts a single searchResults argument: (searchResults) => {}. An example of a searchResults array is below.
   * [
      {
        start: 728,
        end: 733,
        direction: 1,
        index: 0,
      },
      {
        start: 1788,
        end: 1793,
        direction: -1,
        index: 1,
      },
    ];
   */
  onSearch?: (search: SeqViz.SearchResult[]) => void;
  /**
   * Callback function executed after selection events. Should accept a single selection argument: (selection) => {}.
   * This occurs after drag/drop selection and clicks. If an annotation, translation, enzyme or searchElement was clicked, the selection object will have info on the selected element. The example below is of a selection object following an annotation click.
   * {
      // selection
      "name": "lacZ fragment",
      "type": "ANNOTATION",
      "seq": "ctatgcggcatcagagcagattgtactgagagtgcaccatatgcggtgtgaaataccgcacagatgcgtaaggagaaaataccgcatcaggcgccattcgccattcaggctgcgcaactgttgggaagggcgatcggtgcgggcctcttcgctattacgccagctggcgaaagggggatgtgctgcaaggcgattaagttgggtaacgccagggttttcccagtcacgacgttgtaaaacgacggccagtgccaagcttgcatgcctgcaggtcgactctagaggatccccgggtaccgagctcgaattcgtaatcatggtcat",
      "gc": 55.3,
      "tm": 85,
      "start": 133,
      "end": 457,
      "length": 324,
      "direction": -1
      "clockwise": true,
      "color": "#8FDE8C",
    }
   */
  onSelection?: (selection: SeqViz.SeqVizSelection) => void;
  /** By default, the circular viewer rotates when scrolling with a mouse over the viewer. That can be disabled by setting rotateOnScroll to false. */
  rotateOnScroll?: boolean;
  /**
   * A search object for specifying search results to highlight on the viewer. An example is below:
   * { "query": "aatggtctc", "mismatch": 1 }
   * Searching supports the following nucleotide wildcards within the query.
   * {
      "y": ["c", "t"],
      "r": ["a", "g"],
      "w": ["a", "t"],
      "s": ["c", "g"],
      "k": ["g", "t"],
      "m": ["a", "c"],
      "d": ["a", "g", "t"],
      "v": ["a", "c", "g"],
      "h": ["a", "c", "t"],
      "b": ["c", "g", "t"],
      "x": ["a", "c", "g", "t"],
      "n": ["a", "c", "g", "t"]
    }
   * mismatch is an int denoting the maximum allowable mismatch between the query and a match within the viewer's sequence (see: Hamming distance).
   */
  search?: {
    query: string;
    mismatch: number;
  };
  /** Whether to show the complement sequence. */
  showComplement?: boolean;
  showAnnotations?: boolean;
  /** Whether to show the index line and ticks below the sequence. */
  showIndex?: boolean;
  showPrimers?: boolean;
  /**
   * Style for seqviz's outer container div. Empty by default. Useful for setting the height and width of the viewer if the element around seqviz lacks a defined height and/or width. For example:
   * { height: "100vh", width: "100vw" }
   */
  style?: Record<string, unknown>;
  /**
   * An array of translation objects for rendering ranges of amino acids beneath the DNA sequence. Like annotation's, translation objects requires 0-based start (inclusive) and end (exclusive) indexes relative the DNA sequence. A direction is required (1 (FWD) or -1 (REV)).
   * [
      { start: 0, end: 90, direction: 1 }, // [0, 90)
      { start: 191, end: 522, direction: -1 },
    ];
   */
  translations?: SeqViz.Element[];
  /** One of ["linear", "circular", "both", "both_flip"]) the type of viewer to show. "both" by default. "both" means the circular viewer fills the left side of SeqViz and the linear viewer fills the right. "both_flip" is the opposite: the linear viewer is on the left and the circular viewer is on the right. */
  viewer?: "linear" | "circular" | "both" | "both_flip";
  /** How zoomed the viewer(s) should be 0-100. Keyed by viewer type (options.viewer). */
  zoom?: {
    circular: number;
    linear: number;
  };
  /** Passing in a list of HighlightRegions ({ start: number; end: number; color?: string; }) will highlight the corresponding region of the sequence with a given color if provided or with the default highlight color otherwise.
   * highlightedRegions: [
      { start: 36, end: 66, color: "magenta" },
      { start: 70, end: 80} // default color
    ],
   */
  highlightedRegions?: SeqViz.HighlightRegion[];
}

const props = withDefaults(defineProps<Props>(), {
  showIndex: true
});

watchEffect(() => {
  if (sequence.value) {
    seqviz
      .Viewer(sequence.value, {
        ...props
      })
      .render();
  }
});
// onMounted(() => {
//   seqviz
//     .Viewer(sequence.value, {
//       ...props
//     })
//     .render();
// });
</script>

<style lang="scss" scoped>
.sequence {
  padding: 0 10px;
}
</style>
