import { loadEnv } from "@build/index";
import { ref, computed } from "vue";
import type { Ref } from "vue";
import { getSeq, getResidues } from "/@/api/aggrescan";

type Content = string[][];

interface Chain {
  content?: Content;
  stat: Record<string, string>;
}

type ChainKey = string;

export type Chains = Record<string, Chain>;

const useChains = (data: Ref<Chains>) => {
  const chains = computed(() => Object.keys(data.value));

  const getChainScores = (chainKey: Ref<ChainKey>) => {
    return computed(() => {
      return data.value[chainKey.value]?.content || [];
    });
  };

  const getConvertedChainScores = (
    chainKey: Ref<ChainKey>,
    buried: Ref<boolean>
  ) => {
    const chainScores = getChainScores(chainKey);
    return computed(() => {
      return chainScores.value
        .map(item => {
          return item ? [item[0], item[3]] : [];
        })
        .filter(item => {
          return buried.value === false || +item[1] !== 0;
        });
    });
  };

  return {
    chains,
    getChainScores,
    getConvertedChainScores
  };
};

const useSeqs = params => {
  const seqs = ref({});
  getSeq({
    pdb: "/data/xiao_cong/develop/aggrescan3d/data/109_ABlooper.pdb",
    chain: ""
    // json: JSON.stringify({
    //   pdb: "/data/xiao_cong/develop/aggrescan3d/data/109_ABlooper.pdb",
    //   chain: ""
    // })
  }).then(res => {
    seqs.value = res;
  });
  return {
    seqs
  };
};

type Residue = Record<"letter" | "name" | "fullName", string>;

type ResiduesMap = Record<string, Residue>;

const useResidues = () => {
  const residues = ref<Residue[]>([]);

  const residuesMap = computed<ResiduesMap>(() => {
    const res = {};
    residues.value.forEach(item => {
      res[item.letter] = item;
    });
    return res;
  });

  getResidues().then(res => {
    residues.value = res;
  });
  return {
    residues,
    residuesMap
  };
};

interface ReplacedResidue {
  from: string;
  chain: string;
  index: string | number;
  to: string;
  fromLetter: string;
  toLetter: string;
}

const useReplacedResidues = () => {
  const replacedResidues = ref<ReplacedResidue[]>([]);
  return {
    replacedResidues
  };
};

interface ExcludedResidue {
  name: string;
  chain: string;
  index: string | number;
  letter: string;
}

const useExcludedResidues = () => {
  const excludedResidues = ref<ExcludedResidue[]>([]);
  return {
    excludedResidues
  };
};

const useChosenResidues = (
  residues: Ref<(ReplacedResidue | ExcludedResidue)[]>
) => {
  const chosenResidues = computed(() => {
    const res = {};
    residues.value.forEach(item => {
      const { chain, index } = item;
      if (!res[chain]) res[chain] = [];
      res[chain].push(index);
    });
    return res;
  });
  return {
    chosenResidues
  };
};

const useAggrescanApi = () => {
  const isProd = process.env.NODE_ENV === "production";
  const { VITE_PROXY_DOMAIN_AGGRESCAN } = loadEnv();
  const aggrecanApi = isProd ? "" : VITE_PROXY_DOMAIN_AGGRESCAN;
  return aggrecanApi;
};

const useUploadApi = () => {
  const uploadApi = ref("");
  uploadApi.value = useAggrescanApi() + "/get_seg/file";
  return {
    uploadApi
  };
};

export {
  useChains,
  useSeqs,
  useResidues,
  useReplacedResidues,
  useExcludedResidues,
  useChosenResidues,
  useUploadApi
};
