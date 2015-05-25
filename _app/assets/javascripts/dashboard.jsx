import React from "react";

var Dashboard = React.createClass({

  render: function() {
    return (
      <div layout="row" layout-align-gt-sm="end start"
           layout-sm="column" layout-align-sm="start start">
        <MenuItem link="#/profiles" label="Profile" />&nbsp;
        <MenuItem link="#/logout" label="Log Out" />&nbsp;
      </div>
    );
  }
});
