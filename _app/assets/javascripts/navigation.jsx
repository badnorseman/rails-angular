import React from "react";
import Router from "react-router";
import { DefaultRoute, Link, Route, RouteHandler } from "react-router";
import LoginHand from "./login";
import SignupHand from "./signup";

class Navigation extends React.Component {
  render() {
    return(
      <div>
        <Link to="login">Log In</Link>
        <Link to="signup">Sign Up</Link>

        {/* don't remove this line. */}
        <RouteHandler/>
      </div>
    );
  }
};

var routes = (
  <Route name="welcome" path="/" handler={Navigation}>
    <Route name="login" path="/login" handler={LoginHand} />
    <Route name="signup" path="/signup" handler={SignupHand} />
  </Route>
);

Router.run(routes, function(Handler) {
  React.render(<Handler/>, document.getElementById("_app"));
});

// export default Navigation;
