module.exports = function(api) {
  api.cache(false);

  const { NODE_ENV, BABEL_ENV } = process.env;
  const devMode = NODE_ENV !== "production";
  const cjs = NODE_ENV === "test" || BABEL_ENV === "commonjs";

  const config = {
    presets: [
      [
        "@babel/preset-env",
        {
          // debug: true,
          // targets: { browsers: ["> 1%", "last 2 versions", "ie > 9"] },
          modules: cjs && "commonjs"
          // corejs: 2,
          // useBuiltIns: "usage"
        }
      ],
      "@babel/preset-react"
    ],
    plugins: [
      devMode && "react-hot-loader/babel",
      !devMode && [
        "@babel/transform-runtime",
        {
          useESModules: !cjs,
          version: require("./package.json").dependencies[
            "@babel/runtime"
          ].replace(/^[^0-9]*/, "")
        }
      ],
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-object-rest-spread",

      "@babel/plugin-transform-react-constant-elements",
      "@babel/plugin-transform-react-inline-elements"
    ].filter(Boolean)
  };

  return config;
};
