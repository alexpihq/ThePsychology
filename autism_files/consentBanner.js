const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./static-main/MiEUT4.js","./static-main/BLf75a.js","./static-main/C-PRyy.js","./static-main/D6g3o6.js","./static-main/nLcleR.js","./static-main/n03ClK.css","./static-main/BkyG-F.css","./static-main/BjhW1E.js","./static-main/C1jHZi.css","./static-main/BM8kLZ.css","./static-main/Dz_pLg.css","./static-main/D_m5Om.js","./static-main/fnnzYT.js","./static-main/Dkohi4.css"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
function __vite_legacy_guard() {
  import.meta.url;
  import("_").catch(() => 1);
  (async function* () {
  })().next();
}
;
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    if (typeof callback !== "function") {
      return this.then(callback, callback);
    }
    const P2 = this.constructor || Promise;
    return this.then(
      (value) => P2.resolve(callback()).then(() => value),
      (err) => P2.resolve(callback()).then(() => {
        throw err;
      })
    );
  };
}
const API_URL = "https://api.cookiefirst.com/prod";
const EDGE_API_URL = "https://edge.cookiefirst.com/prod";
const STATIC_URL = "https://consent.cookiefirst.com";
const REGION_CHECK_URL = "".concat(EDGE_API_URL, "/location");
const DATA_ATTRIBUTES_PREFIX = "data-cookiefirst";
const EMBED_ELEMENTS_PREFIX = "cookiefirst";
const GENERIC_PREFIX = "cf";
const ACCENT_COLOR_ATTR = "".concat(DATA_ATTRIBUTES_PREFIX, "-accent-color");
const CORNER_STYLE_ATTR = "".concat(DATA_ATTRIBUTES_PREFIX, "-corner-style");
const OUTLINE_ACCENT_COLOR_ATTR = "".concat(DATA_ATTRIBUTES_PREFIX, "-outline-accent-color");
const BG_COLOR_ATTR = "".concat(DATA_ATTRIBUTES_PREFIX, "-bg-color");
const WIDGET_ATTR = "".concat(DATA_ATTRIBUTES_PREFIX, "-widget");
const BUTTON_ATTR = "".concat(DATA_ATTRIBUTES_PREFIX, "-button");
const ACTION_ATTR = "".concat(DATA_ATTRIBUTES_PREFIX, "-action");
const CATEGORY_ATTR = "".concat(DATA_ATTRIBUTES_PREFIX, "-category");
const CONSENT_COOKIE = "cookiefirst-consent";
const VISITOR_ID_COOKIE = "cookiefirst-id";
const LANGUAGE_COOKIE = "cf-user-lang";
const TCSTRING_COOKIE = "cf-user-tcstring";
const JS_API_OBJECT_NAME = "CookieFirst";
const APP_VERSION = "3.0.0";
const LOGS_PREFIX = "[CF]";
const EVENTS_PREFIX = "cf";
const WITHDRAW_COOKIE = "WITHDRAW";
const NULL = null;
const TRUE = true;
const FALSE = false;
const UNDEFINED = void 0;
const UNDEFINED_STRING = "undefined";
class IntegrationSettings {
  constructor() {
    this.apiKey = "";
    this.dir = NULL;
    this.wildcardDir = NULL;
    this.dataLayer = "dataLayer";
    this.stealthMode = FALSE;
    this.forcedLang = NULL;
    this.silentMode = TRUE;
    this.debugMode = FALSE;
    this.staticFilesUrl = STATIC_URL;
  }
  set(key, value) {
    this[key] = value;
  }
}
const integrationSettings = new IntegrationSettings();
const getModuleTimerLabel = (module) => "".concat(LOGS_PREFIX, " [").concat(module, "]");
const originalLogger = console;
const timedLog = (module, ...args) => {
  const { silentMode } = integrationSettings;
  if (silentMode) {
    return;
  }
  originalLogger.timeLog(getModuleTimerLabel(module), ...args);
  originalLogger.timeEnd(getModuleTimerLabel(module));
  originalLogger.time(getModuleTimerLabel(module));
};
const makeModuleLogger = (module) => {
  originalLogger.time(getModuleTimerLabel(module));
  return (...args) => timedLog(module, ...args);
};
const coreLogger = makeModuleLogger("core");
const bulkLogger = makeModuleLogger("bulk");
const autoblockLogger = makeModuleLogger("autoblock");
const consentLogger = makeModuleLogger("consent");
makeModuleLogger("cookie");
const scriptRel = "modulepreload";
const assetsURL = function(dep, importerUrl) {
  return new URL(dep, importerUrl).href;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    let allSettled2 = function(promises) {
      return Promise.all(
        promises.map(
          (p2) => Promise.resolve(p2).then(
            (value) => ({ status: "fulfilled", value }),
            (reason) => ({ status: "rejected", reason })
          )
        )
      );
    };
    const links = document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector(
      "meta[property=csp-nonce]"
    );
    const cspNonce = (cspNonceMeta == null ? void 0 : cspNonceMeta.nonce) || (cspNonceMeta == null ? void 0 : cspNonceMeta.getAttribute("nonce"));
    promise = allSettled2(
      deps.map((dep) => {
        dep = assetsURL(dep, importerUrl);
        if (dep in seen) return;
        seen[dep] = true;
        const isCss = dep.endsWith(".css");
        const cssSelector = isCss ? '[rel="stylesheet"]' : "";
        const isBaseRelative = !!importerUrl;
        if (isBaseRelative) {
          for (let i2 = links.length - 1; i2 >= 0; i2--) {
            const link2 = links[i2];
            if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
              return;
            }
          }
        } else if (document.querySelector('link[href="'.concat(dep, '"]').concat(cssSelector))) {
          return;
        }
        const link = document.createElement("link");
        link.rel = isCss ? "stylesheet" : scriptRel;
        if (!isCss) {
          link.as = "script";
        }
        link.crossOrigin = "";
        link.href = dep;
        if (cspNonce) {
          link.setAttribute("nonce", cspNonce);
        }
        document.head.appendChild(link);
        if (isCss) {
          return new Promise((res, rej) => {
            link.addEventListener("load", res);
            link.addEventListener(
              "error",
              () => rej(new Error("Unable to preload CSS for ".concat(dep)))
            );
          });
        }
      })
    );
  }
  function handlePreloadError(err) {
    const e2 = new Event("vite:preloadError", {
      cancelable: true
    });
    e2.payload = err;
    window.dispatchEvent(e2);
    if (!e2.defaultPrevented) {
      throw err;
    }
  }
  return promise.then((res) => {
    for (const item of res || []) {
      if (item.status !== "rejected") continue;
      handlePreloadError(item.reason);
    }
    return baseModule().catch(handlePreloadError);
  });
};
const BLOCKED_TYPE_ATTRIBUTE = "javascript/blocked";
const SCRIPT_TYPE_ATTRIBUTE = "application/javascript";
const _DOCUMENT_ = document;
const _WINDOW_ = window;
const _HEAD_ = _DOCUMENT_.head;
function addEventListener(target, event, callback, options) {
  target.addEventListener(event, callback, options);
}
function removeEventListener(target, event, callback, options) {
  target.removeEventListener(
    event,
    callback,
    options
  );
}
const isString = (input) => {
  return typeof input === "string";
};
const isArray = (input) => Array.isArray(input);
const includes = (haystack, needle) => {
  if (isArray(haystack)) {
    return haystack.includes(needle);
  }
  if (isString(haystack)) {
    return haystack.includes(needle);
  }
  return FALSE;
};
function createElement(tagName, options) {
  return _DOCUMENT_.createElement(tagName, options);
}
const stopEvent = (e2, preventDefault = FALSE) => {
  e2.stopPropagation();
  if (preventDefault) {
    e2.preventDefault();
  }
};
const NODE_TYPE_ELEMENT = 1;
const BEFORE_SCRIPT_EXECUTE_EVENT = "beforescriptexecute";
const originalCreateElement = document.createElement.bind(document);
const getScriptPropertyDescriptor = (type) => {
  return Object.getOwnPropertyDescriptor(HTMLScriptElement.prototype, type);
};
const oSrcDescriptor = getScriptPropertyDescriptor("src");
const oTypeDescriptor = getScriptPropertyDescriptor(
  "type"
);
let __instance$1 = NULL;
const getAutoblockInstance = (scriptUrlsOrRegexes = []) => {
  if (__instance$1) {
    return __instance$1;
  }
  const backupScripts = [];
  let blacklist = [];
  let observer = null;
  scriptUrlsOrRegexes.forEach((scriptUrlsOrRegex) => {
    if (isString(scriptUrlsOrRegex)) {
      blacklist.push(new RegExp(scriptUrlsOrRegex));
    } else {
      blacklist.push(scriptUrlsOrRegex);
    }
  });
  const observeMutations = () => {
    observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node.nodeType !== NODE_TYPE_ELEMENT || node.tagName !== "SCRIPT" || !(node instanceof HTMLScriptElement)) {
            continue;
          }
          autoblockLogger("observer check");
          const src = node.src;
          const type = node.type;
          if (isBlocked(src, type)) {
            backupScripts.push([node, node.type]);
            node.type = BLOCKED_TYPE_ATTRIBUTE;
            const beforeScriptExecuteListener = function(event) {
              if (node.getAttribute("type") === BLOCKED_TYPE_ATTRIBUTE) {
                autoblockLogger("prevent execution");
                stopEvent(event, TRUE);
              }
              removeEventListener(
                node,
                BEFORE_SCRIPT_EXECUTE_EVENT,
                beforeScriptExecuteListener
              );
            };
            addEventListener(
              node,
              BEFORE_SCRIPT_EXECUTE_EVENT,
              beforeScriptExecuteListener
            );
            if (node.parentElement) {
              autoblockLogger("remove node");
              node.parentElement.removeChild(node);
            }
          }
        }
      }
    });
    observer.observe(document.documentElement, {
      childList: TRUE,
      subtree: TRUE
    });
  };
  const unblock = (scriptUrlsOrRegexes2) => {
    autoblockLogger("unblock", scriptUrlsOrRegexes2);
    if (blacklist.length) {
      blacklist = blacklist.filter((pattern) => {
        return scriptUrlsOrRegexes2.every((urlOrRegexp) => {
          if (isString(urlOrRegexp)) {
            return !pattern.test(urlOrRegexp);
          } else if (urlOrRegexp instanceof RegExp) {
            return pattern.toString() !== urlOrRegexp.toString();
          }
          return FALSE;
        });
      });
    }
    const tags = document.querySelectorAll(
      'script[type="'.concat(BLOCKED_TYPE_ATTRIBUTE, '"]')
    );
    for (const script of tags) {
      if (notOnBlacklist(script)) {
        backupScripts.push([script, SCRIPT_TYPE_ATTRIBUTE]);
        if (script.parentElement) {
          script.parentElement.removeChild(script);
        }
      }
    }
    let indexOffset = 0;
    [...backupScripts].forEach(([script, type], index) => {
      if (notOnBlacklist(script)) {
        const scriptNode = createElement("script");
        for (let i2 = 0; i2 < script.attributes.length; i2++) {
          const attribute = script.attributes[i2];
          if (!includes(["src", "type"], attribute.name)) {
            scriptNode.setAttribute(attribute.name, script.attributes[i2].value);
          }
        }
        scriptNode.setAttribute("src", script.src);
        scriptNode.setAttribute("type", type || SCRIPT_TYPE_ATTRIBUTE);
        _HEAD_.appendChild(scriptNode);
        backupScripts.splice(index - indexOffset, 1);
        indexOffset++;
      }
    });
    if (!blacklist.length && observer) {
      autoblockLogger("unobserve");
      observer.disconnect();
    }
  };
  const isBlocked = (src, type) => {
    const isBlocked2 = (
      // has src
      !!src && // doesn't have type attribute or type attribute is not javascript/blocked
      (!type || type !== BLOCKED_TYPE_ATTRIBUTE) && // is on the blacklist
      blacklist.some((pattern) => pattern.test(src))
    );
    autoblockLogger("isBlocked", isBlocked2, { src, type });
    return isBlocked2;
  };
  const notOnBlacklist = (script) => {
    const src = script.src;
    const isNotOnBlacklist = !!src && blacklist.every((entry) => !entry.test(src));
    autoblockLogger("notOnBlacklist", isNotOnBlacklist, { src });
    return isNotOnBlacklist;
  };
  const monkeyPatch = () => {
    document.createElement = function(...args) {
      if (!isString(args[0]) || args[0].toLowerCase() !== "script") {
        return originalCreateElement(...args);
      }
      const scriptElt = originalCreateElement(...args);
      try {
        Object.defineProperties(scriptElt, {
          src: {
            ...oSrcDescriptor,
            set(value) {
              autoblockLogger("monkey set src", value);
              if (isBlocked(value, scriptElt.type)) {
                if (oTypeDescriptor.set) {
                  oTypeDescriptor.set.call(this, BLOCKED_TYPE_ATTRIBUTE);
                }
              }
              if (oSrcDescriptor.set) {
                oSrcDescriptor.set.call(this, value);
              }
            }
          },
          type: {
            ...oTypeDescriptor,
            get() {
              let typeValue = null;
              if (oTypeDescriptor.get) {
                typeValue = oTypeDescriptor.get.call(this);
              }
              if (typeValue === BLOCKED_TYPE_ATTRIBUTE || isBlocked(this.src, typeValue)) {
                return NULL;
              }
              return typeValue;
            },
            set(value) {
              autoblockLogger("monkey set type", value);
              const typeValue = isBlocked(scriptElt.src, scriptElt.type) ? BLOCKED_TYPE_ATTRIBUTE : value;
              if (oTypeDescriptor.set) {
                oTypeDescriptor.set.call(this, typeValue);
              }
            }
          }
        });
        scriptElt.setAttribute = function(name, value) {
          if (name === "type" || name === "src") {
            scriptElt[name] = value;
          } else {
            HTMLScriptElement.prototype.setAttribute.call(
              scriptElt,
              name,
              value
            );
          }
        };
      } catch (e2) {
        console.warn(
          LOGS_PREFIX,
          "can't prevent execution of script ",
          scriptElt.src || "[empty]",
          ".\n",
          "Probably someone else monkey patches document.createElement"
        );
      }
      return scriptElt;
    };
  };
  __instance$1 = {
    init: () => {
      autoblockLogger("init");
      monkeyPatch();
      observeMutations();
    },
    unblock
  };
  return __instance$1;
};
const NECESSARY = "necessary";
const PERFORMANCE = "performance";
const FUNCTIONAL = "functional";
const ADVERTISING = "advertising";
const UNCLASSIFIED = "unclassified";
const IAB_PURPOSES = "iab_purposes";
const categories = [
  NECESSARY,
  PERFORMANCE,
  FUNCTIONAL,
  ADVERTISING
];
const EMPTY_CONSENT = Object.freeze({});
const EMPTY_CATEGORY_CONSENT = Object.freeze({
  [NECESSARY]: TRUE,
  [PERFORMANCE]: FALSE,
  [FUNCTIONAL]: FALSE,
  [ADVERTISING]: FALSE
});
const CATEGORIES$1 = categories.join(", ").toLowerCase();
const MISSING_API_KEY = LOGS_PREFIX + " Missing API key.";
const PROBABLY_MISSING_API_KEY = LOGS_PREFIX + " Failed to load configs, check API key";
const CANT_OPEN_PANEL_STEALTH_MODE = LOGS_PREFIX + " Can't toggle panel in stealth mode";
const NEW_CONSENT_INVALID_TYPE = LOGS_PREFIX + " new consent must be an object";
const INVALID_CATEGORY = LOGS_PREFIX + " Unrecognized category, not one of: " + CATEGORIES$1;
const INVALID_SERVICE = LOGS_PREFIX + " Unrecognized service key.";
const UNKNOWN_BANNER_TYPE = LOGS_PREFIX + " Unrecognized banner type.";
const CONTEXT_OUTSIDE_PROVIDER = LOGS_PREFIX + " useContext outside provider";
const COOKIE_LOADING_FAILED = LOGS_PREFIX + " Failed to load cookies";
const BULK_SEND_FAILED = LOGS_PREFIX + " Failed to send bulk consent message";
const MISSING_GVL = LOGS_PREFIX + " Missing Global Vendor List. There is a chance it was still loading. You can check if it exist using: publicAPI > TCFgvl";
const MISSING_GATP = LOGS_PREFIX + " Missing Google Ad Technology Providers List (GATP). There is a chance it was still loading. You can check if it exist using: publicAPI > TCFgatp";
const MISSING_IAB_LIB_NAME = "".concat(LOGS_PREFIX, " TCF category with switch is missing IAB LIB name");
const MISSING_IAB_LIB_LEGINT_NAME = "".concat(LOGS_PREFIX, " TCF category with switch is missing IAB LIB legitimate interest name");
const WRONG_TCF_MULTI_CATEGORY_DATA = "".concat(LOGS_PREFIX, " Couldn't update categories. Wrong structure of passed data. To update multiple categories expected structure is this: [[categoryName, id], [categoryName, id]]");
const WRONG_TCF_SINGLE_CATEGORY_DATA = "".concat(LOGS_PREFIX, " Couldn't update category. Wrong structure of passed data. To update single category expected structure is this: [categoryName, id]");
class ApiError extends Error {
  constructor(msg, body) {
    super(msg);
    this.body = body;
  }
}
const createPromise = (executor) => {
  return new Promise(executor);
};
function fetchWrapper(url, config = {}) {
  return createPromise((resolve, reject) => {
    const abort = (msg, body = {}) => {
      reject(
        new ApiError("".concat(LOGS_PREFIX, " Request to ").concat(url, " failed: ").concat(msg), body)
      );
    };
    fetch(url, config).then(
      (res) => {
        if (!res.ok) {
          if (res.status) {
            if (res.status === 422) {
              res.json().then((body) => {
                abort(res.status, body);
              }).catch(() => abort(res.status));
              return;
            }
            abort(res.status);
            return;
          }
          abort("");
          return;
        }
        const headers = {};
        res.headers.forEach((value, key) => {
          headers[key.toLowerCase()] = value;
        });
        resolve([res, headers]);
      },
      (e2) => {
        abort(e2.message);
      }
    );
  });
}
function getJson(url, config = {}) {
  return createPromise((resolve, reject) => {
    fetchWrapper(url, {
      ...config,
      headers: { ...config.headers || {}, Accept: "application/json" }
    }).then(([res, headers]) => {
      res.json().then((body) => resolve([body, headers]), reject);
    }, reject);
  });
}
const trim = (string, char = "") => {
  let trimmed = (string || "").toString().trim();
  if (char) {
    trimmed = trimmed.replace(new RegExp("^".concat(char, "+")), "").replace(new RegExp("".concat(char, "+$")), "");
  }
  return trimmed;
};
const getStaticFileUrl = (filename, version = NULL) => {
  const filePath = trim(filename, "/").replace("//", "/");
  return "".concat(STATIC_URL, "/").concat(filePath).concat(version ? "?v=".concat(version) : "");
};
const report = (...args) => {
  args.forEach(console.error);
};
const getWildcardDomain = () => {
  const domain = _WINDOW_.location.hostname.replace(/^www\./, "");
  const domainParts = domain.split(".");
  const wildcardDomain = domainParts.map((part, index) => {
    if (index === 0 && domainParts.length > 2) {
      return "*";
    }
    return part;
  }).filter(Boolean).join(".");
  return wildcardDomain;
};
const FILENAME = "version.json";
const EMPTY_RESPONSE = [NULL, NULL, NULL];
const getConfigFilesVersion = (preloadedSettings) => {
  const { dir, wildcardDir } = integrationSettings;
  const now = Date.now().toString();
  const URL2 = getStaticFileUrl("".concat(dir, "/").concat(FILENAME), now);
  const WILDCARD_URL = getStaticFileUrl("".concat(wildcardDir, "/").concat(FILENAME), now);
  return createPromise((resolve) => {
    const getVersionJson = (url, dir2) => {
      getJson(url).then(
        (result) => resolve(prepareResponse(dir2 || "", result)),
        (e2) => {
          report(e2);
          resolve(EMPTY_RESPONSE);
        }
      );
    };
    if (!dir && !wildcardDir) {
      return resolve(EMPTY_RESPONSE);
    }
    if (preloadedSettings && preloadedSettings.widgetConfig) {
      const widgetConfig = preloadedSettings.widgetConfig;
      const wildcardDomain = getWildcardDomain();
      if (widgetConfig.isUsingWildcard && widgetConfig.wildcardUrls.includes(wildcardDomain)) {
        getVersionJson(WILDCARD_URL, wildcardDir);
      } else {
        getVersionJson(URL2, dir);
      }
    } else {
      getJson(URL2).then(
        (result) => {
          if (isArray(result)) {
            resolve(prepareResponse(dir || "", result));
          } else {
            throw new Error("");
          }
        },
        (e2) => {
          report(e2);
          if (!wildcardDir || wildcardDir === dir) {
            return resolve(EMPTY_RESPONSE);
          }
          getVersionJson(WILDCARD_URL, wildcardDir);
        }
      );
    }
  });
};
const prepareResponse = (dir, fetchResult) => {
  const [res, headers] = fetchResult;
  const version = res.v || NULL;
  const country = (headers["visitor-location"] || "").toUpperCase();
  const gpcValue = headers["Sec-GPC"] || "";
  integrationSettings.dir = dir;
  return [version, country || NULL, gpcValue || null];
};
const isObject = (input) => {
  return !!input && typeof input === "object";
};
const getInitializationSettings = () => {
  const settings = window.__COOKIE_BANNER_SETTINGS__;
  if (!isObject(settings) || isArray(settings)) {
    return NULL;
  }
  return settings;
};
const getConfigFilesDirectory = (apiKey) => {
  if (!apiKey) {
    return [NULL, NULL];
  }
  const domain = _WINDOW_.location.hostname.replace(/^www\./, "");
  const wildcardDomain = getWildcardDomain();
  return ["sites/".concat(domain, "-").concat(apiKey), "sites/".concat(wildcardDomain, "-").concat(apiKey)];
};
const TEST_STRING = "__storage_test__";
const getLocalStorage = () => {
  try {
    const storage = window.localStorage;
    if (!storage) {
      return null;
    }
    storage.setItem(TEST_STRING, TEST_STRING);
    storage.removeItem(TEST_STRING);
    return storage;
  } catch (e2) {
    return null;
  }
};
function getLocalStorageItem(key, fallback) {
  const storage = getLocalStorage();
  try {
    if (!storage) {
      return fallback;
    }
    const value = storage.getItem(key);
    if (value === NULL) {
      return fallback;
    }
    try {
      return JSON.parse(value);
    } catch (e2) {
      report(e2);
      return fallback;
    }
  } catch (e2) {
    report(e2);
    return fallback;
  }
}
const objectKeys = (o2) => {
  return Object.keys(o2);
};
const API_KEY_ATTRIBUTE = "cookiefirst-key";
const getTagAttribute = (tag, attr) => {
  if (includes(tag.src, "".concat(attr, "="))) {
    return new URL(tag.src).searchParams.get(attr) || NULL;
  }
  const value = tag.getAttribute("data-".concat(attr));
  if (value === "") {
    return "";
  }
  return value || NULL;
};
const getBooleanAttribute = (tag, attr) => {
  const value = getTagAttribute(tag, attr);
  if (value === "") {
    return TRUE;
  }
  return includes(["false", "0"], value) ? FALSE : !!value;
};
const getIntegrationSettings = (preloadedSettings) => {
  if (preloadedSettings) {
    for (const key of objectKeys(preloadedSettings)) {
      const val = preloadedSettings[key];
      if (typeof val !== UNDEFINED_STRING) {
        integrationSettings.set(key, val);
      }
    }
    if (integrationSettings.apiKey) {
      const [dir2, wildcardDir2] = getConfigFilesDirectory(integrationSettings.apiKey);
      integrationSettings.dir = dir2;
      integrationSettings.wildcardDir = wildcardDir2;
    }
  }
  const debugStorageKey = GENERIC_PREFIX + "-debug";
  integrationSettings.debugMode = getLocalStorageItem(debugStorageKey, false) || (preloadedSettings && preloadedSettings.debugMode) === true;
  if (integrationSettings.debugMode) {
    console.info("debugMode: ".concat(integrationSettings.debugMode, " "));
    integrationSettings.silentMode = FALSE;
  }
  let tag = NULL;
  {
    if (!tag) {
      tag = _DOCUMENT_.querySelector(
        'script[src*="'.concat(API_KEY_ATTRIBUTE, '"],script[data-').concat(API_KEY_ATTRIBUTE, "]")
      );
    }
  }
  if (!tag) {
    return;
  }
  if (preloadedSettings && objectKeys(preloadedSettings).length > 0) {
    return;
  }
  integrationSettings.apiKey = getTagAttribute(tag, API_KEY_ATTRIBUTE) || "";
  integrationSettings.apiKey = trim(integrationSettings.apiKey || "");
  integrationSettings.dataLayer = getTagAttribute(tag, "datalayer") || integrationSettings.dataLayer;
  if (integrationSettings.dataLayer === "true") {
    integrationSettings.dataLayer = "dataLayer";
  }
  integrationSettings.stealthMode = getBooleanAttribute(tag, "stealth-mode");
  integrationSettings.forcedLang = getTagAttribute(tag, "language");
  const [dir, wildcardDir] = getConfigFilesDirectory(integrationSettings.apiKey);
  integrationSettings.dir = dir;
  integrationSettings.wildcardDir = wildcardDir;
  let silentMode = TRUE;
  const silentModeAttr = "silent-mode";
  if (integrationSettings.debugMode) {
    silentMode = FALSE;
  } else if (getTagAttribute(tag, silentModeAttr) !== null) {
    silentMode = getBooleanAttribute(tag, silentModeAttr);
  }
  integrationSettings.silentMode = silentMode;
};
const getCookie = (cookieName) => {
  const name = cookieName + "=";
  try {
    const cookieArray = _DOCUMENT_.cookie.split(";");
    for (let i2 = 0; i2 < cookieArray.length; i2++) {
      let c2 = cookieArray[i2];
      while (c2.charAt(0) === " ") {
        c2 = c2.substring(1);
      }
      if (c2.indexOf(name) === 0) {
        return decodeURIComponent(c2.substring(name.length, c2.length));
      }
    }
  } catch (e2) {
    report(e2);
    return NULL;
  }
  return NULL;
};
const saveLocalStorageItem = (key, value) => {
  const storage = getLocalStorage();
  if (!storage) {
    return;
  }
  storage.setItem(key, JSON.stringify(value));
};
const loadLocalVisitorId = () => {
  let id = getLocalStorageItem(VISITOR_ID_COOKIE, null);
  if (!id) {
    id = getCookie(VISITOR_ID_COOKIE) || NULL;
    saveLocalStorageItem(VISITOR_ID_COOKIE, id);
  }
  return id;
};
const WIDGET_TYPE_BOX = "box";
const WIDGET_TYPE_BANNER = "banner";
const BOX_WIDGET_LOCATION_TOP_LEFT = "top-left";
const BOX_WIDGET_LOCATION_TOP_RIGHT = "top-right";
const BOX_WIDGET_LOCATION_BOTTOM_LEFT = "bottom-left";
const BOX_WIDGET_LOCATION_BOTTOM_RIGHT = "bottom-right";
const BOX_WIDGET_LOCATION_CENTER_CENTER = "center-center";
const BOX_WIDGET_LOCATIONS = [
  BOX_WIDGET_LOCATION_TOP_LEFT,
  BOX_WIDGET_LOCATION_TOP_RIGHT,
  BOX_WIDGET_LOCATION_BOTTOM_LEFT,
  BOX_WIDGET_LOCATION_BOTTOM_RIGHT,
  BOX_WIDGET_LOCATION_CENTER_CENTER
];
const BANNER_WIDGET_LOCATION_TOP = "top";
const BANNER_WIDGET_LOCATION_BOTTOM = "bottom";
const WidgetLocations = {
  [WIDGET_TYPE_BOX]: BOX_WIDGET_LOCATIONS,
  [WIDGET_TYPE_BANNER]: [
    BANNER_WIDGET_LOCATION_TOP,
    BANNER_WIDGET_LOCATION_BOTTOM
  ]
};
const PANEL_SETTINGS_TAB = "settings";
const PANEL_COOKIES_TAB = "cookies";
const PANEL_POLICY_TAB = "policy";
const PANEL_DATA_TAB = "data";
var ConsentTab = /* @__PURE__ */ ((ConsentTab2) => {
  ConsentTab2["CATEGORIES"] = "categories";
  ConsentTab2["VENDORS"] = "vendors";
  return ConsentTab2;
})(ConsentTab || {});
const CONTINUE_BTN_STYLE_X_BTN = "x_sign";
const CONTINUE_BTN_STYLE_X_BTN_SECONDARY = "x_sign_secondary";
const CONTINUE_BTN_STYLE_X_ONLY = "x_icon_only";
const CONTINUE_BTN_STYLE_BUTTON_PRIMARY = "button";
const CONTINUE_BTN_STYLE_BUTTON_SECONDARY = "button_secondary";
const CONTINUE_BTN_STYLE_LINK = "link";
const CONTINUE_BTN_STYLE_DISABLED = "disabled";
const CONSENT_TYPE_CATEGORY = "category";
const CONSENT_TYPE_GRANULAR = "granular";
const CONSENT_POLICY_CATEGORY_OPTIN = 1;
const CONSENT_POLICY_GRANULAR_OPTIN = 2;
const CONSENT_ACTION_STORE = "store";
const CONSENT_ACTION_UPDATE = "update";
const CONSENT_ACTION_WITHDRAW = "withdraw";
const CONSENT_ACTION_RESET = "reset";
const EU_COUNTRIES = [
  "AT",
  // Austria
  "BE",
  // Belgium
  "BG",
  // Bulgaria
  "HR",
  // Croatia
  "CY",
  // Cyprus
  "CZ",
  // Czech Republic
  "DK",
  // Denmark
  "EE",
  // Estonia
  "FI",
  // Finland
  "FR",
  // France
  "DE",
  // Germany
  "GR",
  // Greece
  "HU",
  // Hungary
  "IE",
  // Ireland
  "IT",
  // Italy
  "LV",
  // Latvia
  "LT",
  // Lithuania
  "LU",
  // Luxembourg
  "MT",
  // Malta
  "NL",
  // the Netherlands
  "PL",
  // Poland
  "PT",
  // Portugal
  "RO",
  // Romania
  "SK",
  // Slovakia
  "SI",
  // Slovenia
  "ES",
  // Spain
  "SE"
  // Sweden
];
const DEFAULT_NON_EU_BANNER_COUNTRIES = [
  "IS",
  // Iceland
  "NO",
  // Norway
  "CH",
  // Switzerland
  "GB"
  // United Kingdom
];
const REGION_CHECK_COUNTRIES = [
  "US",
  // United States
  "CA"
  // Canada
];
const SCRIPT_INTEGRATION_METHOD_BANNER_LOAD = "banner_load";
const SCRIPT_INTEGRATION_METHOD_EDIT_CURRENT = "edit";
const SCRIPT_INTEGRATION_METHOD_GTM_LOAD = "gtm_load";
const SCRIPT_INTEGRATION_METHOD_AUTOBLOCK = "autoblock";
const SCRIPT_INTEGRATION_METHOD_MANUAL = "manual";
const DAY_IN_SECONDS = 24 * 60 * 60;
const YEAR_IN_SECONDS = 365 * DAY_IN_SECONDS;
const getByPath = (object, path, fallback = NULL) => {
  let currentObject = object;
  const pathParts = path.split(".");
  for (let i2 = 0; i2 < pathParts.length; i2++) {
    const key = pathParts[i2];
    const nextObject = currentObject[key];
    if (i2 === pathParts.length - 1) {
      return typeof nextObject === "undefined" ? fallback : nextObject;
    }
    if (!nextObject || !isObject(nextObject)) {
      return fallback;
    }
    currentObject = nextObject;
  }
  return fallback;
};
const DEFAULT_NON_EU_BANNER_REGIONS = [
  "CA",
  // California
  "QC"
  // Quebec
];
const createWidgetConfig = (config) => {
  const _config = isObject(config) ? config : {};
  const get = (path, fallback = NULL) => getByPath(_config, path, fallback);
  const getArray = (path, fallback = []) => {
    const list = get(path) || fallback;
    return isArray(list) ? list : fallback;
  };
  const getBool = (path) => !!get(path, FALSE);
  const consentPolicy = get("consentPolicy") || CONSENT_POLICY_CATEGORY_OPTIN;
  const isGranularPolicy = consentPolicy === CONSENT_POLICY_GRANULAR_OPTIN;
  const scripts = getArray(
    "scripts"
  ).map((script) => ({
    ...script,
    integration: script.integration || SCRIPT_INTEGRATION_METHOD_BANNER_LOAD
  }));
  const widgetConfig = {
    lastConsentReset: get("lastConsentReset", NULL) || NULL,
    additionalLink: get("additionalLink", "") || "",
    type: get("widget.type", WIDGET_TYPE_BANNER) || WIDGET_TYPE_BANNER,
    buttonsOrder: getArray("widget.buttonsOrder"),
    version: get("version"),
    get location() {
      const loc = get("widget.location");
      const locations = WidgetLocations[this.type];
      return includes(locations, loc) ? loc : locations[0];
    },
    get bulkConsent() {
      const bulkConfig = get("bulkConsent") || {};
      return {
        id: getByPath(bulkConfig, "id"),
        group: getByPath(bulkConfig, "group", ""),
        domains: getByPath(bulkConfig, "domains", []) || [],
        iframeUrl: getByPath(bulkConfig, "iframeUrl"),
        baseDomain: getByPath(bulkConfig, "baseDomain")
      };
    },
    consentPolicy,
    isGranularPolicy,
    privacyPolicyUrl: get("privacyPolicyUrl"),
    showPrivacyUrlInBanner: getBool("showPrivacyUrlInBanner"),
    hideOutsideEU: getBool("hideOutsideEU"),
    showSuffixOnFirstLayer: getBool("showSuffixOnFirstLayer"),
    showNumberOfScriptsInBanner: getBool("showNumberOfScriptsInBanner"),
    loadCssWithLink: getBool("loadCssWithLink"),
    get tabsOnSettingsPanel() {
      const key = "tabsOnSettingsPanel";
      const tabsConfig = getArray(key);
      let tabs = [];
      if (!tabsConfig) {
        tabs = [
          PANEL_SETTINGS_TAB,
          PANEL_COOKIES_TAB,
          get("hideCookiePolicy") ? "" : PANEL_POLICY_TAB
        ];
      } else {
        tabs = tabsConfig;
      }
      if (!includes(tabs, PANEL_SETTINGS_TAB)) {
        tabs.unshift(PANEL_SETTINGS_TAB);
      }
      return tabs.filter((t2) => !!t2 && isString(t2));
    },
    languages: getArray("languages"),
    showLanguageSwitcher: getBool("showLanguageSwitcher"),
    banner_continue_button_type: get("banner_continue_button_type") || CONTINUE_BTN_STYLE_DISABLED,
    baseConsent: get("baseConsent"),
    /**
     * Pre-consent is the consent object used before any consent is given
     */
    preConsent: { ...EMPTY_CATEGORY_CONSENT, ...get("preConsent") || {} },
    scripts,
    // from all available categories
    cookieCategories: categories.filter((cat) => {
      const configuredCats = getArray("cookieCategories");
      if (!includes(configuredCats, cat)) {
        return FALSE;
      }
      if (isGranularPolicy) {
        return !!scripts.find((script) => includes(script.categories, cat));
      }
      return TRUE;
    }),
    whitelabel: {
      banner: getBool("whitelabel.banner"),
      panel: getBool("whitelabel.panel"),
      logoUrl: get("whitelabel.logoUrl", NULL),
      linkUrl: get("whitelabel.linkUrl", NULL)
    },
    loadInlineScripts: getBool("loadInlineScripts"),
    okAcceptsAll: getBool("okAcceptsAll"),
    googleConsentModeEnabled: getBool("googleConsentModeEnabled"),
    disableGCMUpdateEvents: getBool("disableGCMUpdateEvents"),
    microsoftConsentModeEnabled: getBool("microsoftConsentModeEnabled"),
    microsoftClarityEnabled: getBool("microsoftClarityEnabled"),
    denyBtn: get("denyBtn", "visible"),
    denyBtnSecond: get("denyBtnSecond") || get("denyBtn", "visible"),
    get bannerToggles() {
      const showToggles = getBool("bannerToggles");
      return showToggles && this.cookieCategories.length > 1;
    },
    backdropEnabled: getBool("backdropEnabled"),
    backdropColor: get("backdropColor"),
    floatingBtn: {
      // if floatingBtn.isEnabled is not set, use enableFloatingButton as a fallback
      isEnabled: getBool("floatingBtn.isEnabled"),
      icon: get("floatingBtn.icon"),
      location: get("floatingBtn.location")
    },
    focusBannerFirst: getBool("focusBannerFirst"),
    fontFamily: get("widget.fontFamily", ""),
    widget: get("widget", {
      type: WIDGET_TYPE_BANNER,
      location: BANNER_WIDGET_LOCATION_BOTTOM,
      fontFamily: "",
      buttonsOrder: [],
      width: ""
    }),
    reconsent: {
      after: get("reconsent.after"),
      check: get("reconsent.check"),
      categories: getArray("reconsent.categories")
    },
    get branding() {
      const hasBrandingConfig = !!get("branding");
      return {
        panel: {
          show: hasBrandingConfig ? get("branding.panel.show", TRUE) : !this.whitelabel.panel,
          url: get("branding.panel.url"),
          logo: get("branding.panel.logo"),
          label: get("branding.panel.label"),
          showLabel: getBool("branding.panel.showLabel")
        },
        banner: {
          show: hasBrandingConfig ? get("branding.banner.show", TRUE) : !this.whitelabel.banner,
          url: get("branding.banner.url"),
          logo: get("branding.banner.logo"),
          label: get("branding.banner.label"),
          showLabel: getBool("branding.banner.showLabel")
        }
      };
    },
    increaseLocationPrecision: getBool("increaseLocationPrecision"),
    /**
     * consentLifetime - number of seconds after which consent is considered expired
     */
    get consentLifetime() {
      const lifetime = get("consentLifetime");
      if (!lifetime || typeof lifetime !== "number") {
        return YEAR_IN_SECONDS;
      }
      return lifetime;
    },
    consentType: isGranularPolicy ? CONSENT_TYPE_GRANULAR : CONSENT_TYPE_CATEGORY,
    bannerNonEuCountries: getArray(
      "bannerNonEuCountries",
      DEFAULT_NON_EU_BANNER_COUNTRIES
    ),
    tcfEnabled: get("tcfEnabled", FALSE),
    tcfLanguages: getArray("tcfLanguages"),
    tcfCountry: get("tcfCountry", ""),
    tcfVendors: get("tcfVendors", []),
    tcfGdprApplies: get("tcfGdprApplies", FALSE),
    acEnabled: get("acEnabled", FALSE),
    acVendors: get("acVendors", []),
    gpcAndDntEnabled: getBool("gpcAndDntEnabled"),
    bannerNonEuRegions: getArray(
      "bannerNonEuRegions",
      DEFAULT_NON_EU_BANNER_REGIONS
    ),
    isUsingWildcard: get("isUsingWildcard", FALSE),
    wildcardUrls: get("wildcardUrls", [])
  };
  return widgetConfig;
};
const loadSiteConfig = (version, preloadConfig) => {
  const { dir } = integrationSettings;
  return createPromise((resolve, reject) => {
    if (isObject(preloadConfig)) {
      coreLogger("preloaded config");
      const config = createWidgetConfig({
        ...preloadConfig,
        version
      });
      return resolve(Object.freeze(config));
    }
    const url = getStaticFileUrl("".concat(dir, "/config.json"), version);
    coreLogger("load config from ".concat(url));
    fetchWrapper("https://edge.cookiefirst.com/im-using-banner-js.json");
    console.error(
      "[CookieFirst] WARNING: Loading CookieFirst banner via banner.js has been deprecated and will be removed soon. Please use consent.js instead. You can find more information about it here: https://support.cookiefirst.com/hc/en-us/articles/29102644905245-Depreciation-of-Banner-js"
    );
    getJson(url).then(
      ([res]) => {
        const config = createWidgetConfig({ ...res, version });
        resolve(Object.freeze(config));
      },
      (e2) => {
        report(e2);
        reject(e2);
      }
    );
  });
};
const deleteLocalStorageItem = (key) => {
  const storage = getLocalStorage();
  if (!key || !storage) {
    return;
  }
  storage.removeItem(key);
};
const NUMBER_0 = 0, NUMBER_1 = 1;
const getTimestamp = () => Math.round(Date.now() / 1e3);
const calculateCookieExpiration = (expiration) => {
  const date = /* @__PURE__ */ new Date();
  date.setTime(expiration * 1e3);
  return date.toUTCString();
};
const saveLocalCookie = (name, value, expiration = null, bulkConfig) => {
  const cookieExpiration = expiration !== null ? expiration : getTimestamp() + YEAR_IN_SECONDS;
  const cookie = {
    [name]: encodeURIComponent(value),
    expires: calculateCookieExpiration(cookieExpiration),
    path: "/",
    SameSite: "Lax",
    secure: window.location.protocol === "https:"
  };
  if (bulkConfig && bulkConfig.id && bulkConfig.baseDomain) {
    cookie.domain = bulkConfig.baseDomain;
  }
  const cookieString = objectKeys(cookie).map((key) => {
    const value2 = cookie[key];
    if (typeof value2 === "boolean") {
      return value2 ? key : NULL;
    }
    return "".concat(key, "=").concat(value2);
  }, []).filter(Boolean).join("; ");
  _DOCUMENT_.cookie = cookieString;
  return cookieString;
};
const deleteLocalCookie = (cookieName, bulkConfig) => {
  return saveLocalCookie(cookieName, "", NUMBER_0, bulkConfig);
};
const deleteLocalConsent = (bulkConfig = NULL) => {
  deleteLocalCookie(CONSENT_COOKIE, bulkConfig);
  deleteLocalStorageItem(CONSENT_COOKIE);
};
const randomString = () => {
  return Math.random().toString();
};
const getElementById = (id) => {
  return _DOCUMENT_.getElementById(id);
};
const IFRAME_ID = "bulk-consent";
const TIMEOUT = 9;
const createIframe = (iframeUrl, loadCallback) => {
  const iframe = createElement("iframe");
  iframe.id = IFRAME_ID;
  iframe.setAttribute("tabindex", "-1");
  iframe.setAttribute("role", "presentation");
  iframe.setAttribute("aria-hidden", "true");
  iframe.setAttribute("title", "Bulk Consent");
  iframe.style.position = "absolute";
  iframe.style.width = "1px";
  iframe.style.height = "1px";
  iframe.style.top = "-9999px";
  iframe.onload = loadCallback;
  iframe.src = iframeUrl;
  _DOCUMENT_.head.appendChild(iframe);
  return iframe;
};
const getIframe = (id = "") => {
  const elem = getElementById(id);
  if (!elem || elem.nodeName !== "IFRAME") {
    return NULL;
  }
  return elem;
};
let __instance = null;
const getBulkConsentManager = (iframeUrl) => {
  if (__instance) {
    return __instance;
  }
  let iframe = getIframe();
  let iframeLoaded = FALSE;
  const handledMessages = [];
  if (iframe) {
    iframeLoaded = TRUE;
  }
  __instance = {
    sendMessage(message) {
      return createPromise((resolve, reject) => {
        let timeoutId = NULL;
        const message_id = "bulk-msg-".concat(randomString());
        if (!message) {
          reject(new Error(BULK_SEND_FAILED));
          return;
        }
        if (!iframe) {
          if (!iframeUrl) {
            reject(new Error(BULK_SEND_FAILED));
            return;
          }
          iframe = createIframe(iframeUrl, () => {
            bulkLogger("iframe initialized");
            iframeLoaded = TRUE;
          });
        }
        const handleResponse = (res) => {
          if (!iframe || res.source !== iframe.contentWindow) {
            bulkLogger("ignoring msg from another window", res);
            return;
          }
          try {
            const key = res.message ? "message" : "data";
            let data = res[key];
            if (!data) {
              return;
            }
            if (isString(data)) {
              data = JSON.parse(data);
            }
            if (!data.message_id || // weird message, not sure what to do with it
            data.message_id !== message_id || // response for some other message than the one handled here
            includes(handledMessages, data.message_id)) {
              bulkLogger("ignoring msg:", data);
              return;
            }
            bulkLogger("received response");
            removeEventListener(_WINDOW_, "message", handleResponse, FALSE);
            handledMessages.push(message_id);
            if (timeoutId) {
              clearTimeout(timeoutId);
            }
            if (!data.value) {
              return resolve(NULL);
            }
            if (isString(data.value)) {
              try {
                const val = JSON.parse(data.value);
                return resolve(val);
              } catch (e2) {
                return resolve(NULL);
              }
            }
            return resolve(data.value);
          } catch (e2) {
            bulkLogger(new Error("failed to read response"));
            report(e2);
            return reject();
          }
        };
        if (!iframe || !iframe.contentWindow) {
          bulkLogger("failed to initialize.");
          return reject();
        }
        try {
          addEventListener(_WINDOW_, "message", handleResponse, FALSE);
          const payload = JSON.stringify({ ...message, message_id });
          if (iframeLoaded) {
            iframe.contentWindow.postMessage(payload, "*");
            bulkLogger("send message");
          } else {
            bulkLogger("send message when ready");
            iframe.onload = () => {
              bulkLogger("iframe initialized");
              const frame = iframe;
              if (frame.contentWindow) {
                iframeLoaded = TRUE;
                frame.contentWindow.postMessage(payload, "*");
                bulkLogger("message sent");
              }
            };
          }
          timeoutId = setTimeout(() => {
            bulkLogger("reached timeout of ".concat(TIMEOUT, "s"));
            resolve(NULL);
          }, TIMEOUT * 1e3);
        } catch (e2) {
          bulkLogger("encountered an error", e2);
          if (timeoutId) {
            clearTimeout(timeoutId);
          }
          reject(e2);
          return;
        }
      });
    }
  };
  return __instance;
};
const loadBulkConsent = (bulkConfig) => {
  return createPromise((resolve) => {
    const { id, iframeUrl } = bulkConfig;
    const msg = { group_id: id, action: "get" };
    getBulkConsentManager(iframeUrl).sendMessage(msg).then(
      (res) => {
        if (!res) {
          return resolve(NULL);
        }
        const timestamp = parseInt(res.timestamp || "0");
        resolve({
          action: isString(res.action) ? res.action || CONSENT_ACTION_STORE : CONSENT_ACTION_STORE,
          consent: res.consent || {},
          timestamp: isNaN(timestamp) ? 0 : timestamp,
          type: res.type || CONSENT_TYPE_CATEGORY
        });
      },
      () => resolve(NULL)
    );
  });
};
const loadLocalConsentCookie = () => {
  const cookie = getCookie(CONSENT_COOKIE);
  if (!cookie) {
    return NULL;
  }
  if (cookie === WITHDRAW_COOKIE) {
    return { value: cookie };
  }
  try {
    const decoded = JSON.parse(decodeURIComponent(cookie));
    return decoded;
  } catch (e2) {
    consentLogger("Failed to decode local consent cookie:");
    report(e2);
    return NULL;
  }
};
const formatStoredValue$1 = (storedValue) => {
  const consent = objectKeys(storedValue).reduce(
    (consentObj, key) => {
      if (includes(["version", "timestamp", "type"], key)) {
        return consentObj;
      }
      return { ...consentObj, [key]: !!storedValue[key] };
    },
    {}
  );
  let type = CONSENT_TYPE_CATEGORY;
  if (includes(
    [CONSENT_TYPE_CATEGORY, CONSENT_TYPE_GRANULAR],
    storedValue.type || ""
  )) {
    type = storedValue.type;
  }
  return [
    { ...consent, version: storedValue.version },
    parseInt(storedValue.timestamp || "0"),
    // use numeric timestamp here,
    type
  ];
};
const loadLocalConsent = () => {
  const cookie = loadLocalConsentCookie();
  if (cookie) {
    if (cookie.value === WITHDRAW_COOKIE) {
      deleteLocalStorageItem(CONSENT_COOKIE);
      return NULL;
    }
    return formatStoredValue$1(cookie);
  }
  const localStorageItem = getLocalStorageItem(
    CONSENT_COOKIE,
    NULL
  );
  if (localStorageItem) {
    return formatStoredValue$1(localStorageItem);
  }
  return NULL;
};
const loadConsentFromStorage = (widgetConfig) => {
  return createPromise(
    (resolve) => {
      const bulkConfig = widgetConfig.bulkConsent;
      if (!bulkConfig.id) {
        return resolve(loadLocalConsent());
      }
      loadBulkConsent(bulkConfig).then(
        (res) => {
          if (res) {
            const {
              action = CONSENT_ACTION_STORE,
              consent = {},
              type = CONSENT_TYPE_CATEGORY,
              timestamp = getTimestamp()
            } = res;
            if (action === CONSENT_ACTION_RESET || action === CONSENT_ACTION_WITHDRAW) {
              bulkLogger("detected [" + action + "] as last action");
              deleteLocalConsent();
              return resolve(NULL);
            }
            if (consent) {
              bulkLogger("loaded");
              return resolve([consent, timestamp, type]);
            }
          }
          bulkLogger("no consent saved, trying local");
          return resolve(loadLocalConsent());
        },
        () => resolve(NULL)
      );
    }
  );
};
const deleteBulkConsent = (bulkConfig) => {
  const { id, iframeUrl } = bulkConfig;
  return createPromise((resolve) => {
    const msg = {
      group_id: id,
      action: "remove"
    };
    const manager = getBulkConsentManager(iframeUrl);
    manager.sendMessage(msg).then(
      (res) => resolve(res),
      (e2) => {
        bulkLogger("Failed to delete bulk consent");
        report(e2);
        resolve(NULL);
      }
    );
  });
};
const deleteConsent = (bulkConfig) => {
  return createPromise((resolve) => {
    deleteLocalConsent();
    if (bulkConfig.id) {
      deleteBulkConsent(bulkConfig).then(resolve);
    } else {
      resolve();
    }
  });
};
const hasConsentExpired = (consentTimestamp, consentLifetime = YEAR_IN_SECONDS) => {
  if (typeof consentTimestamp !== "number") {
    return FALSE;
  }
  const now = getTimestamp();
  return now - consentTimestamp >= consentLifetime;
};
const isServiceAccepted = (service, consent, consentPolicy) => {
  const { consent_key, categories: categories2 } = service;
  if (includes(categories2, NECESSARY)) {
    return TRUE;
  }
  if (consentPolicy === CONSENT_POLICY_GRANULAR_OPTIN) {
    return !!consent[consent_key];
  } else {
    return categories2.every((cat) => !!consent[cat]);
  }
};
const makeGranularConsentObject = (consent, widgetConfig) => {
  const granularConsent = widgetConfig.scripts.reduce(
    (aggregate, script) => {
      return {
        ...aggregate,
        [script.consent_key]: isServiceAccepted(
          script,
          consent,
          widgetConfig.consentPolicy
        )
      };
    },
    { ...EMPTY_CONSENT }
  );
  return granularConsent;
};
const saveBulkConsent = (bulkConfig, payload) => {
  return createPromise((resolve) => {
    const { id, iframeUrl } = bulkConfig;
    const msg = {
      group_id: id,
      action: "set",
      consent: payload
    };
    const manager = getBulkConsentManager(iframeUrl);
    manager.sendMessage(msg).then(
      () => resolve(),
      (e2) => {
        bulkLogger("Failed to save bulk consent", { error: e2 });
        resolve();
      }
    );
  });
};
const resetConsent = (widgetConfig) => {
  return createPromise((resolve) => {
    const { bulkConsent, consentType } = widgetConfig;
    deleteLocalConsent();
    if (bulkConsent.id) {
      saveBulkConsent(bulkConsent, {
        action: CONSENT_ACTION_RESET,
        consent: {},
        timestamp: getTimestamp(),
        type: consentType
      }).then(() => resolve());
    } else {
      return resolve();
    }
  });
};
const shouldResetConsent = (timestamp, lastConsentReset) => {
  if (!lastConsentReset || typeof lastConsentReset !== "number") {
    return FALSE;
  }
  const ts = parseInt(timestamp);
  if (timestamp && !isNaN(ts) && ts >= lastConsentReset) {
    return FALSE;
  }
  return TRUE;
};
const processConsentFromStorage = (consent, consentTimestamp = NULL, consentType, widgetConfig = createWidgetConfig()) => {
  return createPromise((resolve) => {
    let storedConsent = { ...consent };
    const bulkConfig = widgetConfig.bulkConsent;
    const lastConsentReset = widgetConfig.lastConsentReset;
    const useGranularConsent = widgetConfig.isGranularPolicy;
    const scripts = widgetConfig.scripts;
    if (consentTimestamp && hasConsentExpired(consentTimestamp, widgetConfig.consentLifetime)) {
      return deleteConsent(bulkConfig).finally(() => resolve(NULL));
    }
    if (consentTimestamp && shouldResetConsent(consentTimestamp, lastConsentReset)) {
      consentLogger("detected reset request, resetting...");
      return resetConsent(widgetConfig).finally(() => {
        consentLogger("reset success");
        resolve(NULL);
      });
    }
    if (useGranularConsent) {
      if (!consentType || consentType === CONSENT_TYPE_CATEGORY) {
        consentLogger("Convert category to granular");
        storedConsent = scripts.reduce(
          (aggregate, script) => {
            const isAccepted = (script.categories || []).every(
              (cat) => !!storedConsent[cat]
            );
            aggregate[script.consent_key] = isAccepted;
            return aggregate;
          },
          { ...EMPTY_CONSENT }
        );
      }
      const finalConsent = makeGranularConsentObject(
        storedConsent,
        widgetConfig
      );
      resolve({ ...finalConsent });
      return;
    } else {
      if (consentType === CONSENT_TYPE_GRANULAR) {
        consentLogger("Convert granular to category");
        storedConsent = categories.reduce(
          (aggregate, cat) => {
            if (cat === NECESSARY) {
              aggregate[cat] = true;
              return aggregate;
            }
            const categoryScripts = scripts.filter((i2) => {
              return includes(i2.categories, cat);
            });
            const acceptedScripts = categoryScripts.filter((script) => {
              return isServiceAccepted(
                script,
                storedConsent,
                CONSENT_POLICY_GRANULAR_OPTIN
              );
            });
            aggregate[cat] = acceptedScripts.length === categoryScripts.length;
            return aggregate;
          },
          { ...EMPTY_CONSENT }
        );
      }
      const finalConsent = categories.reduce(
        (aggregate, cat) => {
          aggregate[cat] = !!storedConsent[cat];
          return aggregate;
        },
        { ...EMPTY_CONSENT }
      );
      resolve({ ...finalConsent });
      return;
    }
  });
};
const saveLocalConsent = (consent, timestamp = NULL, widgetConfig) => {
  const cookieValue = {
    ...consent,
    timestamp,
    type: widgetConfig.consentType,
    version: widgetConfig.version
  };
  const lifetime = widgetConfig.consentLifetime || YEAR_IN_SECONDS;
  const cookieExpiry = (timestamp || getTimestamp()) + lifetime;
  saveLocalStorageItem(CONSENT_COOKIE, cookieValue);
  saveLocalCookie(
    CONSENT_COOKIE,
    JSON.stringify(cookieValue),
    cookieExpiry,
    widgetConfig.bulkConsent
  );
};
const USER_AGENT = "CookieCheck";
const isScannerApp = () => {
  const ua = navigator.userAgent;
  const result = isString(ua) && includes(ua, USER_AGENT);
  if (result) {
    coreLogger("is Scanner.");
  }
  return result;
};
const shouldUseFullConsent = (widgetConfig, visitorCountry = null, visitorRegion = null) => {
  if (isScannerApp()) {
    return TRUE;
  }
  const { bannerNonEuCountries, bannerNonEuRegions, hideOutsideEU } = widgetConfig;
  if (hideOutsideEU && !!visitorCountry) {
    let countriesToCheck = [...EU_COUNTRIES, ...bannerNonEuCountries];
    if (visitorRegion) {
      countriesToCheck = [...countriesToCheck, ...REGION_CHECK_COUNTRIES];
    }
    if (!includes(countriesToCheck, visitorCountry)) {
      return TRUE;
    }
    if (!!visitorCountry && !!visitorRegion && includes(REGION_CHECK_COUNTRIES, visitorCountry) && !includes(bannerNonEuRegions, "".concat(visitorCountry, "-").concat(visitorRegion))) {
      return TRUE;
    }
  }
  return FALSE;
};
const shouldUseEmptyConsent = (gpcValue = null, isGpcAndDntEnabled = false) => {
  const dnt = navigator.doNotTrack;
  if (isGpcAndDntEnabled && (gpcValue === "1" || dnt === "1")) {
    return TRUE;
  }
  return FALSE;
};
const NO_CONSENT_RESPONSE = [NULL, NULL];
const loadUserConsent = (widgetConfig, visitorCountry = null, visitorRegion = null, gpcValue = null) => {
  return createPromise((resolve) => {
    const shouldUseFullConsentResponse = shouldUseFullConsent(widgetConfig, visitorCountry, visitorRegion);
    const shouldUsEmptyConsentResponse = shouldUseEmptyConsent(gpcValue, widgetConfig.gpcAndDntEnabled);
    let consentResponse = NO_CONSENT_RESPONSE;
    if (shouldUsEmptyConsentResponse) {
      consentLogger("use empty");
      consentResponse = [EMPTY_CATEGORY_CONSENT, NULL];
    } else if (shouldUseFullConsentResponse) {
      consentLogger("use full");
      if (widgetConfig.isGranularPolicy) {
        const fullConsent = widgetConfig.scripts.reduce(
          (aggregate, script) => ({
            ...aggregate,
            [script.consent_key]: TRUE
          }),
          {}
        );
        consentResponse = [fullConsent, NULL];
      } else {
        const fullConsent = categories.reduce(
          (aggregate, cat) => {
            aggregate[cat] = TRUE;
            return aggregate;
          },
          { ...EMPTY_CONSENT }
        );
        consentResponse = [fullConsent, NULL];
      }
    }
    loadConsentFromStorage(widgetConfig).then(
      (storedData) => {
        if (!isArray(storedData)) {
          consentLogger("no data stored");
          resolve(consentResponse);
          return;
        }
        const [storedConsent, consentTimestamp, consentType] = storedData;
        if (!storedConsent) {
          consentLogger("no data stored");
          resolve(consentResponse);
          return;
        }
        processConsentFromStorage(
          storedConsent,
          consentTimestamp,
          consentType || null,
          widgetConfig
        ).then(
          (consent) => {
            if (!isObject(consent)) {
              consentLogger("loaded empty");
              resolve(consentResponse);
              return;
            }
            consentLogger("loaded", consent);
            saveLocalConsent(consent, consentTimestamp, widgetConfig);
            resolve([consent, consentTimestamp]);
            return;
          },
          (e2) => {
            consentLogger("error", e2);
            resolve(consentResponse);
          }
        );
      },
      (e2) => {
        report(e2);
        consentLogger("error", e2);
        resolve(consentResponse);
      }
    );
  });
};
const makeUrlQuery = (parts) => {
  const query = new URLSearchParams();
  objectKeys(parts).forEach((key) => {
    query.set(key, encodeURIComponent(parts[key]));
  });
  return query.toString();
};
const loadVisitorLocation = () => {
  return createPromise((resolve) => {
    const query = makeUrlQuery({ origin: window.location.hostname });
    getJson("".concat(REGION_CHECK_URL, "?").concat(query)).then(
      ([res]) => {
        resolve([res.country || res.countryCode || NULL, res.region || NULL]);
      },
      (e2) => {
        report(e2);
        resolve([NULL, NULL]);
      }
    );
  });
};
const maybeLoadVisitorLocation = (widgetConfig, visitorCountry) => {
  return createPromise((resolve) => {
    if (!widgetConfig.increaseLocationPrecision) {
      resolve([visitorCountry, NULL]);
      return;
    }
    loadVisitorLocation().then(resolve, () => resolve([visitorCountry, NULL]));
  });
};
const dispatchJSEvent = (event, detail) => {
  _WINDOW_.dispatchEvent(new CustomEvent(event, { detail }));
};
const EVENT_NAME$8 = "banner_cookie_error_state";
const dispatchErrorStateEvent = () => {
  const jsEventData = NULL;
  dispatchJSEvent(EVENT_NAME$8, jsEventData);
};
const init = () => {
  return createPromise(async (resolve) => {
    const preloadSettings = getInitializationSettings();
    getIntegrationSettings(
      preloadSettings ? preloadSettings.integration || {} : {}
    );
    const { apiKey } = integrationSettings;
    if (!isString(apiKey) || !apiKey) {
      dispatchErrorStateEvent();
      throw new Error(MISSING_API_KEY);
    }
    {
      const autoblockUrls = [];
      if (preloadSettings && isArray(preloadSettings.autoblock)) {
        preloadSettings.autoblock.forEach((item) => {
          autoblockUrls.push(...item.urls || []);
        });
      }
      const autoblock = getAutoblockInstance(autoblockUrls);
      if (preloadSettings && preloadSettings.autoblock) {
        autoblock.init();
      }
    }
    const visitorId = loadLocalVisitorId();
    getConfigFilesVersion(preloadSettings).then(
      ([version, visitorCountry, gpcValue]) => {
        if (!version) {
          dispatchErrorStateEvent();
          throw new Error(PROBABLY_MISSING_API_KEY);
        }
        const preloadedConfig = preloadSettings ? preloadSettings.widgetConfig || NULL : NULL;
        loadSiteConfig(version, preloadedConfig).then((widgetConfig) => {
          maybeLoadVisitorLocation(widgetConfig, visitorCountry).then(
            ([visitorCountry2, visitorRegion]) => {
              const loadConsentsAndResolve = (loadTCFUserConsent) => {
                let loadConsentsArr;
                if (widgetConfig.tcfEnabled && loadTCFUserConsent) {
                  loadConsentsArr = [
                    loadUserConsent(
                      widgetConfig,
                      visitorCountry2,
                      visitorRegion,
                      gpcValue
                    )
                  ];
                } else {
                  loadConsentsArr = [
                    loadUserConsent(
                      widgetConfig,
                      visitorCountry2,
                      visitorRegion
                    )
                  ];
                }
                if (widgetConfig.tcfEnabled) {
                  loadConsentsArr.push(loadTCFUserConsent(widgetConfig));
                }
                Promise.all(loadConsentsArr).then(
                  ([consentRes, tcfConsentRes]) => {
                    const [prevConsent, prevConsentTimestamp] = consentRes;
                    let tcfPrevConsent = NULL, tcfPrevConsentTimestamp = NULL;
                    if (tcfConsentRes) {
                      [tcfPrevConsent, tcfPrevConsentTimestamp] = tcfConsentRes;
                    }
                    resolve({
                      preloadSettings,
                      apiKey,
                      widgetConfig,
                      prevConsent,
                      prevConsentTimestamp,
                      visitorId,
                      visitorCountry: visitorCountry2,
                      visitorRegion,
                      tcfPrevConsent,
                      tcfPrevConsentTimestamp
                    });
                  }
                );
              };
              if (widgetConfig.tcfEnabled) {
                __vitePreload(() => import("./static-main/MiEUT4.js"), true ? __vite__mapDeps([0,1]) : void 0, import.meta.url).then(
                  (result) => {
                    const loadTCFUserConsent = result.loadTCFUserConsent;
                    loadConsentsAndResolve(loadTCFUserConsent);
                  }
                );
              } else {
                loadConsentsAndResolve();
              }
            },
            report
          );
        });
      }
    );
  });
};
var n, l$1, u$2, i$1, r$1, o$1, e$1, f$2, c$1, s$1, a$1, h$1, p$1 = {}, v$1 = [], y$1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, d$1 = Array.isArray;
function w$1(n2, l2) {
  for (var u2 in l2) n2[u2] = l2[u2];
  return n2;
}
function _$1(n2) {
  n2 && n2.parentNode && n2.parentNode.removeChild(n2);
}
function g(l2, u2, t2) {
  var i2, r2, o2, e2 = {};
  for (o2 in u2) "key" == o2 ? i2 = u2[o2] : "ref" == o2 ? r2 = u2[o2] : e2[o2] = u2[o2];
  if (arguments.length > 2 && (e2.children = arguments.length > 3 ? n.call(arguments, 2) : t2), "function" == typeof l2 && null != l2.defaultProps) for (o2 in l2.defaultProps) void 0 === e2[o2] && (e2[o2] = l2.defaultProps[o2]);
  return m$1(l2, e2, i2, r2, null);
}
function m$1(n2, t2, i2, r2, o2) {
  var e2 = { type: n2, props: t2, key: i2, ref: r2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o2 ? ++u$2 : o2, __i: -1, __u: 0 };
  return null == o2 && null != l$1.vnode && l$1.vnode(e2), e2;
}
function k$1(n2) {
  return n2.children;
}
function x$1(n2, l2) {
  this.props = n2, this.context = l2;
}
function C$1(n2, l2) {
  if (null == l2) return n2.__ ? C$1(n2.__, n2.__i + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++) if (null != (u2 = n2.__k[l2]) && null != u2.__e) return u2.__e;
  return "function" == typeof n2.type ? C$1(n2) : null;
}
function S(n2) {
  var l2, u2;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++) if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
      n2.__e = n2.__c.base = u2.__e;
      break;
    }
    return S(n2);
  }
}
function M(n2) {
  (!n2.__d && (n2.__d = true) && i$1.push(n2) && !P.__r++ || r$1 !== l$1.debounceRendering) && ((r$1 = l$1.debounceRendering) || o$1)(P);
}
function P() {
  var n2, u2, t2, r2, o2, f2, c2, s2;
  for (i$1.sort(e$1); n2 = i$1.shift(); ) n2.__d && (u2 = i$1.length, r2 = void 0, f2 = (o2 = (t2 = n2).__v).__e, c2 = [], s2 = [], t2.__P && ((r2 = w$1({}, o2)).__v = o2.__v + 1, l$1.vnode && l$1.vnode(r2), j$1(t2.__P, r2, o2, t2.__n, t2.__P.namespaceURI, 32 & o2.__u ? [f2] : null, c2, null == f2 ? C$1(o2) : f2, !!(32 & o2.__u), s2), r2.__v = o2.__v, r2.__.__k[r2.__i] = r2, z$1(c2, r2, s2), r2.__e != f2 && S(r2)), i$1.length > u2 && i$1.sort(e$1));
  P.__r = 0;
}
function $(n2, l2, u2, t2, i2, r2, o2, e2, f2, c2, s2) {
  var a2, h2, y2, d2, w2, _2, g2 = t2 && t2.__k || v$1, m2 = l2.length;
  for (f2 = I(u2, l2, g2, f2, m2), a2 = 0; a2 < m2; a2++) null != (y2 = u2.__k[a2]) && (h2 = -1 === y2.__i ? p$1 : g2[y2.__i] || p$1, y2.__i = a2, _2 = j$1(n2, y2, h2, i2, r2, o2, e2, f2, c2, s2), d2 = y2.__e, y2.ref && h2.ref != y2.ref && (h2.ref && V(h2.ref, null, y2), s2.push(y2.ref, y2.__c || d2, y2)), null == w2 && null != d2 && (w2 = d2), 4 & y2.__u || h2.__k === y2.__k ? f2 = A$1(y2, f2, n2) : "function" == typeof y2.type && void 0 !== _2 ? f2 = _2 : d2 && (f2 = d2.nextSibling), y2.__u &= -7);
  return u2.__e = w2, f2;
}
function I(n2, l2, u2, t2, i2) {
  var r2, o2, e2, f2, c2, s2 = u2.length, a2 = s2, h2 = 0;
  for (n2.__k = new Array(i2), r2 = 0; r2 < i2; r2++) null != (o2 = l2[r2]) && "boolean" != typeof o2 && "function" != typeof o2 ? (f2 = r2 + h2, (o2 = n2.__k[r2] = "string" == typeof o2 || "number" == typeof o2 || "bigint" == typeof o2 || o2.constructor == String ? m$1(null, o2, null, null, null) : d$1(o2) ? m$1(k$1, { children: o2 }, null, null, null) : void 0 === o2.constructor && o2.__b > 0 ? m$1(o2.type, o2.props, o2.key, o2.ref ? o2.ref : null, o2.__v) : o2).__ = n2, o2.__b = n2.__b + 1, e2 = null, -1 !== (c2 = o2.__i = L(o2, u2, f2, a2)) && (a2--, (e2 = u2[c2]) && (e2.__u |= 2)), null == e2 || null === e2.__v ? (-1 == c2 && h2--, "function" != typeof o2.type && (o2.__u |= 4)) : c2 != f2 && (c2 == f2 - 1 ? h2-- : c2 == f2 + 1 ? h2++ : (c2 > f2 ? h2-- : h2++, o2.__u |= 4))) : n2.__k[r2] = null;
  if (a2) for (r2 = 0; r2 < s2; r2++) null != (e2 = u2[r2]) && 0 == (2 & e2.__u) && (e2.__e == t2 && (t2 = C$1(e2)), q$1(e2, e2));
  return t2;
}
function A$1(n2, l2, u2) {
  var t2, i2;
  if ("function" == typeof n2.type) {
    for (t2 = n2.__k, i2 = 0; t2 && i2 < t2.length; i2++) t2[i2] && (t2[i2].__ = n2, l2 = A$1(t2[i2], l2, u2));
    return l2;
  }
  n2.__e != l2 && (l2 && n2.type && !u2.contains(l2) && (l2 = C$1(n2)), u2.insertBefore(n2.__e, l2 || null), l2 = n2.__e);
  do {
    l2 = l2 && l2.nextSibling;
  } while (null != l2 && 8 == l2.nodeType);
  return l2;
}
function L(n2, l2, u2, t2) {
  var i2, r2, o2 = n2.key, e2 = n2.type, f2 = l2[u2];
  if (null === f2 || f2 && o2 == f2.key && e2 === f2.type && 0 == (2 & f2.__u)) return u2;
  if (t2 > (null != f2 && 0 == (2 & f2.__u) ? 1 : 0)) for (i2 = u2 - 1, r2 = u2 + 1; i2 >= 0 || r2 < l2.length; ) {
    if (i2 >= 0) {
      if ((f2 = l2[i2]) && 0 == (2 & f2.__u) && o2 == f2.key && e2 === f2.type) return i2;
      i2--;
    }
    if (r2 < l2.length) {
      if ((f2 = l2[r2]) && 0 == (2 & f2.__u) && o2 == f2.key && e2 === f2.type) return r2;
      r2++;
    }
  }
  return -1;
}
function T$1(n2, l2, u2) {
  "-" == l2[0] ? n2.setProperty(l2, null == u2 ? "" : u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || y$1.test(l2) ? u2 : u2 + "px";
}
function F(n2, l2, u2, t2, i2) {
  var r2;
  n: if ("style" == l2) if ("string" == typeof u2) n2.style.cssText = u2;
  else {
    if ("string" == typeof t2 && (n2.style.cssText = t2 = ""), t2) for (l2 in t2) u2 && l2 in u2 || T$1(n2.style, l2, "");
    if (u2) for (l2 in u2) t2 && u2[l2] === t2[l2] || T$1(n2.style, l2, u2[l2]);
  }
  else if ("o" == l2[0] && "n" == l2[1]) r2 = l2 != (l2 = l2.replace(f$2, "$1")), l2 = l2.toLowerCase() in n2 || "onFocusOut" == l2 || "onFocusIn" == l2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + r2] = u2, u2 ? t2 ? u2.u = t2.u : (u2.u = c$1, n2.addEventListener(l2, r2 ? a$1 : s$1, r2)) : n2.removeEventListener(l2, r2 ? a$1 : s$1, r2);
  else {
    if ("http://www.w3.org/2000/svg" == i2) l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != l2 && "height" != l2 && "href" != l2 && "list" != l2 && "form" != l2 && "tabIndex" != l2 && "download" != l2 && "rowSpan" != l2 && "colSpan" != l2 && "role" != l2 && "popover" != l2 && l2 in n2) try {
      n2[l2] = null == u2 ? "" : u2;
      break n;
    } catch (n3) {
    }
    "function" == typeof u2 || (null == u2 || false === u2 && "-" != l2[4] ? n2.removeAttribute(l2) : n2.setAttribute(l2, "popover" == l2 && 1 == u2 ? "" : u2));
  }
}
function O(n2) {
  return function(u2) {
    if (this.l) {
      var t2 = this.l[u2.type + n2];
      if (null == u2.t) u2.t = c$1++;
      else if (u2.t < t2.u) return;
      return t2(l$1.event ? l$1.event(u2) : u2);
    }
  };
}
function j$1(n2, u2, t2, i2, r2, o2, e2, f2, c2, s2) {
  var a2, h2, p2, v2, y2, g2, m2, b, C2, S2, M2, P2, I2, A2, H, L2, T2, F2 = u2.type;
  if (void 0 !== u2.constructor) return null;
  128 & t2.__u && (c2 = !!(32 & t2.__u), o2 = [f2 = u2.__e = t2.__e]), (a2 = l$1.__b) && a2(u2);
  n: if ("function" == typeof F2) try {
    if (b = u2.props, C2 = "prototype" in F2 && F2.prototype.render, S2 = (a2 = F2.contextType) && i2[a2.__c], M2 = a2 ? S2 ? S2.props.value : a2.__ : i2, t2.__c ? m2 = (h2 = u2.__c = t2.__c).__ = h2.__E : (C2 ? u2.__c = h2 = new F2(b, M2) : (u2.__c = h2 = new x$1(b, M2), h2.constructor = F2, h2.render = B$1), S2 && S2.sub(h2), h2.props = b, h2.state || (h2.state = {}), h2.context = M2, h2.__n = i2, p2 = h2.__d = true, h2.__h = [], h2._sb = []), C2 && null == h2.__s && (h2.__s = h2.state), C2 && null != F2.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = w$1({}, h2.__s)), w$1(h2.__s, F2.getDerivedStateFromProps(b, h2.__s))), v2 = h2.props, y2 = h2.state, h2.__v = u2, p2) C2 && null == F2.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), C2 && null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
    else {
      if (C2 && null == F2.getDerivedStateFromProps && b !== v2 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(b, M2), !h2.__e && (null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(b, h2.__s, M2) || u2.__v == t2.__v)) {
        for (u2.__v != t2.__v && (h2.props = b, h2.state = h2.__s, h2.__d = false), u2.__e = t2.__e, u2.__k = t2.__k, u2.__k.some(function(n3) {
          n3 && (n3.__ = u2);
        }), P2 = 0; P2 < h2._sb.length; P2++) h2.__h.push(h2._sb[P2]);
        h2._sb = [], h2.__h.length && e2.push(h2);
        break n;
      }
      null != h2.componentWillUpdate && h2.componentWillUpdate(b, h2.__s, M2), C2 && null != h2.componentDidUpdate && h2.__h.push(function() {
        h2.componentDidUpdate(v2, y2, g2);
      });
    }
    if (h2.context = M2, h2.props = b, h2.__P = n2, h2.__e = false, I2 = l$1.__r, A2 = 0, C2) {
      for (h2.state = h2.__s, h2.__d = false, I2 && I2(u2), a2 = h2.render(h2.props, h2.state, h2.context), H = 0; H < h2._sb.length; H++) h2.__h.push(h2._sb[H]);
      h2._sb = [];
    } else do {
      h2.__d = false, I2 && I2(u2), a2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
    } while (h2.__d && ++A2 < 25);
    h2.state = h2.__s, null != h2.getChildContext && (i2 = w$1(w$1({}, i2), h2.getChildContext())), C2 && !p2 && null != h2.getSnapshotBeforeUpdate && (g2 = h2.getSnapshotBeforeUpdate(v2, y2)), f2 = $(n2, d$1(L2 = null != a2 && a2.type === k$1 && null == a2.key ? a2.props.children : a2) ? L2 : [L2], u2, t2, i2, r2, o2, e2, f2, c2, s2), h2.base = u2.__e, u2.__u &= -161, h2.__h.length && e2.push(h2), m2 && (h2.__E = h2.__ = null);
  } catch (n3) {
    if (u2.__v = null, c2 || null != o2) if (n3.then) {
      for (u2.__u |= c2 ? 160 : 128; f2 && 8 == f2.nodeType && f2.nextSibling; ) f2 = f2.nextSibling;
      o2[o2.indexOf(f2)] = null, u2.__e = f2;
    } else for (T2 = o2.length; T2--; ) _$1(o2[T2]);
    else u2.__e = t2.__e, u2.__k = t2.__k;
    l$1.__e(n3, u2, t2);
  }
  else null == o2 && u2.__v == t2.__v ? (u2.__k = t2.__k, u2.__e = t2.__e) : f2 = u2.__e = N(t2.__e, u2, t2, i2, r2, o2, e2, c2, s2);
  return (a2 = l$1.diffed) && a2(u2), 128 & u2.__u ? void 0 : f2;
}
function z$1(n2, u2, t2) {
  for (var i2 = 0; i2 < t2.length; i2++) V(t2[i2], t2[++i2], t2[++i2]);
  l$1.__c && l$1.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l$1.__e(n3, u3.__v);
    }
  });
}
function N(u2, t2, i2, r2, o2, e2, f2, c2, s2) {
  var a2, h2, v2, y2, w2, g2, m2, b = i2.props, k2 = t2.props, x2 = t2.type;
  if ("svg" == x2 ? o2 = "http://www.w3.org/2000/svg" : "math" == x2 ? o2 = "http://www.w3.org/1998/Math/MathML" : o2 || (o2 = "http://www.w3.org/1999/xhtml"), null != e2) {
    for (a2 = 0; a2 < e2.length; a2++) if ((w2 = e2[a2]) && "setAttribute" in w2 == !!x2 && (x2 ? w2.localName == x2 : 3 == w2.nodeType)) {
      u2 = w2, e2[a2] = null;
      break;
    }
  }
  if (null == u2) {
    if (null == x2) return document.createTextNode(k2);
    u2 = document.createElementNS(o2, x2, k2.is && k2), c2 && (l$1.__m && l$1.__m(t2, e2), c2 = false), e2 = null;
  }
  if (null === x2) b === k2 || c2 && u2.data === k2 || (u2.data = k2);
  else {
    if (e2 = e2 && n.call(u2.childNodes), b = i2.props || p$1, !c2 && null != e2) for (b = {}, a2 = 0; a2 < u2.attributes.length; a2++) b[(w2 = u2.attributes[a2]).name] = w2.value;
    for (a2 in b) if (w2 = b[a2], "children" == a2) ;
    else if ("dangerouslySetInnerHTML" == a2) v2 = w2;
    else if (!(a2 in k2)) {
      if ("value" == a2 && "defaultValue" in k2 || "checked" == a2 && "defaultChecked" in k2) continue;
      F(u2, a2, null, w2, o2);
    }
    for (a2 in k2) w2 = k2[a2], "children" == a2 ? y2 = w2 : "dangerouslySetInnerHTML" == a2 ? h2 = w2 : "value" == a2 ? g2 = w2 : "checked" == a2 ? m2 = w2 : c2 && "function" != typeof w2 || b[a2] === w2 || F(u2, a2, w2, b[a2], o2);
    if (h2) c2 || v2 && (h2.__html === v2.__html || h2.__html === u2.innerHTML) || (u2.innerHTML = h2.__html), t2.__k = [];
    else if (v2 && (u2.innerHTML = ""), $(u2, d$1(y2) ? y2 : [y2], t2, i2, r2, "foreignObject" == x2 ? "http://www.w3.org/1999/xhtml" : o2, e2, f2, e2 ? e2[0] : i2.__k && C$1(i2, 0), c2, s2), null != e2) for (a2 = e2.length; a2--; ) _$1(e2[a2]);
    c2 || (a2 = "value", "progress" == x2 && null == g2 ? u2.removeAttribute("value") : void 0 !== g2 && (g2 !== u2[a2] || "progress" == x2 && !g2 || "option" == x2 && g2 !== b[a2]) && F(u2, a2, g2, b[a2], o2), a2 = "checked", void 0 !== m2 && m2 !== u2[a2] && F(u2, a2, m2, b[a2], o2));
  }
  return u2;
}
function V(n2, u2, t2) {
  try {
    if ("function" == typeof n2) {
      var i2 = "function" == typeof n2.__u;
      i2 && n2.__u(), i2 && null == u2 || (n2.__u = n2(u2));
    } else n2.current = u2;
  } catch (n3) {
    l$1.__e(n3, t2);
  }
}
function q$1(n2, u2, t2) {
  var i2, r2;
  if (l$1.unmount && l$1.unmount(n2), (i2 = n2.ref) && (i2.current && i2.current !== n2.__e || V(i2, null, u2)), null != (i2 = n2.__c)) {
    if (i2.componentWillUnmount) try {
      i2.componentWillUnmount();
    } catch (n3) {
      l$1.__e(n3, u2);
    }
    i2.base = i2.__P = null;
  }
  if (i2 = n2.__k) for (r2 = 0; r2 < i2.length; r2++) i2[r2] && q$1(i2[r2], u2, t2 || "function" != typeof n2.type);
  t2 || _$1(n2.__e), n2.__c = n2.__ = n2.__e = void 0;
}
function B$1(n2, l2, u2) {
  return this.constructor(n2, u2);
}
function D$1(u2, t2, i2) {
  var r2, o2, e2, f2;
  t2 == document && (t2 = document.documentElement), l$1.__ && l$1.__(u2, t2), o2 = (r2 = false) ? null : t2.__k, e2 = [], f2 = [], j$1(t2, u2 = t2.__k = g(k$1, null, [u2]), o2 || p$1, p$1, t2.namespaceURI, o2 ? null : t2.firstChild ? n.call(t2.childNodes) : null, e2, o2 ? o2.__e : t2.firstChild, r2, f2), z$1(e2, u2, f2);
}
function J(n2, l2) {
  var u2 = { __c: l2 = "__cC" + h$1++, __: n2, Consumer: function(n3, l3) {
    return n3.children(l3);
  }, Provider: function(n3) {
    var u3, t2;
    return this.getChildContext || (u3 = /* @__PURE__ */ new Set(), (t2 = {})[l2] = this, this.getChildContext = function() {
      return t2;
    }, this.componentWillUnmount = function() {
      u3 = null;
    }, this.shouldComponentUpdate = function(n4) {
      this.props.value !== n4.value && u3.forEach(function(n5) {
        n5.__e = true, M(n5);
      });
    }, this.sub = function(n4) {
      u3.add(n4);
      var l3 = n4.componentWillUnmount;
      n4.componentWillUnmount = function() {
        u3 && u3.delete(n4), l3 && l3.call(n4);
      };
    }), n3.children;
  } };
  return u2.Provider.__ = u2.Consumer.contextType = u2;
}
n = v$1.slice, l$1 = { __e: function(n2, l2, u2, t2) {
  for (var i2, r2, o2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((r2 = i2.constructor) && null != r2.getDerivedStateFromError && (i2.setState(r2.getDerivedStateFromError(n2)), o2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), o2 = i2.__d), o2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, u$2 = 0, x$1.prototype.setState = function(n2, l2) {
  var u2;
  u2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = w$1({}, this.state), "function" == typeof n2 && (n2 = n2(w$1({}, u2), this.props)), n2 && w$1(u2, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), M(this));
}, x$1.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), M(this));
}, x$1.prototype.render = k$1, i$1 = [], o$1 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e$1 = function(n2, l2) {
  return n2.__v.__b - l2.__v.__b;
}, P.__r = 0, f$2 = /(PointerCapture)$|Capture$/i, c$1 = 0, s$1 = O(false), a$1 = O(true), h$1 = 0;
var f$1 = 0;
function u$1(e2, t2, n2, o2, i2, u2) {
  t2 || (t2 = {});
  var a2, c2, l2 = t2;
  "ref" in t2 && (a2 = t2.ref, delete t2.ref);
  var p2 = { type: e2, props: l2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f$1, __i: -1, __u: 0, __source: i2, __self: u2 };
  if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c2 in a2) void 0 === l2[c2] && (l2[c2] = a2[c2]);
  return l$1.vnode && l$1.vnode(p2), p2;
}
const APP_STATE_CONTEXT = J(
  UNDEFINED
);
var t, r, u, i, o = 0, f = [], c = l$1, e = c.__b, a = c.__r, v = c.diffed, l = c.__c, m = c.unmount, s = c.__;
function d(n2, t2) {
  c.__h && c.__h(r, n2, o || t2), o = 0;
  var u2 = r.__H || (r.__H = { __: [], __h: [] });
  return n2 >= u2.__.length && u2.__.push({}), u2.__[n2];
}
function h(n2) {
  return o = 1, p(D, n2);
}
function p(n2, u2, i2) {
  var o2 = d(t++, 2);
  if (o2.t = n2, !o2.__c && (o2.__ = [D(void 0, u2), function(n3) {
    var t2 = o2.__N ? o2.__N[0] : o2.__[0], r2 = o2.t(t2, n3);
    t2 !== r2 && (o2.__N = [r2, o2.__[1]], o2.__c.setState({}));
  }], o2.__c = r, !r.u)) {
    var f2 = function(n3, t2, r2) {
      if (!o2.__c.__H) return true;
      var u3 = o2.__c.__H.__.filter(function(n4) {
        return !!n4.__c;
      });
      if (u3.every(function(n4) {
        return !n4.__N;
      })) return !c2 || c2.call(this, n3, t2, r2);
      var i3 = o2.__c.props !== n3;
      return u3.forEach(function(n4) {
        if (n4.__N) {
          var t3 = n4.__[0];
          n4.__ = n4.__N, n4.__N = void 0, t3 !== n4.__[0] && (i3 = true);
        }
      }), c2 && c2.call(this, n3, t2, r2) || i3;
    };
    r.u = true;
    var c2 = r.shouldComponentUpdate, e2 = r.componentWillUpdate;
    r.componentWillUpdate = function(n3, t2, r2) {
      if (this.__e) {
        var u3 = c2;
        c2 = void 0, f2(n3, t2, r2), c2 = u3;
      }
      e2 && e2.call(this, n3, t2, r2);
    }, r.shouldComponentUpdate = f2;
  }
  return o2.__N || o2.__;
}
function y(n2, u2) {
  var i2 = d(t++, 3);
  !c.__s && C(i2.__H, u2) && (i2.__ = n2, i2.i = u2, r.__H.__h.push(i2));
}
function _(n2, u2) {
  var i2 = d(t++, 4);
  !c.__s && C(i2.__H, u2) && (i2.__ = n2, i2.i = u2, r.__h.push(i2));
}
function A(n2) {
  return o = 5, T(function() {
    return { current: n2 };
  }, []);
}
function T(n2, r2) {
  var u2 = d(t++, 7);
  return C(u2.__H, r2) && (u2.__ = n2(), u2.__H = r2, u2.__h = n2), u2.__;
}
function q(n2, t2) {
  return o = 8, T(function() {
    return n2;
  }, t2);
}
function x(n2) {
  var u2 = r.context[n2.__c], i2 = d(t++, 9);
  return i2.c = n2, u2 ? (null == i2.__ && (i2.__ = true, u2.sub(r)), u2.props.value) : n2.__;
}
function j() {
  for (var n2; n2 = f.shift(); ) if (n2.__P && n2.__H) try {
    n2.__H.__h.forEach(z), n2.__H.__h.forEach(B), n2.__H.__h = [];
  } catch (t2) {
    n2.__H.__h = [], c.__e(t2, n2.__v);
  }
}
c.__b = function(n2) {
  r = null, e && e(n2);
}, c.__ = function(n2, t2) {
  n2 && t2.__k && t2.__k.__m && (n2.__m = t2.__k.__m), s && s(n2, t2);
}, c.__r = function(n2) {
  a && a(n2), t = 0;
  var i2 = (r = n2.__c).__H;
  i2 && (u === r ? (i2.__h = [], r.__h = [], i2.__.forEach(function(n3) {
    n3.__N && (n3.__ = n3.__N), n3.i = n3.__N = void 0;
  })) : (i2.__h.forEach(z), i2.__h.forEach(B), i2.__h = [], t = 0)), u = r;
}, c.diffed = function(n2) {
  v && v(n2);
  var t2 = n2.__c;
  t2 && t2.__H && (t2.__H.__h.length && (1 !== f.push(t2) && i === c.requestAnimationFrame || ((i = c.requestAnimationFrame) || w)(j)), t2.__H.__.forEach(function(n3) {
    n3.i && (n3.__H = n3.i), n3.i = void 0;
  })), u = r = null;
}, c.__c = function(n2, t2) {
  t2.some(function(n3) {
    try {
      n3.__h.forEach(z), n3.__h = n3.__h.filter(function(n4) {
        return !n4.__ || B(n4);
      });
    } catch (r2) {
      t2.some(function(n4) {
        n4.__h && (n4.__h = []);
      }), t2 = [], c.__e(r2, n3.__v);
    }
  }), l && l(n2, t2);
}, c.unmount = function(n2) {
  m && m(n2);
  var t2, r2 = n2.__c;
  r2 && r2.__H && (r2.__H.__.forEach(function(n3) {
    try {
      z(n3);
    } catch (n4) {
      t2 = n4;
    }
  }), r2.__H = void 0, t2 && c.__e(t2, r2.__v));
};
var k = "function" == typeof requestAnimationFrame;
function w(n2) {
  var t2, r2 = function() {
    clearTimeout(u2), k && cancelAnimationFrame(t2), setTimeout(n2);
  }, u2 = setTimeout(r2, 100);
  k && (t2 = requestAnimationFrame(r2));
}
function z(n2) {
  var t2 = r, u2 = n2.__c;
  "function" == typeof u2 && (n2.__c = void 0, u2()), r = t2;
}
function B(n2) {
  var t2 = r;
  n2.__c = n2.__(), r = t2;
}
function C(n2, t2) {
  return !n2 || n2.length !== t2.length || t2.some(function(t3, r2) {
    return t3 !== n2[r2];
  });
}
function D(n2, t2) {
  return "function" == typeof t2 ? t2(n2) : t2;
}
const AppStateProvider = ({
  config,
  children
}) => {
  const { stealthMode } = integrationSettings;
  const [activePanelTab, setActivePanelTab] = h(NULL);
  const [tcfVendorsList, setTcfVendorsList] = h(
    config.widgetConfig.tcfVendors
  );
  const [activeConsentTab, setActiveConsentTab] = h(
    NULL
  );
  const [shouldTriggerConsentEvent, setShouldTriggerConsentEvent] = h(FALSE);
  const [shouldTriggerTCFConsentEvent, setShouldTriggerTCFConsentEvent] = h(FALSE);
  const [shouldBannerBeVisible, setShouldBannerBeVisible] = h(FALSE);
  const [isTCFPublicEndpointInit, setIsTCFPublicEndpointInit] = h(FALSE);
  const changePanelTab = (newTab = PANEL_SETTINGS_TAB) => {
    const availableTabs = config.widgetConfig.tabsOnSettingsPanel;
    if (newTab !== NULL && !includes(availableTabs, newTab)) {
      throw new Error(
        LOGS_PREFIX + " New tab must be one of [" + availableTabs.join(", ") + "], passed: " + newTab
      );
    }
    setActivePanelTab(newTab);
  };
  const changeConsentTab = (newTab = ConsentTab.CATEGORIES) => {
    const availableTabs = [ConsentTab.CATEGORIES, ConsentTab.VENDORS];
    if (newTab !== NULL && !includes(availableTabs, newTab)) {
      throw new Error(
        LOGS_PREFIX + " New tab must be one of [" + availableTabs.join(", ") + "], passed: " + newTab
      );
    }
    setActiveConsentTab(newTab);
  };
  const appState = T(
    () => ({
      ...config,
      activePanelTab,
      changePanelTab,
      activeConsentTab,
      changeConsentTab,
      tcfVendorsList,
      setTcfVendorsList,
      shouldBannerBeVisible,
      setShouldBannerBeVisible,
      isTCFPublicEndpointInit,
      setIsTCFPublicEndpointInit,
      shouldTriggerConsentEvent,
      shouldTriggerTCFConsentEvent,
      setShouldTriggerConsentEvent,
      setShouldTriggerTCFConsentEvent
    }),
    [activePanelTab, changePanelTab, activeConsentTab, changeConsentTab]
  );
  const toggleSettingsPanel = q(
    (shouldBeOpen) => {
      if (stealthMode) {
        throw new Error(CANT_OPEN_PANEL_STEALTH_MODE);
      }
      setActivePanelTab(shouldBeOpen ? PANEL_SETTINGS_TAB : NULL);
      setActiveConsentTab(shouldBeOpen ? ConsentTab.CATEGORIES : NULL);
    },
    [stealthMode]
  );
  const [gvl, setGvl] = h(NULL);
  const [gatp, setGatp] = h(NULL);
  return /* @__PURE__ */ u$1(
    APP_STATE_CONTEXT.Provider,
    {
      value: {
        ...appState,
        toggleSettingsPanel,
        isSettingsPanelOpen: !!activePanelTab,
        activePanelTab,
        changePanelTab,
        activeConsentTab,
        changeConsentTab,
        gvl,
        setGvl,
        gatp,
        setGatp,
        tcfVendorsList,
        setTcfVendorsList,
        isTCFPublicEndpointInit,
        setIsTCFPublicEndpointInit
      },
      children
    }
  );
};
const EmptyComponent = () => /* @__PURE__ */ u$1(k$1, {});
const createAsyncComponent = (loader) => {
  const AsyncComponentLoader = (props) => {
    const FinalComponentRef = A(EmptyComponent);
    const [, setRenderId] = h(NULL);
    y(() => {
      loader().then(
        (resolved) => {
          FinalComponentRef.current = resolved.default || resolved;
          setRenderId(randomString());
        },
        (e2) => {
          throw e2;
        }
      );
    }, []);
    const FinalComponent = FinalComponentRef.current;
    return /* @__PURE__ */ u$1(FinalComponent, { ...props });
  };
  return AsyncComponentLoader;
};
const BannerUI = createAsyncComponent(
  () => __vitePreload(() => import(
    "./static-main/C-PRyy.js"
    /* webpackChunkName: "ui"*/
  ), true ? __vite__mapDeps([2,3,4,5,6,7,8,9]) : void 0, import.meta.url)
);
const useAppState = () => {
  const ctx = x(APP_STATE_CONTEXT);
  if (!ctx) {
    throw new Error(CONTEXT_OUTSIDE_PROVIDER);
  }
  return ctx;
};
const USER_CONSENT_CONTEXT = J(
  void 0
);
const useUserConsent = () => {
  const ctx = x(USER_CONSENT_CONTEXT);
  if (!ctx) {
    throw new Error(CONTEXT_OUTSIDE_PROVIDER);
  }
  return ctx;
};
const useShouldShowBanner = () => {
  const { hasConsented, isForcingReconsent } = useUserConsent();
  return !hasConsented || isForcingReconsent;
};
const BannerUIManager = () => {
  const shouldShowBanner = useShouldShowBanner();
  const { showWithdrawModal } = useUserConsent();
  const { widgetConfig, activePanelTab, setShouldBannerBeVisible } = useAppState();
  const { floatingBtn } = widgetConfig;
  const [shouldShowAnyUI, shouldBannerBeVisible] = T(() => {
    if (integrationSettings.stealthMode) {
      return [FALSE, FALSE];
    }
    const shouldBeVisible = !!(shouldShowBanner || showWithdrawModal || activePanelTab);
    setShouldBannerBeVisible(shouldBeVisible);
    return [
      shouldShowBanner || showWithdrawModal || activePanelTab || floatingBtn.isEnabled,
      shouldBeVisible
    ];
  }, [
    shouldShowBanner,
    activePanelTab,
    showWithdrawModal,
    floatingBtn.isEnabled,
    setShouldBannerBeVisible
  ]);
  y(() => {
    _WINDOW_.CF_visiblity = shouldBannerBeVisible;
  }, [shouldBannerBeVisible]);
  if (shouldShowAnyUI) {
    return /* @__PURE__ */ u$1(BannerUI, {});
  }
  return NULL;
};
const isCategoryAccepted = (category, consent, consentPolicy, scripts) => {
  if (category === NECESSARY) {
    return TRUE;
  }
  if (consentPolicy === CONSENT_POLICY_GRANULAR_OPTIN && scripts) {
    const categoryScripts = scripts.filter((i2) => {
      return includes(i2.categories, category);
    });
    if (!categoryScripts.length) {
      return FALSE;
    }
    const acceptedScripts = categoryScripts.filter((script) => {
      return isServiceAccepted(script, consent, consentPolicy);
    });
    return acceptedScripts.length === categoryScripts.length;
  } else if (consentPolicy === CONSENT_POLICY_CATEGORY_OPTIN) {
    return !!consent[category];
  }
  return FALSE;
};
const CAT_ATTRIBUTE = CATEGORY_ATTR;
function getInlineElements(tag, acceptedCategories) {
  const nodes = Array.from(
    _DOCUMENT_.querySelectorAll("".concat(tag, "[").concat(CAT_ATTRIBUTE, "]"))
  );
  return nodes.filter((node) => {
    const categories2 = (node.getAttribute(CAT_ATTRIBUTE) || "").split(",").map((c2) => c2.trim());
    return categories2.every((cat) => includes(acceptedCategories, cat));
  });
}
const loadInlineIframes = (acceptedCategories) => {
  const iframes = getInlineElements(
    "iframe",
    acceptedCategories
  ).filter((i2) => !i2.src);
  iframes.forEach((iframe) => {
    iframe.src = iframe.getAttribute("data-src") || "";
    iframe.removeAttribute("data-src");
  });
};
const UNBLOCKED_SCRIPT_TYPES = [
  "application/javascript",
  "text/javascript"
];
const replaceScriptTag = (script) => {
  const el = createElement("script");
  Array.from(script.attributes).forEach((attr) => {
    if (attr.name === "data-src") {
      el.src = attr.value;
    } else {
      el.setAttribute(attr.name, attr.value);
    }
  });
  el.text = script.innerHTML;
  el.type = UNBLOCKED_SCRIPT_TYPES[0];
  try {
    script.parentNode.replaceChild(el, script);
  } catch (e2) {
    coreLogger(e2);
  }
};
const loadInlineScripts = (acceptedCategories) => {
  const scripts = getInlineElements(
    "script",
    acceptedCategories
  ).filter((i2) => i2.type === "text/plain");
  scripts.forEach(replaceScriptTag);
};
const SCRIPTS_CONTAINER_ID = "".concat(GENERIC_PREFIX, "-scripts");
const SCRIPT_PREFIX = "".concat(GENERIC_PREFIX, "-script-");
const executeCFLoadScript = (script) => {
  let container = getElementById(
    SCRIPTS_CONTAINER_ID
  );
  if (!container) {
    container = createElement("div");
    container.id = SCRIPTS_CONTAINER_ID;
    _DOCUMENT_.body.appendChild(container);
  }
  container.style.display = "none";
  const scriptContainerId = "".concat(SCRIPT_PREFIX).concat(script.id);
  if (container.querySelector("#" + scriptContainerId)) {
    return;
  }
  const scriptContainer = createElement("div");
  scriptContainer.id = scriptContainerId;
  scriptContainer.innerHTML = script.content;
  container.appendChild(scriptContainer);
  const scriptTags = [
    ...Array.from(scriptContainer.querySelectorAll("script"))
  ];
  scriptTags.map(replaceScriptTag);
};
const executeEditedInlineScript = (script) => {
  const scriptTags = Array.from(
    _DOCUMENT_.querySelectorAll(
      "[".concat(DATA_ATTRIBUTES_PREFIX, '-script="').concat(script.consent_key, '"]')
    )
  );
  if (!scriptTags.length) {
    return;
  }
  for (let i2 = 0; i2 < scriptTags.length; i2++) {
    const tag = scriptTags[i2];
    if (!(tag instanceof HTMLScriptElement)) {
      continue;
    }
    if (tag.src && (includes(UNBLOCKED_SCRIPT_TYPES, tag.type) || !tag.type)) {
      continue;
    }
    replaceScriptTag(tag);
  }
};
const isFunction = (input) => {
  return typeof input === "function";
};
const executeAutoblockedScript = (script) => {
  const autoblock = getAutoblockInstance();
  const scriptAutoblockSettings = script.autoblock;
  if (!scriptAutoblockSettings) {
    return;
  }
  autoblockLogger("execute", script);
  autoblock.unblock(scriptAutoblockSettings.urls);
};
const dummyExecuteScript = () => {
};
const SCRIPT_EXECUTION_METHODS = {
  [SCRIPT_INTEGRATION_METHOD_BANNER_LOAD]: executeCFLoadScript,
  [SCRIPT_INTEGRATION_METHOD_EDIT_CURRENT]: executeEditedInlineScript,
  [SCRIPT_INTEGRATION_METHOD_AUTOBLOCK]: dummyExecuteScript,
  [SCRIPT_INTEGRATION_METHOD_GTM_LOAD]: dummyExecuteScript,
  [SCRIPT_INTEGRATION_METHOD_MANUAL]: dummyExecuteScript
};
{
  SCRIPT_EXECUTION_METHODS[SCRIPT_INTEGRATION_METHOD_AUTOBLOCK] = executeAutoblockedScript;
}
const loadSiteScriptsForConsent = (consent, widgetConfig) => {
  try {
    const scripts = widgetConfig.scripts;
    for (const script of scripts) {
      if (widgetConfig.isGranularPolicy && !script.consent_key || !script.id) {
        continue;
      }
      const isAccepted = isServiceAccepted(
        script,
        consent,
        widgetConfig.consentPolicy
      );
      if (!isAccepted) {
        continue;
      }
      const executeFn = SCRIPT_EXECUTION_METHODS[script.integration] || dummyExecuteScript;
      if (isFunction(executeFn)) {
        executeFn(script);
      }
    }
  } catch (e2) {
    consentLogger(e2);
  }
};
const loadContentForConsent = (userConsent, widgetConfig, preloadSettings) => {
  try {
    loadSiteScriptsForConsent(userConsent, widgetConfig);
    const acceptedCategories = categories.filter((cat) => {
      return isCategoryAccepted(
        cat,
        userConsent,
        widgetConfig.consentPolicy,
        widgetConfig.scripts
      );
    });
    if (true) {
      const autoblock = getAutoblockInstance();
      if (preloadSettings && !widgetConfig.isGranularPolicy) {
        const unblockableScripts = [];
        preloadSettings.autoblock.filter((item) => {
          const shouldUnblock = item.consent_keys.every(
            (cat) => !!userConsent[cat]
          );
          return shouldUnblock;
        }).forEach((item) => unblockableScripts.push(...item.urls));
        if (unblockableScripts.length > 0) {
          autoblock.unblock(unblockableScripts);
        }
      }
    }
    loadInlineScripts(acceptedCategories);
    loadInlineIframes(acceptedCategories);
  } catch (e2) {
    report(e2);
  }
};
const useUrl = () => {
  const [url, setUrl] = h(_WINDOW_.location.pathname);
  y(() => {
    const epagesEventTraget = _WINDOW_.eComEventTarget;
    if (!epagesEventTraget) {
      return;
    }
    const handler = (event) => {
      const newUrl = event.detail.url;
      if (newUrl !== url) {
        setUrl(newUrl);
      }
    };
    addEventListener(epagesEventTraget, "pageview", handler);
    return () => removeEventListener(
      epagesEventTraget,
      "pageview",
      handler
    );
  }, [url]);
  return url;
};
const EVENT_NAME$7 = "".concat(EVENTS_PREFIX, "_render_embeds");
const dispatchRenderEmbedsEvent = () => {
  dispatchJSEvent(EVENT_NAME$7);
};
const ContentLoader = () => {
  const url = useUrl();
  const { hasConsented, userConsent, preConsent } = useUserConsent();
  const { widgetConfig, preloadSettings } = useAppState();
  y(() => {
    const executeContent = () => {
      return loadContentForConsent(
        hasConsented ? userConsent : preConsent,
        widgetConfig,
        preloadSettings
      );
    };
    executeContent();
    addEventListener(_WINDOW_, EVENT_NAME$7, executeContent);
    return () => removeEventListener(_WINDOW_, EVENT_NAME$7, executeContent);
  }, [
    hasConsented,
    userConsent,
    preConsent,
    widgetConfig,
    url,
    preloadSettings
  ]);
  y(() => {
    __vitePreload(() => Promise.resolve({}), true ? __vite__mapDeps([10]) : void 0, import.meta.url);
  }, []);
  return NULL;
};
const makeCategoryConsentObject = (consent, widgetConfig) => {
  const categoryConsent = categories.reduce(
    (aggregate, cat) => {
      aggregate[cat] = isCategoryAccepted(
        cat,
        consent,
        widgetConfig.consentPolicy,
        widgetConfig.scripts
      );
      return aggregate;
    },
    // make sure to clone the default value
    // to ensure it's not overwriting the imported object
    // https://gitlab.com/cookiefirst/cookiefirst/-/issues/363
    { ...EMPTY_CATEGORY_CONSENT }
  );
  return categoryConsent;
};
const GRANTED = "granted";
const DENIED = "denied";
var clarityCounter = 0;
const dispatchMicrosoftConsentEvents = (consent, hasConsented = FALSE, widgetConfig) => {
  const categoryConsent = makeCategoryConsentObject(consent, widgetConfig);
  if (widgetConfig.microsoftConsentModeEnabled) {
    if (hasConsented || isScannerApp()) {
      const consentMode = {
        ad_storage: categoryConsent[ADVERTISING] ? GRANTED : DENIED
      };
      _WINDOW_.uetq = _WINDOW_.uetq || [];
      _WINDOW_.uetq.push("consent", "update", consentMode);
    } else {
      if (categoryConsent[ADVERTISING]) {
        const consentMode = {
          ad_storage: GRANTED
        };
        _WINDOW_.uetq = _WINDOW_.uetq || [];
        _WINDOW_.uetq.push("consent", "update", consentMode);
      }
    }
  }
  if (widgetConfig.microsoftClarityEnabled) {
    setMicrosoftClarity(categoryConsent, hasConsented);
  }
};
const setMicrosoftClarity = (categoryConsent, hasConsented) => {
  if (!_WINDOW_.clarity) {
    setTimeout(() => {
      clarityCounter++;
      if (clarityCounter >= 500) {
        console.warn(
          "".concat(LOGS_PREFIX, " Microsoft Clarity is still not available after 5s. Banner will now stop trying to initialize it.")
        );
      } else {
        setMicrosoftClarity(categoryConsent, hasConsented);
      }
    }, 20);
  } else {
    if (categoryConsent[PERFORMANCE]) {
      _WINDOW_.clarity("consent");
    } else {
      if (hasConsented) {
        _WINDOW_.clarity("consent", false);
      }
    }
  }
};
const EVENT_NAME$6 = "".concat(EVENTS_PREFIX, "_consent");
const SERVICES_EVENT_NAME$1 = "".concat(EVENTS_PREFIX, "_services_consent");
const dispatchConsentEvent = (consent, hasConsented = false, widgetConfig) => {
  const jsEventData = hasConsented ? makeCategoryConsentObject(consent, widgetConfig) : NULL;
  const granularEventData = hasConsented ? makeGranularConsentObject(consent, widgetConfig) : NULL;
  dispatchJSEvent(EVENT_NAME$6, jsEventData);
  dispatchJSEvent(SERVICES_EVENT_NAME$1, granularEventData);
  dispatchGTMConsentEvents(consent, hasConsented, widgetConfig);
  dispatchMicrosoftConsentEvents(consent, hasConsented, widgetConfig);
};
const CATEGORIES = [
  NECESSARY,
  ADVERTISING,
  PERFORMANCE,
  FUNCTIONAL
];
const GTM_CALLBACKS = [];
const AFTER_CONSENT_UPDATE_EVENT = "".concat(EVENTS_PREFIX, "_after_consent_update");
_WINDOW_.addCFGTMConsentListener = (callback) => {
  GTM_CALLBACKS.push(callback);
};
const dispatchGTMConsentEvents = (consent, hasConsented = FALSE, widgetConfig) => {
  const { dataLayer } = integrationSettings;
  {
    coreLogger({ dl: _WINDOW_[dataLayer], gtag: _WINDOW_.gtag });
  }
  _WINDOW_[dataLayer] = _WINDOW_[dataLayer] || [];
  if (typeof _WINDOW_.gtag !== "function") {
    _WINDOW_.gtag = function(...args) {
      _WINDOW_[dataLayer].push(args);
    };
  }
  const dl = _WINDOW_[dataLayer];
  const gtag = _WINDOW_.gtag;
  const categoryConsent = makeCategoryConsentObject(consent, widgetConfig);
  const granularConsent = makeGranularConsentObject(consent, widgetConfig);
  if (widgetConfig.googleConsentModeEnabled) {
    if (GTM_CALLBACKS.length === 0) {
      if (hasConsented && !widgetConfig.disableGCMUpdateEvents || isScannerApp()) {
        const consentMode = {
          security_storage: GRANTED,
          // always granted because depends on "necessary" category
          analytics_storage: categoryConsent[PERFORMANCE] ? GRANTED : DENIED,
          functionality_storage: categoryConsent[FUNCTIONAL] ? GRANTED : DENIED,
          ad_storage: categoryConsent[ADVERTISING] ? GRANTED : DENIED,
          ad_personalization: categoryConsent[ADVERTISING] ? GRANTED : DENIED,
          ad_user_data: categoryConsent[ADVERTISING] ? GRANTED : DENIED,
          personalization_storage: categoryConsent[FUNCTIONAL] ? GRANTED : DENIED
        };
        gtag("consent", "update", consentMode);
      }
      if (hasConsented || categoryConsent[ADVERTISING]) {
        gtag("set", "ads_data_redaction", !categoryConsent[ADVERTISING]);
      }
    } else {
      GTM_CALLBACKS.forEach((callback) => {
        callback(categoryConsent, hasConsented, widgetConfig);
      });
    }
  }
  const data = dl.reduce(
    (prev, curr) => ({ ...prev, ...curr }),
    {}
  );
  const sendToGTM = (key, value) => {
    const variable = "".concat(EVENTS_PREFIX, "_").concat(key, "_enabled");
    if (data[variable] === value) {
      return;
    }
    dl.push({
      event: "".concat(EVENT_NAME$6, "_").concat(key),
      [variable]: value
    });
  };
  widgetConfig.scripts.filter(
    (script) => script.integration === SCRIPT_INTEGRATION_METHOD_GTM_LOAD
  ).forEach((script) => {
    const key = script.consent_key;
    sendToGTM(key, !!granularConsent[key]);
  });
  CATEGORIES.forEach((cat) => sendToGTM(cat, !!categoryConsent[cat]));
  dl.push({ event: AFTER_CONSENT_UPDATE_EVENT });
};
const isConsentModeInitProperly = () => {
  if (!_WINDOW_["google_tag_data"]) {
    console.warn("No Consent Mode data found");
    return;
  }
  const statusText = (status) => status === void 0 ? "" : status ? "granted" : "denied";
  const statusColor = (status) => status === "granted" ? "color: #0C0" : "color: #C00";
  const tagData = _WINDOW_["google_tag_data"];
  const consentEntries = "ics" in tagData ? tagData.ics.entries : null;
  let defaultStatus = "", updateStatus = "";
  for (const entry in consentEntries) {
    defaultStatus = statusText(consentEntries[entry]["default"]);
    updateStatus = statusText(consentEntries[entry]["update"]);
    if (defaultStatus === "" && updateStatus === "") continue;
    const message = "	".concat(entry, ":\n        ").concat(defaultStatus !== "" ? "\n		Default: %c" + defaultStatus : "%c", "%c\n        ").concat(updateStatus !== "" ? "\n		Update: %c" + updateStatus : "%c");
    console.log(
      message,
      defaultStatus !== "" ? statusColor(defaultStatus) : "",
      "",
      updateStatus !== "" ? statusColor(updateStatus) : "",
      ""
    );
  }
  if (defaultStatus === "") {
    console.log("No default Consent settings found");
  }
  const wasSetLate = tagData.ics.wasSetLate;
  if (wasSetLate) {
    console.error(
      "%cYour Consent Mode issue: %cA tag read consent before a Default was set. At least one of your Google Tags fired before the Consent Mode defaults were set. Read more: https://developers.google.com/tag-platform/security/guides/consent-debugging#default-consent or issue a support ticket to CookieFirst.",
      "color: red; font-weight: bold;",
      "color: red;"
    );
  } else {
    console.log("%cConsent Mode defaults are correctly set in time.", "color: green;");
  }
};
const EVENT_NAME$5 = "".concat(EVENTS_PREFIX, "_consent_loaded");
const SERVICES_EVENT_NAME = "".concat(EVENTS_PREFIX, "_services_consent_loaded");
const dispatchConsentLoadedEvent = (consent, hasConsented = FALSE, widgetConfig) => {
  const categoryEventData = hasConsented ? makeCategoryConsentObject(consent, widgetConfig) : NULL;
  const granularEventData = hasConsented ? makeGranularConsentObject(consent, widgetConfig) : NULL;
  dispatchJSEvent(EVENT_NAME$5, categoryEventData);
  dispatchJSEvent(SERVICES_EVENT_NAME, granularEventData);
  const { dataLayer, debugMode } = integrationSettings;
  const dl = _WINDOW_[dataLayer];
  if (!widgetConfig.tcfEnabled || isArray(dl) && dl.some((element) => {
    if (typeof element === "object" && element !== null && "event" in element) {
      return element.event === "".concat(EVENTS_PREFIX, "_tcf_init");
    }
    return false;
  })) {
    dispatchGTMConsentEvents(consent, hasConsented, widgetConfig);
    dispatchMicrosoftConsentEvents(consent, hasConsented, widgetConfig);
    if (debugMode) {
      isConsentModeInitProperly();
    }
  } else {
    _WINDOW_.addEventListener("".concat(EVENTS_PREFIX, "_tcf_init"), () => {
      dispatchGTMConsentEvents(consent, hasConsented, widgetConfig);
      dispatchMicrosoftConsentEvents(consent, hasConsented, widgetConfig);
      if (debugMode) {
        isConsentModeInitProperly();
      }
    });
  }
};
const createCookieFirstPublicApiInstance = (deps) => {
  const _dep = deps;
  const consentCtx = _dep.consent;
  const widgetConfig = deps.widgetConfig;
  const stealthMode = !!deps.stealthMode;
  const hasConsented = !!consentCtx.hasConsented;
  let consent = NULL;
  let acceptedServices = {};
  if (hasConsented) {
    const userConsent = consentCtx.userConsent;
    const categoryConsent = makeCategoryConsentObject(
      userConsent,
      widgetConfig
    );
    const granularConsent = makeGranularConsentObject(
      userConsent,
      widgetConfig
    );
    consent = categoryConsent;
    acceptedServices = granularConsent;
  }
  const consentTimestamp = consentCtx.consentTimestamp;
  const visitorId = consentCtx.visitorId;
  const parseCategoryArg = (category = "") => {
    const cats = isArray(category) ? category : [category];
    if (!cats.every((c2) => includes(categories, c2))) {
      throw new Error(INVALID_CATEGORY);
    }
    return cats;
  };
  const parseServiceArg = (service = "") => {
    const allServices = widgetConfig.scripts.map((s2) => s2.consent_key);
    const requestedServices = isArray(service) ? service : [service];
    if (!requestedServices.every((s2) => includes(allServices, s2))) {
      throw new Error(INVALID_SERVICE);
    }
    return requestedServices;
  };
  const deny = () => consentCtx.deny();
  const declineAllCategories = () => {
    return deny();
  };
  const publicApi = {
    stealthMode,
    hasConsented,
    consent,
    acceptedServices,
    consentTimestamp,
    visitorId,
    openPanel(tab = PANEL_SETTINGS_TAB) {
      _dep.setPanelTab(tab);
    },
    closePanel() {
      _dep.setPanelTab(NULL);
    },
    updateConsent(consent2 = {}) {
      if (!isObject(consent2)) {
        throw new Error(NEW_CONSENT_INVALID_TYPE);
      }
      return consentCtx.handleConsent(consent2);
    },
    acceptCategory(category) {
      const cats = parseCategoryArg(category);
      return consentCtx.acceptCategories(cats);
    },
    declineCategory(category) {
      const cats = parseCategoryArg(category);
      if (!consent) {
        return declineAllCategories();
      }
      return consentCtx.declineCategories(cats);
    },
    acceptService(service) {
      const services = parseServiceArg(service);
      return consentCtx.acceptServices(services);
    },
    declineService(service) {
      const services = parseServiceArg(service);
      if (!consent) {
        return declineAllCategories();
      }
      return consentCtx.declineServices(services);
    },
    acceptAllCategories: consentCtx.acceptAll,
    acceptPreselectedCategories: consentCtx.acceptDefault,
    deny,
    declineAllCategories,
    withdrawConsent: consentCtx.handleWithdraw,
    fetchLatestScan: _dep.fetchLatestScan,
    renderEmbeds() {
      dispatchRenderEmbedsEvent();
    },
    // a way for SPAs to notify us about view change
    notifyViewChanged() {
      dispatchConsentLoadedEvent(
        consent || EMPTY_CONSENT,
        hasConsented,
        widgetConfig
      );
      dispatchRenderEmbedsEvent();
    },
    changeLanguage: _dep.setUserLang
  };
  return publicApi;
};
const EVENT_NAME$4 = "".concat(EVENTS_PREFIX, "_init");
const dispatchAppInitializedEvent = () => {
  coreLogger("Init");
  dispatchJSEvent(EVENT_NAME$4);
  const { dataLayer } = integrationSettings;
  const dl = _WINDOW_[dataLayer];
  if (isArray(dl)) {
    dl.push({ event: EVENT_NAME$4 });
  }
};
const cachedData = {};
const fetchSiteCookies = (userLang, version) => {
  const { apiKey } = integrationSettings;
  return createPromise((resolve, reject) => {
    if (!userLang) {
      return reject(new Error(COOKIE_LOADING_FAILED));
    }
    if (cachedData[userLang]) {
      return resolve(cachedData[userLang]);
    }
    const query = makeUrlQuery({
      api_key: apiKey,
      lang: userLang,
      version: version || Date.now().toString(),
      origin: window.location.hostname
    });
    getJson("".concat(EDGE_API_URL, "/site-cookies?").concat(query)).then(([body]) => {
      if (cachedData[userLang]) {
        return resolve(cachedData[userLang]);
      }
      cachedData[userLang] = {
        ...body,
        cookies: body.cookies || [],
        cookie_policy_updated_at: body.cookie_policy_updated_at || "",
        cookie_list_updated_at: body.cookie_list_updated_at || ""
      };
      return resolve(cachedData[userLang]);
    }).catch(reject);
  });
};
const TRANSLATIONS_CONTEXT = J(
  NULL
);
const useTranslation = () => {
  const ctx = x(TRANSLATIONS_CONTEXT);
  if (!ctx) {
    throw new Error(CONTEXT_OUTSIDE_PROVIDER);
  }
  return ctx;
};
const PublicApi = () => {
  const { stealthMode } = integrationSettings;
  const {
    changePanelTab,
    widgetConfig,
    shouldTriggerConsentEvent,
    setShouldTriggerConsentEvent
  } = useAppState();
  const consent = useUserConsent();
  const [isInitialized, setIsInitialized] = h(FALSE);
  const { userLang, setUserLang } = useTranslation();
  y(() => {
    _WINDOW_[JS_API_OBJECT_NAME] = createCookieFirstPublicApiInstance({
      setPanelTab: changePanelTab,
      consent,
      widgetConfig,
      stealthMode,
      fetchLatestScan: () => fetchSiteCookies(userLang, widgetConfig.version),
      setUserLang
    });
    if (!isInitialized) {
      setIsInitialized(TRUE);
      dispatchAppInitializedEvent();
    }
    {
      _WINDOW_.cookiefirst_show_settings = _WINDOW_[JS_API_OBJECT_NAME].openPanel;
    }
  }, [
    isInitialized,
    changePanelTab,
    consent,
    userLang,
    stealthMode,
    widgetConfig,
    setUserLang
  ]);
  y(() => {
    if (shouldTriggerConsentEvent) {
      dispatchConsentEvent(
        consent.userConsent,
        consent.hasConsented,
        widgetConfig
      );
      setShouldTriggerConsentEvent(FALSE);
    }
  }, [
    shouldTriggerConsentEvent,
    setShouldTriggerConsentEvent,
    consent.userConsent,
    consent.hasConsented,
    widgetConfig
  ]);
  return NULL;
};
const LANG_CODES_MAP = {
  nb: "no",
  nn: "no"
};
const cleanLangString = (rawLang = "") => {
  let lang = rawLang || "";
  if (includes(lang, "-")) {
    lang = lang.split("-")[0];
  } else if (includes(lang, "_")) {
    lang = lang.split("_")[0];
  }
  if (lang.length !== 2) {
    return "";
  }
  return LANG_CODES_MAP[lang] || lang;
};
const detectAppLanguage = (whitelist = [], forcedLang = NULL, respectSavedLang) => {
  if (!whitelist.length) {
    return NULL;
  }
  const isOnWhitelist = (lang) => {
    return includes(whitelist, lang);
  };
  const searchLang = new URL(_WINDOW_.location.href).searchParams.get(
    LANGUAGE_COOKIE
  );
  if (searchLang) {
    const ql = cleanLangString(searchLang);
    if (isOnWhitelist(ql)) {
      return ql;
    }
  }
  if (respectSavedLang) {
    const localStorageKey = "".concat(GENERIC_PREFIX, "-user-lang");
    const localUserLang = getLocalStorageItem(
      localStorageKey,
      NULL
    );
    if (localUserLang && isOnWhitelist(localUserLang)) {
      return localUserLang;
    }
  }
  if (forcedLang) {
    if (forcedLang === "inherit") {
      const htmlLang = cleanLangString(_DOCUMENT_.documentElement.lang || "");
      if (isOnWhitelist(htmlLang)) {
        return htmlLang;
      }
    }
    const parsedForced = cleanLangString(forcedLang);
    if (isOnWhitelist(parsedForced)) {
      return parsedForced;
    }
  }
  const nav = navigator;
  let found = [];
  if (nav.languages) {
    found.push(...Array.from(nav.languages));
  }
  found.push(nav.userLanguage || nav.language);
  found = found.filter((i2) => isString(i2)).map((i2) => i2.toLowerCase());
  for (let i2 = 0; i2 < found.length; i2++) {
    const lang = cleanLangString(found[i2]);
    if (isOnWhitelist(lang)) {
      return lang;
    }
  }
  return whitelist[0];
};
const RTL = "rtl";
const LTR = "ltr";
const getTextDirection = (lang) => {
  return includes(["ar", "he"], lang) ? RTL : LTR;
};
const ERROR_PREFIX = "Failed to load translatios";
const loadTextsFile = (dir, lang, version) => {
  const url = getStaticFileUrl("".concat(dir, "/lang-widget-").concat(lang, ".json"), version);
  coreLogger("load translation file for " + lang + " from " + url);
  return createPromise((resolve, reject) => {
    getJson(url).then(
      ([res]) => {
        coreLogger("init lang: " + lang);
        resolve(res);
      },
      (e2) => {
        coreLogger(new Error(ERROR_PREFIX + "(" + lang + ")"));
        reject(e2);
      }
    );
  });
};
const loadTranslations = (baseUrl, langs, userLang, version) => {
  return createPromise((resolve) => {
    loadTextsFile(baseUrl, userLang || "", version || randomString()).then(
      (texts) => resolve(texts || {}),
      (e2) => {
        report(e2);
        loadTextsFile(baseUrl, langs[0], version || randomString()).then(
          (texts) => resolve(texts || {}),
          (e22) => {
            coreLogger(ERROR_PREFIX);
            report(e22);
            resolve({});
          }
        );
      }
    );
  });
};
const TranslationsProvider = ({
  children = NULL
}) => {
  const { dir, forcedLang } = integrationSettings;
  const { widgetConfig } = useAppState();
  const [isInitialized, setIsInitialized] = h(FALSE);
  const [texts, setTexts] = h({});
  const availableLocales = T(
    () => widgetConfig.languages.map((item) => item.value),
    [widgetConfig.languages]
  );
  const [userLang, setUserLangState] = h(
    detectAppLanguage(
      availableLocales,
      forcedLang,
      widgetConfig.showLanguageSwitcher
    ) || availableLocales[0]
  );
  const setUserLang = (lang) => {
    if (!includes(availableLocales, lang)) {
      throw new Error(
        "New language must be one of the configured locales for this domain: " + availableLocales.join(", ")
      );
    }
    setUserLangState(lang);
    saveLocalStorageItem(LANGUAGE_COOKIE, lang);
  };
  y(() => {
    loadTranslations(
      dir || "",
      widgetConfig.languages.map((item) => item.value),
      userLang,
      widgetConfig.version
    ).then((texts2) => {
      setTexts(texts2 || {});
      setIsInitialized(TRUE);
    });
  }, [userLang]);
  const textDirection = T(() => getTextDirection(userLang), [userLang]);
  if (!isInitialized) {
    return NULL;
  }
  const translate = (key, replacements = {}, fallback) => {
    const placeholder = isString(fallback) ? fallback : "";
    const replacementsKeys = objectKeys(replacements);
    const txt = getByPath(texts, key) || placeholder;
    if (!includes(txt, "{{") || !replacementsKeys.length) {
      return txt;
    }
    let final = txt;
    for (let i2 = replacementsKeys.length - 1; i2 >= 0; i2--) {
      const key2 = replacementsKeys[i2];
      const value = replacements[key2];
      final = final.replace("{{".concat(key2, "}}"), value);
    }
    return final;
  };
  return /* @__PURE__ */ u$1(
    TRANSLATIONS_CONTEXT.Provider,
    {
      value: { userLang, t: translate, setUserLang, textDirection },
      children
    }
  );
};
const calculateGranularMetadata = (widgetConfig) => {
  const granularMetadata = widgetConfig.scripts.reduce(
    (aggregate, script) => {
      aggregate[script.consent_key] = {
        unique_service_uuid: script.unique_service_uuid,
        name: script.name,
        categories: script.categories
      };
      return aggregate;
    },
    {}
  );
  return granularMetadata;
};
const isConsentEqual = (consentA = {}, consentB = {}, widgetConfig) => {
  const keysToCheck = [];
  if (widgetConfig.isGranularPolicy) {
    keysToCheck.push(...widgetConfig.scripts.map((s2) => s2.consent_key));
  } else {
    keysToCheck.push(...categories);
  }
  for (let i2 = 0; i2 < keysToCheck.length; i2++) {
    const key = keysToCheck[i2];
    if (consentB[key] && !consentA[key] || consentA[key] && !consentB[key]) {
      return false;
    }
  }
  return true;
};
const isConsentStricter = (consentA, consentB, widgetConfig) => {
  if (widgetConfig.isGranularPolicy) {
    for (const script of widgetConfig.scripts) {
      const key = script.consent_key;
      if (consentB[key] && !consentA[key]) {
        return true;
      }
    }
  } else {
    for (let i2 = 0; i2 < categories.length; i2++) {
      const cat = categories[i2];
      if (consentB[cat] && !consentA[cat]) {
        return true;
      }
    }
  }
  return false;
};
const saveLocalVisitorId = (visitorId = "") => {
  saveLocalStorageItem(VISITOR_ID_COOKIE, visitorId);
};
const EVENT_NAME$3 = "".concat(EVENTS_PREFIX, "_consent_action");
const dispatchUserConsentedEvent = () => {
  const jsEventData = NULL;
  dispatchJSEvent(EVENT_NAME$3, jsEventData);
};
const post = (url, body) => {
  return createPromise((resolve, reject) => {
    getJson(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    }).then(resolve, reject);
  });
};
const logUserConsent = (consent, action, visitorId, configVersion = NULL, visitorCountry = NULL, visitorRegion = NULL, consentPolicy = NULL, granularMetadata = NULL, tcstring = NULL, acstring = NULL) => {
  const { apiKey } = integrationSettings;
  return createPromise((resolve, reject) => {
    if (!apiKey) {
      return resolve(NULL);
    }
    post(
      "".concat(API_URL, "/consent"),
      {
        preferences: consent,
        apiKey,
        action,
        visitor_id: visitorId || "",
        config_version: configVersion,
        visitor_country: visitorCountry || NULL,
        visitor_region: visitorRegion || NULL,
        consent_policy: consentPolicy || NULL,
        granular_metadata: granularMetadata || NULL,
        url: window.location.href,
        tcstring,
        acstring
      }
    ).then(
      ([body]) => {
        resolve(body.visitor_id || NULL);
      },
      (e2) => {
        report("Error logging user consent. Data:", { error: e2 });
        reject(e2);
      }
    );
  });
};
class DecodingError extends Error {
  /**
   * constructor - constructs an DecodingError
   *
   * @param {string} msg - Decoding Error Message
   * @return {undefined}
   */
  constructor(msg) {
    super(msg);
    this.name = "DecodingError";
  }
}
class EncodingError extends Error {
  /**
   * constructor - constructs an EncodingError
   *
   * @param {string} msg - Encoding Error Message
   * @return {undefined}
   */
  constructor(msg) {
    super(msg);
    this.name = "EncodingError";
  }
}
class GVLError extends Error {
  /**
   * constructor - constructs a GVLError
   *
   * @param {string} msg - Error message to display
   * @return {undefined}
   */
  constructor(msg) {
    super(msg);
    this.name = "GVLError";
  }
}
class TCModelError extends Error {
  /**
   * constructor - constructs an TCModelError
   *
   * @param {string} fieldName - the errored field
   * @param {string} passedValue - what was passed
   * @return {undefined}
   */
  constructor(fieldName, passedValue, msg = "") {
    super("invalid value ".concat(passedValue, " passed for ").concat(fieldName, " ").concat(msg));
    this.name = "TCModelError";
  }
}
class Base64Url {
  /**
   * encodes an arbitrary-length bitfield string into base64url
   *
   * @static
   * @param {string} str - arbitrary-length bitfield string to be encoded to base64url
   * @return {string} - base64url encoded result
   */
  static encode(str) {
    if (!/^[0-1]+$/.test(str)) {
      throw new EncodingError("Invalid bitField");
    }
    const padding = str.length % this.LCM;
    str += padding ? "0".repeat(this.LCM - padding) : "";
    let result = "";
    for (let i2 = 0; i2 < str.length; i2 += this.BASIS) {
      result += this.DICT[parseInt(str.substr(i2, this.BASIS), 2)];
    }
    return result;
  }
  /**
   * decodes a base64url encoded bitfield string
   *
   * @static
   * @param {string} str - base64url encoded bitfield string to be decoded
   * @return {string} - bitfield string
   */
  static decode(str) {
    if (!/^[A-Za-z0-9\-_]+$/.test(str)) {
      throw new DecodingError("Invalidly encoded Base64URL string");
    }
    let result = "";
    for (let i2 = 0; i2 < str.length; i2++) {
      const strBits = this.REVERSE_DICT.get(str[i2]).toString(2);
      result += "0".repeat(this.BASIS - strBits.length) + strBits;
    }
    return result;
  }
}
/**
 * Base 64 URL character set.  Different from standard Base64 char set
 * in that '+' and '/' are replaced with '-' and '_'.
 */
