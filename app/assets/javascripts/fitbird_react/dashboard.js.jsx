var Dashboard = React.createClass({

  render: function() {
    return (
      <div layout="row" layout-align-gt-sm="end start"
           layout-sm="column" layout-align-sm="start start">
        <div>
          <a href="#/profiles"><span>
            Profile
          </span></a>
        </div>
        <div>
          <a href="#/logout"><span>
            Log Out
          </span></a>
        </div>
      </div>
    );
  }
});
