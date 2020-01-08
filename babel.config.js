module.exports = function(api) {
  api.cache(true);

  return {
    presets: [
      [
        "@babel/preset-env",
        {
          // debug: true,
          targets: { browsers: ["> 1%", "last 2 versions", "ie > 9"] },
          // modules: false,
          useBuiltIns: "usage",
          corejs: 3
        }
      ],
      "@babel/preset-react"
    ],
    // presets: ["es2015", "react", "stage-0"],
    // plugins: [["@babel/plugin-transform-runtime"]],
    plugins: [
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-object-rest-spread"
    ],
    env: {
      development: {
        presets: [
          ["@babel/preset-env", { modules: false }]
          // "@babel/preset-react"
        ],
        plugins: ["react-hot-loader/babel"]
      },
      production: {
        plugins: [
          ["@babel/plugin-transform-runtime", { corejs: 3 }],
          "@babel/plugin-transform-react-constant-elements",
          "@babel/plugin-transform-react-inline-elements"
        ]
      }
    }
  };
};
