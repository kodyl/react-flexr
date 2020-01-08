import React from "react";
import { ssrWillHydrate, ssrDidHydrate } from "./utils";

export default class HydrateSSR extends React.Component {
  constructor(props) {
    super(props);
    ssrWillHydrate();
  }

  componentDidMount() {
    ssrDidHydrate();
  }

  render() {
    return this.props.children;
  }
}
