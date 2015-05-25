import React from "react";

class MenuItem extends React.Component {
  render() {
    return(
      <a href={this.props.link}>
        {this.props.label}
      </a>
    );
  }
};

export default MenuItem;
