import $ from "jquery";
import React from "react";
import HelloWorld from "./hello_world";

$(function onLoad() {
  function render() {
    if ($("#_app").length > 0) {
      React.render(
        <div>
          <HelloWorld />
        </div>,
        document.getElementById("_app")
      );
    }
  }

  render();
});
