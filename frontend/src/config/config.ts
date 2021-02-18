const config: any = {
  path: {
    server: "http://115.145.212.100:53344",
  },
  review: {
    generatorOption: [
      {
        formType: "select",
        labelName: "카테고리",
        labelValue: "model",
        defaultValue: "cleansingfoam",
        options: [
          {
            optionName: "크림",
            optionValue: "cream",
          },
          {
            optionName: "클랜징폼",
            optionValue: "cleansingfoam",
          },
        ],
      },
      {
        formType: "select",
        labelName: "추천 방식",
        labelValue: "rcmd-type",
        defaultValue: "sentence",
        options: [
          {
            optionName: "단어 추천",
            optionValue: "word",
          },
          {
            optionName: "문장 추천",
            optionValue: "sentence",
          },
          {
            optionName: "전체 추천",
            optionValue: "review",
          },
        ],
      },
      {
        formType: "number",
        labelName: "추천 개수",
        labelValue: "rcmd-number",
        defaultValue: 5,
        minValue: 1,
        maxValue: 9,
      },
      {
        formType: "text",
        labelName: "Temperature",
        labelValue: "temperature",
        defaultValue: "3.0",
      },
    ],
    defaultOption: {
      model: "cleansingfoam",
      rcmdType: "sentence",
      rcmdNum: 5,
      temperature: "3.0",
    },
    keywords: {
      cream: [
        { text: "발림성", state: "recommended" },
        { text: "촉촉", state: "recommended" },
      ],
      /*
      cleansingfoam: [
        { text: "세정력", state: "recommended" },
        { text: "당김", state: "recommended" },
      ],
      */
      cleansingfoam: [
        { text: "피부타입", state: "recommended" },
        { text: "세정력", state: "recommended" },
        { text: "자극도", state: "recommended" },
      ],
    },
    keywordMatching: {
      cream: {
        발림성: ["발림성"],
        촉촉: ["촉촉"],
      },
      cleansingfoam: {
        피부타입: ["예민", "건성", "지성", "복합성", "민감", "수부지", "피부 타입"],
        세정력: ["세정", "뽀득", "뽀드득"],
        자극도: ["자극", "순해", "순하", "순한", "순했", "순함", "순합", "화끈", "빨개"]
      }
    }
  },
};

export default config;
