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
var tailwind_default = "/build/_assets/tailwind-EV3ZCLBS.css";

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
    to: "/resume"
  }, "Resume"), /* @__PURE__ */ import_react3.default.createElement(import_remix2.Link, {
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
    href: "https://www.linkedin.com/in/samblekhman/",
    className: "text-gray-500 hover:text-gray-400"
  }, /* @__PURE__ */ import_react3.default.createElement("span", {
    className: "sr-only"
  }, "Linkedin"), /* @__PURE__ */ import_react3.default.createElement("svg", {
    className: "h-6 w-6",
    "aria-hidden": "true",
    viewBox: "0 0 256 250",
    fill: "currentColor",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "xMidYMid"
  }, /* @__PURE__ */ import_react3.default.createElement("g", null, /* @__PURE__ */ import_react3.default.createElement("path", {
    d: "M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055",
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
    to: "/resume"
  }, "Resume"), /* @__PURE__ */ import_react3.default.createElement(import_remix2.Link, {
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
  })))), /* @__PURE__ */ import_react6.default.createElement("p", null, description), /* @__PURE__ */ import_react6.default.createElement("div", {
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
  })))))));
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
    ]
  }), /* @__PURE__ */ React.createElement(ProjectCard, {
    projectLink: "https://sams-jokes.herokuapp.com/",
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
    ]
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
  }, /* @__PURE__ */ React.createElement("p", null, "I am an operations and technology engineer that believes in making the world a better place. I work with organizations making an impact on both the world as we know it today and, inexorably, on its future."), /* @__PURE__ */ React.createElement("p", null, "I am currently the Director of Operations for the AEPi Foundation. We are an international charity focused on leadership training and financial support for Jewish students on College campuses. In my role, I am responsible for keeping the team organized, together, and focused on our mission. I am in charge of implementing solutions and processes to reduce friction and cognitive load for the team."), /* @__PURE__ */ React.createElement("p", null, "I also develop web applications for clients, some of which you can see in my ", /* @__PURE__ */ React.createElement(import_remix11.Link, {
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
var assets_manifest_default = { "version": "9197e9e3", "entry": { "module": "/build/entry.client-YZC2HXVA.js", "imports": ["/build/_shared/chunk-57DB2D4I.js", "/build/_shared/chunk-P5CGAHKD.js", "/build/_shared/chunk-FVSE6P6F.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-73POWYVO.js", "imports": ["/build/_shared/chunk-IKMFM4LZ.js", "/build/_shared/chunk-KDAHFKXA.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/aepi": { "id": "routes/aepi", "parentId": "root", "path": "aepi", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/aepi-Z75253F4.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/aepi/index": { "id": "routes/aepi/index", "parentId": "routes/aepi", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/aepi/index-JTUB6TSH.js", "imports": ["/build/_shared/chunk-KDAHFKXA.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/demos/about": { "id": "routes/demos/about", "parentId": "root", "path": "demos/about", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/demos/about-N4VYPCNX.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/demos/about/index": { "id": "routes/demos/about/index", "parentId": "routes/demos/about", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/demos/about/index-6TTYODSR.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/demos/about/whoa": { "id": "routes/demos/about/whoa", "parentId": "routes/demos/about", "path": "whoa", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/demos/about/whoa-5WR36Y2N.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/demos/actions": { "id": "routes/demos/actions", "parentId": "root", "path": "demos/actions", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/demos/actions-3PKX7ARN.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/demos/correct": { "id": "routes/demos/correct", "parentId": "root", "path": "demos/correct", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/demos/correct-MKJRLPOE.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/demos/params": { "id": "routes/demos/params", "parentId": "root", "path": "demos/params", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/demos/params-I5INVJP6.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/demos/params/$id": { "id": "routes/demos/params/$id", "parentId": "routes/demos/params", "path": ":id", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/demos/params/$id-GQLGVKNG.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/demos/params/index": { "id": "routes/demos/params/index", "parentId": "routes/demos/params", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/demos/params/index-QIQRDSWK.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-5FGTSZDO.js", "imports": ["/build/_shared/chunk-Q6IDZHC7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/portfolio": { "id": "routes/portfolio", "parentId": "root", "path": "portfolio", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/portfolio-4JWYSMYB.js", "imports": ["/build/_shared/chunk-Q6IDZHC7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/resume": { "id": "routes/resume", "parentId": "root", "path": "resume", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/resume-HQHF4L2E.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-9197E9E3.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi8uLi8uLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L1VzZXJzL3NhbWJsZWtobWFuL0RvY3VtZW50cy9HaXRIdWIvc2FtYmxla2htYW4uY29tL2FwcC9yb290LnRzeCIsICIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9sYXlvdXQudHN4IiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL2ljb25zLnRzeCIsICJyb3V0ZTovVXNlcnMvc2FtYmxla2htYW4vRG9jdW1lbnRzL0dpdEh1Yi9zYW1ibGVraG1hbi5jb20vYXBwL3JvdXRlcy9kZW1vcy9hY3Rpb25zLnRzeCIsICJyb3V0ZTovVXNlcnMvc2FtYmxla2htYW4vRG9jdW1lbnRzL0dpdEh1Yi9zYW1ibGVraG1hbi5jb20vYXBwL3JvdXRlcy9kZW1vcy9jb3JyZWN0LnRzeCIsICJyb3V0ZTovVXNlcnMvc2FtYmxla2htYW4vRG9jdW1lbnRzL0dpdEh1Yi9zYW1ibGVraG1hbi5jb20vYXBwL3JvdXRlcy9kZW1vcy9wYXJhbXMudHN4IiwgInJvdXRlOi9Vc2Vycy9zYW1ibGVraG1hbi9Eb2N1bWVudHMvR2l0SHViL3NhbWJsZWtobWFuLmNvbS9hcHAvcm91dGVzL2RlbW9zL3BhcmFtcy9pbmRleC50c3giLCAicm91dGU6L1VzZXJzL3NhbWJsZWtobWFuL0RvY3VtZW50cy9HaXRIdWIvc2FtYmxla2htYW4uY29tL2FwcC9yb3V0ZXMvZGVtb3MvcGFyYW1zLyRpZC50c3giLCAicm91dGU6L1VzZXJzL3NhbWJsZWtobWFuL0RvY3VtZW50cy9HaXRIdWIvc2FtYmxla2htYW4uY29tL2FwcC9yb3V0ZXMvZGVtb3MvYWJvdXQudHN4IiwgInJvdXRlOi9Vc2Vycy9zYW1ibGVraG1hbi9Eb2N1bWVudHMvR2l0SHViL3NhbWJsZWtobWFuLmNvbS9hcHAvcm91dGVzL2RlbW9zL2Fib3V0L2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvc2FtYmxla2htYW4vRG9jdW1lbnRzL0dpdEh1Yi9zYW1ibGVraG1hbi5jb20vYXBwL3JvdXRlcy9kZW1vcy9hYm91dC93aG9hLnRzeCIsICJyb3V0ZTovVXNlcnMvc2FtYmxla2htYW4vRG9jdW1lbnRzL0dpdEh1Yi9zYW1ibGVraG1hbi5jb20vYXBwL3JvdXRlcy9wb3J0Zm9saW8udHN4IiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL3Byb2plY3RDYXJkLnRzeCIsICJyb3V0ZTovVXNlcnMvc2FtYmxla2htYW4vRG9jdW1lbnRzL0dpdEh1Yi9zYW1ibGVraG1hbi5jb20vYXBwL3JvdXRlcy9yZXN1bWUudHN4IiwgInJvdXRlOi9Vc2Vycy9zYW1ibGVraG1hbi9Eb2N1bWVudHMvR2l0SHViL3NhbWJsZWtobWFuLmNvbS9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvc2FtYmxla2htYW4vRG9jdW1lbnRzL0dpdEh1Yi9zYW1ibGVraG1hbi5jb20vYXBwL3JvdXRlcy9hZXBpLnRzeCIsICJyb3V0ZTovVXNlcnMvc2FtYmxla2htYW4vRG9jdW1lbnRzL0dpdEh1Yi9zYW1ibGVraG1hbi5jb20vYXBwL3JvdXRlcy9hZXBpL2luZGV4LnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJpbXBvcnQgeyBjcmVhdGVSZXF1ZXN0SGFuZGxlciB9IGZyb20gXCJAcmVtaXgtcnVuL25ldGxpZnlcIjtcbmltcG9ydCAqIGFzIGJ1aWxkIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjtcblxuLypcbiAqIFJldHVybnMgYSBjb250ZXh0IG9iamVjdCB3aXRoIGF0IG1vc3QgMyBrZXlzOlxuICogIC0gYG5ldGxpZnlHcmFwaFRva2VuYDogcmF3IGF1dGhlbnRpY2F0aW9uIHRva2VuIHRvIHVzZSB3aXRoIE5ldGxpZnkgR3JhcGhcbiAqICAtIGBjbGllbnROZXRsaWZ5R3JhcGhBY2Nlc3NUb2tlbmA6IEZvciB1c2Ugd2l0aCBKV1RzIGdlbmVyYXRlZCBieVxuICogICAgYG5ldGxpZnktZ3JhcGgtYXV0aGAuXG4gKiAgLSBgbmV0bGlmeUdyYXBoU2lnbmF0dXJlYDogYSBzaWduYXR1cmUgZm9yIHN1YnNjcmlwdGlvbiBldmVudHMuIFdpbGwgYmVcbiAqICAgIHByZXNlbnQgaWYgYSBzZWNyZXQgaXMgc2V0LlxuICovXG5mdW5jdGlvbiBnZXRMb2FkQ29udGV4dChldmVudCwgY29udGV4dCkge1xuICBsZXQgcmF3QXV0aG9yaXphdGlvblN0cmluZztcbiAgbGV0IG5ldGxpZnlHcmFwaFRva2VuO1xuXG4gIGlmIChldmVudC5hdXRobGlmeVRva2VuICE9IG51bGwpIHtcbiAgICBuZXRsaWZ5R3JhcGhUb2tlbiA9IGV2ZW50LmF1dGhsaWZ5VG9rZW47XG4gIH1cblxuICBjb25zdCBhdXRoSGVhZGVyID0gZXZlbnQuaGVhZGVyc1tcImF1dGhvcml6YXRpb25cIl07XG4gIGNvbnN0IGdyYXBoU2lnbmF0dXJlSGVhZGVyID0gZXZlbnQuaGVhZGVyc1tcIngtbmV0bGlmeS1ncmFwaC1zaWduYXR1cmVcIl07XG5cbiAgaWYgKGF1dGhIZWFkZXIgIT0gbnVsbCAmJiAvQmVhcmVyIC9naS50ZXN0KGF1dGhIZWFkZXIpKSB7XG4gICAgcmF3QXV0aG9yaXphdGlvblN0cmluZyA9IGF1dGhIZWFkZXIuc3BsaXQoXCIgXCIpWzFdO1xuICB9XG5cbiAgY29uc3QgbG9hZENvbnRleHQgPSB7XG4gICAgY2xpZW50TmV0bGlmeUdyYXBoQWNjZXNzVG9rZW46IHJhd0F1dGhvcml6YXRpb25TdHJpbmcsXG4gICAgbmV0bGlmeUdyYXBoVG9rZW46IG5ldGxpZnlHcmFwaFRva2VuLFxuICAgIG5ldGxpZnlHcmFwaFNpZ25hdHVyZTogZ3JhcGhTaWduYXR1cmVIZWFkZXJcbiAgfTtcblxuICAvLyBSZW1vdmUga2V5cyB3aXRoIHVuZGVmaW5lZCB2YWx1ZXNcbiAgT2JqZWN0LmtleXMobG9hZENvbnRleHQpLmZvckVhY2goa2V5ID0+IHtcbiAgICBpZiAobG9hZENvbnRleHRba2V5XSA9PSBudWxsKSB7XG4gICAgICBkZWxldGUgbG9hZENvbnRleHRba2V5XTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBsb2FkQ29udGV4dDtcbn1cblxuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBjcmVhdGVSZXF1ZXN0SGFuZGxlcih7XG4gIGJ1aWxkLFxuICBnZXRMb2FkQ29udGV4dCxcbiAgbW9kZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlZcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9zYW1ibGVraG1hbi9Eb2N1bWVudHMvR2l0SHViL3NhbWJsZWtobWFuLmNvbS9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvc2FtYmxla2htYW4vRG9jdW1lbnRzL0dpdEh1Yi9zYW1ibGVraG1hbi5jb20vYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9zYW1ibGVraG1hbi9Eb2N1bWVudHMvR2l0SHViL3NhbWJsZWtobWFuLmNvbS9hcHAvcm91dGVzL2RlbW9zL2FjdGlvbnMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9zYW1ibGVraG1hbi9Eb2N1bWVudHMvR2l0SHViL3NhbWJsZWtobWFuLmNvbS9hcHAvcm91dGVzL2RlbW9zL2NvcnJlY3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9zYW1ibGVraG1hbi9Eb2N1bWVudHMvR2l0SHViL3NhbWJsZWtobWFuLmNvbS9hcHAvcm91dGVzL2RlbW9zL3BhcmFtcy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL1VzZXJzL3NhbWJsZWtobWFuL0RvY3VtZW50cy9HaXRIdWIvc2FtYmxla2htYW4uY29tL2FwcC9yb3V0ZXMvZGVtb3MvcGFyYW1zL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvVXNlcnMvc2FtYmxla2htYW4vRG9jdW1lbnRzL0dpdEh1Yi9zYW1ibGVraG1hbi5jb20vYXBwL3JvdXRlcy9kZW1vcy9wYXJhbXMvJGlkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCIvVXNlcnMvc2FtYmxla2htYW4vRG9jdW1lbnRzL0dpdEh1Yi9zYW1ibGVraG1hbi5jb20vYXBwL3JvdXRlcy9kZW1vcy9hYm91dC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiL1VzZXJzL3NhbWJsZWtobWFuL0RvY3VtZW50cy9HaXRIdWIvc2FtYmxla2htYW4uY29tL2FwcC9yb3V0ZXMvZGVtb3MvYWJvdXQvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTggZnJvbSBcIi9Vc2Vycy9zYW1ibGVraG1hbi9Eb2N1bWVudHMvR2l0SHViL3NhbWJsZWtobWFuLmNvbS9hcHAvcm91dGVzL2RlbW9zL2Fib3V0L3dob2EudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTkgZnJvbSBcIi9Vc2Vycy9zYW1ibGVraG1hbi9Eb2N1bWVudHMvR2l0SHViL3NhbWJsZWtobWFuLmNvbS9hcHAvcm91dGVzL3BvcnRmb2xpby50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTAgZnJvbSBcIi9Vc2Vycy9zYW1ibGVraG1hbi9Eb2N1bWVudHMvR2l0SHViL3NhbWJsZWtobWFuLmNvbS9hcHAvcm91dGVzL3Jlc3VtZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTEgZnJvbSBcIi9Vc2Vycy9zYW1ibGVraG1hbi9Eb2N1bWVudHMvR2l0SHViL3NhbWJsZWtobWFuLmNvbS9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMiBmcm9tIFwiL1VzZXJzL3NhbWJsZWtobWFuL0RvY3VtZW50cy9HaXRIdWIvc2FtYmxla2htYW4uY29tL2FwcC9yb3V0ZXMvYWVwaS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTMgZnJvbSBcIi9Vc2Vycy9zYW1ibGVraG1hbi9Eb2N1bWVudHMvR2l0SHViL3NhbWJsZWtobWFuLmNvbS9hcHAvcm91dGVzL2FlcGkvaW5kZXgudHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9kZW1vcy9hY3Rpb25zXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9kZW1vcy9hY3Rpb25zXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImRlbW9zL2FjdGlvbnNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL2RlbW9zL2NvcnJlY3RcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2RlbW9zL2NvcnJlY3RcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiZGVtb3MvY29ycmVjdFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvZGVtb3MvcGFyYW1zXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9kZW1vcy9wYXJhbXNcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiZGVtb3MvcGFyYW1zXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9kZW1vcy9wYXJhbXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2RlbW9zL3BhcmFtcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2RlbW9zL3BhcmFtc1wiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL2RlbW9zL3BhcmFtcy8kaWRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2RlbW9zL3BhcmFtcy8kaWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9kZW1vcy9wYXJhbXNcIixcbiAgICAgIHBhdGg6IFwiOmlkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTVcbiAgICB9LFxuICBcInJvdXRlcy9kZW1vcy9hYm91dFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvZGVtb3MvYWJvdXRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiZGVtb3MvYWJvdXRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNlxuICAgIH0sXG4gIFwicm91dGVzL2RlbW9zL2Fib3V0L2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9kZW1vcy9hYm91dC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2RlbW9zL2Fib3V0XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU3XG4gICAgfSxcbiAgXCJyb3V0ZXMvZGVtb3MvYWJvdXQvd2hvYVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvZGVtb3MvYWJvdXQvd2hvYVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2RlbW9zL2Fib3V0XCIsXG4gICAgICBwYXRoOiBcIndob2FcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH0sXG4gIFwicm91dGVzL3BvcnRmb2xpb1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcG9ydGZvbGlvXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInBvcnRmb2xpb1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU5XG4gICAgfSxcbiAgXCJyb3V0ZXMvcmVzdW1lXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9yZXN1bWVcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicmVzdW1lXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEwXG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMVxuICAgIH0sXG4gIFwicm91dGVzL2FlcGlcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2FlcGlcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYWVwaVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMlxuICAgIH0sXG4gIFwicm91dGVzL2FlcGkvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2FlcGkvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9hZXBpXCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxM1xuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgbGV0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgTGluayxcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE1ldGFGdW5jdGlvbixcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbiAgdXNlQ2F0Y2gsXG59IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgc3R5bGVzIGZyb20gJ34vdGFpbHdpbmQuY3NzJ1xuaW1wb3J0IExheW91dCBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnU2FtIEJsZWtobWFuJyxcbiAgICAndGhlbWUtY29sb3InOiAnIzBmMTcyYScsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTXkgbmFtZSBpcyBTYW0gQmxla2htYW4uIEkgYW0gYW4gb3BlcmF0aW9ucyBhbmQgdGVjaG5vbG9neSBlbmdpbmVlciB0aGF0IGJlbGlldmVzIGluIG1ha2luZyB0aGUgd29ybGQgYSBiZXR0ZXIgcGxhY2UuIEkgd29yayB3aXRoIG9yZ2FuaXphdGlvbnMgbWFraW5nIGFuIGltcGFjdCBvbiBib3RoIHRoZSB3b3JsZCBhcyB3ZSBrbm93IGl0IHRvZGF5IGFuZCwgaW5leG9yYWJseSwgb24gaXRzIGZ1dHVyZS4nLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICByZWw6ICdpY29uJyxcbiAgICAgIGhyZWY6ICcvc2Zhdmljb24zMi5wbmcnLFxuICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICBzaXplczogJzMyeDMyJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlbDogJ2FwcGxlLXRvdWNoLWljb24nLFxuICAgICAgaHJlZjogJy9zZmF2aWNvbjE4MC5wbmcnLFxuICAgICAgc2l6ZXM6ICcxODB4MTgwJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlbDogJ2ljb24nLFxuICAgICAgaHJlZjogJy9zZmF2aWNvbjE2LnBuZycsXG4gICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgIHNpemVzOiAnMTZ4MTYnLFxuICAgIH0sXG4gICAge1xuICAgICAgcmVsOiAnc3R5bGVzaGVldCcsXG4gICAgICBocmVmOiAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Pb29oK0JhYnkmZGlzcGxheT1zd2FwJyxcbiAgICB9LFxuICAgIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9LFxuICBdXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8RG9jdW1lbnQ+XG4gICAgICA8Q2hha3JhUHJvdmlkZXI+XG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8L0xheW91dD5cbiAgICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gICAgPC9Eb2N1bWVudD5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSh7IGVycm9yIH06IHsgZXJyb3I6IEVycm9yIH0pIHtcbiAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgcmV0dXJuIChcbiAgICA8RG9jdW1lbnQgdGl0bGU9XCJFcnJvciFcIj5cbiAgICAgIDxDaGFrcmFQcm92aWRlcj5cbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPlRoZXJlIHdhcyBhbiBlcnJvcjwvaDE+XG4gICAgICAgICAgICA8cD57ZXJyb3IubWVzc2FnZX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgICA8L0RvY3VtZW50PlxuICApXG59XG5cbi8vIGh0dHBzOi8vcmVtaXgucnVuL2RvY3MvZW4vdjEvYXBpL2NvbnZlbnRpb25zI2NhdGNoYm91bmRhcnlcbmV4cG9ydCBmdW5jdGlvbiBDYXRjaEJvdW5kYXJ5KCkge1xuICBsZXQgY2F1Z2h0ID0gdXNlQ2F0Y2goKVxuXG4gIGxldCBtZXNzYWdlXG4gIHN3aXRjaCAoY2F1Z2h0LnN0YXR1cykge1xuICAgIGNhc2UgNDAxOlxuICAgICAgbWVzc2FnZSA9IChcbiAgICAgICAgPHA+XG4gICAgICAgICAgT29wcyEgTG9va3MgbGlrZSB5b3UgdHJpZWQgdG8gdmlzaXQgYSBwYWdlIHRoYXQgeW91IGRvIG5vdCBoYXZlIGFjY2Vzc1xuICAgICAgICAgIHRvLlxuICAgICAgICA8L3A+XG4gICAgICApXG4gICAgICBicmVha1xuICAgIGNhc2UgNDA0OlxuICAgICAgbWVzc2FnZSA9IChcbiAgICAgICAgPHA+T29wcyEgTG9va3MgbGlrZSB5b3UgdHJpZWQgdG8gdmlzaXQgYSBwYWdlIHRoYXQgZG9lcyBub3QgZXhpc3QuPC9wPlxuICAgICAgKVxuICAgICAgYnJlYWtcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoY2F1Z2h0LmRhdGEgfHwgY2F1Z2h0LnN0YXR1c1RleHQpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxEb2N1bWVudCB0aXRsZT17YCR7Y2F1Z2h0LnN0YXR1c30gJHtjYXVnaHQuc3RhdHVzVGV4dH1gfT5cbiAgICAgIDxDaGFrcmFQcm92aWRlcj5cbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICA8aDE+XG4gICAgICAgICAgICB7Y2F1Z2h0LnN0YXR1c306IHtjYXVnaHQuc3RhdHVzVGV4dH1cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIHttZXNzYWdlfVxuICAgICAgICA8L0xheW91dD5cbiAgICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gICAgPC9Eb2N1bWVudD5cbiAgKVxufVxuXG5mdW5jdGlvbiBEb2N1bWVudCh7XG4gIGNoaWxkcmVuLFxuICB0aXRsZSA9ICdTYW0gQmxla2htYW4nLFxufToge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG4gIHRpdGxlPzogc3RyaW5nXG59KSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCIgY2xhc3NOYW1lPVwiZGFyayBcIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keSBjbGFzc05hbWU9XCJkYXJrOmJnLXNsYXRlLTkwMFwiPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICA8TGl2ZVJlbG9hZCAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKVxufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IE1FTlUsIFNhbUJsZWtobWFuTG9nbyB9IGZyb20gJy4vaWNvbnMnXG5pbXBvcnQge1xuICBEcmF3ZXIsXG4gIERyYXdlckJvZHksXG4gIERyYXdlckhlYWRlcixcbiAgRHJhd2VyT3ZlcmxheSxcbiAgRHJhd2VyQ29udGVudCxcbiAgRHJhd2VyQ2xvc2VCdXR0b24sXG4gIHVzZURpc2Nsb3N1cmUsXG4gIEJ1dHRvbixcbiAgRGl2aWRlcixcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJtYi04IHRleHQtd2hpdGVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC02XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIj5cbiAgICAgICAgICAgICAgICA8U2FtQmxla2htYW5Mb2dvIC8+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0xMCBoaWRkZW4gc3BhY2UteC04IHNtOmJsb2NrXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcmVzdW1lXCI+UmVzdW1lPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3BvcnRmb2xpb1wiPlBvcnRmb2xpbzwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC13aGl0ZSBzbTpoaWRkZW4gXCI+XG4gICAgICAgICAgICAgIDxEcmF3ZXJFeGFtcGxlIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlblwiPntjaGlsZHJlbn08L21haW4+XG4gICAgICA8Zm9vdGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctN3hsIHB5LTEyIHB4LTQgc206cHgtNiBtZDpmbGV4IG1kOml0ZW1zLWNlbnRlciBtZDpqdXN0aWZ5LWJldHdlZW4gbGc6cHgtOFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBzcGFjZS14LTYgbWQ6b3JkZXItMlwiPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vc2JsZWtzXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LWdyYXktNDAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkdpdGh1Yjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNiB3LTZcIlxuICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNTYgMjUwXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGc+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBkPVwiTTEyOC4wMDEwNiwwIEM1Ny4zMTcyOTI2LDAgMCw1Ny4zMDY2OTQyIDAsMTI4LjAwMTA2IEMwLDE4NC41NTUyODEgMzYuNjc2MTk5NywyMzIuNTM1NTQyIDg3LjUzNDkzNywyNDkuNDYwODk5IEM5My45MzIwMjIzLDI1MC42NDU3NzkgOTYuMjgwNTg4LDI0Ni42ODQxNjUgOTYuMjgwNTg4LDI0My4zMDMzMzMgQzk2LjI4MDU4OCwyNDAuMjUxMDQ1IDk2LjE2MTg4NzgsMjMwLjE2Nzg5OSA5Ni4xMDY3NzcsMjE5LjQ3MjE3NiBDNjAuNDk2NzU4NSwyMjcuMjE1MjM1IDUyLjk4MjYyMDcsMjA0LjM2OTcxMiA1Mi45ODI2MjA3LDIwNC4zNjk3MTIgQzQ3LjE1OTk1ODQsMTg5LjU3NDU5OCAzOC43NzA0MDgsMTg1LjY0MDUzOCAzOC43NzA0MDgsMTg1LjY0MDUzOCBDMjcuMTU2ODc4NSwxNzcuNjk2MTEzIDM5LjY0NTgyMDYsMTc3Ljg1OTMyNSAzOS42NDU4MjA2LDE3Ny44NTkzMjUgQzUyLjQ5OTM0MTksMTc4Ljc2MjI5MyA1OS4yNjczNjUsMTkxLjA0OTg3IDU5LjI2NzM2NSwxOTEuMDQ5ODcgQzcwLjY4Mzc2NzUsMjEwLjYxODQyMyA4OS4yMTE1NzUzLDIwNC45NjEwOTMgOTYuNTE1ODY4NSwyMDEuNjkwNDgyIEM5Ny42NjQ3MTU1LDE5My40MTc1MTIgMTAwLjk4MTk1OSwxODcuNzcwNzggMTA0LjY0MjU4MywxODQuNTc0MzU3IEM3Ni4yMTE3OTksMTgxLjMzNzY2IDQ2LjMyNDgxOSwxNzAuMzYyMTQ0IDQ2LjMyNDgxOSwxMjEuMzE1NzAyIEM0Ni4zMjQ4MTksMTA3LjM0MDg4OSA1MS4zMjUwNTg4LDk1LjkyMjM2ODIgNTkuNTEzMjQzNyw4Ni45NTgzOTM3IEM1OC4xODQyMjY4LDgzLjczNDQxNTIgNTMuODAyOTIyOSw3MC43MTU1NjIgNjAuNzUzMjM1NCw1My4wODQzNjM2IEM2MC43NTMyMzU0LDUzLjA4NDM2MzYgNzEuNTAxOTUwMSw0OS42NDQxODEzIDk1Ljk2MjY0MTIsNjYuMjA0OTU5NSBDMTA2LjE3Mjk2Nyw2My4zNjg4NzYgMTE3LjEyMzA0Nyw2MS45NDY1OTQ5IDEyOC4wMDEwNiw2MS44OTc4NDMyIEMxMzguODc5MDczLDYxLjk0NjU5NDkgMTQ5LjgzNzYzMiw2My4zNjg4NzYgMTYwLjA2NzAzMyw2Ni4yMDQ5NTk1IEMxODQuNDk4MDUsNDkuNjQ0MTgxMyAxOTUuMjMxOTI2LDUzLjA4NDM2MzYgMTk1LjIzMTkyNiw1My4wODQzNjM2IEMyMDIuMTk5MTk3LDcwLjcxNTU2MiAxOTcuODE1NzczLDgzLjczNDQxNTIgMTk2LjQ4Njc1Niw4Ni45NTgzOTM3IEMyMDQuNjk0MDE4LDk1LjkyMjM2ODIgMjA5LjY2MDM0MywxMDcuMzQwODg5IDIwOS42NjAzNDMsMTIxLjMxNTcwMiBDMjA5LjY2MDM0MywxNzAuNDc4NzI1IDE3OS43MTYxMzMsMTgxLjMwMzc0NyAxNTEuMjEzMjgxLDE4NC40NzI2MTQgQzE1NS44MDQ0MywxODguNDQ0ODI4IDE1OS44OTUzNDIsMTk2LjIzNDUxOCAxNTkuODk1MzQyLDIwOC4xNzY1OTMgQzE1OS44OTUzNDIsMjI1LjMwMzMxNyAxNTkuNzQ2OTY4LDIzOS4wODczNjEgMTU5Ljc0Njk2OCwyNDMuMzAzMzMzIEMxNTkuNzQ2OTY4LDI0Ni43MDk2MDEgMTYyLjA1MTAyLDI1MC43MDA4OSAxNjguNTM5MjUsMjQ5LjQ0Mzk0MSBDMjE5LjM3MDQzMiwyMzIuNDk5NTA3IDI1NiwxODQuNTM2MjA0IDI1NiwxMjguMDAxMDYgQzI1Niw1Ny4zMDY2OTQyIDE5OC42OTExODcsMCAxMjguMDAxMDYsMCBaIE00Ny45NDA1NTkzLDE4Mi4zNDAyMTIgQzQ3LjY1ODY0NjUsMTgyLjk3NjEwNSA0Ni42NTgxNzQ1LDE4My4xNjY4NzMgNDUuNzQ2NzI3NywxODIuNzMwMjI3IEM0NC44MTgzMjM1LDE4Mi4zMTI2NTYgNDQuMjk2ODkxNCwxODEuNDQ1NzIyIDQ0LjU5Nzg4MDgsMTgwLjgwNzcxIEM0NC44NzM0MzQ0LDE4MC4xNTI3MzkgNDUuODc2MDI2LDE3OS45NzA0NSA0Ni44MDIzMTAzLDE4MC40MDkyMTYgQzQ3LjczMjgzNDIsMTgwLjgyNjc4NiA0OC4yNjI3NDUxLDE4MS43MDIxOTkgNDcuOTQwNTU5MywxODIuMzQwMjEyIFogTTU0LjIzNjc4OTIsMTg3Ljk1ODI1NCBDNTMuNjI2MzMxOCwxODguNTI0MTk5IDUyLjQzMjk3MjMsMTg4LjI2MTM2MyA1MS42MjMyNjgyLDE4Ny4zNjY4NzQgQzUwLjc4NjAwODgsMTg2LjQ3NDUwNCA1MC42MjkxNTUzLDE4NS4yODExNDQgNTEuMjQ4MDkxMiwxODQuNzA2NzIgQzUxLjg3NzYyNTQsMTg0LjE0MDc3NSA1My4wMzQ5NTEyLDE4NC40MDU3MzEgNTMuODc0MzMwMiwxODUuMjk4MTAxIEM1NC43MTE1ODkyLDE4Ni4yMDEwNjkgNTQuODc0ODAxOSwxODcuMzg1OTUgNTQuMjM2Nzg5MiwxODcuOTU4MjU0IFogTTU4LjU1NjI0MTMsMTk1LjE0NjM0NyBDNTcuNzcxOTczMiwxOTUuNjkxMDk2IDU2LjQ4OTU4ODYsMTk1LjE4MDI2MSA1NS42OTY4NDE3LDE5NC4wNDIwMTMgQzU0LjkxMjU3MzMsMTkyLjkwMzc2NCA1NC45MTI1NzMzLDE5MS41Mzg3MTMgNTUuNzEzNzk5LDE5MC45OTE4NDUgQzU2LjUwODY2NTEsMTkwLjQ0NDk3NyA1Ny43NzE5NzMyLDE5MC45MzY3MzUgNTguNTc1MzE4MSwxOTIuMDY2NTA1IEM1OS4zNTc0NjY5LDE5My4yMjM4MyA1OS4zNTc0NjY5LDE5NC41ODg4OCA1OC41NTYyNDEzLDE5NS4xNDYzNDcgWiBNNjUuODYxMzU5MiwyMDMuNDcxMTc0IEM2NS4xNTk3NTcxLDIwNC4yNDQ4NDYgNjMuNjY1NDA4MywyMDQuMDM3MTIgNjIuNTcxNjcxNywyMDIuOTgxNTM4IEM2MS40NTI0OTk5LDIwMS45NDkyNyA2MS4xNDA5MTIyLDIwMC40ODQ1OTYgNjEuODQ0NjM0MSwxOTkuNzEwOTI2IEM2Mi41NTQ3MTQ2LDE5OC45MzUxMzcgNjQuMDU3NTQyMiwxOTkuMTUzNDYgNjUuMTU5NzU3MSwyMDAuMjAwNTY0IEM2Ni4yNzA0NTA2LDIwMS4yMzA3MTIgNjYuNjA5NTkzNiwyMDIuNzA1OTg0IDY1Ljg2MTM1OTIsMjAzLjQ3MTE3NCBaIE03NS4zMDI1MTUxLDIwNi4yODE1NDIgQzc0Ljk5MzA0NzQsMjA3LjI4NDEzNCA3My41NTM4MDksMjA3LjczOTg1NyA3Mi4xMDM5NzI0LDIwNy4zMTM4MDkgQzcwLjY1NjI1NTYsMjA2Ljg3NTA0MyA2OS43MDg3NzQ4LDIwNS43MDA3NjEgNzAuMDAxMjg1NywyMDQuNjg3NTcxIEM3MC4zMDIyNzUsMjAzLjY3ODYyMSA3MS43NDc4NzIxLDIwMy4yMDM4MiA3My4yMDgzMDY5LDIwMy42NTk1NDMgQzc0LjY1MzkwNDEsMjA0LjA5NjE5IDc1LjYwMzUwNDgsMjA1LjI2MTk5NCA3NS4zMDI1MTUxLDIwNi4yODE1NDIgWiBNODYuMDQ2OTQ3LDIwNy40NzM2MjcgQzg2LjA4Mjk4MDYsMjA4LjUyOTIwOSA4NC44NTM1ODcxLDIwOS40MDQ2MjIgODMuMzMxNjgyOSwyMDkuNDIzNyBDODEuODAxMywyMDkuNDU3NjE0IDgwLjU2MzQyOCwyMDguNjAzMzk4IDgwLjU0NjQ3MDgsMjA3LjU2NDc3MiBDODAuNTQ2NDcwOCwyMDYuNDk4NTkxIDgxLjc0ODMwODgsMjA1LjYzMTY1NyA4My4yNzg2OTE3LDIwNS42MDYyMjEgQzg0LjgwMDU5NjIsMjA1LjU3NjU0NiA4Ni4wNDY5NDcsMjA2LjQyNDQwMyA4Ni4wNDY5NDcsMjA3LjQ3MzYyNyBaIE05Ni42MDIxNDcxLDIwNy4wNjkwMjMgQzk2Ljc4NDQzNjYsMjA4LjA5OTE3MSA5NS43MjY3MzQxLDIwOS4xNTY4NzIgOTQuMjE1NDI4LDIwOS40Mzg3ODUgQzkyLjcyOTU1NzcsMjA5LjcxMDA5OSA5MS4zNTM5MDg2LDIwOS4wNzQyMDYgOTEuMTY1MjYwMywyMDguMDUyNTM4IEM5MC45ODA4NTE1LDIwNi45OTY5NTUgOTIuMDU3NjMwNiwyMDUuOTM5MjUzIDkzLjU0MTM4MTMsMjA1LjY2NTgyIEM5NS4wNTQ4MDcsMjA1LjQwMjk4NCA5Ni40MDkyNTk2LDIwNi4wMjE5MTkgOTYuNjAyMTQ3MSwyMDcuMDY5MDIzIFpcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3NhbWJsZWtobWFuL1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1ncmF5LTQwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5MaW5rZWRpbjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNiB3LTZcIlxuICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNTYgMjUwXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGc+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBkPVwiTTIxOC4xMjMxMjIsMjE4LjEyNzM5MiBMMTgwLjE5MTkyOCwyMTguMTI3MzkyIEwxODAuMTkxOTI4LDE1OC43MjQyNjMgQzE4MC4xOTE5MjgsMTQ0LjU1OTAyMyAxNzkuOTM5MDUzLDEyNi4zMjM5OTMgMTYwLjQ2Mzc1NiwxMjYuMzIzOTkzIEMxNDAuNzA3OTI2LDEyNi4zMjM5OTMgMTM3LjY4NTI4NCwxNDEuNzU3NTg1IDEzNy42ODUyODQsMTU3LjY5Mjk4NiBMMTM3LjY4NTI4NCwyMTguMTIzNDQxIEw5OS43NTQwODk0LDIxOC4xMjM0NDEgTDk5Ljc1NDA4OTQsOTUuOTY2NTIwNyBMMTM2LjE2ODAzNiw5NS45NjY1MjA3IEwxMzYuMTY4MDM2LDExMi42NjA1NjIgTDEzNi42Nzc3MzYsMTEyLjY2MDU2MiBDMTQ0LjEwMjc0Niw5OS45NjUwMDI3IDE1Ny45MDg2MzcsOTIuMzgyNDUyOCAxNzIuNjA1Njg5LDkyLjkyODAwNzYgQzIxMS4wNTA1MzUsOTIuOTI4MDA3NiAyMTguMTM4OTI3LDExOC4yMTYwMjMgMjE4LjEzODkyNywxNTEuMTE0MTUxIEwyMTguMTIzMTIyLDIxOC4xMjczOTIgWiBNNTYuOTU1MDU4Nyw3OS4yNjg1MjgyIEM0NC43OTgxOTY5LDc5LjI3MDcwOTkgMzQuOTQxMzQ0Myw2OS40MTcxNzk3IDM0LjkzOTE2MTgsNTcuMjYwMDUyIEMzNC45MzY5OCw0NS4xMDI5MjQ0IDQ0Ljc5MDI5NDgsMzUuMjQ1ODU2MiA1Ni45NDcxNTY2LDM1LjI0MzY3MzYgQzY5LjEwNDAxODUsMzUuMjQxNDkxNiA3OC45NjA4NzEzLDQ1LjA5NTAyMTcgNzguOTYzMDU0LDU3LjI1MjE0OTMgQzc4Ljk2NDEwMTcsNjMuMDkwMjA4IDc2LjY0NTk5NzYsNjguNjg5NTcxNCA3Mi41MTg2OTc5LDcyLjgxODQ0MzMgQzY4LjM5MTM5ODIsNzYuOTQ3MzE1MyA2Mi43OTI5ODk4LDc5LjI2NzQ4IDU2Ljk1NTA1ODcsNzkuMjY4NTI4MiBNNzUuOTIwNjU1OCwyMTguMTI3MzkyIEwzNy45NDk5NSwyMTguMTI3MzkyIEwzNy45NDk5NSw5NS45NjY1MjA3IEw3NS45MjA2NTU4LDk1Ljk2NjUyMDcgTDc1LjkyMDY1NTgsMjE4LjEyNzM5MiBaIE0yMzcuMDMzNDAzLDAuMDE4MjU3NzA5MSBMMTguODg5NTI0OSwwLjAxODI1NzcwOTEgQzguNTc5NTk0NjksLTAuMDk4MDkyMzk3MSAwLjEyNDgyNzAzOCw4LjE2MDU2MjMxIC0wLjAwMSwxOC40NzA2MDY2IEwtMC4wMDEsMjM3LjUyNDA5MSBDMC4xMjA1MTkwNTIsMjQ3LjgzOTEwMyA4LjU3NDYwNjMxLDI1Ni4xMDU5MzQgMTguODg5NTI0OSwyNTUuOTk3NyBMMjM3LjAzMzQwMywyNTUuOTk3NyBDMjQ3LjM2ODcyOCwyNTYuMTI1ODE4IDI1NS44NTU5MjIsMjQ3Ljg1OTQ2NCAyNTUuOTk5LDIzNy41MjQwOTEgTDI1NS45OTksMTguNDU0ODAxNiBDMjU1Ljg1MTYyNCw4LjEyNDM4OTc5IDI0Ny4zNjM3NDIsLTAuMTMzNzkyODY4IDIzNy4wMzM0MDMsMC4wMDA3OTA4MDcwNTVcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICBocmVmPVwibWFpbHRvOnNhbUBibGVrcy5kZXZcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtZ3JheS00MDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+RW1haWw8L3NwYW4+XG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNiB3LTZcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgICBkPVwiTTMgOGw3Ljg5IDUuMjZhMiAyIDAgMDAyLjIyIDBMMjEgOE01IDE5aDE0YTIgMiAwIDAwMi0yVjdhMiAyIDAgMDAtMi0ySDVhMiAyIDAgMDAtMiAydjEwYTIgMiAwIDAwMiAyelwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IG1kOm9yZGVyLTEgbWQ6bXQtMFwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICBcdTAwQTkgMjAyMiBzYW1ibGVraG1hbi5jb20uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb290ZXI+XG4gICAgPC8+XG4gIClcbn1cblxuZnVuY3Rpb24gRHJhd2VyRXhhbXBsZSgpIHtcbiAgY29uc3QgeyBpc09wZW4sIG9uT3Blbiwgb25DbG9zZSB9ID0gdXNlRGlzY2xvc3VyZSgpXG4gIGNvbnN0IGJ0blJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MQnV0dG9uRWxlbWVudD4obnVsbClcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIHJlZj17YnRuUmVmfVxuICAgICAgICBiZ0NvbG9yPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICBjb2xvclNjaGVtZT1cIndoaXRlQWxwaGFcIlxuICAgICAgICBvbkNsaWNrPXtvbk9wZW59XG4gICAgICA+XG4gICAgICAgIDxNRU5VIC8+XG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxEcmF3ZXJcbiAgICAgICAgaXNPcGVuPXtpc09wZW59XG4gICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcbiAgICAgICAgb25DbG9zZT17b25DbG9zZX1cbiAgICAgICAgZmluYWxGb2N1c1JlZj17YnRuUmVmfVxuICAgICAgICBzaXplPVwiZnVsbFwiXG4gICAgICA+XG4gICAgICAgIDxEcmF3ZXJPdmVybGF5IC8+XG4gICAgICAgIDxEcmF3ZXJDb250ZW50IGJnQ29sb3I9XCJncmF5LjgwMFwiPlxuICAgICAgICAgIDxEcmF3ZXJDbG9zZUJ1dHRvbiBjb2xvcj1cIndoaXRlXCIgLz5cbiAgICAgICAgICA8RHJhd2VySGVhZGVyIGNvbG9yPVwid2hpdGVcIj5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTJcIj5cbiAgICAgICAgICAgICAgICA8U2FtQmxla2htYW5Mb2dvIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvRHJhd2VySGVhZGVyPlxuICAgICAgICAgIDxEaXZpZGVyPjwvRGl2aWRlcj5cbiAgICAgICAgICA8RHJhd2VyQm9keT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTQgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICA8TGluayByZWxvYWREb2N1bWVudCB0bz1cIi9cIj5cbiAgICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPExpbmsgcmVsb2FkRG9jdW1lbnQgdG89XCIvcmVzdW1lXCI+XG4gICAgICAgICAgICAgICAgUmVzdW1lXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPExpbmsgcmVsb2FkRG9jdW1lbnQgdG89XCIvcG9ydGZvbGlvXCI+XG4gICAgICAgICAgICAgICAgUG9ydGZvbGlvXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRHJhd2VyQm9keT5cbiAgICAgICAgPC9EcmF3ZXJDb250ZW50PlxuICAgICAgPC9EcmF3ZXI+XG4gICAgPC8+XG4gIClcbn1cbiIsICJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IGZzIGZyb20gJ2ZzL3Byb21pc2VzJ1xuXG5pbXBvcnQgZXhwcmVzc0ljb24gZnJvbSAnfi9hc3NldHMvc3Zncy9leHByZXNzLnN2ZydcbmltcG9ydCBnaXRJY29uIGZyb20gJ34vYXNzZXRzL3N2Z3MvZ2l0LWljb24uc3ZnJ1xuaW1wb3J0IHR5cGVzY3JpcHRJY29uIGZyb20gJ34vYXNzZXRzL3N2Z3MvdHlwZXNjcmlwdC5zdmcnXG5pbXBvcnQgbW9uZ29kYkljb24gZnJvbSAnfi9hc3NldHMvc3Zncy9tb25nb2RiLnN2ZydcbmltcG9ydCBteXNxbEljb24gZnJvbSAnfi9hc3NldHMvc3Zncy9teXNxbC1pY29uLnN2ZydcbmltcG9ydCBub2RlanNJY29uIGZyb20gJ34vYXNzZXRzL3N2Z3Mvbm9kZWpzLWljb24uc3ZnJ1xuaW1wb3J0IHBocEljb24gZnJvbSAnfi9hc3NldHMvc3Zncy9waHAtYWx0LnN2ZydcbmltcG9ydCBwb3N0Z3Jlc3FsSWNvbiBmcm9tICd+L2Fzc2V0cy9zdmdzL3Bvc3RncmVzcWwuc3ZnJ1xuaW1wb3J0IHByaXNtYUljb24gZnJvbSAnfi9hc3NldHMvc3Zncy9wcmlzbWEuc3ZnJ1xuaW1wb3J0IHNxbGl0ZUljb24gZnJvbSAnfi9hc3NldHMvc3Zncy9zcWxpdGUuc3ZnJ1xuaW1wb3J0IHRhaWx3aW5kSWNvbiBmcm9tICd+L2Fzc2V0cy9zdmdzL3RhaWx3aW5kY3NzLWljb24uc3ZnJ1xuaW1wb3J0IHdvcmRwcmVzc0ljb24gZnJvbSAnfi9hc3NldHMvc3Zncy93b3JkcHJlc3MtaWNvbi5zdmcnXG5pbXBvcnQgamF2YXNjcmlwdEljb24gZnJvbSAnfi9hc3NldHMvc3Zncy9qYXZhc2NyaXB0LnN2ZydcbmltcG9ydCBuZXRsaWZ5SWNvbiBmcm9tICd+L2Fzc2V0cy9zdmdzL25ldGxpZnkuc3ZnJ1xuaW1wb3J0IGZseUljb24gZnJvbSAnfi9hc3NldHMvc3Zncy9mbHkuc3ZnJ1xuaW1wb3J0IHJlYWN0SWNvbiBmcm9tICd+L2Fzc2V0cy9zdmdzL3JlYWN0LnN2ZydcbmltcG9ydCByZW1peEljb24gZnJvbSAnfi9hc3NldHMvc3Zncy9yZW1peC1pY29uLnN2ZydcbmltcG9ydCBoZXJva3VJY29uIGZyb20gJ34vYXNzZXRzL3N2Z3MvaGVyb2t1LWljb24uc3ZnJ1xuaW1wb3J0IHJlYWN0cm91dGVySWNvbiBmcm9tICd+L2Fzc2V0cy9zdmdzL3JlYWN0LXJvdXRlci5zdmcnXG5cbmV4cG9ydCBjb25zdCBTYW1CbGVraG1hbkxvZ28gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyBjbGFzc05hbWU9XCJhc3BlY3Qtc3F1YXJlIGgtMTAgdGV4dC13aGl0ZVwiPlxuICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDExNy45ODY2NyAxODUuNDI2NjdcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+XG4gICAgICAgIDxnIGlkPVwiZzEwXCIgdHJhbnNmb3JtPVwibWF0cml4KDEuMzMzMzMzMywwLDAsLTEuMzMzMzMzMywwLDE4NS40MjY2NylcIj5cbiAgICAgICAgICA8ZyBpZD1cImcxMlwiIHRyYW5zZm9ybT1cInNjYWxlKDAuMSlcIj5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9XCJtIDQ0Mi40MywwLjI2MTcxOSB2IDAgQyA2NzguNTU5LC03LjgyMDMxIDg3Ni41MjMsMTc3LjA1MSA4ODQuNjAyLDQxMy4xODQgODkyLjY4LDY0OS4zMTMgNzA3LjgwNSw4NDcuMjc3IDQ3MS42NzYsODU1LjM1NSBjIC05Ljc0NiwwLjMzMyAtMTkuNSwwLjMzMyAtMjkuMjQ2LDAgdiAwIGMgLTU5LjA3MSwxLjgwNSAtMTA1LjQ4OSw1MS4xNTMgLTEwMy42ODQsMTEwLjIxOSAxLjczMSw1Ni41MzYgNDcuMTUyLDEwMS45NTYgMTAzLjY4NCwxMDMuNjc2IGggMTMzLjY5OSBjIDE0Ljc3MywwLjkxIDI2LjAxNiwxMy42MiAyNS4xMTMsMjguMzkgLTAuODI4LDEzLjUxIC0xMS42MDEsMjQuMjkgLTI1LjExMywyNS4xMSBIIDQ0Mi40MyBjIC04OC42MTcsMCAtMTYwLjQ1MywtNzEuODMgLTE2MC40NTMsLTE2MC40NDUgMCwtODguNjE0IDcxLjgzNiwtMTYwLjQ1IDE2MC40NTMsLTE2MC40NSB2IDAgQyA2NDkuMTIxLDc5OC40NzcgODEzLjk0MSw2MjguMTg0IDgxMC41NjMsNDIxLjQ4OCA4MDcuMjYyLDIxOS41NTkgNjQ0LjM1OSw1Ni42NDg0IDQ0Mi40Myw1My4zNTk0IEggNjguMTI4OSBWIDI5NC4zNTkgYyAtMC45MDYyLDE0Ljc3IC0xMy42MTMzLDI2LjAxMiAtMjguMzg2NywyNS4xMSAtMTMuNTE1NiwtMC44MjggLTI0LjI4OTEsLTExLjU5OCAtMjUuMTEzMywtMjUuMTEgViAyNi45NjA5IEMgMTQuNjgzNiwxMi4xOTE0IDI2LjY2NDEsMC4yNjE3MTkgNDEuNDI1OCwwLjI2MTcxOSBaIG0gMCwyNjcuMjk3MjgxIGMgODguNjEzLDAgMTYwLjQ0OSw3MS44MzIgMTYwLjQ0OSwxNjAuNDQ1IDAsODguNjEzIC03MS44MzYsMTYwLjQ0OSAtMTYwLjQ0OSwxNjAuNDQ5IHYgMCBDIDIzNS43MzQsNTkxLjgzMiA3MC45MTgsNzYyLjEzMyA3NC4yOTY5LDk2OC44MjQgNzcuNTk3NywxMTcwLjc1IDI0MC40OTYsMTMzMy42NSA0NDIuNDMsMTMzNi45NiBoIDM3NC4yOTcgdiAtMjQwLjYgYyAwLjkwNiwtMTQuNzggMTMuNjEzLC0yNi4wMiAyOC4zODYsLTI1LjEyIDEzLjUxNiwwLjgzIDI0LjI4OSwxMS42IDI1LjExNCwyNS4xMiB2IDI2Ny4zOSBjIC0wLjA1NSwxNC43NyAtMTIuMDM2LDI2LjcxIC0yNi43OTcsMjYuNzEgaCAtNDAxIEMgMjA2LjI5NywxMzk4LjUzIDguMzMyMDMsMTIxMy42NiAwLjI1MzkwNiw5NzcuNTI3IC03LjgyMDMxLDc0MS4zOTggMTc3LjA1NSw1NDMuNDMgNDEzLjE4NCw1MzUuMzU1IGMgOS43NDYsLTAuMzMyIDE5LjUsLTAuMzMyIDI5LjI0NiwwIHYgMCBDIDUwMS40OTIsNTMzLjU1MSA1NDcuOTE0LDQ4NC4xOTkgNTQ2LjEwNSw0MjUuMTMzIDU0NC4zNzksMzY4LjYwOSA0OTguOTU3LDMyMy4xOCA0NDIuNDMsMzIxLjQ2MSBIIDMwOC43MjcgYyAtMTQuNzc0LC0wLjkxIC0yNi4wMTYsLTEzLjYyMSAtMjUuMTE0LC0yOC4zOTEgMC44MjgsLTEzLjUxMSAxMS42MDIsLTI0LjI4OSAyNS4xMTQsLTI1LjEwOSBIIDQ0Mi40MyBaIG0gMjk0LjA5Nyw4MjguODAxIGMgLTAuOTAyLC0xNC43OCAtMTMuNjEzLC0yNi4wMiAtMjguMzg2LC0yNS4xMiAtMTMuNTEyLDAuODMgLTI0LjI4NiwxMS42IC0yNS4xMTQsMjUuMTIgdiAxMDcgSCA0NDIuNDMgQyAzMDkuNTIsMTIwMC42NCAyMDMuOTczLDEwOTAuNzEgMjA2LjY4NCw5NTcuODAxIDIwOS4zMTMsODI4LjcwNyAzMTMuMzM2LDcyNC42ODggNDQyLjQzLDcyMi4wNTUgdiAwIEMgNjA0LjgyOCw3MjUuMDUxIDczOC45MDYsNTk1LjgyOCA3NDEuOTAyLDQzMy40MyA3NDQuODk4LDI3MS4wMzEgNjE1LjY3NiwxMzYuOTQ5IDQ1My4yNzMsMTMzLjk2MSBjIC0zLjYxMywtMC4wNyAtNy4yMywtMC4wNyAtMTAuODQzLDAgSCAxNzUuMTI5IGMgLTE0Ljc0NiwtMC4wNjMgLTI2Ljc0NiwxMS44NDggLTI2LjgwMSwyNi41OTggMCwwLjAzMSAwLDAuMDYyIDAsMC4xMDEgdiAxMzMuNjk5IGMgMC45MDIsMTQuNzcgMTMuNjEzLDI2LjAxMiAyOC4zODcsMjUuMTEgMTMuNTEyLC0wLjgyOCAyNC4yODUsLTExLjU5OCAyNS4xMTMsLTI1LjExIHYgLTEwNyBIIDQ0Mi40MyBDIDU3NS4zMzYsMTkwLjA1OSA2ODAuODgzLDMwMCA2NzguMTcyLDQzMi45MSA2NzUuNTM5LDU2Mi4wMDQgNTcxLjUyLDY2Ni4wMjMgNDQyLjQzLDY2OC42NTYgdiAwIEMgMjgwLjAyNyw2NjUuNjYgMTQ1Ljk0OSw3OTQuODgzIDE0Mi45NTMsOTU3LjI4MSBjIC0yLjk5MiwxNjIuMzk5IDEyNi4yMzEsMjk2LjQ3OSAyODguNjI5LDI5OS40NjkgMy42MTMsMC4wNyA3LjIzMSwwLjA3IDEwLjg0OCwwIGggMjY3LjM5OCBjIDE0Ljc0NiwwIDI2LjY5OSwtMTEuOTUgMjYuNjk5LC0yNi43IHYgLTEzMy42OVwiXG4gICAgICAgICAgICAgIGlkPVwicGF0aDE0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L2c+XG4gICAgICA8L3N2Zz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgTUVOVSA9ICgpID0+IChcbiAgPHN2Z1xuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgIGNsYXNzTmFtZT1cImgtNiB3LTZcIlxuICAgIGZpbGw9XCJub25lXCJcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICA+XG4gICAgPHBhdGhcbiAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgZD1cIk00IDZoMTZNNCAxMmgxNk00IDE4aDE2XCJcbiAgICAvPlxuICA8L3N2Zz5cbilcblxuZXhwb3J0IGNvbnN0IHJpZ2h0QXJyb3dJY29uID0gKCkgPT4gKFxuICA8c3ZnXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgY2xhc3NOYW1lPVwiaW5saW5lIGgtNiB3LTZcIlxuICAgIGZpbGw9XCJub25lXCJcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICA+XG4gICAgPHBhdGhcbiAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgZD1cIk0xMyA3bDUgNW0wIDBsLTUgNW01LTVINlwiXG4gICAgLz5cbiAgPC9zdmc+XG4pXG5cbmV4cG9ydCBjb25zdCBzdmdMb29rdXAgPSB7XG4gIEV4cHJlc3M6IGV4cHJlc3NJY29uLFxuICBHaXQ6IGdpdEljb24sXG4gIFR5cGVzY3JpcHQ6IHR5cGVzY3JpcHRJY29uLFxuICBNb25nb0RCOiBtb25nb2RiSWNvbixcbiAgTXlTUUw6IG15c3FsSWNvbixcbiAgTm9kZUpTOiBub2RlanNJY29uLFxuICBwaHA6IHBocEljb24sXG4gIFBvc3RncmVzOiBwb3N0Z3Jlc3FsSWNvbixcbiAgUHJpc21hOiBwcmlzbWFJY29uLFxuICBTUUxpdGU6IHNxbGl0ZUljb24sXG4gICdUYWlsd2luZCBDU1MnOiB0YWlsd2luZEljb24sXG4gIFdvcmRQcmVzczogd29yZHByZXNzSWNvbixcbiAgSmF2YXNjcmlwdDogamF2YXNjcmlwdEljb24sXG4gIE5ldGxpZnk6IG5ldGxpZnlJY29uLFxuICBGbHk6IGZseUljb24sXG4gIFJlYWN0OiByZWFjdEljb24sXG4gIFJlbWl4OiByZW1peEljb24sXG4gICdSZWFjdCBSb3V0ZXInOiByZWFjdHJvdXRlckljb24sXG4gIEhlcm9rdTogaGVyb2t1SWNvbixcbn1cblxuZXhwb3J0IHR5cGUgc3ZnTG9va3VwT2JqZWN0ID0ge1xuICBFeHByZXNzOiBzdHJpbmdcbiAgR2l0OiBzdHJpbmdcbiAgVHlwZXNjcmlwdDogc3RyaW5nXG4gIE1vbmdvREI6IHN0cmluZ1xuICBNeVNRTDogc3RyaW5nXG4gIE5vZGVKUzogc3RyaW5nXG4gIHBocDogc3RyaW5nXG4gIFBvc3RncmVzOiBzdHJpbmdcbiAgUHJpc21hOiBzdHJpbmdcbiAgU1FMaXRlOiBzdHJpbmdcbiAgJ1RhaWx3aW5kIENTUyc6IHN0cmluZ1xuICBXb3JkUHJlc3M6IHN0cmluZ1xuICBKYXZhc2NyaXB0OiBzdHJpbmdcbiAgTmV0bGlmeTogc3RyaW5nXG4gIEZseTogc3RyaW5nXG4gIFJlYWN0OiBzdHJpbmdcbiAgUmVtaXg6IHN0cmluZ1xuICAnUmVhY3QgUm91dGVyJzogc3RyaW5nXG4gIEhlcm9rdTogc3RyaW5nXG59XG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IEZvcm0sIGpzb24sIHVzZUFjdGlvbkRhdGEsIHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhKCkge1xuICByZXR1cm4geyB0aXRsZTogXCJBY3Rpb25zIERlbW9cIiB9O1xufVxuXG4vLyBXaGVuIHlvdXIgZm9ybSBzZW5kcyBhIFBPU1QsIHRoZSBhY3Rpb24gaXMgY2FsbGVkIG9uIHRoZSBzZXJ2ZXIuXG4vLyAtIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9jb252ZW50aW9ucyNhY3Rpb25cbi8vIC0gaHR0cHM6Ly9yZW1peC5ydW4vZ3VpZGVzL2RhdGEtdXBkYXRlc1xuZXhwb3J0IGxldCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGxldCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgbGV0IGFuc3dlciA9IGZvcm1EYXRhLmdldChcImFuc3dlclwiKTtcblxuICAvLyBUeXBpY2FsIGFjdGlvbiB3b3JrZmxvd3Mgc3RhcnQgd2l0aCB2YWxpZGF0aW5nIHRoZSBmb3JtIGRhdGEgdGhhdCBqdXN0IGNhbWVcbiAgLy8gb3ZlciB0aGUgbmV0d29yay4gQ2xpZW50c2lkZSB2YWxpZGF0aW9uIGlzIGZpbmUsIGJ1dCB5b3UgZGVmaW5pdGVseSBuZWVkIGl0XG4gIC8vIHNlcnZlciBzaWRlLiAgSWYgdGhlcmUncyBhIHByb2JsZW0sIHJldHVybiB0aGUgdGhlIGRhdGEgYW5kIHRoZSBjb21wb25lbnRcbiAgLy8gY2FuIHJlbmRlciBpdC5cbiAgaWYgKHR5cGVvZiBhbnN3ZXIgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4ganNvbihcIkNvbWUgb24sIGF0IGxlYXN0IHRyeSFcIiwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgfVxuXG4gIGlmIChhbnN3ZXIgIT09IFwiZWdnXCIpIHtcbiAgICByZXR1cm4ganNvbihgU29ycnksICR7YW5zd2VyfSBpcyBub3QgcmlnaHQuYCwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgfVxuXG4gIC8vIEZpbmFsbHksIGlmIHRoZSBkYXRhIGlzIHZhbGlkLCB5b3UnbGwgdHlwaWNhbGx5IHdyaXRlIHRvIGEgZGF0YWJhc2Ugb3Igc2VuZCBvclxuICAvLyBlbWFpbCBvciBsb2cgdGhlIHVzZXIgaW4sIGV0Yy4gSXQncyByZWNvbW1lbmRlZCB0byByZWRpcmVjdCBhZnRlciBhXG4gIC8vIHN1Y2Nlc3NmdWwgYWN0aW9uLCBldmVuIGlmIGl0J3MgdG8gdGhlIHNhbWUgcGxhY2Ugc28gdGhhdCBub24tSmF2YVNjcmlwdCB3b3JrZmxvd3NcbiAgLy8gZnJvbSB0aGUgYnJvd3NlciBkb2Vzbid0IHJlcG9zdCB0aGUgZGF0YSBpZiB0aGUgdXNlciBjbGlja3MgYmFjay5cbiAgcmV0dXJuIHJlZGlyZWN0KFwiL2RlbW9zL2NvcnJlY3RcIik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBY3Rpb25zRGVtbygpIHtcbiAgLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL3JlbWl4I3VzZWFjdGlvbmRhdGFcbiAgbGV0IGFjdGlvbk1lc3NhZ2UgPSB1c2VBY3Rpb25EYXRhPHN0cmluZz4oKTtcbiAgbGV0IGFuc3dlclJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcblxuICAvLyBUaGlzIGZvcm0gd29ya3Mgd2l0aG91dCBKYXZhU2NyaXB0LCBidXQgd2hlbiB3ZSBoYXZlIEphdmFTY3JpcHQgd2UgY2FuIG1ha2VcbiAgLy8gdGhlIGV4cGVyaWVuY2UgYmV0dGVyIGJ5IHNlbGVjdGluZyB0aGUgaW5wdXQgb24gd3JvbmcgYW5zd2VycyEgR28gYWhlYWQsIGRpc2FibGVcbiAgLy8gSmF2YVNjcmlwdCBpbiB5b3VyIGJyb3dzZXIgYW5kIHNlZSB3aGF0IGhhcHBlbnMuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGFjdGlvbk1lc3NhZ2UgJiYgYW5zd2VyUmVmLmN1cnJlbnQpIHtcbiAgICAgIGFuc3dlclJlZi5jdXJyZW50LnNlbGVjdCgpO1xuICAgIH1cbiAgfSwgW2FjdGlvbk1lc3NhZ2VdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVtaXhfX3BhZ2VcIj5cbiAgICAgIDxtYWluPlxuICAgICAgICA8aDI+QWN0aW9ucyE8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBUaGlzIGZvcm0gc3VibWlzc2lvbiB3aWxsIHNlbmQgYSBwb3N0IHJlcXVlc3QgdGhhdCB3ZSBoYW5kbGUgaW4gb3VyXG4gICAgICAgICAgYGFjdGlvbmAgZXhwb3J0LiBBbnkgcm91dGUgY2FuIGV4cG9ydCBhbiBhY3Rpb24gdG8gaGFuZGxlIGRhdGFcbiAgICAgICAgICBtdXRhdGlvbnMuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiIGNsYXNzTmFtZT1cInJlbWl4X19mb3JtXCI+XG4gICAgICAgICAgPGgzPlBvc3QgYW4gQWN0aW9uPC9oMz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxpPldoYXQgaXMgbW9yZSB1c2VmdWwgd2hlbiBpdCBpcyBicm9rZW4/PC9pPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICA8ZGl2PkFuc3dlcjo8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dCByZWY9e2Fuc3dlclJlZn0gbmFtZT1cImFuc3dlclwiIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uPkFuc3dlciE8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7YWN0aW9uTWVzc2FnZSA/IChcbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8Yj57YWN0aW9uTWVzc2FnZX08L2I+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGFzaWRlPlxuICAgICAgICA8aDM+QWRkaXRpb25hbCBSZXNvdXJjZXM8L2gzPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgR3VpZGU6e1wiIFwifVxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcmVtaXgucnVuL2d1aWRlcy9kYXRhLXdyaXRlc1wiPkRhdGEgV3JpdGVzPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgQVBJOntcIiBcIn1cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3JlbWl4LnJ1bi9hcGkvY29udmVudGlvbnMjYWN0aW9uXCI+XG4gICAgICAgICAgICAgIFJvdXRlIEFjdGlvbiBFeHBvcnRcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIEFQSTp7XCIgXCJ9XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9yZW1peC5ydW4vYXBpL3JlbWl4I3VzZWFjdGlvbmRhdGFcIj5cbiAgICAgICAgICAgICAgPGNvZGU+dXNlQWN0aW9uRGF0YTwvY29kZT5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9hc2lkZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOaWNlV29yaygpIHtcbiAgcmV0dXJuIDxoMT5Zb3UgZ290IGl0IHJpZ2h0ITwvaDE+O1xufVxuIiwgImltcG9ydCB7IHVzZUNhdGNoLCBMaW5rLCBqc29uLCB1c2VMb2FkZXJEYXRhLCBPdXRsZXQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGEoKSB7XG4gIHJldHVybiB7IHRpdGxlOiBcIkJvdW5kYXJpZXMgRGVtb1wiIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvdW5kYXJpZXMoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZW1peF9fcGFnZVwiPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGFzaWRlPlxuICAgICAgICA8aDI+Q2xpY2sgdGhlc2UgTGlua3M8L2gyPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89XCIuXCI+U3RhcnQgb3ZlcjwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwib25lXCI+XG4gICAgICAgICAgICAgIFBhcmFtOiA8aT5vbmU8L2k+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayB0bz1cInR3b1wiPlxuICAgICAgICAgICAgICBQYXJhbTogPGk+dHdvPC9pPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89XCJ0aGlzLXJlY29yZC1kb2VzLW5vdC1leGlzdFwiPlRoaXMgd2lsbCBiZSBhIDQwNDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwic2hoLWl0cy1hLXNlY3JldFwiPkFuZCB0aGlzIHdpbGwgYmUgNDAxIFVuYXV0aG9yaXplZDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwia2Fib29tXCI+VGhpcyBvbmUgd2lsbCB0aHJvdyBhbiBlcnJvcjwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9hc2lkZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyB1c2VDYXRjaCwgTGluaywganNvbiwgdXNlTG9hZGVyRGF0YSwgT3V0bGV0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvdW5kYXJpZXMoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMj5QYXJhbXM8L2gyPlxuICAgICAgPHA+XG4gICAgICAgIFdoZW4geW91IG5hbWUgYSByb3V0ZSBzZWdtZW50IHdpdGggJCBsaWtle1wiIFwifVxuICAgICAgICA8Y29kZT5yb3V0ZXMvdXNlcnMvJHVzZXJJZC5qczwvY29kZT4sIHRoZSAkIHNlZ21lbnQgd2lsbCBiZSBwYXJzZWQgZnJvbVxuICAgICAgICB0aGUgVVJMIGFuZCBzZW50IHRvIHlvdXIgbG9hZGVycyBhbmQgYWN0aW9ucyBieSB0aGUgc2FtZSBuYW1lLlxuICAgICAgPC9wPlxuICAgICAgPGgyPkVycm9yczwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgV2hlbiBhIHJvdXRlIHRocm93cyBhbmQgZXJyb3IgaW4gaXQncyBhY3Rpb24sIGxvYWRlciwgb3IgY29tcG9uZW50LFxuICAgICAgICBSZW1peCBhdXRvbWF0aWNhbGx5IGNhdGNoZXMgaXQsIHdvbid0IGV2ZW4gdHJ5IHRvIHJlbmRlciB0aGUgY29tcG9uZW50LFxuICAgICAgICBidXQgaXQgd2lsbCByZW5kZXIgdGhlIHJvdXRlJ3MgRXJyb3JCb3VuZGFyeSBpbnN0ZWFkLiBJZiB0aGUgcm91dGVcbiAgICAgICAgZG9lc24ndCBoYXZlIG9uZSwgaXQgd2lsbCBidWJibGUgdXAgdG8gdGhlIHJvdXRlcyBhYm92ZSBpdCB1bnRpbCBpdCBoaXRzXG4gICAgICAgIHRoZSByb290LlxuICAgICAgPC9wPlxuICAgICAgPHA+U28gYmUgYXMgZ3JhbnVsYXIgYXMgeW91IHdhbnQgd2l0aCB5b3VyIGVycm9yIGhhbmRsaW5nLjwvcD5cbiAgICAgIDxoMj5Ob3QgRm91bmQ8L2gyPlxuICAgICAgPHA+XG4gICAgICAgIChhbmQgb3RoZXJ7XCIgXCJ9XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL1N0YXR1cyNjbGllbnRfZXJyb3JfcmVzcG9uc2VzXCI+XG4gICAgICAgICAgY2xpZW50IGVycm9yc1xuICAgICAgICA8L2E+XG4gICAgICAgIClcbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBMb2FkZXJzIGFuZCBBY3Rpb25zIGNhbiB0aHJvdyBhIDxjb2RlPlJlc3BvbnNlPC9jb2RlPiBpbnN0ZWFkIG9mIGFuXG4gICAgICAgIGVycm9yIGFuZCBSZW1peCB3aWxsIHJlbmRlciB0aGUgQ2F0Y2hCb3VuZGFyeSBpbnN0ZWFkIG9mIHRoZSBjb21wb25lbnQuXG4gICAgICAgIFRoaXMgaXMgZ3JlYXQgd2hlbiBsb2FkaW5nIGRhdGEgZnJvbSBhIGRhdGFiYXNlIGlzbid0IGZvdW5kLiBBcyBzb29uIGFzXG4gICAgICAgIHlvdSBrbm93IHlvdSBjYW4ndCByZW5kZXIgdGhlIGNvbXBvbmVudCBub3JtYWxseSwgdGhyb3cgYSA0MDQgcmVzcG9uc2VcbiAgICAgICAgYW5kIHNlbmQgeW91ciBhcHAgaW50byB0aGUgY2F0Y2ggYm91bmRhcnkuIEp1c3QgbGlrZSBlcnJvciBib3VuZGFyaWVzLFxuICAgICAgICBjYXRjaCBib3VuZGFyaWVzIGJ1YmJsZSwgdG9vLlxuICAgICAgPC9wPlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCB7IHVzZUNhdGNoLCBMaW5rLCBqc29uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uLCBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcblxuLy8gVGhlIGAkYCBpbiByb3V0ZSBmaWxlbmFtZXMgYmVjb21lcyBhIHBhdHRlcm4gdGhhdCdzIHBhcnNlZCBmcm9tIHRoZSBVUkwgYW5kXG4vLyBwYXNzZWQgdG8geW91ciBsb2FkZXJzIHNvIHlvdSBjYW4gbG9vayB1cCBkYXRhLlxuLy8gLSBodHRwczovL3JlbWl4LnJ1bi9hcGkvY29udmVudGlvbnMjbG9hZGVyLXBhcmFtc1xuZXhwb3J0IGxldCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgLy8gcHJldGVuZCBsaWtlIHdlJ3JlIHVzaW5nIHBhcmFtcy5pZCB0byBsb29rIHNvbWV0aGluZyB1cCBpbiB0aGUgZGJcblxuICBpZiAocGFyYW1zLmlkID09PSBcInRoaXMtcmVjb3JkLWRvZXMtbm90LWV4aXN0XCIpIHtcbiAgICAvLyBJZiB0aGUgcmVjb3JkIGRvZXNuJ3QgZXhpc3Qgd2UgY2FuJ3QgcmVuZGVyIHRoZSByb3V0ZSBub3JtYWxseSwgc29cbiAgICAvLyBpbnN0ZWFkIHdlIHRocm93IGEgNDA0IHJlcG9uc2UgdG8gc3RvcCBydW5uaW5nIGNvZGUgaGVyZSBhbmQgc2hvdyB0aGVcbiAgICAvLyB1c2VyIHRoZSBjYXRjaCBib3VuZGFyeS5cbiAgICB0aHJvdyBuZXcgUmVzcG9uc2UoXCJOb3QgRm91bmRcIiwgeyBzdGF0dXM6IDQwNCB9KTtcbiAgfVxuXG4gIC8vIG5vdyBwcmV0ZW5kIGxpa2UgdGhlIHJlY29yZCBleGlzdHMgYnV0IHRoZSB1c2VyIGp1c3QgaXNuJ3QgYXV0aG9yaXplZCB0b1xuICAvLyBzZWUgaXQuXG4gIGlmIChwYXJhbXMuaWQgPT09IFwic2hoLWl0cy1hLXNlY3JldFwiKSB7XG4gICAgLy8gQWdhaW4sIHdlIGNhbid0IHJlbmRlciB0aGUgY29tcG9uZW50IGlmIHRoZSB1c2VyIGlzbid0IGF1dGhvcml6ZWQuIFlvdVxuICAgIC8vIGNhbiBldmVuIHB1dCBkYXRhIGluIHRoZSByZXNwb25zZSB0aGF0IG1pZ2h0IGhlbHAgdGhlIHVzZXIgcmVjdGlmeSB0aGVcbiAgICAvLyBpc3N1ZSEgTGlrZSBlbWFpbGluZyB0aGUgd2VibWFzdGVyIGZvciBhY2Nlc3MgdG8gdGhlIHBhZ2UuIChPaCwgcmlnaHQsXG4gICAgLy8gYGpzb25gIGlzIGp1c3QgYSBSZXNwb25zZSBoZWxwZXIgdGhhdCBtYWtlcyBpdCBlYXNpZXIgdG8gc2VuZCBKU09OXG4gICAgLy8gcmVzcG9uc2VzKS5cbiAgICB0aHJvdyBqc29uKHsgd2VibWFzdGVyRW1haWw6IFwiaGVsbG9AcmVtaXgucnVuXCIgfSwgeyBzdGF0dXM6IDQwMSB9KTtcbiAgfVxuXG4gIC8vIFNvbWV0aW1lcyB5b3VyIGNvZGUganVzdCBibG93cyB1cCBhbmQgeW91IG5ldmVyIGFudGljaXBhdGVkIGl0LiBSZW1peCB3aWxsXG4gIC8vIGF1dG9tYXRpY2FsbHkgY2F0Y2ggaXQgYW5kIHNlbmQgdGhlIFVJIHRvIHRoZSBlcnJvciBib3VuZGFyeS5cbiAgaWYgKHBhcmFtcy5pZCA9PT0gXCJrYWJvb21cIikge1xuICAgIGxvbCgpO1xuICB9XG5cbiAgLy8gYnV0IG90aGVyd2lzZSB0aGUgcmVjb3JkIHdhcyBmb3VuZCwgdXNlciBoYXMgYWNjZXNzLCBzbyB3ZSBjYW4gZG8gd2hhdGV2ZXJcbiAgLy8gZWxzZSB3ZSBuZWVkZWQgdG8gaW4gdGhlIGxvYWRlciBhbmQgcmV0dXJuIHRoZSBkYXRhLiAoVGhpcyBpcyBib3JpbmcsIHdlJ3JlXG4gIC8vIGp1c3QgZ29ubmEgcmV0dXJuIHRoZSBwYXJhbXMuaWQpLlxuICByZXR1cm4geyBwYXJhbTogcGFyYW1zLmlkIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXJhbURlbW8oKSB7XG4gIGxldCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xuICByZXR1cm4gKFxuICAgIDxoMT5cbiAgICAgIFRoZSBwYXJhbSBpcyA8aSBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT57ZGF0YS5wYXJhbX08L2k+XG4gICAgPC9oMT5cbiAgKTtcbn1cblxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL2NvbnZlbnRpb25zI2NhdGNoYm91bmRhcnlcbi8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9yZW1peCN1c2VjYXRjaFxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL2d1aWRlcy9ub3QtZm91bmRcbmV4cG9ydCBmdW5jdGlvbiBDYXRjaEJvdW5kYXJ5KCkge1xuICBsZXQgY2F1Z2h0ID0gdXNlQ2F0Y2goKTtcblxuICBsZXQgbWVzc2FnZTogUmVhY3QuUmVhY3ROb2RlO1xuICBzd2l0Y2ggKGNhdWdodC5zdGF0dXMpIHtcbiAgICBjYXNlIDQwMTpcbiAgICAgIG1lc3NhZ2UgPSAoXG4gICAgICAgIDxwPlxuICAgICAgICAgIExvb2tzIGxpa2UgeW91IHRyaWVkIHRvIHZpc2l0IGEgcGFnZSB0aGF0IHlvdSBkbyBub3QgaGF2ZSBhY2Nlc3MgdG8uXG4gICAgICAgICAgTWF5YmUgYXNrIHRoZSB3ZWJtYXN0ZXIgKHtjYXVnaHQuZGF0YS53ZWJtYXN0ZXJFbWFpbH0pIGZvciBhY2Nlc3MuXG4gICAgICAgIDwvcD5cbiAgICAgICk7XG4gICAgY2FzZSA0MDQ6XG4gICAgICBtZXNzYWdlID0gKFxuICAgICAgICA8cD5Mb29rcyBsaWtlIHlvdSB0cmllZCB0byB2aXNpdCBhIHBhZ2UgdGhhdCBkb2VzIG5vdCBleGlzdC48L3A+XG4gICAgICApO1xuICAgIGRlZmF1bHQ6XG4gICAgICBtZXNzYWdlID0gKFxuICAgICAgICA8cD5cbiAgICAgICAgICBUaGVyZSB3YXMgYSBwcm9ibGVtIHdpdGggeW91ciByZXF1ZXN0IVxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIHtjYXVnaHQuc3RhdHVzfSB7Y2F1Z2h0LnN0YXR1c1RleHR9XG4gICAgICAgIDwvcD5cbiAgICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDI+T29wcyE8L2gyPlxuICAgICAgPHA+e21lc3NhZ2V9PC9wPlxuICAgICAgPHA+XG4gICAgICAgIChJc24ndCBpdCBjb29sIHRoYXQgdGhlIHVzZXIgZ2V0cyB0byBzdGF5IGluIGNvbnRleHQgYW5kIHRyeSBhIGRpZmZlcmVudFxuICAgICAgICBsaW5rIGluIHRoZSBwYXJ0cyBvZiB0aGUgVUkgdGhhdCBkaWRuJ3QgYmxvdyB1cD8pXG4gICAgICA8L3A+XG4gICAgPC8+XG4gICk7XG59XG5cbi8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9jb252ZW50aW9ucyNlcnJvcmJvdW5kYXJ5XG4vLyBodHRwczovL3JlbWl4LnJ1bi9hcGkvZ3VpZGVzL25vdC1mb3VuZFxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoeyBlcnJvciB9OiB7IGVycm9yOiBFcnJvciB9KSB7XG4gIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDI+RXJyb3IhPC9oMj5cbiAgICAgIDxwPntlcnJvci5tZXNzYWdlfTwvcD5cbiAgICAgIDxwPlxuICAgICAgICAoSXNuJ3QgaXQgY29vbCB0aGF0IHRoZSB1c2VyIGdldHMgdG8gc3RheSBpbiBjb250ZXh0IGFuZCB0cnkgYSBkaWZmZXJlbnRcbiAgICAgICAgbGluayBpbiB0aGUgcGFydHMgb2YgdGhlIFVJIHRoYXQgZGlkbid0IGJsb3cgdXA/KVxuICAgICAgPC9wPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgbGV0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICh7IGRhdGEgfSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBkYXRhID8gYFBhcmFtOiAke2RhdGEucGFyYW19YCA6IFwiT29wcy4uLlwiLFxuICB9O1xufTtcbiIsICJpbXBvcnQgeyBPdXRsZXQgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uLCBMaW5rc0Z1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCBzdHlsZXNVcmwgZnJvbSBcIn4vc3R5bGVzL2RlbW9zL2Fib3V0LmNzc1wiO1xuXG5leHBvcnQgbGV0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogXCJBYm91dCBSZW1peFwiXG4gIH07XG59O1xuXG5leHBvcnQgbGV0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW3sgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzVXJsIH1dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dF9faW50cm9cIj5cbiAgICAgICAgPGgyPkFib3V0IFVzPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgT2ssIHNvIHRoaXMgcGFnZSBpc24ndCByZWFsbHkgPGVtPmFib3V0IHVzPC9lbT4sIGJ1dCB3ZSBkaWQgd2FudCB0b1xuICAgICAgICAgIHNob3cgeW91IGEgZmV3IG1vcmUgdGhpbmdzIFJlbWl4IGNhbiBkby5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBEaWQgeW91IG5vdGljZSB0aGF0IHRoaW5ncyBsb29rIGEgbGl0dGxlIGRpZmZlcmVudCBvbiB0aGlzIHBhZ2U/IFRoZVxuICAgICAgICAgIENTUyB0aGF0IHdlIGltcG9ydCBpbiB0aGUgcm91dGUgZmlsZSBhbmQgaW5jbHVkZSBpbiBpdHN7XCIgXCJ9XG4gICAgICAgICAgPGNvZGU+bGlua3M8L2NvZGU+IGV4cG9ydCBpcyBvbmx5IGluY2x1ZGVkIG9uIHRoaXMgcm91dGUgYW5kIGl0c1xuICAgICAgICAgIGNoaWxkcmVuLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFdhaXQgYSBzZWMuLi48ZW0+aXRzIGNoaWxkcmVuPC9lbT4/IFRvIHVuZGVyc3RhbmQgd2hhdCB3ZSBtZWFuIGJ5XG4gICAgICAgICAgdGhpcyx7XCIgXCJ9XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcmVtaXgucnVuL3R1dG9yaWFsLzQtbmVzdGVkLXJvdXRlcy1wYXJhbXNcIj5cbiAgICAgICAgICAgIHJlYWQgYWxsIGFib3V0IG5lc3RlZCByb3V0ZXMgaW4gdGhlIGRvY3NcbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxociAvPlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0SW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxwPlxuICAgICAgICBZb3UgYXJlIGxvb2tpbmcgYXQgdGhlIGluZGV4IHJvdXRlIGZvciB0aGUgPGNvZGU+L2Fib3V0PC9jb2RlPiBVUkxcbiAgICAgICAgc2VnbWVudCwgYnV0IHRoZXJlIGFyZSBuZXN0ZWQgcm91dGVzIGFzIHdlbGwhXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICA8TGluayB0bz1cIndob2FcIj5DaGVjayBvdXQgb25lIG9mIHRoZW0gaGVyZS48L0xpbms+XG4gICAgICAgIDwvc3Ryb25nPlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXRJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHA+XG4gICAgICAgIFdob2EsIHRoaXMgaXMgYSBuZXN0ZWQgcm91dGUhIFdlIHJlbmRlciB0aGUgPGNvZGU+L2Fib3V0PC9jb2RlPiBsYXlvdXRcbiAgICAgICAgcm91dGUgY29tcG9uZW50LCBhbmQgaXRzIDxjb2RlPk91dGxldDwvY29kZT4gcmVuZGVycyBvdXIgcm91dGVcbiAgICAgICAgY29tcG9uZW50LiBcdUQ4M0VcdUREMkZcbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgIDxMaW5rIHRvPVwiLi5cIj5cbiAgICAgICAgICAgIEdvIGJhY2sgdG8gdGhlIDxjb2RlPi9hYm91dDwvY29kZT4gaW5kZXguXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L3N0cm9uZz5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rc0Z1bmN0aW9uLCBNZXRhRnVuY3Rpb24gfSBmcm9tICdyZW1peCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnfi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCBQcm9qZWN0Q2FyZCBmcm9tICd+L2NvbXBvbmVudHMvcHJvamVjdENhcmQnXG5pbXBvcnQgc3R5bGVzVVJMIGZyb20gJ34vc3R5bGVzL3RhaWx3aW5kLmNzcydcbmltcG9ydCBhZXBpU2NyZWVuc2hvdCBmcm9tICd+L2Fzc2V0cy9hZXBpLnBuZydcbmltcG9ydCBicG5TY3JlZW5zaG90IGZyb20gJ34vYXNzZXRzL2Jwbi5wbmcnXG5pbXBvcnQgamZTY3JlZW5zaG90IGZyb20gJ34vYXNzZXRzL2pmbWVtb3JpYWwucG5nJ1xuaW1wb3J0IHJtZVNjcmVlbnNob3QgZnJvbSAnfi9hc3NldHMvcm1lLnBuZydcbmltcG9ydCBjb252ZW50aW9uU2NyZWVuc2hvdCBmcm9tICd+L2Fzc2V0cy9jb252ZW50aW9uLnBuZydcbmltcG9ydCB0dWxhbmVTY3JlZW5zaG90IGZyb20gJ34vYXNzZXRzL3R1bGFuZS5wbmcnXG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICByZWw6ICdzdHlsZXNoZWV0JyxcbiAgICAgIGhyZWY6IHN0eWxlc1VSTCxcbiAgICB9LFxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdQb3J0Zm9saW8gfCBTYW0gQmxla2htYW4nLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWItNiBncmlkIG1heC13LTd4bCBnYXAtNCBsZzpncmlkLWNvbHMtMlwiPlxuICAgICAgPFByb2plY3RDYXJkXG4gICAgICAgIGtleT1cIlJNRVwiXG4gICAgICAgIGV4dGVybmFsXG4gICAgICAgIHByb2plY3RMaW5rPVwiaHR0cHM6Ly9yYXRlbXllc3RhdGUub3JnYW5pemVteXBlb3BsZS5jb20vXCJcbiAgICAgICAgcHJvamVjdE5hbWU9XCJSYXRlTXlFc3RhdGVcIlxuICAgICAgICBwcm9qZWN0SW1hZ2U9e3JtZVNjcmVlbnNob3R9XG4gICAgICAgIHRlY2hzdGFjaz17W1xuICAgICAgICAgICdKYXZhc2NyaXB0JyxcbiAgICAgICAgICAnTm9kZUpTJyxcbiAgICAgICAgICAnR2l0JyxcbiAgICAgICAgICAnUmVhY3QnLFxuICAgICAgICAgICdSZWFjdCBSb3V0ZXInLFxuICAgICAgICAgICdUYWlsd2luZCBDU1MnLFxuICAgICAgICAgICdQcmlzbWEnLFxuICAgICAgICAgICdNeVNRTCcsXG4gICAgICAgICAgJ05ldGxpZnknLFxuICAgICAgICBdfVxuICAgICAgLz5cbiAgICAgIDxQcm9qZWN0Q2FyZFxuICAgICAgICBwcm9qZWN0TGluaz1cImh0dHBzOi8vc2Ftcy1qb2tlcy5oZXJva3VhcHAuY29tL1wiXG4gICAgICAgIGV4dGVybmFsXG4gICAgICAgIHRlY2hzdGFjaz17W1xuICAgICAgICAgICdUeXBlc2NyaXB0JyxcbiAgICAgICAgICAnTm9kZUpTJyxcbiAgICAgICAgICAnR2l0JyxcbiAgICAgICAgICAnUmVtaXgnLFxuICAgICAgICAgICdSZWFjdCcsXG4gICAgICAgICAgJ1ByaXNtYScsXG4gICAgICAgICAgJ1Bvc3RncmVzJyxcbiAgICAgICAgICAnSGVyb2t1JyxcbiAgICAgICAgXX1cbiAgICAgIC8+XG4gICAgICA8UHJvamVjdENhcmRcbiAgICAgICAga2V5PVwiQUVQaVwiXG4gICAgICAgIHByb2plY3RMaW5rPVwiL2FlcGlcIlxuICAgICAgICBwcm9qZWN0TmFtZT1cIkFFUGkgRG9uYXRpb24gTGluayBHZW5lcmF0b3JcIlxuICAgICAgICBwcm9qZWN0SW1hZ2U9e2FlcGlTY3JlZW5zaG90fVxuICAgICAgICB0ZWNoc3RhY2s9e1tcbiAgICAgICAgICAnVHlwZXNjcmlwdCcsXG4gICAgICAgICAgJ05vZGVKUycsXG4gICAgICAgICAgJ0dpdCcsXG4gICAgICAgICAgJ1JlbWl4JyxcbiAgICAgICAgICAnUmVhY3QnLFxuICAgICAgICAgICdUYWlsd2luZCBDU1MnLFxuICAgICAgICAgICdOZXRsaWZ5JyxcbiAgICAgICAgXX1cbiAgICAgIC8+XG4gICAgICA8UHJvamVjdENhcmRcbiAgICAgICAga2V5PVwiQlBOXCJcbiAgICAgICAgZXh0ZXJuYWxcbiAgICAgICAgcHJvamVjdExpbms9XCJodHRwczovL2Jwbi5hZXBpLm9yZy9cIlxuICAgICAgICBwcm9qZWN0TmFtZT1cIkFFUGkgQnVzaW5lc3MgJiBQcm9mZXNzaW9uYWwgTmV0d29ya1wiXG4gICAgICAgIHByb2plY3RJbWFnZT17YnBuU2NyZWVuc2hvdH1cbiAgICAgICAgdGVjaHN0YWNrPXtbJ1dvcmRQcmVzcycsICdwaHAnXX1cbiAgICAgIC8+XG4gICAgICA8UHJvamVjdENhcmRcbiAgICAgICAga2V5PVwiSkZcIlxuICAgICAgICBleHRlcm5hbFxuICAgICAgICBwcm9qZWN0TGluaz1cImh0dHBzOi8vd3d3LmFlcGkub3JnL2ppbS1tZW1vcmlhbC9cIlxuICAgICAgICBwcm9qZWN0TmFtZT1cIkppbSBGbGVpc2NoZXIgTWVtb3JpYWxcIlxuICAgICAgICBwcm9qZWN0SW1hZ2U9e2pmU2NyZWVuc2hvdH1cbiAgICAgICAgdGVjaHN0YWNrPXtbJ1dvcmRQcmVzcycsICdwaHAnXX1cbiAgICAgIC8+XG4gICAgICA8UHJvamVjdENhcmRcbiAgICAgICAga2V5PVwiQ29udmVudGlvblwiXG4gICAgICAgIGV4dGVybmFsXG4gICAgICAgIHByb2plY3RMaW5rPVwiaHR0cHM6Ly93d3cuYWVwaS5vcmcvZG9uYXRlY29udmVudGlvbi9cIlxuICAgICAgICBwcm9qZWN0TmFtZT1cIkFFUGkncyAyMDIxIENvbnZlbnRpb24gRnVuZHJhaXNlclwiXG4gICAgICAgIHByb2plY3RJbWFnZT17Y29udmVudGlvblNjcmVlbnNob3R9XG4gICAgICAgIHRlY2hzdGFjaz17WydXb3JkUHJlc3MnLCAncGhwJ119XG4gICAgICAvPlxuICAgICAgPFByb2plY3RDYXJkXG4gICAgICAgIGtleT1cIlR1bGFuZVwiXG4gICAgICAgIGV4dGVybmFsXG4gICAgICAgIHByb2plY3RMaW5rPVwiaHR0cHM6Ly93d3cuYWVwaS5vcmcvdHVsYW5lcmV1bmlvbi9cIlxuICAgICAgICBwcm9qZWN0TmFtZT1cIkFFUGkgVHVsYW5lIEFsdW1uaSBSZXVuaW9uIExhbmRpbmcgUGFnZVwiXG4gICAgICAgIHByb2plY3RJbWFnZT17dHVsYW5lU2NyZWVuc2hvdH1cbiAgICAgICAgdGVjaHN0YWNrPXtbJ1dvcmRQcmVzcycsICdwaHAnXX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgam9rZXNTY3JlZW5zaG90IGZyb20gJ34vYXNzZXRzL2pva2VzLnBuZydcbmltcG9ydCBzYWZhcmlCYXIgZnJvbSAnfi9hc3NldHMvc2FmYXJpYmFyLnBuZydcbmltcG9ydCB7IHN2Z0xvb2t1cCwgc3ZnTG9va3VwT2JqZWN0IH0gZnJvbSAnLi9pY29ucydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdENhcmQoe1xuICBwcm9qZWN0TGluayA9ICcvJyxcbiAgcHJvamVjdE5hbWUgPSAnSm9rZXMgQXBwJyxcbiAgcHJvamVjdEltYWdlID0gam9rZXNTY3JlZW5zaG90LFxuICBleHRlcm5hbCA9IGZhbHNlLFxuICB0ZWNoc3RhY2ssXG4gIGRlc2NyaXB0aW9uLFxufToge1xuICBwcm9qZWN0TGluaz86IHN0cmluZ1xuICBwcm9qZWN0TmFtZT86IHN0cmluZ1xuICBwcm9qZWN0SW1hZ2U/OiBzdHJpbmdcbiAgZXh0ZXJuYWw/OiBib29sZWFuXG4gIHRlY2hzdGFjaz86IEFycmF5PGtleW9mIHN2Z0xvb2t1cE9iamVjdD5cbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwIGZsZXggdy1mdWxsIGp1c3RpZnktY2VudGVyIHRyYW5zaXRpb25cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0yIG1heC13LTJ4bCBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1sZyBib3JkZXItZ3JheS03MDAgYmctZ3JheS04MDAgc2hhZG93LW1kIG1kOnJvdW5kZWQteGxcIj5cbiAgICAgICAgPExpbmtTd2l0Y2ggZXh0ZXJuYWw9e2V4dGVybmFsfSBwcm9qZWN0TGluaz17cHJvamVjdExpbmt9PlxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIlwiIHNyYz17c2FmYXJpQmFyfSBhbHQ9XCJwcm9kdWN0IGltYWdlXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi00IGgtNTIgXG4gICAgICAgICAgICB3LWZ1bGwgb2JqZWN0LWNvdmVyIG9iamVjdC10b3Agc206bWItNiBzbTpoLTcyIG1kOmgtNzJcIlxuICAgICAgICAgICAgICBzcmM9e3Byb2plY3RJbWFnZX1cbiAgICAgICAgICAgICAgYWx0PVwicHJvZHVjdCBpbWFnZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC01IHBiLTVcIj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHRleHQteGwgZm9udC1zZW1pYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktOTAwIHRyYW5zaXRpb24gZGFyazp0ZXh0LXdoaXRlIG1kOmdyb3VwLWhvdmVyOnRleHQtYmx1ZS00MDBcIj5cbiAgICAgICAgICAgICAgICB7cHJvamVjdE5hbWV9XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIHRleHQtYmx1ZS00MDAgdHJhbnNpdGlvbiBtZDpncm91cC1ob3ZlcjppbmxpbmVcIj5cbiAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZSBoLTYgdy02XCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTMgN2w1IDVtMCAwbC01IDVtNS01SDZcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIHNwYWNlLXgtMiBzbTpzcGFjZS14LTRcIj5cbiAgICAgICAgICAgICAgICB7dGVjaHN0YWNrPy5tYXAoKHRlY2gpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGljb25MaW5rID0gZ2V0VGVjaEljb24odGVjaClcbiAgICAgICAgICAgICAgICAgIGlmICghaWNvbkxpbmspIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dGVjaH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0ZWNofVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktMSBoLTYgdGV4dC13aGl0ZSBtZDpteS0wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aWNvbkxpbmt9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3RlY2h9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgIDwvTGlua1N3aXRjaD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmZ1bmN0aW9uIExpbmtTd2l0Y2goe1xuICBleHRlcm5hbCxcbiAgY2hpbGRyZW4sXG4gIHByb2plY3RMaW5rLFxufToge1xuICBleHRlcm5hbDogYm9vbGVhblxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3RFbGVtZW50XG4gIHByb2plY3RMaW5rOiBzdHJpbmdcbn0pIHtcbiAgaWYgKGV4dGVybmFsID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxhIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtwcm9qZWN0TGlua30+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvYT5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDxMaW5rIHRvPXtwcm9qZWN0TGlua30+e2NoaWxkcmVufTwvTGluaz5cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRUZWNoSWNvbih0ZWNoOiBrZXlvZiBzdmdMb29rdXBPYmplY3QpIHtcbiAgY29uc3QgaWNvbiA9IHN2Z0xvb2t1cFt0ZWNoXVxuICBpZiAoIWljb24pIHJldHVybiBudWxsXG4gIHJldHVybiBpY29uXG59XG4iLCAiaW1wb3J0IHJlc3VtZSBmcm9tICd+L2Fzc2V0cy9SZXN1bWUucG5nJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXN1bWVQYWdlKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYi0xMCBmbGV4IG1heC13LTR4bCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtNFwiPlxuICAgICAgPGltZyBzcmM9e3Jlc3VtZX0gYWx0PVwiU2FtIEJsZWtobWFuJ3MgUmVzdW1lXCIgY2xhc3NOYW1lPVwicm91bmRlZC1sZ1wiIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQge1xuICBBY3Rpb25GdW5jdGlvbixcbiAgRm9ybSxcbiAgTGluayxcbiAgTGlua3NGdW5jdGlvbixcbiAgTWV0YUZ1bmN0aW9uLFxuICB1c2VBY3Rpb25EYXRhLFxufSBmcm9tICdyZW1peCdcbmltcG9ydCBzdHlsZXNVUkwgZnJvbSAnfi9zdHlsZXMvdGFpbHdpbmQuY3NzJ1xuaW1wb3J0IExheW91dCBmcm9tICd+L2NvbXBvbmVudHMvbGF5b3V0J1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgcmVsOiAnc3R5bGVzaGVldCcsXG4gICAgICBocmVmOiBzdHlsZXNVUkwsXG4gICAgfSxcbiAgXVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0yNCBsZzpweS0zMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgbXgtYXV0byBtYXgtdy03eGwgcGwtNCBwci04IHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWN1cnNpdmUgdGV4dC01eGwgZm9udC1leHRyYWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGUgc206dGV4dC01eGwgbGc6dGV4dC02eGxcIj5cbiAgICAgICAgICAgIFNhbSBCbGVraG1hblxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNiBtYXgtdy0zeGwgdGV4dC14bCB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgT3BlcmF0aW9ucyBhbmQgVGVjaG5vbG9neSBFbmdpbmVlclxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG14LWF1dG8gbWF4LXctN3hsIHB4LTQgcGItMTIgc206cHgtNiBsZzpweC04IGxnOnBiLTE2XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LTd4bCBsZzptbC1hdXRvXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWItNCB0ZXh0LTN4bCBmb250LWV4dHJhYm9sZCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgIEFib3V0IG1lXG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9zZSBwcm9zZS1sZyBtYi02IGRhcms6cHJvc2UtaW52ZXJ0XCI+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIEkgYW0gYW4gb3BlcmF0aW9ucyBhbmQgdGVjaG5vbG9neSBlbmdpbmVlciB0aGF0IGJlbGlldmVzIGluXG4gICAgICAgICAgICAgICAgbWFraW5nIHRoZSB3b3JsZCBhIGJldHRlciBwbGFjZS4gSSB3b3JrIHdpdGggb3JnYW5pemF0aW9uc1xuICAgICAgICAgICAgICAgIG1ha2luZyBhbiBpbXBhY3Qgb24gYm90aCB0aGUgd29ybGQgYXMgd2Uga25vdyBpdCB0b2RheSBhbmQsXG4gICAgICAgICAgICAgICAgaW5leG9yYWJseSwgb24gaXRzIGZ1dHVyZS5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBJIGFtIGN1cnJlbnRseSB0aGUgRGlyZWN0b3Igb2YgT3BlcmF0aW9ucyBmb3IgdGhlIEFFUGlcbiAgICAgICAgICAgICAgICBGb3VuZGF0aW9uLiBXZSBhcmUgYW4gaW50ZXJuYXRpb25hbCBjaGFyaXR5IGZvY3VzZWQgb25cbiAgICAgICAgICAgICAgICBsZWFkZXJzaGlwIHRyYWluaW5nIGFuZCBmaW5hbmNpYWwgc3VwcG9ydCBmb3IgSmV3aXNoIHN0dWRlbnRzIG9uXG4gICAgICAgICAgICAgICAgQ29sbGVnZSBjYW1wdXNlcy4gSW4gbXkgcm9sZSwgSSBhbSByZXNwb25zaWJsZSBmb3Iga2VlcGluZyB0aGVcbiAgICAgICAgICAgICAgICB0ZWFtIG9yZ2FuaXplZCwgdG9nZXRoZXIsIGFuZCBmb2N1c2VkIG9uIG91ciBtaXNzaW9uLiBJIGFtIGluXG4gICAgICAgICAgICAgICAgY2hhcmdlIG9mIGltcGxlbWVudGluZyBzb2x1dGlvbnMgYW5kIHByb2Nlc3NlcyB0byByZWR1Y2VcbiAgICAgICAgICAgICAgICBmcmljdGlvbiBhbmQgY29nbml0aXZlIGxvYWQgZm9yIHRoZSB0ZWFtLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIEkgYWxzbyBkZXZlbG9wIHdlYiBhcHBsaWNhdGlvbnMgZm9yIGNsaWVudHMsIHNvbWUgb2Ygd2hpY2ggeW91XG4gICAgICAgICAgICAgICAgY2FuIHNlZSBpbiBteSA8TGluayB0bz1cIi9wb3J0Zm9saW9cIj5wb3J0Zm9saW88L0xpbms+LiBJZiB5b3VcbiAgICAgICAgICAgICAgICB3b3VsZCBsaWtlIHRvIGdldCBpbiBjb250YWN0IHdpdGggbWUgYWJvdXQgYSBwb3RlbnRpYWwgcHJvamVjdCxcbiAgICAgICAgICAgICAgICBlbWFpbCBtZSBhdHsnICd9XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJtYWlsdG86c2FtQGJsZWtzLmRldlwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgc2FtQGJsZWtzLmRldlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8Lz5cbiAgKVxufVxuIiwgImltcG9ydCB7IE1ldGFGdW5jdGlvbiwgT3V0bGV0IH0gZnJvbSAncmVtaXgnXG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdBRVBpIFV0aWxpdGllcyB8IFNhbSBCbGVraG1hbicsXG4gICAgZGVzY3JpcHRpb246ICdVdGlsaXRpZXMgZm9yIEFFUGkgbWFkZSBieSBTYW0gQmxla2htYW4nLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFFUEkoKSB7XG4gIHJldHVybiA8T3V0bGV0IC8+XG59XG4iLCAiaW1wb3J0IHsgU3ludGhldGljRXZlbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uLCBGb3JtLCB1c2VBY3Rpb25EYXRhLCB1c2VUcmFuc2l0aW9uIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgKiBhcyBjb3B5IGZyb20gJ2NvcHktdG8tY2xpcGJvYXJkJ1xuXG50eXBlIGxpbmtQYXJ0cyA9IHtcbiAgY3VycmVuY3k/OiBTdHJpbmdcbiAgYXBwZWFsPzogU3RyaW5nXG4gIGNhbXBhaWduPzogU3RyaW5nXG4gIGZ1bmQ/OiBTdHJpbmdcbiAgcGxlZGdlPzogU3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGxldCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKVxuICBsZXQgdmFsdWVzID0gT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhKVxuICByZXR1cm4gY29uc3RydWN0TGluayh2YWx1ZXMpXG59XG5cbmZ1bmN0aW9uIGNvbnN0cnVjdExpbmsocGFydHM6IGxpbmtQYXJ0cykge1xuICBsZXQgdXJsUGFydHMgPSBwYXJ0c1xuICBkZWxldGUgdXJsUGFydHMuY3VycmVuY3lcbiAgLy8gY29uc29sZS5sb2codXJsUGFydHMpXG4gIGxldCBsaW5rS2V5cyA9IE9iamVjdC5rZXlzKHVybFBhcnRzKVxuICAvLyBjb25zb2xlLmxvZyhsaW5rS2V5cylcbiAgbGV0IHVybEJhc2UgPSAnaHR0cHM6Ly9hZXBpLm9yZy9kb25hdGUvPydcbiAgbGV0IGNvbXBsZXRlVVJMID0gdXJsQmFzZVxuICBpZiAoIWxpbmtLZXlzLmxlbmd0aCB8fCBsaW5rS2V5cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGZvciAobGV0IGtleSBvZiBsaW5rS2V5cykge1xuICAgIGlmICh1cmxQYXJ0c1trZXldID09PSAnJykge1xuICAgIH0gZWxzZSBpZiAobGlua0tleXMuaW5kZXhPZihrZXkpID09PSAwKSB7XG4gICAgICBjb21wbGV0ZVVSTCArPSBgJHtrZXl9PSR7dXJsUGFydHNba2V5XX1gXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBsZXRlVVJMICs9IGAmJHtrZXl9PSR7dXJsUGFydHNba2V5XX1gXG4gICAgfVxuICB9XG4gIHJldHVybiBuZXcgVVJMKGNvbXBsZXRlVVJMKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBRVBpSW5kZXhSb3V0ZSgpIHtcbiAgY29uc3QgdHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb24oKVxuICBsZXQgY29uc3RydWN0ZWRMaW5rID0gdXNlQWN0aW9uRGF0YSgpXG4gIGNvbnN0IFtsb2FkZWQsIHNldExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2N1cnJlbmN5LCBzZXRDdXJyZW5jeV0gPSB1c2VTdGF0ZSgnVVMnKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdHJhbnNpdGlvbi5zdGF0ZSA9PT0gJ3N1Ym1pdHRpbmcnICYmIHNldExvYWRlZCh0cnVlKVxuICB9LCBbdHJhbnNpdGlvbl0pXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1heC13LTR4bCBtaW4taC1mdWxsIGdhcC04IHAtMTYgbS1hdXRvIGRhcms6dGV4dC1ncmF5LTUwJz5cbiAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtNHhsIGZvbnQtc2VtaWJvbGQnPkFFUGkgRG9uYXRpb24gTGluayBHZW5lcmF0b3I8L2gxPlxuICAgICAgPEZvcm0gbWV0aG9kPSdwb3N0JyBjbGFzc05hbWU9J3ctZnVsbCcgYXV0b0NvbXBsZXRlPSdvZmYnPlxuICAgICAgICA8ZmllbGRzZXQgLz5cbiAgICAgICAgPGxlZ2VuZCBjbGFzc05hbWU9J3NyLW9ubHknPkN1cnJlbmN5PC9sZWdlbmQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBtYi00Jz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGlkPSdVUydcbiAgICAgICAgICAgIHR5cGU9J3JhZGlvJ1xuICAgICAgICAgICAgbmFtZT0nY3VycmVuY3knXG4gICAgICAgICAgICB2YWx1ZT0nVVMnXG4gICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0Q3VycmVuY3koJ1VTJyl9XG4gICAgICAgICAgICBjaGVja2VkPXtjdXJyZW5jeSA9PT0gJ1VTJ31cbiAgICAgICAgICAgIGNsYXNzTmFtZT0ndy00IGgtNCBib3JkZXItZ3JheS0zMDAgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS0zMDAgZGFyazpmb2N1czpyaW5nLWJsdWUtNjAwIGRhcms6Zm9jdXM6YmctYmx1ZS02MDAgZGFyazpiZy1ncmF5LTcwMCBkYXJrOmJvcmRlci1ncmF5LTYwMCdcbiAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT0nVVMnXG4gICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PSdVUydcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgaHRtbEZvcj0nVVMnXG4gICAgICAgICAgICBjbGFzc05hbWU9J2Jsb2NrIG1sLTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC1ncmF5LTMwMCdcbiAgICAgICAgICA+XG4gICAgICAgICAgICBVbml0ZWQgU3RhdGVzXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIG1iLTQnPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9J0NhbmFkYSdcbiAgICAgICAgICAgIHR5cGU9J3JhZGlvJ1xuICAgICAgICAgICAgbmFtZT0nY3VycmVuY3knXG4gICAgICAgICAgICB2YWx1ZT0nQ2FuYWRhJ1xuICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHNldEN1cnJlbmN5KCdDYW5hZGEnKX1cbiAgICAgICAgICAgIGNoZWNrZWQ9e2N1cnJlbmN5ID09PSAnQ2FuYWRhJ31cbiAgICAgICAgICAgIGNsYXNzTmFtZT0ndy00IGgtNCBib3JkZXItZ3JheS0zMDAgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS0zMDAgZGFyazpmb2N1czpyaW5nLWJsdWUtNjAwIGRhcms6Zm9jdXM6YmctYmx1ZS02MDAgZGFyazpiZy1ncmF5LTcwMCBkYXJrOmJvcmRlci1ncmF5LTYwMCdcbiAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT0nQ2FuYWRhJ1xuICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT0nQ2FuYWRhJ1xuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICBodG1sRm9yPSdDYW5hZGEnXG4gICAgICAgICAgICBjbGFzc05hbWU9J2Jsb2NrIG1sLTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC1ncmF5LTMwMCdcbiAgICAgICAgICA+XG4gICAgICAgICAgICBDYW5hZGFcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUgei0wIHctZnVsbCBtYi02IGdyb3VwJz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICBuYW1lPXtjdXJyZW5jeSA9PT0gJ1VTJyA/ICdjYW1wYWlnbicgOiAnY2FuYWRpYW5jYW1wYWlnbid9XG4gICAgICAgICAgICBpZD17Y3VycmVuY3kgPT09ICdVUycgPyAnY2FtcGFpZ24nIDogJ2NhbmFkaWFuY2FtcGFpZ24nfVxuICAgICAgICAgICAgY2xhc3NOYW1lPSdibG9jayBweS0yLjUgcHgtMCB3LWZ1bGwgdGV4dC1zbSB0ZXh0LWdyYXktOTAwIGJnLXRyYW5zcGFyZW50IGJvcmRlci0wIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMzAwIGFwcGVhcmFuY2Utbm9uZSBkYXJrOnRleHQtd2hpdGUgZGFyazpib3JkZXItZ3JheS02MDAgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMCBmb2N1czpib3JkZXItYmx1ZS02MDAgcGVlcidcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPScgJ1xuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICBodG1sRm9yPXtjdXJyZW5jeSA9PT0gJ1VTJyA/ICdjYW1wYWlnbicgOiAnY2FuYWRpYW5jYW1wYWlnbid9XG4gICAgICAgICAgICBjbGFzc05hbWU9J2Fic29sdXRlIHRleHQtc20gdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDAgZHVyYXRpb24tMzAwIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktNiBzY2FsZS03NSB0b3AtMyAtei0xMCBvcmlnaW4tWzBdIHBlZXItZm9jdXM6bGVmdC0wIHBlZXItZm9jdXM6dGV4dC1ibHVlLTYwMCBwZWVyLWZvY3VzOmRhcms6dGV4dC1ibHVlLTUwMCBwZWVyLXBsYWNlaG9sZGVyLXNob3duOnNjYWxlLTEwMCBwZWVyLXBsYWNlaG9sZGVyLXNob3duOnRyYW5zbGF0ZS15LTAgcGVlci1mb2N1czpzY2FsZS03NSBwZWVyLWZvY3VzOi10cmFuc2xhdGUteS02J1xuICAgICAgICAgID5cbiAgICAgICAgICAgIENhbXBhaWduIE5hbWVcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIHotMCB3LWZ1bGwgbWItNiBncm91cCc+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgbmFtZT0nZnVuZCdcbiAgICAgICAgICAgIGlkPSdmbG9hdGluZ19mdW5kJ1xuICAgICAgICAgICAgY2xhc3NOYW1lPSdibG9jayBweS0yLjUgcHgtMCB3LWZ1bGwgdGV4dC1zbSB0ZXh0LWdyYXktOTAwIGJnLXRyYW5zcGFyZW50IGJvcmRlci0wIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMzAwIGFwcGVhcmFuY2Utbm9uZSBkYXJrOnRleHQtd2hpdGUgZGFyazpib3JkZXItZ3JheS02MDAgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMCBmb2N1czpib3JkZXItYmx1ZS02MDAgcGVlcidcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPScgJ1xuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICBodG1sRm9yPSdmbG9hdGluZ19mdW5kJ1xuICAgICAgICAgICAgY2xhc3NOYW1lPSdhYnNvbHV0ZSB0ZXh0LXNtIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwIGR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTYgc2NhbGUtNzUgdG9wLTMgLXotMTAgb3JpZ2luLVswXSBwZWVyLWZvY3VzOmxlZnQtMCBwZWVyLWZvY3VzOnRleHQtYmx1ZS02MDAgcGVlci1mb2N1czpkYXJrOnRleHQtYmx1ZS01MDAgcGVlci1wbGFjZWhvbGRlci1zaG93bjpzY2FsZS0xMDAgcGVlci1wbGFjZWhvbGRlci1zaG93bjp0cmFuc2xhdGUteS0wIHBlZXItZm9jdXM6c2NhbGUtNzUgcGVlci1mb2N1czotdHJhbnNsYXRlLXktNidcbiAgICAgICAgICA+XG4gICAgICAgICAgICBGdW5kIE5hbWVcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgeGw6Z3JpZC1jb2xzLTIgeGw6Z2FwLTYnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSB6LTAgdy1mdWxsIG1iLTYgZ3JvdXAnPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9J251bWJlcidcbiAgICAgICAgICAgICAgbmFtZT0nYXBwZWFsJ1xuICAgICAgICAgICAgICBpZD0nYXBwZWFsJ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J2Jsb2NrIHB5LTIuNSBweC0wIHctZnVsbCB0ZXh0LXNtIHRleHQtZ3JheS05MDAgYmctdHJhbnNwYXJlbnQgYm9yZGVyLTAgYm9yZGVyLWItMiBib3JkZXItZ3JheS0zMDAgYXBwZWFyYW5jZS1ub25lIGRhcms6dGV4dC13aGl0ZSBkYXJrOmJvcmRlci1ncmF5LTYwMCBkYXJrOmZvY3VzOmJvcmRlci1ibHVlLTUwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0wIGZvY3VzOmJvcmRlci1ibHVlLTYwMCBwZWVyJ1xuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nICdcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgaHRtbEZvcj0nYXBwZWFsJ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J2Fic29sdXRlIHRleHQtc20gdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDAgZHVyYXRpb24tMzAwIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktNiBzY2FsZS03NSB0b3AtMyAtei0xMCBvcmlnaW4tWzBdIHBlZXItZm9jdXM6bGVmdC0wIHBlZXItZm9jdXM6dGV4dC1ibHVlLTYwMCBwZWVyLWZvY3VzOmRhcms6dGV4dC1ibHVlLTUwMCBwZWVyLXBsYWNlaG9sZGVyLXNob3duOnNjYWxlLTEwMCBwZWVyLXBsYWNlaG9sZGVyLXNob3duOnRyYW5zbGF0ZS15LTAgcGVlci1mb2N1czpzY2FsZS03NSBwZWVyLWZvY3VzOi10cmFuc2xhdGUteS02J1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBcHBlYWwgSURcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIHotMCB3LWZ1bGwgbWItNiBncm91cCc+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xuICAgICAgICAgICAgICBuYW1lPSdwbGVkZ2UnXG4gICAgICAgICAgICAgIGlkPSdwbGVkZ2UnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmxvY2sgcHktMi41IHB4LTAgdy1mdWxsIHRleHQtc20gdGV4dC1ncmF5LTkwMCBiZy10cmFuc3BhcmVudCBib3JkZXItMCBib3JkZXItYi0yIGJvcmRlci1ncmF5LTMwMCBhcHBlYXJhbmNlLW5vbmUgZGFyazp0ZXh0LXdoaXRlIGRhcms6Ym9yZGVyLWdyYXktNjAwIGRhcms6Zm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTAgZm9jdXM6Ym9yZGVyLWJsdWUtNjAwIHBlZXInXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPScgJ1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICBodG1sRm9yPSdwbGVkZ2UnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nYWJzb2x1dGUgdGV4dC1zbSB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTQwMCBkdXJhdGlvbi0zMDAgdHJhbnNmb3JtIC10cmFuc2xhdGUteS02IHNjYWxlLTc1IHRvcC0zIC16LTEwIG9yaWdpbi1bMF0gcGVlci1mb2N1czpsZWZ0LTAgcGVlci1mb2N1czp0ZXh0LWJsdWUtNjAwIHBlZXItZm9jdXM6ZGFyazp0ZXh0LWJsdWUtNTAwIHBlZXItcGxhY2Vob2xkZXItc2hvd246c2NhbGUtMTAwIHBlZXItcGxhY2Vob2xkZXItc2hvd246dHJhbnNsYXRlLXktMCBwZWVyLWZvY3VzOnNjYWxlLTc1IHBlZXItZm9jdXM6LXRyYW5zbGF0ZS15LTYnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFBsZWRnZSBJRFxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCB4bDpncmlkLWNvbHMtMiB4bDpnYXAtNic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIHotMCB3LWZ1bGwgbWItNiBncm91cCc+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT0ndGVsJ1xuICAgICAgICAgICAgICBwYXR0ZXJuPSdbMC05XXszfS1bMC05XXszfS1bMC05XXs0fSdcbiAgICAgICAgICAgICAgbmFtZT0nZmxvYXRpbmdfcGhvbmUnXG4gICAgICAgICAgICAgIGlkPSdmbG9hdGluZ19waG9uZSdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdibG9jayBweS0yLjUgcHgtMCB3LWZ1bGwgdGV4dC1zbSB0ZXh0LWdyYXktOTAwIGJnLXRyYW5zcGFyZW50IGJvcmRlci0wIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMzAwIGFwcGVhcmFuY2Utbm9uZSBkYXJrOnRleHQtd2hpdGUgZGFyazpib3JkZXItZ3JheS02MDAgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMCBmb2N1czpib3JkZXItYmx1ZS02MDAgcGVlcidcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9JyAnXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgIGh0bWxGb3I9J2Zsb2F0aW5nX3Bob25lJ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J2Fic29sdXRlIHRleHQtc20gdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDAgZHVyYXRpb24tMzAwIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktNiBzY2FsZS03NSB0b3AtMyAtei0xMCBvcmlnaW4tWzBdIHBlZXItZm9jdXM6bGVmdC0wIHBlZXItZm9jdXM6dGV4dC1ibHVlLTYwMCBwZWVyLWZvY3VzOmRhcms6dGV4dC1ibHVlLTUwMCBwZWVyLXBsYWNlaG9sZGVyLXNob3duOnNjYWxlLTEwMCBwZWVyLXBsYWNlaG9sZGVyLXNob3duOnRyYW5zbGF0ZS15LTAgcGVlci1mb2N1czpzY2FsZS03NSBwZWVyLWZvY3VzOi10cmFuc2xhdGUteS02J1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBQaG9uZSBudW1iZXIgKDEyMy00NTYtNzg5MClcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIHotMCB3LWZ1bGwgbWItNiBncm91cCc+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgbmFtZT0nZmxvYXRpbmdfY29tcGFueSdcbiAgICAgICAgICAgICAgaWQ9J2Zsb2F0aW5nX2NvbXBhbnknXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmxvY2sgcHktMi41IHB4LTAgdy1mdWxsIHRleHQtc20gdGV4dC1ncmF5LTkwMCBiZy10cmFuc3BhcmVudCBib3JkZXItMCBib3JkZXItYi0yIGJvcmRlci1ncmF5LTMwMCBhcHBlYXJhbmNlLW5vbmUgZGFyazp0ZXh0LXdoaXRlIGRhcms6Ym9yZGVyLWdyYXktNjAwIGRhcms6Zm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTAgZm9jdXM6Ym9yZGVyLWJsdWUtNjAwIHBlZXInXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPScgJ1xuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICBodG1sRm9yPSdmbG9hdGluZ19jb21wYW55J1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J2Fic29sdXRlIHRleHQtc20gdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDAgZHVyYXRpb24tMzAwIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktNiBzY2FsZS03NSB0b3AtMyAtei0xMCBvcmlnaW4tWzBdIHBlZXItZm9jdXM6bGVmdC0wIHBlZXItZm9jdXM6dGV4dC1ibHVlLTYwMCBwZWVyLWZvY3VzOmRhcms6dGV4dC1ibHVlLTUwMCBwZWVyLXBsYWNlaG9sZGVyLXNob3duOnNjYWxlLTEwMCBwZWVyLXBsYWNlaG9sZGVyLXNob3duOnRyYW5zbGF0ZS15LTAgcGVlci1mb2N1czpzY2FsZS03NSBwZWVyLWZvY3VzOi10cmFuc2xhdGUteS02J1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDb21wYW55IChFeC4gR29vZ2xlKVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT0nc3VibWl0J1xuICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSBiZy1ibHVlLTcwMCBob3ZlcjpiZy1ibHVlLTgwMCBmb2N1czpyaW5nLTQgZm9jdXM6cmluZy1ibHVlLTMwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gdy1mdWxsIHNtOnctYXV0byBweC01IHB5LTIuNSB0ZXh0LWNlbnRlciBkYXJrOmJnLWJsdWUtNjAwIGRhcms6aG92ZXI6YmctYmx1ZS03MDAgZGFyazpmb2N1czpyaW5nLWJsdWUtODAwJ1xuICAgICAgICA+XG4gICAgICAgICAgU3VibWl0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9Gb3JtPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsJz5cbiAgICAgICAge2xvYWRlZCA9PT0gdHJ1ZSAmJiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZm9udC1tZWRpdW0nPkRvbmF0aW9uIGxpbms6PC9wPlxuICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdwLTQgbS02IGZvbnQtbW9ubyBicmVhay13b3JkcyBiZy1ncmF5LTEwMCBkYXJrOmJnLXNsYXRlLTYwMCByb3VuZGVkLWxnJ1xuICAgICAgICAgICAgICBpZD0nY29uc3RydWN0ZWRMaW5rJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Y29uc3RydWN0ZWRMaW5rfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZ2FwLTQnPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjbGlwYm9hcmQgdGV4dC13aGl0ZSBiZy1ibHVlLTcwMCBob3ZlcjpiZy1ibHVlLTgwMCBmb2N1czpyaW5nLTQgZm9jdXM6cmluZy1ibHVlLTMwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtbWQgdy1mdWxsIHNtOnctYXV0byBweC01IHB5LTIuNSB0ZXh0LWNlbnRlciBkYXJrOmJnLWJsdWUtNjAwIGRhcms6aG92ZXI6YmctYmx1ZS03MDAgZGFyazpmb2N1czpyaW5nLWJsdWUtODAwJ1xuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNvcHkuZGVmYXVsdChjb25zdHJ1Y3RlZExpbmspfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ29weSB0byBjbGlwYm9hcmRcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtYmx1ZS04MDAgaG92ZXI6YmctYmx1ZS0xMDAgZm9jdXM6cmluZy00IGZvY3VzOnJpbmctYmx1ZS0zMDAgZm9udC1zZW1pYm9sZCByb3VuZGVkLWxnIHRleHQtbWQgdy1mdWxsIHNtOnctYXV0byBweC01IHB5LTIuNSB0ZXh0LWNlbnRlciBkYXJrOnRleHQtZ3JheS01MCBkYXJrOmhvdmVyOmJnLWJsdWUtOTAwIGRhcms6Zm9jdXM6cmluZy1ibHVlLTYwMCBkYXJrOmJvcmRlci0yIGRhcms6Ym9yZGVyLWJsdWUtNTAwIGJvcmRlci0yIGJvcmRlci1ibHVlLTgwMCdcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB3aW5kb3cub3Blbihjb25zdHJ1Y3RlZExpbmspfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgT3BlbiBMaW5rIGluIG5ldyBwYWdlXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6JzkxOTdlOWUzJywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1ZWkMySFhWQS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNTdEQjJENEkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1QNUNHQUhLRC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZWU0U2UDZGLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC03M1BPV1lWTy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstSUtNRk00TFouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1LREFIRktYQS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5Jzp0cnVlLCdoYXNFcnJvckJvdW5kYXJ5Jzp0cnVlfSwncm91dGVzL2FlcGknOnsnaWQnOidyb3V0ZXMvYWVwaScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhZXBpJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2FlcGktWjc1MjUzRjQuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hZXBpL2luZGV4Jzp7J2lkJzoncm91dGVzL2FlcGkvaW5kZXgnLCdwYXJlbnRJZCc6J3JvdXRlcy9hZXBpJywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2FlcGkvaW5kZXgtSlRVQjZUU0guanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUtEQUhGS1hBLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2RlbW9zL2Fib3V0Jzp7J2lkJzoncm91dGVzL2RlbW9zL2Fib3V0JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2RlbW9zL2Fib3V0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2RlbW9zL2Fib3V0LU40VllQQ05YLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZGVtb3MvYWJvdXQvaW5kZXgnOnsnaWQnOidyb3V0ZXMvZGVtb3MvYWJvdXQvaW5kZXgnLCdwYXJlbnRJZCc6J3JvdXRlcy9kZW1vcy9hYm91dCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9kZW1vcy9hYm91dC9pbmRleC02VFRZT0RTUi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2RlbW9zL2Fib3V0L3dob2EnOnsnaWQnOidyb3V0ZXMvZGVtb3MvYWJvdXQvd2hvYScsJ3BhcmVudElkJzoncm91dGVzL2RlbW9zL2Fib3V0JywncGF0aCc6J3dob2EnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvZGVtb3MvYWJvdXQvd2hvYS01V1IzNlkyTi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2RlbW9zL2FjdGlvbnMnOnsnaWQnOidyb3V0ZXMvZGVtb3MvYWN0aW9ucycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidkZW1vcy9hY3Rpb25zJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2RlbW9zL2FjdGlvbnMtM1BLWDdBUk4uanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2RlbW9zL2NvcnJlY3QnOnsnaWQnOidyb3V0ZXMvZGVtb3MvY29ycmVjdCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidkZW1vcy9jb3JyZWN0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2RlbW9zL2NvcnJlY3QtTUtKUkxQT0UuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9kZW1vcy9wYXJhbXMnOnsnaWQnOidyb3V0ZXMvZGVtb3MvcGFyYW1zJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2RlbW9zL3BhcmFtcycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9kZW1vcy9wYXJhbXMtSTVJTlZKUDYuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9kZW1vcy9wYXJhbXMvJGlkJzp7J2lkJzoncm91dGVzL2RlbW9zL3BhcmFtcy8kaWQnLCdwYXJlbnRJZCc6J3JvdXRlcy9kZW1vcy9wYXJhbXMnLCdwYXRoJzonOmlkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2RlbW9zL3BhcmFtcy8kaWQtR1FMR1ZLTkcuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6dHJ1ZSwnaGFzRXJyb3JCb3VuZGFyeSc6dHJ1ZX0sJ3JvdXRlcy9kZW1vcy9wYXJhbXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvZGVtb3MvcGFyYW1zL2luZGV4JywncGFyZW50SWQnOidyb3V0ZXMvZGVtb3MvcGFyYW1zJywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2RlbW9zL3BhcmFtcy9pbmRleC1RSVFSRFNXSy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LTVGR1RTWkRPLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1RNklEWkhDNy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcG9ydGZvbGlvJzp7J2lkJzoncm91dGVzL3BvcnRmb2xpbycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwb3J0Zm9saW8nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcG9ydGZvbGlvLTRKV1lTTVlCLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1RNklEWkhDNy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcmVzdW1lJzp7J2lkJzoncm91dGVzL3Jlc3VtZScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidyZXN1bWUnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcmVzdW1lLUhRSEY0TDJFLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LTkxOTdFOUUzLmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIsV0FBTyxlQUFlLFNBQVMsNEJBQTRCO0FBQUEsTUFDekQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxvQ0FBb0M7QUFBQSxNQUNqRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLHNDQUFzQztBQUFBLE1BQ25FLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsbUNBQW1DO0FBQUEsTUFDaEUs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