__publicField(Base64Url, "DICT", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_");
__publicField(Base64Url, "REVERSE_DICT", /* @__PURE__ */ new Map([
  ["A", 0],
  ["B", 1],
  ["C", 2],
  ["D", 3],
  ["E", 4],
  ["F", 5],
  ["G", 6],
  ["H", 7],
  ["I", 8],
  ["J", 9],
  ["K", 10],
  ["L", 11],
  ["M", 12],
  ["N", 13],
  ["O", 14],
  ["P", 15],
  ["Q", 16],
  ["R", 17],
  ["S", 18],
  ["T", 19],
  ["U", 20],
  ["V", 21],
  ["W", 22],
  ["X", 23],
  ["Y", 24],
  ["Z", 25],
  ["a", 26],
  ["b", 27],
  ["c", 28],
  ["d", 29],
  ["e", 30],
  ["f", 31],
  ["g", 32],
  ["h", 33],
  ["i", 34],
  ["j", 35],
  ["k", 36],
  ["l", 37],
  ["m", 38],
  ["n", 39],
  ["o", 40],
  ["p", 41],
  ["q", 42],
  ["r", 43],
  ["s", 44],
  ["t", 45],
  ["u", 46],
  ["v", 47],
  ["w", 48],
  ["x", 49],
  ["y", 50],
  ["z", 51],
  ["0", 52],
  ["1", 53],
  ["2", 54],
  ["3", 55],
  ["4", 56],
  ["5", 57],
  ["6", 58],
  ["7", 59],
  ["8", 60],
  ["9", 61],
  ["-", 62],
  ["_", 63]
]));
/**
 * log2(64) = 6
 */
__publicField(Base64Url, "BASIS", 6);
__publicField(Base64Url, "LCM", 24);
const _ConsentLanguages = class _ConsentLanguages {
  has(key) {
    return _ConsentLanguages.langSet.has(key);
  }
  parseLanguage(lang) {
    lang = lang.toUpperCase();
    const primaryLanguage = lang.split("-")[0];
    if (lang.length >= 2 && primaryLanguage.length == 2) {
      if (_ConsentLanguages.langSet.has(lang)) {
        return lang;
      } else if (_ConsentLanguages.langSet.has(primaryLanguage)) {
        return primaryLanguage;
      }
      const fullPrimaryLang = primaryLanguage + "-" + primaryLanguage;
      if (_ConsentLanguages.langSet.has(fullPrimaryLang)) {
        return fullPrimaryLang;
      }
      for (const supportedLang of _ConsentLanguages.langSet) {
        if (supportedLang.indexOf(lang) !== -1 || supportedLang.indexOf(primaryLanguage) !== -1) {
          return supportedLang;
        }
      }
    }
    throw new Error("unsupported language ".concat(lang));
  }
  forEach(callback) {
    _ConsentLanguages.langSet.forEach(callback);
  }
  get size() {
    return _ConsentLanguages.langSet.size;
  }
};
__publicField(_ConsentLanguages, "langSet", /* @__PURE__ */ new Set([
  "AR",
  "BG",
  "BS",
  "CA",
  "CS",
  "CY",
  "DA",
  "DE",
  "EL",
  "EN",
  "ES",
  "ET",
  "EU",
  "FI",
  "FR",
  "GL",
  "HE",
  "HI",
  "HR",
  "HU",
  "ID",
  "IS",
  "IT",
  "JA",
  "KA",
  "KO",
  "LT",
  "LV",
  "MK",
  "MS",
  "MT",
  "NL",
  "NO",
  "PL",
  "PT-BR",
  "PT-PT",
  "RO",
  "RU",
  "SK",
  "SL",
  "SQ",
  "SR-LATN",
  "SR-CYRL",
  "SV",
  "SW",
  "TH",
  "TL",
  "TR",
  "UK",
  "VI",
  "ZH",
  "ZH-HANT"
]));
let ConsentLanguages = _ConsentLanguages;
class Fields {
}
__publicField(Fields, "cmpId", "cmpId");
__publicField(Fields, "cmpVersion", "cmpVersion");
__publicField(Fields, "consentLanguage", "consentLanguage");
__publicField(Fields, "consentScreen", "consentScreen");
__publicField(Fields, "created", "created");
__publicField(Fields, "supportOOB", "supportOOB");
__publicField(Fields, "isServiceSpecific", "isServiceSpecific");
__publicField(Fields, "lastUpdated", "lastUpdated");
__publicField(Fields, "numCustomPurposes", "numCustomPurposes");
__publicField(Fields, "policyVersion", "policyVersion");
__publicField(Fields, "publisherCountryCode", "publisherCountryCode");
__publicField(Fields, "publisherCustomConsents", "publisherCustomConsents");
__publicField(Fields, "publisherCustomLegitimateInterests", "publisherCustomLegitimateInterests");
__publicField(Fields, "publisherLegitimateInterests", "publisherLegitimateInterests");
__publicField(Fields, "publisherConsents", "publisherConsents");
__publicField(Fields, "publisherRestrictions", "publisherRestrictions");
__publicField(Fields, "purposeConsents", "purposeConsents");
__publicField(Fields, "purposeLegitimateInterests", "purposeLegitimateInterests");
__publicField(Fields, "purposeOneTreatment", "purposeOneTreatment");
__publicField(Fields, "specialFeatureOptins", "specialFeatureOptins");
__publicField(Fields, "useNonStandardTexts", "useNonStandardTexts");
__publicField(Fields, "vendorConsents", "vendorConsents");
__publicField(Fields, "vendorLegitimateInterests", "vendorLegitimateInterests");
__publicField(Fields, "vendorListVersion", "vendorListVersion");
__publicField(Fields, "vendorsAllowed", "vendorsAllowed");
__publicField(Fields, "vendorsDisclosed", "vendorsDisclosed");
__publicField(Fields, "version", "version");
class Cloneable {
  /**
   * clone - returns a copy of the classes with new values and not references
   *
   * @return {T}
   */
  clone() {
    const myClone = new this.constructor();
    const keys = Object.keys(this);
    keys.forEach((key) => {
      const value = this.deepClone(this[key]);
      if (value !== void 0) {
        myClone[key] = value;
      }
    });
    return myClone;
  }
  /**
   * deepClone - recursive function that makes copies of reference values
   *
   * @param {unknown} item
   * @return {unknown}
   */
  deepClone(item) {
    const itsType = typeof item;
    if (itsType === "number" || itsType === "string" || itsType === "boolean") {
      return item;
    } else if (item !== null && itsType === "object") {
      if (typeof item.clone === "function") {
        return item.clone();
      } else if (item instanceof Date) {
        return new Date(item.getTime());
      } else if (item[Symbol.iterator] !== void 0) {
        const ar = [];
        for (const subItem of item) {
          ar.push(this.deepClone(subItem));
        }
        if (item instanceof Array) {
          return ar;
        } else {
          return new item.constructor(ar);
        }
      } else {
        const retr = {};
        for (const prop in item) {
          if (item.hasOwnProperty(prop)) {
            retr[prop] = this.deepClone(item[prop]);
          }
        }
        return retr;
      }
    }
  }
}
var RestrictionType;
(function(RestrictionType2) {
  RestrictionType2[RestrictionType2["NOT_ALLOWED"] = 0] = "NOT_ALLOWED";
  RestrictionType2[RestrictionType2["REQUIRE_CONSENT"] = 1] = "REQUIRE_CONSENT";
  RestrictionType2[RestrictionType2["REQUIRE_LI"] = 2] = "REQUIRE_LI";
})(RestrictionType || (RestrictionType = {}));
const _PurposeRestriction = class _PurposeRestriction extends Cloneable {
  /**
   * constructor
   *
   * @param {number} purposeId? - may optionally pass the purposeId into the
   * constructor
   * @param {RestrictionType} restrictionType? - may
   * optionally pass the restrictionType into the constructor
   * @return {undefined}
   */
  constructor(purposeId, restrictionType) {
    super();
    __publicField(this, "purposeId_");
    __publicField(this, "restrictionType");
    if (purposeId !== void 0) {
      this.purposeId = purposeId;
    }
    if (restrictionType !== void 0) {
      this.restrictionType = restrictionType;
    }
  }
  static unHash(hash) {
    const splitUp = hash.split(this.hashSeparator);
    const purpRestriction = new _PurposeRestriction();
    if (splitUp.length !== 2) {
      throw new TCModelError("hash", hash);
    }
    purpRestriction.purposeId = parseInt(splitUp[0], 10);
    purpRestriction.restrictionType = parseInt(splitUp[1], 10);
    return purpRestriction;
  }
  get hash() {
    if (!this.isValid()) {
      throw new Error("cannot hash invalid PurposeRestriction");
    }
    return "".concat(this.purposeId).concat(_PurposeRestriction.hashSeparator).concat(this.restrictionType);
  }
  /**
   * @return {number} The purpose Id associated with a publisher
   * purpose-by-vendor restriction that resulted in a different consent or LI
   * status than the consent or LI purposes allowed lists.
   */
  get purposeId() {
    return this.purposeId_;
  }
  /**
   * @param {number} idNum - The purpose Id associated with a publisher
   * purpose-by-vendor restriction that resulted in a different consent or LI
   * status than the consent or LI purposes allowed lists.
   */
  set purposeId(idNum) {
    this.purposeId_ = idNum;
  }
  isValid() {
    return Number.isInteger(this.purposeId) && this.purposeId > 0 && (this.restrictionType === RestrictionType.NOT_ALLOWED || this.restrictionType === RestrictionType.REQUIRE_CONSENT || this.restrictionType === RestrictionType.REQUIRE_LI);
  }
  isSameAs(otherPR) {
    return this.purposeId === otherPR.purposeId && this.restrictionType === otherPR.restrictionType;
  }
};
__publicField(_PurposeRestriction, "hashSeparator", "-");
let PurposeRestriction = _PurposeRestriction;
class PurposeRestrictionVector extends Cloneable {
  constructor() {
    super(...arguments);
    /**
     * if this originatd from an encoded string we'll need a place to store the
     * bit length; it can be set and got from here
     */
    __publicField(this, "bitLength", 0);
    /**
     * a map indexed by a string which will be a 'hash' of the purpose and
     * restriction type.
     */
    __publicField(this, "map", /* @__PURE__ */ new Map());
    __publicField(this, "gvl_");
  }
  has(hash) {
    return this.map.has(hash);
  }
  isOkToHave(restrictionType, purposeId, vendorId) {
    var _a2;
    let result = true;
    if ((_a2 = this.gvl) == null ? void 0 : _a2.vendors) {
      const vendor = this.gvl.vendors[vendorId];
      if (vendor) {
        if (restrictionType === RestrictionType.NOT_ALLOWED) {
          result = vendor.legIntPurposes.includes(purposeId) || vendor.purposes.includes(purposeId);
        } else if (vendor.flexiblePurposes.length) {
          switch (restrictionType) {
            /**
               * If the vendor has the purposeId in flexiblePurposes and it is
               * listed as a legitimate interest purpose we can set the
               * override to require consent.
               */
            case RestrictionType.REQUIRE_CONSENT:
              result = vendor.flexiblePurposes.includes(purposeId) && vendor.legIntPurposes.includes(purposeId);
              break;
            /**
             * If the vendor has the purposeId in flexiblePurposes and it is
             * listed as a consent purpose we can set the
             * override to require legitimate interest.
             */
            case RestrictionType.REQUIRE_LI:
              result = vendor.flexiblePurposes.includes(purposeId) && vendor.purposes.includes(purposeId);
              break;
          }
        } else {
          result = false;
        }
      } else {
        result = false;
      }
    }
    return result;
  }
  /**
   * add - adds a given Vendor ID under a given Purpose Restriction
   *
   * @param {number} vendorId
   * @param {PurposeRestriction} purposeRestriction
   * @return {void}
   */
  add(vendorId, purposeRestriction) {
    if (this.isOkToHave(purposeRestriction.restrictionType, purposeRestriction.purposeId, vendorId)) {
      const hash = purposeRestriction.hash;
      if (!this.has(hash)) {
        this.map.set(hash, /* @__PURE__ */ new Set());
        this.bitLength = 0;
      }
      this.map.get(hash).add(vendorId);
    }
  }
  /**
   * restrictPurposeToLegalBasis - adds all Vendors under a given Purpose Restriction
   *
   * @param {PurposeRestriction} purposeRestriction
   * @return {void}
   */
  restrictPurposeToLegalBasis(purposeRestriction) {
    const vendors = Array.from(this.gvl.vendorIds);
    const hash = purposeRestriction.hash;
    const lastEntry = vendors[vendors.length - 1];
    const values = [...Array(lastEntry).keys()].map((i2) => i2 + 1);
    if (!this.has(hash)) {
      this.map.set(hash, new Set(values));
      this.bitLength = 0;
    } else {
      for (let i2 = 1; i2 <= lastEntry; i2++) {
        this.map.get(hash).add(i2);
      }
    }
  }
  /**
   * getVendors - returns array of vendor ids optionally narrowed by a given
   * Purpose Restriction.  If no purpose restriction is passed then all vendor
   * ids will be returned.  One can expect this result to be a unique set of
   * ids no duplicates.
   *
   * @param {PurposeRestriction} [purposeRestriction] - optionally passed to
   * get only Vendor IDs restricted under the given Purpose Restriction
   * @return {number[]} - Unique ID set of vendors
   */
  getVendors(purposeRestriction) {
    let vendorIds = [];
    if (purposeRestriction) {
      const hash = purposeRestriction.hash;
      if (this.has(hash)) {
        vendorIds = Array.from(this.map.get(hash));
      }
    } else {
      const vendorSet = /* @__PURE__ */ new Set();
      this.map.forEach((set) => {
        set.forEach((vendorId) => {
          vendorSet.add(vendorId);
        });
      });
      vendorIds = Array.from(vendorSet);
    }
    return vendorIds.sort((a2, b) => a2 - b);
  }
  getRestrictionType(vendorId, purposeId) {
    let rType;
    this.getRestrictions(vendorId).forEach((purposeRestriction) => {
      if (purposeRestriction.purposeId === purposeId) {
        if (rType === void 0 || rType > purposeRestriction.restrictionType) {
          rType = purposeRestriction.restrictionType;
        }
      }
    });
    return rType;
  }
  /**
   * vendorHasRestriction - determines whether a given Vendor ID is under a
   * given Purpose Restriction
   *
   * @param {number} vendorId
   * @param {PurposeRestriction} purposeRestriction
   * @return {boolean} - true if the give Vendor ID is under the given Purpose
   * Restriction
   */
  vendorHasRestriction(vendorId, purposeRestriction) {
    let has = false;
    const restrictions = this.getRestrictions(vendorId);
    for (let i2 = 0; i2 < restrictions.length && !has; i2++) {
      has = purposeRestriction.isSameAs(restrictions[i2]);
    }
    return has;
  }
  /**
   * getMaxVendorId - gets the Maximum Vendor ID regardless of Purpose
   * Restriction
   *
   * @return {number} - maximum Vendor ID
   */
  getMaxVendorId() {
    let retr = 0;
    this.map.forEach((set) => {
      retr = Math.max(Array.from(set)[set.size - 1], retr);
    });
    return retr;
  }
  getRestrictions(vendorId) {
    const retr = [];
    this.map.forEach((set, hash) => {
      if (vendorId) {
        if (set.has(vendorId)) {
          retr.push(PurposeRestriction.unHash(hash));
        }
      } else {
        retr.push(PurposeRestriction.unHash(hash));
      }
    });
    return retr;
  }
  getPurposes() {
    const purposeIds = /* @__PURE__ */ new Set();
    this.map.forEach((set, hash) => {
      purposeIds.add(PurposeRestriction.unHash(hash).purposeId);
    });
    return Array.from(purposeIds);
  }
  /**
   * remove - removes Vendor ID from a Purpose Restriction
   *
   * @param {number} vendorId
   * @param {PurposeRestriction} purposeRestriction
   * @return {void}
   */
  remove(vendorId, purposeRestriction) {
    const hash = purposeRestriction.hash;
    const set = this.map.get(hash);
    if (set) {
      set.delete(vendorId);
      if (set.size == 0) {
        this.map.delete(hash);
        this.bitLength = 0;
      }
    }
  }
  /**
   * Essential for being able to determine whether we can actually set a
   * purpose restriction since they have to have a flexible legal basis
   *
   * @param {GVL} value - the GVL instance
   */
  set gvl(value) {
    if (!this.gvl_) {
      this.gvl_ = value;
      this.map.forEach((set, hash) => {
        const purposeRestriction = PurposeRestriction.unHash(hash);
        const vendors = Array.from(set);
        vendors.forEach((vendorId) => {
          if (!this.isOkToHave(purposeRestriction.restrictionType, purposeRestriction.purposeId, vendorId)) {
            set.delete(vendorId);
          }
        });
      });
    }
  }
  /**
   * gvl returns local copy of the GVL these restrictions apply to
   *
   * @return {GVL}
   */
  get gvl() {
    return this.gvl_;
  }
  /**
   * isEmpty - whether or not this vector has any restrictions in it
   *
   * @return {boolean}
   */
  isEmpty() {
    return this.map.size === 0;
  }
  /**
   * numRestrictions - returns the number of Purpose Restrictions.
   *
   * @return {number}
   */
  get numRestrictions() {
    return this.map.size;
  }
}
var DeviceDisclosureStorageAccessType;
(function(DeviceDisclosureStorageAccessType2) {
  DeviceDisclosureStorageAccessType2["COOKIE"] = "cookie";
  DeviceDisclosureStorageAccessType2["WEB"] = "web";
  DeviceDisclosureStorageAccessType2["APP"] = "app";
})(DeviceDisclosureStorageAccessType || (DeviceDisclosureStorageAccessType = {}));
var Segment;
(function(Segment2) {
  Segment2["CORE"] = "core";
  Segment2["VENDORS_DISCLOSED"] = "vendorsDisclosed";
  Segment2["VENDORS_ALLOWED"] = "vendorsAllowed";
  Segment2["PUBLISHER_TC"] = "publisherTC";
})(Segment || (Segment = {}));
class SegmentIDs {
}
/**
 * 0 = default - reserved for core string (does not need to be present in the core string)
 * 1 = OOB vendors disclosed
 * 2 = OOB vendors allowed
 * 3 = PublisherTC
 */
__publicField(SegmentIDs, "ID_TO_KEY", [
  Segment.CORE,
  Segment.VENDORS_DISCLOSED,
  Segment.VENDORS_ALLOWED,
  Segment.PUBLISHER_TC
]);
__publicField(SegmentIDs, "KEY_TO_ID", {
  [Segment.CORE]: 0,
  [Segment.VENDORS_DISCLOSED]: 1,
  [Segment.VENDORS_ALLOWED]: 2,
  [Segment.PUBLISHER_TC]: 3
});
class Vector extends Cloneable {
  constructor() {
    super(...arguments);
    /**
     * if this originatd from an encoded string we'll need a place to store the
     * bit length; it can be set and got from here
     */
    __publicField(this, "bitLength", 0);
    __publicField(this, "maxId_", 0);
    __publicField(this, "set_", /* @__PURE__ */ new Set());
  }
  *[Symbol.iterator]() {
    for (let i2 = 1; i2 <= this.maxId; i2++) {
      yield [i2, this.has(i2)];
    }
  }
  /**
   * values()
   *
   * @return {IterableIterator<number>} - returns an iterator of the positive
   * values in the set
   */
  values() {
    return this.set_.values();
  }
  /**
   * maxId
   *
   * @return {number} - the highest id in this Vector
   */
  get maxId() {
    return this.maxId_;
  }
  /**
   * get
   *
   * @param {number} id - key for value to check
   * @return {boolean} - value of that key, if never set it will be false
   */
  has(id) {
    return this.set_.has(id);
  }
  /**
   * unset
   *
   * @param {SingleIDOrCollection} id - id or ids to unset
   * @return {void}
   */
  unset(id) {
    if (Array.isArray(id)) {
      id.forEach((id2) => this.unset(id2));
    } else if (typeof id === "object") {
      this.unset(Object.keys(id).map((strId) => Number(strId)));
    } else {
      this.set_.delete(Number(id));
      this.bitLength = 0;
      if (id === this.maxId) {
        this.maxId_ = 0;
        this.set_.forEach((id2) => {
          this.maxId_ = Math.max(this.maxId, id2);
        });
      }
    }
  }
  isIntMap(item) {
    let result = typeof item === "object";
    result = result && Object.keys(item).every((key) => {
      let itemResult = Number.isInteger(parseInt(key, 10));
      itemResult = itemResult && this.isValidNumber(item[key].id);
      itemResult = itemResult && item[key].name !== void 0;
      return itemResult;
    });
    return result;
  }
  isValidNumber(item) {
    return parseInt(item, 10) > 0;
  }
  isSet(item) {
    let result = false;
    if (item instanceof Set) {
      result = Array.from(item).every(this.isValidNumber);
    }
    return result;
  }
  /**
   * set - sets an item assumed to be a truthy value by its presence
   *
   * @param {SingleIDOrCollection} item - May be a single id (positive integer)
   * or collection of ids in a set, GVL Int Map, or Array.
   *
   * @return {void}
   */
  set(item) {
    if (Array.isArray(item)) {
      item.forEach((item2) => this.set(item2));
    } else if (this.isSet(item)) {
      this.set(Array.from(item));
    } else if (this.isIntMap(item)) {
      this.set(Object.keys(item).map((strId) => Number(strId)));
    } else if (this.isValidNumber(item)) {
      this.set_.add(item);
      this.maxId_ = Math.max(this.maxId, item);
      this.bitLength = 0;
    } else {
      throw new TCModelError("set()", item, "must be positive integer array, positive integer, Set<number>, or IntMap");
    }
  }
  empty() {
    this.set_ = /* @__PURE__ */ new Set();
    this.maxId_ = 0;
  }
  /**
   * forEach - to traverse from id=1 to id=maxId in a sequential non-sparse manner
   *
   *
   * @param {forEachCallback} callback - callback to execute
   * @return {void}
   *
   * @callback forEachCallback
   * @param {boolean} value - whether or not this id exists in the vector
   * @param {number} id - the id number of the current iteration
   */
  forEach(callback) {
    for (let i2 = 1; i2 <= this.maxId; i2++) {
      callback(this.has(i2), i2);
    }
  }
  get size() {
    return this.set_.size;
  }
  setAll(intMap) {
    this.set(intMap);
  }
}
_r = Fields.cmpId, _q = Fields.cmpVersion, _p = Fields.consentLanguage, _o = Fields.consentScreen, _n = Fields.created, _m = Fields.isServiceSpecific, _l = Fields.lastUpdated, _k = Fields.policyVersion, _j = Fields.publisherCountryCode, _i = Fields.publisherLegitimateInterests, _h = Fields.publisherConsents, _g = Fields.purposeConsents, _f = Fields.purposeLegitimateInterests, _e = Fields.purposeOneTreatment, _d = Fields.specialFeatureOptins, _c = Fields.useNonStandardTexts, _b = Fields.vendorListVersion, _a = Fields.version;
class BitLength {
}
__publicField(BitLength, _r, 12);
__publicField(BitLength, _q, 12);
__publicField(BitLength, _p, 12);
__publicField(BitLength, _o, 6);
__publicField(BitLength, _n, 36);
__publicField(BitLength, _m, 1);
__publicField(BitLength, _l, 36);
__publicField(BitLength, _k, 6);
__publicField(BitLength, _j, 12);
__publicField(BitLength, _i, 24);
__publicField(BitLength, _h, 24);
__publicField(BitLength, _g, 24);
__publicField(BitLength, _f, 24);
__publicField(BitLength, _e, 1);
__publicField(BitLength, _d, 12);
__publicField(BitLength, _c, 1);
__publicField(BitLength, _b, 12);
__publicField(BitLength, _a, 6);
__publicField(BitLength, "anyBoolean", 1);
__publicField(BitLength, "encodingType", 1);
__publicField(BitLength, "maxId", 16);
__publicField(BitLength, "numCustomPurposes", 6);
__publicField(BitLength, "numEntries", 12);
__publicField(BitLength, "numRestrictions", 12);
__publicField(BitLength, "purposeId", 6);
__publicField(BitLength, "restrictionType", 2);
__publicField(BitLength, "segmentType", 3);
__publicField(BitLength, "singleOrRange", 1);
__publicField(BitLength, "vendorId", 16);
class BooleanEncoder {
  static encode(value) {
    return String(Number(value));
  }
  static decode(value) {
    return value === "1";
  }
}
class IntEncoder {
  static encode(value, numBits) {
    let bitString;
    if (typeof value === "string") {
      value = parseInt(value, 10);
    }
    bitString = value.toString(2);
    if (bitString.length > numBits || value < 0) {
      throw new EncodingError("".concat(value, " too large to encode into ").concat(numBits));
    }
    if (bitString.length < numBits) {
      bitString = "0".repeat(numBits - bitString.length) + bitString;
    }
    return bitString;
  }
  static decode(value, numBits) {
    if (numBits !== value.length) {
      throw new DecodingError("invalid bit length");
    }
    return parseInt(value, 2);
  }
}
class DateEncoder {
  static encode(value, numBits) {
    return IntEncoder.encode(Math.round(value.getTime() / 100), numBits);
  }
  static decode(value, numBits) {
    if (numBits !== value.length) {
      throw new DecodingError("invalid bit length");
    }
    const date = /* @__PURE__ */ new Date();
    date.setTime(IntEncoder.decode(value, numBits) * 100);
    return date;
  }
}
class FixedVectorEncoder {
  static encode(value, numBits) {
    let bitString = "";
    for (let i2 = 1; i2 <= numBits; i2++) {
      bitString += BooleanEncoder.encode(value.has(i2));
    }
    return bitString;
  }
  static decode(value, numBits) {
    if (value.length !== numBits) {
      throw new DecodingError("bitfield encoding length mismatch");
    }
    const vector = new Vector();
    for (let i2 = 1; i2 <= numBits; i2++) {
      if (BooleanEncoder.decode(value[i2 - 1])) {
        vector.set(i2);
      }
    }
    vector.bitLength = value.length;
    return vector;
  }
}
class LangEncoder {
  static encode(value, numBits) {
    value = value.toUpperCase();
    const ASCII_START = 65;
    const firstLetter = value.charCodeAt(0) - ASCII_START;
    const secondLetter = value.charCodeAt(1) - ASCII_START;
    if (firstLetter < 0 || firstLetter > 25 || secondLetter < 0 || secondLetter > 25) {
      throw new EncodingError("invalid language code: ".concat(value));
    }
    if (numBits % 2 === 1) {
      throw new EncodingError("numBits must be even, ".concat(numBits, " is not valid"));
    }
    numBits = numBits / 2;
    const firstLetterBString = IntEncoder.encode(firstLetter, numBits);
    const secondLetterBString = IntEncoder.encode(secondLetter, numBits);
    return firstLetterBString + secondLetterBString;
  }
  static decode(value, numBits) {
    let retr;
    if (numBits === value.length && !(value.length % 2)) {
      const ASCII_START = 65;
      const mid = value.length / 2;
      const firstLetter = IntEncoder.decode(value.slice(0, mid), mid) + ASCII_START;
      const secondLetter = IntEncoder.decode(value.slice(mid), mid) + ASCII_START;
      retr = String.fromCharCode(firstLetter) + String.fromCharCode(secondLetter);
    } else {
      throw new DecodingError("invalid bit length for language");
    }
    return retr;
  }
}
class PurposeRestrictionVectorEncoder {
  static encode(prVector) {
    let bitString = IntEncoder.encode(prVector.numRestrictions, BitLength.numRestrictions);
    if (!prVector.isEmpty()) {
      const nextGvlVendor = (vendorId, lastVendorId) => {
        for (let nextId = vendorId + 1; nextId <= lastVendorId; nextId++) {
          if (prVector.gvl.vendorIds.has(nextId)) {
            return nextId;
          }
        }
        return vendorId;
      };
      prVector.getRestrictions().forEach((purpRestriction) => {
        bitString += IntEncoder.encode(purpRestriction.purposeId, BitLength.purposeId);
        bitString += IntEncoder.encode(purpRestriction.restrictionType, BitLength.restrictionType);
        const vendors = prVector.getVendors(purpRestriction);
        const len = vendors.length;
        let numEntries = 0;
        let startId = 0;
        let rangeField = "";
        for (let i2 = 0; i2 < len; i2++) {
          const vendorId = vendors[i2];
          if (startId === 0) {
            numEntries++;
            startId = vendorId;
          }
          if (i2 === len - 1 || vendors[i2 + 1] > nextGvlVendor(vendorId, vendors[len - 1])) {
            const isRange = !(vendorId === startId);
            rangeField += BooleanEncoder.encode(isRange);
            rangeField += IntEncoder.encode(startId, BitLength.vendorId);
            if (isRange) {
              rangeField += IntEncoder.encode(vendorId, BitLength.vendorId);
            }
            startId = 0;
          }
        }
        bitString += IntEncoder.encode(numEntries, BitLength.numEntries);
        bitString += rangeField;
      });
    }
    return bitString;
  }
  static decode(encodedString) {
    let index = 0;
    const vector = new PurposeRestrictionVector();
    const numRestrictions = IntEncoder.decode(encodedString.substr(index, BitLength.numRestrictions), BitLength.numRestrictions);
    index += BitLength.numRestrictions;
    for (let i2 = 0; i2 < numRestrictions; i2++) {
      const purposeId = IntEncoder.decode(encodedString.substr(index, BitLength.purposeId), BitLength.purposeId);
      index += BitLength.purposeId;
      const restrictionType = IntEncoder.decode(encodedString.substr(index, BitLength.restrictionType), BitLength.restrictionType);
      index += BitLength.restrictionType;
      const purposeRestriction = new PurposeRestriction(purposeId, restrictionType);
      const numEntries = IntEncoder.decode(encodedString.substr(index, BitLength.numEntries), BitLength.numEntries);
      index += BitLength.numEntries;
      for (let j2 = 0; j2 < numEntries; j2++) {
        const isARange = BooleanEncoder.decode(encodedString.substr(index, BitLength.anyBoolean));
        index += BitLength.anyBoolean;
        const startOrOnlyVendorId = IntEncoder.decode(encodedString.substr(index, BitLength.vendorId), BitLength.vendorId);
        index += BitLength.vendorId;
        if (isARange) {
          const endVendorId = IntEncoder.decode(encodedString.substr(index, BitLength.vendorId), BitLength.vendorId);
          index += BitLength.vendorId;
          if (endVendorId < startOrOnlyVendorId) {
            throw new DecodingError("Invalid RangeEntry: endVendorId ".concat(endVendorId, " is less than ").concat(startOrOnlyVendorId));
          }
          for (let k2 = startOrOnlyVendorId; k2 <= endVendorId; k2++) {
            vector.add(k2, purposeRestriction);
          }
        } else {
          vector.add(startOrOnlyVendorId, purposeRestriction);
        }
      }
    }
    vector.bitLength = index;
    return vector;
  }
}
var VectorEncodingType;
(function(VectorEncodingType2) {
  VectorEncodingType2[VectorEncodingType2["FIELD"] = 0] = "FIELD";
  VectorEncodingType2[VectorEncodingType2["RANGE"] = 1] = "RANGE";
})(VectorEncodingType || (VectorEncodingType = {}));
class VendorVectorEncoder {
  static encode(value) {
    const ranges = [];
    let range = [];
    let retrString = IntEncoder.encode(value.maxId, BitLength.maxId);
    let bitField = "";
    let rangeIsSmaller;
    const headerLength = BitLength.maxId + BitLength.encodingType;
    const bitFieldLength = headerLength + value.maxId;
    const minRangeLength = BitLength.vendorId * 2 + BitLength.singleOrRange + BitLength.numEntries;
    let rangeLength = headerLength + BitLength.numEntries;
    value.forEach((curValue, i2) => {
      bitField += BooleanEncoder.encode(curValue);
      rangeIsSmaller = value.maxId > minRangeLength && rangeLength < bitFieldLength;
      if (rangeIsSmaller && curValue) {
        const nextValue = value.has(i2 + 1);
        if (!nextValue) {
          range.push(i2);
          rangeLength += BitLength.vendorId;
          ranges.push(range);
          range = [];
        } else if (range.length === 0) {
          range.push(i2);
          rangeLength += BitLength.singleOrRange;
          rangeLength += BitLength.vendorId;
        }
      }
    });
    if (rangeIsSmaller) {
      retrString += String(VectorEncodingType.RANGE);
      retrString += this.buildRangeEncoding(ranges);
    } else {
      retrString += String(VectorEncodingType.FIELD);
      retrString += bitField;
    }
    return retrString;
  }
  static decode(value, version) {
    let vector;
    let index = 0;
    const maxId = IntEncoder.decode(value.substr(index, BitLength.maxId), BitLength.maxId);
    index += BitLength.maxId;
    const encodingType = IntEncoder.decode(value.charAt(index), BitLength.encodingType);
    index += BitLength.encodingType;
    if (encodingType === VectorEncodingType.RANGE) {
      vector = new Vector();
      if (version === 1) {
        if (value.substr(index, 1) === "1") {
          throw new DecodingError("Unable to decode default consent=1");
        }
        index++;
      }
      const numEntries = IntEncoder.decode(value.substr(index, BitLength.numEntries), BitLength.numEntries);
      index += BitLength.numEntries;
      for (let i2 = 0; i2 < numEntries; i2++) {
        const isIdRange = BooleanEncoder.decode(value.charAt(index));
        index += BitLength.singleOrRange;
        const firstId = IntEncoder.decode(value.substr(index, BitLength.vendorId), BitLength.vendorId);
        index += BitLength.vendorId;
        if (isIdRange) {
          const secondId = IntEncoder.decode(value.substr(index, BitLength.vendorId), BitLength.vendorId);
          index += BitLength.vendorId;
          for (let j2 = firstId; j2 <= secondId; j2++) {
            vector.set(j2);
          }
        } else {
          vector.set(firstId);
        }
      }
    } else {
      const bitField = value.substr(index, maxId);
      index += maxId;
      vector = FixedVectorEncoder.decode(bitField, maxId);
    }
    vector.bitLength = index;
    return vector;
  }
  static buildRangeEncoding(ranges) {
    const numEntries = ranges.length;
    let rangeString = IntEncoder.encode(numEntries, BitLength.numEntries);
    ranges.forEach((range) => {
      const single = range.length === 1;
      rangeString += BooleanEncoder.encode(!single);
      rangeString += IntEncoder.encode(range[0], BitLength.vendorId);
      if (!single) {
        rangeString += IntEncoder.encode(range[1], BitLength.vendorId);
      }
    });
    return rangeString;
  }
}
function FieldEncoderMap() {
  return {
    [Fields.version]: IntEncoder,
    [Fields.created]: DateEncoder,
    [Fields.lastUpdated]: DateEncoder,
    [Fields.cmpId]: IntEncoder,
    [Fields.cmpVersion]: IntEncoder,
    [Fields.consentScreen]: IntEncoder,
    [Fields.consentLanguage]: LangEncoder,
    [Fields.vendorListVersion]: IntEncoder,
    [Fields.policyVersion]: IntEncoder,
    [Fields.isServiceSpecific]: BooleanEncoder,
    [Fields.useNonStandardTexts]: BooleanEncoder,
    [Fields.specialFeatureOptins]: FixedVectorEncoder,
    [Fields.purposeConsents]: FixedVectorEncoder,
    [Fields.purposeLegitimateInterests]: FixedVectorEncoder,
    [Fields.purposeOneTreatment]: BooleanEncoder,
    [Fields.publisherCountryCode]: LangEncoder,
    [Fields.vendorConsents]: VendorVectorEncoder,
    [Fields.vendorLegitimateInterests]: VendorVectorEncoder,
    [Fields.publisherRestrictions]: PurposeRestrictionVectorEncoder,
    segmentType: IntEncoder,
    [Fields.vendorsDisclosed]: VendorVectorEncoder,
    [Fields.vendorsAllowed]: VendorVectorEncoder,
    [Fields.publisherConsents]: FixedVectorEncoder,
    [Fields.publisherLegitimateInterests]: FixedVectorEncoder,
    [Fields.numCustomPurposes]: IntEncoder,
    [Fields.publisherCustomConsents]: FixedVectorEncoder,
    [Fields.publisherCustomLegitimateInterests]: FixedVectorEncoder
  };
}
class FieldSequence {
  constructor() {
    __publicField(this, "1", {
      [Segment.CORE]: [
        Fields.version,
        Fields.created,
        Fields.lastUpdated,
        Fields.cmpId,
        Fields.cmpVersion,
        Fields.consentScreen,
        Fields.consentLanguage,
        Fields.vendorListVersion,
        Fields.purposeConsents,
        Fields.vendorConsents
      ]
    });
    __publicField(this, "2", {
      [Segment.CORE]: [
        Fields.version,
        Fields.created,
        Fields.lastUpdated,
        Fields.cmpId,
        Fields.cmpVersion,
        Fields.consentScreen,
        Fields.consentLanguage,
        Fields.vendorListVersion,
        Fields.policyVersion,
        Fields.isServiceSpecific,
        Fields.useNonStandardTexts,
        Fields.specialFeatureOptins,
        Fields.purposeConsents,
        Fields.purposeLegitimateInterests,
        Fields.purposeOneTreatment,
        Fields.publisherCountryCode,
        Fields.vendorConsents,
        Fields.vendorLegitimateInterests,
        Fields.publisherRestrictions
      ],
      [Segment.PUBLISHER_TC]: [
        Fields.publisherConsents,
        Fields.publisherLegitimateInterests,
        Fields.numCustomPurposes,
        Fields.publisherCustomConsents,
        Fields.publisherCustomLegitimateInterests
      ],
      [Segment.VENDORS_ALLOWED]: [
        Fields.vendorsAllowed
      ],
      [Segment.VENDORS_DISCLOSED]: [
        Fields.vendorsDisclosed
      ]
    });
  }
}
class SegmentSequence {
  constructor(tcModel, options) {
    __publicField(this, "1", [
      Segment.CORE
    ]);
    __publicField(this, "2", [
      Segment.CORE
    ]);
    if (tcModel.version === 2) {
      if (tcModel.isServiceSpecific) {
        this["2"].push(Segment.PUBLISHER_TC);
        this["2"].push(Segment.VENDORS_DISCLOSED);
      } else {
        const isForVendors = !!(options && options.isForVendors);
        if (!isForVendors || tcModel[Fields.supportOOB] === true) {
          this["2"].push(Segment.VENDORS_DISCLOSED);
        }
        if (isForVendors) {
          if (tcModel[Fields.supportOOB] && tcModel[Fields.vendorsAllowed].size > 0) {
            this["2"].push(Segment.VENDORS_ALLOWED);
          }
          this["2"].push(Segment.PUBLISHER_TC);
        }
      }
    }
  }
}
class SegmentEncoder {
  static encode(tcModel, segment) {
    let sequence;
    try {
      sequence = this.fieldSequence[String(tcModel.version)][segment];
    } catch (err) {
      throw new EncodingError("Unable to encode version: ".concat(tcModel.version, ", segment: ").concat(segment));
    }
    let bitField = "";
    if (segment !== Segment.CORE) {
      bitField = IntEncoder.encode(SegmentIDs.KEY_TO_ID[segment], BitLength.segmentType);
    }
    const fieldEncoderMap = FieldEncoderMap();
    sequence.forEach((key) => {
      const value = tcModel[key];
      const encoder = fieldEncoderMap[key];
      let numBits = BitLength[key];
      if (numBits === void 0) {
        if (this.isPublisherCustom(key)) {
          numBits = Number(tcModel[Fields.numCustomPurposes]);
        }
      }
      try {
        bitField += encoder.encode(value, numBits);
      } catch (err) {
        throw new EncodingError("Error encoding ".concat(segment, "->").concat(key, ": ").concat(err.message));
      }
    });
    return Base64Url.encode(bitField);
  }
  static decode(encodedString, tcModel, segment) {
    const bitField = Base64Url.decode(encodedString);
    let bStringIdx = 0;
    if (segment === Segment.CORE) {
      tcModel.version = IntEncoder.decode(bitField.substr(bStringIdx, BitLength[Fields.version]), BitLength[Fields.version]);
    }
    if (segment !== Segment.CORE) {
      bStringIdx += BitLength.segmentType;
    }
    const sequence = this.fieldSequence[String(tcModel.version)][segment];
    const fieldEncoderMap = FieldEncoderMap();
    sequence.forEach((key) => {
      const encoder = fieldEncoderMap[key];
      let numBits = BitLength[key];
      if (numBits === void 0) {
        if (this.isPublisherCustom(key)) {
          numBits = Number(tcModel[Fields.numCustomPurposes]);
        }
      }
      if (numBits !== 0) {
        const bits = bitField.substr(bStringIdx, numBits);
        if (encoder === VendorVectorEncoder) {
          tcModel[key] = encoder.decode(bits, tcModel.version);
        } else {
          tcModel[key] = encoder.decode(bits, numBits);
        }
        if (Number.isInteger(numBits)) {
          bStringIdx += numBits;
        } else if (Number.isInteger(tcModel[key].bitLength)) {
          bStringIdx += tcModel[key].bitLength;
        } else {
          throw new DecodingError(key);
        }
      }
    });
    return tcModel;
  }
  static isPublisherCustom(key) {
    return key.indexOf("publisherCustom") === 0;
  }
}
__publicField(SegmentEncoder, "fieldSequence", new FieldSequence());
class SemanticPreEncoder {
  static process(tcModel, options) {
    const gvl = tcModel.gvl;
    if (!gvl) {
      throw new EncodingError("Unable to encode TCModel without a GVL");
    }
    if (!gvl.isReady) {
      throw new EncodingError("Unable to encode TCModel tcModel.gvl.readyPromise is not resolved");
    }
    tcModel = tcModel.clone();
    tcModel.consentLanguage = gvl.language.slice(0, 2).toUpperCase();
    if ((options == null ? void 0 : options.version) > 0 && (options == null ? void 0 : options.version) <= this.processor.length) {
      tcModel.version = options.version;
    } else {
      tcModel.version = this.processor.length;
    }
    const processorFunctionIndex = tcModel.version - 1;
    if (!this.processor[processorFunctionIndex]) {
      throw new EncodingError("Invalid version: ".concat(tcModel.version));
    }
    return this.processor[processorFunctionIndex](tcModel, gvl);
  }
}
__publicField(SemanticPreEncoder, "processor", [
  (tcModel) => tcModel,
  (tcModel, gvl) => {
    tcModel.publisherRestrictions.gvl = gvl;
    tcModel.purposeLegitimateInterests.unset([1, 3, 4, 5, 6]);
    const vectorToIntMap = /* @__PURE__ */ new Map();
    vectorToIntMap.set("legIntPurposes", tcModel.vendorLegitimateInterests);
    vectorToIntMap.set("purposes", tcModel.vendorConsents);
    vectorToIntMap.forEach((vector, gvlVendorKey) => {
      vector.forEach((value, vendorId) => {
        if (value) {
          const vendor = gvl.vendors[vendorId];
          if (!vendor || vendor.deletedDate) {
            vector.unset(vendorId);
          } else if (vendor[gvlVendorKey].length === 0) {
            if (gvlVendorKey === "legIntPurposes" && vendor["purposes"].length === 0 && vendor["legIntPurposes"].length === 0 && vendor["specialPurposes"].length > 0) {
              vector.set(vendorId);
            } else if (gvlVendorKey === "legIntPurposes" && vendor["purposes"].length > 0 && vendor["legIntPurposes"].length === 0 && vendor["specialPurposes"].length > 0) {
              vector.set(vendorId);
            } else {
              if (tcModel.isServiceSpecific) {
                if (vendor.flexiblePurposes.length === 0) {
                  vector.unset(vendorId);
                } else {
                  const restrictions = tcModel.publisherRestrictions.getRestrictions(vendorId);
                  let isValid = false;
                  for (let i2 = 0, len = restrictions.length; i2 < len && !isValid; i2++) {
                    isValid = restrictions[i2].restrictionType === RestrictionType.REQUIRE_CONSENT && gvlVendorKey === "purposes" || restrictions[i2].restrictionType === RestrictionType.REQUIRE_LI && gvlVendorKey === "legIntPurposes";
                  }
                  if (!isValid) {
                    vector.unset(vendorId);
                  }
                }
              } else {
                vector.unset(vendorId);
              }
            }
          }
        }
      });
    });
    return tcModel;
  }
]);
class Json {
  static absCall(url, body, sendCookies, timeout) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      const onLoad = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
          if (req.status >= 200 && req.status < 300) {
            let response = req.response;
            if (typeof response === "string") {
              try {
                response = JSON.parse(response);
              } catch (e2) {
              }
            }
            resolve(response);
          } else {
            reject(new Error("HTTP Status: ".concat(req.status, " response type: ").concat(req.responseType)));
          }
        }
      };
      const onError = () => {
        reject(new Error("error"));
      };
      const onAbort = () => {
        reject(new Error("aborted"));
      };
      const onTimeout = () => {
        reject(new Error("Timeout " + timeout + "ms " + url));
      };
      req.withCredentials = sendCookies;
      req.addEventListener("load", onLoad);
      req.addEventListener("error", onError);
      req.addEventListener("abort", onAbort);
      if (body === null) {
        req.open("GET", url, true);
      } else {
        req.open("POST", url, true);
      }
      req.responseType = "json";
      req.timeout = timeout;
      req.ontimeout = onTimeout;
      req.send(body);
    });
  }
  /**
   * @static
   * @param {string} url - full path to POST to
   * @param {object} body - JSON object to post
   * @param {boolean} sendCookies - Whether or not to send the XMLHttpRequest with credentials or not
   * @param {number} [timeout] - optional timeout in milliseconds
   * @return {Promise<object>} - if the server responds the response will be returned here
   */
  static post(url, body, sendCookies = false, timeout = 0) {
    return this.absCall(url, JSON.stringify(body), sendCookies, timeout);
  }
  /**
   * @static
   * @param {string} url - full path to the json
   * @param {boolean} sendCookies - Whether or not to send the XMLHttpRequest with credentials or not
   * @param {number} [timeout] - optional timeout in milliseconds
   * @return {Promise<object>} - resolves with parsed JSON
   */
  static fetch(url, sendCookies = false, timeout = 0) {
    return this.absCall(url, null, sendCookies, timeout);
  }
}
const _GVL = class _GVL extends Cloneable {
  /**
   * @param {VersionOrVendorList} [versionOrVendorList] - can be either a
   * [[VendorList]] object or a version number represented as a string or
   * number to download.  If nothing is passed the latest version of the GVL
   * will be loaded
   * @param {GvlCreationOptions} [options] - it is an optional object where the default language can be set
   */
  constructor(versionOrVendorList, options) {
    super();
    /**
     * @param {Promise} resolved when this GVL object is populated with the data
     * or rejected if there is an error.
     */
    __publicField(this, "readyPromise");
    /**
     * @param {number} gvlSpecificationVersion - schema version for the GVL that is used
     */
    __publicField(this, "gvlSpecificationVersion");
    /**
     * @param {number} incremented with each published file change
     */
    __publicField(this, "vendorListVersion");
    /**
     * @param {number} tcfPolicyVersion - The TCF MO will increment this value
     * whenever a GVL change (such as adding a new Purpose or Feature or a change
     * in Purpose wording) legally invalidates existing TC Strings and requires
     * CMPs to re-establish transparency and consent from users. If the policy
     * version number in the latest GVL is different from the value in your TC
     * String, then you need to re-establish transparency and consent for that
     * user. A version 1 format TC String is considered to have a version value
     * of 1.
     */
    __publicField(this, "tcfPolicyVersion");
    /**
     * @param {string | Date} lastUpdated - the date in which the vendor list
     * json file  was last updated.
     */
    __publicField(this, "lastUpdated");
    /**
     * @param {IntMap<Purpose>} a collection of [[Purpose]]s
     */
    __publicField(this, "purposes");
    /**
     * @param {IntMap<Purpose>} a collection of [[Purpose]]s
     */
    __publicField(this, "specialPurposes");
    /**
     * @param {IntMap<Feature>} a collection of [[Feature]]s
     */
    __publicField(this, "features");
    /**
     * @param {IntMap<Feature>} a collection of [[Feature]]s
     */
    __publicField(this, "specialFeatures");
    /**
     * @param {boolean} internal reference of when the GVL is ready to be used
     */
    __publicField(this, "isReady_", false);
    /**
     * @param {IntMap<Vendor>} a collection of [[Vendor]]s
     */
    __publicField(this, "vendors_");
    __publicField(this, "vendorIds");
    /**
     * @param {IntMap<Vendor>} a collection of [[Vendor]]. Used as a backup if a whitelist is sets
     */
    __publicField(this, "fullVendorList");
    /**
     * @param {ByPurposeVendorMap} vendors by purpose
     */
    __publicField(this, "byPurposeVendorMap");
    /**
     * @param {IDSetMap} vendors by special purpose
     */
    __publicField(this, "bySpecialPurposeVendorMap");
    /**
     * @param {IDSetMap} vendors by feature
     */
    __publicField(this, "byFeatureVendorMap");
    /**
     * @param {IDSetMap} vendors by special feature
     */
    __publicField(this, "bySpecialFeatureVendorMap");
    /**
     * @param {IntMap<Stack>} a collection of [[Stack]]s
     */
    __publicField(this, "stacks");
    /**
     * @param {IntMap<DataCategory>} a collection of [[DataCategory]]s
     */
    __publicField(this, "dataCategories");
    __publicField(this, "lang_");
    __publicField(this, "cacheLang_");
    __publicField(this, "isLatest", false);
    let url = _GVL.baseUrl;
    let parsedLanguage = options == null ? void 0 : options.language;
    if (parsedLanguage) {
      try {
        parsedLanguage = _GVL.consentLanguages.parseLanguage(parsedLanguage);
      } catch (e2) {
        throw new GVLError("Error during parsing the language: " + e2.message);
      }
    }
    this.lang_ = parsedLanguage || _GVL.DEFAULT_LANGUAGE;
    this.cacheLang_ = parsedLanguage || _GVL.DEFAULT_LANGUAGE;
    if (this.isVendorList(versionOrVendorList)) {
      this.populate(versionOrVendorList);
      this.readyPromise = Promise.resolve();
    } else {
      if (!url) {
        throw new GVLError("must specify GVL.baseUrl before loading GVL json");
      }
      if (versionOrVendorList > 0) {
        const version = versionOrVendorList;
        if (_GVL.CACHE.has(version)) {
          this.populate(_GVL.CACHE.get(version));
          this.readyPromise = Promise.resolve();
        } else {
          url += _GVL.versionedFilename.replace("[VERSION]", String(version));
          this.readyPromise = this.fetchJson(url);
        }
      } else {
        if (_GVL.CACHE.has(_GVL.LATEST_CACHE_KEY)) {
          this.populate(_GVL.CACHE.get(_GVL.LATEST_CACHE_KEY));
          this.readyPromise = Promise.resolve();
        } else {
          this.isLatest = true;
          this.readyPromise = this.fetchJson(url + _GVL.latestFilename);
        }
      }
    }
  }
  /**
   * baseUrl - Entities using the vendor-list.json are required by the iab to
   * host their own copy of it to reduce the load on the iab's infrastructure
   * so a 'base' url must be set to be put together with the versioning scheme
   * of the filenames.
   *
   * @static
   * @param {string} url - the base url to load the vendor-list.json from.  This is
   * broken out from the filename because it follows a different scheme for
   * latest file vs versioned files.
   *
   * @throws {GVLError} - If the url is http[s]://vendorlist.consensu.org/...
   * this will throw an error.  IAB Europe requires that that CMPs and Vendors
   * cache their own copies of the GVL to minimize load on their
   * infrastructure.  For more information regarding caching of the
   * vendor-list.json, please see [the TCF documentation on 'Caching the Global
   * Vendor List'
   * ](https://github.com/InteractiveAdvertisingBureau/GDPR-Transparency-and-Consent-Framework/blob/master/TCFv2/IAB%20Tech%20Lab%20-%20Consent%20string%20and%20vendor%20list%20formats%20v2.md#caching-the-global-vendor-list)
   */
  static set baseUrl(url) {
    const notValid = /^https?:\/\/vendorlist\.consensu\.org\//;
    if (notValid.test(url)) {
      throw new GVLError("Invalid baseUrl!  You may not pull directly from vendorlist.consensu.org and must provide your own cache");
    }
    if (url.length > 0 && url[url.length - 1] !== "/") {
      url += "/";
    }
    this.baseUrl_ = url;
  }
  /**
   * baseUrl - Entities using the vendor-list.json are required by the iab to
   * host their own copy of it to reduce the load on the iab's infrastructure
   * so a 'base' url must be set to be put together with the versioning scheme
   * of the filenames.
   *
   * @static
   * @return {string} - returns the previously set baseUrl, the default is
   * `undefined`
   */
  static get baseUrl() {
    return this.baseUrl_;
  }
  /**
   * emptyLanguageCache
   *
   * @param {string} [lang] - Optional language code to remove from
   * the cache.  Should be one of the languages in GVL.consentLanguages set.
   * If not then the whole cache will be deleted.
   * @return {boolean} - true if anything was deleted from the cache
   */
  static emptyLanguageCache(lang) {
    let result = false;
    if (lang == null && _GVL.LANGUAGE_CACHE.size > 0) {
      _GVL.LANGUAGE_CACHE = /* @__PURE__ */ new Map();
      result = true;
    } else if (typeof lang === "string" && this.consentLanguages.has(lang.toUpperCase())) {
      _GVL.LANGUAGE_CACHE.delete(lang.toUpperCase());
      result = true;
    }
    return result;
  }
  /**
   * emptyCache
   *
   * @param {number} [vendorListVersion] - version of the vendor list to delete
   * from the cache.  If none is specified then the whole cache is deleted.
   * @return {boolean} - true if anything was deleted from the cache
   */
  static emptyCache(vendorListVersion) {
    let retr = false;
    if (Number.isInteger(vendorListVersion) && vendorListVersion >= 0) {
      _GVL.CACHE.delete(vendorListVersion);
      retr = true;
    } else if (vendorListVersion === void 0) {
      _GVL.CACHE = /* @__PURE__ */ new Map();
      retr = true;
    }
    return retr;
  }
  cacheLanguage() {
    if (!_GVL.LANGUAGE_CACHE.has(this.cacheLang_)) {
      _GVL.LANGUAGE_CACHE.set(this.cacheLang_, {
        purposes: this.purposes,
        specialPurposes: this.specialPurposes,
        features: this.features,
        specialFeatures: this.specialFeatures,
        stacks: this.stacks,
        dataCategories: this.dataCategories
      });
    }
  }
  async fetchJson(url) {
    try {
      this.populate(await Json.fetch(url));
    } catch (err) {
      throw new GVLError(err.message);
    }
  }
  /**
   * getJson - Method for getting the JSON that was downloaded to created this
   * `GVL` object
   *
   * @return {VendorList} - The basic JSON structure without the extra
   * functionality and methods of this class.
   */
  getJson() {
    return {
      gvlSpecificationVersion: this.gvlSpecificationVersion,
      vendorListVersion: this.vendorListVersion,
      tcfPolicyVersion: this.tcfPolicyVersion,
      lastUpdated: this.lastUpdated,
      purposes: this.clonePurposes(),
      specialPurposes: this.cloneSpecialPurposes(),
      features: this.cloneFeatures(),
      specialFeatures: this.cloneSpecialFeatures(),
      stacks: this.cloneStacks(),
      ...this.dataCategories ? { dataCategories: this.cloneDataCategories() } : {},
      vendors: this.cloneVendors()
    };
  }
  cloneSpecialFeatures() {
    const features = {};
    for (const featureId of Object.keys(this.specialFeatures)) {
      features[featureId] = _GVL.cloneFeature(this.specialFeatures[featureId]);
    }
    return features;
  }
  cloneFeatures() {
    const features = {};
    for (const featureId of Object.keys(this.features)) {
      features[featureId] = _GVL.cloneFeature(this.features[featureId]);
    }
    return features;
  }
  cloneStacks() {
    const stacks = {};
    for (const stackId of Object.keys(this.stacks)) {
      stacks[stackId] = _GVL.cloneStack(this.stacks[stackId]);
    }
    return stacks;
  }
  cloneDataCategories() {
    const dataCategories = {};
    for (const dataCategoryId of Object.keys(this.dataCategories)) {
      dataCategories[dataCategoryId] = _GVL.cloneDataCategory(this.dataCategories[dataCategoryId]);
    }
    return dataCategories;
  }
  cloneSpecialPurposes() {
    const purposes = {};
    for (const purposeId of Object.keys(this.specialPurposes)) {
      purposes[purposeId] = _GVL.clonePurpose(this.specialPurposes[purposeId]);
    }
    return purposes;
  }
  clonePurposes() {
    const purposes = {};
    for (const purposeId of Object.keys(this.purposes)) {
      purposes[purposeId] = _GVL.clonePurpose(this.purposes[purposeId]);
    }
    return purposes;
  }
  static clonePurpose(purpose) {
    return {
      id: purpose.id,
      name: purpose.name,
      description: purpose.description,
      ...purpose.descriptionLegal ? { descriptionLegal: purpose.descriptionLegal } : {},
      ...purpose.illustrations ? { illustrations: Array.from(purpose.illustrations) } : {}
    };
  }
  static cloneFeature(feature) {
    return {
      id: feature.id,
      name: feature.name,
      description: feature.description,
      ...feature.descriptionLegal ? { descriptionLegal: feature.descriptionLegal } : {},
      ...feature.illustrations ? { illustrations: Array.from(feature.illustrations) } : {}
    };
  }
  static cloneDataCategory(dataCategory) {
    return {
      id: dataCategory.id,
      name: dataCategory.name,
      description: dataCategory.description
    };
  }
  static cloneStack(stack) {
    return {
      id: stack.id,
      name: stack.name,
      description: stack.description,
      purposes: Array.from(stack.purposes),
      specialFeatures: Array.from(stack.specialFeatures)
    };
  }
  static cloneDataRetention(dataRetention) {
    return {
      ...typeof dataRetention.stdRetention === "number" ? { stdRetention: dataRetention.stdRetention } : {},
      purposes: { ...dataRetention.purposes },
      specialPurposes: { ...dataRetention.specialPurposes }
    };
  }
  static cloneVendorUrls(urls) {
    return urls.map((url) => ({
      langId: url.langId,
      privacy: url.privacy,
      ...url.legIntClaim ? { legIntClaim: url.legIntClaim } : {}
    }));
  }
  static cloneVendor(vendor) {
    return {
      id: vendor.id,
      name: vendor.name,
      purposes: Array.from(vendor.purposes),
      legIntPurposes: Array.from(vendor.legIntPurposes),
      flexiblePurposes: Array.from(vendor.flexiblePurposes),
      specialPurposes: Array.from(vendor.specialPurposes),
      features: Array.from(vendor.features),
      specialFeatures: Array.from(vendor.specialFeatures),
      ...vendor.overflow ? { overflow: { httpGetLimit: vendor.overflow.httpGetLimit } } : {},
      ...typeof vendor.cookieMaxAgeSeconds === "number" || vendor.cookieMaxAgeSeconds === null ? { cookieMaxAgeSeconds: vendor.cookieMaxAgeSeconds } : {},
      ...vendor.usesCookies !== void 0 ? { usesCookies: vendor.usesCookies } : {},
      ...vendor.policyUrl ? { policyUrl: vendor.policyUrl } : {},
      ...vendor.cookieRefresh !== void 0 ? { cookieRefresh: vendor.cookieRefresh } : {},
      ...vendor.usesNonCookieAccess !== void 0 ? { usesNonCookieAccess: vendor.usesNonCookieAccess } : {},
      ...vendor.dataRetention ? { dataRetention: this.cloneDataRetention(vendor.dataRetention) } : {},
      ...vendor.urls ? { urls: this.cloneVendorUrls(vendor.urls) } : {},
      ...vendor.dataDeclaration ? { dataDeclaration: Array.from(vendor.dataDeclaration) } : {},
      ...vendor.deviceStorageDisclosureUrl ? { deviceStorageDisclosureUrl: vendor.deviceStorageDisclosureUrl } : {},
      ...vendor.deletedDate ? { deletedDate: vendor.deletedDate } : {}
    };
  }
  cloneVendors() {
    const vendors = {};
    for (const vendorId of Object.keys(this.fullVendorList)) {
      vendors[vendorId] = _GVL.cloneVendor(this.fullVendorList[vendorId]);
    }
    return vendors;
  }
  /**
   * changeLanguage - retrieves the purpose language translation and sets the
   * internal language variable
   *
   * @param {string} lang - language code to change language to
   * @return {Promise<void | GVLError>} - returns the `readyPromise` and
   * resolves when this GVL is populated with the data from the language file.
   */
  async changeLanguage(lang) {
    let parsedLanguage = lang;
    try {
      parsedLanguage = _GVL.consentLanguages.parseLanguage(lang);
    } catch (e2) {
      throw new GVLError("Error during parsing the language: " + e2.message);
    }
    const cacheLang = lang.toUpperCase();
    if (parsedLanguage.toLowerCase() === _GVL.DEFAULT_LANGUAGE.toLowerCase() && !_GVL.LANGUAGE_CACHE.has(cacheLang)) {
      return;
    }
    if (parsedLanguage !== this.lang_) {
      this.lang_ = parsedLanguage;
      if (_GVL.LANGUAGE_CACHE.has(cacheLang)) {
        const cached = _GVL.LANGUAGE_CACHE.get(cacheLang);
        for (const prop in cached) {
          if (cached.hasOwnProperty(prop)) {
            this[prop] = cached[prop];
          }
        }
      } else {
        const url = _GVL.baseUrl + _GVL.languageFilename.replace("[LANG]", this.lang_.toLowerCase());
        try {
          await this.fetchJson(url);
          this.cacheLang_ = cacheLang;
          this.cacheLanguage();
        } catch (err) {
          throw new GVLError("unable to load language: " + err.message);
        }
      }
    }
  }
  get language() {
    return this.lang_;
  }
  isVendorList(gvlObject) {
    return gvlObject !== void 0 && gvlObject.vendors !== void 0;
  }
  populate(gvlObject) {
    this.purposes = gvlObject.purposes;
    this.specialPurposes = gvlObject.specialPurposes;
    this.features = gvlObject.features;
    this.specialFeatures = gvlObject.specialFeatures;
    this.stacks = gvlObject.stacks;
    this.dataCategories = gvlObject.dataCategories;
    if (this.isVendorList(gvlObject)) {
      this.gvlSpecificationVersion = gvlObject.gvlSpecificationVersion;
      this.tcfPolicyVersion = gvlObject.tcfPolicyVersion;
      this.vendorListVersion = gvlObject.vendorListVersion;
      this.lastUpdated = gvlObject.lastUpdated;
      if (typeof this.lastUpdated === "string") {
        this.lastUpdated = new Date(this.lastUpdated);
      }
      this.vendors_ = gvlObject.vendors;
      this.fullVendorList = gvlObject.vendors;
      this.mapVendors();
      this.isReady_ = true;
      if (this.isLatest) {
        _GVL.CACHE.set(_GVL.LATEST_CACHE_KEY, this.getJson());
      }
      if (!_GVL.CACHE.has(this.vendorListVersion)) {
        _GVL.CACHE.set(this.vendorListVersion, this.getJson());
      }
    }
    this.cacheLanguage();
  }
  mapVendors(vendorIds) {
    this.byPurposeVendorMap = {};
    this.bySpecialPurposeVendorMap = {};
    this.byFeatureVendorMap = {};
    this.bySpecialFeatureVendorMap = {};
    Object.keys(this.purposes).forEach((purposeId) => {
      this.byPurposeVendorMap[purposeId] = {
        legInt: /* @__PURE__ */ new Set(),
        consent: /* @__PURE__ */ new Set(),
        flexible: /* @__PURE__ */ new Set()
      };
    });
    Object.keys(this.specialPurposes).forEach((purposeId) => {
      this.bySpecialPurposeVendorMap[purposeId] = /* @__PURE__ */ new Set();
    });
    Object.keys(this.features).forEach((featureId) => {
      this.byFeatureVendorMap[featureId] = /* @__PURE__ */ new Set();
    });
    Object.keys(this.specialFeatures).forEach((featureId) => {
      this.bySpecialFeatureVendorMap[featureId] = /* @__PURE__ */ new Set();
    });
    if (!Array.isArray(vendorIds)) {
      vendorIds = Object.keys(this.fullVendorList).map((vId) => +vId);
    }
    this.vendorIds = new Set(vendorIds);
    this.vendors_ = vendorIds.reduce((vendors, vendorId) => {
      const vendor = this.vendors_[String(vendorId)];
      if (vendor && vendor.deletedDate === void 0) {
        vendor.purposes.forEach((purposeId) => {
          const purpGroup = this.byPurposeVendorMap[String(purposeId)];
          purpGroup.consent.add(vendorId);
        });
        vendor.specialPurposes.forEach((purposeId) => {
          this.bySpecialPurposeVendorMap[String(purposeId)].add(vendorId);
        });
        vendor.legIntPurposes.forEach((purposeId) => {
          this.byPurposeVendorMap[String(purposeId)].legInt.add(vendorId);
        });
        if (vendor.flexiblePurposes) {
          vendor.flexiblePurposes.forEach((purposeId) => {
            this.byPurposeVendorMap[String(purposeId)].flexible.add(vendorId);
          });
        }
        vendor.features.forEach((featureId) => {
          this.byFeatureVendorMap[String(featureId)].add(vendorId);
        });
        vendor.specialFeatures.forEach((featureId) => {
          this.bySpecialFeatureVendorMap[String(featureId)].add(vendorId);
        });
        vendors[vendorId] = vendor;
      }
      return vendors;
    }, {});
  }
  getFilteredVendors(purposeOrFeature, id, subType, special) {
    const properPurposeOrFeature = purposeOrFeature.charAt(0).toUpperCase() + purposeOrFeature.slice(1);
    let vendorSet;
    const retr = {};
    if (purposeOrFeature === "purpose" && subType) {
      vendorSet = this["by" + properPurposeOrFeature + "VendorMap"][String(id)][subType];
    } else {
      vendorSet = this["by" + (special ? "Special" : "") + properPurposeOrFeature + "VendorMap"][String(id)];
    }
    vendorSet.forEach((vendorId) => {
      retr[String(vendorId)] = this.vendors[String(vendorId)];
    });
    return retr;
  }
  /**
   * getVendorsWithConsentPurpose
   *
   * @param {number} purposeId
   * @return {IntMap<Vendor>} - list of vendors that have declared the consent purpose id
   */
  getVendorsWithConsentPurpose(purposeId) {
    return this.getFilteredVendors("purpose", purposeId, "consent");
  }
  /**
   * getVendorsWithLegIntPurpose
   *
   * @param {number} purposeId
   * @return {IntMap<Vendor>} - list of vendors that have declared the legInt (Legitimate Interest) purpose id
   */
  getVendorsWithLegIntPurpose(purposeId) {
    return this.getFilteredVendors("purpose", purposeId, "legInt");
  }
  /**
   * getVendorsWithFlexiblePurpose
   *
   * @param {number} purposeId
   * @return {IntMap<Vendor>} - list of vendors that have declared the flexible purpose id
   */
  getVendorsWithFlexiblePurpose(purposeId) {
    return this.getFilteredVendors("purpose", purposeId, "flexible");
  }
  /**
   * getVendorsWithSpecialPurpose
   *
   * @param {number} specialPurposeId
   * @return {IntMap<Vendor>} - list of vendors that have declared the special purpose id
   */
  getVendorsWithSpecialPurpose(specialPurposeId) {
    return this.getFilteredVendors("purpose", specialPurposeId, void 0, true);
  }
  /**
   * getVendorsWithFeature
   *
   * @param {number} featureId
   * @return {IntMap<Vendor>} - list of vendors that have declared the feature id
   */
  getVendorsWithFeature(featureId) {
    return this.getFilteredVendors("feature", featureId);
  }
  /**
   * getVendorsWithSpecialFeature
   *
   * @param {number} specialFeatureId
   * @return {IntMap<Vendor>} - list of vendors that have declared the special feature id
   */
  getVendorsWithSpecialFeature(specialFeatureId) {
    return this.getFilteredVendors("feature", specialFeatureId, void 0, true);
  }
  /**
   * vendors
   *
   * @return {IntMap<Vendor>} - the list of vendors as it would on the JSON file
   * except if `narrowVendorsTo` was called, it would be that narrowed list
   */
  get vendors() {
    return this.vendors_;
  }
  /**
   * narrowVendorsTo - narrows vendors represented in this GVL to the list of ids passed in
   *
   * @param {number[]} vendorIds - list of ids to narrow this GVL to
   * @return {void}
   */
  narrowVendorsTo(vendorIds) {
    this.mapVendors(vendorIds);
  }
  /**
   * isReady - Whether or not this instance is ready to be used.  This will be
   * immediately and synchronously true if a vendorlist object is passed into
   * the constructor or once the JSON vendorllist is retrieved.
   *
   * @return {boolean} whether or not the instance is ready to be interacted
   * with and all the data is populated
   */
  get isReady() {
    return this.isReady_;
  }
  /**
   * clone - overrides base `clone()` method since GVL is a special class that
   * represents a JSON structure with some additional functionality.
   *
   * @return {GVL}
   */
  clone() {
    const result = new _GVL(this.getJson());
    if (this.lang_ !== _GVL.DEFAULT_LANGUAGE) {
      result.changeLanguage(this.lang_);
    }
    return result;
  }
  static isInstanceOf(questionableInstance) {
    const isSo = typeof questionableInstance === "object";
    return isSo && typeof questionableInstance.narrowVendorsTo === "function";
  }
};
__publicField(_GVL, "LANGUAGE_CACHE", /* @__PURE__ */ new Map());
__publicField(_GVL, "CACHE", /* @__PURE__ */ new Map());
__publicField(_GVL, "LATEST_CACHE_KEY", 0);
__publicField(_GVL, "DEFAULT_LANGUAGE", "EN");
/**
 * Set of available consent languages published by the IAB
 */
