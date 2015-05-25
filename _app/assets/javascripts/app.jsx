import $ from "jquery";
import React from "react";
import Welcome from "./welcome";
import Navigation from "./navigation";

$(function onLoad() {
  function render() {
    if ($("#_app").length > 0) {
      React.render(
        <div>
          <Welcome />
          <Navigation />
        </div>, document.getElementById("_app")
      );
    }
  }

  render();
});
