import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parentdiv" }, [
  React.createElement("div", { id: "childdiv1" }, [
    React.createElement("h1", { id: "heading1" }, "Hellooooo1"),
    React.createElement("h2", { id: "heading2" }, "Hellooooo2"),
  ]),
  React.createElement("div", { id: "childdiv2" }, [
    React.createElement("h1", { id: "heading1" }, "Hellooooo1"),
    React.createElement("h2", { id: "heading2" }, "Hellooooo2"),
  ]),
]);

const headingElement = React.createElement(
  "h3",
  { id: "heading", xyx: "abc" },
  "This Is my heading!!!!!!!"
);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
