var MenuList = React.createClass({

  render: function() {
    return (
      <div layout="row" hide-sm>
        <div flex>
          <a href="#/registration/user" ng-show="!signedIn">
            Sign Up
          </a>
        </div>
        <div>
          <a href="#/login" ng-show="!signedIn">
            Log In
          </a>
        </div>
        <div>
          <a href="#/registration/coach" ng-show="!signedIn">
            List As Trainer
          </a>
        </div>
      </div>
    );
  }
});
