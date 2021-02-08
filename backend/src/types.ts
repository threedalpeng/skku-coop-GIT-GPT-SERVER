type GenSrcType = {
  seedText: string;
  option: {
    model: string;
    rcmdType: string;
    rcmdNum: string;
    temperature: string;
  };
  keywords: string[];
};

type GenTexts = {
  generatedTexts: string[];
  exampleText: string;
};

export { GenSrcType, GenTexts };