__publicField(_GVL, "consentLanguages", new ConsentLanguages());
__publicField(_GVL, "baseUrl_");
/**
 * @static
 * @param {string} - the latest is assumed to be vendor-list.json because
 * that is what the iab uses, but it could be different... if you want
 */
__publicField(_GVL, "latestFilename", "vendor-list.json");
/**
 * @static
 * @param {string} - the versioned name is assumed to be
 * vendor-list-v[VERSION].json where [VERSION] will be replaced with the
 * specified version.  But it could be different... if you want just make
 * sure to include the [VERSION] macro if you have a numbering scheme, it's a
 * simple string substitution.
 *
 * eg.
 * ```javascript
 * GVL.baseUrl = "http://www.mydomain.com/iabcmp/";
 * GVL.versionedFilename = "vendorlist?getVersion=[VERSION]";
 * ```
 */
__publicField(_GVL, "versionedFilename", "archives/vendor-list-v[VERSION].json");
/**
 * @param {string} - Translations of the names and descriptions for Purposes,
 * Special Purposes, Features, and Special Features to non-English languages
 * are contained in a file where attributes containing English content
 * (except vendor declaration information) are translated.  The iab publishes
 * one following the scheme below where the LANG is the iso639-1 language
 * code.  For a list of available translations
 * [please go here](https://register.consensu.org/Translation).
 *
 * eg.
 * ```javascript
 * GVL.baseUrl = "http://www.mydomain.com/iabcmp/";
 * GVL.languageFilename = "purposes?getPurposes=[LANG]";
 * ```
 */
