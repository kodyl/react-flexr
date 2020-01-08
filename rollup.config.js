import resolve from "rollup-plugin-node-resolve";
import commonJs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";

import pkg from "./package.json";

const name = "react-flexr";
const globals = {
  stilr: "StyleSheet",
  react: "React",
  "prop-types": "PropTypes"
};

const external = Object.keys(pkg.peerDependencies || {});
const allExternal = external.concat(Object.keys(pkg.dependencies || {}));

const makeExternalPredicate = externalArr => {
  if (externalArr.length === 0) {
    return () => false;
  }
  const pattern = new RegExp(`^(${externalArr.join("|")})($|/)`);
  return id => pattern.test(id);
};

export default {
  external: makeExternalPredicate(allExternal),
  input: "lib/index.js",
  output: [
    {
      name,
      globals,
      format: "umd",
      file: "index.js"
    },
    {
      name,
      globals,
      format: "es",
      file: "index.es.js"
    }
  ],
  plugins: [
    resolve({
      jsnext: true,
      main: true
    }),
    babel({
      babelHelpers: "runtime",
      babelrc: false,
      configFile: false,
      presets: [
        [
          "@babel/preset-env",
          {
            debug: true,
            targets: { browsers: ["> 1%", "last 2 versions", "ie > 9"] },
            modules: false,
            corejs: 2,
            useBuiltIns: "usage"
          }
        ],
        "@babel/preset-react"
      ],
      plugins: [
        ["@babel/plugin-transform-runtime" /*, { corejs: 3 }*/],
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-object-rest-spread"
      ],
      exclude: ["node_modules/**"]
    }),
    commonJs()
  ]
};
