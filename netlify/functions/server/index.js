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

// route:/Users/samblekhman/Documents/GitHub/samblekhman.com/app/root.tsx
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
var tailwind_default = "/build/_assets/tailwind-YNWLXWV7.css";

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
  }, "Portfolio"))), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "block text-white sm:hidden "
  }, /* @__PURE__ */ import_react3.default.createElement(DrawerExample, null))))), /* @__PURE__ */ import_react3.default.createElement("main", {
    className: "overflow-hidden"
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

// route:/Users/samblekhman/Documents/GitHub/samblekhman.com/app/root.tsx
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
      message = /* @__PURE__ */ React.createElement("p", null, "Oops! Looks like you tried to visit a page that you do not have access to.");
      break;
    case 404:
      message = /* @__PURE__ */ React.createElement("p", null, "Oops! Looks like you tried to visit a page that does not exist.");
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ React.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React.createElement(import_react4.ChakraProvider, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("h1", null, caught.status, ": ", caught.statusText), message)));
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
    className: "dark:bg-slate-900"
  }, children, /* @__PURE__ */ React.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), /* @__PURE__ */ React.createElement(import_remix3.LiveReload, null)));
}

// route:/Users/samblekhman/Documents/GitHub/samblekhman.com/app/routes/demos/actions.tsx
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

// route:/Users/samblekhman/Documents/GitHub/samblekhman.com/app/routes/demos/correct.tsx
var correct_exports = {};
__export(correct_exports, {
  default: () => NiceWork
});
init_react();
function NiceWork() {
  return /* @__PURE__ */ React.createElement("h1", null, "You got it right!");
}

// route:/Users/samblekhman/Documents/GitHub/samblekhman.com/app/routes/demos/params.tsx
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

// route:/Users/samblekhman/Documents/GitHub/samblekhman.com/app/routes/demos/params/index.tsx
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

// route:/Users/samblekhman/Documents/GitHub/samblekhman.com/app/routes/demos/params/$id.tsx
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

// route:/Users/samblekhman/Documents/GitHub/samblekhman.com/app/routes/demos/about.tsx
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

// route:/Users/samblekhman/Documents/GitHub/samblekhman.com/app/routes/demos/about.tsx
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

// route:/Users/samblekhman/Documents/GitHub/samblekhman.com/app/routes/demos/about/index.tsx
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

// route:/Users/samblekhman/Documents/GitHub/samblekhman.com/app/routes/demos/about/whoa.tsx
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

// route:/Users/samblekhman/Documents/GitHub/samblekhman.com/app/routes/portfolio.tsx
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

// route:/Users/samblekhman/Documents/GitHub/samblekhman.com/app/routes/portfolio.tsx
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

// route:/Users/samblekhman/Documents/GitHub/samblekhman.com/app/routes/resume.tsx
var resume_exports = {};
__export(resume_exports, {
  default: () => ResumePage
});
init_react();

// app/assets/Resume.png
var Resume_default = "/build/_assets/Resume-ZKSY6K4H.png";

// route:/Users/samblekhman/Documents/GitHub/samblekhman.com/app/routes/resume.tsx
function ResumePage() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto mb-10 flex max-w-4xl items-center justify-center px-4"
  }, /* @__PURE__ */ React.createElement("img", {
    src: Resume_default,
    alt: "Sam Blekhman's Resume",
    className: "rounded-lg"
  }));
}

// route:/Users/samblekhman/Documents/GitHub/samblekhman.com/app/routes/index.tsx
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

