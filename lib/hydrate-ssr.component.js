import { Component } from 'react';
import { ssrWillHydrate, ssrDidHydrate } from './utils';

export default class HydrateSSR extends Component {
  componentWillMount() {
    ssrWillHydrate();
  }
  componentDidMount() {
    ssrDidHydrate();
  }

  render() {
    return this.props.children;
  }
}
