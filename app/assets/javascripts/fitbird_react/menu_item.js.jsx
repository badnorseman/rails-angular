var MenuItem = React.createClass({

  render: function() {
    return (
      <a href={this.props.link}>
        {this.props.label}
      </a>
    );
  }
});
