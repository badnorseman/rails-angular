import $ from "jquery";
import React from "react";
import Welcome from "./components/welcome";
import Navigation from "./components/navigation";

$(function onLoad() {
  function render() {
    if ($("#app").length > 0) {
      class App extends React.Component {
        render() {
          return(
            <div>
              <Welcome/>
              <Navigation/>
            </div>, document.getElementById("app")
          );
        }
      };
    }
  }

  render();
});
