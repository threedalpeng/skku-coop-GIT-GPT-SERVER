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
};

type ExampleSrcType = {
  model: string;
};

type ExampleText = {
  exampleText: string;
};

type SumSrcType = {
  seedText: string;
  model: string;
};

type SumText = {
  summarizedText: string;
};

export {
  GenSrcType,
  GenTexts,
  ExampleSrcType,
  ExampleText,
  SumSrcType,
  SumText,
};
