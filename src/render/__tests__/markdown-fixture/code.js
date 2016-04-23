import React from "react";
import { DocumentContext, directives as defaultDirectives, components as defaultComponents } from "reactdown/runtime";
let components = defaultComponents;
export default function Document() {
  return React.createElement(DocumentContext, {
    context: {
      metadata,
      model
    }
  }, React.createElement(components.Root, null, React.createElement(components.Heading, {
    "level": 1
  }, "Code"), React.createElement(components.Code, null, "alert('some JavaScript code.');\n"), React.createElement(components.Code, null, "foo bar baz\n"), React.createElement(components.Code, null, "alpha bravo charlie\n"), React.createElement(components.Code, null, ""), React.createElement(components.Code, null, "  two spaces\n    one\n        two\n    one\n      mixed.\n")));
}
export let metadata = {};
export let model = {
  "toc": [{
    "value": "Code",
    "depth": 1
  }],
  "title": "Code"
};
