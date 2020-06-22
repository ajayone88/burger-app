const postcssConfig = {
    parser: "sugarss",
    plugins: {
        "postcss-import": {},
        "postcss-preset-env": {},
        "cssnano": {}
    }
};

export default postcssConfig;