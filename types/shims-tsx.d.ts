import Vue, { VNode } from "vue";

declare module "*.tsx" {
  import Vue from "compatible-vue";
  export default Vue;
}

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}

declare global {
  namespace SeqViz {
    export interface Element {
      start: number;
      end: number;
      // 之后改成-1 | 1
      direction?: number;
    }
  
    export interface Annotation extends Element {
      id: string;
      name: string;
      color: string;
      type: string;
    }
  
    export type SelectionTypeEnum = "ANNOTATION" | "PRIMER" | "FIND" | "TRANSLATION" | "ENZYME" | "SEQ" | "AMINOACID" | "";
  
    export interface SeqVizSelection {
        name: string;
        type: SelectionTypeEnum;
        seq: string;
        gc: number;
        tm: number;
        start: number;
        end: number;
        length: number;
        clockwise: boolean;
        direction?: number;
        color?: string;
        ref: null | string;
    }
  
    export interface IEnzyme {
      rseq: string;
      fcut: number;
      rcut: number;
      highlightColor?: string;
    }
  
    export interface SearchResult {
      start: number;
      end: number;
      direction: -1 | 1;
      index?: number;
      length?: number;
    }
  
    export interface HighlightRegion {
      start: number;
      end: number;
      color?: string;
    }
  
    export interface SeqVizProps {
      accession?: string;
      name?: string;
      seq?: string;
      compSeq?: string;
      annotations?: Annotation[];
      file?: string | File;
      backbone?: string;
      colors?: string[];
      bpColors: {
          [key: number]: string;
      };
      copyEvent: (event: KeyboardEvent) => void;
      enzymes: string[];
      enzymesCustom: {
          [key: string]: IEnzyme;
      };
      onSearch: (search: SearchResult[]) => void;
      onSelection: (selection: SeqVizSelection) => void;
      rotateOnScroll: boolean;
      search: {
          query: string;
          mismatch: number;
      };
      showComplement: boolean;
      showAnnotations: boolean;
      showIndex: boolean;
      showPrimers: boolean;
      style: Record<string, unknown>;
      translations: Element[];
      viewer: "linear" | "circular" | "both" | "both_flip";
      zoom: {
          circular: number;
          linear: number;
      };
      highlightedRegions?: HighlightRegion[];
    }
  }
}

