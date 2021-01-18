type GenType = {
  seedText: string;
  option: {
    model: string;
    rcmd_type: string;
    rcmd_num: string;
    temperature: string;
  };
};

type GenTexts = {
  generated_texts: string[];
};

export { GenType, GenTexts };
