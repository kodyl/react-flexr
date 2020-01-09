import resolve from "rollup-plugin-node-resolve";
import replace from "rollup-plugin-replace";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";

import pkg from "./package.json";

const env = process.env.NODE_ENV;
const format = process.env.FORMAT;

const external = Object.keys(pkg.peerDependencies || {});
const allExternal = external.concat(Object.keys(pkg.dependencies || {}));

const makeExternalPredicate = externalArr => {
  if (externalArr.length === 0) {
    return () => false;
  }
  const pattern = new RegExp(`^(${externalArr.join("|")})($|/)`);
  return id => pattern.test(id);
};

const name = "react-flexr";
const globals = {
  stilr: "StyleSheet",
  react: "React",
  "prop-types": "PropTypes"
};

export default {
  external: makeExternalPredicate(allExternal),
  input: "lib/index.js",
  output: [
    format === "commonjs"
      ? {
          name,
          globals,
          format: "umd",
          file: "index.js"
        }
      : {
          name,
          globals,
          format: "es",
          file: "index.es.js"
        }
  ],
  plugins: [
    resolve({
      // jsnext: true,
      // main: true
    }),
    babel({
      exclude: "**/node_modules/**",
      babelHelpers: "runtime"
      // runtimeHelpers: true
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify(env)
    }),
    commonjs()
  ]
};
