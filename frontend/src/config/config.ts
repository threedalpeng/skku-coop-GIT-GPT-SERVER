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
      cleansingfoam: [
        { text: "세정력", state: "recommended" },
        { text: "당김", state: "recommended" },
      ],
    },
  },
};

export default config;
