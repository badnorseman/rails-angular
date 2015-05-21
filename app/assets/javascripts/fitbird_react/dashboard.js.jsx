var Dashboard = React.createClass({

  render: function() {
    return (
      <div layout="row" layout-align-gt-sm="end start"
           layout-sm="column" layout-align-sm="start start">
        <MenuItem link="#/profiles" linkText="Profile" />&nbsp;
        <MenuItem link="#/logout" linkText="Log Out" />&nbsp;
      </div>
    );
  }
});
