import React from "react";
import MenuItem from "./menu_item";

var Welcome = React.createClass({

  render: function() {
    return (
      <div layout="row" hide-sm>
        <MenuItem link="#/registration/user" label="Sign Up" />&nbsp;
        <MenuItem link="#/login" label="Log In" />&nbsp;
        <MenuItem link="#/registration/coach" label="List As Trainer" />
      </div>
    );
  }
});
