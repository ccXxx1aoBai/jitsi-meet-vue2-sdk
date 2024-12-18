/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/jitsi-meeting/src/main.vue?vue&type=template&id=1ec87963&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.loading || !_vm.apiRef ? _vm._t("spinner") : _vm._e(), _c('div', {
    key: _vm.componentId,
    ref: "meetingRef",
    attrs: {
      "id": _vm.componentId
    }
  })], 2);
};
var staticRenderFns = [];

;// ./src/constants/index.js
const DEFAULT_DOMAIN = "meet.jit.si";
;// ./src/utils/index.js
/**
 * Returns the complete room name
 *
 * @param {string} roomName
 * @param {string|undefined} tenant
 * @returns {string} the complete room name
 */
const getRoomName = (roomName, tenant) => {
  if (tenant) {
    return `${tenant}/${roomName}`;
  }
  return roomName;
};
let instancesCounter = 0;
/**
 * Generates a unique id
 * @param {string} prefix
 * @returns {string} the component id
 */
const generateComponentId = prefix => `${prefix}-${instancesCounter++}`;

const loadExternalApi = async domain => new Promise((resolve, reject) => {
  if (window.JitsiMeetExternalAPI) {
    return resolve(window.JitsiMeetExternalAPI);
  }
  const externalApiScript = document.createElement("script");
  externalApiScript.async = true;
  externalApiScript.src = `/external_api.js`;
  externalApiScript.onload = () => resolve(window.JitsiMeetExternalAPI);
  externalApiScript.onerror = () => reject(new Error(`Script load error: ${externalApiScript.src}`));
  document.head.appendChild(externalApiScript);
});
let scriptPromise;

/**
 * Injects the external_api.js script for the corresponding domain in DOM
 * and resolves with either the `JitsiMeetExternalApi` class definition or an error
 *
 * @param {string} domain - The domain of the external API
 * @returns {Promise<JitsiMeetExternalApi>} - the JitsiMeetExternalAPI or an error
 */
const fetchExternalApi = (domain = DEFAULT_DOMAIN) => {
  if (scriptPromise) {
    return scriptPromise;
  }
  scriptPromise = loadExternalApi(domain);
  return scriptPromise;
};
;// ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/jitsi-meeting/src/main.vue?vue&type=script&lang=ts



// import { JitsiMeetExternalApi, IJitsiMeetExternalApi } from '@/types';

/* harmony default export */ var mainvue_type_script_lang_ts = ({
	name: 'JitsiMeeting',
	props: {
		domain: {
			type: String,
			default: DEFAULT_DOMAIN,
		},
		roomName: {
			type: String,
			default: '',
		},
		width: {
			type: [String, Number],
			default: 600,
		},
		height: {
			type: [String, Number],
			default: 400,
		},
		configOverwrite: {
			type: Object,
			default: () => ({}),
		},
		interfaceConfigOverwrite: {
			type: Object,
			default: () => ({}),
		},
		jwt: {
			type: String,
			default: '',
		},
		invitees: {
			type: Array,
			default: () => [],
		},
		devices: {
			type: Object,
			default: () => ({}),
		},
		userInfo: {
			type: Object,
			default: () => ({}),
		},
		lang: {
			type: String,
			default: 'zhCN',
		},
	},
	data() {
		return {
			externalApi: {},
			apiLoaded: false,
			loading: false,
			apiRef: '',
		};
	},
	computed: {
		componentId() {
			return generateComponentId('jitsiMeeting');
		},
	},
	created() {},
	mounted() {
		fetchExternalApi(this.domain)
			.then(async api => {
				this.externalApi = api;
				this.apiLoaded = true;

				await this.$nextTick();
				this.loadIframe(this.externalApi);
			})
			.catch(e => console.error(e.message));
	},
	methods: {
		loadIframe(JitsiMeetExternalAPI) {
			const {
				domain,
				roomName,
				width,
				height,
				configOverwrite,
				interfaceConfigOverwrite,
				jwt,
				invitees,
				devices,
				userInfo,
				parentNode = this.$refs.meetingRef,
				lang,
			} = this;

			this.apiRef = new JitsiMeetExternalAPI(domain, {
				roomName,
				width,
				height,
				configOverwrite,
				interfaceConfigOverwrite,
				jwt,
				invitees,
				devices,
				userInfo,
				parentNode,
				lang,
			});

			this.loading = false;

			if (this.apiRef) {
				// api ready事件
				this.$emit('onApiReady', this.apiRef);

				// 用户离开会议事件
				this.apiRef.on('readyToClose', () => {
					this.$emit('onReadyToClose');
				});

				// 用户加入会议事件
				this.apiRef.on('videoConferenceJoined', e => {
          this.$emit('videoConferenceJoined');
				});

				if (this.$refs.meetingRef) {
					// 获取iframe ref
					this.$emit('getIframeRefOnApiReady', this.$refs.meetingRef);
				}
			}
		},
	},
});

;// ./packages/jitsi-meeting/src/main.vue?vue&type=script&lang=ts
 /* harmony default export */ var src_mainvue_type_script_lang_ts = (mainvue_type_script_lang_ts); 
;// ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// ./packages/jitsi-meeting/src/main.vue





/* normalize component */
;
var component = normalizeComponent(
  src_mainvue_type_script_lang_ts,
  render,
  staticRenderFns,
  false,
  null,
  "1ec87963",
  null
  
)

/* harmony default export */ var main = (component.exports);
;// ./packages/jitsi-meeting/index.js


/* istanbul ignore next */
main.install = function (Vue) {
  Vue.component(main.name, main);
};
/* harmony default export */ var jitsi_meeting = (main);
;// ./src/index.js

const install = function (Vue, opts = {}) {
  Vue.component(jitsi_meeting.name, jitsi_meeting);
};
/* harmony default export */ var src_0 = ({
  install,
  JitsiMeeting: jitsi_meeting
});
;// ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_0);


module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=jitsi-meet-vue2-sdk.common.js.map