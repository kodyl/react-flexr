import React from 'react';

export default class Demo extends React.Component {
  constructor(props) {
    super(props);

    this.styles = {
      width: '100%',
      padding: '.8em 1em',
      background: 'rgba(147,128,108,.1)',
      borderRadius: 3
    };
  }

  render() {
    return (
      <div style={ this.styles }>
        { this.props.children }
      </div>
    );
  }
}