__publicField(_GVL, "languageFilename", "purposes-[LANG].json");
let GVL = _GVL;
class TCModel extends Cloneable {
  /**
   * Constructs the TCModel. Passing a [[GVL]] is optional when constructing
   * as this TCModel may be constructed from decoding an existing encoded
   * TCString.
   *
   * @param {GVL} [gvl]
   */
  constructor(gvl) {
    super();
    __publicField(this, "isServiceSpecific_", false);
    __publicField(this, "supportOOB_", true);
    __publicField(this, "useNonStandardTexts_", false);
    __publicField(this, "purposeOneTreatment_", false);
    __publicField(this, "publisherCountryCode_", "AA");
    __publicField(this, "version_", 2);
    __publicField(this, "consentScreen_", 0);
    __publicField(this, "policyVersion_", 5);
    __publicField(this, "consentLanguage_", "EN");
    __publicField(this, "cmpId_", 0);
    __publicField(this, "cmpVersion_", 0);
    __publicField(this, "vendorListVersion_", 0);
    __publicField(this, "numCustomPurposes_", 0);
    // Member Variable for GVL
    __publicField(this, "gvl_");
    __publicField(this, "created");
    __publicField(this, "lastUpdated");
    /**
     * The TCF designates certain Features as special, that is, a CMP must afford
     * the user a means to opt in to their use. These Special Features are
     * published and numbered in the GVL separately from normal Features.
     * Provides for up to 12 special features.
     */
    __publicField(this, "specialFeatureOptins", new Vector());
    /**
     * Renamed from `PurposesAllowed` in TCF v1.1
     * The user’s consent value for each Purpose established on the legal basis
     * of consent. Purposes are published in the Global Vendor List (see. [[GVL]]).
     */
    __publicField(this, "purposeConsents", new Vector());
    /**
     * The user’s permission for each Purpose established on the legal basis of
     * legitimate interest. If the user has exercised right-to-object for a
     * purpose.
     */
    __publicField(this, "purposeLegitimateInterests", new Vector());
    /**
     * The user’s consent value for each Purpose established on the legal basis
     * of consent, for the publisher.  Purposes are published in the Global
     * Vendor List.
     */
    __publicField(this, "publisherConsents", new Vector());
    /**
     * The user’s permission for each Purpose established on the legal basis of
     * legitimate interest.  If the user has exercised right-to-object for a
     * purpose.
     */
    __publicField(this, "publisherLegitimateInterests", new Vector());
    /**
     * The user’s consent value for each Purpose established on the legal basis
     * of consent, for the publisher.  Purposes are published in the Global
     * Vendor List.
     */
    __publicField(this, "publisherCustomConsents", new Vector());
    /**
     * The user’s permission for each Purpose established on the legal basis of
     * legitimate interest.  If the user has exercised right-to-object for a
     * purpose that is established in the publisher's custom purposes.
     */
    __publicField(this, "publisherCustomLegitimateInterests", new Vector());
    /**
     * set by a publisher if they wish to collect consent and LI Transparency for
     * purposes outside of the TCF
     */
    __publicField(this, "customPurposes");
    /**
     * Each [[Vendor]] is keyed by id. Their consent value is true if it is in
     * the Vector
     */
    __publicField(this, "vendorConsents", new Vector());
    /**
     * Each [[Vendor]] is keyed by id. Whether their Legitimate Interests
     * Disclosures have been established is stored as boolean.
     * see: [[Vector]]
     */
    __publicField(this, "vendorLegitimateInterests", new Vector());
    /**
     * The value included for disclosed vendors signals which vendors have been
     * disclosed to the user in the interface surfaced by the CMP. This section
     * content is required when writing a TC string to the global (consensu)
     * scope. When a CMP has read from and is updating a TC string from the
     * global consensu.org storage, the CMP MUST retain the existing disclosure
     * information and only add information for vendors that it has disclosed
     * that had not been disclosed by other CMPs in prior interactions with this
     * device/user agent.
     */
    __publicField(this, "vendorsDisclosed", new Vector());
    /**
     * Signals which vendors the publisher permits to use OOB legal bases.
     */
    __publicField(this, "vendorsAllowed", new Vector());
    __publicField(this, "publisherRestrictions", new PurposeRestrictionVector());
    if (gvl) {
      this.gvl = gvl;
    }
    this.updated();
  }
  /**
   * sets the [[GVL]] with side effects of also setting the `vendorListVersion`, `policyVersion`, and `consentLanguage`
   * @param {GVL} gvl
   */
  set gvl(gvl) {
    if (!GVL.isInstanceOf(gvl)) {
      gvl = new GVL(gvl);
    }
    this.gvl_ = gvl;
    this.publisherRestrictions.gvl = gvl;
  }
  /**
   * @return {GVL} the gvl instance set on this TCModel instance
   */
  get gvl() {
    return this.gvl_;
  }
  /**
   * @param {number} integer - A unique ID will be assigned to each Consent
   * Manager Provider (CMP) from the iab.
   *
   * @throws {TCModelError} if the value is not an integer greater than 1 as those are not valid.
   */
  set cmpId(integer) {
    integer = Number(integer);
    if (Number.isInteger(integer) && integer > 1) {
      this.cmpId_ = integer;
    } else {
      throw new TCModelError("cmpId", integer);
    }
  }
  get cmpId() {
    return this.cmpId_;
  }
  /**
   * Each change to an operating CMP should receive a
   * new version number, for logging proof of consent. CmpVersion defined by
   * each CMP.
   *
   * @param {number} integer
   *
   * @throws {TCModelError} if the value is not an integer greater than 1 as those are not valid.
   */
  set cmpVersion(integer) {
    integer = Number(integer);
    if (Number.isInteger(integer) && integer > -1) {
      this.cmpVersion_ = integer;
    } else {
      throw new TCModelError("cmpVersion", integer);
    }
  }
  get cmpVersion() {
    return this.cmpVersion_;
  }
  /**
   * The screen number is CMP and CmpVersion
   * specific, and is for logging proof of consent.(For example, a CMP could
   * keep records so that a publisher can request information about the context
   * in which consent was gathered.)
   *
   * @param {number} integer
   *
   * @throws {TCModelError} if the value is not an integer greater than 0 as those are not valid.
   */
  set consentScreen(integer) {
    integer = Number(integer);
    if (Number.isInteger(integer) && integer > -1) {
      this.consentScreen_ = integer;
    } else {
      throw new TCModelError("consentScreen", integer);
    }
  }
  get consentScreen() {
    return this.consentScreen_;
  }
  /**
   * @param {string} lang - [two-letter ISO 639-1 language
   * code](http://www.loc.gov/standards/iso639-2/php/code_list.php) in which
   * the CMP UI was presented
   *
   * @throws {TCModelError} if the value is not a length-2 string of alpha characters
   */
  set consentLanguage(lang) {
    this.consentLanguage_ = lang;
  }
  get consentLanguage() {
    return this.consentLanguage_;
  }
  /**
   * @param {string} countryCode - [two-letter ISO 3166-1 alpha-2 country
   * code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the publisher,
   * determined by the CMP-settings of the publisher.
   *
   * @throws {TCModelError} if the value is not a length-2 string of alpha characters
   */
  set publisherCountryCode(countryCode) {
    if (/^([A-z]){2}$/.test(countryCode)) {
      this.publisherCountryCode_ = countryCode.toUpperCase();
    } else {
      throw new TCModelError("publisherCountryCode", countryCode);
    }
  }
  get publisherCountryCode() {
    return this.publisherCountryCode_;
  }
  /**
   * Version of the GVL used to create this TCModel. Global
   * Vendor List versions will be released periodically.
   *
   * @param {number} integer
   *
   * @throws {TCModelError} if the value is not an integer greater than 0 as those are not valid.
   */
  set vendorListVersion(integer) {
    integer = Number(integer) >> 0;
    if (integer < 0) {
      throw new TCModelError("vendorListVersion", integer);
    } else {
      this.vendorListVersion_ = integer;
    }
  }
  get vendorListVersion() {
    if (this.gvl) {
      return this.gvl.vendorListVersion;
    } else {
      return this.vendorListVersion_;
    }
  }
  /**
   * From the corresponding field in the GVL that was
   * used for obtaining consent. A new policy version invalidates existing
   * strings and requires CMPs to re-establish transparency and consent from
   * users.
   *
   * If a TCF policy version number is different from the one from the latest
   * GVL, the CMP must re-establish transparency and consent.
   *
   * @param {number} num - You do not need to set this.  This comes
   * directly from the [[GVL]].
   *
   */
  set policyVersion(num) {
    this.policyVersion_ = parseInt(num, 10);
    if (this.policyVersion_ < 0) {
      throw new TCModelError("policyVersion", num);
    }
  }
  get policyVersion() {
    if (this.gvl) {
      return this.gvl.tcfPolicyVersion;
    } else {
      return this.policyVersion_;
    }
  }
  set version(num) {
    this.version_ = parseInt(num, 10);
  }
  get version() {
    return this.version_;
  }
  /**
   * Whether the signals encoded in this TC String were from site-specific
   * storage `true` versus ‘global’ consensu.org shared storage `false`. A
   * string intended to be stored in global/shared scope but the CMP is unable
   * to store due to a user agent not accepting third-party cookies would be
   * considered site-specific `true`.
   *
   * @param {boolean} bool - value to set. Some changes to other fields in this
   * model will automatically change this value like adding publisher
   * restrictions.
   */
  set isServiceSpecific(bool) {
    this.isServiceSpecific_ = bool;
  }
  get isServiceSpecific() {
    return this.isServiceSpecific_;
  }
  /**
   * Non-standard stacks means that a CMP is using publisher-customized stack
   * descriptions. Stacks (in terms of purposes in a stack) are pre-set by the
   * IAB. As are titles. Descriptions are pre-set, but publishers can customize
   * them. If they do, they need to set this bit to indicate that they've
   * customized descriptions.
   *
   * @param {boolean} bool - value to set
   */
  set useNonStandardTexts(bool) {
    this.useNonStandardTexts_ = bool;
  }
  get useNonStandardTexts() {
    return this.useNonStandardTexts_;
  }
  /**
   * Whether or not this publisher supports OOB signaling.  On Global TC String
   * OOB Vendors Disclosed will be included if the publish wishes to no allow
   * these vendors they should set this to false.
   * @param {boolean} bool - value to set
   */
  set supportOOB(bool) {
    this.supportOOB_ = bool;
  }
  get supportOOB() {
    return this.supportOOB_;
  }
  /**
   * `false` There is no special Purpose 1 status.
   * Purpose 1 was disclosed normally (consent) as expected by Policy.  `true`
   * Purpose 1 not disclosed at all. CMPs use PublisherCC to indicate the
   * publisher’s country of establishment to help Vendors determine whether the
   * vendor requires Purpose 1 consent. In global scope TC strings, this field
   * must always have a value of `false`. When a CMP encounters a global scope
   * string with `purposeOneTreatment=true` then that string should be
   * considered invalid and the CMP must re-establish transparency and consent.
   *
   * @param {boolean} bool
   */
  set purposeOneTreatment(bool) {
    this.purposeOneTreatment_ = bool;
  }
  get purposeOneTreatment() {
    return this.purposeOneTreatment_;
  }
  /**
   * setAllVendorConsents - sets all vendors on the GVL Consent (true)
   *
   * @return {void}
   */
  setAllVendorConsents() {
    this.vendorConsents.set(this.gvl.vendors);
  }
  /**
   * unsetAllVendorConsents - unsets all vendors on the GVL Consent (false)
   *
   * @return {void}
   */
  unsetAllVendorConsents() {
    this.vendorConsents.empty();
  }
  /**
   * setAllVendorsDisclosed - sets all vendors on the GVL Vendors Disclosed (true)
   *
   * @return {void}
   */
  setAllVendorsDisclosed() {
    this.vendorsDisclosed.set(this.gvl.vendors);
  }
  /**
   * unsetAllVendorsDisclosed - unsets all vendors on the GVL Consent (false)
   *
   * @return {void}
   */
  unsetAllVendorsDisclosed() {
    this.vendorsDisclosed.empty();
  }
  /**
   * setAllVendorsAllowed - sets all vendors on the GVL Consent (true)
   *
   * @return {void}
   */
  setAllVendorsAllowed() {
    this.vendorsAllowed.set(this.gvl.vendors);
  }
  /**
   * unsetAllVendorsAllowed - unsets all vendors on the GVL Consent (false)
   *
   * @return {void}
   */
  unsetAllVendorsAllowed() {
    this.vendorsAllowed.empty();
  }
  /**
   * setAllVendorLegitimateInterests - sets all vendors on the GVL LegitimateInterests (true)
   *
   * @return {void}
   */
  setAllVendorLegitimateInterests() {
    this.vendorLegitimateInterests.set(this.gvl.vendors);
  }
  /**
   * unsetAllVendorLegitimateInterests - unsets all vendors on the GVL LegitimateInterests (false)
   *
   * @return {void}
   */
  unsetAllVendorLegitimateInterests() {
    this.vendorLegitimateInterests.empty();
  }
  /**
   * setAllPurposeConsents - sets all purposes on the GVL Consent (true)
   *
   * @return {void}
   */
  setAllPurposeConsents() {
    this.purposeConsents.set(this.gvl.purposes);
  }
  /**
   * unsetAllPurposeConsents - unsets all purposes on the GVL Consent (false)
   *
   * @return {void}
   */
  unsetAllPurposeConsents() {
    this.purposeConsents.empty();
  }
  /**
   * setAllPurposeLegitimateInterests - sets all purposes on the GVL LI Transparency (true)
   *
   * @return {void}
   */
  setAllPurposeLegitimateInterests() {
    this.purposeLegitimateInterests.set(this.gvl.purposes);
  }
  /**
   * unsetAllPurposeLegitimateInterests - unsets all purposes on the GVL LI Transparency (false)
   *
   * @return {void}
   */
  unsetAllPurposeLegitimateInterests() {
    this.purposeLegitimateInterests.empty();
  }
  /**
   * setAllSpecialFeatureOptins - sets all special featuresOptins on the GVL (true)
   *
   * @return {void}
   */
  setAllSpecialFeatureOptins() {
    this.specialFeatureOptins.set(this.gvl.specialFeatures);
  }
  /**
   * unsetAllSpecialFeatureOptins - unsets all special featuresOptins on the GVL (true)
   *
   * @return {void}
   */
  unsetAllSpecialFeatureOptins() {
    this.specialFeatureOptins.empty();
  }
  setAll() {
    this.setAllVendorConsents();
    this.setAllPurposeLegitimateInterests();
    this.setAllSpecialFeatureOptins();
    this.setAllPurposeConsents();
    this.setAllVendorLegitimateInterests();
  }
  unsetAll() {
    this.unsetAllVendorConsents();
    this.unsetAllPurposeLegitimateInterests();
    this.unsetAllSpecialFeatureOptins();
    this.unsetAllPurposeConsents();
    this.unsetAllVendorLegitimateInterests();
  }
  get numCustomPurposes() {
    let len = this.numCustomPurposes_;
    if (typeof this.customPurposes === "object") {
      const purposeIds = Object.keys(this.customPurposes).sort((a2, b) => Number(a2) - Number(b));
      len = parseInt(purposeIds.pop(), 10);
    }
    return len;
  }
  set numCustomPurposes(num) {
    this.numCustomPurposes_ = parseInt(num, 10);
    if (this.numCustomPurposes_ < 0) {
      throw new TCModelError("numCustomPurposes", num);
    }
  }
  /**
   * updated - updates the created and lastUpdated dates with a 'now' day-level UTC timestamp
   *
   * @return {void}
   */
  updated() {
    const date = /* @__PURE__ */ new Date();
    const utcDate = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
    this.created = utcDate;
    this.lastUpdated = utcDate;
  }
}
/**
 * Set of available consent languages published by the IAB
 */
