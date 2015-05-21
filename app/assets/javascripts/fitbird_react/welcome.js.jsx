var Welcome = React.createClass({

  render: function() {
    return (
      <div layout="row" hide-sm>
        <MenuItem link="#/registration/user" linkText="Sign Up" />&nbsp;
        <MenuItem link="#/login" linkText="Log In" />&nbsp;
        <MenuItem link="#/registration/coach" linkText="List As Trainer" />
      </div>
    );
  }
});
