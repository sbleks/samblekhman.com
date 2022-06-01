var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// server.js
__export(exports, {
  handler: () => handler
});
init_react();
var import_netlify2 = __toModule(require("@remix-run/netlify"));

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/samblekhman/code/samblekhman.com/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix3 = __toModule(require_remix());

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-MGH6BJ2D.css";

// app/components/layout.tsx
init_react();
var import_remix2 = __toModule(require_remix());

// app/components/icons.tsx
init_react();

// app/assets/svgs/express.svg
var express_default = "/build/_assets/express-CE3V3MTN.svg";

// app/assets/svgs/git-icon.svg
var git_icon_default = "/build/_assets/git-icon-QOGQ3XGK.svg";

// app/assets/svgs/typescript.svg
var typescript_default = "/build/_assets/typescript-W6XMGNMS.svg";

// app/assets/svgs/mongodb.svg
var mongodb_default = "/build/_assets/mongodb-ERVGQ3XG.svg";

// app/assets/svgs/mysql-icon.svg
var mysql_icon_default = "/build/_assets/mysql-icon-4QXZNVOG.svg";

// app/assets/svgs/nodejs-icon.svg
var nodejs_icon_default = "/build/_assets/nodejs-icon-ZRWYLUY2.svg";

// app/assets/svgs/php-alt.svg
var php_alt_default = "/build/_assets/php-alt-3X3PF6QZ.svg";

// app/assets/svgs/postgresql.svg
var postgresql_default = "/build/_assets/postgresql-CWMSIDLN.svg";

// app/assets/svgs/prisma.svg
var prisma_default = "/build/_assets/prisma-EWNNXNHE.svg";

// app/assets/svgs/sqlite.svg
var sqlite_default = "/build/_assets/sqlite-3IBQY6UF.svg";

// app/assets/svgs/tailwindcss-icon.svg
var tailwindcss_icon_default = "/build/_assets/tailwindcss-icon-ZH3VMO3Y.svg";

// app/assets/svgs/wordpress-icon.svg
var wordpress_icon_default = "/build/_assets/wordpress-icon-BUD365OT.svg";

// app/assets/svgs/javascript.svg
var javascript_default = "/build/_assets/javascript-A3ZSPNZX.svg";

// app/assets/svgs/netlify.svg
var netlify_default = "/build/_assets/netlify-C523KXWX.svg";

// app/assets/svgs/fly.svg
var fly_default = "/build/_assets/fly-VYX4LOQ4.svg";

// app/assets/svgs/react.svg
var react_default = "/build/_assets/react-DEHA6PMK.svg";

// app/assets/svgs/remix-icon.svg
var remix_icon_default = "/build/_assets/remix-icon-7RO5CFFK.svg";

// app/assets/svgs/heroku-icon.svg
var heroku_icon_default = "/build/_assets/heroku-icon-6L2X5YMM.svg";

// app/assets/svgs/react-router.svg
var react_router_default = "/build/_assets/react-router-BQBEI2HF.svg";

// app/components/icons.tsx
var SamBlekhmanLogo = () => {
  return /* @__PURE__ */ React.createElement("svg", {
    className: "aspect-square h-10 text-white"
  }, /* @__PURE__ */ React.createElement("svg", {
    viewBox: "0 0 117.98667 185.42667",
    fill: "currentColor"
  }, /* @__PURE__ */ React.createElement("g", {
    id: "g10",
    transform: "matrix(1.3333333,0,0,-1.3333333,0,185.42667)"
  }, /* @__PURE__ */ React.createElement("g", {
    id: "g12",
    transform: "scale(0.1)"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m 442.43,0.261719 v 0 C 678.559,-7.82031 876.523,177.051 884.602,413.184 892.68,649.313 707.805,847.277 471.676,855.355 c -9.746,0.333 -19.5,0.333 -29.246,0 v 0 c -59.071,1.805 -105.489,51.153 -103.684,110.219 1.731,56.536 47.152,101.956 103.684,103.676 h 133.699 c 14.773,0.91 26.016,13.62 25.113,28.39 -0.828,13.51 -11.601,24.29 -25.113,25.11 H 442.43 c -88.617,0 -160.453,-71.83 -160.453,-160.445 0,-88.614 71.836,-160.45 160.453,-160.45 v 0 C 649.121,798.477 813.941,628.184 810.563,421.488 807.262,219.559 644.359,56.6484 442.43,53.3594 H 68.1289 V 294.359 c -0.9062,14.77 -13.6133,26.012 -28.3867,25.11 -13.5156,-0.828 -24.2891,-11.598 -25.1133,-25.11 V 26.9609 C 14.6836,12.1914 26.6641,0.261719 41.4258,0.261719 Z m 0,267.297281 c 88.613,0 160.449,71.832 160.449,160.445 0,88.613 -71.836,160.449 -160.449,160.449 v 0 C 235.734,591.832 70.918,762.133 74.2969,968.824 77.5977,1170.75 240.496,1333.65 442.43,1336.96 h 374.297 v -240.6 c 0.906,-14.78 13.613,-26.02 28.386,-25.12 13.516,0.83 24.289,11.6 25.114,25.12 v 267.39 c -0.055,14.77 -12.036,26.71 -26.797,26.71 h -401 C 206.297,1398.53 8.33203,1213.66 0.253906,977.527 -7.82031,741.398 177.055,543.43 413.184,535.355 c 9.746,-0.332 19.5,-0.332 29.246,0 v 0 C 501.492,533.551 547.914,484.199 546.105,425.133 544.379,368.609 498.957,323.18 442.43,321.461 H 308.727 c -14.774,-0.91 -26.016,-13.621 -25.114,-28.391 0.828,-13.511 11.602,-24.289 25.114,-25.109 H 442.43 Z m 294.097,828.801 c -0.902,-14.78 -13.613,-26.02 -28.386,-25.12 -13.512,0.83 -24.286,11.6 -25.114,25.12 v 107 H 442.43 C 309.52,1200.64 203.973,1090.71 206.684,957.801 209.313,828.707 313.336,724.688 442.43,722.055 v 0 C 604.828,725.051 738.906,595.828 741.902,433.43 744.898,271.031 615.676,136.949 453.273,133.961 c -3.613,-0.07 -7.23,-0.07 -10.843,0 H 175.129 c -14.746,-0.063 -26.746,11.848 -26.801,26.598 0,0.031 0,0.062 0,0.101 v 133.699 c 0.902,14.77 13.613,26.012 28.387,25.11 13.512,-0.828 24.285,-11.598 25.113,-25.11 v -107 H 442.43 C 575.336,190.059 680.883,300 678.172,432.91 675.539,562.004 571.52,666.023 442.43,668.656 v 0 C 280.027,665.66 145.949,794.883 142.953,957.281 c -2.992,162.399 126.231,296.479 288.629,299.469 3.613,0.07 7.231,0.07 10.848,0 h 267.398 c 14.746,0 26.699,-11.95 26.699,-26.7 v -133.69",
    id: "path14"
  })))));
};
var MENU = () => /* @__PURE__ */ React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  className: "h-6 w-6",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, /* @__PURE__ */ React.createElement("path", {
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M4 6h16M4 12h16M4 18h16"
}));
var svgLookup = {
  Express: express_default,
  Git: git_icon_default,
  Typescript: typescript_default,
  MongoDB: mongodb_default,
  MySQL: mysql_icon_default,
  NodeJS: nodejs_icon_default,
  php: php_alt_default,
  Postgres: postgresql_default,
  Prisma: prisma_default,
  SQLite: sqlite_default,
  "Tailwind CSS": tailwindcss_icon_default,
  WordPress: wordpress_icon_default,
  Javascript: javascript_default,
  Netlify: netlify_default,
  Fly: fly_default,
  React: react_default,
  Remix: remix_icon_default,
  "React Router": react_router_default,
  Heroku: heroku_icon_default
};

// app/components/layout.tsx
var import_react2 = __toModule(require("@chakra-ui/react"));
var import_react3 = __toModule(require("react"));
function Layout({ children }) {
  const location = (0, import_remix2.useLocation)();
  const isAEPi = location.pathname.indexOf("aepi") > 0;
  return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("header", null, /* @__PURE__ */ import_react3.default.createElement("nav", {
    className: "mb-8 text-white"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "flex w-full items-center justify-between p-6"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "flex items-center justify-between"
  }, /* @__PURE__ */ import_react3.default.createElement(import_remix2.Link, {
    to: "/"
  }, /* @__PURE__ */ import_react3.default.createElement(SamBlekhmanLogo, null)), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "ml-10 hidden space-x-8 sm:block"
  }, /* @__PURE__ */ import_react3.default.createElement(import_remix2.Link, {
    to: "/portfolio"
  }, "Portfolio"), isAEPi ? /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("span", null, "|"), /* @__PURE__ */ import_react3.default.createElement(import_remix2.Link, {
    to: "/aepi"
  }, "Donation Link Generator"), /* @__PURE__ */ import_react3.default.createElement(import_remix2.Link, {
    to: "/aepi/events"
  }, "Event Registration")) : null)), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "block text-white sm:hidden "
  }, /* @__PURE__ */ import_react3.default.createElement(DrawerExample, null))))), /* @__PURE__ */ import_react3.default.createElement("main", {
    className: "flex flex-col overflow-hidden md:flex-grow"
  }, children), /* @__PURE__ */ import_react3.default.createElement("footer", null, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "mx-auto max-w-7xl py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "flex justify-center space-x-6 md:order-2"
  }, /* @__PURE__ */ import_react3.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    href: "https://github.com/sbleks",
    className: "text-gray-500 hover:text-gray-400"
  }, /* @__PURE__ */ import_react3.default.createElement("span", {
    className: "sr-only"
  }, "Github"), /* @__PURE__ */ import_react3.default.createElement("svg", {
    className: "h-6 w-6",
    "aria-hidden": "true",
    viewBox: "0 0 256 250",
    fill: "currentColor",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "xMidYMid"
  }, /* @__PURE__ */ import_react3.default.createElement("g", null, /* @__PURE__ */ import_react3.default.createElement("path", {
    d: "M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z",
    fill: "currentColor"
  })))), /* @__PURE__ */ import_react3.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    href: "mailto:sam@bleks.dev",
    className: "text-gray-500 hover:text-gray-400"
  }, /* @__PURE__ */ import_react3.default.createElement("span", {
    className: "sr-only"
  }, "Email"), /* @__PURE__ */ import_react3.default.createElement("svg", {
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /* @__PURE__ */ import_react3.default.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  })))), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "mt-8 md:order-1 md:mt-0"
  }, /* @__PURE__ */ import_react3.default.createElement("p", {
    className: "text-center text-gray-500"
  }, "\xA9 2022 samblekhman.com. All rights reserved.")))));
}
function DrawerExample() {
  const { isOpen, onOpen, onClose } = (0, import_react2.useDisclosure)();
  const btnRef = import_react3.default.useRef(null);
  return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement(import_react2.Button, {
    ref: btnRef,
    bgColor: "transparent",
    colorScheme: "whiteAlpha",
    onClick: onOpen
  }, /* @__PURE__ */ import_react3.default.createElement(MENU, null)), /* @__PURE__ */ import_react3.default.createElement(import_react2.Drawer, {
    isOpen,
    placement: "right",
    onClose,
    finalFocusRef: btnRef,
    size: "full"
  }, /* @__PURE__ */ import_react3.default.createElement(import_react2.DrawerOverlay, null), /* @__PURE__ */ import_react3.default.createElement(import_react2.DrawerContent, {
    bgColor: "gray.800"
  }, /* @__PURE__ */ import_react3.default.createElement(import_react2.DrawerCloseButton, {
    color: "white"
  }), /* @__PURE__ */ import_react3.default.createElement(import_react2.DrawerHeader, {
    color: "white"
  }, /* @__PURE__ */ import_react3.default.createElement(import_remix2.Link, {
    to: "/"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "mt-2"
  }, /* @__PURE__ */ import_react3.default.createElement(SamBlekhmanLogo, null)))), /* @__PURE__ */ import_react3.default.createElement(import_react2.Divider, null), /* @__PURE__ */ import_react3.default.createElement(import_react2.DrawerBody, null, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "flex flex-col space-y-4 text-white"
  }, /* @__PURE__ */ import_react3.default.createElement(import_remix2.Link, {
    reloadDocument: true,
    to: "/"
  }, "Home"), /* @__PURE__ */ import_react3.default.createElement(import_remix2.Link, {
    reloadDocument: true,
    to: "/portfolio"
  }, "Portfolio"))))));
}

// route:/Users/samblekhman/code/samblekhman.com/app/root.tsx
var import_react4 = __toModule(require("@chakra-ui/react"));
var meta = () => {
  return {
    title: "Sam Blekhman",
    "theme-color": "#0f172a",
    description: "My name is Sam Blekhman. I am an operations and technology engineer that believes in making the world a better place. I work with organizations making an impact on both the world as we know it today and, inexorably, on its future."
  };
};
var links = () => {
  return [
    {
      rel: "icon",
      href: "/sfavicon32.png",
      type: "image/png",
      sizes: "32x32"
    },
    {
      rel: "apple-touch-icon",
      href: "/sfavicon180.png",
      sizes: "180x180"
    },
    {
      rel: "icon",
      href: "/sfavicon16.png",
      type: "image/png",
      sizes: "16x16"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Oooh+Baby&display=swap"
    },
    { rel: "stylesheet", href: tailwind_default }
  ];
};
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(import_react4.ChakraProvider, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_remix3.Outlet, null))));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React.createElement(import_react4.ChakraProvider, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "There was an error"), /* @__PURE__ */ React.createElement("p", null, error.message)))));
}
function CatchBoundary() {
  let caught = (0, import_remix3.useCatch)();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ React.createElement("p", {
        className: "text-white"
      }, "Oops! Looks like you tried to visit a page that you do not have access to.");
      break;
    case 404:
      message = /* @__PURE__ */ React.createElement("p", {
        className: "text-white"
      }, "Oops! Looks like you tried to visit a page that does not exist.");
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ React.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React.createElement(import_react4.ChakraProvider, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("h1", {
    className: "text-white"
  }, caught.status, ": ", caught.statusText), message)));
}
function Document({
  children,
  title = "Sam Blekhman"
}) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en",
    className: "dark "
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement("title", null, title), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "dark:bg-slate-900 md:flex md:min-h-screen md:flex-col"
  }, children, /* @__PURE__ */ React.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), /* @__PURE__ */ React.createElement(import_remix3.LiveReload, null)));
}

// route:/Users/samblekhman/code/samblekhman.com/app/routes/demos/actions.tsx
var actions_exports = {};
__export(actions_exports, {
  action: () => action,
  default: () => ActionsDemo,
  meta: () => meta2
});
init_react();
var import_react5 = __toModule(require("react"));
var import_remix4 = __toModule(require_remix());
function meta2() {
  return { title: "Actions Demo" };
}
var action = async ({ request }) => {
  let formData = await request.formData();
  let answer = formData.get("answer");
  if (typeof answer !== "string") {
    return (0, import_remix4.json)("Come on, at least try!", { status: 400 });
  }
  if (answer !== "egg") {
    return (0, import_remix4.json)(`Sorry, ${answer} is not right.`, { status: 400 });
  }
  return (0, import_remix4.redirect)("/demos/correct");
};
function ActionsDemo() {
  let actionMessage = (0, import_remix4.useActionData)();
  let answerRef = (0, import_react5.useRef)(null);
  (0, import_react5.useEffect)(() => {
    if (actionMessage && answerRef.current) {
      answerRef.current.select();
    }
  }, [actionMessage]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "remix__page"
  }, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("h2", null, "Actions!"), /* @__PURE__ */ React.createElement("p", null, "This form submission will send a post request that we handle in our `action` export. Any route can export an action to handle data mutations."), /* @__PURE__ */ React.createElement(import_remix4.Form, {
    method: "post",
    className: "remix__form"
  }, /* @__PURE__ */ React.createElement("h3", null, "Post an Action"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("i", null, "What is more useful when it is broken?")), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("div", null, "Answer:"), /* @__PURE__ */ React.createElement("input", {
    ref: answerRef,
    name: "answer",
    type: "text"
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", null, "Answer!")), actionMessage ? /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, actionMessage)) : null)), /* @__PURE__ */ React.createElement("aside", null, /* @__PURE__ */ React.createElement("h3", null, "Additional Resources"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Guide:", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://remix.run/guides/data-writes"
  }, "Data Writes")), /* @__PURE__ */ React.createElement("li", null, "API:", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://remix.run/api/conventions#action"
  }, "Route Action Export")), /* @__PURE__ */ React.createElement("li", null, "API:", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://remix.run/api/remix#useactiondata"
  }, /* @__PURE__ */ React.createElement("code", null, "useActionData"))))));
}

// route:/Users/samblekhman/code/samblekhman.com/app/routes/demos/correct.tsx
var correct_exports = {};
__export(correct_exports, {
  default: () => NiceWork
});
init_react();
function NiceWork() {
  return /* @__PURE__ */ React.createElement("h1", null, "You got it right!");
}

// route:/Users/samblekhman/code/samblekhman.com/app/routes/demos/params.tsx
var params_exports = {};
__export(params_exports, {
  default: () => Boundaries,
  meta: () => meta3
});
init_react();
var import_remix5 = __toModule(require_remix());
function meta3() {
  return { title: "Boundaries Demo" };
}
function Boundaries() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "remix__page"
  }, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(import_remix5.Outlet, null)), /* @__PURE__ */ React.createElement("aside", null, /* @__PURE__ */ React.createElement("h2", null, "Click these Links"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "."
  }, "Start over")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "one"
  }, "Param: ", /* @__PURE__ */ React.createElement("i", null, "one"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "two"
  }, "Param: ", /* @__PURE__ */ React.createElement("i", null, "two"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "this-record-does-not-exist"
  }, "This will be a 404")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "shh-its-a-secret"
  }, "And this will be 401 Unauthorized")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "kaboom"
  }, "This one will throw an error")))));
}

// route:/Users/samblekhman/code/samblekhman.com/app/routes/demos/params/index.tsx
var params_exports2 = {};
__export(params_exports2, {
  default: () => Boundaries2
});
init_react();
function Boundaries2() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Params"), /* @__PURE__ */ React.createElement("p", null, "When you name a route segment with $ like", " ", /* @__PURE__ */ React.createElement("code", null, "routes/users/$userId.js"), ", the $ segment will be parsed from the URL and sent to your loaders and actions by the same name."), /* @__PURE__ */ React.createElement("h2", null, "Errors"), /* @__PURE__ */ React.createElement("p", null, "When a route throws and error in it's action, loader, or component, Remix automatically catches it, won't even try to render the component, but it will render the route's ErrorBoundary instead. If the route doesn't have one, it will bubble up to the routes above it until it hits the root."), /* @__PURE__ */ React.createElement("p", null, "So be as granular as you want with your error handling."), /* @__PURE__ */ React.createElement("h2", null, "Not Found"), /* @__PURE__ */ React.createElement("p", null, "(and other", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses"
  }, "client errors"), ")"), /* @__PURE__ */ React.createElement("p", null, "Loaders and Actions can throw a ", /* @__PURE__ */ React.createElement("code", null, "Response"), " instead of an error and Remix will render the CatchBoundary instead of the component. This is great when loading data from a database isn't found. As soon as you know you can't render the component normally, throw a 404 response and send your app into the catch boundary. Just like error boundaries, catch boundaries bubble, too."));
}

// route:/Users/samblekhman/code/samblekhman.com/app/routes/demos/params/$id.tsx
var id_exports = {};
__export(id_exports, {
  CatchBoundary: () => CatchBoundary2,
  ErrorBoundary: () => ErrorBoundary2,
  default: () => ParamDemo,
  loader: () => loader,
  meta: () => meta4
});
init_react();
var import_remix6 = __toModule(require_remix());
var loader = async ({ params }) => {
  if (params.id === "this-record-does-not-exist") {
    throw new Response("Not Found", { status: 404 });
  }
  if (params.id === "shh-its-a-secret") {
    throw (0, import_remix6.json)({ webmasterEmail: "hello@remix.run" }, { status: 401 });
  }
  if (params.id === "kaboom") {
    lol();
  }
  return { param: params.id };
};
function ParamDemo() {
  let data = (0, import_remix6.useLoaderData)();
  return /* @__PURE__ */ React.createElement("h1", null, "The param is ", /* @__PURE__ */ React.createElement("i", {
    style: { color: "red" }
  }, data.param));
}
function CatchBoundary2() {
  let caught = (0, import_remix6.useCatch)();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ React.createElement("p", null, "Looks like you tried to visit a page that you do not have access to. Maybe ask the webmaster (", caught.data.webmasterEmail, ") for access.");
    case 404:
      message = /* @__PURE__ */ React.createElement("p", null, "Looks like you tried to visit a page that does not exist.");
    default:
      message = /* @__PURE__ */ React.createElement("p", null, "There was a problem with your request!", /* @__PURE__ */ React.createElement("br", null), caught.status, " ", caught.statusText);
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Oops!"), /* @__PURE__ */ React.createElement("p", null, message), /* @__PURE__ */ React.createElement("p", null, "(Isn't it cool that the user gets to stay in context and try a different link in the parts of the UI that didn't blow up?)"));
}
function ErrorBoundary2({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Error!"), /* @__PURE__ */ React.createElement("p", null, error.message), /* @__PURE__ */ React.createElement("p", null, "(Isn't it cool that the user gets to stay in context and try a different link in the parts of the UI that didn't blow up?)"));
}
var meta4 = ({ data }) => {
  return {
    title: data ? `Param: ${data.param}` : "Oops..."
  };
};

// route:/Users/samblekhman/code/samblekhman.com/app/routes/demos/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => Index,
  links: () => links2,
  meta: () => meta5
});
init_react();
var import_remix7 = __toModule(require_remix());

