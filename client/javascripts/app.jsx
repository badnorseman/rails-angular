import $ from "jquery";
import React from "react";
import Navigation from "./components/navigation";

$(function onLoad() {
  function render() {
    if ($("#app").length > 0) {

      class App extends React.Component {

        render() {
          return(
            <div>
              <h1>App</h1>
              <Navigation/>
            </div>, document.getElementById("app")
          );
        }
      };
    }
  }

  render();
});
