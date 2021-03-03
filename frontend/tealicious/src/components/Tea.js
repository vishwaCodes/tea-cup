import React, { Component } from 'react';

class Tea extends Component {
  render() {
    return (
      <li data-teas-index={this.props.tea.id}>
        <span className="tea-item">{this.props.tea.name}</span> <br/>
        <span className="tea-item">{this.props.tea.description}</span>
      </li> 
    );
  };
};

export default Tea;