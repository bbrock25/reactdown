/**
 * @copyright 2016-present, Reactdown Team
 * @flow
 */

import * as build from 'babel-types';

export type JSON
  = null
  | void
  | string
  | number
  | boolean
  | Date
  | Array<JSON>
  | {[key: string]: JSON};

export type JSASTFactory = typeof build;

export type MDASTPosition = {
  line: number;
  column: number;
  offset: ?number;
};

export type MDASTLocation = {
  start: MDASTPosition;
  end: MDASTPosition;
  indent: ?number;
};

export type MDASTNode = {
  position?: ?MDASTLocation;
  data?: any;
};

export type MDASTParentNode = MDASTNode & {
  children: Array<MDASTAnyNode>;
};

export type MDASTValueNode = MDASTNode & {
  value: string;
};

export type MDASTDirectiveNode = MDASTParentNode & {
  type: 'directive';
  name: string;
  line?: ?string;
};

export type MDASTRoleNode = MDASTNode & {
  type: 'role';
  name: string;
  words: ?Array<string>;
};

export type MDASTListItemNode = MDASTParentNode & {
  type: 'listItem';
};

export type MDASTListNode = MDASTParentNode & {
  type: 'list';
  ordered: boolean;
  loose: boolean;
  start: number;
};

export type MDASTHeadingNode = MDASTParentNode & {
  type: 'heading';
  depth: number;
};

export type MDASTCodeNode = MDASTValueNode & {
  type: 'code';
};

export type MDASTParagraphNode = MDASTParentNode & {
  type: 'paragraph';
};

export type MDASTBreakNode = MDASTNode & {
  type: 'break';
};

export type MDASTHardBreakNode = MDASTNode & {
  type: 'hardBreak';
};

export type MDASTThematicBreakNode = MDASTNode & {
  type: 'thematicBreak';
};

export type MDASTRuleNode = MDASTNode & {
  type: 'rule';
};

export type MDASTHTMLNode = MDASTValueNode & {
  type: 'html';
};

export type MDASTYAMLNode = MDASTValueNode & {
  type: 'yaml';
};

export type MDASTTextNode = MDASTValueNode & {
  type: 'text';
};

type MDASTTableAlign = 'left' | 'right' | 'center';

export type MDASTTableNode = MDASTNode & {
  type: 'table';
  align: Array<?MDASTTableAlign>;
  children: Array<MDASTTableRow>;
};

export type MDASTTableRow = MDASTNode & {
  type: 'tableRow';
  children: Array<MDASTTableCell>;
};

export type MDASTTableCell = MDASTParentNode & {
  type: 'tableCell';
};

export type MDASTBlockquoteNode = MDASTParentNode & {
  type: 'blockquote';
};

export type MDASTRootNode = MDASTParentNode & {
  type: 'root';
};

export type MDASTDefinitionNode = MDASTNode & {
  type: 'definition';
  identifier: string;
  title: ?string;
  url: string;
};

export type MDASTFootnoteNode = MDASTParentNode & {
  type: 'footnote';
};

export type MDASTFootnoteDefinitionNode = MDASTNode & {
  type: 'footnoteDefinition';
};

export type MDASTFootnoteReferenceNode = MDASTNode & {
  type: 'footnoteReference';
  identifier: string;
};

export type MDASTLinkNode = MDASTParentNode & {
  type: 'link';
  title: ?string;
  url: string;
};

export type MDASTLinkReferenceNode = MDASTParentNode & {
  type: 'linkReference';
  identifier: string;
  referenceType: 'shortcut' | 'collapsed' | 'full';
};

export type MDASTEmphasisNode = MDASTParentNode & {
  type: 'emphasis';
};

export type MDASTInlineCodeNode = MDASTValueNode & {
  type: 'inlineCode';
};

export type MDASTStrongNode = MDASTParentNode & {
  type: 'strong';
};

export type MDASTStrikethroughNode = MDASTParentNode & {
  type: 'strikethrough';
};

export type MDASTDeleteNode = MDASTParentNode & {
  type: 'deletion';
};

export type MDASTImageNode = {
  type: 'image';
  title: ?string;
  alt: ?string;
  url: string;
};

export type MDASTImageReferenceNode = {
  type: 'imageReference';
  identifier: string;
  referenceType: 'shortcut' | 'collapsed' | 'full';
  alt: ?string;
};

export type MDASTAnyNode
  = MDASTDirectiveNode
  | MDASTRoleNode
  | MDASTListItemNode
  | MDASTListNode
  | MDASTHeadingNode
  | MDASTCodeNode
  | MDASTParagraphNode
  | MDASTBreakNode
  | MDASTHardBreakNode
  | MDASTThematicBreakNode
  | MDASTRuleNode
  | MDASTHTMLNode
  | MDASTYAMLNode
  | MDASTTextNode
  | MDASTFootnoteNode
  | MDASTFootnoteReferenceNode
  | MDASTFootnoteDefinitionNode
  | MDASTTableNode
  | MDASTEmphasisNode
  | MDASTStrikethroughNode
  | MDASTDeleteNode
  | MDASTLinkNode
  | MDASTLinkReferenceNode
  | MDASTInlineCodeNode
  | MDASTImageNode
  | MDASTImageReferenceNode
  | MDASTStrongNode
  | MDASTBlockquoteNode
  | MDASTRootNode
  | MDASTDefinitionNode

export type JSAST = any;
