import React from "react";
import DocumentContext from "reactdown/lib/DocumentContext";
import { Block } from "lib";
export default function Document() {
  return React.createElement(DocumentContext, {
    "metadata": metadata
  }, React.createElement("div", null, React.createElement("p", null, "Prologue"), React.createElement(Block, null), React.createElement("p", null, "Epilogue")));
}
export let metadata = null;