// route:/Users/samblekhman/Documents/GitHub/samblekhman.com/app/routes/aepi.tsx
var aepi_exports = {};
__export(aepi_exports, {
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
  return /* @__PURE__ */ React.createElement(import_remix12.Outlet, null);
}

// route:/Users/samblekhman/Documents/GitHub/samblekhman.com/app/routes/aepi/index.tsx
var aepi_exports2 = {};
__export(aepi_exports2, {
  action: () => action2,
  default: () => AEPiIndexRoute
});
init_react();
var import_react7 = __toModule(require("react"));
var import_remix13 = __toModule(require_remix());
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
function AEPiIndexRoute() {
  const transition = (0, import_remix13.useTransition)();
  let constructedLink = (0, import_remix13.useActionData)();
  const [loaded, setLoaded] = (0, import_react7.useState)(false);
  const [currency, setCurrency] = (0, import_react7.useState)("US");
  (0, import_react7.useEffect)(() => {
    transition.state === "submitting" && setLoaded(true);
  }, [transition]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col items-center justify-center max-w-4xl min-h-full gap-8 p-16 m-auto dark:text-gray-50"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl font-semibold"
  }, "AEPi Donation Link Generator"), /* @__PURE__ */ React.createElement(import_remix13.Form, {
    method: "post",
    className: "w-full",
    autoComplete: "off"
  }, /* @__PURE__ */ React.createElement("fieldset", null), /* @__PURE__ */ React.createElement("legend", {
    className: "sr-only"
  }, "Currency"), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center mb-4"
  }, /* @__PURE__ */ React.createElement("input", {
    id: "US",
    type: "radio",
    name: "currency",
    value: "US",
    onChange: () => setCurrency("US"),
    checked: currency === "US",
    className: "w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600",
    "aria-labelledby": "US",
    "aria-describedby": "US"
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "US",
    className: "block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
  }, "United States")), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center mb-4"
  }, /* @__PURE__ */ React.createElement("input", {
    id: "Canada",
    type: "radio",
    name: "currency",
    value: "Canada",
    onChange: () => setCurrency("Canada"),
    checked: currency === "Canada",
    className: "w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600",
    "aria-labelledby": "Canada",
    "aria-describedby": "Canada"
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "Canada",
    className: "block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
  }, "Canada")), /* @__PURE__ */ React.createElement("div", {
    className: "relative z-0 w-full mb-6 group"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: currency === "US" ? "campaign" : "canadiancampaign",
    id: currency === "US" ? "campaign" : "canadiancampaign",
    className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
    placeholder: " "
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: currency === "US" ? "campaign" : "canadiancampaign",
    className: "absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
  }, "Campaign Name")), /* @__PURE__ */ React.createElement("div", {
    className: "relative z-0 w-full mb-6 group"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "fund",
    id: "floating_fund",
    className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
    placeholder: " "
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "floating_fund",
    className: "absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
  }, "Fund Name")), /* @__PURE__ */ React.createElement("div", {
    className: "grid xl:grid-cols-2 xl:gap-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative z-0 w-full mb-6 group"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "number",
    name: "appeal",
    id: "appeal",
    className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
    placeholder: " "
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "appeal",
    className: "absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
  }, "Appeal ID")), /* @__PURE__ */ React.createElement("div", {
    className: "relative z-0 w-full mb-6 group"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "number",
    name: "pledge",
    id: "pledge",
    className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
    placeholder: " "
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "pledge",
    className: "absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
  }, "Pledge ID"))), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  }, "Submit")), /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, loaded === true && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", {
    className: "font-medium"
  }, "Donation link:"), /* @__PURE__ */ React.createElement("p", {
    className: "p-4 m-6 font-mono break-words bg-gray-100 dark:bg-slate-600 rounded-lg",
    id: "constructedLink"
  }, constructedLink), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-4"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "clipboard text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    onClick: () => copy.default(constructedLink)
  }, "Copy to clipboard"), /* @__PURE__ */ React.createElement("button", {
    className: "text-blue-800 hover:bg-blue-100 focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:text-gray-50 dark:hover:bg-blue-900 dark:focus:ring-blue-600 dark:border-2 dark:border-blue-500 border-2 border-blue-800",
    onClick: () => window.open(constructedLink)
  }, "Open Link in new page")))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "db67ffd7", "entry": { "module": "/build/entry.client-CH4EFVYV.js", "imports": ["/build/_shared/chunk-T6FGNKVJ.js", "/build/_shared/chunk-NV2XLIRP.js", "/build/_shared/chunk-FVSE6P6F.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-UG76M2SW.js", "imports": ["/build/_shared/chunk-IKMFM4LZ.js", "/build/_shared/chunk-KDAHFKXA.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/aepi": { "id": "routes/aepi", "parentId": "root", "path": "aepi", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/aepi-VTMYW77T.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/aepi/index": { "id": "routes/aepi/index", "parentId": "routes/aepi", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/aepi/index-YGYOWQY7.js", "imports": ["/build/_shared/chunk-KDAHFKXA.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/demos/about": { "id": "routes/demos/about", "parentId": "root", "path": "demos/about", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/demos/about-4B7BQKB4.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/demos/about/index": { "id": "routes/demos/about/index", "parentId": "routes/demos/about", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/demos/about/index-3MWW35IS.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/demos/about/whoa": { "id": "routes/demos/about/whoa", "parentId": "routes/demos/about", "path": "whoa", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/demos/about/whoa-Y37HFVKZ.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/demos/actions": { "id": "routes/demos/actions", "parentId": "root", "path": "demos/actions", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/demos/actions-ZOGL5DCL.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/demos/correct": { "id": "routes/demos/correct", "parentId": "root", "path": "demos/correct", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/demos/correct-MKJRLPOE.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/demos/params": { "id": "routes/demos/params", "parentId": "root", "path": "demos/params", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/demos/params-YJ77NNXC.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/demos/params/$id": { "id": "routes/demos/params/$id", "parentId": "routes/demos/params", "path": ":id", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/demos/params/$id-UPW4AD7I.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/demos/params/index": { "id": "routes/demos/params/index", "parentId": "routes/demos/params", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/demos/params/index-QIQRDSWK.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-AWLAD5ES.js", "imports": ["/build/_shared/chunk-Q6IDZHC7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/portfolio": { "id": "routes/portfolio", "parentId": "root", "path": "portfolio", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/portfolio-YC42B6E3.js", "imports": ["/build/_shared/chunk-Q6IDZHC7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/resume": { "id": "routes/resume", "parentId": "root", "path": "resume", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/resume-HQHF4L2E.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-DB67FFD7.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi8uLi8uLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L1VzZXJzL3NhbWJsZWtobWFuL0RvY3VtZW50cy9HaXRIdWIvc2FtYmxla2htYW4uY29tL2FwcC9yb290LnRzeCIsICIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9sYXlvdXQudHN4IiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL2ljb25zLnRzeCIsICJyb3V0ZTovVXNlcnMvc2FtYmxla2htYW4vRG9jdW1lbnRzL0dpdEh1Yi9zYW1ibGVraG1hbi5jb20vYXBwL3JvdXRlcy9kZW1vcy9hY3Rpb25zLnRzeCIsICJyb3V0ZTovVXNlcnMvc2FtYmxla2htYW4vRG9jdW1lbnRzL0dpdEh1Yi9zYW1ibGVraG1hbi5jb20vYXBwL3JvdXRlcy9kZW1vcy9jb3JyZWN0LnRzeCIsICJyb3V0ZTovVXNlcnMvc2FtYmxla2htYW4vRG9jdW1lbnRzL0dpdEh1Yi9zYW1ibGVraG1hbi5jb20vYXBwL3JvdXRlcy9kZW1vcy9wYXJhbXMudHN4IiwgInJvdXRlOi9Vc2Vycy9zYW1ibGVraG1hbi9Eb2N1bWVudHMvR2l0SHViL3NhbWJsZWtobWFuLmNvbS9hcHAvcm91dGVzL2RlbW9zL3BhcmFtcy9pbmRleC50c3giLCAicm91dGU6L1VzZXJzL3NhbWJsZWtobWFuL0RvY3VtZW50cy9HaXRIdWIvc2FtYmxla2htYW4uY29tL2FwcC9yb3V0ZXMvZGVtb3MvcGFyYW1zLyRpZC50c3giLCAicm91dGU6L1VzZXJzL3NhbWJsZWtobWFuL0RvY3VtZW50cy9HaXRIdWIvc2FtYmxla2htYW4uY29tL2FwcC9yb3V0ZXMvZGVtb3MvYWJvdXQudHN4IiwgInJvdXRlOi9Vc2Vycy9zYW1ibGVraG1hbi9Eb2N1bWVudHMvR2l0SHViL3NhbWJsZWtobWFuLmNvbS9hcHAvcm91dGVzL2RlbW9zL2Fib3V0L2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvc2FtYmxla2htYW4vRG9jdW1lbnRzL0dpdEh1Yi9zYW1ibGVraG1hbi5jb20vYXBwL3JvdXRlcy9kZW1vcy9hYm91dC93aG9hLnRzeCIsICJyb3V0ZTovVXNlcnMvc2FtYmxla2htYW4vRG9jdW1lbnRzL0dpdEh1Yi9zYW1ibGVraG1hbi5jb20vYXBwL3JvdXRlcy9wb3J0Zm9saW8udHN4IiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL3Byb2plY3RDYXJkLnRzeCIsICJyb3V0ZTovVXNlcnMvc2FtYmxla2htYW4vRG9jdW1lbnRzL0dpdEh1Yi9zYW1ibGVraG1hbi5jb20vYXBwL3JvdXRlcy9yZXN1bWUudHN4IiwgInJvdXRlOi9Vc2Vycy9zYW1ibGVraG1hbi9Eb2N1bWVudHMvR2l0SHViL3NhbWJsZWtobWFuLmNvbS9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvc2FtYmxla2htYW4vRG9jdW1lbnRzL0dpdEh1Yi9zYW1ibGVraG1hbi5jb20vYXBwL3JvdXRlcy9hZXBpLnRzeCIsICJyb3V0ZTovVXNlcnMvc2FtYmxla2htYW4vRG9jdW1lbnRzL0dpdEh1Yi9zYW1ibGVraG1hbi5jb20vYXBwL3JvdXRlcy9hZXBpL2luZGV4LnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJpbXBvcnQgeyBjcmVhdGVSZXF1ZXN0SGFuZGxlciB9IGZyb20gXCJAcmVtaXgtcnVuL25ldGxpZnlcIjtcbmltcG9ydCAqIGFzIGJ1aWxkIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjtcblxuLypcbiAqIFJldHVybnMgYSBjb250ZXh0IG9iamVjdCB3aXRoIGF0IG1vc3QgMyBrZXlzOlxuICogIC0gYG5ldGxpZnlHcmFwaFRva2VuYDogcmF3IGF1dGhlbnRpY2F0aW9uIHRva2VuIHRvIHVzZSB3aXRoIE5ldGxpZnkgR3JhcGhcbiAqICAtIGBjbGllbnROZXRsaWZ5R3JhcGhBY2Nlc3NUb2tlbmA6IEZvciB1c2Ugd2l0aCBKV1RzIGdlbmVyYXRlZCBieVxuICogICAgYG5ldGxpZnktZ3JhcGgtYXV0aGAuXG4gKiAgLSBgbmV0bGlmeUdyYXBoU2lnbmF0dXJlYDogYSBzaWduYXR1cmUgZm9yIHN1YnNjcmlwdGlvbiBldmVudHMuIFdpbGwgYmVcbiAqICAgIHByZXNlbnQgaWYgYSBzZWNyZXQgaXMgc2V0LlxuICovXG5mdW5jdGlvbiBnZXRMb2FkQ29udGV4dChldmVudCwgY29udGV4dCkge1xuICBsZXQgcmF3QXV0aG9yaXphdGlvblN0cmluZztcbiAgbGV0IG5ldGxpZnlHcmFwaFRva2VuO1xuXG4gIGlmIChldmVudC5hdXRobGlmeVRva2VuICE9IG51bGwpIHtcbiAgICBuZXRsaWZ5R3JhcGhUb2tlbiA9IGV2ZW50LmF1dGhsaWZ5VG9rZW47XG4gIH1cblxuICBjb25zdCBhdXRoSGVhZGVyID0gZXZlbnQuaGVhZGVyc1tcImF1dGhvcml6YXRpb25cIl07XG4gIGNvbnN0IGdyYXBoU2lnbmF0dXJlSGVhZGVyID0gZXZlbnQuaGVhZGVyc1tcIngtbmV0bGlmeS1ncmFwaC1zaWduYXR1cmVcIl07XG5cbiAgaWYgKGF1dGhIZWFkZXIgIT0gbnVsbCAmJiAvQmVhcmVyIC9naS50ZXN0KGF1dGhIZWFkZXIpKSB7XG4gICAgcmF3QXV0aG9yaXphdGlvblN0cmluZyA9IGF1dGhIZWFkZXIuc3BsaXQoXCIgXCIpWzFdO1xuICB9XG5cbiAgY29uc3QgbG9hZENvbnRleHQgPSB7XG4gICAgY2xpZW50TmV0bGlmeUdyYXBoQWNjZXNzVG9rZW46IHJhd0F1dGhvcml6YXRpb25TdHJpbmcsXG4gICAgbmV0bGlmeUdyYXBoVG9rZW46IG5ldGxpZnlHcmFwaFRva2VuLFxuICAgIG5ldGxpZnlHcmFwaFNpZ25hdHVyZTogZ3JhcGhTaWduYXR1cmVIZWFkZXJcbiAgfTtcblxuICAvLyBSZW1vdmUga2V5cyB3aXRoIHVuZGVmaW5lZCB2YWx1ZXNcbiAgT2JqZWN0LmtleXMobG9hZENvbnRleHQpLmZvckVhY2goa2V5ID0+IHtcbiAgICBpZiAobG9hZENvbnRleHRba2V5XSA9PSBudWxsKSB7XG4gICAgICBkZWxldGUgbG9hZENvbnRleHRba2V5XTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBsb2FkQ29udGV4dDtcbn1cblxuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBjcmVhdGVSZXF1ZXN0SGFuZGxlcih7XG4gIGJ1aWxkLFxuICBnZXRMb2FkQ29udGV4dCxcbiAgbW9kZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlZcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9zYW1ibGVraG1hbi9Eb2N1bWVudHMvR2l0SHViL3NhbWJsZWtobWFuLmNvbS9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvc2FtYmxla2htYW4vRG9jdW1lbnRzL0dpdEh1Yi9zYW1ibGVraG1hbi5jb20vYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9zYW1ibGVraG1hbi9Eb2N1bWVudHMvR2l0SHViL3NhbWJsZWtobWFuLmNvbS9hcHAvcm91dGVzL2RlbW9zL2FjdGlvbnMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9zYW1ibGVraG1hbi9Eb2N1bWVudHMvR2l0SHViL3NhbWJsZWtobWFuLmNvbS9hcHAvcm91dGVzL2RlbW9zL2NvcnJlY3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9zYW1ibGVraG1hbi9Eb2N1bWVudHMvR2l0SHViL3NhbWJsZWtobWFuLmNvbS9hcHAvcm91dGVzL2RlbW9zL3BhcmFtcy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL1VzZXJzL3NhbWJsZWtobWFuL0RvY3VtZW50cy9HaXRIdWIvc2FtYmxla2htYW4uY29tL2FwcC9yb3V0ZXMvZGVtb3MvcGFyYW1zL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvVXNlcnMvc2FtYmxla2htYW4vRG9jdW1lbnRzL0dpdEh1Yi9zYW1ibGVraG1hbi5jb20vYXBwL3JvdXRlcy9kZW1vcy9wYXJhbXMvJGlkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCIvVXNlcnMvc2FtYmxla2htYW4vRG9jdW1lbnRzL0dpdEh1Yi9zYW1ibGVraG1hbi5jb20vYXBwL3JvdXRlcy9kZW1vcy9hYm91dC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiL1VzZXJzL3NhbWJsZWtobWFuL0RvY3VtZW50cy9HaXRIdWIvc2FtYmxla2htYW4uY29tL2FwcC9yb3V0ZXMvZGVtb3MvYWJvdXQvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTggZnJvbSBcIi9Vc2Vycy9zYW1ibGVraG1hbi9Eb2N1bWVudHMvR2l0SHViL3NhbWJsZWtobWFuLmNvbS9hcHAvcm91dGVzL2RlbW9zL2Fib3V0L3dob2EudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTkgZnJvbSBcIi9Vc2Vycy9zYW1ibGVraG1hbi9Eb2N1bWVudHMvR2l0SHViL3NhbWJsZWtobWFuLmNvbS9hcHAvcm91dGVzL3BvcnRmb2xpby50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTAgZnJvbSBcIi9Vc2Vycy9zYW1ibGVraG1hbi9Eb2N1bWVudHMvR2l0SHViL3NhbWJsZWtobWFuLmNvbS9hcHAvcm91dGVzL3Jlc3VtZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTEgZnJvbSBcIi9Vc2Vycy9zYW1ibGVraG1hbi9Eb2N1bWVudHMvR2l0SHViL3NhbWJsZWtobWFuLmNvbS9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMiBmcm9tIFwiL1VzZXJzL3NhbWJsZWtobWFuL0RvY3VtZW50cy9HaXRIdWIvc2FtYmxla2htYW4uY29tL2FwcC9yb3V0ZXMvYWVwaS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTMgZnJvbSBcIi9Vc2Vycy9zYW1ibGVraG1hbi9Eb2N1bWVudHMvR2l0SHViL3NhbWJsZWtobWFuLmNvbS9hcHAvcm91dGVzL2FlcGkvaW5kZXgudHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9kZW1vcy9hY3Rpb25zXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9kZW1vcy9hY3Rpb25zXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImRlbW9zL2FjdGlvbnNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL2RlbW9zL2NvcnJlY3RcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2RlbW9zL2NvcnJlY3RcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiZGVtb3MvY29ycmVjdFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvZGVtb3MvcGFyYW1zXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9kZW1vcy9wYXJhbXNcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiZGVtb3MvcGFyYW1zXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9kZW1vcy9wYXJhbXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2RlbW9zL3BhcmFtcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2RlbW9zL3BhcmFtc1wiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL2RlbW9zL3BhcmFtcy8kaWRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2RlbW9zL3BhcmFtcy8kaWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9kZW1vcy9wYXJhbXNcIixcbiAgICAgIHBhdGg6IFwiOmlkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTVcbiAgICB9LFxuICBcInJvdXRlcy9kZW1vcy9hYm91dFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvZGVtb3MvYWJvdXRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiZGVtb3MvYWJvdXRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNlxuICAgIH0sXG4gIFwicm91dGVzL2RlbW9zL2Fib3V0L2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9kZW1vcy9hYm91dC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2RlbW9zL2Fib3V0XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU3XG4gICAgfSxcbiAgXCJyb3V0ZXMvZGVtb3MvYWJvdXQvd2hvYVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvZGVtb3MvYWJvdXQvd2hvYVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2RlbW9zL2Fib3V0XCIsXG4gICAgICBwYXRoOiBcIndob2FcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH0sXG4gIFwicm91dGVzL3BvcnRmb2xpb1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcG9ydGZvbGlvXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInBvcnRmb2xpb1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU5XG4gICAgfSxcbiAgXCJyb3V0ZXMvcmVzdW1lXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9yZXN1bWVcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicmVzdW1lXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEwXG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMVxuICAgIH0sXG4gIFwicm91dGVzL2FlcGlcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2FlcGlcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYWVwaVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMlxuICAgIH0sXG4gIFwicm91dGVzL2FlcGkvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2FlcGkvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9hZXBpXCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxM1xuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgbGV0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgTGluayxcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE1ldGFGdW5jdGlvbixcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbiAgdXNlQ2F0Y2gsXG59IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgc3R5bGVzIGZyb20gJ34vdGFpbHdpbmQuY3NzJ1xuaW1wb3J0IExheW91dCBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnU2FtIEJsZWtobWFuJyxcbiAgICAndGhlbWUtY29sb3InOiAnIzBmMTcyYScsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTXkgbmFtZSBpcyBTYW0gQmxla2htYW4uIEkgYW0gYW4gb3BlcmF0aW9ucyBhbmQgdGVjaG5vbG9neSBlbmdpbmVlciB0aGF0IGJlbGlldmVzIGluIG1ha2luZyB0aGUgd29ybGQgYSBiZXR0ZXIgcGxhY2UuIEkgd29yayB3aXRoIG9yZ2FuaXphdGlvbnMgbWFraW5nIGFuIGltcGFjdCBvbiBib3RoIHRoZSB3b3JsZCBhcyB3ZSBrbm93IGl0IHRvZGF5IGFuZCwgaW5leG9yYWJseSwgb24gaXRzIGZ1dHVyZS4nLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICByZWw6ICdpY29uJyxcbiAgICAgIGhyZWY6ICcvc2Zhdmljb24zMi5wbmcnLFxuICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICBzaXplczogJzMyeDMyJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlbDogJ2FwcGxlLXRvdWNoLWljb24nLFxuICAgICAgaHJlZjogJy9zZmF2aWNvbjE4MC5wbmcnLFxuICAgICAgc2l6ZXM6ICcxODB4MTgwJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlbDogJ2ljb24nLFxuICAgICAgaHJlZjogJy9zZmF2aWNvbjE2LnBuZycsXG4gICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgIHNpemVzOiAnMTZ4MTYnLFxuICAgIH0sXG4gICAge1xuICAgICAgcmVsOiAnc3R5bGVzaGVldCcsXG4gICAgICBocmVmOiAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Pb29oK0JhYnkmZGlzcGxheT1zd2FwJyxcbiAgICB9LFxuICAgIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9LFxuICBdXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8RG9jdW1lbnQ+XG4gICAgICA8Q2hha3JhUHJvdmlkZXI+XG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8L0xheW91dD5cbiAgICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gICAgPC9Eb2N1bWVudD5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSh7IGVycm9yIH06IHsgZXJyb3I6IEVycm9yIH0pIHtcbiAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgcmV0dXJuIChcbiAgICA8RG9jdW1lbnQgdGl0bGU9XCJFcnJvciFcIj5cbiAgICAgIDxDaGFrcmFQcm92aWRlcj5cbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPlRoZXJlIHdhcyBhbiBlcnJvcjwvaDE+XG4gICAgICAgICAgICA8cD57ZXJyb3IubWVzc2FnZX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgICA8L0RvY3VtZW50PlxuICApXG59XG5cbi8vIGh0dHBzOi8vcmVtaXgucnVuL2RvY3MvZW4vdjEvYXBpL2NvbnZlbnRpb25zI2NhdGNoYm91bmRhcnlcbmV4cG9ydCBmdW5jdGlvbiBDYXRjaEJvdW5kYXJ5KCkge1xuICBsZXQgY2F1Z2h0ID0gdXNlQ2F0Y2goKVxuXG4gIGxldCBtZXNzYWdlXG4gIHN3aXRjaCAoY2F1Z2h0LnN0YXR1cykge1xuICAgIGNhc2UgNDAxOlxuICAgICAgbWVzc2FnZSA9IChcbiAgICAgICAgPHA+XG4gICAgICAgICAgT29wcyEgTG9va3MgbGlrZSB5b3UgdHJpZWQgdG8gdmlzaXQgYSBwYWdlIHRoYXQgeW91IGRvIG5vdCBoYXZlIGFjY2Vzc1xuICAgICAgICAgIHRvLlxuICAgICAgICA8L3A+XG4gICAgICApXG4gICAgICBicmVha1xuICAgIGNhc2UgNDA0OlxuICAgICAgbWVzc2FnZSA9IChcbiAgICAgICAgPHA+T29wcyEgTG9va3MgbGlrZSB5b3UgdHJpZWQgdG8gdmlzaXQgYSBwYWdlIHRoYXQgZG9lcyBub3QgZXhpc3QuPC9wPlxuICAgICAgKVxuICAgICAgYnJlYWtcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoY2F1Z2h0LmRhdGEgfHwgY2F1Z2h0LnN0YXR1c1RleHQpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxEb2N1bWVudCB0aXRsZT17YCR7Y2F1Z2h0LnN0YXR1c30gJHtjYXVnaHQuc3RhdHVzVGV4dH1gfT5cbiAgICAgIDxDaGFrcmFQcm92aWRlcj5cbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICA8aDE+XG4gICAgICAgICAgICB7Y2F1Z2h0LnN0YXR1c306IHtjYXVnaHQuc3RhdHVzVGV4dH1cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIHttZXNzYWdlfVxuICAgICAgICA8L0xheW91dD5cbiAgICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gICAgPC9Eb2N1bWVudD5cbiAgKVxufVxuXG5mdW5jdGlvbiBEb2N1bWVudCh7XG4gIGNoaWxkcmVuLFxuICB0aXRsZSA9ICdTYW0gQmxla2htYW4nLFxufToge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG4gIHRpdGxlPzogc3RyaW5nXG59KSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCIgY2xhc3NOYW1lPVwiZGFyayBcIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keSBjbGFzc05hbWU9XCJkYXJrOmJnLXNsYXRlLTkwMFwiPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICA8TGl2ZVJlbG9hZCAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKVxufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IE1FTlUsIFNhbUJsZWtobWFuTG9nbyB9IGZyb20gJy4vaWNvbnMnXG5pbXBvcnQge1xuICBEcmF3ZXIsXG4gIERyYXdlckJvZHksXG4gIERyYXdlckhlYWRlcixcbiAgRHJhd2VyT3ZlcmxheSxcbiAgRHJhd2VyQ29udGVudCxcbiAgRHJhd2VyQ2xvc2VCdXR0b24sXG4gIHVzZURpc2Nsb3N1cmUsXG4gIEJ1dHRvbixcbiAgRGl2aWRlcixcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJtYi04IHRleHQtd2hpdGVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC02XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIj5cbiAgICAgICAgICAgICAgICA8U2FtQmxla2htYW5Mb2dvIC8+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0xMCBoaWRkZW4gc3BhY2UteC04IHNtOmJsb2NrXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcG9ydGZvbGlvXCI+UG9ydGZvbGlvPC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXdoaXRlIHNtOmhpZGRlbiBcIj5cbiAgICAgICAgICAgICAgPERyYXdlckV4YW1wbGUgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuXCI+e2NoaWxkcmVufTwvbWFpbj5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy03eGwgcHktMTIgcHgtNCBzbTpweC02IG1kOmZsZXggbWQ6aXRlbXMtY2VudGVyIG1kOmp1c3RpZnktYmV0d2VlbiBsZzpweC04XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHNwYWNlLXgtNiBtZDpvcmRlci0yXCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9zYmxla3NcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtZ3JheS00MDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+R2l0aHViPC9zcGFuPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC02IHctNlwiXG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI1NiAyNTBcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgIHZlcnNpb249XCIxLjFcIlxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Zz5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMTI4LjAwMTA2LDAgQzU3LjMxNzI5MjYsMCAwLDU3LjMwNjY5NDIgMCwxMjguMDAxMDYgQzAsMTg0LjU1NTI4MSAzNi42NzYxOTk3LDIzMi41MzU1NDIgODcuNTM0OTM3LDI0OS40NjA4OTkgQzkzLjkzMjAyMjMsMjUwLjY0NTc3OSA5Ni4yODA1ODgsMjQ2LjY4NDE2NSA5Ni4yODA1ODgsMjQzLjMwMzMzMyBDOTYuMjgwNTg4LDI0MC4yNTEwNDUgOTYuMTYxODg3OCwyMzAuMTY3ODk5IDk2LjEwNjc3NywyMTkuNDcyMTc2IEM2MC40OTY3NTg1LDIyNy4yMTUyMzUgNTIuOTgyNjIwNywyMDQuMzY5NzEyIDUyLjk4MjYyMDcsMjA0LjM2OTcxMiBDNDcuMTU5OTU4NCwxODkuNTc0NTk4IDM4Ljc3MDQwOCwxODUuNjQwNTM4IDM4Ljc3MDQwOCwxODUuNjQwNTM4IEMyNy4xNTY4Nzg1LDE3Ny42OTYxMTMgMzkuNjQ1ODIwNiwxNzcuODU5MzI1IDM5LjY0NTgyMDYsMTc3Ljg1OTMyNSBDNTIuNDk5MzQxOSwxNzguNzYyMjkzIDU5LjI2NzM2NSwxOTEuMDQ5ODcgNTkuMjY3MzY1LDE5MS4wNDk4NyBDNzAuNjgzNzY3NSwyMTAuNjE4NDIzIDg5LjIxMTU3NTMsMjA0Ljk2MTA5MyA5Ni41MTU4Njg1LDIwMS42OTA0ODIgQzk3LjY2NDcxNTUsMTkzLjQxNzUxMiAxMDAuOTgxOTU5LDE4Ny43NzA3OCAxMDQuNjQyNTgzLDE4NC41NzQzNTcgQzc2LjIxMTc5OSwxODEuMzM3NjYgNDYuMzI0ODE5LDE3MC4zNjIxNDQgNDYuMzI0ODE5LDEyMS4zMTU3MDIgQzQ2LjMyNDgxOSwxMDcuMzQwODg5IDUxLjMyNTA1ODgsOTUuOTIyMzY4MiA1OS41MTMyNDM3LDg2Ljk1ODM5MzcgQzU4LjE4NDIyNjgsODMuNzM0NDE1MiA1My44MDI5MjI5LDcwLjcxNTU2MiA2MC43NTMyMzU0LDUzLjA4NDM2MzYgQzYwLjc1MzIzNTQsNTMuMDg0MzYzNiA3MS41MDE5NTAxLDQ5LjY0NDE4MTMgOTUuOTYyNjQxMiw2Ni4yMDQ5NTk1IEMxMDYuMTcyOTY3LDYzLjM2ODg3NiAxMTcuMTIzMDQ3LDYxLjk0NjU5NDkgMTI4LjAwMTA2LDYxLjg5Nzg0MzIgQzEzOC44NzkwNzMsNjEuOTQ2NTk0OSAxNDkuODM3NjMyLDYzLjM2ODg3NiAxNjAuMDY3MDMzLDY2LjIwNDk1OTUgQzE4NC40OTgwNSw0OS42NDQxODEzIDE5NS4yMzE5MjYsNTMuMDg0MzYzNiAxOTUuMjMxOTI2LDUzLjA4NDM2MzYgQzIwMi4xOTkxOTcsNzAuNzE1NTYyIDE5Ny44MTU3NzMsODMuNzM0NDE1MiAxOTYuNDg2NzU2LDg2Ljk1ODM5MzcgQzIwNC42OTQwMTgsOTUuOTIyMzY4MiAyMDkuNjYwMzQzLDEwNy4zNDA4ODkgMjA5LjY2MDM0MywxMjEuMzE1NzAyIEMyMDkuNjYwMzQzLDE3MC40Nzg3MjUgMTc5LjcxNjEzMywxODEuMzAzNzQ3IDE1MS4yMTMyODEsMTg0LjQ3MjYxNCBDMTU1LjgwNDQzLDE4OC40NDQ4MjggMTU5Ljg5NTM0MiwxOTYuMjM0NTE4IDE1OS44OTUzNDIsMjA4LjE3NjU5MyBDMTU5Ljg5NTM0MiwyMjUuMzAzMzE3IDE1OS43NDY5NjgsMjM5LjA4NzM2MSAxNTkuNzQ2OTY4LDI0My4zMDMzMzMgQzE1OS43NDY5NjgsMjQ2LjcwOTYwMSAxNjIuMDUxMDIsMjUwLjcwMDg5IDE2OC41MzkyNSwyNDkuNDQzOTQxIEMyMTkuMzcwNDMyLDIzMi40OTk1MDcgMjU2LDE4NC41MzYyMDQgMjU2LDEyOC4wMDEwNiBDMjU2LDU3LjMwNjY5NDIgMTk4LjY5MTE4NywwIDEyOC4wMDEwNiwwIFogTTQ3Ljk0MDU1OTMsMTgyLjM0MDIxMiBDNDcuNjU4NjQ2NSwxODIuOTc2MTA1IDQ2LjY1ODE3NDUsMTgzLjE2Njg3MyA0NS43NDY3Mjc3LDE4Mi43MzAyMjcgQzQ0LjgxODMyMzUsMTgyLjMxMjY1NiA0NC4yOTY4OTE0LDE4MS40NDU3MjIgNDQuNTk3ODgwOCwxODAuODA3NzEgQzQ0Ljg3MzQzNDQsMTgwLjE1MjczOSA0NS44NzYwMjYsMTc5Ljk3MDQ1IDQ2LjgwMjMxMDMsMTgwLjQwOTIxNiBDNDcuNzMyODM0MiwxODAuODI2Nzg2IDQ4LjI2Mjc0NTEsMTgxLjcwMjE5OSA0Ny45NDA1NTkzLDE4Mi4zNDAyMTIgWiBNNTQuMjM2Nzg5MiwxODcuOTU4MjU0IEM1My42MjYzMzE4LDE4OC41MjQxOTkgNTIuNDMyOTcyMywxODguMjYxMzYzIDUxLjYyMzI2ODIsMTg3LjM2Njg3NCBDNTAuNzg2MDA4OCwxODYuNDc0NTA0IDUwLjYyOTE1NTMsMTg1LjI4MTE0NCA1MS4yNDgwOTEyLDE4NC43MDY3MiBDNTEuODc3NjI1NCwxODQuMTQwNzc1IDUzLjAzNDk1MTIsMTg0LjQwNTczMSA1My44NzQzMzAyLDE4NS4yOTgxMDEgQzU0LjcxMTU4OTIsMTg2LjIwMTA2OSA1NC44NzQ4MDE5LDE4Ny4zODU5NSA1NC4yMzY3ODkyLDE4Ny45NTgyNTQgWiBNNTguNTU2MjQxMywxOTUuMTQ2MzQ3IEM1Ny43NzE5NzMyLDE5NS42OTEwOTYgNTYuNDg5NTg4NiwxOTUuMTgwMjYxIDU1LjY5Njg0MTcsMTk0LjA0MjAxMyBDNTQuOTEyNTczMywxOTIuOTAzNzY0IDU0LjkxMjU3MzMsMTkxLjUzODcxMyA1NS43MTM3OTksMTkwLjk5MTg0NSBDNTYuNTA4NjY1MSwxOTAuNDQ0OTc3IDU3Ljc3MTk3MzIsMTkwLjkzNjczNSA1OC41NzUzMTgxLDE5Mi4wNjY1MDUgQzU5LjM1NzQ2NjksMTkzLjIyMzgzIDU5LjM1NzQ2NjksMTk0LjU4ODg4IDU4LjU1NjI0MTMsMTk1LjE0NjM0NyBaIE02NS44NjEzNTkyLDIwMy40NzExNzQgQzY1LjE1OTc1NzEsMjA0LjI0NDg0NiA2My42NjU0MDgzLDIwNC4wMzcxMiA2Mi41NzE2NzE3LDIwMi45ODE1MzggQzYxLjQ1MjQ5OTksMjAxLjk0OTI3IDYxLjE0MDkxMjIsMjAwLjQ4NDU5NiA2MS44NDQ2MzQxLDE5OS43MTA5MjYgQzYyLjU1NDcxNDYsMTk4LjkzNTEzNyA2NC4wNTc1NDIyLDE5OS4xNTM0NiA2NS4xNTk3NTcxLDIwMC4yMDA1NjQgQzY2LjI3MDQ1MDYsMjAxLjIzMDcxMiA2Ni42MDk1OTM2LDIwMi43MDU5ODQgNjUuODYxMzU5MiwyMDMuNDcxMTc0IFogTTc1LjMwMjUxNTEsMjA2LjI4MTU0MiBDNzQuOTkzMDQ3NCwyMDcuMjg0MTM0IDczLjU1MzgwOSwyMDcuNzM5ODU3IDcyLjEwMzk3MjQsMjA3LjMxMzgwOSBDNzAuNjU2MjU1NiwyMDYuODc1MDQzIDY5LjcwODc3NDgsMjA1LjcwMDc2MSA3MC4wMDEyODU3LDIwNC42ODc1NzEgQzcwLjMwMjI3NSwyMDMuNjc4NjIxIDcxLjc0Nzg3MjEsMjAzLjIwMzgyIDczLjIwODMwNjksMjAzLjY1OTU0MyBDNzQuNjUzOTA0MSwyMDQuMDk2MTkgNzUuNjAzNTA0OCwyMDUuMjYxOTk0IDc1LjMwMjUxNTEsMjA2LjI4MTU0MiBaIE04Ni4wNDY5NDcsMjA3LjQ3MzYyNyBDODYuMDgyOTgwNiwyMDguNTI5MjA5IDg0Ljg1MzU4NzEsMjA5LjQwNDYyMiA4My4zMzE2ODI5LDIwOS40MjM3IEM4MS44MDEzLDIwOS40NTc2MTQgODAuNTYzNDI4LDIwOC42MDMzOTggODAuNTQ2NDcwOCwyMDcuNTY0NzcyIEM4MC41NDY0NzA4LDIwNi40OTg1OTEgODEuNzQ4MzA4OCwyMDUuNjMxNjU3IDgzLjI3ODY5MTcsMjA1LjYwNjIyMSBDODQuODAwNTk2MiwyMDUuNTc2NTQ2IDg2LjA0Njk0NywyMDYuNDI0NDAzIDg2LjA0Njk0NywyMDcuNDczNjI3IFogTTk2LjYwMjE0NzEsMjA3LjA2OTAyMyBDOTYuNzg0NDM2NiwyMDguMDk5MTcxIDk1LjcyNjczNDEsMjA5LjE1Njg3MiA5NC4yMTU0MjgsMjA5LjQzODc4NSBDOTIuNzI5NTU3NywyMDkuNzEwMDk5IDkxLjM1MzkwODYsMjA5LjA3NDIwNiA5MS4xNjUyNjAzLDIwOC4wNTI1MzggQzkwLjk4MDg1MTUsMjA2Ljk5Njk1NSA5Mi4wNTc2MzA2LDIwNS45MzkyNTMgOTMuNTQxMzgxMywyMDUuNjY1ODIgQzk1LjA1NDgwNywyMDUuNDAyOTg0IDk2LjQwOTI1OTYsMjA2LjAyMTkxOSA5Ni42MDIxNDcxLDIwNy4wNjkwMjMgWlwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgey8qIDxhXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3NhbWJsZWtobWFuL1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1ncmF5LTQwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5MaW5rZWRpbjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNiB3LTZcIlxuICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNTYgMjUwXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGc+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBkPVwiTTIxOC4xMjMxMjIsMjE4LjEyNzM5MiBMMTgwLjE5MTkyOCwyMTguMTI3MzkyIEwxODAuMTkxOTI4LDE1OC43MjQyNjMgQzE4MC4xOTE5MjgsMTQ0LjU1OTAyMyAxNzkuOTM5MDUzLDEyNi4zMjM5OTMgMTYwLjQ2Mzc1NiwxMjYuMzIzOTkzIEMxNDAuNzA3OTI2LDEyNi4zMjM5OTMgMTM3LjY4NTI4NCwxNDEuNzU3NTg1IDEzNy42ODUyODQsMTU3LjY5Mjk4NiBMMTM3LjY4NTI4NCwyMTguMTIzNDQxIEw5OS43NTQwODk0LDIxOC4xMjM0NDEgTDk5Ljc1NDA4OTQsOTUuOTY2NTIwNyBMMTM2LjE2ODAzNiw5NS45NjY1MjA3IEwxMzYuMTY4MDM2LDExMi42NjA1NjIgTDEzNi42Nzc3MzYsMTEyLjY2MDU2MiBDMTQ0LjEwMjc0Niw5OS45NjUwMDI3IDE1Ny45MDg2MzcsOTIuMzgyNDUyOCAxNzIuNjA1Njg5LDkyLjkyODAwNzYgQzIxMS4wNTA1MzUsOTIuOTI4MDA3NiAyMTguMTM4OTI3LDExOC4yMTYwMjMgMjE4LjEzODkyNywxNTEuMTE0MTUxIEwyMTguMTIzMTIyLDIxOC4xMjczOTIgWiBNNTYuOTU1MDU4Nyw3OS4yNjg1MjgyIEM0NC43OTgxOTY5LDc5LjI3MDcwOTkgMzQuOTQxMzQ0Myw2OS40MTcxNzk3IDM0LjkzOTE2MTgsNTcuMjYwMDUyIEMzNC45MzY5OCw0NS4xMDI5MjQ0IDQ0Ljc5MDI5NDgsMzUuMjQ1ODU2MiA1Ni45NDcxNTY2LDM1LjI0MzY3MzYgQzY5LjEwNDAxODUsMzUuMjQxNDkxNiA3OC45NjA4NzEzLDQ1LjA5NTAyMTcgNzguOTYzMDU0LDU3LjI1MjE0OTMgQzc4Ljk2NDEwMTcsNjMuMDkwMjA4IDc2LjY0NTk5NzYsNjguNjg5NTcxNCA3Mi41MTg2OTc5LDcyLjgxODQ0MzMgQzY4LjM5MTM5ODIsNzYuOTQ3MzE1MyA2Mi43OTI5ODk4LDc5LjI2NzQ4IDU2Ljk1NTA1ODcsNzkuMjY4NTI4MiBNNzUuOTIwNjU1OCwyMTguMTI3MzkyIEwzNy45NDk5NSwyMTguMTI3MzkyIEwzNy45NDk5NSw5NS45NjY1MjA3IEw3NS45MjA2NTU4LDk1Ljk2NjUyMDcgTDc1LjkyMDY1NTgsMjE4LjEyNzM5MiBaIE0yMzcuMDMzNDAzLDAuMDE4MjU3NzA5MSBMMTguODg5NTI0OSwwLjAxODI1NzcwOTEgQzguNTc5NTk0NjksLTAuMDk4MDkyMzk3MSAwLjEyNDgyNzAzOCw4LjE2MDU2MjMxIC0wLjAwMSwxOC40NzA2MDY2IEwtMC4wMDEsMjM3LjUyNDA5MSBDMC4xMjA1MTkwNTIsMjQ3LjgzOTEwMyA4LjU3NDYwNjMxLDI1Ni4xMDU5MzQgMTguODg5NTI0OSwyNTUuOTk3NyBMMjM3LjAzMzQwMywyNTUuOTk3NyBDMjQ3LjM2ODcyOCwyNTYuMTI1ODE4IDI1NS44NTU5MjIsMjQ3Ljg1OTQ2NCAyNTUuOTk5LDIzNy41MjQwOTEgTDI1NS45OTksMTguNDU0ODAxNiBDMjU1Ljg1MTYyNCw4LjEyNDM4OTc5IDI0Ny4zNjM3NDIsLTAuMTMzNzkyODY4IDIzNy4wMzM0MDMsMC4wMDA3OTA4MDcwNTVcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYT4gKi99XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgaHJlZj1cIm1haWx0bzpzYW1AYmxla3MuZGV2XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LWdyYXktNDAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkVtYWlsPC9zcGFuPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYgdy02XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgICAgZD1cIk0zIDhsNy44OSA1LjI2YTIgMiAwIDAwMi4yMiAwTDIxIDhNNSAxOWgxNGEyIDIgMCAwMDItMlY3YTIgMiAwIDAwLTItMkg1YTIgMiAwIDAwLTIgMnYxMGEyIDIgMCAwMDIgMnpcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCBtZDpvcmRlci0xIG1kOm10LTBcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgXHUwMEE5IDIwMjIgc2FtYmxla2htYW4uY29tLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvPlxuICApXG59XG5cbmZ1bmN0aW9uIERyYXdlckV4YW1wbGUoKSB7XG4gIGNvbnN0IHsgaXNPcGVuLCBvbk9wZW4sIG9uQ2xvc2UgfSA9IHVzZURpc2Nsb3N1cmUoKVxuICBjb25zdCBidG5SZWYgPSBSZWFjdC51c2VSZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+KG51bGwpXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJ1dHRvblxuICAgICAgICByZWY9e2J0blJlZn1cbiAgICAgICAgYmdDb2xvcj1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgY29sb3JTY2hlbWU9XCJ3aGl0ZUFscGhhXCJcbiAgICAgICAgb25DbGljaz17b25PcGVufVxuICAgICAgPlxuICAgICAgICA8TUVOVSAvPlxuICAgICAgPC9CdXR0b24+XG4gICAgICA8RHJhd2VyXG4gICAgICAgIGlzT3Blbj17aXNPcGVufVxuICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXG4gICAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XG4gICAgICAgIGZpbmFsRm9jdXNSZWY9e2J0blJlZn1cbiAgICAgICAgc2l6ZT1cImZ1bGxcIlxuICAgICAgPlxuICAgICAgICA8RHJhd2VyT3ZlcmxheSAvPlxuICAgICAgICA8RHJhd2VyQ29udGVudCBiZ0NvbG9yPVwiZ3JheS44MDBcIj5cbiAgICAgICAgICA8RHJhd2VyQ2xvc2VCdXR0b24gY29sb3I9XCJ3aGl0ZVwiIC8+XG4gICAgICAgICAgPERyYXdlckhlYWRlciBjb2xvcj1cIndoaXRlXCI+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yXCI+XG4gICAgICAgICAgICAgICAgPFNhbUJsZWtobWFuTG9nbyAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L0RyYXdlckhlYWRlcj5cbiAgICAgICAgICA8RGl2aWRlcj48L0RpdmlkZXI+XG4gICAgICAgICAgPERyYXdlckJvZHk+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS00IHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgPExpbmsgcmVsb2FkRG9jdW1lbnQgdG89XCIvXCI+XG4gICAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIHJlbG9hZERvY3VtZW50IHRvPVwiL3BvcnRmb2xpb1wiPlxuICAgICAgICAgICAgICAgIFBvcnRmb2xpb1xuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0RyYXdlckJvZHk+XG4gICAgICAgIDwvRHJhd2VyQ29udGVudD5cbiAgICAgIDwvRHJhd2VyPlxuICAgIDwvPlxuICApXG59XG4iLCAiaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBmcyBmcm9tICdmcy9wcm9taXNlcydcblxuaW1wb3J0IGV4cHJlc3NJY29uIGZyb20gJ34vYXNzZXRzL3N2Z3MvZXhwcmVzcy5zdmcnXG5pbXBvcnQgZ2l0SWNvbiBmcm9tICd+L2Fzc2V0cy9zdmdzL2dpdC1pY29uLnN2ZydcbmltcG9ydCB0eXBlc2NyaXB0SWNvbiBmcm9tICd+L2Fzc2V0cy9zdmdzL3R5cGVzY3JpcHQuc3ZnJ1xuaW1wb3J0IG1vbmdvZGJJY29uIGZyb20gJ34vYXNzZXRzL3N2Z3MvbW9uZ29kYi5zdmcnXG5pbXBvcnQgbXlzcWxJY29uIGZyb20gJ34vYXNzZXRzL3N2Z3MvbXlzcWwtaWNvbi5zdmcnXG5pbXBvcnQgbm9kZWpzSWNvbiBmcm9tICd+L2Fzc2V0cy9zdmdzL25vZGVqcy1pY29uLnN2ZydcbmltcG9ydCBwaHBJY29uIGZyb20gJ34vYXNzZXRzL3N2Z3MvcGhwLWFsdC5zdmcnXG5pbXBvcnQgcG9zdGdyZXNxbEljb24gZnJvbSAnfi9hc3NldHMvc3Zncy9wb3N0Z3Jlc3FsLnN2ZydcbmltcG9ydCBwcmlzbWFJY29uIGZyb20gJ34vYXNzZXRzL3N2Z3MvcHJpc21hLnN2ZydcbmltcG9ydCBzcWxpdGVJY29uIGZyb20gJ34vYXNzZXRzL3N2Z3Mvc3FsaXRlLnN2ZydcbmltcG9ydCB0YWlsd2luZEljb24gZnJvbSAnfi9hc3NldHMvc3Zncy90YWlsd2luZGNzcy1pY29uLnN2ZydcbmltcG9ydCB3b3JkcHJlc3NJY29uIGZyb20gJ34vYXNzZXRzL3N2Z3Mvd29yZHByZXNzLWljb24uc3ZnJ1xuaW1wb3J0IGphdmFzY3JpcHRJY29uIGZyb20gJ34vYXNzZXRzL3N2Z3MvamF2YXNjcmlwdC5zdmcnXG5pbXBvcnQgbmV0bGlmeUljb24gZnJvbSAnfi9hc3NldHMvc3Zncy9uZXRsaWZ5LnN2ZydcbmltcG9ydCBmbHlJY29uIGZyb20gJ34vYXNzZXRzL3N2Z3MvZmx5LnN2ZydcbmltcG9ydCByZWFjdEljb24gZnJvbSAnfi9hc3NldHMvc3Zncy9yZWFjdC5zdmcnXG5pbXBvcnQgcmVtaXhJY29uIGZyb20gJ34vYXNzZXRzL3N2Z3MvcmVtaXgtaWNvbi5zdmcnXG5pbXBvcnQgaGVyb2t1SWNvbiBmcm9tICd+L2Fzc2V0cy9zdmdzL2hlcm9rdS1pY29uLnN2ZydcbmltcG9ydCByZWFjdHJvdXRlckljb24gZnJvbSAnfi9hc3NldHMvc3Zncy9yZWFjdC1yb3V0ZXIuc3ZnJ1xuXG5leHBvcnQgY29uc3QgU2FtQmxla2htYW5Mb2dvID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmcgY2xhc3NOYW1lPVwiYXNwZWN0LXNxdWFyZSBoLTEwIHRleHQtd2hpdGVcIj5cbiAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAxMTcuOTg2NjcgMTg1LjQyNjY3XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiPlxuICAgICAgICA8ZyBpZD1cImcxMFwiIHRyYW5zZm9ybT1cIm1hdHJpeCgxLjMzMzMzMzMsMCwwLC0xLjMzMzMzMzMsMCwxODUuNDI2NjcpXCI+XG4gICAgICAgICAgPGcgaWQ9XCJnMTJcIiB0cmFuc2Zvcm09XCJzY2FsZSgwLjEpXCI+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPVwibSA0NDIuNDMsMC4yNjE3MTkgdiAwIEMgNjc4LjU1OSwtNy44MjAzMSA4NzYuNTIzLDE3Ny4wNTEgODg0LjYwMiw0MTMuMTg0IDg5Mi42OCw2NDkuMzEzIDcwNy44MDUsODQ3LjI3NyA0NzEuNjc2LDg1NS4zNTUgYyAtOS43NDYsMC4zMzMgLTE5LjUsMC4zMzMgLTI5LjI0NiwwIHYgMCBjIC01OS4wNzEsMS44MDUgLTEwNS40ODksNTEuMTUzIC0xMDMuNjg0LDExMC4yMTkgMS43MzEsNTYuNTM2IDQ3LjE1MiwxMDEuOTU2IDEwMy42ODQsMTAzLjY3NiBoIDEzMy42OTkgYyAxNC43NzMsMC45MSAyNi4wMTYsMTMuNjIgMjUuMTEzLDI4LjM5IC0wLjgyOCwxMy41MSAtMTEuNjAxLDI0LjI5IC0yNS4xMTMsMjUuMTEgSCA0NDIuNDMgYyAtODguNjE3LDAgLTE2MC40NTMsLTcxLjgzIC0xNjAuNDUzLC0xNjAuNDQ1IDAsLTg4LjYxNCA3MS44MzYsLTE2MC40NSAxNjAuNDUzLC0xNjAuNDUgdiAwIEMgNjQ5LjEyMSw3OTguNDc3IDgxMy45NDEsNjI4LjE4NCA4MTAuNTYzLDQyMS40ODggODA3LjI2MiwyMTkuNTU5IDY0NC4zNTksNTYuNjQ4NCA0NDIuNDMsNTMuMzU5NCBIIDY4LjEyODkgViAyOTQuMzU5IGMgLTAuOTA2MiwxNC43NyAtMTMuNjEzMywyNi4wMTIgLTI4LjM4NjcsMjUuMTEgLTEzLjUxNTYsLTAuODI4IC0yNC4yODkxLC0xMS41OTggLTI1LjExMzMsLTI1LjExIFYgMjYuOTYwOSBDIDE0LjY4MzYsMTIuMTkxNCAyNi42NjQxLDAuMjYxNzE5IDQxLjQyNTgsMC4yNjE3MTkgWiBtIDAsMjY3LjI5NzI4MSBjIDg4LjYxMywwIDE2MC40NDksNzEuODMyIDE2MC40NDksMTYwLjQ0NSAwLDg4LjYxMyAtNzEuODM2LDE2MC40NDkgLTE2MC40NDksMTYwLjQ0OSB2IDAgQyAyMzUuNzM0LDU5MS44MzIgNzAuOTE4LDc2Mi4xMzMgNzQuMjk2OSw5NjguODI0IDc3LjU5NzcsMTE3MC43NSAyNDAuNDk2LDEzMzMuNjUgNDQyLjQzLDEzMzYuOTYgaCAzNzQuMjk3IHYgLTI0MC42IGMgMC45MDYsLTE0Ljc4IDEzLjYxMywtMjYuMDIgMjguMzg2LC0yNS4xMiAxMy41MTYsMC44MyAyNC4yODksMTEuNiAyNS4xMTQsMjUuMTIgdiAyNjcuMzkgYyAtMC4wNTUsMTQuNzcgLTEyLjAzNiwyNi43MSAtMjYuNzk3LDI2LjcxIGggLTQwMSBDIDIwNi4yOTcsMTM5OC41MyA4LjMzMjAzLDEyMTMuNjYgMC4yNTM5MDYsOTc3LjUyNyAtNy44MjAzMSw3NDEuMzk4IDE3Ny4wNTUsNTQzLjQzIDQxMy4xODQsNTM1LjM1NSBjIDkuNzQ2LC0wLjMzMiAxOS41LC0wLjMzMiAyOS4yNDYsMCB2IDAgQyA1MDEuNDkyLDUzMy41NTEgNTQ3LjkxNCw0ODQuMTk5IDU0Ni4xMDUsNDI1LjEzMyA1NDQuMzc5LDM2OC42MDkgNDk4Ljk1NywzMjMuMTggNDQyLjQzLDMyMS40NjEgSCAzMDguNzI3IGMgLTE0Ljc3NCwtMC45MSAtMjYuMDE2LC0xMy42MjEgLTI1LjExNCwtMjguMzkxIDAuODI4LC0xMy41MTEgMTEuNjAyLC0yNC4yODkgMjUuMTE0LC0yNS4xMDkgSCA0NDIuNDMgWiBtIDI5NC4wOTcsODI4LjgwMSBjIC0wLjkwMiwtMTQuNzggLTEzLjYxMywtMjYuMDIgLTI4LjM4NiwtMjUuMTIgLTEzLjUxMiwwLjgzIC0yNC4yODYsMTEuNiAtMjUuMTE0LDI1LjEyIHYgMTA3IEggNDQyLjQzIEMgMzA5LjUyLDEyMDAuNjQgMjAzLjk3MywxMDkwLjcxIDIwNi42ODQsOTU3LjgwMSAyMDkuMzEzLDgyOC43MDcgMzEzLjMzNiw3MjQuNjg4IDQ0Mi40Myw3MjIuMDU1IHYgMCBDIDYwNC44MjgsNzI1LjA1MSA3MzguOTA2LDU5NS44MjggNzQxLjkwMiw0MzMuNDMgNzQ0Ljg5OCwyNzEuMDMxIDYxNS42NzYsMTM2Ljk0OSA0NTMuMjczLDEzMy45NjEgYyAtMy42MTMsLTAuMDcgLTcuMjMsLTAuMDcgLTEwLjg0MywwIEggMTc1LjEyOSBjIC0xNC43NDYsLTAuMDYzIC0yNi43NDYsMTEuODQ4IC0yNi44MDEsMjYuNTk4IDAsMC4wMzEgMCwwLjA2MiAwLDAuMTAxIHYgMTMzLjY5OSBjIDAuOTAyLDE0Ljc3IDEzLjYxMywyNi4wMTIgMjguMzg3LDI1LjExIDEzLjUxMiwtMC44MjggMjQuMjg1LC0xMS41OTggMjUuMTEzLC0yNS4xMSB2IC0xMDcgSCA0NDIuNDMgQyA1NzUuMzM2LDE5MC4wNTkgNjgwLjg4MywzMDAgNjc4LjE3Miw0MzIuOTEgNjc1LjUzOSw1NjIuMDA0IDU3MS41Miw2NjYuMDIzIDQ0Mi40Myw2NjguNjU2IHYgMCBDIDI4MC4wMjcsNjY1LjY2IDE0NS45NDksNzk0Ljg4MyAxNDIuOTUzLDk1Ny4yODEgYyAtMi45OTIsMTYyLjM5OSAxMjYuMjMxLDI5Ni40NzkgMjg4LjYyOSwyOTkuNDY5IDMuNjEzLDAuMDcgNy4yMzEsMC4wNyAxMC44NDgsMCBoIDI2Ny4zOTggYyAxNC43NDYsMCAyNi42OTksLTExLjk1IDI2LjY5OSwtMjYuNyB2IC0xMzMuNjlcIlxuICAgICAgICAgICAgICBpZD1cInBhdGgxNFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9zdmc+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IE1FTlUgPSAoKSA9PiAoXG4gIDxzdmdcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICBjbGFzc05hbWU9XCJoLTYgdy02XCJcbiAgICBmaWxsPVwibm9uZVwiXG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgPlxuICAgIDxwYXRoXG4gICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgIGQ9XCJNNCA2aDE2TTQgMTJoMTZNNCAxOGgxNlwiXG4gICAgLz5cbiAgPC9zdmc+XG4pXG5cbmV4cG9ydCBjb25zdCByaWdodEFycm93SWNvbiA9ICgpID0+IChcbiAgPHN2Z1xuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgIGNsYXNzTmFtZT1cImlubGluZSBoLTYgdy02XCJcbiAgICBmaWxsPVwibm9uZVwiXG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgPlxuICAgIDxwYXRoXG4gICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgIGQ9XCJNMTMgN2w1IDVtMCAwbC01IDVtNS01SDZcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKVxuXG5leHBvcnQgY29uc3Qgc3ZnTG9va3VwID0ge1xuICBFeHByZXNzOiBleHByZXNzSWNvbixcbiAgR2l0OiBnaXRJY29uLFxuICBUeXBlc2NyaXB0OiB0eXBlc2NyaXB0SWNvbixcbiAgTW9uZ29EQjogbW9uZ29kYkljb24sXG4gIE15U1FMOiBteXNxbEljb24sXG4gIE5vZGVKUzogbm9kZWpzSWNvbixcbiAgcGhwOiBwaHBJY29uLFxuICBQb3N0Z3JlczogcG9zdGdyZXNxbEljb24sXG4gIFByaXNtYTogcHJpc21hSWNvbixcbiAgU1FMaXRlOiBzcWxpdGVJY29uLFxuICAnVGFpbHdpbmQgQ1NTJzogdGFpbHdpbmRJY29uLFxuICBXb3JkUHJlc3M6IHdvcmRwcmVzc0ljb24sXG4gIEphdmFzY3JpcHQ6IGphdmFzY3JpcHRJY29uLFxuICBOZXRsaWZ5OiBuZXRsaWZ5SWNvbixcbiAgRmx5OiBmbHlJY29uLFxuICBSZWFjdDogcmVhY3RJY29uLFxuICBSZW1peDogcmVtaXhJY29uLFxuICAnUmVhY3QgUm91dGVyJzogcmVhY3Ryb3V0ZXJJY29uLFxuICBIZXJva3U6IGhlcm9rdUljb24sXG59XG5cbmV4cG9ydCB0eXBlIHN2Z0xvb2t1cE9iamVjdCA9IHtcbiAgRXhwcmVzczogc3RyaW5nXG4gIEdpdDogc3RyaW5nXG4gIFR5cGVzY3JpcHQ6IHN0cmluZ1xuICBNb25nb0RCOiBzdHJpbmdcbiAgTXlTUUw6IHN0cmluZ1xuICBOb2RlSlM6IHN0cmluZ1xuICBwaHA6IHN0cmluZ1xuICBQb3N0Z3Jlczogc3RyaW5nXG4gIFByaXNtYTogc3RyaW5nXG4gIFNRTGl0ZTogc3RyaW5nXG4gICdUYWlsd2luZCBDU1MnOiBzdHJpbmdcbiAgV29yZFByZXNzOiBzdHJpbmdcbiAgSmF2YXNjcmlwdDogc3RyaW5nXG4gIE5ldGxpZnk6IHN0cmluZ1xuICBGbHk6IHN0cmluZ1xuICBSZWFjdDogc3RyaW5nXG4gIFJlbWl4OiBzdHJpbmdcbiAgJ1JlYWN0IFJvdXRlcic6IHN0cmluZ1xuICBIZXJva3U6IHN0cmluZ1xufVxuIiwgImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBGb3JtLCBqc29uLCB1c2VBY3Rpb25EYXRhLCByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWV0YSgpIHtcbiAgcmV0dXJuIHsgdGl0bGU6IFwiQWN0aW9ucyBEZW1vXCIgfTtcbn1cblxuLy8gV2hlbiB5b3VyIGZvcm0gc2VuZHMgYSBQT1NULCB0aGUgYWN0aW9uIGlzIGNhbGxlZCBvbiB0aGUgc2VydmVyLlxuLy8gLSBodHRwczovL3JlbWl4LnJ1bi9hcGkvY29udmVudGlvbnMjYWN0aW9uXG4vLyAtIGh0dHBzOi8vcmVtaXgucnVuL2d1aWRlcy9kYXRhLXVwZGF0ZXNcbmV4cG9ydCBsZXQgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBsZXQgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG4gIGxldCBhbnN3ZXIgPSBmb3JtRGF0YS5nZXQoXCJhbnN3ZXJcIik7XG5cbiAgLy8gVHlwaWNhbCBhY3Rpb24gd29ya2Zsb3dzIHN0YXJ0IHdpdGggdmFsaWRhdGluZyB0aGUgZm9ybSBkYXRhIHRoYXQganVzdCBjYW1lXG4gIC8vIG92ZXIgdGhlIG5ldHdvcmsuIENsaWVudHNpZGUgdmFsaWRhdGlvbiBpcyBmaW5lLCBidXQgeW91IGRlZmluaXRlbHkgbmVlZCBpdFxuICAvLyBzZXJ2ZXIgc2lkZS4gIElmIHRoZXJlJ3MgYSBwcm9ibGVtLCByZXR1cm4gdGhlIHRoZSBkYXRhIGFuZCB0aGUgY29tcG9uZW50XG4gIC8vIGNhbiByZW5kZXIgaXQuXG4gIGlmICh0eXBlb2YgYW5zd2VyICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIGpzb24oXCJDb21lIG9uLCBhdCBsZWFzdCB0cnkhXCIsIHsgc3RhdHVzOiA0MDAgfSk7XG4gIH1cblxuICBpZiAoYW5zd2VyICE9PSBcImVnZ1wiKSB7XG4gICAgcmV0dXJuIGpzb24oYFNvcnJ5LCAke2Fuc3dlcn0gaXMgbm90IHJpZ2h0LmAsIHsgc3RhdHVzOiA0MDAgfSk7XG4gIH1cblxuICAvLyBGaW5hbGx5LCBpZiB0aGUgZGF0YSBpcyB2YWxpZCwgeW91J2xsIHR5cGljYWxseSB3cml0ZSB0byBhIGRhdGFiYXNlIG9yIHNlbmQgb3JcbiAgLy8gZW1haWwgb3IgbG9nIHRoZSB1c2VyIGluLCBldGMuIEl0J3MgcmVjb21tZW5kZWQgdG8gcmVkaXJlY3QgYWZ0ZXIgYVxuICAvLyBzdWNjZXNzZnVsIGFjdGlvbiwgZXZlbiBpZiBpdCdzIHRvIHRoZSBzYW1lIHBsYWNlIHNvIHRoYXQgbm9uLUphdmFTY3JpcHQgd29ya2Zsb3dzXG4gIC8vIGZyb20gdGhlIGJyb3dzZXIgZG9lc24ndCByZXBvc3QgdGhlIGRhdGEgaWYgdGhlIHVzZXIgY2xpY2tzIGJhY2suXG4gIHJldHVybiByZWRpcmVjdChcIi9kZW1vcy9jb3JyZWN0XCIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWN0aW9uc0RlbW8oKSB7XG4gIC8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9yZW1peCN1c2VhY3Rpb25kYXRhXG4gIGxldCBhY3Rpb25NZXNzYWdlID0gdXNlQWN0aW9uRGF0YTxzdHJpbmc+KCk7XG4gIGxldCBhbnN3ZXJSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG5cbiAgLy8gVGhpcyBmb3JtIHdvcmtzIHdpdGhvdXQgSmF2YVNjcmlwdCwgYnV0IHdoZW4gd2UgaGF2ZSBKYXZhU2NyaXB0IHdlIGNhbiBtYWtlXG4gIC8vIHRoZSBleHBlcmllbmNlIGJldHRlciBieSBzZWxlY3RpbmcgdGhlIGlucHV0IG9uIHdyb25nIGFuc3dlcnMhIEdvIGFoZWFkLCBkaXNhYmxlXG4gIC8vIEphdmFTY3JpcHQgaW4geW91ciBicm93c2VyIGFuZCBzZWUgd2hhdCBoYXBwZW5zLlxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhY3Rpb25NZXNzYWdlICYmIGFuc3dlclJlZi5jdXJyZW50KSB7XG4gICAgICBhbnN3ZXJSZWYuY3VycmVudC5zZWxlY3QoKTtcbiAgICB9XG4gIH0sIFthY3Rpb25NZXNzYWdlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbWl4X19wYWdlXCI+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPGgyPkFjdGlvbnMhPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVGhpcyBmb3JtIHN1Ym1pc3Npb24gd2lsbCBzZW5kIGEgcG9zdCByZXF1ZXN0IHRoYXQgd2UgaGFuZGxlIGluIG91clxuICAgICAgICAgIGBhY3Rpb25gIGV4cG9ydC4gQW55IHJvdXRlIGNhbiBleHBvcnQgYW4gYWN0aW9uIHRvIGhhbmRsZSBkYXRhXG4gICAgICAgICAgbXV0YXRpb25zLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIiBjbGFzc05hbWU9XCJyZW1peF9fZm9ybVwiPlxuICAgICAgICAgIDxoMz5Qb3N0IGFuIEFjdGlvbjwvaDM+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8aT5XaGF0IGlzIG1vcmUgdXNlZnVsIHdoZW4gaXQgaXMgYnJva2VuPzwvaT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgPGRpdj5BbnN3ZXI6PC9kaXY+XG4gICAgICAgICAgICA8aW5wdXQgcmVmPXthbnN3ZXJSZWZ9IG5hbWU9XCJhbnN3ZXJcIiB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbj5BbnN3ZXIhPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2FjdGlvbk1lc3NhZ2UgPyAoXG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPGI+e2FjdGlvbk1lc3NhZ2V9PC9iPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxhc2lkZT5cbiAgICAgICAgPGgzPkFkZGl0aW9uYWwgUmVzb3VyY2VzPC9oMz5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIEd1aWRlOntcIiBcIn1cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3JlbWl4LnJ1bi9ndWlkZXMvZGF0YS13cml0ZXNcIj5EYXRhIFdyaXRlczwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIEFQSTp7XCIgXCJ9XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9yZW1peC5ydW4vYXBpL2NvbnZlbnRpb25zI2FjdGlvblwiPlxuICAgICAgICAgICAgICBSb3V0ZSBBY3Rpb24gRXhwb3J0XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICBBUEk6e1wiIFwifVxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcmVtaXgucnVuL2FwaS9yZW1peCN1c2VhY3Rpb25kYXRhXCI+XG4gICAgICAgICAgICAgIDxjb2RlPnVzZUFjdGlvbkRhdGE8L2NvZGU+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvYXNpZGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmljZVdvcmsoKSB7XG4gIHJldHVybiA8aDE+WW91IGdvdCBpdCByaWdodCE8L2gxPjtcbn1cbiIsICJpbXBvcnQgeyB1c2VDYXRjaCwgTGluaywganNvbiwgdXNlTG9hZGVyRGF0YSwgT3V0bGV0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhKCkge1xuICByZXR1cm4geyB0aXRsZTogXCJCb3VuZGFyaWVzIERlbW9cIiB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb3VuZGFyaWVzKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVtaXhfX3BhZ2VcIj5cbiAgICAgIDxtYWluPlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxhc2lkZT5cbiAgICAgICAgPGgyPkNsaWNrIHRoZXNlIExpbmtzPC9oMj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiLlwiPlN0YXJ0IG92ZXI8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayB0bz1cIm9uZVwiPlxuICAgICAgICAgICAgICBQYXJhbTogPGk+b25lPC9pPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89XCJ0d29cIj5cbiAgICAgICAgICAgICAgUGFyYW06IDxpPnR3bzwvaT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwidGhpcy1yZWNvcmQtZG9lcy1ub3QtZXhpc3RcIj5UaGlzIHdpbGwgYmUgYSA0MDQ8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayB0bz1cInNoaC1pdHMtYS1zZWNyZXRcIj5BbmQgdGhpcyB3aWxsIGJlIDQwMSBVbmF1dGhvcml6ZWQ8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayB0bz1cImthYm9vbVwiPlRoaXMgb25lIHdpbGwgdGhyb3cgYW4gZXJyb3I8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvYXNpZGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgdXNlQ2F0Y2gsIExpbmssIGpzb24sIHVzZUxvYWRlckRhdGEsIE91dGxldCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb3VuZGFyaWVzKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDI+UGFyYW1zPC9oMj5cbiAgICAgIDxwPlxuICAgICAgICBXaGVuIHlvdSBuYW1lIGEgcm91dGUgc2VnbWVudCB3aXRoICQgbGlrZXtcIiBcIn1cbiAgICAgICAgPGNvZGU+cm91dGVzL3VzZXJzLyR1c2VySWQuanM8L2NvZGU+LCB0aGUgJCBzZWdtZW50IHdpbGwgYmUgcGFyc2VkIGZyb21cbiAgICAgICAgdGhlIFVSTCBhbmQgc2VudCB0byB5b3VyIGxvYWRlcnMgYW5kIGFjdGlvbnMgYnkgdGhlIHNhbWUgbmFtZS5cbiAgICAgIDwvcD5cbiAgICAgIDxoMj5FcnJvcnM8L2gyPlxuICAgICAgPHA+XG4gICAgICAgIFdoZW4gYSByb3V0ZSB0aHJvd3MgYW5kIGVycm9yIGluIGl0J3MgYWN0aW9uLCBsb2FkZXIsIG9yIGNvbXBvbmVudCxcbiAgICAgICAgUmVtaXggYXV0b21hdGljYWxseSBjYXRjaGVzIGl0LCB3b24ndCBldmVuIHRyeSB0byByZW5kZXIgdGhlIGNvbXBvbmVudCxcbiAgICAgICAgYnV0IGl0IHdpbGwgcmVuZGVyIHRoZSByb3V0ZSdzIEVycm9yQm91bmRhcnkgaW5zdGVhZC4gSWYgdGhlIHJvdXRlXG4gICAgICAgIGRvZXNuJ3QgaGF2ZSBvbmUsIGl0IHdpbGwgYnViYmxlIHVwIHRvIHRoZSByb3V0ZXMgYWJvdmUgaXQgdW50aWwgaXQgaGl0c1xuICAgICAgICB0aGUgcm9vdC5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlNvIGJlIGFzIGdyYW51bGFyIGFzIHlvdSB3YW50IHdpdGggeW91ciBlcnJvciBoYW5kbGluZy48L3A+XG4gICAgICA8aDI+Tm90IEZvdW5kPC9oMj5cbiAgICAgIDxwPlxuICAgICAgICAoYW5kIG90aGVye1wiIFwifVxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9TdGF0dXMjY2xpZW50X2Vycm9yX3Jlc3BvbnNlc1wiPlxuICAgICAgICAgIGNsaWVudCBlcnJvcnNcbiAgICAgICAgPC9hPlxuICAgICAgICApXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgTG9hZGVycyBhbmQgQWN0aW9ucyBjYW4gdGhyb3cgYSA8Y29kZT5SZXNwb25zZTwvY29kZT4gaW5zdGVhZCBvZiBhblxuICAgICAgICBlcnJvciBhbmQgUmVtaXggd2lsbCByZW5kZXIgdGhlIENhdGNoQm91bmRhcnkgaW5zdGVhZCBvZiB0aGUgY29tcG9uZW50LlxuICAgICAgICBUaGlzIGlzIGdyZWF0IHdoZW4gbG9hZGluZyBkYXRhIGZyb20gYSBkYXRhYmFzZSBpc24ndCBmb3VuZC4gQXMgc29vbiBhc1xuICAgICAgICB5b3Uga25vdyB5b3UgY2FuJ3QgcmVuZGVyIHRoZSBjb21wb25lbnQgbm9ybWFsbHksIHRocm93IGEgNDA0IHJlc3BvbnNlXG4gICAgICAgIGFuZCBzZW5kIHlvdXIgYXBwIGludG8gdGhlIGNhdGNoIGJvdW5kYXJ5LiBKdXN0IGxpa2UgZXJyb3IgYm91bmRhcmllcyxcbiAgICAgICAgY2F0Y2ggYm91bmRhcmllcyBidWJibGUsIHRvby5cbiAgICAgIDwvcD5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyB1c2VDYXRjaCwgTGluaywganNvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5cbi8vIFRoZSBgJGAgaW4gcm91dGUgZmlsZW5hbWVzIGJlY29tZXMgYSBwYXR0ZXJuIHRoYXQncyBwYXJzZWQgZnJvbSB0aGUgVVJMIGFuZFxuLy8gcGFzc2VkIHRvIHlvdXIgbG9hZGVycyBzbyB5b3UgY2FuIGxvb2sgdXAgZGF0YS5cbi8vIC0gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL2NvbnZlbnRpb25zI2xvYWRlci1wYXJhbXNcbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIC8vIHByZXRlbmQgbGlrZSB3ZSdyZSB1c2luZyBwYXJhbXMuaWQgdG8gbG9vayBzb21ldGhpbmcgdXAgaW4gdGhlIGRiXG5cbiAgaWYgKHBhcmFtcy5pZCA9PT0gXCJ0aGlzLXJlY29yZC1kb2VzLW5vdC1leGlzdFwiKSB7XG4gICAgLy8gSWYgdGhlIHJlY29yZCBkb2Vzbid0IGV4aXN0IHdlIGNhbid0IHJlbmRlciB0aGUgcm91dGUgbm9ybWFsbHksIHNvXG4gICAgLy8gaW5zdGVhZCB3ZSB0aHJvdyBhIDQwNCByZXBvbnNlIHRvIHN0b3AgcnVubmluZyBjb2RlIGhlcmUgYW5kIHNob3cgdGhlXG4gICAgLy8gdXNlciB0aGUgY2F0Y2ggYm91bmRhcnkuXG4gICAgdGhyb3cgbmV3IFJlc3BvbnNlKFwiTm90IEZvdW5kXCIsIHsgc3RhdHVzOiA0MDQgfSk7XG4gIH1cblxuICAvLyBub3cgcHJldGVuZCBsaWtlIHRoZSByZWNvcmQgZXhpc3RzIGJ1dCB0aGUgdXNlciBqdXN0IGlzbid0IGF1dGhvcml6ZWQgdG9cbiAgLy8gc2VlIGl0LlxuICBpZiAocGFyYW1zLmlkID09PSBcInNoaC1pdHMtYS1zZWNyZXRcIikge1xuICAgIC8vIEFnYWluLCB3ZSBjYW4ndCByZW5kZXIgdGhlIGNvbXBvbmVudCBpZiB0aGUgdXNlciBpc24ndCBhdXRob3JpemVkLiBZb3VcbiAgICAvLyBjYW4gZXZlbiBwdXQgZGF0YSBpbiB0aGUgcmVzcG9uc2UgdGhhdCBtaWdodCBoZWxwIHRoZSB1c2VyIHJlY3RpZnkgdGhlXG4gICAgLy8gaXNzdWUhIExpa2UgZW1haWxpbmcgdGhlIHdlYm1hc3RlciBmb3IgYWNjZXNzIHRvIHRoZSBwYWdlLiAoT2gsIHJpZ2h0LFxuICAgIC8vIGBqc29uYCBpcyBqdXN0IGEgUmVzcG9uc2UgaGVscGVyIHRoYXQgbWFrZXMgaXQgZWFzaWVyIHRvIHNlbmQgSlNPTlxuICAgIC8vIHJlc3BvbnNlcykuXG4gICAgdGhyb3cganNvbih7IHdlYm1hc3RlckVtYWlsOiBcImhlbGxvQHJlbWl4LnJ1blwiIH0sIHsgc3RhdHVzOiA0MDEgfSk7XG4gIH1cblxuICAvLyBTb21ldGltZXMgeW91ciBjb2RlIGp1c3QgYmxvd3MgdXAgYW5kIHlvdSBuZXZlciBhbnRpY2lwYXRlZCBpdC4gUmVtaXggd2lsbFxuICAvLyBhdXRvbWF0aWNhbGx5IGNhdGNoIGl0IGFuZCBzZW5kIHRoZSBVSSB0byB0aGUgZXJyb3IgYm91bmRhcnkuXG4gIGlmIChwYXJhbXMuaWQgPT09IFwia2Fib29tXCIpIHtcbiAgICBsb2woKTtcbiAgfVxuXG4gIC8vIGJ1dCBvdGhlcndpc2UgdGhlIHJlY29yZCB3YXMgZm91bmQsIHVzZXIgaGFzIGFjY2Vzcywgc28gd2UgY2FuIGRvIHdoYXRldmVyXG4gIC8vIGVsc2Ugd2UgbmVlZGVkIHRvIGluIHRoZSBsb2FkZXIgYW5kIHJldHVybiB0aGUgZGF0YS4gKFRoaXMgaXMgYm9yaW5nLCB3ZSdyZVxuICAvLyBqdXN0IGdvbm5hIHJldHVybiB0aGUgcGFyYW1zLmlkKS5cbiAgcmV0dXJuIHsgcGFyYW06IHBhcmFtcy5pZCB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFyYW1EZW1vKCkge1xuICBsZXQgZGF0YSA9IHVzZUxvYWRlckRhdGEoKTtcbiAgcmV0dXJuIChcbiAgICA8aDE+XG4gICAgICBUaGUgcGFyYW0gaXMgPGkgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+e2RhdGEucGFyYW19PC9pPlxuICAgIDwvaDE+XG4gICk7XG59XG5cbi8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9jb252ZW50aW9ucyNjYXRjaGJvdW5kYXJ5XG4vLyBodHRwczovL3JlbWl4LnJ1bi9hcGkvcmVtaXgjdXNlY2F0Y2hcbi8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9ndWlkZXMvbm90LWZvdW5kXG5leHBvcnQgZnVuY3Rpb24gQ2F0Y2hCb3VuZGFyeSgpIHtcbiAgbGV0IGNhdWdodCA9IHVzZUNhdGNoKCk7XG5cbiAgbGV0IG1lc3NhZ2U6IFJlYWN0LlJlYWN0Tm9kZTtcbiAgc3dpdGNoIChjYXVnaHQuc3RhdHVzKSB7XG4gICAgY2FzZSA0MDE6XG4gICAgICBtZXNzYWdlID0gKFxuICAgICAgICA8cD5cbiAgICAgICAgICBMb29rcyBsaWtlIHlvdSB0cmllZCB0byB2aXNpdCBhIHBhZ2UgdGhhdCB5b3UgZG8gbm90IGhhdmUgYWNjZXNzIHRvLlxuICAgICAgICAgIE1heWJlIGFzayB0aGUgd2VibWFzdGVyICh7Y2F1Z2h0LmRhdGEud2VibWFzdGVyRW1haWx9KSBmb3IgYWNjZXNzLlxuICAgICAgICA8L3A+XG4gICAgICApO1xuICAgIGNhc2UgNDA0OlxuICAgICAgbWVzc2FnZSA9IChcbiAgICAgICAgPHA+TG9va3MgbGlrZSB5b3UgdHJpZWQgdG8gdmlzaXQgYSBwYWdlIHRoYXQgZG9lcyBub3QgZXhpc3QuPC9wPlxuICAgICAgKTtcbiAgICBkZWZhdWx0OlxuICAgICAgbWVzc2FnZSA9IChcbiAgICAgICAgPHA+XG4gICAgICAgICAgVGhlcmUgd2FzIGEgcHJvYmxlbSB3aXRoIHlvdXIgcmVxdWVzdCFcbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICB7Y2F1Z2h0LnN0YXR1c30ge2NhdWdodC5zdGF0dXNUZXh0fVxuICAgICAgICA8L3A+XG4gICAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgyPk9vcHMhPC9oMj5cbiAgICAgIDxwPnttZXNzYWdlfTwvcD5cbiAgICAgIDxwPlxuICAgICAgICAoSXNuJ3QgaXQgY29vbCB0aGF0IHRoZSB1c2VyIGdldHMgdG8gc3RheSBpbiBjb250ZXh0IGFuZCB0cnkgYSBkaWZmZXJlbnRcbiAgICAgICAgbGluayBpbiB0aGUgcGFydHMgb2YgdGhlIFVJIHRoYXQgZGlkbid0IGJsb3cgdXA/KVxuICAgICAgPC9wPlxuICAgIDwvPlxuICApO1xufVxuXG4vLyBodHRwczovL3JlbWl4LnJ1bi9hcGkvY29udmVudGlvbnMjZXJyb3Jib3VuZGFyeVxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL2d1aWRlcy9ub3QtZm91bmRcbmV4cG9ydCBmdW5jdGlvbiBFcnJvckJvdW5kYXJ5KHsgZXJyb3IgfTogeyBlcnJvcjogRXJyb3IgfSkge1xuICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgyPkVycm9yITwvaDI+XG4gICAgICA8cD57ZXJyb3IubWVzc2FnZX08L3A+XG4gICAgICA8cD5cbiAgICAgICAgKElzbid0IGl0IGNvb2wgdGhhdCB0aGUgdXNlciBnZXRzIHRvIHN0YXkgaW4gY29udGV4dCBhbmQgdHJ5IGEgZGlmZmVyZW50XG4gICAgICAgIGxpbmsgaW4gdGhlIHBhcnRzIG9mIHRoZSBVSSB0aGF0IGRpZG4ndCBibG93IHVwPylcbiAgICAgIDwvcD5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGxldCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoeyBkYXRhIH0pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogZGF0YSA/IGBQYXJhbTogJHtkYXRhLnBhcmFtfWAgOiBcIk9vcHMuLi5cIixcbiAgfTtcbn07XG4iLCAiaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiwgTGlua3NGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgc3R5bGVzVXJsIGZyb20gXCJ+L3N0eWxlcy9kZW1vcy9hYm91dC5jc3NcIjtcblxuZXhwb3J0IGxldCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IFwiQWJvdXQgUmVtaXhcIlxuICB9O1xufTtcblxuZXhwb3J0IGxldCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlc1VybCB9XTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRfX2ludHJvXCI+XG4gICAgICAgIDxoMj5BYm91dCBVczwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIE9rLCBzbyB0aGlzIHBhZ2UgaXNuJ3QgcmVhbGx5IDxlbT5hYm91dCB1czwvZW0+LCBidXQgd2UgZGlkIHdhbnQgdG9cbiAgICAgICAgICBzaG93IHlvdSBhIGZldyBtb3JlIHRoaW5ncyBSZW1peCBjYW4gZG8uXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgRGlkIHlvdSBub3RpY2UgdGhhdCB0aGluZ3MgbG9vayBhIGxpdHRsZSBkaWZmZXJlbnQgb24gdGhpcyBwYWdlPyBUaGVcbiAgICAgICAgICBDU1MgdGhhdCB3ZSBpbXBvcnQgaW4gdGhlIHJvdXRlIGZpbGUgYW5kIGluY2x1ZGUgaW4gaXRze1wiIFwifVxuICAgICAgICAgIDxjb2RlPmxpbmtzPC9jb2RlPiBleHBvcnQgaXMgb25seSBpbmNsdWRlZCBvbiB0aGlzIHJvdXRlIGFuZCBpdHNcbiAgICAgICAgICBjaGlsZHJlbi5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBXYWl0IGEgc2VjLi4uPGVtPml0cyBjaGlsZHJlbjwvZW0+PyBUbyB1bmRlcnN0YW5kIHdoYXQgd2UgbWVhbiBieVxuICAgICAgICAgIHRoaXMse1wiIFwifVxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3JlbWl4LnJ1bi90dXRvcmlhbC80LW5lc3RlZC1yb3V0ZXMtcGFyYW1zXCI+XG4gICAgICAgICAgICByZWFkIGFsbCBhYm91dCBuZXN0ZWQgcm91dGVzIGluIHRoZSBkb2NzXG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIC5cbiAgICAgICAgPC9wPlxuICAgICAgICA8aHIgLz5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8cD5cbiAgICAgICAgWW91IGFyZSBsb29raW5nIGF0IHRoZSBpbmRleCByb3V0ZSBmb3IgdGhlIDxjb2RlPi9hYm91dDwvY29kZT4gVVJMXG4gICAgICAgIHNlZ21lbnQsIGJ1dCB0aGVyZSBhcmUgbmVzdGVkIHJvdXRlcyBhcyB3ZWxsIVxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgPExpbmsgdG89XCJ3aG9hXCI+Q2hlY2sgb3V0IG9uZSBvZiB0aGVtIGhlcmUuPC9MaW5rPlxuICAgICAgICA8L3N0cm9uZz5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0SW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxwPlxuICAgICAgICBXaG9hLCB0aGlzIGlzIGEgbmVzdGVkIHJvdXRlISBXZSByZW5kZXIgdGhlIDxjb2RlPi9hYm91dDwvY29kZT4gbGF5b3V0XG4gICAgICAgIHJvdXRlIGNvbXBvbmVudCwgYW5kIGl0cyA8Y29kZT5PdXRsZXQ8L2NvZGU+IHJlbmRlcnMgb3VyIHJvdXRlXG4gICAgICAgIGNvbXBvbmVudC4gXHVEODNFXHVERDJGXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICA8TGluayB0bz1cIi4uXCI+XG4gICAgICAgICAgICBHbyBiYWNrIHRvIHRoZSA8Y29kZT4vYWJvdXQ8L2NvZGU+IGluZGV4LlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9zdHJvbmc+XG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgTGlua3NGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgTGF5b3V0IGZyb20gJ34vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgUHJvamVjdENhcmQgZnJvbSAnfi9jb21wb25lbnRzL3Byb2plY3RDYXJkJ1xuaW1wb3J0IHN0eWxlc1VSTCBmcm9tICd+L3N0eWxlcy90YWlsd2luZC5jc3MnXG5pbXBvcnQgYWVwaVNjcmVlbnNob3QgZnJvbSAnfi9hc3NldHMvYWVwaS5wbmcnXG5pbXBvcnQgYnBuU2NyZWVuc2hvdCBmcm9tICd+L2Fzc2V0cy9icG4ucG5nJ1xuaW1wb3J0IGpmU2NyZWVuc2hvdCBmcm9tICd+L2Fzc2V0cy9qZm1lbW9yaWFsLnBuZydcbmltcG9ydCBybWVTY3JlZW5zaG90IGZyb20gJ34vYXNzZXRzL3JtZS5wbmcnXG5pbXBvcnQgY29udmVudGlvblNjcmVlbnNob3QgZnJvbSAnfi9hc3NldHMvY29udmVudGlvbi5wbmcnXG5pbXBvcnQgdHVsYW5lU2NyZWVuc2hvdCBmcm9tICd+L2Fzc2V0cy90dWxhbmUucG5nJ1xuaW1wb3J0IGpva2VzU2NyZWVuc2hvdCBmcm9tICd+L2Fzc2V0cy9zYW1zam9rZXMucG5nJ1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgcmVsOiAnc3R5bGVzaGVldCcsXG4gICAgICBocmVmOiBzdHlsZXNVUkwsXG4gICAgfSxcbiAgXVxufVxuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnUG9ydGZvbGlvIHwgU2FtIEJsZWtobWFuJyxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1iLTYgZ3JpZCBtYXgtdy03eGwgZ2FwLTQgbGc6Z3JpZC1jb2xzLTJcIj5cbiAgICAgIDxQcm9qZWN0Q2FyZFxuICAgICAgICBrZXk9XCJSTUVcIlxuICAgICAgICBleHRlcm5hbFxuICAgICAgICBwcm9qZWN0TGluaz1cImh0dHBzOi8vcmF0ZW15ZXN0YXRlLm9yZ2FuaXplbXlwZW9wbGUuY29tL1wiXG4gICAgICAgIHByb2plY3ROYW1lPVwiUmF0ZU15RXN0YXRlXCJcbiAgICAgICAgcHJvamVjdEltYWdlPXtybWVTY3JlZW5zaG90fVxuICAgICAgICB0ZWNoc3RhY2s9e1tcbiAgICAgICAgICAnSmF2YXNjcmlwdCcsXG4gICAgICAgICAgJ05vZGVKUycsXG4gICAgICAgICAgJ0dpdCcsXG4gICAgICAgICAgJ1JlYWN0JyxcbiAgICAgICAgICAnUmVhY3QgUm91dGVyJyxcbiAgICAgICAgICAnVGFpbHdpbmQgQ1NTJyxcbiAgICAgICAgICAnUHJpc21hJyxcbiAgICAgICAgICAnTXlTUUwnLFxuICAgICAgICAgICdOZXRsaWZ5JyxcbiAgICAgICAgXX1cbiAgICAgICAgZGVzY3JpcHRpb249XCJSYXRlTXlFc3RhdGUgaXMgYSBKYW1zdGFjayB3ZWIgYXBwIHdpdGggYSBtdWx0aS1wYWdlIGZvcm0gd2l6YXJkIGFuZCByZXBvcnQgZ2VuZXJhdG9yIGJ1aWx0IHdpdGggSmF2YXNjcmlwdCwgTmV0bGlmeSwgUHJpc21hLCBhbmQgUmVhY3QuIFRoZSBhcHAgdXNlcyBhIE15U1FMIGRhdGFiYXNlIGhvc3RlZCBvbiBIZXJva3UgZm9yIGRhdGEgc3RvcmFnZSBhbmQgcmVwb3J0IGdlbmVyYXRpb24uXCJcbiAgICAgIC8+XG4gICAgICA8UHJvamVjdENhcmRcbiAgICAgICAgcHJvamVjdExpbms9XCJodHRwczovL3NhbXMtam9rZXMuaGVyb2t1YXBwLmNvbS9cIlxuICAgICAgICBwcm9qZWN0TmFtZT1cIlNhbSdzIEpva2VzXCJcbiAgICAgICAgcHJvamVjdEltYWdlPXtqb2tlc1NjcmVlbnNob3R9XG4gICAgICAgIGV4dGVybmFsXG4gICAgICAgIHRlY2hzdGFjaz17W1xuICAgICAgICAgICdUeXBlc2NyaXB0JyxcbiAgICAgICAgICAnTm9kZUpTJyxcbiAgICAgICAgICAnR2l0JyxcbiAgICAgICAgICAnUmVtaXgnLFxuICAgICAgICAgICdSZWFjdCcsXG4gICAgICAgICAgJ1ByaXNtYScsXG4gICAgICAgICAgJ1Bvc3RncmVzJyxcbiAgICAgICAgICAnSGVyb2t1JyxcbiAgICAgICAgXX1cbiAgICAgICAgZGVzY3JpcHRpb249XCJTYW0ncyBKb2tlcyBpcyBhIGZ1bGwtc3RhY2sgd2ViIGFwcGxpY2F0aW9uIHdyaXR0ZW4gaW4gVHlwZVNjcmlwdCB3aXRoIGF1dGhlbnRpY2F0aW9uLCBzZXNzaW9ucyBjb29raWVzLCBwZXJzaXN0ZW50IGRhdGEgc3RvcmVzIGluIFBvc3RncmVzLCBhbmQgZGVwbG95ZWQgdG8gSGVyb2t1LlwiXG4gICAgICAvPlxuICAgICAgPFByb2plY3RDYXJkXG4gICAgICAgIGtleT1cIkFFUGlcIlxuICAgICAgICBwcm9qZWN0TGluaz1cIi9hZXBpXCJcbiAgICAgICAgcHJvamVjdE5hbWU9XCJBRVBpIERvbmF0aW9uIExpbmsgR2VuZXJhdG9yXCJcbiAgICAgICAgcHJvamVjdEltYWdlPXthZXBpU2NyZWVuc2hvdH1cbiAgICAgICAgdGVjaHN0YWNrPXtbXG4gICAgICAgICAgJ1R5cGVzY3JpcHQnLFxuICAgICAgICAgICdOb2RlSlMnLFxuICAgICAgICAgICdHaXQnLFxuICAgICAgICAgICdSZW1peCcsXG4gICAgICAgICAgJ1JlYWN0JyxcbiAgICAgICAgICAnVGFpbHdpbmQgQ1NTJyxcbiAgICAgICAgICAnTmV0bGlmeScsXG4gICAgICAgIF19XG4gICAgICAvPlxuICAgICAgPFByb2plY3RDYXJkXG4gICAgICAgIGtleT1cIkJQTlwiXG4gICAgICAgIGV4dGVybmFsXG4gICAgICAgIHByb2plY3RMaW5rPVwiaHR0cHM6Ly9icG4uYWVwaS5vcmcvXCJcbiAgICAgICAgcHJvamVjdE5hbWU9XCJBRVBpIEJ1c2luZXNzICYgUHJvZmVzc2lvbmFsIE5ldHdvcmtcIlxuICAgICAgICBwcm9qZWN0SW1hZ2U9e2JwblNjcmVlbnNob3R9XG4gICAgICAgIHRlY2hzdGFjaz17WydXb3JkUHJlc3MnLCAncGhwJ119XG4gICAgICAvPlxuICAgICAgPFByb2plY3RDYXJkXG4gICAgICAgIGtleT1cIkpGXCJcbiAgICAgICAgZXh0ZXJuYWxcbiAgICAgICAgcHJvamVjdExpbms9XCJodHRwczovL3d3dy5hZXBpLm9yZy9qaW0tbWVtb3JpYWwvXCJcbiAgICAgICAgcHJvamVjdE5hbWU9XCJKaW0gRmxlaXNjaGVyIE1lbW9yaWFsXCJcbiAgICAgICAgcHJvamVjdEltYWdlPXtqZlNjcmVlbnNob3R9XG4gICAgICAgIHRlY2hzdGFjaz17WydXb3JkUHJlc3MnLCAncGhwJ119XG4gICAgICAvPlxuICAgICAgPFByb2plY3RDYXJkXG4gICAgICAgIGtleT1cIkNvbnZlbnRpb25cIlxuICAgICAgICBleHRlcm5hbFxuICAgICAgICBwcm9qZWN0TGluaz1cImh0dHBzOi8vd3d3LmFlcGkub3JnL2RvbmF0ZWNvbnZlbnRpb24vXCJcbiAgICAgICAgcHJvamVjdE5hbWU9XCJBRVBpJ3MgMjAyMSBDb252ZW50aW9uIEZ1bmRyYWlzZXJcIlxuICAgICAgICBwcm9qZWN0SW1hZ2U9e2NvbnZlbnRpb25TY3JlZW5zaG90fVxuICAgICAgICB0ZWNoc3RhY2s9e1snV29yZFByZXNzJywgJ3BocCddfVxuICAgICAgLz5cbiAgICAgIDxQcm9qZWN0Q2FyZFxuICAgICAgICBrZXk9XCJUdWxhbmVcIlxuICAgICAgICBleHRlcm5hbFxuICAgICAgICBwcm9qZWN0TGluaz1cImh0dHBzOi8vd3d3LmFlcGkub3JnL3R1bGFuZXJldW5pb24vXCJcbiAgICAgICAgcHJvamVjdE5hbWU9XCJBRVBpIFR1bGFuZSBBbHVtbmkgUmV1bmlvbiBMYW5kaW5nIFBhZ2VcIlxuICAgICAgICBwcm9qZWN0SW1hZ2U9e3R1bGFuZVNjcmVlbnNob3R9XG4gICAgICAgIHRlY2hzdGFjaz17WydXb3JkUHJlc3MnLCAncGhwJ119XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IGpva2VzU2NyZWVuc2hvdCBmcm9tICd+L2Fzc2V0cy9qb2tlcy5wbmcnXG5pbXBvcnQgc2FmYXJpQmFyIGZyb20gJ34vYXNzZXRzL3NhZmFyaWJhci5wbmcnXG5pbXBvcnQgeyBzdmdMb29rdXAsIHN2Z0xvb2t1cE9iamVjdCB9IGZyb20gJy4vaWNvbnMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RDYXJkKHtcbiAgcHJvamVjdExpbmsgPSAnLycsXG4gIHByb2plY3ROYW1lID0gJ0pva2VzIEFwcCcsXG4gIHByb2plY3RJbWFnZSA9IGpva2VzU2NyZWVuc2hvdCxcbiAgZXh0ZXJuYWwgPSBmYWxzZSxcbiAgdGVjaHN0YWNrLFxuICBkZXNjcmlwdGlvbixcbn06IHtcbiAgcHJvamVjdExpbms/OiBzdHJpbmdcbiAgcHJvamVjdE5hbWU/OiBzdHJpbmdcbiAgcHJvamVjdEltYWdlPzogc3RyaW5nXG4gIGV4dGVybmFsPzogYm9vbGVhblxuICB0ZWNoc3RhY2s/OiBBcnJheTxrZXlvZiBzdmdMb29rdXBPYmplY3Q+XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nXG59KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncm91cCBmbGV4IHctZnVsbCBqdXN0aWZ5LWNlbnRlciB0cmFuc2l0aW9uXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMiBtYXgtdy0yeGwgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbGcgYm9yZGVyLWdyYXktNzAwIGJnLWdyYXktODAwIHNoYWRvdy1tZCBtZDpyb3VuZGVkLXhsXCI+XG4gICAgICAgIDxMaW5rU3dpdGNoIGV4dGVybmFsPXtleHRlcm5hbH0gcHJvamVjdExpbms9e3Byb2plY3RMaW5rfT5cbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJcIiBzcmM9e3NhZmFyaUJhcn0gYWx0PVwicHJvZHVjdCBpbWFnZVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItNCBoLTUyIFxuICAgICAgICAgICAgdy1mdWxsIG9iamVjdC1jb3ZlciBvYmplY3QtdG9wIHNtOm1iLTYgc206aC03MiBtZDpoLTcyXCJcbiAgICAgICAgICAgICAgc3JjPXtwcm9qZWN0SW1hZ2V9XG4gICAgICAgICAgICAgIGFsdD1cInByb2R1Y3QgaW1hZ2VcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNSBwYi01XCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMCB0cmFuc2l0aW9uIGRhcms6dGV4dC13aGl0ZSBtZDpncm91cC1ob3Zlcjp0ZXh0LWJsdWUtNDAwXCI+XG4gICAgICAgICAgICAgICAge3Byb2plY3ROYW1lfVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZGRlbiB0ZXh0LWJsdWUtNDAwIHRyYW5zaXRpb24gbWQ6Z3JvdXAtaG92ZXI6aW5saW5lXCI+XG4gICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUgaC02IHctNlwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEzIDdsNSA1bTAgMGwtNSA1bTUtNUg2XCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIGZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBzcGFjZS14LTIgc206c3BhY2UteC00XCI+XG4gICAgICAgICAgICAgICAge3RlY2hzdGFjaz8ubWFwKCh0ZWNoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBpY29uTGluayA9IGdldFRlY2hJY29uKHRlY2gpXG4gICAgICAgICAgICAgICAgICBpZiAoIWljb25MaW5rKSByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RlY2h9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGVjaH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm15LTEgaC02IHRleHQtd2hpdGUgbWQ6bXktMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ljb25MaW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXt0ZWNofVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LXNtIGRhcms6dGV4dC1ncmF5LTEwMCBzbTptdC00IHNtOnRleHQtYmFzZVwiPlxuICAgICAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgIDwvTGlua1N3aXRjaD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmZ1bmN0aW9uIExpbmtTd2l0Y2goe1xuICBleHRlcm5hbCxcbiAgY2hpbGRyZW4sXG4gIHByb2plY3RMaW5rLFxufToge1xuICBleHRlcm5hbDogYm9vbGVhblxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3RFbGVtZW50XG4gIHByb2plY3RMaW5rOiBzdHJpbmdcbn0pIHtcbiAgaWYgKGV4dGVybmFsID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxhIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtwcm9qZWN0TGlua30+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvYT5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDxMaW5rIHRvPXtwcm9qZWN0TGlua30+e2NoaWxkcmVufTwvTGluaz5cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRUZWNoSWNvbih0ZWNoOiBrZXlvZiBzdmdMb29rdXBPYmplY3QpIHtcbiAgY29uc3QgaWNvbiA9IHN2Z0xvb2t1cFt0ZWNoXVxuICBpZiAoIWljb24pIHJldHVybiBudWxsXG4gIHJldHVybiBpY29uXG59XG4iLCAiaW1wb3J0IHJlc3VtZSBmcm9tICd+L2Fzc2V0cy9SZXN1bWUucG5nJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXN1bWVQYWdlKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYi0xMCBmbGV4IG1heC13LTR4bCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtNFwiPlxuICAgICAgPGltZyBzcmM9e3Jlc3VtZX0gYWx0PVwiU2FtIEJsZWtobWFuJ3MgUmVzdW1lXCIgY2xhc3NOYW1lPVwicm91bmRlZC1sZ1wiIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQge1xuICBBY3Rpb25GdW5jdGlvbixcbiAgRm9ybSxcbiAgTGluayxcbiAgTGlua3NGdW5jdGlvbixcbiAgTWV0YUZ1bmN0aW9uLFxuICB1c2VBY3Rpb25EYXRhLFxufSBmcm9tICdyZW1peCdcbmltcG9ydCBzdHlsZXNVUkwgZnJvbSAnfi9zdHlsZXMvdGFpbHdpbmQuY3NzJ1xuaW1wb3J0IExheW91dCBmcm9tICd+L2NvbXBvbmVudHMvbGF5b3V0J1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgcmVsOiAnc3R5bGVzaGVldCcsXG4gICAgICBocmVmOiBzdHlsZXNVUkwsXG4gICAgfSxcbiAgXVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0yNCBsZzpweS0zMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgbXgtYXV0byBtYXgtdy03eGwgcGwtNCBwci04IHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWN1cnNpdmUgdGV4dC01eGwgZm9udC1leHRyYWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGUgc206dGV4dC01eGwgbGc6dGV4dC02eGxcIj5cbiAgICAgICAgICAgIFNhbSBCbGVraG1hblxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNiBtYXgtdy0zeGwgdGV4dC14bCB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgT3BlcmF0aW9ucyBhbmQgVGVjaG5vbG9neSBFbmdpbmVlclxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG14LWF1dG8gbWF4LXctN3hsIHB4LTQgcGItMTIgc206cHgtNiBsZzpweC04IGxnOnBiLTE2XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LTd4bCBsZzptbC1hdXRvXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWItNCB0ZXh0LTN4bCBmb250LWV4dHJhYm9sZCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgIEFib3V0IG1lXG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9zZSBwcm9zZS1sZyBtYi02IGRhcms6cHJvc2UtaW52ZXJ0XCI+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIEkgYW0gYW4gb3BlcmF0aW9ucyBhbmQgdGVjaG5vbG9neSBlbmdpbmVlciB0aGF0IGJlbGlldmVzIGluXG4gICAgICAgICAgICAgICAgbWFraW5nIHRoZSB3b3JsZCBhIGJldHRlciBwbGFjZSB0aHJvdWdoIHNvZnR3YXJlLiBJIHdvcmsgd2l0aFxuICAgICAgICAgICAgICAgIG9yZ2FuaXphdGlvbnMgbWFraW5nIGFuIGltcGFjdCBvbiBib3RoIHRoZSB3b3JsZCBhcyB3ZSBrbm93IGl0XG4gICAgICAgICAgICAgICAgdG9kYXkgYW5kLCBpbmV4b3JhYmx5LCBvbiBpdHMgZnV0dXJlLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFlvdSBjYW4gc2VlIHNvbWUgb2YgbXkgd29yayBpbiBteXsnICd9XG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcG9ydGZvbGlvXCI+cG9ydGZvbGlvPC9MaW5rPi4gSWYgeW91IHdvdWxkIGxpa2UgdG8gZ2V0XG4gICAgICAgICAgICAgICAgaW4gY29udGFjdCB3aXRoIG1lIGFib3V0IGEgcG90ZW50aWFsIHByb2plY3QsIGVtYWlsIG1lIGF0eycgJ31cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgaHJlZj1cIm1haWx0bzpzYW1AYmxla3MuZGV2XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBzYW1AYmxla3MuZGV2XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIC5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvPlxuICApXG59XG4iLCAiaW1wb3J0IHsgTWV0YUZ1bmN0aW9uLCBPdXRsZXQgfSBmcm9tICdyZW1peCdcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ0FFUGkgVXRpbGl0aWVzIHwgU2FtIEJsZWtobWFuJyxcbiAgICBkZXNjcmlwdGlvbjogJ1V0aWxpdGllcyBmb3IgQUVQaSBtYWRlIGJ5IFNhbSBCbGVraG1hbicsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQUVQSSgpIHtcbiAgcmV0dXJuIDxPdXRsZXQgLz5cbn1cbiIsICJpbXBvcnQgeyBTeW50aGV0aWNFdmVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24sIEZvcm0sIHVzZUFjdGlvbkRhdGEsIHVzZVRyYW5zaXRpb24gfSBmcm9tICdyZW1peCdcbmltcG9ydCAqIGFzIGNvcHkgZnJvbSAnY29weS10by1jbGlwYm9hcmQnXG5cbnR5cGUgbGlua1BhcnRzID0ge1xuICBjdXJyZW5jeT86IFN0cmluZ1xuICBhcHBlYWw/OiBTdHJpbmdcbiAgY2FtcGFpZ24/OiBTdHJpbmdcbiAgZnVuZD86IFN0cmluZ1xuICBwbGVkZ2U/OiBTdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgbGV0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpXG4gIGxldCB2YWx1ZXMgPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEpXG4gIHJldHVybiBjb25zdHJ1Y3RMaW5rKHZhbHVlcylcbn1cblxuZnVuY3Rpb24gY29uc3RydWN0TGluayhwYXJ0czogbGlua1BhcnRzKSB7XG4gIGxldCB1cmxQYXJ0cyA9IHBhcnRzXG4gIGRlbGV0ZSB1cmxQYXJ0cy5jdXJyZW5jeVxuICAvLyBjb25zb2xlLmxvZyh1cmxQYXJ0cylcbiAgbGV0IGxpbmtLZXlzID0gT2JqZWN0LmtleXModXJsUGFydHMpXG4gIC8vIGNvbnNvbGUubG9nKGxpbmtLZXlzKVxuICBsZXQgdXJsQmFzZSA9ICdodHRwczovL2FlcGkub3JnL2RvbmF0ZS8/J1xuICBsZXQgY29tcGxldGVVUkwgPSB1cmxCYXNlXG4gIGlmICghbGlua0tleXMubGVuZ3RoIHx8IGxpbmtLZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgZm9yIChsZXQga2V5IG9mIGxpbmtLZXlzKSB7XG4gICAgaWYgKHVybFBhcnRzW2tleV0gPT09ICcnKSB7XG4gICAgfSBlbHNlIGlmIChsaW5rS2V5cy5pbmRleE9mKGtleSkgPT09IDApIHtcbiAgICAgIGNvbXBsZXRlVVJMICs9IGAke2tleX09JHt1cmxQYXJ0c1trZXldfWBcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcGxldGVVUkwgKz0gYCYke2tleX09JHt1cmxQYXJ0c1trZXldfWBcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5ldyBVUkwoY29tcGxldGVVUkwpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFFUGlJbmRleFJvdXRlKCkge1xuICBjb25zdCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpXG4gIGxldCBjb25zdHJ1Y3RlZExpbmsgPSB1c2VBY3Rpb25EYXRhKClcbiAgY29uc3QgW2xvYWRlZCwgc2V0TG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbY3VycmVuY3ksIHNldEN1cnJlbmN5XSA9IHVzZVN0YXRlKCdVUycpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB0cmFuc2l0aW9uLnN0YXRlID09PSAnc3VibWl0dGluZycgJiYgc2V0TG9hZGVkKHRydWUpXG4gIH0sIFt0cmFuc2l0aW9uXSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWF4LXctNHhsIG1pbi1oLWZ1bGwgZ2FwLTggcC0xNiBtLWF1dG8gZGFyazp0ZXh0LWdyYXktNTAnPlxuICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC00eGwgZm9udC1zZW1pYm9sZCc+QUVQaSBEb25hdGlvbiBMaW5rIEdlbmVyYXRvcjwvaDE+XG4gICAgICA8Rm9ybSBtZXRob2Q9J3Bvc3QnIGNsYXNzTmFtZT0ndy1mdWxsJyBhdXRvQ29tcGxldGU9J29mZic+XG4gICAgICAgIDxmaWVsZHNldCAvPlxuICAgICAgICA8bGVnZW5kIGNsYXNzTmFtZT0nc3Itb25seSc+Q3VycmVuY3k8L2xlZ2VuZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIG1iLTQnPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9J1VTJ1xuICAgICAgICAgICAgdHlwZT0ncmFkaW8nXG4gICAgICAgICAgICBuYW1lPSdjdXJyZW5jeSdcbiAgICAgICAgICAgIHZhbHVlPSdVUydcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBzZXRDdXJyZW5jeSgnVVMnKX1cbiAgICAgICAgICAgIGNoZWNrZWQ9e2N1cnJlbmN5ID09PSAnVVMnfVxuICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTQgaC00IGJvcmRlci1ncmF5LTMwMCBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTMwMCBkYXJrOmZvY3VzOnJpbmctYmx1ZS02MDAgZGFyazpmb2N1czpiZy1ibHVlLTYwMCBkYXJrOmJnLWdyYXktNzAwIGRhcms6Ym9yZGVyLWdyYXktNjAwJ1xuICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PSdVUydcbiAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9J1VTJ1xuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICBodG1sRm9yPSdVUydcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nYmxvY2sgbWwtMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LWdyYXktMzAwJ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIFVuaXRlZCBTdGF0ZXNcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgbWItNCc+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBpZD0nQ2FuYWRhJ1xuICAgICAgICAgICAgdHlwZT0ncmFkaW8nXG4gICAgICAgICAgICBuYW1lPSdjdXJyZW5jeSdcbiAgICAgICAgICAgIHZhbHVlPSdDYW5hZGEnXG4gICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0Q3VycmVuY3koJ0NhbmFkYScpfVxuICAgICAgICAgICAgY2hlY2tlZD17Y3VycmVuY3kgPT09ICdDYW5hZGEnfVxuICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTQgaC00IGJvcmRlci1ncmF5LTMwMCBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTMwMCBkYXJrOmZvY3VzOnJpbmctYmx1ZS02MDAgZGFyazpmb2N1czpiZy1ibHVlLTYwMCBkYXJrOmJnLWdyYXktNzAwIGRhcms6Ym9yZGVyLWdyYXktNjAwJ1xuICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PSdDYW5hZGEnXG4gICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PSdDYW5hZGEnXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIGh0bWxGb3I9J0NhbmFkYSdcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nYmxvY2sgbWwtMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LWdyYXktMzAwJ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIENhbmFkYVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSB6LTAgdy1mdWxsIG1iLTYgZ3JvdXAnPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgIG5hbWU9e2N1cnJlbmN5ID09PSAnVVMnID8gJ2NhbXBhaWduJyA6ICdjYW5hZGlhbmNhbXBhaWduJ31cbiAgICAgICAgICAgIGlkPXtjdXJyZW5jeSA9PT0gJ1VTJyA/ICdjYW1wYWlnbicgOiAnY2FuYWRpYW5jYW1wYWlnbid9XG4gICAgICAgICAgICBjbGFzc05hbWU9J2Jsb2NrIHB5LTIuNSBweC0wIHctZnVsbCB0ZXh0LXNtIHRleHQtZ3JheS05MDAgYmctdHJhbnNwYXJlbnQgYm9yZGVyLTAgYm9yZGVyLWItMiBib3JkZXItZ3JheS0zMDAgYXBwZWFyYW5jZS1ub25lIGRhcms6dGV4dC13aGl0ZSBkYXJrOmJvcmRlci1ncmF5LTYwMCBkYXJrOmZvY3VzOmJvcmRlci1ibHVlLTUwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0wIGZvY3VzOmJvcmRlci1ibHVlLTYwMCBwZWVyJ1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI9JyAnXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIGh0bWxGb3I9e2N1cnJlbmN5ID09PSAnVVMnID8gJ2NhbXBhaWduJyA6ICdjYW5hZGlhbmNhbXBhaWduJ31cbiAgICAgICAgICAgIGNsYXNzTmFtZT0nYWJzb2x1dGUgdGV4dC1zbSB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTQwMCBkdXJhdGlvbi0zMDAgdHJhbnNmb3JtIC10cmFuc2xhdGUteS02IHNjYWxlLTc1IHRvcC0zIC16LTEwIG9yaWdpbi1bMF0gcGVlci1mb2N1czpsZWZ0LTAgcGVlci1mb2N1czp0ZXh0LWJsdWUtNjAwIHBlZXItZm9jdXM6ZGFyazp0ZXh0LWJsdWUtNTAwIHBlZXItcGxhY2Vob2xkZXItc2hvd246c2NhbGUtMTAwIHBlZXItcGxhY2Vob2xkZXItc2hvd246dHJhbnNsYXRlLXktMCBwZWVyLWZvY3VzOnNjYWxlLTc1IHBlZXItZm9jdXM6LXRyYW5zbGF0ZS15LTYnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ2FtcGFpZ24gTmFtZVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUgei0wIHctZnVsbCBtYi02IGdyb3VwJz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICBuYW1lPSdmdW5kJ1xuICAgICAgICAgICAgaWQ9J2Zsb2F0aW5nX2Z1bmQnXG4gICAgICAgICAgICBjbGFzc05hbWU9J2Jsb2NrIHB5LTIuNSBweC0wIHctZnVsbCB0ZXh0LXNtIHRleHQtZ3JheS05MDAgYmctdHJhbnNwYXJlbnQgYm9yZGVyLTAgYm9yZGVyLWItMiBib3JkZXItZ3JheS0zMDAgYXBwZWFyYW5jZS1ub25lIGRhcms6dGV4dC13aGl0ZSBkYXJrOmJvcmRlci1ncmF5LTYwMCBkYXJrOmZvY3VzOmJvcmRlci1ibHVlLTUwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0wIGZvY3VzOmJvcmRlci1ibHVlLTYwMCBwZWVyJ1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI9JyAnXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIGh0bWxGb3I9J2Zsb2F0aW5nX2Z1bmQnXG4gICAgICAgICAgICBjbGFzc05hbWU9J2Fic29sdXRlIHRleHQtc20gdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDAgZHVyYXRpb24tMzAwIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktNiBzY2FsZS03NSB0b3AtMyAtei0xMCBvcmlnaW4tWzBdIHBlZXItZm9jdXM6bGVmdC0wIHBlZXItZm9jdXM6dGV4dC1ibHVlLTYwMCBwZWVyLWZvY3VzOmRhcms6dGV4dC1ibHVlLTUwMCBwZWVyLXBsYWNlaG9sZGVyLXNob3duOnNjYWxlLTEwMCBwZWVyLXBsYWNlaG9sZGVyLXNob3duOnRyYW5zbGF0ZS15LTAgcGVlci1mb2N1czpzY2FsZS03NSBwZWVyLWZvY3VzOi10cmFuc2xhdGUteS02J1xuICAgICAgICAgID5cbiAgICAgICAgICAgIEZ1bmQgTmFtZVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCB4bDpncmlkLWNvbHMtMiB4bDpnYXAtNic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIHotMCB3LWZ1bGwgbWItNiBncm91cCc+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xuICAgICAgICAgICAgICBuYW1lPSdhcHBlYWwnXG4gICAgICAgICAgICAgIGlkPSdhcHBlYWwnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmxvY2sgcHktMi41IHB4LTAgdy1mdWxsIHRleHQtc20gdGV4dC1ncmF5LTkwMCBiZy10cmFuc3BhcmVudCBib3JkZXItMCBib3JkZXItYi0yIGJvcmRlci1ncmF5LTMwMCBhcHBlYXJhbmNlLW5vbmUgZGFyazp0ZXh0LXdoaXRlIGRhcms6Ym9yZGVyLWdyYXktNjAwIGRhcms6Zm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTAgZm9jdXM6Ym9yZGVyLWJsdWUtNjAwIHBlZXInXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPScgJ1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICBodG1sRm9yPSdhcHBlYWwnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nYWJzb2x1dGUgdGV4dC1zbSB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTQwMCBkdXJhdGlvbi0zMDAgdHJhbnNmb3JtIC10cmFuc2xhdGUteS02IHNjYWxlLTc1IHRvcC0zIC16LTEwIG9yaWdpbi1bMF0gcGVlci1mb2N1czpsZWZ0LTAgcGVlci1mb2N1czp0ZXh0LWJsdWUtNjAwIHBlZXItZm9jdXM6ZGFyazp0ZXh0LWJsdWUtNTAwIHBlZXItcGxhY2Vob2xkZXItc2hvd246c2NhbGUtMTAwIHBlZXItcGxhY2Vob2xkZXItc2hvd246dHJhbnNsYXRlLXktMCBwZWVyLWZvY3VzOnNjYWxlLTc1IHBlZXItZm9jdXM6LXRyYW5zbGF0ZS15LTYnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEFwcGVhbCBJRFxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUgei0wIHctZnVsbCBtYi02IGdyb3VwJz5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXG4gICAgICAgICAgICAgIG5hbWU9J3BsZWRnZSdcbiAgICAgICAgICAgICAgaWQ9J3BsZWRnZSdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdibG9jayBweS0yLjUgcHgtMCB3LWZ1bGwgdGV4dC1zbSB0ZXh0LWdyYXktOTAwIGJnLXRyYW5zcGFyZW50IGJvcmRlci0wIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMzAwIGFwcGVhcmFuY2Utbm9uZSBkYXJrOnRleHQtd2hpdGUgZGFyazpib3JkZXItZ3JheS02MDAgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMCBmb2N1czpib3JkZXItYmx1ZS02MDAgcGVlcidcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9JyAnXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgIGh0bWxGb3I9J3BsZWRnZSdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdhYnNvbHV0ZSB0ZXh0LXNtIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwIGR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTYgc2NhbGUtNzUgdG9wLTMgLXotMTAgb3JpZ2luLVswXSBwZWVyLWZvY3VzOmxlZnQtMCBwZWVyLWZvY3VzOnRleHQtYmx1ZS02MDAgcGVlci1mb2N1czpkYXJrOnRleHQtYmx1ZS01MDAgcGVlci1wbGFjZWhvbGRlci1zaG93bjpzY2FsZS0xMDAgcGVlci1wbGFjZWhvbGRlci1zaG93bjp0cmFuc2xhdGUteS0wIHBlZXItZm9jdXM6c2NhbGUtNzUgcGVlci1mb2N1czotdHJhbnNsYXRlLXktNidcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUGxlZGdlIElEXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdncmlkIHhsOmdyaWQtY29scy0yIHhsOmdhcC02Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUgei0wIHctZnVsbCBtYi02IGdyb3VwJz5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPSd0ZWwnXG4gICAgICAgICAgICAgIHBhdHRlcm49J1swLTldezN9LVswLTldezN9LVswLTldezR9J1xuICAgICAgICAgICAgICBuYW1lPSdmbG9hdGluZ19waG9uZSdcbiAgICAgICAgICAgICAgaWQ9J2Zsb2F0aW5nX3Bob25lJ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J2Jsb2NrIHB5LTIuNSBweC0wIHctZnVsbCB0ZXh0LXNtIHRleHQtZ3JheS05MDAgYmctdHJhbnNwYXJlbnQgYm9yZGVyLTAgYm9yZGVyLWItMiBib3JkZXItZ3JheS0zMDAgYXBwZWFyYW5jZS1ub25lIGRhcms6dGV4dC13aGl0ZSBkYXJrOmJvcmRlci1ncmF5LTYwMCBkYXJrOmZvY3VzOmJvcmRlci1ibHVlLTUwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0wIGZvY3VzOmJvcmRlci1ibHVlLTYwMCBwZWVyJ1xuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nICdcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgaHRtbEZvcj0nZmxvYXRpbmdfcGhvbmUnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nYWJzb2x1dGUgdGV4dC1zbSB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTQwMCBkdXJhdGlvbi0zMDAgdHJhbnNmb3JtIC10cmFuc2xhdGUteS02IHNjYWxlLTc1IHRvcC0zIC16LTEwIG9yaWdpbi1bMF0gcGVlci1mb2N1czpsZWZ0LTAgcGVlci1mb2N1czp0ZXh0LWJsdWUtNjAwIHBlZXItZm9jdXM6ZGFyazp0ZXh0LWJsdWUtNTAwIHBlZXItcGxhY2Vob2xkZXItc2hvd246c2NhbGUtMTAwIHBlZXItcGxhY2Vob2xkZXItc2hvd246dHJhbnNsYXRlLXktMCBwZWVyLWZvY3VzOnNjYWxlLTc1IHBlZXItZm9jdXM6LXRyYW5zbGF0ZS15LTYnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFBob25lIG51bWJlciAoMTIzLTQ1Ni03ODkwKVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUgei0wIHctZnVsbCBtYi02IGdyb3VwJz5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICBuYW1lPSdmbG9hdGluZ19jb21wYW55J1xuICAgICAgICAgICAgICBpZD0nZmxvYXRpbmdfY29tcGFueSdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdibG9jayBweS0yLjUgcHgtMCB3LWZ1bGwgdGV4dC1zbSB0ZXh0LWdyYXktOTAwIGJnLXRyYW5zcGFyZW50IGJvcmRlci0wIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMzAwIGFwcGVhcmFuY2Utbm9uZSBkYXJrOnRleHQtd2hpdGUgZGFyazpib3JkZXItZ3JheS02MDAgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMCBmb2N1czpib3JkZXItYmx1ZS02MDAgcGVlcidcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9JyAnXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgIGh0bWxGb3I9J2Zsb2F0aW5nX2NvbXBhbnknXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nYWJzb2x1dGUgdGV4dC1zbSB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTQwMCBkdXJhdGlvbi0zMDAgdHJhbnNmb3JtIC10cmFuc2xhdGUteS02IHNjYWxlLTc1IHRvcC0zIC16LTEwIG9yaWdpbi1bMF0gcGVlci1mb2N1czpsZWZ0LTAgcGVlci1mb2N1czp0ZXh0LWJsdWUtNjAwIHBlZXItZm9jdXM6ZGFyazp0ZXh0LWJsdWUtNTAwIHBlZXItcGxhY2Vob2xkZXItc2hvd246c2NhbGUtMTAwIHBlZXItcGxhY2Vob2xkZXItc2hvd246dHJhbnNsYXRlLXktMCBwZWVyLWZvY3VzOnNjYWxlLTc1IHBlZXItZm9jdXM6LXRyYW5zbGF0ZS15LTYnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENvbXBhbnkgKEV4LiBHb29nbGUpXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPSdzdWJtaXQnXG4gICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIGJnLWJsdWUtNzAwIGhvdmVyOmJnLWJsdWUtODAwIGZvY3VzOnJpbmctNCBmb2N1czpyaW5nLWJsdWUtMzAwIGZvbnQtbWVkaXVtIHJvdW5kZWQtbGcgdGV4dC1zbSB3LWZ1bGwgc206dy1hdXRvIHB4LTUgcHktMi41IHRleHQtY2VudGVyIGRhcms6YmctYmx1ZS02MDAgZGFyazpob3ZlcjpiZy1ibHVlLTcwMCBkYXJrOmZvY3VzOnJpbmctYmx1ZS04MDAnXG4gICAgICAgID5cbiAgICAgICAgICBTdWJtaXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L0Zvcm0+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwnPlxuICAgICAgICB7bG9hZGVkID09PSB0cnVlICYmIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmb250LW1lZGl1bSc+RG9uYXRpb24gbGluazo8L3A+XG4gICAgICAgICAgICA8cFxuICAgICAgICAgICAgICBjbGFzc05hbWU9J3AtNCBtLTYgZm9udC1tb25vIGJyZWFrLXdvcmRzIGJnLWdyYXktMTAwIGRhcms6Ymctc2xhdGUtNjAwIHJvdW5kZWQtbGcnXG4gICAgICAgICAgICAgIGlkPSdjb25zdHJ1Y3RlZExpbmsnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtjb25zdHJ1Y3RlZExpbmt9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBnYXAtNCc+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NsaXBib2FyZCB0ZXh0LXdoaXRlIGJnLWJsdWUtNzAwIGhvdmVyOmJnLWJsdWUtODAwIGZvY3VzOnJpbmctNCBmb2N1czpyaW5nLWJsdWUtMzAwIGZvbnQtbWVkaXVtIHJvdW5kZWQtbGcgdGV4dC1tZCB3LWZ1bGwgc206dy1hdXRvIHB4LTUgcHktMi41IHRleHQtY2VudGVyIGRhcms6YmctYmx1ZS02MDAgZGFyazpob3ZlcjpiZy1ibHVlLTcwMCBkYXJrOmZvY3VzOnJpbmctYmx1ZS04MDAnXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29weS5kZWZhdWx0KGNvbnN0cnVjdGVkTGluayl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDb3B5IHRvIGNsaXBib2FyZFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC1ibHVlLTgwMCBob3ZlcjpiZy1ibHVlLTEwMCBmb2N1czpyaW5nLTQgZm9jdXM6cmluZy1ibHVlLTMwMCBmb250LXNlbWlib2xkIHJvdW5kZWQtbGcgdGV4dC1tZCB3LWZ1bGwgc206dy1hdXRvIHB4LTUgcHktMi41IHRleHQtY2VudGVyIGRhcms6dGV4dC1ncmF5LTUwIGRhcms6aG92ZXI6YmctYmx1ZS05MDAgZGFyazpmb2N1czpyaW5nLWJsdWUtNjAwIGRhcms6Ym9yZGVyLTIgZGFyazpib3JkZXItYmx1ZS01MDAgYm9yZGVyLTIgYm9yZGVyLWJsdWUtODAwJ1xuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKGNvbnN0cnVjdGVkTGluayl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBPcGVuIExpbmsgaW4gbmV3IHBhZ2VcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonZGI2N2ZmZDcnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LUNINEVGVllWLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1UNkZHTktWSi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU5WMlhMSVJQLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRlZTRTZQNkYuanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LVVHNzZNMlNXLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1JS01GTTRMWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUtEQUhGS1hBLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOnRydWUsJ2hhc0Vycm9yQm91bmRhcnknOnRydWV9LCdyb3V0ZXMvYWVwaSc6eydpZCc6J3JvdXRlcy9hZXBpJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2FlcGknLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYWVwaS1WVE1ZVzc3VC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2FlcGkvaW5kZXgnOnsnaWQnOidyb3V0ZXMvYWVwaS9pbmRleCcsJ3BhcmVudElkJzoncm91dGVzL2FlcGknLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYWVwaS9pbmRleC1ZR1lPV1FZNy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstS0RBSEZLWEEuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZGVtb3MvYWJvdXQnOnsnaWQnOidyb3V0ZXMvZGVtb3MvYWJvdXQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonZGVtb3MvYWJvdXQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvZGVtb3MvYWJvdXQtNEI3QlFLQjQuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9kZW1vcy9hYm91dC9pbmRleCc6eydpZCc6J3JvdXRlcy9kZW1vcy9hYm91dC9pbmRleCcsJ3BhcmVudElkJzoncm91dGVzL2RlbW9zL2Fib3V0JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2RlbW9zL2Fib3V0L2luZGV4LTNNV1czNUlTLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZGVtb3MvYWJvdXQvd2hvYSc6eydpZCc6J3JvdXRlcy9kZW1vcy9hYm91dC93aG9hJywncGFyZW50SWQnOidyb3V0ZXMvZGVtb3MvYWJvdXQnLCdwYXRoJzond2hvYScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9kZW1vcy9hYm91dC93aG9hLVkzN0hGVktaLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZGVtb3MvYWN0aW9ucyc6eydpZCc6J3JvdXRlcy9kZW1vcy9hY3Rpb25zJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2RlbW9zL2FjdGlvbnMnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvZGVtb3MvYWN0aW9ucy1aT0dMNURDTC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZGVtb3MvY29ycmVjdCc6eydpZCc6J3JvdXRlcy9kZW1vcy9jb3JyZWN0JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2RlbW9zL2NvcnJlY3QnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvZGVtb3MvY29ycmVjdC1NS0pSTFBPRS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2RlbW9zL3BhcmFtcyc6eydpZCc6J3JvdXRlcy9kZW1vcy9wYXJhbXMnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonZGVtb3MvcGFyYW1zJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2RlbW9zL3BhcmFtcy1ZSjc3Tk5YQy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2RlbW9zL3BhcmFtcy8kaWQnOnsnaWQnOidyb3V0ZXMvZGVtb3MvcGFyYW1zLyRpZCcsJ3BhcmVudElkJzoncm91dGVzL2RlbW9zL3BhcmFtcycsJ3BhdGgnOic6aWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvZGVtb3MvcGFyYW1zLyRpZC1VUFc0QUQ3SS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5Jzp0cnVlLCdoYXNFcnJvckJvdW5kYXJ5Jzp0cnVlfSwncm91dGVzL2RlbW9zL3BhcmFtcy9pbmRleCc6eydpZCc6J3JvdXRlcy9kZW1vcy9wYXJhbXMvaW5kZXgnLCdwYXJlbnRJZCc6J3JvdXRlcy9kZW1vcy9wYXJhbXMnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvZGVtb3MvcGFyYW1zL2luZGV4LVFJUVJEU1dLLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtQVdMQUQ1RVMuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVE2SURaSEM3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wb3J0Zm9saW8nOnsnaWQnOidyb3V0ZXMvcG9ydGZvbGlvJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3BvcnRmb2xpbycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wb3J0Zm9saW8tWUM0MkI2RTMuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVE2SURaSEM3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9yZXN1bWUnOnsnaWQnOidyb3V0ZXMvcmVzdW1lJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3Jlc3VtZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9yZXN1bWUtSFFIRjRMMkUuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtREI2N0ZGRDcuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBVUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG9DQUFvQztBQUFBLE1BQ2pFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsc0NBQXNDO0FBQUEsTUFDbkUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxtQ0FBbUM7QUFBQSxNQUNoRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBR2pDLEFBWUEsV0FBTyxl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LElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosb0JBQW9CO0FBQUEsSUFDaEIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixpQkFBaUI7QUFBQSxJQUNiLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosZ0JBQWdCO0FBQUEsSUFDWixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLGVBQWU7QUFBQSxJQUNYLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVoscUJBQXFCO0FBQUEsSUFDakIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUE7OztBRHRIZCx3QkFBd0IsT0FBTyxTQUFTO0FBQ3RDLE1BQUk7QUFDSixNQUFJO0FBRUosTUFBSSxNQUFNLGlCQUFpQixNQUFNO0FBQy9CLHdCQUFvQixNQUFNO0FBQUE7QUFHNUIsUUFBTSxhQUFhLE1BQU0sUUFBUTtBQUNqQyxRQUFNLHVCQUF1QixNQUFNLFFBQVE7QUFFM0MsTUFBSSxjQUFjLFFBQVEsWUFBWSxLQUFLLGFBQWE7QUFDdEQsNkJBQXlCLFdBQVcsTUFBTSxLQUFLO0FBQUE7QUFHakQsUUFBTSxjQUFjO0FBQUEsSUFDbEIsK0JBQStCO0FBQUEsSUFDL0I7QUFBQSxJQUNBLHVCQUF1QjtBQUFBO0FBSXpCLFNBQU8sS0FBSyxhQUFhLFFBQVEsU0FBTztBQUN0QyxRQUFJLFlBQVksUUFBUSxNQUFNO0FBQzVCLGFBQU8sWUFBWTtBQUFBO0FBQUE7QUFJdkIsU0FBTztBQUFBO0FBR0YsSUFBTSxVQUFVLDBDQUFxQjtBQUFBLEVBQzFDO0FBQUEsRUFDQTtBQUFBLEVBQ0EsTUFBTTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
