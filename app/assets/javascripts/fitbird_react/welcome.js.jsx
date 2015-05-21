var Welcome = React.createClass({

  render: function() {
    return (
      <div layout="row" hide-sm>
        <div flex>
          <a href="#/registration/user">
            Sign Up
          </a>
        </div>
        <div>
          <a href="#/login">
            Log In
          </a>
        </div>
        <div>
          <a href="#/registration/coach">
            List As Trainer
          </a>
        </div>
      </div>
    );
  }
});