__publicField(TCModel, "consentLanguages", GVL.consentLanguages);
class TCString {
  /**
   * encodes a model into a TCString
   *
   * @param {TCModel} tcModel - model to convert into encoded string
   * @param {EncodingOptions} options - for encoding options other than default
   * @return {string} - base64url encoded Transparency and Consent String
   */
  static encode(tcModel, options) {
    let out = "";
    let sequence;
    tcModel = SemanticPreEncoder.process(tcModel, options);
    if (Array.isArray(options == null ? void 0 : options.segments)) {
      sequence = options.segments;
    } else {
      sequence = new SegmentSequence(tcModel, options)["" + tcModel.version];
    }
    sequence.forEach((segment, idx) => {
      let dotMaybe = "";
      if (idx < sequence.length - 1) {
        dotMaybe = ".";
      }
      out += SegmentEncoder.encode(tcModel, segment) + dotMaybe;
    });
    return out;
  }
  /**
   * Decodes a string into a TCModel
   *
   * @param {string} encodedTCString - base64url encoded Transparency and
   * Consent String to decode - can also be a single or group of segments of
   * the string
   * @param {string} [tcModel] - model to enhance with the information.  If
   * none is passed a new instance of TCModel will be created.
   * @return {TCModel} - Returns populated TCModel
   */
  static decode(encodedTCString, tcModel) {
    const segments = encodedTCString.split(".");
    const len = segments.length;
    if (!tcModel) {
      tcModel = new TCModel();
    }
    for (let i2 = 0; i2 < len; i2++) {
      const segString = segments[i2];
      const firstChar = Base64Url.decode(segString.charAt(0));
      const segTypeBits = firstChar.substr(0, BitLength.segmentType);
      const segment = SegmentIDs.ID_TO_KEY[IntEncoder.decode(segTypeBits, BitLength.segmentType).toString()];
      SegmentEncoder.decode(segString, tcModel, segment);
    }
    return tcModel;
  }
}
const TCF_CONSENT_STATE_ACTION_TOGGLE_CATEGORY = 0;
const TCF_CONSENT_STATE_ACTION_TOGGLE_VENDOR = 1;
const TCF_CONSENT_STATE_ACTION_START_CONSENT_SAVE = 2;
const TCF_CONSENT_STATE_ACTION_CONSENT_SAVE_FINISHED = 3;
const TCF_CONSENT_STATE_ACTION_ACCEPT_ALL = 4;
const TCF_CONSENT_STATE_ACTION_LOG_TO_API = 5;
const TCF_CONSENT_STATE_ACTION_DENY = 6;
const TCF_CONSENT_STATE_ACTION_TOGGLE_GATP_VENDOR = 7;
const TCF_CONSENT_STATE_ACTION_TOGGLE_VENDOR_LEGITIMATE_INTEREST = 8;
const TCF_CONSENT_STATE_ACTION_TOGGLE_CATEGORY_LEGITIMATE_INTEREST = 9;
const TCF_CONSENT_STATE_ACTION_ACCEPT_ALL_LEGITIMATE_INTEREST = 10;
const TCF_CONSENT_STATE_ACTION_SET_CONSENT = 11;
var VendorTypes = /* @__PURE__ */ ((VendorTypes2) => {
  VendorTypes2["IAB"] = "iab";
  VendorTypes2["NON_IAB"] = "non_iab";
  VendorTypes2["GOOGLE"] = "g";
  return VendorTypes2;
})(VendorTypes || {});
var TCFCategoryTypes = /* @__PURE__ */ ((TCFCategoryTypes2) => {
  TCFCategoryTypes2["PURPOSES"] = "purposes";
  TCFCategoryTypes2["SPECIAL_PURPOSES"] = "specialPurposes";
  TCFCategoryTypes2["FEATURES"] = "features";
  TCFCategoryTypes2["SPECIAL_FEATURES"] = "specialFeatures";
  return TCFCategoryTypes2;
})(TCFCategoryTypes || {});
var TCFEventStatus = /* @__PURE__ */ ((TCFEventStatus2) => {
  TCFEventStatus2["TCLOADED"] = "tcloaded";
  TCFEventStatus2["IS_SHOWN"] = "cmpuishown";
  TCFEventStatus2["INTERACTION_COMPLETE"] = "useractioncomplete";
  return TCFEventStatus2;
})(TCFEventStatus || {});
const TCF_VENDOR_CATEGORIES_TYPES = [
  { key: TCFCategoryTypes.PURPOSES, hasSwitch: TRUE, IABLibName: "purposeConsents", hasLegitimateInterest: TRUE, legIntName: "legIntPurposes", IABLibLegitimateInterestName: "purposeLegitimateInterests" },
  { key: TCFCategoryTypes.SPECIAL_PURPOSES, hasSwitch: FALSE, hasLegitimateInterest: FALSE },
  { key: TCFCategoryTypes.FEATURES, hasSwitch: FALSE, hasLegitimateInterest: FALSE },
  { key: TCFCategoryTypes.SPECIAL_FEATURES, hasSwitch: TRUE, IABLibName: "specialFeatureOptins", hasLegitimateInterest: FALSE }
];
const TCF_CMP_ID = 382;
const TCF_POLICY_VERSION = 4;
const TCF_AC_STRING_VERSION = "2";
const TCF_SUPPORTED_API_VERSION = "2.2";
const TCF_CONSENT_SCREEN = 1;
const TCF_AVAILABLE_FILTERS = [TCFCategoryTypes.PURPOSES, TCFCategoryTypes.SPECIAL_PURPOSES, TCFCategoryTypes.FEATURES, TCFCategoryTypes.SPECIAL_FEATURES];
const TCF_PURPOSES_DISABLED_LEGITIMATE_INTEREST = [1, 3, 4, 5, 6];
const calculateTCFBaseConsent = () => {
  const baseConsent = { vendors: {}, categories: {}, vendorsLegitimateInterest: {}, categoriesLegitimateInterest: {}, gatp: {} };
  return Object.freeze(baseConsent);
};
const loadLocalTCFConsentCookie = () => {
  const cookie = getCookie(TCSTRING_COOKIE);
  if (!cookie) {
    return NULL;
  }
  try {
    const decoded = JSON.parse(decodeURIComponent(cookie));
    return decoded;
  } catch (e2) {
    consentLogger("Failed to decode local consent cookie:");
    report(e2);
    return NULL;
  }
};
const formatStoredValue = (storedValue, widgetConfig) => {
  const decodedTCString = TCString.decode(storedValue.tcString);
  let consent = calculateTCFBaseConsent();
  decodedTCString.vendorConsents.forEach((hasConsent, vendorID) => {
    consent = { ...consent, vendors: { ...consent.vendors, [vendorID]: hasConsent } };
  });
  decodedTCString.vendorLegitimateInterests.forEach((hasConsent, vendorID) => {
    consent = { ...consent, vendorsLegitimateInterest: { ...consent.vendorsLegitimateInterest, [vendorID]: hasConsent } };
  });
  TCF_VENDOR_CATEGORIES_TYPES.forEach((category) => {
    if (category.hasSwitch) {
      if (!category.IABLibName) {
        console.error(MISSING_IAB_LIB_NAME);
        return;
      }
      decodedTCString[category.IABLibName].forEach((hasConsent, categoryID) => {
        consent = { ...consent, categories: { ...consent.categories, [category.key]: { ...consent.categories[category.key], [categoryID]: hasConsent } } };
      });
      if (category.hasLegitimateInterest) {
        if (!category.IABLibLegitimateInterestName) {
          console.error(MISSING_IAB_LIB_LEGINT_NAME);
          return;
        }
        decodedTCString[category.IABLibLegitimateInterestName].forEach((hasConsent, categoryID) => {
          consent = { ...consent, categoriesLegitimateInterest: { ...consent.categoriesLegitimateInterest, [category.key]: { ...consent.categoriesLegitimateInterest[category.key], [categoryID]: hasConsent } } };
        });
      }
    }
  });
  if (widgetConfig.acEnabled) {
    if (storedValue.acString) {
      const decodedGatpVendors = storedValue.acString.split("~")[1].split(".");
      decodedGatpVendors.forEach((vendorID) => {
        consent.gatp[vendorID] = TRUE;
      });
    }
  }
  return [
    { ...consent },
    parseInt(storedValue.timestamp || "0"),
    // use numeric timestamp here,
    storedValue.tcString,
    storedValue.acString
  ];
};
const loadLocalTCFConsent = (widgetConfig) => {
  const localStorageItem = getLocalStorageItem(
    TCSTRING_COOKIE,
    NULL
  );
  if (localStorageItem) {
    return formatStoredValue(localStorageItem, widgetConfig);
  }
  const cookie = loadLocalTCFConsentCookie();
  if (cookie) {
    return formatStoredValue(cookie, widgetConfig);
  }
  return NULL;
};
const TCFdeleteLocalTCString = (bulkConfig) => {
  deleteLocalStorageItem(TCSTRING_COOKIE);
  deleteLocalCookie(TCSTRING_COOKIE, bulkConfig);
};
const shouldForceReconsent = (consent = {}, consentTimestamp = 0, widgetConfig = createWidgetConfig()) => {
  const tcfConsent = loadLocalTCFConsent(widgetConfig);
  if (tcfConsent && !widgetConfig.tcfEnabled) {
    TCFdeleteLocalTCString(widgetConfig.bulkConsent);
    deleteLocalConsent();
    return TRUE;
  }
  if (!isObject(consent) || typeof consentTimestamp !== "number" || !isObject(widgetConfig)) {
    return FALSE;
  }
  const reconsent = widgetConfig.reconsent;
  const reconsentAfter = reconsent.after;
  const reconsentCheck = reconsent.check;
  const categories$1 = reconsent.categories.filter(
    (i2) => includes(categories, i2)
  );
  if (!reconsentAfter || typeof reconsentAfter !== "number") {
    return FALSE;
  }
  if (!categories$1.length) {
    return FALSE;
  }
  const now = getTimestamp();
  const isOldEnough = now - consentTimestamp >= reconsentAfter * DAY_IN_SECONDS;
  if (!isOldEnough) {
    return FALSE;
  }
  const categoriesMeetGoal = () => {
    const isAccepted = (cat) => {
      return isCategoryAccepted(
        cat,
        consent,
        widgetConfig.consentPolicy,
        widgetConfig.scripts
      );
    };
    if (reconsentCheck === "ALL") {
      return categories$1.every(isAccepted);
    } else {
      return categories$1.some(isAccepted);
    }
  };
  return !categoriesMeetGoal();
};
const CONSENT_STATE_ACTION_TOGGLE_CATEGORY = 0;
const CONSENT_STATE_ACTION_TOGGLE_SERVICE = 1;
const CONSENT_STATE_ACTION_SET_VISITOR_ID = 2;
const CONSENT_STATE_ACTION_START_CONSENT_SAVE = 3;
const CONSENT_STATE_ACTION_CONSENT_SAVE_FINISHED = 4;
const CONSENT_STATE_ACTION_START_WITHDRAW = 5;
const CONSENT_STATE_ACTION_TOGGLE_WITHDRAW_MODAL = 6;
const CONSENT_STATE_ACTION_FORCE_RECONSENT = 8;
const createConsentStateReducer = (widgetConfig) => {
  const { isGranularPolicy, scripts } = widgetConfig;
  return (state, action) => {
    switch (action.type) {
      case CONSENT_STATE_ACTION_TOGGLE_SERVICE: {
        const { script, shouldBeAccepted } = action.payload;
        const { consent_key } = script;
        if (
          // can't toggle script when not in granular mode
          !isGranularPolicy || // can't toggle script which doesn't have a consent_key
          !consent_key || // can't toggle script which has necessary category
          includes(script.categories, NECESSARY)
        ) {
          return state;
        }
        consentLogger("Toggle script", consent_key);
        return {
          ...state,
          tempConsent: {
            ...state.tempConsent,
            [consent_key]: shouldBeAccepted
          }
        };
      }
      case CONSENT_STATE_ACTION_TOGGLE_CATEGORY: {
        const { category, shouldBeAccepted } = action.payload;
        consentLogger("Toggle category", category, shouldBeAccepted);
        if (category === NECESSARY) {
          return state;
        }
        if (isGranularPolicy) {
          const requestedScripts = scripts.filter((script) => {
            return includes(script.categories, category) && !includes(script.categories, NECESSARY);
          });
          return {
            ...state,
            tempConsent: requestedScripts.reduce(
              (aggregate, script) => ({
                ...aggregate,
                [script.consent_key]: !!shouldBeAccepted
              }),
              state.tempConsent
            )
          };
        } else {
          return {
            ...state,
            tempConsent: {
              ...state.tempConsent,
              [category]: !!shouldBeAccepted
            }
          };
        }
      }
      case CONSENT_STATE_ACTION_START_CONSENT_SAVE: {
        return {
          ...state,
          isSavingConsent: TRUE
        };
      }
      case CONSENT_STATE_ACTION_CONSENT_SAVE_FINISHED: {
        const { consent, timestamp } = action.payload;
        return {
          ...state,
          consentTimestamp: timestamp,
          tempConsent: consent,
          userConsent: consent,
          hasConsented: TRUE,
          isForcingReconsent: FALSE,
          isSavingConsent: FALSE
        };
      }
      case CONSENT_STATE_ACTION_SET_VISITOR_ID: {
        return {
          ...state,
          visitorId: action.payload
        };
      }
      case CONSENT_STATE_ACTION_START_WITHDRAW: {
        return {
          ...state,
          isWithdrawing: true
        };
      }
      case CONSENT_STATE_ACTION_TOGGLE_WITHDRAW_MODAL: {
        return {
          ...state,
          showWithdrawModal: action.payload
        };
      }
      case CONSENT_STATE_ACTION_FORCE_RECONSENT: {
        return {
          ...state,
          isForcingReconsent: action.payload
        };
      }
      default:
        return state;
    }
  };
};
const calculateBaseConsent = (widgetConfig, source) => {
  const baseConsent = {};
  if (widgetConfig.isGranularPolicy) {
    widgetConfig.scripts.forEach((script) => {
      baseConsent[script.consent_key] = isServiceAccepted(
        script,
        { ...source },
        // the source object has the category optin structure
        CONSENT_POLICY_CATEGORY_OPTIN
      );
    });
  } else {
    categories.forEach((cat) => {
      baseConsent[cat] = isCategoryAccepted(
        cat,
        { ...source },
        // the source object has the category optin structure
        CONSENT_POLICY_CATEGORY_OPTIN
      );
    });
  }
  return Object.freeze(baseConsent);
};
const calculateInitialState = (input) => {
  const { prevConsent, prevConsentTimestamp, visitorId, widgetConfig } = input;
  const state = {
    consentTimestamp: null,
    userConsent: {},
    baseConsent: {},
    preConsent: {},
    tempConsent: {},
    hasConsented: FALSE,
    isSavingConsent: FALSE,
    isWithdrawing: FALSE,
    showWithdrawModal: FALSE,
    isForcingReconsent: FALSE,
    visitorId: null
  };
  state.baseConsent = calculateBaseConsent(
    widgetConfig,
    widgetConfig.baseConsent
  );
  state.preConsent = calculateBaseConsent(
    widgetConfig,
    widgetConfig.preConsent
  );
  if (!prevConsent) {
    state.tempConsent = { ...state.baseConsent };
    return state;
  }
  state.userConsent = { ...prevConsent };
  state.tempConsent = { ...prevConsent };
  state.visitorId = visitorId || NULL;
  state.consentTimestamp = prevConsentTimestamp || NULL;
  state.hasConsented = TRUE;
  if (prevConsentTimestamp && shouldForceReconsent(prevConsent, prevConsentTimestamp, widgetConfig)) {
    consentLogger("forcing reconsent");
    state.isForcingReconsent = TRUE;
  }
  return state;
};
const EVENT_NAME$2 = "".concat(EVENTS_PREFIX, "_consent_accept_all");
const dispatchAcceptAllEvent = () => {
  const jsEventData = NULL;
  dispatchJSEvent(EVENT_NAME$2, jsEventData);
};
const EVENT_NAME$1 = "".concat(EVENTS_PREFIX, "_tcf_log_consent_to_api");
const dispatchLogConsentoApiWithTCFEvent = (payload) => {
  const jsEventData = {
    ...payload
  };
  dispatchJSEvent(EVENT_NAME$1, jsEventData);
};
const EVENT_NAME = "".concat(EVENTS_PREFIX, "_denied_action");
const dispatchUserDeniedEvent = () => {
  const jsEventData = NULL;
  dispatchJSEvent(EVENT_NAME, jsEventData);
};
const saveWithdrawCookie = (widgetConfig) => {
  const lifetime = widgetConfig.consentLifetime || YEAR_IN_SECONDS;
  const cookieExpiry = getTimestamp() + lifetime;
  saveLocalCookie(CONSENT_COOKIE, WITHDRAW_COOKIE, cookieExpiry, widgetConfig.bulkConsent);
};
const reloadWindow = () => _WINDOW_.location.reload();
const useManageConsentState = (input) => {
  const {
    widgetConfig,
    visitorCountry,
    visitorRegion,
    setShouldTriggerConsentEvent
  } = useAppState();
  const bulkConfig = widgetConfig.bulkConsent;
  const scripts = widgetConfig.scripts;
  const useGranularConsent = widgetConfig.isGranularPolicy;
  const [state, dispatch] = p(
    createConsentStateReducer(widgetConfig),
    calculateInitialState({ ...input, widgetConfig })
  );
  const triggerConsentEvent = A(FALSE);
  y(() => {
    if (triggerConsentEvent.current) {
      triggerConsentEvent.current = FALSE;
      setShouldTriggerConsentEvent(TRUE);
    }
  }, [state.userConsent, setShouldTriggerConsentEvent]);
  y(() => {
    const hasConsented = state.hasConsented;
    dispatchConsentLoadedEvent(
      hasConsented ? state.userConsent : state.preConsent,
      hasConsented,
      widgetConfig
    );
  }, []);
  const dispatchAction = (type, payload) => {
    dispatch({ type, payload });
  };
  const setVisitorId = (visitorId) => {
    dispatchAction(
      CONSENT_STATE_ACTION_SET_VISITOR_ID,
      visitorId
    );
    saveLocalVisitorId(visitorId);
  };
  const setIsForcingReconsent = (isForcingReconsent) => {
    dispatchAction(
      CONSENT_STATE_ACTION_FORCE_RECONSENT,
      isForcingReconsent
    );
  };
  const logConsentToApi = (action = CONSENT_ACTION_STORE, consent = {}, granularMetadata = NULL) => {
    return createPromise((resolve) => {
      logUserConsent(
        consent,
        action,
        state.visitorId,
        widgetConfig.version,
        visitorCountry,
        visitorRegion,
        widgetConfig.consentPolicy,
        granularMetadata
      ).then((newVisitorId) => {
        if (newVisitorId) {
          setVisitorId(newVisitorId);
        }
      }, report).finally(resolve);
    });
  };
  const saveAndLogConsent = (consent, action, timestamp, widgetConfig2) => {
    return createPromise((resolve, reject) => {
      if (action === CONSENT_ACTION_WITHDRAW) {
        deleteLocalConsent(widgetConfig2.bulkConsent);
        if (widgetConfig2.bulkConsent.id) {
          saveWithdrawCookie(widgetConfig2);
        }
      } else {
        saveLocalConsent(consent, timestamp, widgetConfig2);
      }
      const promises = [];
      if (bulkConfig.id) {
        promises.push(
          saveBulkConsent(bulkConfig, {
            action,
            consent,
            timestamp,
            type: widgetConfig2.consentType
          })
        );
      }
      const granularMetadata = calculateGranularMetadata(widgetConfig2);
      if (widgetConfig2.tcfEnabled) {
        dispatchLogConsentoApiWithTCFEvent({
          consent,
          userAction: action,
          visitorId: state.visitorId,
          configVersion: widgetConfig2.version,
          visitorCountry,
          visitorRegion,
          consentPolicy: widgetConfig2.consentPolicy,
          granularMetadata
        });
      } else {
        promises.push(logConsentToApi(action, consent, granularMetadata));
      }
      Promise.all(promises).then(() => resolve(), reject);
    });
  };
  const handleConsent = (newConsent) => {
    return createPromise((resolve) => {
      dispatchUserConsentedEvent();
      const consent = { ...newConsent };
      state.tempConsent = { ...newConsent };
      const hasPreviouslyConsented = state.hasConsented;
      const isConsentEqualToPrevious = isConsentEqual(
        consent,
        state.userConsent,
        widgetConfig
      );
      const action = hasPreviouslyConsented ? CONSENT_ACTION_UPDATE : CONSENT_ACTION_STORE;
      if (hasPreviouslyConsented && isConsentEqualToPrevious && !state.isForcingReconsent) {
        consentLogger("Skip consent log, same consent");
        if (widgetConfig.tcfEnabled) {
          const granularMetadata = calculateGranularMetadata(widgetConfig);
          dispatchLogConsentoApiWithTCFEvent({
            consent,
            userAction: action,
            visitorId: state.visitorId,
            configVersion: widgetConfig.version,
            visitorCountry,
            visitorRegion,
            consentPolicy: widgetConfig.consentPolicy,
            granularMetadata,
            hasNormalConsentChanged: FALSE
          });
        }
        return resolve();
      }
      consentLogger("Save consent", consent);
      const isStricter = isConsentStricter(
        consent,
        hasPreviouslyConsented ? state.userConsent : state.preConsent,
        widgetConfig
      );
      dispatchAction(
        CONSENT_STATE_ACTION_START_CONSENT_SAVE,
        NULL
      );
      const timestamp = getTimestamp();
      saveAndLogConsent(consent, action, timestamp, widgetConfig).catch(report).finally(() => {
        dispatchAction(
          CONSENT_STATE_ACTION_CONSENT_SAVE_FINISHED,
          {
            consent,
            timestamp
          }
        );
        if (isStricter || hasPreviouslyConsented && !isConsentEqualToPrevious) {
          reloadWindow();
          return;
        }
        triggerConsentEvent.current = TRUE;
        return resolve();
      });
    });
  };
  const handleWithdraw = () => {
    return createPromise((resolve) => {
      if (!state.hasConsented) {
        return resolve();
      }
      dispatchAction(
        CONSENT_STATE_ACTION_START_WITHDRAW,
        NULL
      );
      TCFdeleteLocalTCString(widgetConfig.bulkConsent);
      saveAndLogConsent(
        {},
        CONSENT_ACTION_WITHDRAW,
        getTimestamp(),
        widgetConfig
      ).catch(report).finally(reloadWindow);
    });
  };
  const acceptAll = () => {
    dispatchAcceptAllEvent();
    if (useGranularConsent) {
      const requestedServices = scripts.map((s2) => s2.consent_key);
      return acceptServices(requestedServices);
    } else {
      return acceptCategories(widgetConfig.cookieCategories);
    }
  };
  const acceptServices = (requestedServices) => {
    const requestedScripts = scripts.filter((script) => {
      return includes(script.categories, NECESSARY) || includes(requestedServices, script.consent_key);
    });
    if (useGranularConsent) {
      const newConsent = requestedScripts.reduce(
        (obj, script) => ({
          ...obj,
          [script.consent_key]: TRUE
        }),
        { ...state.userConsent }
      );
      return handleConsent(newConsent);
    } else {
      const requestedCategories = requestedScripts.reduce(
        (aggregate, script) => {
          for (let i2 = 0; i2 < script.categories.length; i2++) {
            const cat = script.categories[i2];
            if (!includes(aggregate, cat)) {
              aggregate.push(cat);
            }
          }
          return aggregate;
        },
        [NECESSARY]
      );
      return acceptCategories(requestedCategories);
    }
  };
  const declineServices = (requestedServices) => {
    const requestedScripts = scripts.filter(
      (script) => includes(requestedServices, script.consent_key)
    );
    if (useGranularConsent) {
      const newConsent = requestedScripts.reduce(
        (obj, script) => ({
          ...obj,
          [script.consent_key]: FALSE
        }),
        { ...state.userConsent }
      );
      return handleConsent(newConsent);
    } else {
      const requestedCategories = requestedScripts.reduce(
        (aggregate, script) => {
          for (let i2 = 0; i2 < script.categories.length; i2++) {
            const cat = script.categories[i2];
            if (!includes(aggregate, cat)) {
              aggregate.push(cat);
            }
          }
          return aggregate;
        },
        []
      );
      return declineCategories(requestedCategories);
    }
  };
  const acceptCategories = (requestedCats) => {
    if (useGranularConsent) {
      const requestedScripts = scripts.filter((script) => {
        for (let i2 = 0; i2 < requestedCats.length; i2++) {
          if (includes(script.categories, requestedCats[i2]) || includes(script.categories, NECESSARY)) {
            return TRUE;
          }
        }
        return FALSE;
      }).map((s2) => s2.consent_key);
      return acceptServices(requestedScripts);
    } else {
      const newConsent = requestedCats.reduce(
        (aggregate, category) => ({ ...aggregate, [category]: TRUE }),
        { ...state.userConsent }
      );
      return handleConsent(newConsent);
    }
  };
  const declineCategories = (requestedCats) => {
    if (useGranularConsent) {
      const requestedServices = scripts.filter((script) => {
        for (let i2 = 0; i2 < requestedCats.length; i2++) {
          if (includes(script.categories, requestedCats[i2]) && !includes(script.categories, NECESSARY)) {
            return TRUE;
          }
        }
        return FALSE;
      }).map((s2) => s2.consent_key);
      return declineServices(requestedServices);
    } else {
      const newConsent = requestedCats.reduce(
        (aggregate, category) => ({ ...aggregate, [category]: FALSE }),
        { ...state.userConsent }
      );
      return handleConsent(newConsent);
    }
  };
  const acceptDefault = () => handleConsent(state.baseConsent);
  const acceptSelected = () => handleConsent(state.tempConsent);
  const deny = () => {
    const deniedConsent = useGranularConsent ? EMPTY_CONSENT : EMPTY_CATEGORY_CONSENT;
    dispatchUserDeniedEvent();
    return handleConsent(deniedConsent);
  };
  const isScriptToggleEnabled = (script) => {
    return isServiceAccepted(
      script,
      state.tempConsent,
      widgetConfig.consentPolicy
    );
  };
  const isCategoryToggleEnabled = (category) => {
    return isCategoryAccepted(
      category,
      state.tempConsent,
      widgetConfig.consentPolicy,
      scripts
    );
  };
  const toggleScript = (script) => {
    dispatchAction(
      CONSENT_STATE_ACTION_TOGGLE_SERVICE,
      { script, shouldBeAccepted: !isScriptToggleEnabled(script) }
    );
  };
  const toggleCategory = (category) => {
    dispatchAction(
      CONSENT_STATE_ACTION_TOGGLE_CATEGORY,
      { category, shouldBeAccepted: !isCategoryToggleEnabled(category) }
    );
  };
  const toggleWithdrawModal = (show) => {
    dispatchAction(
      CONSENT_STATE_ACTION_TOGGLE_WITHDRAW_MODAL,
      show
    );
  };
  return [
    {
      ...state,
      // Consent saving functions
      handleConsent,
      handleWithdraw,
      acceptAll,
      acceptCategories,
      declineCategories,
      acceptServices,
      declineServices,
      acceptDefault,
      acceptSelected,
      deny,
      // functions modifying temp state
      toggleScript,
      toggleCategory,
      setVisitorId,
      setIsForcingReconsent,
      toggleWithdrawModal,
      // consent querying functions
      isScriptAccepted: isScriptToggleEnabled,
      isCategoryAccepted: isCategoryToggleEnabled
    }
  ];
};
const UserConsentProvider = ({
  children = NULL,
  prevConsent = NULL,
  prevConsentTimestamp = NULL,
  visitorId
}) => {
  const [ctx] = useManageConsentState({
    prevConsent,
    prevConsentTimestamp,
    visitorId
  });
  return /* @__PURE__ */ u$1(USER_CONSENT_CONTEXT.Provider, { value: ctx, children });
};
const NODE_TYPE_TEXT = 3;
const getEmbedContainer = (containerId = "", shortcode = "") => {
  if (!containerId || !shortcode) {
    return NULL;
  }
  const container = getElementById(containerId);
  if (container) {
    return container;
  }
  const elements = _DOCUMENT_.body.querySelectorAll("*");
  for (let i2 = 0; i2 < elements.length; i2++) {
    const element = elements[i2];
    const innerHTML = element.innerHTML;
    if (!element || !element.hasChildNodes() || !isString(innerHTML)) {
      continue;
    }
    if (!includes(innerHTML, shortcode)) {
      continue;
    }
    for (let j2 = 0; j2 < element.childNodes.length; j2++) {
      const node = element.childNodes[j2];
      const parent = node.parentNode;
      const nodeValue = node.nodeValue;
      if (node.nodeType !== NODE_TYPE_TEXT || !nodeValue || !parent) {
        continue;
      }
      if (!includes(nodeValue, shortcode)) {
        continue;
      }
      parent.innerHTML = parent.innerHTML.replace(shortcode, '<div id="'.concat(containerId, '"></div>'));
      return getEmbedContainer(containerId, shortcode);
    }
  }
  return NULL;
};
const useEmbedContainer = (containerId = "", shortcode = "") => {
  const url = useUrl();
  const [renderId, setRenderId] = h(randomString());
  y(() => {
    const handler = () => setRenderId(randomString());
    addEventListener(_WINDOW_, EVENT_NAME$7, handler);
    return () => removeEventListener(_WINDOW_, EVENT_NAME$7, handler);
  }, []);
  const container = T(() => {
    return getEmbedContainer(containerId, shortcode);
  }, [containerId, shortcode, url, renderId]);
  return container;
};
const CookiesAndPolicyEmbeds = createAsyncComponent(
  () => __vitePreload(() => import(
    /* webpackChunkName: "embeds"*/
    "./static-main/D_m5Om.js"
  ), true ? __vite__mapDeps([11,3,4,5,6]) : void 0, import.meta.url)
);
const POLICY_CONTAINER_ID = "".concat(EMBED_ELEMENTS_PREFIX, "-policy-page");
const POLICY_SHORTCODE = "[".concat(GENERIC_PREFIX, "_declaration]");
const POLICY_WITH_LIST_CONTAINER_ID = "".concat(EMBED_ELEMENTS_PREFIX, "-policy-cookie-list");
const POLICY_WITH_LIST_SHORTCODE = "[".concat(GENERIC_PREFIX, "_policy_cookie_list]");
const COOKIES_TABLE_CONTAINER_ID = "".concat(EMBED_ELEMENTS_PREFIX, "-cookies-table");
const COOKIES_TABLE_SHORTCODE = "[".concat(GENERIC_PREFIX, "_cookies_table]");
const COOKIES_LIST_CONTAINER_ID = "".concat(EMBED_ELEMENTS_PREFIX, "-cookies-list");
const COOKIES_LIST_SHORTCODE = "[".concat(GENERIC_PREFIX, "_cookies_list]");
const EmbedsManager = () => {
  const containers = [
    useEmbedContainer(POLICY_CONTAINER_ID, POLICY_SHORTCODE),
    useEmbedContainer(
      POLICY_WITH_LIST_CONTAINER_ID,
      POLICY_WITH_LIST_SHORTCODE
    ),
    useEmbedContainer(COOKIES_TABLE_CONTAINER_ID, COOKIES_TABLE_SHORTCODE),
    useEmbedContainer(COOKIES_LIST_CONTAINER_ID, COOKIES_LIST_SHORTCODE)
  ];
  if (containers.filter(Boolean).length === 0) {
    return NULL;
  }
  return /* @__PURE__ */ u$1(CookiesAndPolicyEmbeds, { containers });
};
const useTCFDynamicImport = (widgetConfig) => {
  const [TCFImportResult, setTCFImportResult] = h({});
  y(() => {
    if (widgetConfig.tcfEnabled) {
      __vitePreload(() => import("./static-main/fnnzYT.js"), true ? __vite__mapDeps([12,7,4,5,8,1,13]) : void 0, import.meta.url).then((result) => {
        setTCFImportResult(() => result);
      });
    }
  }, [widgetConfig.tcfEnabled]);
  return TCFImportResult;
};
const ConditionalWrapper = ({
  condition,
  wrapper: WrapperComponent,
  children,
  wrapperProps
}) => {
  if (condition) {
    return WrapperComponent && /* @__PURE__ */ u$1(WrapperComponent, { ...wrapperProps, children });
  }
  return /* @__PURE__ */ u$1(k$1, { children });
};
const CookieFirstApp = ({
  settings
}) => {
  const { apiKey } = integrationSettings;
  const { prevConsent, visitorId, prevConsentTimestamp, ...config } = settings;
  if (!settings || !apiKey) {
    throw new Error(MISSING_API_KEY);
  }
  const widgetConfig = config.widgetConfig;
  const { TCFApi, TCFUserConsentProvider, PublicApiTCF } = useTCFDynamicImport(widgetConfig);
  return /* @__PURE__ */ u$1(AppStateProvider, { config, children: /* @__PURE__ */ u$1(TranslationsProvider, { children: /* @__PURE__ */ u$1(
    UserConsentProvider,
    {
      prevConsentTimestamp,
      prevConsent,
      visitorId,
      ...config,
      children: /* @__PURE__ */ u$1(
        ConditionalWrapper,
        {
          condition: widgetConfig.tcfEnabled,
          wrapper: TCFUserConsentProvider,
          wrapperProps: {
            vendorsList: widgetConfig.tcfVendors,
            gatpList: widgetConfig.acVendors,
            tcfCountry: widgetConfig.tcfCountry,
            prevConsent: config.tcfPrevConsent,
            prevConsentTimestamp: config.tcfPrevConsentTimestamp,
            widgetConfig
          },
          children: /* @__PURE__ */ u$1(k$1, { children: [
            TCFApi && widgetConfig.tcfEnabled ? /* @__PURE__ */ u$1(TCFApi, {}) : /* @__PURE__ */ u$1(k$1, {}),
            /* @__PURE__ */ u$1(BannerUIManager, {}),
            /* @__PURE__ */ u$1(EmbedsManager, {}),
            widgetConfig.tcfEnabled ? PublicApiTCF && /* @__PURE__ */ u$1(PublicApiTCF, {}) : /* @__PURE__ */ u$1(PublicApi, {}),
            /* @__PURE__ */ u$1(ContentLoader, {})
          ] })
        }
      )
    }
  ) }) });
};
const app = (settings) => {
  const body = _DOCUMENT_.body;
  if (!body) {
    setTimeout(() => app(settings), 1);
    return;
  }
  if (settings.widgetConfig.focusBannerFirst) {
    const container = _DOCUMENT_.createElement("div");
    container.setAttribute("data-cookie-banner", "root");
    container.style.position = "absolute";
    container.style.top = "0";
    container.style.left = "0";
    body.insertBefore(container, body.firstChild);
    D$1(/* @__PURE__ */ u$1(CookieFirstApp, { settings }), container);
  } else {
    D$1(/* @__PURE__ */ u$1(CookieFirstApp, { settings }), body);
  }
};
const INIT_TIME_CONST_KEY = "__COOKIE_BANNER_INIT_TIME__";
const main = () => {
  window[INIT_TIME_CONST_KEY] = Date.now();
  coreLogger("start");
  init().then((settings) => {
    app(settings);
  });
};
main();
export {
  TCF_CONSENT_STATE_ACTION_TOGGLE_GATP_VENDOR as $,
  APP_VERSION as A,
  getStaticFileUrl as B,
  coreLogger as C,
  getJson as D,
  EMBED_ELEMENTS_PREFIX as E,
  FALSE as F,
  GVL as G,
  useAppState as H,
  h as I,
  y as J,
  integrationSettings as K,
  A as L,
  MISSING_IAB_LIB_NAME as M,
  NULL as N,
  NUMBER_1 as O,
  useTCFDynamicImport as P,
  IAB_PURPOSES as Q,
  TCF_PURPOSES_DISABLED_LEGITIMATE_INTEREST as R,
  LTR as S,
  TCFdeleteLocalTCString as T,
  UNDEFINED as U,
  calculateTCFBaseConsent as V,
  useUserConsent as W,
  loadLocalConsent as X,
  deleteLocalConsent as Y,
  TCF_CONSENT_STATE_ACTION_SET_CONSENT as Z,
  _WINDOW_ as _,
  __vite_legacy_guard,
  createWidgetConfig as a,
  VendorTypes as a$,
  TCF_CONSENT_STATE_ACTION_DENY as a0,
  TCF_CONSENT_STATE_ACTION_LOG_TO_API as a1,
  TCF_CONSENT_STATE_ACTION_ACCEPT_ALL_LEGITIMATE_INTEREST as a2,
  TCFCategoryTypes as a3,
  TCF_CONSENT_STATE_ACTION_ACCEPT_ALL as a4,
  TCF_CONSENT_STATE_ACTION_CONSENT_SAVE_FINISHED as a5,
  TCF_CONSENT_STATE_ACTION_START_CONSENT_SAVE as a6,
  getTimestamp as a7,
  TCF_CONSENT_STATE_ACTION_TOGGLE_CATEGORY_LEGITIMATE_INTEREST as a8,
  TCF_CONSENT_STATE_ACTION_TOGGLE_CATEGORY as a9,
  CONTINUE_BTN_STYLE_X_BTN_SECONDARY as aA,
  CONTINUE_BTN_STYLE_X_ONLY as aB,
  CONTINUE_BTN_STYLE_LINK as aC,
  CONTINUE_BTN_STYLE_BUTTON_PRIMARY as aD,
  CONTINUE_BTN_STYLE_BUTTON_SECONDARY as aE,
  q as aF,
  addEventListener as aG,
  removeEventListener as aH,
  stopEvent as aI,
  CONTINUE_BTN_STYLE_DISABLED as aJ,
  ConsentTab as aK,
  NECESSARY as aL,
  WIDGET_ATTR as aM,
  BANNER_WIDGET_LOCATION_BOTTOM as aN,
  BOX_WIDGET_LOCATION_BOTTOM_LEFT as aO,
  UNKNOWN_BANNER_TYPE as aP,
  WidgetLocations as aQ,
  WIDGET_TYPE_BOX as aR,
  _ as aS,
  BOX_WIDGET_LOCATION_BOTTOM_RIGHT as aT,
  BOX_WIDGET_LOCATION_TOP_RIGHT as aU,
  BOX_WIDGET_LOCATION_TOP_LEFT as aV,
  _DOCUMENT_ as aW,
  CONSENT_POLICY_GRANULAR_OPTIN as aX,
  ADVERTISING as aY,
  randomString as aZ,
  g as a_,
  TCF_CONSENT_STATE_ACTION_TOGGLE_VENDOR_LEGITIMATE_INTEREST as aa,
  TCF_CONSENT_STATE_ACTION_TOGGLE_VENDOR as ab,
  logUserConsent as ac,
  p as ad,
  shouldUseFullConsent as ae,
  createCookieFirstPublicApiInstance as af,
  NEW_CONSENT_INVALID_TYPE as ag,
  MISSING_GATP as ah,
  MISSING_GVL as ai,
  LOGS_PREFIX as aj,
  WRONG_TCF_MULTI_CATEGORY_DATA as ak,
  WRONG_TCF_SINGLE_CATEGORY_DATA as al,
  dispatchJSEvent as am,
  JS_API_OBJECT_NAME as an,
  dispatchAppInitializedEvent as ao,
  dispatchConsentEvent as ap,
  fetchSiteCookies as aq,
  YEAR_IN_SECONDS as ar,
  saveLocalStorageItem as as,
  TCSTRING_COOKIE as at,
  saveLocalCookie as au,
  WIDGET_TYPE_BANNER as av,
  ACTION_ATTR as aw,
  T as ax,
  includes as ay,
  CONTINUE_BTN_STYLE_X_BTN as az,
  consentLogger as b,
  TCF_AVAILABLE_FILTERS as b0,
  CONSENT_TYPE_CATEGORY as b1,
  PANEL_DATA_TAB as b2,
  PANEL_POLICY_TAB as b3,
  PANEL_COOKIES_TAB as b4,
  PANEL_SETTINGS_TAB as b5,
  createElement as b6,
  fetchWrapper as b7,
  trim as b8,
  useShouldShowBanner as b9,
  D$1 as ba,
  UNCLASSIFIED as bb,
  isFunction as bc,
  categories as bd,
  BUTTON_ATTR as be,
  CORNER_STYLE_ATTR as bf,
  J as bg,
  x as bh,
  CONTEXT_OUTSIDE_PROVIDER as bi,
  ACCENT_COLOR_ATTR as bj,
  OUTLINE_ACCENT_COLOR_ATTR as bk,
  BG_COLOR_ATTR as bl,
  createPromise as c,
  isObject as d,
  isString as e,
  u$1 as f,
  TCModel as g,
  hasConsentExpired as h,
  isArray as i,
  TCF_CMP_ID as j,
  k$1 as k,
  loadLocalTCFConsent as l,
  TCF_CONSENT_SCREEN as m,
  TRUE as n,
  TCF_VENDOR_CATEGORIES_TYPES as o,
  MISSING_IAB_LIB_LEGINT_NAME as p,
  TCString as q,
  report as r,
  shouldResetConsent as s,
  TCFEventStatus as t,
  useTranslation as u,
  TCF_AC_STRING_VERSION as v,
  EVENTS_PREFIX as w,
  NUMBER_0 as x,
  TCF_POLICY_VERSION as y,
  TCF_SUPPORTED_API_VERSION as z
};
//# sourceMappingURL=consentBanner.js.map