// app/styles/demos/about.css
var about_default = "/build/_assets/about-GGM5BPB3.css";

// route:/Users/samblekhman/code/samblekhman.com/app/routes/demos/about.tsx
var meta5 = () => {
  return {
    title: "About Remix"
  };
};
var links2 = () => {
  return [{ rel: "stylesheet", href: about_default }];
};
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "about"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "about__intro"
  }, /* @__PURE__ */ React.createElement("h2", null, "About Us"), /* @__PURE__ */ React.createElement("p", null, "Ok, so this page isn't really ", /* @__PURE__ */ React.createElement("em", null, "about us"), ", but we did want to show you a few more things Remix can do."), /* @__PURE__ */ React.createElement("p", null, "Did you notice that things look a little different on this page? The CSS that we import in the route file and include in its", " ", /* @__PURE__ */ React.createElement("code", null, "links"), " export is only included on this route and its children."), /* @__PURE__ */ React.createElement("p", null, "Wait a sec...", /* @__PURE__ */ React.createElement("em", null, "its children"), "? To understand what we mean by this,", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://remix.run/tutorial/4-nested-routes-params"
  }, "read all about nested routes in the docs"), "."), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement(import_remix7.Outlet, null)));
}

// route:/Users/samblekhman/code/samblekhman.com/app/routes/demos/about/index.tsx
var about_exports2 = {};
__export(about_exports2, {
  default: () => AboutIndex
});
init_react();
var import_remix8 = __toModule(require_remix());
function AboutIndex() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "You are looking at the index route for the ", /* @__PURE__ */ React.createElement("code", null, "/about"), " URL segment, but there are nested routes as well!"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, /* @__PURE__ */ React.createElement(import_remix8.Link, {
    to: "whoa"
  }, "Check out one of them here."))));
}

// route:/Users/samblekhman/code/samblekhman.com/app/routes/demos/about/whoa.tsx
var whoa_exports = {};
__export(whoa_exports, {
  default: () => AboutIndex2
});
init_react();
var import_remix9 = __toModule(require_remix());
function AboutIndex2() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Whoa, this is a nested route! We render the ", /* @__PURE__ */ React.createElement("code", null, "/about"), " layout route component, and its ", /* @__PURE__ */ React.createElement("code", null, "Outlet"), " renders our route component. \u{1F92F}"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, /* @__PURE__ */ React.createElement(import_remix9.Link, {
    to: ".."
  }, "Go back to the ", /* @__PURE__ */ React.createElement("code", null, "/about"), " index."))));
}

// route:/Users/samblekhman/code/samblekhman.com/app/routes/portfolio.tsx
var portfolio_exports = {};
__export(portfolio_exports, {
  default: () => portfolio_default,
  links: () => links3,
  meta: () => meta6
});
init_react();

// app/components/projectCard.tsx
init_react();
var import_react6 = __toModule(require("react"));
var import_remix10 = __toModule(require_remix());

// app/assets/jokes.png
var jokes_default = "/build/_assets/jokes-GDFWZKI3.png";

// app/assets/safaribar.png
var safaribar_default = "/build/_assets/safaribar-JBFIYQAY.png";

// app/components/projectCard.tsx
function ProjectCard({
  projectLink = "/",
  projectName = "Jokes App",
  projectImage = jokes_default,
  external = false,
  techstack,
  description
}) {
  return /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "group flex w-full justify-center transition"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "m-2 max-w-2xl overflow-hidden rounded-lg border-gray-700 bg-gray-800 shadow-md md:rounded-xl"
  }, /* @__PURE__ */ import_react6.default.createElement(LinkSwitch, {
    external,
    projectLink
  }, /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, /* @__PURE__ */ import_react6.default.createElement("div", null, /* @__PURE__ */ import_react6.default.createElement("img", {
    className: "",
    src: safaribar_default,
    alt: "product image"
  })), /* @__PURE__ */ import_react6.default.createElement("img", {
    className: "mb-4 h-52 \n            w-full object-cover object-top sm:mb-6 sm:h-72 md:h-72",
    src: projectImage,
    alt: "product image"
  }), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "px-5 pb-5"
  }, /* @__PURE__ */ import_react6.default.createElement("h3", {
    className: "flex items-center text-xl font-semibold tracking-tight text-gray-900 transition dark:text-white md:group-hover:text-blue-400"
  }, projectName, /* @__PURE__ */ import_react6.default.createElement("span", {
    className: "hidden text-blue-400 transition md:group-hover:inline"
  }, /* @__PURE__ */ import_react6.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "inline h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /* @__PURE__ */ import_react6.default.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13 7l5 5m0 0l-5 5m5-5H6"
  })))), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "mt-2 flex flex-wrap items-center space-x-2 sm:space-x-4"
  }, techstack == null ? void 0 : techstack.map((tech) => {
    const iconLink = getTechIcon(tech);
    if (!iconLink)
      return null;
    return /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, /* @__PURE__ */ import_react6.default.createElement("img", {
      key: tech,
      title: tech,
      className: "my-1 h-6 text-white md:my-0",
      src: iconLink,
      alt: tech
    }));
  })), /* @__PURE__ */ import_react6.default.createElement("p", {
    className: "mt-2 text-sm dark:text-gray-100 sm:mt-4 sm:text-base"
  }, description))))));
}
function LinkSwitch({
  external,
  children,
  projectLink
}) {
  if (external === true) {
    return /* @__PURE__ */ import_react6.default.createElement("a", {
      rel: "noopener noreferrer",
      target: "_blank",
      href: projectLink
    }, children);
  } else {
    return /* @__PURE__ */ import_react6.default.createElement(import_remix10.Link, {
      to: projectLink
    }, children);
  }
}
function getTechIcon(tech) {
  const icon = svgLookup[tech];
  if (!icon)
    return null;
  return icon;
}

// app/styles/tailwind.css
var tailwind_default2 = "/build/_assets/tailwind-S34SBA42.css";

// app/assets/aepi.png
var aepi_default = "/build/_assets/aepi-2Z6NR4D5.png";

// app/assets/bpn.png
var bpn_default = "/build/_assets/bpn-DHFAL4OF.png";

// app/assets/jfmemorial.png
var jfmemorial_default = "/build/_assets/jfmemorial-EBZV25VT.png";

// app/assets/rme.png
var rme_default = "/build/_assets/rme-G77W3ZE4.png";

// app/assets/convention.png
var convention_default = "/build/_assets/convention-33ZJDGAH.png";

// app/assets/tulane.png
var tulane_default = "/build/_assets/tulane-VNZXWOHG.png";

// app/assets/samsjokes.png
var samsjokes_default = "/build/_assets/samsjokes-PI4NNNW3.png";

// route:/Users/samblekhman/code/samblekhman.com/app/routes/portfolio.tsx
var links3 = () => {
  return [
    {
      rel: "stylesheet",
      href: tailwind_default2
    }
  ];
};
var meta6 = () => {
  return {
    title: "Portfolio | Sam Blekhman"
  };
};
function portfolio_default() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto mb-6 grid max-w-7xl gap-4 lg:grid-cols-2"
  }, /* @__PURE__ */ React.createElement(ProjectCard, {
    key: "RME",
    external: true,
    projectLink: "https://ratemyestate.organizemypeople.com/",
    projectName: "RateMyEstate",
    projectImage: rme_default,
    techstack: [
      "Javascript",
      "NodeJS",
      "Git",
      "React",
      "React Router",
      "Tailwind CSS",
      "Prisma",
      "MySQL",
      "Netlify"
    ],
    description: "RateMyEstate is a Jamstack web app with a multi-page form wizard and report generator built with Javascript, Netlify, Prisma, and React. The app uses a MySQL database hosted on Heroku for data storage and report generation."
  }), /* @__PURE__ */ React.createElement(ProjectCard, {
    projectLink: "https://sams-jokes.herokuapp.com/",
    projectName: "Sam's Jokes",
    projectImage: samsjokes_default,
    external: true,
    techstack: [
      "Typescript",
      "NodeJS",
      "Git",
      "Remix",
      "React",
      "Prisma",
      "Postgres",
      "Heroku"
    ],
    description: "Sam's Jokes is a full-stack web application written in TypeScript with authentication, sessions cookies, persistent data stores in Postgres, and deployed to Heroku."
  }), /* @__PURE__ */ React.createElement(ProjectCard, {
    key: "AEPi",
    projectLink: "/aepi",
    projectName: "AEPi Donation Link Generator",
    projectImage: aepi_default,
    techstack: [
      "Typescript",
      "NodeJS",
      "Git",
      "Remix",
      "React",
      "Tailwind CSS",
      "Netlify"
    ]
  }), /* @__PURE__ */ React.createElement(ProjectCard, {
    key: "BPN",
    external: true,
    projectLink: "https://bpn.aepi.org/",
    projectName: "AEPi Business & Professional Network",
    projectImage: bpn_default,
    techstack: ["WordPress", "php"]
  }), /* @__PURE__ */ React.createElement(ProjectCard, {
    key: "JF",
    external: true,
    projectLink: "https://www.aepi.org/jim-memorial/",
    projectName: "Jim Fleischer Memorial",
    projectImage: jfmemorial_default,
    techstack: ["WordPress", "php"]
  }), /* @__PURE__ */ React.createElement(ProjectCard, {
    key: "Convention",
    external: true,
    projectLink: "https://www.aepi.org/donateconvention/",
    projectName: "AEPi's 2021 Convention Fundraiser",
    projectImage: convention_default,
    techstack: ["WordPress", "php"]
  }), /* @__PURE__ */ React.createElement(ProjectCard, {
    key: "Tulane",
    external: true,
    projectLink: "https://www.aepi.org/tulanereunion/",
    projectName: "AEPi Tulane Alumni Reunion Landing Page",
    projectImage: tulane_default,
    techstack: ["WordPress", "php"]
  }));
}

// route:/Users/samblekhman/code/samblekhman.com/app/routes/resume.tsx
var resume_exports = {};
__export(resume_exports, {
  default: () => ResumePage
});
init_react();

// app/assets/Resume.png
var Resume_default = "/build/_assets/Resume-ZKSY6K4H.png";

// route:/Users/samblekhman/code/samblekhman.com/app/routes/resume.tsx
function ResumePage() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto mb-10 flex max-w-4xl items-center justify-center px-4"
  }, /* @__PURE__ */ React.createElement("img", {
    src: Resume_default,
    alt: "Sam Blekhman's Resume",
    className: "rounded-lg"
  }));
}

// route:/Users/samblekhman/code/samblekhman.com/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index2,
  links: () => links4
});
init_react();
var import_remix11 = __toModule(require_remix());
var links4 = () => {
  return [
    {
      rel: "stylesheet",
      href: tailwind_default2
    }
  ];
};
function Index2() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "py-24 lg:py-32"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative z-10 mx-auto max-w-7xl pl-4 pr-8 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "font-cursive text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl"
  }, "Sam Blekhman"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-6 max-w-3xl text-xl text-gray-500 dark:text-gray-400"
  }, "Operations and Technology Engineer"))), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", {
    className: "relative mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-7xl lg:ml-auto"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "mb-4 text-3xl font-extrabold text-white"
  }, "About me"), /* @__PURE__ */ React.createElement("div", {
    className: "prose prose-lg mb-6 dark:prose-invert"
  }, /* @__PURE__ */ React.createElement("p", null, "I am an operations and technology engineer that believes in making the world a better place through software. I work with organizations making an impact on both the world as we know it today and, inexorably, on its future."), /* @__PURE__ */ React.createElement("p", null, "You can see some of my work in my", " ", /* @__PURE__ */ React.createElement(import_remix11.Link, {
    to: "/portfolio"
  }, "portfolio"), ". If you would like to get in contact with me about a potential project, email me at", " ", /* @__PURE__ */ React.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    href: "mailto:sam@bleks.dev"
  }, "sam@bleks.dev"), "."))))));
}

// route:/Users/samblekhman/code/samblekhman.com/app/routes/aepi.tsx
var aepi_exports = {};
__export(aepi_exports, {
  CatchBoundary: () => CatchBoundary3,
  default: () => AEPI,
  meta: () => meta7
});
init_react();
var import_remix12 = __toModule(require_remix());
var meta7 = () => {
  return {
    title: "AEPi Utilities | Sam Blekhman",
    description: "Utilities for AEPi made by Sam Blekhman"
  };
};
function AEPI() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex min-h-full flex-grow"
  }, /* @__PURE__ */ React.createElement(import_remix12.Outlet, null));
}
function CatchBoundary3() {
  const caught = (0, import_remix12.useCatch)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "text-white"
  }, "uh oh! from aepi route");
}

// route:/Users/samblekhman/code/samblekhman.com/app/routes/aepi/$aepiutils.tsx
var aepiutils_exports = {};
__export(aepiutils_exports, {
  CatchBoundary: () => CatchBoundary4,
  default: () => AEPiUtil,
  loader: () => loader2
});
init_react();
var import_remix13 = __toModule(require_remix());
var loader2 = async ({ params }) => {
  const param = params.aepiutils;
  if (param !== "events")
    throw new Response("That page does not exist", { status: 404 });
  return {};
};
function AEPiUtil() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "text-white"
  });
}
function CatchBoundary4() {
  const caught = (0, import_remix13.useCatch)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "text-white"
  }, "This page does not exist, please select another tool to use.");
}

// route:/Users/samblekhman/code/samblekhman.com/app/routes/aepi/events.tsx
var events_exports = {};
__export(events_exports, {
  default: () => AEPiEvents
});
init_react();
function AEPiEvents() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "text-white"
  }, "Coming soon");
}

