import React from "react";
import { DocumentContext, directives as defaultDirectives, components as defaultComponents } from "reactdown/runtime";
let components = defaultComponents;
import pre from "lib/pre";
export default function Document() {
  return React.createElement(DocumentContext, {
    context: {
      metadata,
      model
    }
  }, React.createElement(components.Root, null, React.createElement(components.Paragraph, null, "Hello,"), React.createElement(pre, null, "ok, *this* is **just** some code"), React.createElement(components.Paragraph, null, "Bye")));
}
export let metadata = {};
export let model = {
  "toc": [],
  "title": null
};
