"use strict";
var __defProp = Object.defineProperty, __defProps = Object.defineProperties, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __getOwnPropDescs = Object.getOwnPropertyDescriptors, __getOwnPropNames = Object.getOwnPropertyNames, __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty, __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: !0, configurable: !0, writable: !0, value }) : obj[key] = value, __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    __hasOwnProp.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b))
      __propIsEnum.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  return a;
}, __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  defaultOptions: () => defaultOptions,
  remarkGnoPlayground: () => remarkGnoPlayground
});
module.exports = __toCommonJS(src_exports);

// node_modules/.pnpm/unist-util-is@6.0.0/node_modules/unist-util-is/lib/index.js
var convert = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  function(test) {
    if (test == null)
      return ok;
    if (typeof test == "function")
      return castFactory(test);
    if (typeof test == "object")
      return Array.isArray(test) ? anyFactory(test) : propsFactory(test);
    if (typeof test == "string")
      return typeFactory(test);
    throw new Error("Expected function, string, or object as test");
  }
);
function anyFactory(tests) {
  let checks = [], index = -1;
  for (; ++index < tests.length; )
    checks[index] = convert(tests[index]);
  return castFactory(any);
  function any(...parameters) {
    let index2 = -1;
    for (; ++index2 < checks.length; )
      if (checks[index2].apply(this, parameters)) return !0;
    return !1;
  }
}
function propsFactory(check) {
  let checkAsRecord = (
    /** @type {Record<string, unknown>} */
    check
  );
  return castFactory(all);
  function all(node) {
    let nodeAsRecord = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      node
    ), key;
    for (key in check)
      if (nodeAsRecord[key] !== checkAsRecord[key]) return !1;
    return !0;
  }
}
function typeFactory(check) {
  return castFactory(type);
  function type(node) {
    return node && node.type === check;
  }
}
function castFactory(testFunction) {
  return check;
  function check(value, index, parent) {
    return !!(looksLikeANode(value) && testFunction.call(
      this,
      value,
      typeof index == "number" ? index : void 0,
      parent || void 0
    ));
  }
}
function ok() {
  return !0;
}
function looksLikeANode(value) {
  return value !== null && typeof value == "object" && "type" in value;
}

// node_modules/.pnpm/unist-util-visit-parents@6.0.1/node_modules/unist-util-visit-parents/lib/color.node.js
function color(d) {
  return "\x1B[33m" + d + "\x1B[39m";
}

// node_modules/.pnpm/unist-util-visit-parents@6.0.1/node_modules/unist-util-visit-parents/lib/index.js
var empty = [], CONTINUE = !0, EXIT = !1, SKIP = "skip";
function visitParents(tree, test, visitor, reverse) {
  let check;
  typeof test == "function" && typeof visitor != "function" ? (reverse = visitor, visitor = test) : check = test;
  let is2 = convert(check), step = reverse ? -1 : 1;
  factory(tree, void 0, [])();
  function factory(node, index, parents) {
    let value = (
      /** @type {Record<string, unknown>} */
      node && typeof node == "object" ? node : {}
    );
    if (typeof value.type == "string") {
      let name = (
        // `hast`
        typeof value.tagName == "string" ? value.tagName : (
          // `xast`
          typeof value.name == "string" ? value.name : void 0
        )
      );
      Object.defineProperty(visit2, "name", {
        value: "node (" + color(node.type + (name ? "<" + name + ">" : "")) + ")"
      });
    }
    return visit2;
    function visit2() {
      let result = empty, subresult, offset, grandparents;
      if ((!test || is2(node, index, parents[parents.length - 1] || void 0)) && (result = toResult(visitor(node, parents)), result[0] === EXIT))
        return result;
      if ("children" in node && node.children) {
        let nodeAsParent = (
          /** @type {UnistParent} */
          node
        );
        if (nodeAsParent.children && result[0] !== SKIP)
          for (offset = (reverse ? nodeAsParent.children.length : -1) + step, grandparents = parents.concat(nodeAsParent); offset > -1 && offset < nodeAsParent.children.length; ) {
            let child = nodeAsParent.children[offset];
            if (subresult = factory(child, offset, grandparents)(), subresult[0] === EXIT)
              return subresult;
            offset = typeof subresult[1] == "number" ? subresult[1] : offset + step;
          }
      }
      return result;
    }
  }
}
function toResult(value) {
  return Array.isArray(value) ? value : typeof value == "number" ? [CONTINUE, value] : value == null ? empty : [value];
}

