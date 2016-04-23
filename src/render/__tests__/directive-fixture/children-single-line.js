import React from "react";
import { DocumentContext, directives as defaultDirectives, components as defaultComponents } from "reactdown/runtime";
let components = defaultComponents;
import { Block } from "lib";
export default function Document() {
  return React.createElement(DocumentContext, {
    context: {
      metadata,
      model
    }
  }, React.createElement(components.Root, null, React.createElement(components.Paragraph, null, "Prologue"), React.createElement(Block, null, React.createElement(components.Paragraph, null, "Content")), React.createElement(components.Paragraph, null, "Epilogue")));
}
export let metadata = {};
export let model = {
  "toc": [],
  "title": null
};
