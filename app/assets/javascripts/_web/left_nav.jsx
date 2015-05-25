var React = require('react');
var mui = require('material-ui');

var Fitbird_LeftNav = React.createClass({
  getInitialState: function() {
    var menuItems;
    if (this.props.user) {
      menuItems = [
      {
        type: mui.MenuItem.Types.LINK,
        payload: 'log-off',
        text: 'Log Off',
      }, {
        type: mui.MenuItem.Types.LINK,
        payload: 'discover',
        text: 'Discover'
      }, {
        type: mui.MenuItem.Types.LINK,
        payload: 'how-it-works',
        text: 'How It Works'
      }, {
        type: mui.MenuItem.Types.LINK,
        payload: 'join-as-trainer',
        text: 'Join As Trainer'
      }];
    } else {
      menuItems = [
      {
        type: mui.MenuItem.Types.LINK,
        payload: 'sign-up',
        text: 'Sign Up'
      }, {
        type: mui.MenuItem.Types.LINK,
        payload: 'log-in',
        text: 'Log In',
      }, {
        type: mui.MenuItem.Types.LINK,
        payload: 'discover',
        text: 'Discover'
      }, {
        type: mui.MenuItem.Types.LINK,
        payload: 'how-it-works',
        text: 'How It Works'
      }, {
        type: mui.MenuItem.Types.LINK,
        payload: 'join-as-trainer',
        text: 'Join As Trainer'
      }];

      return {menuItems};
    }
  },

  toggle: function() {
    this.refs.leftNav.toggle();
  },

  onitemClicked: function(e, key, payload) {
    // TODO: route to payload. --Not called with type: LINK
    this.refs.leftNav.close();
  },

  onHeaderClick() {
    // TODO: route to index/ root
    this.refs.leftNav.close();
  },

  headerStyles: function() {
    return {
      cursor: 'pointer',
      fontSize: '2.3em',
      color: 'white',
      paddingLeft: '24px',
      paddingTop: '0.5em',
      paddingBottom: '0.5em',
      marginBottom: '8px'
    };
  },

  render: function() {
    var header = (
      <div className="color-palette"  onClick={this.onHeaderClick}>
        <h1 style={this.headerStyles()} className="mui-font-style-headline indigo-500">Fitbird</h1>
      </div>
    );

    return (
      <div>
        <mui.LeftNav ref="leftNav" docked={false} header={header} isInitiallyOpen={false} onChange={this.itemClicked} menuItems={this.state.menuItems} />
      </div>
    );

  }
});

module.exports = Fitbird_LeftNav;
