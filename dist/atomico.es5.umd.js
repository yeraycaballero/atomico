!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(t.atomico={})}(this,function(t){"use strict";var e="Atomico";function n(t){return Promise.resolve().then(t)}function o(t){return t.shadowRoot||t}function r(t,e){o(t).removeChild(e)}function i(t,e){o(t).appendChild(e)}function s(t,e,n){o(t).replaceChild(e,n)}function c(t,e,n){this.tag=t,this.props=e||{},this.children=n||[]}function p(t){return null!==t&&"object"==typeof t&&11!==t.nodeType}function a(t,e){void 0===e&&(e=[]);for(var n=0;n<t.length;n++){var o=t[n];Array.isArray(o)?a(o,e):e.push("object"==typeof(r=o)&&r instanceof c?o:p(o)?new c(o,{},""):new c("",{},o||""))}var r;return e}function u(t,e,n,o,r){for(var i=Object.keys(e).concat(Object.keys(n)),s=0;s<i.length;s++){var c=i[s];if(e[c]!==n[c]){if(r&&t._props.indexOf(c)>-1){r[c]=n[c];continue}if("function"==typeof n[c]||"function"==typeof e[c])e[c]&&t.removeEventListener(c,e[c]),t.addEventListener(c,n[c]);else if(c in n)if(c in t&&!o||o&&"style"===c)if("style"===c)if("object"==typeof n[c])for(var p in n[c])t.style[p]=n[c][p];else t.style.cssText=n[c];else t[c]=n[c];else{if(o&&"xmlns"===c)continue;o?t.setAttributeNS(null,c,n[c]):t.setAttribute(c,n[c])}else t.removeAttribute(c)}}r&&t.setProps(r)}function f(t,e){return"slot"===t.tag&&(t.tag=e.slots[t.props.name]||""),t}var l=function(t){function l(){t.call(this),this[e]=!0,this.state={},this.slots={},this.props={},this.fragment=document.createDocumentFragment(),this._props=this.constructor.props||[],this._render=[],this._mount,this._prevent}t&&(l.__proto__=t),l.prototype=Object.create(t&&t.prototype),l.prototype.constructor=l;var h={observedAttributes:{configurable:!0}};return h.observedAttributes.get=function(){return["children"].concat(this.props||[])},l.prototype.setAttribute=function(e,n){var o;this._props.indexOf(e)>-1?this.setProps(((o={})[e]=n,o)):t.prototype.setAttribute.call(this,e,n)},l.prototype.connectedCallback=function(){var t=this;n(function(){for(var e=t.props.children||[];t.firstChild;){var n=t.firstChild,o=n.getAttribute&&n.getAttribute("slot");o&&(t.slots[o]=n),i(t.fragment,n),e.push(n)}t.setProps({children:e}),t.setState({},function(){t._mount=!0,t.elementMount()})})},l.prototype.disconnectedCallback=function(){this.elementUnmount()},l.prototype.setProps=function(t){var e={},n=this._mount;for(var o in t){var r=o.replace(/-+([\w])/g,function(t,e){return e.toUpperCase()});t[o]!==this.props[r]&&(e[r]=t[o])}Object.keys(e).length&&(n&&(n=this.elementReceiveProps(e)),this.props=Object.assign({},this.props,e),!1!==n&&this._mount&&this.setState({}))},l.prototype.attributeChangedCallback=function(t,e,n){var o;e!==n&&this.setProps(((o={})[t]=n,o))},l.prototype.dispatch=function(t,e){this.dispatchEvent(new CustomEvent(t,{cancelable:!0,detail:e}))},l.prototype.setState=function(t,l){var h=this;t&&(this.state=Object.assign({},this.state,t),this._prevent||(this._prevent=!0,n(function(){var t=a([h.render()]);!function t(n,o,a,l,h){void 0===l&&(l=n);for(var d=n.childNodes||[],v=Math.max(o.length,a.length),m=0;m<v;m++){var y=d[m],g=y&&o[m]?o[m]:new c,b=a[m];if(b){b=f(b,l),g=f(g,l);var _=y,C=p(b.tag);if(h=h||"svg"===b.tag,g.tag!==b.tag)if(C)_=b.tag,y?s(n,_,y):i(n,_);else if(b.tag)if(_=h?document.createElementNS("http://www.w3.org/2000/svg",b.tag):document.createElement(b.tag),y){if(s(n,_,y),!_[e])for(;y.firstChild;)i(_,y.firstChild)}else i(n,_);else _=document.createTextNode(""),g.tag?s(n,_,y):i(n,_);C||"#text"!==_.nodeName?(u(_,g.props,b.props,h,_[e]&&{children:b.children.map(function(t){return t.tag?t:t.children})}),C||!_||_[e]||t(_,g.children,b.children,l,h)):g.children!==b.children&&(_.textContent=b.children)}else y&&r(n,y)}}(o(h),h._render,t),h._render=t,h._prevent=!1,l?l():h.elementUpdate()})))},l.prototype.elementMount=function(){},l.prototype.elementUpdate=function(){},l.prototype.elementUnmount=function(){},l.prototype.elementReceiveProps=function(){},l.prototype.render=function(){},Object.defineProperties(l,h),l}(HTMLElement);t.h=function(t,e){for(var n=[],o=arguments.length-2;o-- >0;)n[o]=arguments[o+2];return new c(t,e,a(n))},t.Element=l,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=atomico.es5.umd.js.map
