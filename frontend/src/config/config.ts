const config = {
  path: {
    server: "http://115.145.212.100:53344",
  },
  generator_option: [
    {
      label_name: "카테고리",
      label_value: "model",
      options: [
        {
          option_name: "크림",
          option_value: "cream-100x100",
        },
        {
          option_name: "클랜징폼",
          option_value: "oliveyoung-foam",
        },
      ],
    },
    {
      label_name: "추천 방식",
      label_value: "rcmd-type",
      options: [
        {
          option_name: "단어 추천",
          option_value: "word",
        },
        {
          option_name: "문장 추천",
          option_value: "sentence",
        },
        {
          option_name: "전체 추천",
          option_value: "review",
        },
      ],
    },
    {
      label_name: "추천 개수",
      label_value: "rcmd-number",
      options: [
        {
          option_name: "3개",
          option_value: "3",
        },
        {
          option_name: "4개",
          option_value: "4",
        },
        {
          option_name: "5개",
          option_value: "5",
        },
        {
          option_name: "6개",
          option_value: "6",
        },
      ],
    },
    {
      label_name: "Temperature",
      label_value: "temperature",
      options: [
        {
          option_name: "1.0",
          option_value: "1.0",
        },
        {
          option_name: "2.0",
          option_value: "2.0",
        },
        {
          option_name: "3.0",
          option_value: "3.0",
        },
        {
          option_name: "4.0",
          option_value: "4.0",
        },
        {
          option_name: "5.0",
          option_value: "5.0",
        },
      ],
    },
  ],
};

export default config;
