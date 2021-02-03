type GenType = {
  seedText: string;
  option: {
    model: string;
    rcmdType: string;
    rcmdNum: string;
    temperature: string;
  };
};

type GenTexts = {
  generatedTexts: string[];
};

export { GenType, GenTexts };
