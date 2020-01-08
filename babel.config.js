module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["@babel/preset-env", "@babel/preset-react"],
    plugins: [
      ["@babel/plugin-transform-runtime", { corejs: 3 }],
      "@babel/plugin-proposal-class-properties"
    ],
    env: {
      development: {
        presets: [
          ["@babel/preset-env", { modules: false }],
          "@babel/preset-react"
        ],
        plugins: ["react-hot-loader/babel"]
      },
      production: {
        presets: ["@babel/preset-env", "@babel/preset-react"],
        plugins: [
          "@babel/plugin-transform-react-constant-elements",
          "@babel/plugin-transform-react-inline-elements"
        ]
      }
    }
  };
};