// node_modules/.pnpm/unist-util-visit@5.0.0/node_modules/unist-util-visit/lib/index.js
function visit(tree, testOrVisitor, visitorOrReverse, maybeReverse) {
  let reverse, test, visitor;
  typeof testOrVisitor == "function" && typeof visitorOrReverse != "function" ? (test = void 0, visitor = testOrVisitor, reverse = visitorOrReverse) : (test = testOrVisitor, visitor = visitorOrReverse, reverse = maybeReverse), visitParents(tree, test, overload, reverse);
  function overload(node, parents) {
    let parent = parents[parents.length - 1], index = parent ? parent.children.indexOf(node) : void 0;
    return visitor(node, index, parent);
  }
}

// src/utils.ts
function serializeObject(obj) {
  return btoa(JSON.stringify(obj));
}
function parseMetaAttributes(meta) {
  return meta.split(" ").reduce((acc, attr) => {
    let [key, value] = attr.split("=");
    return __spreadProps(__spreadValues({}, acc), { [key]: value });
  }, {});
}

// src/plugin.ts
var defaultOptions = {
  lang: "gno",
  playgroundUrl: "https://play.gno.land",
  strategy: "element",
  meta: {
    path: "main.gno",
    height: "500px",
    width: "100%"
  }
};
function remarkGnoPlayground(customOptions = {}) {
  let options = __spreadProps(__spreadValues(__spreadValues({}, defaultOptions), customOptions), {
    meta: __spreadValues(__spreadValues({}, defaultOptions.meta), customOptions.meta)
  }), langRE = new RegExp(`^${options.lang}`);
  return function(tree) {
    visit(tree, "code", (node, index, parent) => {
      let meta = parseMetaAttributes(node.meta || "");
      if (langRE.test(node.lang || "") || "gno-playground" in meta) {
        let nodes = extractConsecutiveCodeBlocks(
          node,
          index,
          parent
        ), tabs = convertNodesToTabs(nodes, options), playgroundUrl = buildPlaygroundUrl(options, tabs, meta), htmlNode = options.strategy === "element" ? createWebComponentNode(tabs, options) : createIframeNode(playgroundUrl, options, meta);
        parent == null || parent.children.splice(index, 1, htmlNode);
      }
    });
  };
}
function buildPlaygroundUrl(options, tabs, meta) {
  let serialized = serializeObject(tabs), url = new URL("/embed/", options.playgroundUrl);
  return url.hash = serialized, meta.hl_lines && url.searchParams.set("highlight", meta.hl_lines), meta.theme && url.searchParams.set("theme", meta.theme), meta.run_expr && url.searchParams.set("run.expr", meta.run_expr), url.toString();
}
function createIframeNode(url, options, meta) {
  var _a, _b, _c, _d;
  let styles = {
    width: (_b = meta.width) != null ? _b : (_a = options.meta) == null ? void 0 : _a.width,
    height: (_d = meta.height) != null ? _d : (_c = options.meta) == null ? void 0 : _c.height,
    border: "0",
    overflow: "hidden"
  }, stylesString = Object.entries(styles).map(([key, value]) => `${key}: ${value}`).join("; ");
  return {
    type: "html",
    value: `<iframe src="${url}" style="${stylesString}"></iframe>`
  };
}
function createWebComponentNode(tabs, options) {
  let files = tabs.reduce((acc, tab) => (acc[tab.path] = tab, acc), {});

  return {
    type: "html",
    value: `<gno-embed-playground files="${btoa(JSON.stringify(files))}"></gno-embed-playground>`
  };
}
function extractConsecutiveCodeBlocks(node, index, parent) {
  var _a, _b, _c;
  let codeBlocks = [node], nextIndex = index + 1, nextNode = parent.children[nextIndex];
  for (; nextNode && nextNode.type === "code"; ) {
    let startLine = (_a = nextNode.position) == null ? void 0 : _a.start.line, endLine = (_c = (_b = node.position) == null ? void 0 : _b.end.line) != null ? _c : -1, isTab = (nextNode == null ? void 0 : nextNode.type) === "code" && nextNode.lang === node.lang, isConsecutive = startLine === endLine + 1;
    if (isTab && isConsecutive)
      parent.children.splice(nextIndex, 1), codeBlocks.push(nextNode);
    else
      break;
    nextNode = parent.children[++nextIndex];
  }
  return codeBlocks;
}
function convertNodesToTabs(nodes, options) {
  var _a, _b;
  let tabs = {};
  for (let node of nodes) {
    let meta = parseMetaAttributes(node.meta || ""), lines = node.value.split(`
`), currentTab = (_b = meta.path) != null ? _b : (_a = options.meta) == null ? void 0 : _a.path;
    for (let line of lines) {
      let match = line.match(/^\/\/=== "(.*)"/);
      match ? (currentTab = match[1], tabs[currentTab] = "") : tabs[currentTab] = `${(tabs[currentTab] || "") + line}
`;
    }
  }
  return Object.entries(tabs).map(([path, content]) => ({ path, content }));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  defaultOptions,
  remarkGnoPlayground
});
