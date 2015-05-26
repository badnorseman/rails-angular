import React from "react";
import Router from "react-router";
import Login from "./login";
import Signup from "./signup";
import Dashboard from "./dashboard";

var { DefaultRoute, Link, Route, RouteHandler } = Router;

class Navigation extends React.Component {
  render() {
    return(
      <div>
        <Link to="login">Log In</Link>
        <Link to="signup">Sign Up</Link>

        <RouteHandler/>
      </div>
    );
  }
};

var routes = (
  <Route handler={Navigation}>
    <Route name="login" path="/login" handler={Login}/>
    <Route name="signup" path="/signup" handler={Signup}/>
    <Route name="dashboard" path="/dashboard" handler={Dashboard}/>
  </Route>
);

Router.run(routes, function(Handler) {
  React.render(<Handler/>, document.getElementById("app"));
});

// export default Navigation;