// route:/Users/samblekhman/code/samblekhman.com/app/routes/aepi/index.tsx
var aepi_exports2 = {};
__export(aepi_exports2, {
  action: () => action2,
  default: () => AEPiDonationLinkGenerator
});
init_react();
var import_react7 = __toModule(require("react"));
var import_remix14 = __toModule(require_remix());
var copy = __toModule(require("copy-to-clipboard"));
var action2 = async ({ request }) => {
  let formData = await request.formData();
  let values = Object.fromEntries(formData);
  return constructLink(values);
};
function constructLink(parts) {
  let urlParts = parts;
  delete urlParts.currency;
  let linkKeys = Object.keys(urlParts);
  let urlBase = "https://aepi.org/donate/?";
  let completeURL = urlBase;
  if (!linkKeys.length || linkKeys.length === 0) {
    return;
  }
  for (let key of linkKeys) {
    if (urlParts[key] === "") {
    } else if (linkKeys.indexOf(key) === 0) {
      completeURL += `${key}=${urlParts[key]}`;
    } else {
      completeURL += `&${key}=${urlParts[key]}`;
    }
  }
  return new URL(completeURL);
}
function AEPiDonationLinkGenerator() {
  const transition = (0, import_remix14.useTransition)();
  let constructedLink = (0, import_remix14.useActionData)();
  const [loaded, setLoaded] = (0, import_react7.useState)(false);
  const [currency, setCurrency] = (0, import_react7.useState)("US");
  (0, import_react7.useEffect)(() => {
    transition.state === "submitting" && setLoaded(true);
  }, [transition]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "m-auto flex min-h-full w-full max-w-4xl flex-col items-center justify-center gap-8 p-16 dark:text-gray-50"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl font-semibold"
  }, "AEPi Donation Link Generator"), /* @__PURE__ */ React.createElement(import_remix14.Form, {
    method: "post",
    className: "w-full",
    autoComplete: "off"
  }, /* @__PURE__ */ React.createElement("fieldset", null), /* @__PURE__ */ React.createElement("legend", {
    className: "sr-only"
  }, "Currency"), /* @__PURE__ */ React.createElement("div", {
    className: "mb-4 flex items-center"
  }, /* @__PURE__ */ React.createElement("input", {
    id: "US",
    type: "radio",
    name: "currency",
    value: "US",
    onChange: () => setCurrency("US"),
    checked: currency === "US",
    className: "h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-blue-600 dark:focus:ring-blue-600",
    "aria-labelledby": "US",
    "aria-describedby": "US"
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "US",
    className: "ml-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
  }, "United States")), /* @__PURE__ */ React.createElement("div", {
    className: "mb-4 flex items-center"
  }, /* @__PURE__ */ React.createElement("input", {
    id: "Canada",
    type: "radio",
    name: "currency",
    value: "Canada",
    onChange: () => setCurrency("Canada"),
    checked: currency === "Canada",
    className: "h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-blue-600 dark:focus:ring-blue-600",
    "aria-labelledby": "Canada",
    "aria-describedby": "Canada"
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "Canada",
    className: "ml-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
  }, "Canada")), /* @__PURE__ */ React.createElement("div", {
    className: "group relative z-0 mb-6 w-full"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: currency === "US" ? "campaign" : "canadiancampaign",
    id: currency === "US" ? "campaign" : "canadiancampaign",
    className: "peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500",
    placeholder: " "
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: currency === "US" ? "campaign" : "canadiancampaign",
    className: "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
  }, "Campaign Name")), /* @__PURE__ */ React.createElement("div", {
    className: "group relative z-0 mb-6 w-full"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "fund",
    id: "floating_fund",
    className: "peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500",
    placeholder: " "
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "floating_fund",
    className: "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
  }, "Fund Name")), /* @__PURE__ */ React.createElement("div", {
    className: "grid xl:grid-cols-2 xl:gap-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "group relative z-0 mb-6 w-full"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "number",
    name: "appeal",
    id: "appeal",
    className: "peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500",
    placeholder: " "
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "appeal",
    className: "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
  }, "Appeal ID")), /* @__PURE__ */ React.createElement("div", {
    className: "group relative z-0 mb-6 w-full"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "number",
    name: "pledge",
    id: "pledge",
    className: "peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500",
    placeholder: " "
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "pledge",
    className: "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
  }, "Pledge ID"))), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
  }, "Submit")), /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, loaded === true && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", {
    className: "font-medium"
  }, "Donation link:"), /* @__PURE__ */ React.createElement("p", {
    className: "m-6 break-words rounded-lg bg-gray-100 p-4 font-mono dark:bg-slate-600",
    id: "constructedLink"
  }, constructedLink), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-4"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "clipboard text-md w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto",
    onClick: () => copy.default(constructedLink)
  }, "Copy to clipboard"), /* @__PURE__ */ React.createElement("button", {
    className: "text-md w-full rounded-lg border-2 border-blue-800 px-5 py-2.5 text-center font-semibold text-blue-800 hover:bg-blue-100 focus:ring-4 focus:ring-blue-300 dark:border-2 dark:border-blue-500 dark:text-gray-50 dark:hover:bg-blue-900 dark:focus:ring-blue-600 sm:w-auto",
    onClick: () => window.open(constructedLink)
  }, "Open Link in new page")))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "c6699b42", "entry": { "module": "/build/entry.client-C2GPQV37.js", "imports": ["/build/_shared/chunk-T6FGNKVJ.js", "/build/_shared/chunk-S65HD5WO.js", "/build/_shared/chunk-FVSE6P6F.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-HTYGTG75.js", "imports": ["/build/_shared/chunk-KDAHFKXA.js", "/build/_shared/chunk-IKMFM4LZ.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/aepi": { "id": "routes/aepi", "parentId": "root", "path": "aepi", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/aepi-4LLMGTT2.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": true, "hasErrorBoundary": false }, "routes/aepi/$aepiutils": { "id": "routes/aepi/$aepiutils", "parentId": "routes/aepi", "path": ":aepiutils", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/aepi/$aepiutils-WFARIW7N.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": false }, "routes/aepi/events": { "id": "routes/aepi/events", "parentId": "routes/aepi", "path": "events", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/aepi/events-ZXO6H2FY.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/aepi/index": { "id": "routes/aepi/index", "parentId": "routes/aepi", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/aepi/index-Q7SSCF33.js", "imports": ["/build/_shared/chunk-KDAHFKXA.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/demos/about": { "id": "routes/demos/about", "parentId": "root", "path": "demos/about", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/demos/about-5DORT3WO.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/demos/about/index": { "id": "routes/demos/about/index", "parentId": "routes/demos/about", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/demos/about/index-HYNSTK6B.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/demos/about/whoa": { "id": "routes/demos/about/whoa", "parentId": "routes/demos/about", "path": "whoa", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/demos/about/whoa-JXPI7JGK.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/demos/actions": { "id": "routes/demos/actions", "parentId": "root", "path": "demos/actions", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/demos/actions-L2JMEDBU.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/demos/correct": { "id": "routes/demos/correct", "parentId": "root", "path": "demos/correct", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/demos/correct-NCQX7GVM.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/demos/params": { "id": "routes/demos/params", "parentId": "root", "path": "demos/params", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/demos/params-OTSKJTDC.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/demos/params/$id": { "id": "routes/demos/params/$id", "parentId": "routes/demos/params", "path": ":id", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/demos/params/$id-FDUN3GBP.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/demos/params/index": { "id": "routes/demos/params/index", "parentId": "routes/demos/params", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/demos/params/index-G7XSTFFO.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-WBJENA5H.js", "imports": ["/build/_shared/chunk-Q6IDZHC7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/portfolio": { "id": "routes/portfolio", "parentId": "root", "path": "portfolio", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/portfolio-QALST2QK.js", "imports": ["/build/_shared/chunk-Q6IDZHC7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/resume": { "id": "routes/resume", "parentId": "root", "path": "resume", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/resume-QSBKACM5.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-C6699B42.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/demos/actions": {
    id: "routes/demos/actions",
    parentId: "root",
    path: "demos/actions",
    index: void 0,
    caseSensitive: void 0,
    module: actions_exports
  },
  "routes/demos/correct": {
    id: "routes/demos/correct",
    parentId: "root",
    path: "demos/correct",
    index: void 0,
    caseSensitive: void 0,
    module: correct_exports
  },
  "routes/demos/params": {
    id: "routes/demos/params",
    parentId: "root",
    path: "demos/params",
    index: void 0,
    caseSensitive: void 0,
    module: params_exports
  },
  "routes/demos/params/index": {
    id: "routes/demos/params/index",
    parentId: "routes/demos/params",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: params_exports2
  },
  "routes/demos/params/$id": {
    id: "routes/demos/params/$id",
    parentId: "routes/demos/params",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports
  },
  "routes/demos/about": {
    id: "routes/demos/about",
    parentId: "root",
    path: "demos/about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/demos/about/index": {
    id: "routes/demos/about/index",
    parentId: "routes/demos/about",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: about_exports2
  },
  "routes/demos/about/whoa": {
    id: "routes/demos/about/whoa",
    parentId: "routes/demos/about",
    path: "whoa",
    index: void 0,
    caseSensitive: void 0,
    module: whoa_exports
  },
  "routes/portfolio": {
    id: "routes/portfolio",
    parentId: "root",
    path: "portfolio",
    index: void 0,
    caseSensitive: void 0,
    module: portfolio_exports
  },
  "routes/resume": {
    id: "routes/resume",
    parentId: "root",
    path: "resume",
    index: void 0,
    caseSensitive: void 0,
    module: resume_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/aepi": {
    id: "routes/aepi",
    parentId: "root",
    path: "aepi",
    index: void 0,
    caseSensitive: void 0,
    module: aepi_exports
  },
  "routes/aepi/$aepiutils": {
    id: "routes/aepi/$aepiutils",
    parentId: "routes/aepi",
    path: ":aepiutils",
    index: void 0,
    caseSensitive: void 0,
    module: aepiutils_exports
  },
  "routes/aepi/events": {
    id: "routes/aepi/events",
    parentId: "routes/aepi",
    path: "events",
    index: void 0,
    caseSensitive: void 0,
    module: events_exports
  },
  "routes/aepi/index": {
    id: "routes/aepi/index",
    parentId: "routes/aepi",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: aepi_exports2
  }
};

// server.js
function getLoadContext(event, context) {
  let rawAuthorizationString;
  let netlifyGraphToken;
  if (event.authlifyToken != null) {
    netlifyGraphToken = event.authlifyToken;
  }
  const authHeader = event.headers["authorization"];
  const graphSignatureHeader = event.headers["x-netlify-graph-signature"];
  if (authHeader != null && /Bearer /gi.test(authHeader)) {
    rawAuthorizationString = authHeader.split(" ")[1];
  }
  const loadContext = {
    clientNetlifyGraphAccessToken: rawAuthorizationString,
    netlifyGraphToken,
    netlifyGraphSignature: graphSignatureHeader
  };
  Object.keys(loadContext).forEach((key) => {
    if (loadContext[key] == null) {
      delete loadContext[key];
    }
  });
  return loadContext;
}
var handler = (0, import_netlify2.createRequestHandler)({
  build: server_build_exports,
  getLoadContext,
  mode: "development"
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
/**
 * @remix-run/node v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi8uLi8uLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L1VzZXJzL3NhbWJsZWtobWFuL2NvZGUvc2FtYmxla2htYW4uY29tL2FwcC9yb290LnRzeCIsICIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9sYXlvdXQudHN4IiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL2ljb25zLnRzeCIsICJyb3V0ZTovVXNlcnMvc2FtYmxla2htYW4vY29kZS9zYW1ibGVraG1hbi5jb20vYXBwL3JvdXRlcy9kZW1vcy9hY3Rpb25zLnRzeCIsICJyb3V0ZTovVXNlcnMvc2FtYmxla2htYW4vY29kZS9zYW1ibGVraG1hbi5jb20vYXBwL3JvdXRlcy9kZW1vcy9jb3JyZWN0LnRzeCIsICJyb3V0ZTovVXNlcnMvc2FtYmxla2htYW4vY29kZS9zYW1ibGVraG1hbi5jb20vYXBwL3JvdXRlcy9kZW1vcy9wYXJhbXMudHN4IiwgInJvdXRlOi9Vc2Vycy9zYW1ibGVraG1hbi9jb2RlL3NhbWJsZWtobWFuLmNvbS9hcHAvcm91dGVzL2RlbW9zL3BhcmFtcy9pbmRleC50c3giLCAicm91dGU6L1VzZXJzL3NhbWJsZWtobWFuL2NvZGUvc2FtYmxla2htYW4uY29tL2FwcC9yb3V0ZXMvZGVtb3MvcGFyYW1zLyRpZC50c3giLCAicm91dGU6L1VzZXJzL3NhbWJsZWtobWFuL2NvZGUvc2FtYmxla2htYW4uY29tL2FwcC9yb3V0ZXMvZGVtb3MvYWJvdXQudHN4IiwgInJvdXRlOi9Vc2Vycy9zYW1ibGVraG1hbi9jb2RlL3NhbWJsZWtobWFuLmNvbS9hcHAvcm91dGVzL2RlbW9zL2Fib3V0L2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvc2FtYmxla2htYW4vY29kZS9zYW1ibGVraG1hbi5jb20vYXBwL3JvdXRlcy9kZW1vcy9hYm91dC93aG9hLnRzeCIsICJyb3V0ZTovVXNlcnMvc2FtYmxla2htYW4vY29kZS9zYW1ibGVraG1hbi5jb20vYXBwL3JvdXRlcy9wb3J0Zm9saW8udHN4IiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL3Byb2plY3RDYXJkLnRzeCIsICJyb3V0ZTovVXNlcnMvc2FtYmxla2htYW4vY29kZS9zYW1ibGVraG1hbi5jb20vYXBwL3JvdXRlcy9yZXN1bWUudHN4IiwgInJvdXRlOi9Vc2Vycy9zYW1ibGVraG1hbi9jb2RlL3NhbWJsZWtobWFuLmNvbS9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvc2FtYmxla2htYW4vY29kZS9zYW1ibGVraG1hbi5jb20vYXBwL3JvdXRlcy9hZXBpLnRzeCIsICJyb3V0ZTovVXNlcnMvc2FtYmxla2htYW4vY29kZS9zYW1ibGVraG1hbi5jb20vYXBwL3JvdXRlcy9hZXBpLyRhZXBpdXRpbHMudHN4IiwgInJvdXRlOi9Vc2Vycy9zYW1ibGVraG1hbi9jb2RlL3NhbWJsZWtobWFuLmNvbS9hcHAvcm91dGVzL2FlcGkvZXZlbnRzLnRzeCIsICJyb3V0ZTovVXNlcnMvc2FtYmxla2htYW4vY29kZS9zYW1ibGVraG1hbi5jb20vYXBwL3JvdXRlcy9hZXBpL2luZGV4LnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJpbXBvcnQgeyBjcmVhdGVSZXF1ZXN0SGFuZGxlciB9IGZyb20gXCJAcmVtaXgtcnVuL25ldGxpZnlcIjtcbmltcG9ydCAqIGFzIGJ1aWxkIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjtcblxuLypcbiAqIFJldHVybnMgYSBjb250ZXh0IG9iamVjdCB3aXRoIGF0IG1vc3QgMyBrZXlzOlxuICogIC0gYG5ldGxpZnlHcmFwaFRva2VuYDogcmF3IGF1dGhlbnRpY2F0aW9uIHRva2VuIHRvIHVzZSB3aXRoIE5ldGxpZnkgR3JhcGhcbiAqICAtIGBjbGllbnROZXRsaWZ5R3JhcGhBY2Nlc3NUb2tlbmA6IEZvciB1c2Ugd2l0aCBKV1RzIGdlbmVyYXRlZCBieVxuICogICAgYG5ldGxpZnktZ3JhcGgtYXV0aGAuXG4gKiAgLSBgbmV0bGlmeUdyYXBoU2lnbmF0dXJlYDogYSBzaWduYXR1cmUgZm9yIHN1YnNjcmlwdGlvbiBldmVudHMuIFdpbGwgYmVcbiAqICAgIHByZXNlbnQgaWYgYSBzZWNyZXQgaXMgc2V0LlxuICovXG5mdW5jdGlvbiBnZXRMb2FkQ29udGV4dChldmVudCwgY29udGV4dCkge1xuICBsZXQgcmF3QXV0aG9yaXphdGlvblN0cmluZztcbiAgbGV0IG5ldGxpZnlHcmFwaFRva2VuO1xuXG4gIGlmIChldmVudC5hdXRobGlmeVRva2VuICE9IG51bGwpIHtcbiAgICBuZXRsaWZ5R3JhcGhUb2tlbiA9IGV2ZW50LmF1dGhsaWZ5VG9rZW47XG4gIH1cblxuICBjb25zdCBhdXRoSGVhZGVyID0gZXZlbnQuaGVhZGVyc1tcImF1dGhvcml6YXRpb25cIl07XG4gIGNvbnN0IGdyYXBoU2lnbmF0dXJlSGVhZGVyID0gZXZlbnQuaGVhZGVyc1tcIngtbmV0bGlmeS1ncmFwaC1zaWduYXR1cmVcIl07XG5cbiAgaWYgKGF1dGhIZWFkZXIgIT0gbnVsbCAmJiAvQmVhcmVyIC9naS50ZXN0KGF1dGhIZWFkZXIpKSB7XG4gICAgcmF3QXV0aG9yaXphdGlvblN0cmluZyA9IGF1dGhIZWFkZXIuc3BsaXQoXCIgXCIpWzFdO1xuICB9XG5cbiAgY29uc3QgbG9hZENvbnRleHQgPSB7XG4gICAgY2xpZW50TmV0bGlmeUdyYXBoQWNjZXNzVG9rZW46IHJhd0F1dGhvcml6YXRpb25TdHJpbmcsXG4gICAgbmV0bGlmeUdyYXBoVG9rZW46IG5ldGxpZnlHcmFwaFRva2VuLFxuICAgIG5ldGxpZnlHcmFwaFNpZ25hdHVyZTogZ3JhcGhTaWduYXR1cmVIZWFkZXJcbiAgfTtcblxuICAvLyBSZW1vdmUga2V5cyB3aXRoIHVuZGVmaW5lZCB2YWx1ZXNcbiAgT2JqZWN0LmtleXMobG9hZENvbnRleHQpLmZvckVhY2goa2V5ID0+IHtcbiAgICBpZiAobG9hZENvbnRleHRba2V5XSA9PSBudWxsKSB7XG4gICAgICBkZWxldGUgbG9hZENvbnRleHRba2V5XTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBsb2FkQ29udGV4dDtcbn1cblxuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBjcmVhdGVSZXF1ZXN0SGFuZGxlcih7XG4gIGJ1aWxkLFxuICBnZXRMb2FkQ29udGV4dCxcbiAgbW9kZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlZcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9zYW1ibGVraG1hbi9jb2RlL3NhbWJsZWtobWFuLmNvbS9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvc2FtYmxla2htYW4vY29kZS9zYW1ibGVraG1hbi5jb20vYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9zYW1ibGVraG1hbi9jb2RlL3NhbWJsZWtobWFuLmNvbS9hcHAvcm91dGVzL2RlbW9zL2FjdGlvbnMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9zYW1ibGVraG1hbi9jb2RlL3NhbWJsZWtobWFuLmNvbS9hcHAvcm91dGVzL2RlbW9zL2NvcnJlY3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9zYW1ibGVraG1hbi9jb2RlL3NhbWJsZWtobWFuLmNvbS9hcHAvcm91dGVzL2RlbW9zL3BhcmFtcy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL1VzZXJzL3NhbWJsZWtobWFuL2NvZGUvc2FtYmxla2htYW4uY29tL2FwcC9yb3V0ZXMvZGVtb3MvcGFyYW1zL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvVXNlcnMvc2FtYmxla2htYW4vY29kZS9zYW1ibGVraG1hbi5jb20vYXBwL3JvdXRlcy9kZW1vcy9wYXJhbXMvJGlkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCIvVXNlcnMvc2FtYmxla2htYW4vY29kZS9zYW1ibGVraG1hbi5jb20vYXBwL3JvdXRlcy9kZW1vcy9hYm91dC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiL1VzZXJzL3NhbWJsZWtobWFuL2NvZGUvc2FtYmxla2htYW4uY29tL2FwcC9yb3V0ZXMvZGVtb3MvYWJvdXQvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTggZnJvbSBcIi9Vc2Vycy9zYW1ibGVraG1hbi9jb2RlL3NhbWJsZWtobWFuLmNvbS9hcHAvcm91dGVzL2RlbW9zL2Fib3V0L3dob2EudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTkgZnJvbSBcIi9Vc2Vycy9zYW1ibGVraG1hbi9jb2RlL3NhbWJsZWtobWFuLmNvbS9hcHAvcm91dGVzL3BvcnRmb2xpby50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTAgZnJvbSBcIi9Vc2Vycy9zYW1ibGVraG1hbi9jb2RlL3NhbWJsZWtobWFuLmNvbS9hcHAvcm91dGVzL3Jlc3VtZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTEgZnJvbSBcIi9Vc2Vycy9zYW1ibGVraG1hbi9jb2RlL3NhbWJsZWtobWFuLmNvbS9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMiBmcm9tIFwiL1VzZXJzL3NhbWJsZWtobWFuL2NvZGUvc2FtYmxla2htYW4uY29tL2FwcC9yb3V0ZXMvYWVwaS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTMgZnJvbSBcIi9Vc2Vycy9zYW1ibGVraG1hbi9jb2RlL3NhbWJsZWtobWFuLmNvbS9hcHAvcm91dGVzL2FlcGkvJGFlcGl1dGlscy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTQgZnJvbSBcIi9Vc2Vycy9zYW1ibGVraG1hbi9jb2RlL3NhbWJsZWtobWFuLmNvbS9hcHAvcm91dGVzL2FlcGkvZXZlbnRzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNSBmcm9tIFwiL1VzZXJzL3NhbWJsZWtobWFuL2NvZGUvc2FtYmxla2htYW4uY29tL2FwcC9yb3V0ZXMvYWVwaS9pbmRleC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL2RlbW9zL2FjdGlvbnNcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2RlbW9zL2FjdGlvbnNcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiZGVtb3MvYWN0aW9uc1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvZGVtb3MvY29ycmVjdFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvZGVtb3MvY29ycmVjdFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJkZW1vcy9jb3JyZWN0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9kZW1vcy9wYXJhbXNcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2RlbW9zL3BhcmFtc1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJkZW1vcy9wYXJhbXNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL2RlbW9zL3BhcmFtcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvZGVtb3MvcGFyYW1zL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvZGVtb3MvcGFyYW1zXCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfSxcbiAgXCJyb3V0ZXMvZGVtb3MvcGFyYW1zLyRpZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvZGVtb3MvcGFyYW1zLyRpZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2RlbW9zL3BhcmFtc1wiLFxuICAgICAgcGF0aDogXCI6aWRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL2RlbW9zL2Fib3V0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9kZW1vcy9hYm91dFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJkZW1vcy9hYm91dFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU2XG4gICAgfSxcbiAgXCJyb3V0ZXMvZGVtb3MvYWJvdXQvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2RlbW9zL2Fib3V0L2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvZGVtb3MvYWJvdXRcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTdcbiAgICB9LFxuICBcInJvdXRlcy9kZW1vcy9hYm91dC93aG9hXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9kZW1vcy9hYm91dC93aG9hXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvZGVtb3MvYWJvdXRcIixcbiAgICAgIHBhdGg6IFwid2hvYVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU4XG4gICAgfSxcbiAgXCJyb3V0ZXMvcG9ydGZvbGlvXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wb3J0Zm9saW9cIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicG9ydGZvbGlvXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTlcbiAgICB9LFxuICBcInJvdXRlcy9yZXN1bWVcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Jlc3VtZVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJyZXN1bWVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTBcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTExXG4gICAgfSxcbiAgXCJyb3V0ZXMvYWVwaVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYWVwaVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhZXBpXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEyXG4gICAgfSxcbiAgXCJyb3V0ZXMvYWVwaS8kYWVwaXV0aWxzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hZXBpLyRhZXBpdXRpbHNcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9hZXBpXCIsXG4gICAgICBwYXRoOiBcIjphZXBpdXRpbHNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTNcbiAgICB9LFxuICBcInJvdXRlcy9hZXBpL2V2ZW50c1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYWVwaS9ldmVudHNcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9hZXBpXCIsXG4gICAgICBwYXRoOiBcImV2ZW50c1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxNFxuICAgIH0sXG4gIFwicm91dGVzL2FlcGkvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2FlcGkvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9hZXBpXCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxNVxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgbGV0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgTGluayxcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE1ldGFGdW5jdGlvbixcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbiAgdXNlQ2F0Y2gsXG59IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgc3R5bGVzIGZyb20gJ34vdGFpbHdpbmQuY3NzJ1xuaW1wb3J0IExheW91dCBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnU2FtIEJsZWtobWFuJyxcbiAgICAndGhlbWUtY29sb3InOiAnIzBmMTcyYScsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTXkgbmFtZSBpcyBTYW0gQmxla2htYW4uIEkgYW0gYW4gb3BlcmF0aW9ucyBhbmQgdGVjaG5vbG9neSBlbmdpbmVlciB0aGF0IGJlbGlldmVzIGluIG1ha2luZyB0aGUgd29ybGQgYSBiZXR0ZXIgcGxhY2UuIEkgd29yayB3aXRoIG9yZ2FuaXphdGlvbnMgbWFraW5nIGFuIGltcGFjdCBvbiBib3RoIHRoZSB3b3JsZCBhcyB3ZSBrbm93IGl0IHRvZGF5IGFuZCwgaW5leG9yYWJseSwgb24gaXRzIGZ1dHVyZS4nLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICByZWw6ICdpY29uJyxcbiAgICAgIGhyZWY6ICcvc2Zhdmljb24zMi5wbmcnLFxuICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICBzaXplczogJzMyeDMyJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlbDogJ2FwcGxlLXRvdWNoLWljb24nLFxuICAgICAgaHJlZjogJy9zZmF2aWNvbjE4MC5wbmcnLFxuICAgICAgc2l6ZXM6ICcxODB4MTgwJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlbDogJ2ljb24nLFxuICAgICAgaHJlZjogJy9zZmF2aWNvbjE2LnBuZycsXG4gICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgIHNpemVzOiAnMTZ4MTYnLFxuICAgIH0sXG4gICAge1xuICAgICAgcmVsOiAnc3R5bGVzaGVldCcsXG4gICAgICBocmVmOiAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Pb29oK0JhYnkmZGlzcGxheT1zd2FwJyxcbiAgICB9LFxuICAgIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9LFxuICBdXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8RG9jdW1lbnQ+XG4gICAgICA8Q2hha3JhUHJvdmlkZXI+XG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8L0xheW91dD5cbiAgICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gICAgPC9Eb2N1bWVudD5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSh7IGVycm9yIH06IHsgZXJyb3I6IEVycm9yIH0pIHtcbiAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgcmV0dXJuIChcbiAgICA8RG9jdW1lbnQgdGl0bGU9XCJFcnJvciFcIj5cbiAgICAgIDxDaGFrcmFQcm92aWRlcj5cbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPlRoZXJlIHdhcyBhbiBlcnJvcjwvaDE+XG4gICAgICAgICAgICA8cD57ZXJyb3IubWVzc2FnZX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgICA8L0RvY3VtZW50PlxuICApXG59XG5cbi8vIGh0dHBzOi8vcmVtaXgucnVuL2RvY3MvZW4vdjEvYXBpL2NvbnZlbnRpb25zI2NhdGNoYm91bmRhcnlcbmV4cG9ydCBmdW5jdGlvbiBDYXRjaEJvdW5kYXJ5KCkge1xuICBsZXQgY2F1Z2h0ID0gdXNlQ2F0Y2goKVxuXG4gIGxldCBtZXNzYWdlXG4gIHN3aXRjaCAoY2F1Z2h0LnN0YXR1cykge1xuICAgIGNhc2UgNDAxOlxuICAgICAgbWVzc2FnZSA9IChcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPlxuICAgICAgICAgIE9vcHMhIExvb2tzIGxpa2UgeW91IHRyaWVkIHRvIHZpc2l0IGEgcGFnZSB0aGF0IHlvdSBkbyBub3QgaGF2ZSBhY2Nlc3NcbiAgICAgICAgICB0by5cbiAgICAgICAgPC9wPlxuICAgICAgKVxuICAgICAgYnJlYWtcbiAgICBjYXNlIDQwNDpcbiAgICAgIG1lc3NhZ2UgPSAoXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5cbiAgICAgICAgICBPb3BzISBMb29rcyBsaWtlIHlvdSB0cmllZCB0byB2aXNpdCBhIHBhZ2UgdGhhdCBkb2VzIG5vdCBleGlzdC5cbiAgICAgICAgPC9wPlxuICAgICAgKVxuICAgICAgYnJlYWtcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoY2F1Z2h0LmRhdGEgfHwgY2F1Z2h0LnN0YXR1c1RleHQpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxEb2N1bWVudCB0aXRsZT17YCR7Y2F1Z2h0LnN0YXR1c30gJHtjYXVnaHQuc3RhdHVzVGV4dH1gfT5cbiAgICAgIDxDaGFrcmFQcm92aWRlcj5cbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAge2NhdWdodC5zdGF0dXN9OiB7Y2F1Z2h0LnN0YXR1c1RleHR9XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICB7bWVzc2FnZX1cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICA8L0NoYWtyYVByb3ZpZGVyPlxuICAgIDwvRG9jdW1lbnQ+XG4gIClcbn1cblxuZnVuY3Rpb24gRG9jdW1lbnQoe1xuICBjaGlsZHJlbixcbiAgdGl0bGUgPSAnU2FtIEJsZWtobWFuJyxcbn06IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxuICB0aXRsZT86IHN0cmluZ1xufSkge1xuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiIGNsYXNzTmFtZT1cImRhcmsgXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHkgY2xhc3NOYW1lPVwiZGFyazpiZy1zbGF0ZS05MDAgbWQ6ZmxleCBtZDptaW4taC1zY3JlZW4gbWQ6ZmxleC1jb2xcIj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAgPExpdmVSZWxvYWQgLz5cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBMaW5rLCB1c2VDYXRjaCwgdXNlTG9jYXRpb24gfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IE1FTlUsIFNhbUJsZWtobWFuTG9nbyB9IGZyb20gJy4vaWNvbnMnXG5pbXBvcnQge1xuICBEcmF3ZXIsXG4gIERyYXdlckJvZHksXG4gIERyYXdlckhlYWRlcixcbiAgRHJhd2VyT3ZlcmxheSxcbiAgRHJhd2VyQ29udGVudCxcbiAgRHJhd2VyQ2xvc2VCdXR0b24sXG4gIHVzZURpc2Nsb3N1cmUsXG4gIEJ1dHRvbixcbiAgRGl2aWRlcixcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pIHtcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IGlzQUVQaSA9IGxvY2F0aW9uLnBhdGhuYW1lLmluZGV4T2YoJ2FlcGknKSA+IDBcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJtYi04IHRleHQtd2hpdGVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC02XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIj5cbiAgICAgICAgICAgICAgICA8U2FtQmxla2htYW5Mb2dvIC8+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0xMCBoaWRkZW4gc3BhY2UteC04IHNtOmJsb2NrXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcG9ydGZvbGlvXCI+UG9ydGZvbGlvPC9MaW5rPlxuICAgICAgICAgICAgICAgIHtpc0FFUGkgPyAoXG4gICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj58PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9hZXBpXCI+RG9uYXRpb24gTGluayBHZW5lcmF0b3I8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2FlcGkvZXZlbnRzXCI+RXZlbnQgUmVnaXN0cmF0aW9uPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIHRleHQtd2hpdGUgc206aGlkZGVuIFwiPlxuICAgICAgICAgICAgICA8RHJhd2VyRXhhbXBsZSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG92ZXJmbG93LWhpZGRlbiBtZDpmbGV4LWdyb3dcIj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9tYWluPlxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LTd4bCBweS0xMiBweC00IHNtOnB4LTYgbWQ6ZmxleCBtZDppdGVtcy1jZW50ZXIgbWQ6anVzdGlmeS1iZXR3ZWVuIGxnOnB4LThcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgc3BhY2UteC02IG1kOm9yZGVyLTJcIj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3NibGVrc1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1ncmF5LTQwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5HaXRodWI8L3NwYW4+XG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYgdy02XCJcbiAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjU2IDI1MFwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxnPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0xMjguMDAxMDYsMCBDNTcuMzE3MjkyNiwwIDAsNTcuMzA2Njk0MiAwLDEyOC4wMDEwNiBDMCwxODQuNTU1MjgxIDM2LjY3NjE5OTcsMjMyLjUzNTU0MiA4Ny41MzQ5MzcsMjQ5LjQ2MDg5OSBDOTMuOTMyMDIyMywyNTAuNjQ1Nzc5IDk2LjI4MDU4OCwyNDYuNjg0MTY1IDk2LjI4MDU4OCwyNDMuMzAzMzMzIEM5Ni4yODA1ODgsMjQwLjI1MTA0NSA5Ni4xNjE4ODc4LDIzMC4xNjc4OTkgOTYuMTA2Nzc3LDIxOS40NzIxNzYgQzYwLjQ5Njc1ODUsMjI3LjIxNTIzNSA1Mi45ODI2MjA3LDIwNC4zNjk3MTIgNTIuOTgyNjIwNywyMDQuMzY5NzEyIEM0Ny4xNTk5NTg0LDE4OS41NzQ1OTggMzguNzcwNDA4LDE4NS42NDA1MzggMzguNzcwNDA4LDE4NS42NDA1MzggQzI3LjE1Njg3ODUsMTc3LjY5NjExMyAzOS42NDU4MjA2LDE3Ny44NTkzMjUgMzkuNjQ1ODIwNiwxNzcuODU5MzI1IEM1Mi40OTkzNDE5LDE3OC43NjIyOTMgNTkuMjY3MzY1LDE5MS4wNDk4NyA1OS4yNjczNjUsMTkxLjA0OTg3IEM3MC42ODM3Njc1LDIxMC42MTg0MjMgODkuMjExNTc1MywyMDQuOTYxMDkzIDk2LjUxNTg2ODUsMjAxLjY5MDQ4MiBDOTcuNjY0NzE1NSwxOTMuNDE3NTEyIDEwMC45ODE5NTksMTg3Ljc3MDc4IDEwNC42NDI1ODMsMTg0LjU3NDM1NyBDNzYuMjExNzk5LDE4MS4zMzc2NiA0Ni4zMjQ4MTksMTcwLjM2MjE0NCA0Ni4zMjQ4MTksMTIxLjMxNTcwMiBDNDYuMzI0ODE5LDEwNy4zNDA4ODkgNTEuMzI1MDU4OCw5NS45MjIzNjgyIDU5LjUxMzI0MzcsODYuOTU4MzkzNyBDNTguMTg0MjI2OCw4My43MzQ0MTUyIDUzLjgwMjkyMjksNzAuNzE1NTYyIDYwLjc1MzIzNTQsNTMuMDg0MzYzNiBDNjAuNzUzMjM1NCw1My4wODQzNjM2IDcxLjUwMTk1MDEsNDkuNjQ0MTgxMyA5NS45NjI2NDEyLDY2LjIwNDk1OTUgQzEwNi4xNzI5NjcsNjMuMzY4ODc2IDExNy4xMjMwNDcsNjEuOTQ2NTk0OSAxMjguMDAxMDYsNjEuODk3ODQzMiBDMTM4Ljg3OTA3Myw2MS45NDY1OTQ5IDE0OS44Mzc2MzIsNjMuMzY4ODc2IDE2MC4wNjcwMzMsNjYuMjA0OTU5NSBDMTg0LjQ5ODA1LDQ5LjY0NDE4MTMgMTk1LjIzMTkyNiw1My4wODQzNjM2IDE5NS4yMzE5MjYsNTMuMDg0MzYzNiBDMjAyLjE5OTE5Nyw3MC43MTU1NjIgMTk3LjgxNTc3Myw4My43MzQ0MTUyIDE5Ni40ODY3NTYsODYuOTU4MzkzNyBDMjA0LjY5NDAxOCw5NS45MjIzNjgyIDIwOS42NjAzNDMsMTA3LjM0MDg4OSAyMDkuNjYwMzQzLDEyMS4zMTU3MDIgQzIwOS42NjAzNDMsMTcwLjQ3ODcyNSAxNzkuNzE2MTMzLDE4MS4zMDM3NDcgMTUxLjIxMzI4MSwxODQuNDcyNjE0IEMxNTUuODA0NDMsMTg4LjQ0NDgyOCAxNTkuODk1MzQyLDE5Ni4yMzQ1MTggMTU5Ljg5NTM0MiwyMDguMTc2NTkzIEMxNTkuODk1MzQyLDIyNS4zMDMzMTcgMTU5Ljc0Njk2OCwyMzkuMDg3MzYxIDE1OS43NDY5NjgsMjQzLjMwMzMzMyBDMTU5Ljc0Njk2OCwyNDYuNzA5NjAxIDE2Mi4wNTEwMiwyNTAuNzAwODkgMTY4LjUzOTI1LDI0OS40NDM5NDEgQzIxOS4zNzA0MzIsMjMyLjQ5OTUwNyAyNTYsMTg0LjUzNjIwNCAyNTYsMTI4LjAwMTA2IEMyNTYsNTcuMzA2Njk0MiAxOTguNjkxMTg3LDAgMTI4LjAwMTA2LDAgWiBNNDcuOTQwNTU5MywxODIuMzQwMjEyIEM0Ny42NTg2NDY1LDE4Mi45NzYxMDUgNDYuNjU4MTc0NSwxODMuMTY2ODczIDQ1Ljc0NjcyNzcsMTgyLjczMDIyNyBDNDQuODE4MzIzNSwxODIuMzEyNjU2IDQ0LjI5Njg5MTQsMTgxLjQ0NTcyMiA0NC41OTc4ODA4LDE4MC44MDc3MSBDNDQuODczNDM0NCwxODAuMTUyNzM5IDQ1Ljg3NjAyNiwxNzkuOTcwNDUgNDYuODAyMzEwMywxODAuNDA5MjE2IEM0Ny43MzI4MzQyLDE4MC44MjY3ODYgNDguMjYyNzQ1MSwxODEuNzAyMTk5IDQ3Ljk0MDU1OTMsMTgyLjM0MDIxMiBaIE01NC4yMzY3ODkyLDE4Ny45NTgyNTQgQzUzLjYyNjMzMTgsMTg4LjUyNDE5OSA1Mi40MzI5NzIzLDE4OC4yNjEzNjMgNTEuNjIzMjY4MiwxODcuMzY2ODc0IEM1MC43ODYwMDg4LDE4Ni40NzQ1MDQgNTAuNjI5MTU1MywxODUuMjgxMTQ0IDUxLjI0ODA5MTIsMTg0LjcwNjcyIEM1MS44Nzc2MjU0LDE4NC4xNDA3NzUgNTMuMDM0OTUxMiwxODQuNDA1NzMxIDUzLjg3NDMzMDIsMTg1LjI5ODEwMSBDNTQuNzExNTg5MiwxODYuMjAxMDY5IDU0Ljg3NDgwMTksMTg3LjM4NTk1IDU0LjIzNjc4OTIsMTg3Ljk1ODI1NCBaIE01OC41NTYyNDEzLDE5NS4xNDYzNDcgQzU3Ljc3MTk3MzIsMTk1LjY5MTA5NiA1Ni40ODk1ODg2LDE5NS4xODAyNjEgNTUuNjk2ODQxNywxOTQuMDQyMDEzIEM1NC45MTI1NzMzLDE5Mi45MDM3NjQgNTQuOTEyNTczMywxOTEuNTM4NzEzIDU1LjcxMzc5OSwxOTAuOTkxODQ1IEM1Ni41MDg2NjUxLDE5MC40NDQ5NzcgNTcuNzcxOTczMiwxOTAuOTM2NzM1IDU4LjU3NTMxODEsMTkyLjA2NjUwNSBDNTkuMzU3NDY2OSwxOTMuMjIzODMgNTkuMzU3NDY2OSwxOTQuNTg4ODggNTguNTU2MjQxMywxOTUuMTQ2MzQ3IFogTTY1Ljg2MTM1OTIsMjAzLjQ3MTE3NCBDNjUuMTU5NzU3MSwyMDQuMjQ0ODQ2IDYzLjY2NTQwODMsMjA0LjAzNzEyIDYyLjU3MTY3MTcsMjAyLjk4MTUzOCBDNjEuNDUyNDk5OSwyMDEuOTQ5MjcgNjEuMTQwOTEyMiwyMDAuNDg0NTk2IDYxLjg0NDYzNDEsMTk5LjcxMDkyNiBDNjIuNTU0NzE0NiwxOTguOTM1MTM3IDY0LjA1NzU0MjIsMTk5LjE1MzQ2IDY1LjE1OTc1NzEsMjAwLjIwMDU2NCBDNjYuMjcwNDUwNiwyMDEuMjMwNzEyIDY2LjYwOTU5MzYsMjAyLjcwNTk4NCA2NS44NjEzNTkyLDIwMy40NzExNzQgWiBNNzUuMzAyNTE1MSwyMDYuMjgxNTQyIEM3NC45OTMwNDc0LDIwNy4yODQxMzQgNzMuNTUzODA5LDIwNy43Mzk4NTcgNzIuMTAzOTcyNCwyMDcuMzEzODA5IEM3MC42NTYyNTU2LDIwNi44NzUwNDMgNjkuNzA4Nzc0OCwyMDUuNzAwNzYxIDcwLjAwMTI4NTcsMjA0LjY4NzU3MSBDNzAuMzAyMjc1LDIwMy42Nzg2MjEgNzEuNzQ3ODcyMSwyMDMuMjAzODIgNzMuMjA4MzA2OSwyMDMuNjU5NTQzIEM3NC42NTM5MDQxLDIwNC4wOTYxOSA3NS42MDM1MDQ4LDIwNS4yNjE5OTQgNzUuMzAyNTE1MSwyMDYuMjgxNTQyIFogTTg2LjA0Njk0NywyMDcuNDczNjI3IEM4Ni4wODI5ODA2LDIwOC41MjkyMDkgODQuODUzNTg3MSwyMDkuNDA0NjIyIDgzLjMzMTY4MjksMjA5LjQyMzcgQzgxLjgwMTMsMjA5LjQ1NzYxNCA4MC41NjM0MjgsMjA4LjYwMzM5OCA4MC41NDY0NzA4LDIwNy41NjQ3NzIgQzgwLjU0NjQ3MDgsMjA2LjQ5ODU5MSA4MS43NDgzMDg4LDIwNS42MzE2NTcgODMuMjc4NjkxNywyMDUuNjA2MjIxIEM4NC44MDA1OTYyLDIwNS41NzY1NDYgODYuMDQ2OTQ3LDIwNi40MjQ0MDMgODYuMDQ2OTQ3LDIwNy40NzM2MjcgWiBNOTYuNjAyMTQ3MSwyMDcuMDY5MDIzIEM5Ni43ODQ0MzY2LDIwOC4wOTkxNzEgOTUuNzI2NzM0MSwyMDkuMTU2ODcyIDk0LjIxNTQyOCwyMDkuNDM4Nzg1IEM5Mi43Mjk1NTc3LDIwOS43MTAwOTkgOTEuMzUzOTA4NiwyMDkuMDc0MjA2IDkxLjE2NTI2MDMsMjA4LjA1MjUzOCBDOTAuOTgwODUxNSwyMDYuOTk2OTU1IDkyLjA1NzYzMDYsMjA1LjkzOTI1MyA5My41NDEzODEzLDIwNS42NjU4MiBDOTUuMDU0ODA3LDIwNS40MDI5ODQgOTYuNDA5MjU5NiwyMDYuMDIxOTE5IDk2LjYwMjE0NzEsMjA3LjA2OTAyMyBaXCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICB7LyogPGFcbiAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vc2FtYmxla2htYW4vXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LWdyYXktNDAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkxpbmtlZGluPC9zcGFuPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC02IHctNlwiXG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI1NiAyNTBcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgIHZlcnNpb249XCIxLjFcIlxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Zz5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMjE4LjEyMzEyMiwyMTguMTI3MzkyIEwxODAuMTkxOTI4LDIxOC4xMjczOTIgTDE4MC4xOTE5MjgsMTU4LjcyNDI2MyBDMTgwLjE5MTkyOCwxNDQuNTU5MDIzIDE3OS45MzkwNTMsMTI2LjMyMzk5MyAxNjAuNDYzNzU2LDEyNi4zMjM5OTMgQzE0MC43MDc5MjYsMTI2LjMyMzk5MyAxMzcuNjg1Mjg0LDE0MS43NTc1ODUgMTM3LjY4NTI4NCwxNTcuNjkyOTg2IEwxMzcuNjg1Mjg0LDIxOC4xMjM0NDEgTDk5Ljc1NDA4OTQsMjE4LjEyMzQ0MSBMOTkuNzU0MDg5NCw5NS45NjY1MjA3IEwxMzYuMTY4MDM2LDk1Ljk2NjUyMDcgTDEzNi4xNjgwMzYsMTEyLjY2MDU2MiBMMTM2LjY3NzczNiwxMTIuNjYwNTYyIEMxNDQuMTAyNzQ2LDk5Ljk2NTAwMjcgMTU3LjkwODYzNyw5Mi4zODI0NTI4IDE3Mi42MDU2ODksOTIuOTI4MDA3NiBDMjExLjA1MDUzNSw5Mi45MjgwMDc2IDIxOC4xMzg5MjcsMTE4LjIxNjAyMyAyMTguMTM4OTI3LDE1MS4xMTQxNTEgTDIxOC4xMjMxMjIsMjE4LjEyNzM5MiBaIE01Ni45NTUwNTg3LDc5LjI2ODUyODIgQzQ0Ljc5ODE5NjksNzkuMjcwNzA5OSAzNC45NDEzNDQzLDY5LjQxNzE3OTcgMzQuOTM5MTYxOCw1Ny4yNjAwNTIgQzM0LjkzNjk4LDQ1LjEwMjkyNDQgNDQuNzkwMjk0OCwzNS4yNDU4NTYyIDU2Ljk0NzE1NjYsMzUuMjQzNjczNiBDNjkuMTA0MDE4NSwzNS4yNDE0OTE2IDc4Ljk2MDg3MTMsNDUuMDk1MDIxNyA3OC45NjMwNTQsNTcuMjUyMTQ5MyBDNzguOTY0MTAxNyw2My4wOTAyMDggNzYuNjQ1OTk3Niw2OC42ODk1NzE0IDcyLjUxODY5NzksNzIuODE4NDQzMyBDNjguMzkxMzk4Miw3Ni45NDczMTUzIDYyLjc5Mjk4OTgsNzkuMjY3NDggNTYuOTU1MDU4Nyw3OS4yNjg1MjgyIE03NS45MjA2NTU4LDIxOC4xMjczOTIgTDM3Ljk0OTk1LDIxOC4xMjczOTIgTDM3Ljk0OTk1LDk1Ljk2NjUyMDcgTDc1LjkyMDY1NTgsOTUuOTY2NTIwNyBMNzUuOTIwNjU1OCwyMTguMTI3MzkyIFogTTIzNy4wMzM0MDMsMC4wMTgyNTc3MDkxIEwxOC44ODk1MjQ5LDAuMDE4MjU3NzA5MSBDOC41Nzk1OTQ2OSwtMC4wOTgwOTIzOTcxIDAuMTI0ODI3MDM4LDguMTYwNTYyMzEgLTAuMDAxLDE4LjQ3MDYwNjYgTC0wLjAwMSwyMzcuNTI0MDkxIEMwLjEyMDUxOTA1MiwyNDcuODM5MTAzIDguNTc0NjA2MzEsMjU2LjEwNTkzNCAxOC44ODk1MjQ5LDI1NS45OTc3IEwyMzcuMDMzNDAzLDI1NS45OTc3IEMyNDcuMzY4NzI4LDI1Ni4xMjU4MTggMjU1Ljg1NTkyMiwyNDcuODU5NDY0IDI1NS45OTksMjM3LjUyNDA5MSBMMjU1Ljk5OSwxOC40NTQ4MDE2IEMyNTUuODUxNjI0LDguMTI0Mzg5NzkgMjQ3LjM2Mzc0MiwtMC4xMzM3OTI4NjggMjM3LjAzMzQwMywwLjAwMDc5MDgwNzA1NVwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9hPiAqL31cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICBocmVmPVwibWFpbHRvOnNhbUBibGVrcy5kZXZcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtZ3JheS00MDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+RW1haWw8L3NwYW4+XG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNiB3LTZcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgICBkPVwiTTMgOGw3Ljg5IDUuMjZhMiAyIDAgMDAyLjIyIDBMMjEgOE01IDE5aDE0YTIgMiAwIDAwMi0yVjdhMiAyIDAgMDAtMi0ySDVhMiAyIDAgMDAtMiAydjEwYTIgMiAwIDAwMiAyelwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IG1kOm9yZGVyLTEgbWQ6bXQtMFwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICBcdTAwQTkgMjAyMiBzYW1ibGVraG1hbi5jb20uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb290ZXI+XG4gICAgPC8+XG4gIClcbn1cblxuZnVuY3Rpb24gRHJhd2VyRXhhbXBsZSgpIHtcbiAgY29uc3QgeyBpc09wZW4sIG9uT3Blbiwgb25DbG9zZSB9ID0gdXNlRGlzY2xvc3VyZSgpXG4gIGNvbnN0IGJ0blJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MQnV0dG9uRWxlbWVudD4obnVsbClcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIHJlZj17YnRuUmVmfVxuICAgICAgICBiZ0NvbG9yPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICBjb2xvclNjaGVtZT1cIndoaXRlQWxwaGFcIlxuICAgICAgICBvbkNsaWNrPXtvbk9wZW59XG4gICAgICA+XG4gICAgICAgIDxNRU5VIC8+XG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxEcmF3ZXJcbiAgICAgICAgaXNPcGVuPXtpc09wZW59XG4gICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcbiAgICAgICAgb25DbG9zZT17b25DbG9zZX1cbiAgICAgICAgZmluYWxGb2N1c1JlZj17YnRuUmVmfVxuICAgICAgICBzaXplPVwiZnVsbFwiXG4gICAgICA+XG4gICAgICAgIDxEcmF3ZXJPdmVybGF5IC8+XG4gICAgICAgIDxEcmF3ZXJDb250ZW50IGJnQ29sb3I9XCJncmF5LjgwMFwiPlxuICAgICAgICAgIDxEcmF3ZXJDbG9zZUJ1dHRvbiBjb2xvcj1cIndoaXRlXCIgLz5cbiAgICAgICAgICA8RHJhd2VySGVhZGVyIGNvbG9yPVwid2hpdGVcIj5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTJcIj5cbiAgICAgICAgICAgICAgICA8U2FtQmxla2htYW5Mb2dvIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvRHJhd2VySGVhZGVyPlxuICAgICAgICAgIDxEaXZpZGVyPjwvRGl2aWRlcj5cbiAgICAgICAgICA8RHJhd2VyQm9keT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTQgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICA8TGluayByZWxvYWREb2N1bWVudCB0bz1cIi9cIj5cbiAgICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPExpbmsgcmVsb2FkRG9jdW1lbnQgdG89XCIvcG9ydGZvbGlvXCI+XG4gICAgICAgICAgICAgICAgUG9ydGZvbGlvXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRHJhd2VyQm9keT5cbiAgICAgICAgPC9EcmF3ZXJDb250ZW50PlxuICAgICAgPC9EcmF3ZXI+XG4gICAgPC8+XG4gIClcbn1cbiIsICJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IGZzIGZyb20gJ2ZzL3Byb21pc2VzJ1xuXG5pbXBvcnQgZXhwcmVzc0ljb24gZnJvbSAnfi9hc3NldHMvc3Zncy9leHByZXNzLnN2ZydcbmltcG9ydCBnaXRJY29uIGZyb20gJ34vYXNzZXRzL3N2Z3MvZ2l0LWljb24uc3ZnJ1xuaW1wb3J0IHR5cGVzY3JpcHRJY29uIGZyb20gJ34vYXNzZXRzL3N2Z3MvdHlwZXNjcmlwdC5zdmcnXG5pbXBvcnQgbW9uZ29kYkljb24gZnJvbSAnfi9hc3NldHMvc3Zncy9tb25nb2RiLnN2ZydcbmltcG9ydCBteXNxbEljb24gZnJvbSAnfi9hc3NldHMvc3Zncy9teXNxbC1pY29uLnN2ZydcbmltcG9ydCBub2RlanNJY29uIGZyb20gJ34vYXNzZXRzL3N2Z3Mvbm9kZWpzLWljb24uc3ZnJ1xuaW1wb3J0IHBocEljb24gZnJvbSAnfi9hc3NldHMvc3Zncy9waHAtYWx0LnN2ZydcbmltcG9ydCBwb3N0Z3Jlc3FsSWNvbiBmcm9tICd+L2Fzc2V0cy9zdmdzL3Bvc3RncmVzcWwuc3ZnJ1xuaW1wb3J0IHByaXNtYUljb24gZnJvbSAnfi9hc3NldHMvc3Zncy9wcmlzbWEuc3ZnJ1xuaW1wb3J0IHNxbGl0ZUljb24gZnJvbSAnfi9hc3NldHMvc3Zncy9zcWxpdGUuc3ZnJ1xuaW1wb3J0IHRhaWx3aW5kSWNvbiBmcm9tICd+L2Fzc2V0cy9zdmdzL3RhaWx3aW5kY3NzLWljb24uc3ZnJ1xuaW1wb3J0IHdvcmRwcmVzc0ljb24gZnJvbSAnfi9hc3NldHMvc3Zncy93b3JkcHJlc3MtaWNvbi5zdmcnXG5pbXBvcnQgamF2YXNjcmlwdEljb24gZnJvbSAnfi9hc3NldHMvc3Zncy9qYXZhc2NyaXB0LnN2ZydcbmltcG9ydCBuZXRsaWZ5SWNvbiBmcm9tICd+L2Fzc2V0cy9zdmdzL25ldGxpZnkuc3ZnJ1xuaW1wb3J0IGZseUljb24gZnJvbSAnfi9hc3NldHMvc3Zncy9mbHkuc3ZnJ1xuaW1wb3J0IHJlYWN0SWNvbiBmcm9tICd+L2Fzc2V0cy9zdmdzL3JlYWN0LnN2ZydcbmltcG9ydCByZW1peEljb24gZnJvbSAnfi9hc3NldHMvc3Zncy9yZW1peC1pY29uLnN2ZydcbmltcG9ydCBoZXJva3VJY29uIGZyb20gJ34vYXNzZXRzL3N2Z3MvaGVyb2t1LWljb24uc3ZnJ1xuaW1wb3J0IHJlYWN0cm91dGVySWNvbiBmcm9tICd+L2Fzc2V0cy9zdmdzL3JlYWN0LXJvdXRlci5zdmcnXG5cbmV4cG9ydCBjb25zdCBTYW1CbGVraG1hbkxvZ28gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyBjbGFzc05hbWU9XCJhc3BlY3Qtc3F1YXJlIGgtMTAgdGV4dC13aGl0ZVwiPlxuICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDExNy45ODY2NyAxODUuNDI2NjdcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+XG4gICAgICAgIDxnIGlkPVwiZzEwXCIgdHJhbnNmb3JtPVwibWF0cml4KDEuMzMzMzMzMywwLDAsLTEuMzMzMzMzMywwLDE4NS40MjY2NylcIj5cbiAgICAgICAgICA8ZyBpZD1cImcxMlwiIHRyYW5zZm9ybT1cInNjYWxlKDAuMSlcIj5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9XCJtIDQ0Mi40MywwLjI2MTcxOSB2IDAgQyA2NzguNTU5LC03LjgyMDMxIDg3Ni41MjMsMTc3LjA1MSA4ODQuNjAyLDQxMy4xODQgODkyLjY4LDY0OS4zMTMgNzA3LjgwNSw4NDcuMjc3IDQ3MS42NzYsODU1LjM1NSBjIC05Ljc0NiwwLjMzMyAtMTkuNSwwLjMzMyAtMjkuMjQ2LDAgdiAwIGMgLTU5LjA3MSwxLjgwNSAtMTA1LjQ4OSw1MS4xNTMgLTEwMy42ODQsMTEwLjIxOSAxLjczMSw1Ni41MzYgNDcuMTUyLDEwMS45NTYgMTAzLjY4NCwxMDMuNjc2IGggMTMzLjY5OSBjIDE0Ljc3MywwLjkxIDI2LjAxNiwxMy42MiAyNS4xMTMsMjguMzkgLTAuODI4LDEzLjUxIC0xMS42MDEsMjQuMjkgLTI1LjExMywyNS4xMSBIIDQ0Mi40MyBjIC04OC42MTcsMCAtMTYwLjQ1MywtNzEuODMgLTE2MC40NTMsLTE2MC40NDUgMCwtODguNjE0IDcxLjgzNiwtMTYwLjQ1IDE2MC40NTMsLTE2MC40NSB2IDAgQyA2NDkuMTIxLDc5OC40NzcgODEzLjk0MSw2MjguMTg0IDgxMC41NjMsNDIxLjQ4OCA4MDcuMjYyLDIxOS41NTkgNjQ0LjM1OSw1Ni42NDg0IDQ0Mi40Myw1My4zNTk0IEggNjguMTI4OSBWIDI5NC4zNTkgYyAtMC45MDYyLDE0Ljc3IC0xMy42MTMzLDI2LjAxMiAtMjguMzg2NywyNS4xMSAtMTMuNTE1NiwtMC44MjggLTI0LjI4OTEsLTExLjU5OCAtMjUuMTEzMywtMjUuMTEgViAyNi45NjA5IEMgMTQuNjgzNiwxMi4xOTE0IDI2LjY2NDEsMC4yNjE3MTkgNDEuNDI1OCwwLjI2MTcxOSBaIG0gMCwyNjcuMjk3MjgxIGMgODguNjEzLDAgMTYwLjQ0OSw3MS44MzIgMTYwLjQ0OSwxNjAuNDQ1IDAsODguNjEzIC03MS44MzYsMTYwLjQ0OSAtMTYwLjQ0OSwxNjAuNDQ5IHYgMCBDIDIzNS43MzQsNTkxLjgzMiA3MC45MTgsNzYyLjEzMyA3NC4yOTY5LDk2OC44MjQgNzcuNTk3NywxMTcwLjc1IDI0MC40OTYsMTMzMy42NSA0NDIuNDMsMTMzNi45NiBoIDM3NC4yOTcgdiAtMjQwLjYgYyAwLjkwNiwtMTQuNzggMTMuNjEzLC0yNi4wMiAyOC4zODYsLTI1LjEyIDEzLjUxNiwwLjgzIDI0LjI4OSwxMS42IDI1LjExNCwyNS4xMiB2IDI2Ny4zOSBjIC0wLjA1NSwxNC43NyAtMTIuMDM2LDI2LjcxIC0yNi43OTcsMjYuNzEgaCAtNDAxIEMgMjA2LjI5NywxMzk4LjUzIDguMzMyMDMsMTIxMy42NiAwLjI1MzkwNiw5NzcuNTI3IC03LjgyMDMxLDc0MS4zOTggMTc3LjA1NSw1NDMuNDMgNDEzLjE4NCw1MzUuMzU1IGMgOS43NDYsLTAuMzMyIDE5LjUsLTAuMzMyIDI5LjI0NiwwIHYgMCBDIDUwMS40OTIsNTMzLjU1MSA1NDcuOTE0LDQ4NC4xOTkgNTQ2LjEwNSw0MjUuMTMzIDU0NC4zNzksMzY4LjYwOSA0OTguOTU3LDMyMy4xOCA0NDIuNDMsMzIxLjQ2MSBIIDMwOC43MjcgYyAtMTQuNzc0LC0wLjkxIC0yNi4wMTYsLTEzLjYyMSAtMjUuMTE0LC0yOC4zOTEgMC44MjgsLTEzLjUxMSAxMS42MDIsLTI0LjI4OSAyNS4xMTQsLTI1LjEwOSBIIDQ0Mi40MyBaIG0gMjk0LjA5Nyw4MjguODAxIGMgLTAuOTAyLC0xNC43OCAtMTMuNjEzLC0yNi4wMiAtMjguMzg2LC0yNS4xMiAtMTMuNTEyLDAuODMgLTI0LjI4NiwxMS42IC0yNS4xMTQsMjUuMTIgdiAxMDcgSCA0NDIuNDMgQyAzMDkuNTIsMTIwMC42NCAyMDMuOTczLDEwOTAuNzEgMjA2LjY4NCw5NTcuODAxIDIwOS4zMTMsODI4LjcwNyAzMTMuMzM2LDcyNC42ODggNDQyLjQzLDcyMi4wNTUgdiAwIEMgNjA0LjgyOCw3MjUuMDUxIDczOC45MDYsNTk1LjgyOCA3NDEuOTAyLDQzMy40MyA3NDQuODk4LDI3MS4wMzEgNjE1LjY3NiwxMzYuOTQ5IDQ1My4yNzMsMTMzLjk2MSBjIC0zLjYxMywtMC4wNyAtNy4yMywtMC4wNyAtMTAuODQzLDAgSCAxNzUuMTI5IGMgLTE0Ljc0NiwtMC4wNjMgLTI2Ljc0NiwxMS44NDggLTI2LjgwMSwyNi41OTggMCwwLjAzMSAwLDAuMDYyIDAsMC4xMDEgdiAxMzMuNjk5IGMgMC45MDIsMTQuNzcgMTMuNjEzLDI2LjAxMiAyOC4zODcsMjUuMTEgMTMuNTEyLC0wLjgyOCAyNC4yODUsLTExLjU5OCAyNS4xMTMsLTI1LjExIHYgLTEwNyBIIDQ0Mi40MyBDIDU3NS4zMzYsMTkwLjA1OSA2ODAuODgzLDMwMCA2NzguMTcyLDQzMi45MSA2NzUuNTM5LDU2Mi4wMDQgNTcxLjUyLDY2Ni4wMjMgNDQyLjQzLDY2OC42NTYgdiAwIEMgMjgwLjAyNyw2NjUuNjYgMTQ1Ljk0OSw3OTQuODgzIDE0Mi45NTMsOTU3LjI4MSBjIC0yLjk5MiwxNjIuMzk5IDEyNi4yMzEsMjk2LjQ3OSAyODguNjI5LDI5OS40NjkgMy42MTMsMC4wNyA3LjIzMSwwLjA3IDEwLjg0OCwwIGggMjY3LjM5OCBjIDE0Ljc0NiwwIDI2LjY5OSwtMTEuOTUgMjYuNjk5LC0yNi43IHYgLTEzMy42OVwiXG4gICAgICAgICAgICAgIGlkPVwicGF0aDE0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L2c+XG4gICAgICA8L3N2Zz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgTUVOVSA9ICgpID0+IChcbiAgPHN2Z1xuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgIGNsYXNzTmFtZT1cImgtNiB3LTZcIlxuICAgIGZpbGw9XCJub25lXCJcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICA+XG4gICAgPHBhdGhcbiAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgZD1cIk00IDZoMTZNNCAxMmgxNk00IDE4aDE2XCJcbiAgICAvPlxuICA8L3N2Zz5cbilcblxuZXhwb3J0IGNvbnN0IHJpZ2h0QXJyb3dJY29uID0gKCkgPT4gKFxuICA8c3ZnXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgY2xhc3NOYW1lPVwiaW5saW5lIGgtNiB3LTZcIlxuICAgIGZpbGw9XCJub25lXCJcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICA+XG4gICAgPHBhdGhcbiAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgZD1cIk0xMyA3bDUgNW0wIDBsLTUgNW01LTVINlwiXG4gICAgLz5cbiAgPC9zdmc+XG4pXG5cbmV4cG9ydCBjb25zdCBzdmdMb29rdXAgPSB7XG4gIEV4cHJlc3M6IGV4cHJlc3NJY29uLFxuICBHaXQ6IGdpdEljb24sXG4gIFR5cGVzY3JpcHQ6IHR5cGVzY3JpcHRJY29uLFxuICBNb25nb0RCOiBtb25nb2RiSWNvbixcbiAgTXlTUUw6IG15c3FsSWNvbixcbiAgTm9kZUpTOiBub2RlanNJY29uLFxuICBwaHA6IHBocEljb24sXG4gIFBvc3RncmVzOiBwb3N0Z3Jlc3FsSWNvbixcbiAgUHJpc21hOiBwcmlzbWFJY29uLFxuICBTUUxpdGU6IHNxbGl0ZUljb24sXG4gICdUYWlsd2luZCBDU1MnOiB0YWlsd2luZEljb24sXG4gIFdvcmRQcmVzczogd29yZHByZXNzSWNvbixcbiAgSmF2YXNjcmlwdDogamF2YXNjcmlwdEljb24sXG4gIE5ldGxpZnk6IG5ldGxpZnlJY29uLFxuICBGbHk6IGZseUljb24sXG4gIFJlYWN0OiByZWFjdEljb24sXG4gIFJlbWl4OiByZW1peEljb24sXG4gICdSZWFjdCBSb3V0ZXInOiByZWFjdHJvdXRlckljb24sXG4gIEhlcm9rdTogaGVyb2t1SWNvbixcbn1cblxuZXhwb3J0IHR5cGUgc3ZnTG9va3VwT2JqZWN0ID0ge1xuICBFeHByZXNzOiBzdHJpbmdcbiAgR2l0OiBzdHJpbmdcbiAgVHlwZXNjcmlwdDogc3RyaW5nXG4gIE1vbmdvREI6IHN0cmluZ1xuICBNeVNRTDogc3RyaW5nXG4gIE5vZGVKUzogc3RyaW5nXG4gIHBocDogc3RyaW5nXG4gIFBvc3RncmVzOiBzdHJpbmdcbiAgUHJpc21hOiBzdHJpbmdcbiAgU1FMaXRlOiBzdHJpbmdcbiAgJ1RhaWx3aW5kIENTUyc6IHN0cmluZ1xuICBXb3JkUHJlc3M6IHN0cmluZ1xuICBKYXZhc2NyaXB0OiBzdHJpbmdcbiAgTmV0bGlmeTogc3RyaW5nXG4gIEZseTogc3RyaW5nXG4gIFJlYWN0OiBzdHJpbmdcbiAgUmVtaXg6IHN0cmluZ1xuICAnUmVhY3QgUm91dGVyJzogc3RyaW5nXG4gIEhlcm9rdTogc3RyaW5nXG59XG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IEZvcm0sIGpzb24sIHVzZUFjdGlvbkRhdGEsIHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhKCkge1xuICByZXR1cm4geyB0aXRsZTogXCJBY3Rpb25zIERlbW9cIiB9O1xufVxuXG4vLyBXaGVuIHlvdXIgZm9ybSBzZW5kcyBhIFBPU1QsIHRoZSBhY3Rpb24gaXMgY2FsbGVkIG9uIHRoZSBzZXJ2ZXIuXG4vLyAtIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9jb252ZW50aW9ucyNhY3Rpb25cbi8vIC0gaHR0cHM6Ly9yZW1peC5ydW4vZ3VpZGVzL2RhdGEtdXBkYXRlc1xuZXhwb3J0IGxldCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGxldCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgbGV0IGFuc3dlciA9IGZvcm1EYXRhLmdldChcImFuc3dlclwiKTtcblxuICAvLyBUeXBpY2FsIGFjdGlvbiB3b3JrZmxvd3Mgc3RhcnQgd2l0aCB2YWxpZGF0aW5nIHRoZSBmb3JtIGRhdGEgdGhhdCBqdXN0IGNhbWVcbiAgLy8gb3ZlciB0aGUgbmV0d29yay4gQ2xpZW50c2lkZSB2YWxpZGF0aW9uIGlzIGZpbmUsIGJ1dCB5b3UgZGVmaW5pdGVseSBuZWVkIGl0XG4gIC8vIHNlcnZlciBzaWRlLiAgSWYgdGhlcmUncyBhIHByb2JsZW0sIHJldHVybiB0aGUgdGhlIGRhdGEgYW5kIHRoZSBjb21wb25lbnRcbiAgLy8gY2FuIHJlbmRlciBpdC5cbiAgaWYgKHR5cGVvZiBhbnN3ZXIgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4ganNvbihcIkNvbWUgb24sIGF0IGxlYXN0IHRyeSFcIiwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgfVxuXG4gIGlmIChhbnN3ZXIgIT09IFwiZWdnXCIpIHtcbiAgICByZXR1cm4ganNvbihgU29ycnksICR7YW5zd2VyfSBpcyBub3QgcmlnaHQuYCwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgfVxuXG4gIC8vIEZpbmFsbHksIGlmIHRoZSBkYXRhIGlzIHZhbGlkLCB5b3UnbGwgdHlwaWNhbGx5IHdyaXRlIHRvIGEgZGF0YWJhc2Ugb3Igc2VuZCBvclxuICAvLyBlbWFpbCBvciBsb2cgdGhlIHVzZXIgaW4sIGV0Yy4gSXQncyByZWNvbW1lbmRlZCB0byByZWRpcmVjdCBhZnRlciBhXG4gIC8vIHN1Y2Nlc3NmdWwgYWN0aW9uLCBldmVuIGlmIGl0J3MgdG8gdGhlIHNhbWUgcGxhY2Ugc28gdGhhdCBub24tSmF2YVNjcmlwdCB3b3JrZmxvd3NcbiAgLy8gZnJvbSB0aGUgYnJvd3NlciBkb2Vzbid0IHJlcG9zdCB0aGUgZGF0YSBpZiB0aGUgdXNlciBjbGlja3MgYmFjay5cbiAgcmV0dXJuIHJlZGlyZWN0KFwiL2RlbW9zL2NvcnJlY3RcIik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBY3Rpb25zRGVtbygpIHtcbiAgLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL3JlbWl4I3VzZWFjdGlvbmRhdGFcbiAgbGV0IGFjdGlvbk1lc3NhZ2UgPSB1c2VBY3Rpb25EYXRhPHN0cmluZz4oKTtcbiAgbGV0IGFuc3dlclJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcblxuICAvLyBUaGlzIGZvcm0gd29ya3Mgd2l0aG91dCBKYXZhU2NyaXB0LCBidXQgd2hlbiB3ZSBoYXZlIEphdmFTY3JpcHQgd2UgY2FuIG1ha2VcbiAgLy8gdGhlIGV4cGVyaWVuY2UgYmV0dGVyIGJ5IHNlbGVjdGluZyB0aGUgaW5wdXQgb24gd3JvbmcgYW5zd2VycyEgR28gYWhlYWQsIGRpc2FibGVcbiAgLy8gSmF2YVNjcmlwdCBpbiB5b3VyIGJyb3dzZXIgYW5kIHNlZSB3aGF0IGhhcHBlbnMuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGFjdGlvbk1lc3NhZ2UgJiYgYW5zd2VyUmVmLmN1cnJlbnQpIHtcbiAgICAgIGFuc3dlclJlZi5jdXJyZW50LnNlbGVjdCgpO1xuICAgIH1cbiAgfSwgW2FjdGlvbk1lc3NhZ2VdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVtaXhfX3BhZ2VcIj5cbiAgICAgIDxtYWluPlxuICAgICAgICA8aDI+QWN0aW9ucyE8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBUaGlzIGZvcm0gc3VibWlzc2lvbiB3aWxsIHNlbmQgYSBwb3N0IHJlcXVlc3QgdGhhdCB3ZSBoYW5kbGUgaW4gb3VyXG4gICAgICAgICAgYGFjdGlvbmAgZXhwb3J0LiBBbnkgcm91dGUgY2FuIGV4cG9ydCBhbiBhY3Rpb24gdG8gaGFuZGxlIGRhdGFcbiAgICAgICAgICBtdXRhdGlvbnMuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiIGNsYXNzTmFtZT1cInJlbWl4X19mb3JtXCI+XG4gICAgICAgICAgPGgzPlBvc3QgYW4gQWN0aW9uPC9oMz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxpPldoYXQgaXMgbW9yZSB1c2VmdWwgd2hlbiBpdCBpcyBicm9rZW4/PC9pPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICA8ZGl2PkFuc3dlcjo8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dCByZWY9e2Fuc3dlclJlZn0gbmFtZT1cImFuc3dlclwiIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uPkFuc3dlciE8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7YWN0aW9uTWVzc2FnZSA/IChcbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8Yj57YWN0aW9uTWVzc2FnZX08L2I+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGFzaWRlPlxuICAgICAgICA8aDM+QWRkaXRpb25hbCBSZXNvdXJjZXM8L2gzPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgR3VpZGU6e1wiIFwifVxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcmVtaXgucnVuL2d1aWRlcy9kYXRhLXdyaXRlc1wiPkRhdGEgV3JpdGVzPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgQVBJOntcIiBcIn1cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3JlbWl4LnJ1bi9hcGkvY29udmVudGlvbnMjYWN0aW9uXCI+XG4gICAgICAgICAgICAgIFJvdXRlIEFjdGlvbiBFeHBvcnRcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIEFQSTp7XCIgXCJ9XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9yZW1peC5ydW4vYXBpL3JlbWl4I3VzZWFjdGlvbmRhdGFcIj5cbiAgICAgICAgICAgICAgPGNvZGU+dXNlQWN0aW9uRGF0YTwvY29kZT5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9hc2lkZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOaWNlV29yaygpIHtcbiAgcmV0dXJuIDxoMT5Zb3UgZ290IGl0IHJpZ2h0ITwvaDE+O1xufVxuIiwgImltcG9ydCB7IHVzZUNhdGNoLCBMaW5rLCBqc29uLCB1c2VMb2FkZXJEYXRhLCBPdXRsZXQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGEoKSB7XG4gIHJldHVybiB7IHRpdGxlOiBcIkJvdW5kYXJpZXMgRGVtb1wiIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvdW5kYXJpZXMoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZW1peF9fcGFnZVwiPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGFzaWRlPlxuICAgICAgICA8aDI+Q2xpY2sgdGhlc2UgTGlua3M8L2gyPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89XCIuXCI+U3RhcnQgb3ZlcjwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwib25lXCI+XG4gICAgICAgICAgICAgIFBhcmFtOiA8aT5vbmU8L2k+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayB0bz1cInR3b1wiPlxuICAgICAgICAgICAgICBQYXJhbTogPGk+dHdvPC9pPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89XCJ0aGlzLXJlY29yZC1kb2VzLW5vdC1leGlzdFwiPlRoaXMgd2lsbCBiZSBhIDQwNDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwic2hoLWl0cy1hLXNlY3JldFwiPkFuZCB0aGlzIHdpbGwgYmUgNDAxIFVuYXV0aG9yaXplZDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwia2Fib29tXCI+VGhpcyBvbmUgd2lsbCB0aHJvdyBhbiBlcnJvcjwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9hc2lkZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyB1c2VDYXRjaCwgTGluaywganNvbiwgdXNlTG9hZGVyRGF0YSwgT3V0bGV0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvdW5kYXJpZXMoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMj5QYXJhbXM8L2gyPlxuICAgICAgPHA+XG4gICAgICAgIFdoZW4geW91IG5hbWUgYSByb3V0ZSBzZWdtZW50IHdpdGggJCBsaWtle1wiIFwifVxuICAgICAgICA8Y29kZT5yb3V0ZXMvdXNlcnMvJHVzZXJJZC5qczwvY29kZT4sIHRoZSAkIHNlZ21lbnQgd2lsbCBiZSBwYXJzZWQgZnJvbVxuICAgICAgICB0aGUgVVJMIGFuZCBzZW50IHRvIHlvdXIgbG9hZGVycyBhbmQgYWN0aW9ucyBieSB0aGUgc2FtZSBuYW1lLlxuICAgICAgPC9wPlxuICAgICAgPGgyPkVycm9yczwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgV2hlbiBhIHJvdXRlIHRocm93cyBhbmQgZXJyb3IgaW4gaXQncyBhY3Rpb24sIGxvYWRlciwgb3IgY29tcG9uZW50LFxuICAgICAgICBSZW1peCBhdXRvbWF0aWNhbGx5IGNhdGNoZXMgaXQsIHdvbid0IGV2ZW4gdHJ5IHRvIHJlbmRlciB0aGUgY29tcG9uZW50LFxuICAgICAgICBidXQgaXQgd2lsbCByZW5kZXIgdGhlIHJvdXRlJ3MgRXJyb3JCb3VuZGFyeSBpbnN0ZWFkLiBJZiB0aGUgcm91dGVcbiAgICAgICAgZG9lc24ndCBoYXZlIG9uZSwgaXQgd2lsbCBidWJibGUgdXAgdG8gdGhlIHJvdXRlcyBhYm92ZSBpdCB1bnRpbCBpdCBoaXRzXG4gICAgICAgIHRoZSByb290LlxuICAgICAgPC9wPlxuICAgICAgPHA+U28gYmUgYXMgZ3JhbnVsYXIgYXMgeW91IHdhbnQgd2l0aCB5b3VyIGVycm9yIGhhbmRsaW5nLjwvcD5cbiAgICAgIDxoMj5Ob3QgRm91bmQ8L2gyPlxuICAgICAgPHA+XG4gICAgICAgIChhbmQgb3RoZXJ7XCIgXCJ9XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL1N0YXR1cyNjbGllbnRfZXJyb3JfcmVzcG9uc2VzXCI+XG4gICAgICAgICAgY2xpZW50IGVycm9yc1xuICAgICAgICA8L2E+XG4gICAgICAgIClcbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBMb2FkZXJzIGFuZCBBY3Rpb25zIGNhbiB0aHJvdyBhIDxjb2RlPlJlc3BvbnNlPC9jb2RlPiBpbnN0ZWFkIG9mIGFuXG4gICAgICAgIGVycm9yIGFuZCBSZW1peCB3aWxsIHJlbmRlciB0aGUgQ2F0Y2hCb3VuZGFyeSBpbnN0ZWFkIG9mIHRoZSBjb21wb25lbnQuXG4gICAgICAgIFRoaXMgaXMgZ3JlYXQgd2hlbiBsb2FkaW5nIGRhdGEgZnJvbSBhIGRhdGFiYXNlIGlzbid0IGZvdW5kLiBBcyBzb29uIGFzXG4gICAgICAgIHlvdSBrbm93IHlvdSBjYW4ndCByZW5kZXIgdGhlIGNvbXBvbmVudCBub3JtYWxseSwgdGhyb3cgYSA0MDQgcmVzcG9uc2VcbiAgICAgICAgYW5kIHNlbmQgeW91ciBhcHAgaW50byB0aGUgY2F0Y2ggYm91bmRhcnkuIEp1c3QgbGlrZSBlcnJvciBib3VuZGFyaWVzLFxuICAgICAgICBjYXRjaCBib3VuZGFyaWVzIGJ1YmJsZSwgdG9vLlxuICAgICAgPC9wPlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCB7IHVzZUNhdGNoLCBMaW5rLCBqc29uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uLCBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcblxuLy8gVGhlIGAkYCBpbiByb3V0ZSBmaWxlbmFtZXMgYmVjb21lcyBhIHBhdHRlcm4gdGhhdCdzIHBhcnNlZCBmcm9tIHRoZSBVUkwgYW5kXG4vLyBwYXNzZWQgdG8geW91ciBsb2FkZXJzIHNvIHlvdSBjYW4gbG9vayB1cCBkYXRhLlxuLy8gLSBodHRwczovL3JlbWl4LnJ1bi9hcGkvY29udmVudGlvbnMjbG9hZGVyLXBhcmFtc1xuZXhwb3J0IGxldCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgLy8gcHJldGVuZCBsaWtlIHdlJ3JlIHVzaW5nIHBhcmFtcy5pZCB0byBsb29rIHNvbWV0aGluZyB1cCBpbiB0aGUgZGJcblxuICBpZiAocGFyYW1zLmlkID09PSBcInRoaXMtcmVjb3JkLWRvZXMtbm90LWV4aXN0XCIpIHtcbiAgICAvLyBJZiB0aGUgcmVjb3JkIGRvZXNuJ3QgZXhpc3Qgd2UgY2FuJ3QgcmVuZGVyIHRoZSByb3V0ZSBub3JtYWxseSwgc29cbiAgICAvLyBpbnN0ZWFkIHdlIHRocm93IGEgNDA0IHJlcG9uc2UgdG8gc3RvcCBydW5uaW5nIGNvZGUgaGVyZSBhbmQgc2hvdyB0aGVcbiAgICAvLyB1c2VyIHRoZSBjYXRjaCBib3VuZGFyeS5cbiAgICB0aHJvdyBuZXcgUmVzcG9uc2UoXCJOb3QgRm91bmRcIiwgeyBzdGF0dXM6IDQwNCB9KTtcbiAgfVxuXG4gIC8vIG5vdyBwcmV0ZW5kIGxpa2UgdGhlIHJlY29yZCBleGlzdHMgYnV0IHRoZSB1c2VyIGp1c3QgaXNuJ3QgYXV0aG9yaXplZCB0b1xuICAvLyBzZWUgaXQuXG4gIGlmIChwYXJhbXMuaWQgPT09IFwic2hoLWl0cy1hLXNlY3JldFwiKSB7XG4gICAgLy8gQWdhaW4sIHdlIGNhbid0IHJlbmRlciB0aGUgY29tcG9uZW50IGlmIHRoZSB1c2VyIGlzbid0IGF1dGhvcml6ZWQuIFlvdVxuICAgIC8vIGNhbiBldmVuIHB1dCBkYXRhIGluIHRoZSByZXNwb25zZSB0aGF0IG1pZ2h0IGhlbHAgdGhlIHVzZXIgcmVjdGlmeSB0aGVcbiAgICAvLyBpc3N1ZSEgTGlrZSBlbWFpbGluZyB0aGUgd2VibWFzdGVyIGZvciBhY2Nlc3MgdG8gdGhlIHBhZ2UuIChPaCwgcmlnaHQsXG4gICAgLy8gYGpzb25gIGlzIGp1c3QgYSBSZXNwb25zZSBoZWxwZXIgdGhhdCBtYWtlcyBpdCBlYXNpZXIgdG8gc2VuZCBKU09OXG4gICAgLy8gcmVzcG9uc2VzKS5cbiAgICB0aHJvdyBqc29uKHsgd2VibWFzdGVyRW1haWw6IFwiaGVsbG9AcmVtaXgucnVuXCIgfSwgeyBzdGF0dXM6IDQwMSB9KTtcbiAgfVxuXG4gIC8vIFNvbWV0aW1lcyB5b3VyIGNvZGUganVzdCBibG93cyB1cCBhbmQgeW91IG5ldmVyIGFudGljaXBhdGVkIGl0LiBSZW1peCB3aWxsXG4gIC8vIGF1dG9tYXRpY2FsbHkgY2F0Y2ggaXQgYW5kIHNlbmQgdGhlIFVJIHRvIHRoZSBlcnJvciBib3VuZGFyeS5cbiAgaWYgKHBhcmFtcy5pZCA9PT0gXCJrYWJvb21cIikge1xuICAgIGxvbCgpO1xuICB9XG5cbiAgLy8gYnV0IG90aGVyd2lzZSB0aGUgcmVjb3JkIHdhcyBmb3VuZCwgdXNlciBoYXMgYWNjZXNzLCBzbyB3ZSBjYW4gZG8gd2hhdGV2ZXJcbiAgLy8gZWxzZSB3ZSBuZWVkZWQgdG8gaW4gdGhlIGxvYWRlciBhbmQgcmV0dXJuIHRoZSBkYXRhLiAoVGhpcyBpcyBib3JpbmcsIHdlJ3JlXG4gIC8vIGp1c3QgZ29ubmEgcmV0dXJuIHRoZSBwYXJhbXMuaWQpLlxuICByZXR1cm4geyBwYXJhbTogcGFyYW1zLmlkIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXJhbURlbW8oKSB7XG4gIGxldCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xuICByZXR1cm4gKFxuICAgIDxoMT5cbiAgICAgIFRoZSBwYXJhbSBpcyA8aSBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT57ZGF0YS5wYXJhbX08L2k+XG4gICAgPC9oMT5cbiAgKTtcbn1cblxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL2NvbnZlbnRpb25zI2NhdGNoYm91bmRhcnlcbi8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9yZW1peCN1c2VjYXRjaFxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL2d1aWRlcy9ub3QtZm91bmRcbmV4cG9ydCBmdW5jdGlvbiBDYXRjaEJvdW5kYXJ5KCkge1xuICBsZXQgY2F1Z2h0ID0gdXNlQ2F0Y2goKTtcblxuICBsZXQgbWVzc2FnZTogUmVhY3QuUmVhY3ROb2RlO1xuICBzd2l0Y2ggKGNhdWdodC5zdGF0dXMpIHtcbiAgICBjYXNlIDQwMTpcbiAgICAgIG1lc3NhZ2UgPSAoXG4gICAgICAgIDxwPlxuICAgICAgICAgIExvb2tzIGxpa2UgeW91IHRyaWVkIHRvIHZpc2l0IGEgcGFnZSB0aGF0IHlvdSBkbyBub3QgaGF2ZSBhY2Nlc3MgdG8uXG4gICAgICAgICAgTWF5YmUgYXNrIHRoZSB3ZWJtYXN0ZXIgKHtjYXVnaHQuZGF0YS53ZWJtYXN0ZXJFbWFpbH0pIGZvciBhY2Nlc3MuXG4gICAgICAgIDwvcD5cbiAgICAgICk7XG4gICAgY2FzZSA0MDQ6XG4gICAgICBtZXNzYWdlID0gKFxuICAgICAgICA8cD5Mb29rcyBsaWtlIHlvdSB0cmllZCB0byB2aXNpdCBhIHBhZ2UgdGhhdCBkb2VzIG5vdCBleGlzdC48L3A+XG4gICAgICApO1xuICAgIGRlZmF1bHQ6XG4gICAgICBtZXNzYWdlID0gKFxuICAgICAgICA8cD5cbiAgICAgICAgICBUaGVyZSB3YXMgYSBwcm9ibGVtIHdpdGggeW91ciByZXF1ZXN0IVxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIHtjYXVnaHQuc3RhdHVzfSB7Y2F1Z2h0LnN0YXR1c1RleHR9XG4gICAgICAgIDwvcD5cbiAgICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDI+T29wcyE8L2gyPlxuICAgICAgPHA+e21lc3NhZ2V9PC9wPlxuICAgICAgPHA+XG4gICAgICAgIChJc24ndCBpdCBjb29sIHRoYXQgdGhlIHVzZXIgZ2V0cyB0byBzdGF5IGluIGNvbnRleHQgYW5kIHRyeSBhIGRpZmZlcmVudFxuICAgICAgICBsaW5rIGluIHRoZSBwYXJ0cyBvZiB0aGUgVUkgdGhhdCBkaWRuJ3QgYmxvdyB1cD8pXG4gICAgICA8L3A+XG4gICAgPC8+XG4gICk7XG59XG5cbi8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9jb252ZW50aW9ucyNlcnJvcmJvdW5kYXJ5XG4vLyBodHRwczovL3JlbWl4LnJ1bi9hcGkvZ3VpZGVzL25vdC1mb3VuZFxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoeyBlcnJvciB9OiB7IGVycm9yOiBFcnJvciB9KSB7XG4gIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDI+RXJyb3IhPC9oMj5cbiAgICAgIDxwPntlcnJvci5tZXNzYWdlfTwvcD5cbiAgICAgIDxwPlxuICAgICAgICAoSXNuJ3QgaXQgY29vbCB0aGF0IHRoZSB1c2VyIGdldHMgdG8gc3RheSBpbiBjb250ZXh0IGFuZCB0cnkgYSBkaWZmZXJlbnRcbiAgICAgICAgbGluayBpbiB0aGUgcGFydHMgb2YgdGhlIFVJIHRoYXQgZGlkbid0IGJsb3cgdXA/KVxuICAgICAgPC9wPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgbGV0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICh7IGRhdGEgfSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBkYXRhID8gYFBhcmFtOiAke2RhdGEucGFyYW19YCA6IFwiT29wcy4uLlwiLFxuICB9O1xufTtcbiIsICJpbXBvcnQgeyBPdXRsZXQgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uLCBMaW5rc0Z1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCBzdHlsZXNVcmwgZnJvbSBcIn4vc3R5bGVzL2RlbW9zL2Fib3V0LmNzc1wiO1xuXG5leHBvcnQgbGV0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogXCJBYm91dCBSZW1peFwiXG4gIH07XG59O1xuXG5leHBvcnQgbGV0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW3sgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzVXJsIH1dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dF9faW50cm9cIj5cbiAgICAgICAgPGgyPkFib3V0IFVzPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgT2ssIHNvIHRoaXMgcGFnZSBpc24ndCByZWFsbHkgPGVtPmFib3V0IHVzPC9lbT4sIGJ1dCB3ZSBkaWQgd2FudCB0b1xuICAgICAgICAgIHNob3cgeW91IGEgZmV3IG1vcmUgdGhpbmdzIFJlbWl4IGNhbiBkby5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBEaWQgeW91IG5vdGljZSB0aGF0IHRoaW5ncyBsb29rIGEgbGl0dGxlIGRpZmZlcmVudCBvbiB0aGlzIHBhZ2U/IFRoZVxuICAgICAgICAgIENTUyB0aGF0IHdlIGltcG9ydCBpbiB0aGUgcm91dGUgZmlsZSBhbmQgaW5jbHVkZSBpbiBpdHN7XCIgXCJ9XG4gICAgICAgICAgPGNvZGU+bGlua3M8L2NvZGU+IGV4cG9ydCBpcyBvbmx5IGluY2x1ZGVkIG9uIHRoaXMgcm91dGUgYW5kIGl0c1xuICAgICAgICAgIGNoaWxkcmVuLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFdhaXQgYSBzZWMuLi48ZW0+aXRzIGNoaWxkcmVuPC9lbT4/IFRvIHVuZGVyc3RhbmQgd2hhdCB3ZSBtZWFuIGJ5XG4gICAgICAgICAgdGhpcyx7XCIgXCJ9XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcmVtaXgucnVuL3R1dG9yaWFsLzQtbmVzdGVkLXJvdXRlcy1wYXJhbXNcIj5cbiAgICAgICAgICAgIHJlYWQgYWxsIGFib3V0IG5lc3RlZCByb3V0ZXMgaW4gdGhlIGRvY3NcbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxociAvPlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0SW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxwPlxuICAgICAgICBZb3UgYXJlIGxvb2tpbmcgYXQgdGhlIGluZGV4IHJvdXRlIGZvciB0aGUgPGNvZGU+L2Fib3V0PC9jb2RlPiBVUkxcbiAgICAgICAgc2VnbWVudCwgYnV0IHRoZXJlIGFyZSBuZXN0ZWQgcm91dGVzIGFzIHdlbGwhXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICA8TGluayB0bz1cIndob2FcIj5DaGVjayBvdXQgb25lIG9mIHRoZW0gaGVyZS48L0xpbms+XG4gICAgICAgIDwvc3Ryb25nPlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXRJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHA+XG4gICAgICAgIFdob2EsIHRoaXMgaXMgYSBuZXN0ZWQgcm91dGUhIFdlIHJlbmRlciB0aGUgPGNvZGU+L2Fib3V0PC9jb2RlPiBsYXlvdXRcbiAgICAgICAgcm91dGUgY29tcG9uZW50LCBhbmQgaXRzIDxjb2RlPk91dGxldDwvY29kZT4gcmVuZGVycyBvdXIgcm91dGVcbiAgICAgICAgY29tcG9uZW50LiBcdUQ4M0VcdUREMkZcbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgIDxMaW5rIHRvPVwiLi5cIj5cbiAgICAgICAgICAgIEdvIGJhY2sgdG8gdGhlIDxjb2RlPi9hYm91dDwvY29kZT4gaW5kZXguXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L3N0cm9uZz5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rc0Z1bmN0aW9uLCBNZXRhRnVuY3Rpb24gfSBmcm9tICdyZW1peCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnfi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCBQcm9qZWN0Q2FyZCBmcm9tICd+L2NvbXBvbmVudHMvcHJvamVjdENhcmQnXG5pbXBvcnQgc3R5bGVzVVJMIGZyb20gJ34vc3R5bGVzL3RhaWx3aW5kLmNzcydcbmltcG9ydCBhZXBpU2NyZWVuc2hvdCBmcm9tICd+L2Fzc2V0cy9hZXBpLnBuZydcbmltcG9ydCBicG5TY3JlZW5zaG90IGZyb20gJ34vYXNzZXRzL2Jwbi5wbmcnXG5pbXBvcnQgamZTY3JlZW5zaG90IGZyb20gJ34vYXNzZXRzL2pmbWVtb3JpYWwucG5nJ1xuaW1wb3J0IHJtZVNjcmVlbnNob3QgZnJvbSAnfi9hc3NldHMvcm1lLnBuZydcbmltcG9ydCBjb252ZW50aW9uU2NyZWVuc2hvdCBmcm9tICd+L2Fzc2V0cy9jb252ZW50aW9uLnBuZydcbmltcG9ydCB0dWxhbmVTY3JlZW5zaG90IGZyb20gJ34vYXNzZXRzL3R1bGFuZS5wbmcnXG5pbXBvcnQgam9rZXNTY3JlZW5zaG90IGZyb20gJ34vYXNzZXRzL3NhbXNqb2tlcy5wbmcnXG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICByZWw6ICdzdHlsZXNoZWV0JyxcbiAgICAgIGhyZWY6IHN0eWxlc1VSTCxcbiAgICB9LFxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdQb3J0Zm9saW8gfCBTYW0gQmxla2htYW4nLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWItNiBncmlkIG1heC13LTd4bCBnYXAtNCBsZzpncmlkLWNvbHMtMlwiPlxuICAgICAgPFByb2plY3RDYXJkXG4gICAgICAgIGtleT1cIlJNRVwiXG4gICAgICAgIGV4dGVybmFsXG4gICAgICAgIHByb2plY3RMaW5rPVwiaHR0cHM6Ly9yYXRlbXllc3RhdGUub3JnYW5pemVteXBlb3BsZS5jb20vXCJcbiAgICAgICAgcHJvamVjdE5hbWU9XCJSYXRlTXlFc3RhdGVcIlxuICAgICAgICBwcm9qZWN0SW1hZ2U9e3JtZVNjcmVlbnNob3R9XG4gICAgICAgIHRlY2hzdGFjaz17W1xuICAgICAgICAgICdKYXZhc2NyaXB0JyxcbiAgICAgICAgICAnTm9kZUpTJyxcbiAgICAgICAgICAnR2l0JyxcbiAgICAgICAgICAnUmVhY3QnLFxuICAgICAgICAgICdSZWFjdCBSb3V0ZXInLFxuICAgICAgICAgICdUYWlsd2luZCBDU1MnLFxuICAgICAgICAgICdQcmlzbWEnLFxuICAgICAgICAgICdNeVNRTCcsXG4gICAgICAgICAgJ05ldGxpZnknLFxuICAgICAgICBdfVxuICAgICAgICBkZXNjcmlwdGlvbj1cIlJhdGVNeUVzdGF0ZSBpcyBhIEphbXN0YWNrIHdlYiBhcHAgd2l0aCBhIG11bHRpLXBhZ2UgZm9ybSB3aXphcmQgYW5kIHJlcG9ydCBnZW5lcmF0b3IgYnVpbHQgd2l0aCBKYXZhc2NyaXB0LCBOZXRsaWZ5LCBQcmlzbWEsIGFuZCBSZWFjdC4gVGhlIGFwcCB1c2VzIGEgTXlTUUwgZGF0YWJhc2UgaG9zdGVkIG9uIEhlcm9rdSBmb3IgZGF0YSBzdG9yYWdlIGFuZCByZXBvcnQgZ2VuZXJhdGlvbi5cIlxuICAgICAgLz5cbiAgICAgIDxQcm9qZWN0Q2FyZFxuICAgICAgICBwcm9qZWN0TGluaz1cImh0dHBzOi8vc2Ftcy1qb2tlcy5oZXJva3VhcHAuY29tL1wiXG4gICAgICAgIHByb2plY3ROYW1lPVwiU2FtJ3MgSm9rZXNcIlxuICAgICAgICBwcm9qZWN0SW1hZ2U9e2pva2VzU2NyZWVuc2hvdH1cbiAgICAgICAgZXh0ZXJuYWxcbiAgICAgICAgdGVjaHN0YWNrPXtbXG4gICAgICAgICAgJ1R5cGVzY3JpcHQnLFxuICAgICAgICAgICdOb2RlSlMnLFxuICAgICAgICAgICdHaXQnLFxuICAgICAgICAgICdSZW1peCcsXG4gICAgICAgICAgJ1JlYWN0JyxcbiAgICAgICAgICAnUHJpc21hJyxcbiAgICAgICAgICAnUG9zdGdyZXMnLFxuICAgICAgICAgICdIZXJva3UnLFxuICAgICAgICBdfVxuICAgICAgICBkZXNjcmlwdGlvbj1cIlNhbSdzIEpva2VzIGlzIGEgZnVsbC1zdGFjayB3ZWIgYXBwbGljYXRpb24gd3JpdHRlbiBpbiBUeXBlU2NyaXB0IHdpdGggYXV0aGVudGljYXRpb24sIHNlc3Npb25zIGNvb2tpZXMsIHBlcnNpc3RlbnQgZGF0YSBzdG9yZXMgaW4gUG9zdGdyZXMsIGFuZCBkZXBsb3llZCB0byBIZXJva3UuXCJcbiAgICAgIC8+XG4gICAgICA8UHJvamVjdENhcmRcbiAgICAgICAga2V5PVwiQUVQaVwiXG4gICAgICAgIHByb2plY3RMaW5rPVwiL2FlcGlcIlxuICAgICAgICBwcm9qZWN0TmFtZT1cIkFFUGkgRG9uYXRpb24gTGluayBHZW5lcmF0b3JcIlxuICAgICAgICBwcm9qZWN0SW1hZ2U9e2FlcGlTY3JlZW5zaG90fVxuICAgICAgICB0ZWNoc3RhY2s9e1tcbiAgICAgICAgICAnVHlwZXNjcmlwdCcsXG4gICAgICAgICAgJ05vZGVKUycsXG4gICAgICAgICAgJ0dpdCcsXG4gICAgICAgICAgJ1JlbWl4JyxcbiAgICAgICAgICAnUmVhY3QnLFxuICAgICAgICAgICdUYWlsd2luZCBDU1MnLFxuICAgICAgICAgICdOZXRsaWZ5JyxcbiAgICAgICAgXX1cbiAgICAgIC8+XG4gICAgICA8UHJvamVjdENhcmRcbiAgICAgICAga2V5PVwiQlBOXCJcbiAgICAgICAgZXh0ZXJuYWxcbiAgICAgICAgcHJvamVjdExpbms9XCJodHRwczovL2Jwbi5hZXBpLm9yZy9cIlxuICAgICAgICBwcm9qZWN0TmFtZT1cIkFFUGkgQnVzaW5lc3MgJiBQcm9mZXNzaW9uYWwgTmV0d29ya1wiXG4gICAgICAgIHByb2plY3RJbWFnZT17YnBuU2NyZWVuc2hvdH1cbiAgICAgICAgdGVjaHN0YWNrPXtbJ1dvcmRQcmVzcycsICdwaHAnXX1cbiAgICAgIC8+XG4gICAgICA8UHJvamVjdENhcmRcbiAgICAgICAga2V5PVwiSkZcIlxuICAgICAgICBleHRlcm5hbFxuICAgICAgICBwcm9qZWN0TGluaz1cImh0dHBzOi8vd3d3LmFlcGkub3JnL2ppbS1tZW1vcmlhbC9cIlxuICAgICAgICBwcm9qZWN0TmFtZT1cIkppbSBGbGVpc2NoZXIgTWVtb3JpYWxcIlxuICAgICAgICBwcm9qZWN0SW1hZ2U9e2pmU2NyZWVuc2hvdH1cbiAgICAgICAgdGVjaHN0YWNrPXtbJ1dvcmRQcmVzcycsICdwaHAnXX1cbiAgICAgIC8+XG4gICAgICA8UHJvamVjdENhcmRcbiAgICAgICAga2V5PVwiQ29udmVudGlvblwiXG4gICAgICAgIGV4dGVybmFsXG4gICAgICAgIHByb2plY3RMaW5rPVwiaHR0cHM6Ly93d3cuYWVwaS5vcmcvZG9uYXRlY29udmVudGlvbi9cIlxuICAgICAgICBwcm9qZWN0TmFtZT1cIkFFUGkncyAyMDIxIENvbnZlbnRpb24gRnVuZHJhaXNlclwiXG4gICAgICAgIHByb2plY3RJbWFnZT17Y29udmVudGlvblNjcmVlbnNob3R9XG4gICAgICAgIHRlY2hzdGFjaz17WydXb3JkUHJlc3MnLCAncGhwJ119XG4gICAgICAvPlxuICAgICAgPFByb2plY3RDYXJkXG4gICAgICAgIGtleT1cIlR1bGFuZVwiXG4gICAgICAgIGV4dGVybmFsXG4gICAgICAgIHByb2plY3RMaW5rPVwiaHR0cHM6Ly93d3cuYWVwaS5vcmcvdHVsYW5lcmV1bmlvbi9cIlxuICAgICAgICBwcm9qZWN0TmFtZT1cIkFFUGkgVHVsYW5lIEFsdW1uaSBSZXVuaW9uIExhbmRpbmcgUGFnZVwiXG4gICAgICAgIHByb2plY3RJbWFnZT17dHVsYW5lU2NyZWVuc2hvdH1cbiAgICAgICAgdGVjaHN0YWNrPXtbJ1dvcmRQcmVzcycsICdwaHAnXX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgam9rZXNTY3JlZW5zaG90IGZyb20gJ34vYXNzZXRzL2pva2VzLnBuZydcbmltcG9ydCBzYWZhcmlCYXIgZnJvbSAnfi9hc3NldHMvc2FmYXJpYmFyLnBuZydcbmltcG9ydCB7IHN2Z0xvb2t1cCwgc3ZnTG9va3VwT2JqZWN0IH0gZnJvbSAnLi9pY29ucydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdENhcmQoe1xuICBwcm9qZWN0TGluayA9ICcvJyxcbiAgcHJvamVjdE5hbWUgPSAnSm9rZXMgQXBwJyxcbiAgcHJvamVjdEltYWdlID0gam9rZXNTY3JlZW5zaG90LFxuICBleHRlcm5hbCA9IGZhbHNlLFxuICB0ZWNoc3RhY2ssXG4gIGRlc2NyaXB0aW9uLFxufToge1xuICBwcm9qZWN0TGluaz86IHN0cmluZ1xuICBwcm9qZWN0TmFtZT86IHN0cmluZ1xuICBwcm9qZWN0SW1hZ2U/OiBzdHJpbmdcbiAgZXh0ZXJuYWw/OiBib29sZWFuXG4gIHRlY2hzdGFjaz86IEFycmF5PGtleW9mIHN2Z0xvb2t1cE9iamVjdD5cbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwIGZsZXggdy1mdWxsIGp1c3RpZnktY2VudGVyIHRyYW5zaXRpb25cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0yIG1heC13LTJ4bCBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1sZyBib3JkZXItZ3JheS03MDAgYmctZ3JheS04MDAgc2hhZG93LW1kIG1kOnJvdW5kZWQteGxcIj5cbiAgICAgICAgPExpbmtTd2l0Y2ggZXh0ZXJuYWw9e2V4dGVybmFsfSBwcm9qZWN0TGluaz17cHJvamVjdExpbmt9PlxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIlwiIHNyYz17c2FmYXJpQmFyfSBhbHQ9XCJwcm9kdWN0IGltYWdlXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi00IGgtNTIgXG4gICAgICAgICAgICB3LWZ1bGwgb2JqZWN0LWNvdmVyIG9iamVjdC10b3Agc206bWItNiBzbTpoLTcyIG1kOmgtNzJcIlxuICAgICAgICAgICAgICBzcmM9e3Byb2plY3RJbWFnZX1cbiAgICAgICAgICAgICAgYWx0PVwicHJvZHVjdCBpbWFnZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC01IHBiLTVcIj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHRleHQteGwgZm9udC1zZW1pYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktOTAwIHRyYW5zaXRpb24gZGFyazp0ZXh0LXdoaXRlIG1kOmdyb3VwLWhvdmVyOnRleHQtYmx1ZS00MDBcIj5cbiAgICAgICAgICAgICAgICB7cHJvamVjdE5hbWV9XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIHRleHQtYmx1ZS00MDAgdHJhbnNpdGlvbiBtZDpncm91cC1ob3ZlcjppbmxpbmVcIj5cbiAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZSBoLTYgdy02XCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTMgN2w1IDVtMCAwbC01IDVtNS01SDZcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIHNwYWNlLXgtMiBzbTpzcGFjZS14LTRcIj5cbiAgICAgICAgICAgICAgICB7dGVjaHN0YWNrPy5tYXAoKHRlY2gpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGljb25MaW5rID0gZ2V0VGVjaEljb24odGVjaClcbiAgICAgICAgICAgICAgICAgIGlmICghaWNvbkxpbmspIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dGVjaH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0ZWNofVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktMSBoLTYgdGV4dC13aGl0ZSBtZDpteS0wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aWNvbkxpbmt9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3RlY2h9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yIHRleHQtc20gZGFyazp0ZXh0LWdyYXktMTAwIHNtOm10LTQgc206dGV4dC1iYXNlXCI+XG4gICAgICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgPC9MaW5rU3dpdGNoPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZnVuY3Rpb24gTGlua1N3aXRjaCh7XG4gIGV4dGVybmFsLFxuICBjaGlsZHJlbixcbiAgcHJvamVjdExpbmssXG59OiB7XG4gIGV4dGVybmFsOiBib29sZWFuXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdEVsZW1lbnRcbiAgcHJvamVjdExpbms6IHN0cmluZ1xufSkge1xuICBpZiAoZXh0ZXJuYWwgPT09IHRydWUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGEgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e3Byb2plY3RMaW5rfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9hPlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gPExpbmsgdG89e3Byb2plY3RMaW5rfT57Y2hpbGRyZW59PC9MaW5rPlxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFRlY2hJY29uKHRlY2g6IGtleW9mIHN2Z0xvb2t1cE9iamVjdCkge1xuICBjb25zdCBpY29uID0gc3ZnTG9va3VwW3RlY2hdXG4gIGlmICghaWNvbikgcmV0dXJuIG51bGxcbiAgcmV0dXJuIGljb25cbn1cbiIsICJpbXBvcnQgcmVzdW1lIGZyb20gJ34vYXNzZXRzL1Jlc3VtZS5wbmcnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc3VtZVBhZ2UoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1iLTEwIGZsZXggbWF4LXctNHhsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC00XCI+XG4gICAgICA8aW1nIHNyYz17cmVzdW1lfSBhbHQ9XCJTYW0gQmxla2htYW4ncyBSZXN1bWVcIiBjbGFzc05hbWU9XCJyb3VuZGVkLWxnXCIgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImltcG9ydCB7XG4gIEFjdGlvbkZ1bmN0aW9uLFxuICBGb3JtLFxuICBMaW5rLFxuICBMaW5rc0Z1bmN0aW9uLFxuICBNZXRhRnVuY3Rpb24sXG4gIHVzZUFjdGlvbkRhdGEsXG59IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHN0eWxlc1VSTCBmcm9tICd+L3N0eWxlcy90YWlsd2luZC5jc3MnXG5pbXBvcnQgTGF5b3V0IGZyb20gJ34vY29tcG9uZW50cy9sYXlvdXQnXG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICByZWw6ICdzdHlsZXNoZWV0JyxcbiAgICAgIGhyZWY6IHN0eWxlc1VSTCxcbiAgICB9LFxuICBdXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTI0IGxnOnB5LTMyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0xMCBteC1hdXRvIG1heC13LTd4bCBwbC00IHByLTggc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtY3Vyc2l2ZSB0ZXh0LTV4bCBmb250LWV4dHJhYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZSBzbTp0ZXh0LTV4bCBsZzp0ZXh0LTZ4bFwiPlxuICAgICAgICAgICAgU2FtIEJsZWtobWFuXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC02IG1heC13LTN4bCB0ZXh0LXhsIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+XG4gICAgICAgICAgICBPcGVyYXRpb25zIGFuZCBUZWNobm9sb2d5IEVuZ2luZWVyXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXgtYXV0byBtYXgtdy03eGwgcHgtNCBwYi0xMiBzbTpweC02IGxnOnB4LTggbGc6cGItMTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctN3hsIGxnOm1sLWF1dG9cIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtYi00IHRleHQtM3hsIGZvbnQtZXh0cmFib2xkIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgQWJvdXQgbWVcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3NlIHByb3NlLWxnIG1iLTYgZGFyazpwcm9zZS1pbnZlcnRcIj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgSSBhbSBhbiBvcGVyYXRpb25zIGFuZCB0ZWNobm9sb2d5IGVuZ2luZWVyIHRoYXQgYmVsaWV2ZXMgaW5cbiAgICAgICAgICAgICAgICBtYWtpbmcgdGhlIHdvcmxkIGEgYmV0dGVyIHBsYWNlIHRocm91Z2ggc29mdHdhcmUuIEkgd29yayB3aXRoXG4gICAgICAgICAgICAgICAgb3JnYW5pemF0aW9ucyBtYWtpbmcgYW4gaW1wYWN0IG9uIGJvdGggdGhlIHdvcmxkIGFzIHdlIGtub3cgaXRcbiAgICAgICAgICAgICAgICB0b2RheSBhbmQsIGluZXhvcmFibHksIG9uIGl0cyBmdXR1cmUuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgWW91IGNhbiBzZWUgc29tZSBvZiBteSB3b3JrIGluIG15eycgJ31cbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9wb3J0Zm9saW9cIj5wb3J0Zm9saW88L0xpbms+LiBJZiB5b3Ugd291bGQgbGlrZSB0byBnZXRcbiAgICAgICAgICAgICAgICBpbiBjb250YWN0IHdpdGggbWUgYWJvdXQgYSBwb3RlbnRpYWwgcHJvamVjdCwgZW1haWwgbWUgYXR7JyAnfVxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICBocmVmPVwibWFpbHRvOnNhbUBibGVrcy5kZXZcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHNhbUBibGVrcy5kZXZcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC8+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBMaW5rLCBNZXRhRnVuY3Rpb24sIE91dGxldCwgdXNlQ2F0Y2ggfSBmcm9tICdyZW1peCdcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ0FFUGkgVXRpbGl0aWVzIHwgU2FtIEJsZWtobWFuJyxcbiAgICBkZXNjcmlwdGlvbjogJ1V0aWxpdGllcyBmb3IgQUVQaSBtYWRlIGJ5IFNhbSBCbGVraG1hbicsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQUVQSSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLWgtZnVsbCBmbGV4LWdyb3dcIj5cbiAgICAgIDxPdXRsZXQgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2F0Y2hCb3VuZGFyeSgpIHtcbiAgY29uc3QgY2F1Z2h0ID0gdXNlQ2F0Y2goKVxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+dWggb2ghIGZyb20gYWVwaSByb3V0ZTwvZGl2PlxufVxuIiwgImltcG9ydCB7IExvYWRlckZ1bmN0aW9uLCB1c2VDYXRjaCB9IGZyb20gJ3JlbWl4J1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHBhcmFtID0gcGFyYW1zLmFlcGl1dGlsc1xuICBpZiAocGFyYW0gIT09ICdldmVudHMnKVxuICAgIHRocm93IG5ldyBSZXNwb25zZSgnVGhhdCBwYWdlIGRvZXMgbm90IGV4aXN0JywgeyBzdGF0dXM6IDQwNCB9KVxuICByZXR1cm4ge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQUVQaVV0aWwoKSB7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj48L2Rpdj5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENhdGNoQm91bmRhcnkoKSB7XG4gIGNvbnN0IGNhdWdodCA9IHVzZUNhdGNoKClcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5cbiAgICAgIFRoaXMgcGFnZSBkb2VzIG5vdCBleGlzdCwgcGxlYXNlIHNlbGVjdCBhbm90aGVyIHRvb2wgdG8gdXNlLlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQUVQaUV2ZW50cygpIHtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPkNvbWluZyBzb29uPC9kaXY+XG59XG4iLCAiaW1wb3J0IHsgU3ludGhldGljRXZlbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uLCBGb3JtLCB1c2VBY3Rpb25EYXRhLCB1c2VUcmFuc2l0aW9uIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgKiBhcyBjb3B5IGZyb20gJ2NvcHktdG8tY2xpcGJvYXJkJ1xuXG50eXBlIGxpbmtQYXJ0cyA9IHtcbiAgY3VycmVuY3k/OiBTdHJpbmdcbiAgYXBwZWFsPzogU3RyaW5nXG4gIGNhbXBhaWduPzogU3RyaW5nXG4gIGZ1bmQ/OiBTdHJpbmdcbiAgcGxlZGdlPzogU3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGxldCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKVxuICBsZXQgdmFsdWVzID0gT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhKVxuICByZXR1cm4gY29uc3RydWN0TGluayh2YWx1ZXMpXG59XG5cbmZ1bmN0aW9uIGNvbnN0cnVjdExpbmsocGFydHM6IGxpbmtQYXJ0cykge1xuICBsZXQgdXJsUGFydHMgPSBwYXJ0c1xuICBkZWxldGUgdXJsUGFydHMuY3VycmVuY3lcbiAgLy8gY29uc29sZS5sb2codXJsUGFydHMpXG4gIGxldCBsaW5rS2V5cyA9IE9iamVjdC5rZXlzKHVybFBhcnRzKVxuICAvLyBjb25zb2xlLmxvZyhsaW5rS2V5cylcbiAgbGV0IHVybEJhc2UgPSAnaHR0cHM6Ly9hZXBpLm9yZy9kb25hdGUvPydcbiAgbGV0IGNvbXBsZXRlVVJMID0gdXJsQmFzZVxuICBpZiAoIWxpbmtLZXlzLmxlbmd0aCB8fCBsaW5rS2V5cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGZvciAobGV0IGtleSBvZiBsaW5rS2V5cykge1xuICAgIGlmICh1cmxQYXJ0c1trZXldID09PSAnJykge1xuICAgIH0gZWxzZSBpZiAobGlua0tleXMuaW5kZXhPZihrZXkpID09PSAwKSB7XG4gICAgICBjb21wbGV0ZVVSTCArPSBgJHtrZXl9PSR7dXJsUGFydHNba2V5XX1gXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBsZXRlVVJMICs9IGAmJHtrZXl9PSR7dXJsUGFydHNba2V5XX1gXG4gICAgfVxuICB9XG4gIHJldHVybiBuZXcgVVJMKGNvbXBsZXRlVVJMKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBRVBpRG9uYXRpb25MaW5rR2VuZXJhdG9yKCkge1xuICBjb25zdCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpXG4gIGxldCBjb25zdHJ1Y3RlZExpbmsgPSB1c2VBY3Rpb25EYXRhKClcbiAgY29uc3QgW2xvYWRlZCwgc2V0TG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbY3VycmVuY3ksIHNldEN1cnJlbmN5XSA9IHVzZVN0YXRlKCdVUycpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB0cmFuc2l0aW9uLnN0YXRlID09PSAnc3VibWl0dGluZycgJiYgc2V0TG9hZGVkKHRydWUpXG4gIH0sIFt0cmFuc2l0aW9uXSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tYXV0byBmbGV4IG1pbi1oLWZ1bGwgdy1mdWxsIG1heC13LTR4bCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTggcC0xNiBkYXJrOnRleHQtZ3JheS01MFwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtc2VtaWJvbGRcIj5BRVBpIERvbmF0aW9uIExpbmsgR2VuZXJhdG9yPC9oMT5cbiAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIiBjbGFzc05hbWU9XCJ3LWZ1bGxcIiBhdXRvQ29tcGxldGU9XCJvZmZcIj5cbiAgICAgICAgPGZpZWxkc2V0IC8+XG4gICAgICAgIDxsZWdlbmQgY2xhc3NOYW1lPVwic3Itb25seVwiPkN1cnJlbmN5PC9sZWdlbmQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9XCJVU1wiXG4gICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgbmFtZT1cImN1cnJlbmN5XCJcbiAgICAgICAgICAgIHZhbHVlPVwiVVNcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHNldEN1cnJlbmN5KCdVUycpfVxuICAgICAgICAgICAgY2hlY2tlZD17Y3VycmVuY3kgPT09ICdVUyd9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoLTQgdy00IGJvcmRlci1ncmF5LTMwMCBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTMwMCBkYXJrOmJvcmRlci1ncmF5LTYwMCBkYXJrOmJnLWdyYXktNzAwIGRhcms6Zm9jdXM6YmctYmx1ZS02MDAgZGFyazpmb2N1czpyaW5nLWJsdWUtNjAwXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIlVTXCJcbiAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJVU1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIGh0bWxGb3I9XCJVU1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yIGJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtZ3JheS0zMDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFVuaXRlZCBTdGF0ZXNcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGlkPVwiQ2FuYWRhXCJcbiAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICBuYW1lPVwiY3VycmVuY3lcIlxuICAgICAgICAgICAgdmFsdWU9XCJDYW5hZGFcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHNldEN1cnJlbmN5KCdDYW5hZGEnKX1cbiAgICAgICAgICAgIGNoZWNrZWQ9e2N1cnJlbmN5ID09PSAnQ2FuYWRhJ31cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNCB3LTQgYm9yZGVyLWdyYXktMzAwIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWJsdWUtMzAwIGRhcms6Ym9yZGVyLWdyYXktNjAwIGRhcms6YmctZ3JheS03MDAgZGFyazpmb2N1czpiZy1ibHVlLTYwMCBkYXJrOmZvY3VzOnJpbmctYmx1ZS02MDBcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiQ2FuYWRhXCJcbiAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJDYW5hZGFcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICBodG1sRm9yPVwiQ2FuYWRhXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTIgYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC1ncmF5LTMwMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ2FuYWRhXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cCByZWxhdGl2ZSB6LTAgbWItNiB3LWZ1bGxcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIG5hbWU9e2N1cnJlbmN5ID09PSAnVVMnID8gJ2NhbXBhaWduJyA6ICdjYW5hZGlhbmNhbXBhaWduJ31cbiAgICAgICAgICAgIGlkPXtjdXJyZW5jeSA9PT0gJ1VTJyA/ICdjYW1wYWlnbicgOiAnY2FuYWRpYW5jYW1wYWlnbid9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwZWVyIGJsb2NrIHctZnVsbCBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyLTAgYm9yZGVyLWItMiBib3JkZXItZ3JheS0zMDAgYmctdHJhbnNwYXJlbnQgcHktMi41IHB4LTAgdGV4dC1zbSB0ZXh0LWdyYXktOTAwIGZvY3VzOmJvcmRlci1ibHVlLTYwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0wIGRhcms6Ym9yZGVyLWdyYXktNjAwIGRhcms6dGV4dC13aGl0ZSBkYXJrOmZvY3VzOmJvcmRlci1ibHVlLTUwMFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIiBcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICBodG1sRm9yPXtjdXJyZW5jeSA9PT0gJ1VTJyA/ICdjYW1wYWlnbicgOiAnY2FuYWRpYW5jYW1wYWlnbid9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMyAtei0xMCBvcmlnaW4tWzBdIC10cmFuc2xhdGUteS02IHNjYWxlLTc1IHRyYW5zZm9ybSB0ZXh0LXNtIHRleHQtZ3JheS01MDAgZHVyYXRpb24tMzAwIHBlZXItcGxhY2Vob2xkZXItc2hvd246dHJhbnNsYXRlLXktMCBwZWVyLXBsYWNlaG9sZGVyLXNob3duOnNjYWxlLTEwMCBwZWVyLWZvY3VzOmxlZnQtMCBwZWVyLWZvY3VzOi10cmFuc2xhdGUteS02IHBlZXItZm9jdXM6c2NhbGUtNzUgcGVlci1mb2N1czp0ZXh0LWJsdWUtNjAwIGRhcms6dGV4dC1ncmF5LTQwMCBwZWVyLWZvY3VzOmRhcms6dGV4dC1ibHVlLTUwMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ2FtcGFpZ24gTmFtZVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwIHJlbGF0aXZlIHotMCBtYi02IHctZnVsbFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT1cImZ1bmRcIlxuICAgICAgICAgICAgaWQ9XCJmbG9hdGluZ19mdW5kXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInBlZXIgYmxvY2sgdy1mdWxsIGFwcGVhcmFuY2Utbm9uZSBib3JkZXItMCBib3JkZXItYi0yIGJvcmRlci1ncmF5LTMwMCBiZy10cmFuc3BhcmVudCBweS0yLjUgcHgtMCB0ZXh0LXNtIHRleHQtZ3JheS05MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNjAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTAgZGFyazpib3JkZXItZ3JheS02MDAgZGFyazp0ZXh0LXdoaXRlIGRhcms6Zm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiIFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIGh0bWxGb3I9XCJmbG9hdGluZ19mdW5kXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0zIC16LTEwIG9yaWdpbi1bMF0gLXRyYW5zbGF0ZS15LTYgc2NhbGUtNzUgdHJhbnNmb3JtIHRleHQtc20gdGV4dC1ncmF5LTUwMCBkdXJhdGlvbi0zMDAgcGVlci1wbGFjZWhvbGRlci1zaG93bjp0cmFuc2xhdGUteS0wIHBlZXItcGxhY2Vob2xkZXItc2hvd246c2NhbGUtMTAwIHBlZXItZm9jdXM6bGVmdC0wIHBlZXItZm9jdXM6LXRyYW5zbGF0ZS15LTYgcGVlci1mb2N1czpzY2FsZS03NSBwZWVyLWZvY3VzOnRleHQtYmx1ZS02MDAgZGFyazp0ZXh0LWdyYXktNDAwIHBlZXItZm9jdXM6ZGFyazp0ZXh0LWJsdWUtNTAwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBGdW5kIE5hbWVcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIHhsOmdyaWQtY29scy0yIHhsOmdhcC02XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cCByZWxhdGl2ZSB6LTAgbWItNiB3LWZ1bGxcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgbmFtZT1cImFwcGVhbFwiXG4gICAgICAgICAgICAgIGlkPVwiYXBwZWFsXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGVlciBibG9jayB3LWZ1bGwgYXBwZWFyYW5jZS1ub25lIGJvcmRlci0wIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMzAwIGJnLXRyYW5zcGFyZW50IHB5LTIuNSBweC0wIHRleHQtc20gdGV4dC1ncmF5LTkwMCBmb2N1czpib3JkZXItYmx1ZS02MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMCBkYXJrOmJvcmRlci1ncmF5LTYwMCBkYXJrOnRleHQtd2hpdGUgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDBcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIiBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICBodG1sRm9yPVwiYXBwZWFsXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTMgLXotMTAgb3JpZ2luLVswXSAtdHJhbnNsYXRlLXktNiBzY2FsZS03NSB0cmFuc2Zvcm0gdGV4dC1zbSB0ZXh0LWdyYXktNTAwIGR1cmF0aW9uLTMwMCBwZWVyLXBsYWNlaG9sZGVyLXNob3duOnRyYW5zbGF0ZS15LTAgcGVlci1wbGFjZWhvbGRlci1zaG93bjpzY2FsZS0xMDAgcGVlci1mb2N1czpsZWZ0LTAgcGVlci1mb2N1czotdHJhbnNsYXRlLXktNiBwZWVyLWZvY3VzOnNjYWxlLTc1IHBlZXItZm9jdXM6dGV4dC1ibHVlLTYwMCBkYXJrOnRleHQtZ3JheS00MDAgcGVlci1mb2N1czpkYXJrOnRleHQtYmx1ZS01MDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBcHBlYWwgSURcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cCByZWxhdGl2ZSB6LTAgbWItNiB3LWZ1bGxcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgbmFtZT1cInBsZWRnZVwiXG4gICAgICAgICAgICAgIGlkPVwicGxlZGdlXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGVlciBibG9jayB3LWZ1bGwgYXBwZWFyYW5jZS1ub25lIGJvcmRlci0wIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMzAwIGJnLXRyYW5zcGFyZW50IHB5LTIuNSBweC0wIHRleHQtc20gdGV4dC1ncmF5LTkwMCBmb2N1czpib3JkZXItYmx1ZS02MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMCBkYXJrOmJvcmRlci1ncmF5LTYwMCBkYXJrOnRleHQtd2hpdGUgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDBcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIiBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICBodG1sRm9yPVwicGxlZGdlXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTMgLXotMTAgb3JpZ2luLVswXSAtdHJhbnNsYXRlLXktNiBzY2FsZS03NSB0cmFuc2Zvcm0gdGV4dC1zbSB0ZXh0LWdyYXktNTAwIGR1cmF0aW9uLTMwMCBwZWVyLXBsYWNlaG9sZGVyLXNob3duOnRyYW5zbGF0ZS15LTAgcGVlci1wbGFjZWhvbGRlci1zaG93bjpzY2FsZS0xMDAgcGVlci1mb2N1czpsZWZ0LTAgcGVlci1mb2N1czotdHJhbnNsYXRlLXktNiBwZWVyLWZvY3VzOnNjYWxlLTc1IHBlZXItZm9jdXM6dGV4dC1ibHVlLTYwMCBkYXJrOnRleHQtZ3JheS00MDAgcGVlci1mb2N1czpkYXJrOnRleHQtYmx1ZS01MDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBQbGVkZ2UgSURcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J2dyaWQgeGw6Z3JpZC1jb2xzLTIgeGw6Z2FwLTYnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSB6LTAgdy1mdWxsIG1iLTYgZ3JvdXAnPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9J3RlbCdcbiAgICAgICAgICAgICAgcGF0dGVybj0nWzAtOV17M30tWzAtOV17M30tWzAtOV17NH0nXG4gICAgICAgICAgICAgIG5hbWU9J2Zsb2F0aW5nX3Bob25lJ1xuICAgICAgICAgICAgICBpZD0nZmxvYXRpbmdfcGhvbmUnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmxvY2sgcHktMi41IHB4LTAgdy1mdWxsIHRleHQtc20gdGV4dC1ncmF5LTkwMCBiZy10cmFuc3BhcmVudCBib3JkZXItMCBib3JkZXItYi0yIGJvcmRlci1ncmF5LTMwMCBhcHBlYXJhbmNlLW5vbmUgZGFyazp0ZXh0LXdoaXRlIGRhcms6Ym9yZGVyLWdyYXktNjAwIGRhcms6Zm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTAgZm9jdXM6Ym9yZGVyLWJsdWUtNjAwIHBlZXInXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPScgJ1xuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICBodG1sRm9yPSdmbG9hdGluZ19waG9uZSdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdhYnNvbHV0ZSB0ZXh0LXNtIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwIGR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTYgc2NhbGUtNzUgdG9wLTMgLXotMTAgb3JpZ2luLVswXSBwZWVyLWZvY3VzOmxlZnQtMCBwZWVyLWZvY3VzOnRleHQtYmx1ZS02MDAgcGVlci1mb2N1czpkYXJrOnRleHQtYmx1ZS01MDAgcGVlci1wbGFjZWhvbGRlci1zaG93bjpzY2FsZS0xMDAgcGVlci1wbGFjZWhvbGRlci1zaG93bjp0cmFuc2xhdGUteS0wIHBlZXItZm9jdXM6c2NhbGUtNzUgcGVlci1mb2N1czotdHJhbnNsYXRlLXktNidcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUGhvbmUgbnVtYmVyICgxMjMtNDU2LTc4OTApXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSB6LTAgdy1mdWxsIG1iLTYgZ3JvdXAnPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgIG5hbWU9J2Zsb2F0aW5nX2NvbXBhbnknXG4gICAgICAgICAgICAgIGlkPSdmbG9hdGluZ19jb21wYW55J1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J2Jsb2NrIHB5LTIuNSBweC0wIHctZnVsbCB0ZXh0LXNtIHRleHQtZ3JheS05MDAgYmctdHJhbnNwYXJlbnQgYm9yZGVyLTAgYm9yZGVyLWItMiBib3JkZXItZ3JheS0zMDAgYXBwZWFyYW5jZS1ub25lIGRhcms6dGV4dC13aGl0ZSBkYXJrOmJvcmRlci1ncmF5LTYwMCBkYXJrOmZvY3VzOmJvcmRlci1ibHVlLTUwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0wIGZvY3VzOmJvcmRlci1ibHVlLTYwMCBwZWVyJ1xuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nICdcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgaHRtbEZvcj0nZmxvYXRpbmdfY29tcGFueSdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdhYnNvbHV0ZSB0ZXh0LXNtIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwIGR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTYgc2NhbGUtNzUgdG9wLTMgLXotMTAgb3JpZ2luLVswXSBwZWVyLWZvY3VzOmxlZnQtMCBwZWVyLWZvY3VzOnRleHQtYmx1ZS02MDAgcGVlci1mb2N1czpkYXJrOnRleHQtYmx1ZS01MDAgcGVlci1wbGFjZWhvbGRlci1zaG93bjpzY2FsZS0xMDAgcGVlci1wbGFjZWhvbGRlci1zaG93bjp0cmFuc2xhdGUteS0wIHBlZXItZm9jdXM6c2NhbGUtNzUgcGVlci1mb2N1czotdHJhbnNsYXRlLXktNidcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ29tcGFueSAoRXguIEdvb2dsZSlcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLWxnIGJnLWJsdWUtNzAwIHB4LTUgcHktMi41IHRleHQtY2VudGVyIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBob3ZlcjpiZy1ibHVlLTgwMCBmb2N1czpyaW5nLTQgZm9jdXM6cmluZy1ibHVlLTMwMCBkYXJrOmJnLWJsdWUtNjAwIGRhcms6aG92ZXI6YmctYmx1ZS03MDAgZGFyazpmb2N1czpyaW5nLWJsdWUtODAwIHNtOnctYXV0b1wiXG4gICAgICAgID5cbiAgICAgICAgICBTdWJtaXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L0Zvcm0+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgIHtsb2FkZWQgPT09IHRydWUgJiYgKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPkRvbmF0aW9uIGxpbms6PC9wPlxuICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibS02IGJyZWFrLXdvcmRzIHJvdW5kZWQtbGcgYmctZ3JheS0xMDAgcC00IGZvbnQtbW9ubyBkYXJrOmJnLXNsYXRlLTYwMFwiXG4gICAgICAgICAgICAgIGlkPVwiY29uc3RydWN0ZWRMaW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2NvbnN0cnVjdGVkTGlua31cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xpcGJvYXJkIHRleHQtbWQgdy1mdWxsIHJvdW5kZWQtbGcgYmctYmx1ZS03MDAgcHgtNSBweS0yLjUgdGV4dC1jZW50ZXIgZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBob3ZlcjpiZy1ibHVlLTgwMCBmb2N1czpyaW5nLTQgZm9jdXM6cmluZy1ibHVlLTMwMCBkYXJrOmJnLWJsdWUtNjAwIGRhcms6aG92ZXI6YmctYmx1ZS03MDAgZGFyazpmb2N1czpyaW5nLWJsdWUtODAwIHNtOnctYXV0b1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29weS5kZWZhdWx0KGNvbnN0cnVjdGVkTGluayl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDb3B5IHRvIGNsaXBib2FyZFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbWQgdy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLWJsdWUtODAwIHB4LTUgcHktMi41IHRleHQtY2VudGVyIGZvbnQtc2VtaWJvbGQgdGV4dC1ibHVlLTgwMCBob3ZlcjpiZy1ibHVlLTEwMCBmb2N1czpyaW5nLTQgZm9jdXM6cmluZy1ibHVlLTMwMCBkYXJrOmJvcmRlci0yIGRhcms6Ym9yZGVyLWJsdWUtNTAwIGRhcms6dGV4dC1ncmF5LTUwIGRhcms6aG92ZXI6YmctYmx1ZS05MDAgZGFyazpmb2N1czpyaW5nLWJsdWUtNjAwIHNtOnctYXV0b1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gd2luZG93Lm9wZW4oY29uc3RydWN0ZWRMaW5rKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIE9wZW4gTGluayBpbiBuZXcgcGFnZVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOidjNjY5OWI0MicsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtQzJHUFFWMzcuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVQ2RkdOS1ZKLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUzY1SEQ1V08uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GVlNFNlA2Ri5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtSFRZR1RHNzUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUtEQUhGS1hBLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSUtNRk00TFouanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6dHJ1ZSwnaGFzRXJyb3JCb3VuZGFyeSc6dHJ1ZX0sJ3JvdXRlcy9hZXBpJzp7J2lkJzoncm91dGVzL2FlcGknLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWVwaScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hZXBpLTRMTE1HVFQyLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5Jzp0cnVlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hZXBpLyRhZXBpdXRpbHMnOnsnaWQnOidyb3V0ZXMvYWVwaS8kYWVwaXV0aWxzJywncGFyZW50SWQnOidyb3V0ZXMvYWVwaScsJ3BhdGgnOic6YWVwaXV0aWxzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2FlcGkvJGFlcGl1dGlscy1XRkFSSVc3Ti5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5Jzp0cnVlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hZXBpL2V2ZW50cyc6eydpZCc6J3JvdXRlcy9hZXBpL2V2ZW50cycsJ3BhcmVudElkJzoncm91dGVzL2FlcGknLCdwYXRoJzonZXZlbnRzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2FlcGkvZXZlbnRzLVpYTzZIMkZZLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYWVwaS9pbmRleCc6eydpZCc6J3JvdXRlcy9hZXBpL2luZGV4JywncGFyZW50SWQnOidyb3V0ZXMvYWVwaScsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hZXBpL2luZGV4LVE3U1NDRjMzLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1LREFIRktYQS5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9kZW1vcy9hYm91dCc6eydpZCc6J3JvdXRlcy9kZW1vcy9hYm91dCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidkZW1vcy9hYm91dCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9kZW1vcy9hYm91dC01RE9SVDNXTy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2RlbW9zL2Fib3V0L2luZGV4Jzp7J2lkJzoncm91dGVzL2RlbW9zL2Fib3V0L2luZGV4JywncGFyZW50SWQnOidyb3V0ZXMvZGVtb3MvYWJvdXQnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvZGVtb3MvYWJvdXQvaW5kZXgtSFlOU1RLNkIuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9kZW1vcy9hYm91dC93aG9hJzp7J2lkJzoncm91dGVzL2RlbW9zL2Fib3V0L3dob2EnLCdwYXJlbnRJZCc6J3JvdXRlcy9kZW1vcy9hYm91dCcsJ3BhdGgnOid3aG9hJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2RlbW9zL2Fib3V0L3dob2EtSlhQSTdKR0suanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9kZW1vcy9hY3Rpb25zJzp7J2lkJzoncm91dGVzL2RlbW9zL2FjdGlvbnMnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonZGVtb3MvYWN0aW9ucycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9kZW1vcy9hY3Rpb25zLUwySk1FREJVLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9kZW1vcy9jb3JyZWN0Jzp7J2lkJzoncm91dGVzL2RlbW9zL2NvcnJlY3QnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonZGVtb3MvY29ycmVjdCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9kZW1vcy9jb3JyZWN0LU5DUVg3R1ZNLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZGVtb3MvcGFyYW1zJzp7J2lkJzoncm91dGVzL2RlbW9zL3BhcmFtcycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidkZW1vcy9wYXJhbXMnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvZGVtb3MvcGFyYW1zLU9UU0tKVERDLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZGVtb3MvcGFyYW1zLyRpZCc6eydpZCc6J3JvdXRlcy9kZW1vcy9wYXJhbXMvJGlkJywncGFyZW50SWQnOidyb3V0ZXMvZGVtb3MvcGFyYW1zJywncGF0aCc6JzppZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9kZW1vcy9wYXJhbXMvJGlkLUZEVU4zR0JQLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOnRydWUsJ2hhc0Vycm9yQm91bmRhcnknOnRydWV9LCdyb3V0ZXMvZGVtb3MvcGFyYW1zL2luZGV4Jzp7J2lkJzoncm91dGVzL2RlbW9zL3BhcmFtcy9pbmRleCcsJ3BhcmVudElkJzoncm91dGVzL2RlbW9zL3BhcmFtcycsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9kZW1vcy9wYXJhbXMvaW5kZXgtRzdYU1RGRk8uanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1XQkpFTkE1SC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUTZJRFpIQzcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3BvcnRmb2xpbyc6eydpZCc6J3JvdXRlcy9wb3J0Zm9saW8nLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncG9ydGZvbGlvJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3BvcnRmb2xpby1RQUxTVDJRSy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUTZJRFpIQzcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3Jlc3VtZSc6eydpZCc6J3JvdXRlcy9yZXN1bWUnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncmVzdW1lJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3Jlc3VtZS1RU0JLQUNNNS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC1DNjY5OUI0Mi5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG1DQUFtQztBQUFBLE1BQ2hFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFHakMsQUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLGdCQUFnQixRQUFRO0FBSTVC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
