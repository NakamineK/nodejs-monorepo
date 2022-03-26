import React from "react";
import ReactDOM from "react-dom";
import { Card } from "@nakaminek/ui-noob";
import "@nakaminek/ui-noob/index.css";

// polyfill for container query
const supportsContainerQueries = "container" in document.documentElement.style;
if (!supportsContainerQueries) {
  // @ts-ignore
  import("container-query-polyfill");
}

ReactDOM.render(<Card />, document.getElementById("root"));
