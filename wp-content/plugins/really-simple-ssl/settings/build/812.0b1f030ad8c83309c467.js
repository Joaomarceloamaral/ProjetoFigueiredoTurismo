"use strict";(self.webpackChunkreally_simple_ssl=self.webpackChunkreally_simple_ssl||[]).push([[812],{2812:function(e,n,t){t.r(n),t.d(n,{MuiThemeProvider:function(){return G},ServerStyleSheets:function(){return j},StylesProvider:function(){return C.ZP},ThemeProvider:function(){return G},alpha:function(){return r.Fq},createGenerateClassName:function(){return H.Z},createMuiTheme:function(){return i.A},createStyles:function(){return a},createTheme:function(){return i.Z},darken:function(){return r._j},decomposeColor:function(){return r.tB},duration:function(){return w.x9},easing:function(){return w.Ui},emphasize:function(){return r._4},fade:function(){return r.U1},getContrastRatio:function(){return r.mi},getLuminance:function(){return r.H3},hexToRgb:function(){return r.oo},hslToRgb:function(){return r.ve},jssPreset:function(){return L.Z},lighten:function(){return r.$n},makeStyles:function(){return f},recomposeColor:function(){return r.wy},responsiveFontSizes:function(){return Z},rgbToHex:function(){return r.vq},styled:function(){return x},unstable_createMuiStrictModeTheme:function(){return u},useTheme:function(){return F.Z},withStyles:function(){return P.Z},withTheme:function(){return z}});var r=t(9693),i=t(2920),o=t(5953);function u(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return i.Z.apply(void 0,[(0,o.Z)({unstable_strictMode:!0},e)].concat(t))}function a(e){return e}var s=t(7462),c=t(3914),l=t(9700),f=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,c.Z)(e,(0,s.Z)({defaultTheme:l.Z},n))},h=t(288),m=t(4942);function v(e){return String(parseFloat(e)).length===String(e).length}function p(e){return parseFloat(e)}function d(e){var n=e.lineHeight;return e.pixels/(n*e.htmlFontSize)}function Z(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.breakpoints,r=void 0===t?["sm","md","lg"]:t,i=n.disableAlign,o=void 0!==i&&i,u=n.factor,a=void 0===u?2:u,c=n.variants,l=void 0===c?["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline"]:c,f=(0,s.Z)({},e);f.typography=(0,s.Z)({},f.typography);var Z,y=f.typography,g=(Z=y.htmlFontSize,function(e,n){var t=String(e).match(/[\d.\-+]*\s*(.*)/)[1]||"";if(t===n)return e;var r=p(e);if("px"!==t)if("em"===t)r=p(e)*p(Z);else if("rem"===t)return r=p(e)*p(Z),e;var i=r;if("px"!==n)if("em"===n)i=r/p(Z);else{if("rem"!==n)return e;i=r/p(Z)}return parseFloat(i.toFixed(5))+n}),S=r.map((function(e){return f.breakpoints.values[e]}));return l.forEach((function(e){var n=y[e],t=parseFloat(g(n.fontSize,"rem"));if(!(t<=1)){var r=t,i=1+(r-1)/a,u=n.lineHeight;if(!v(u)&&!o)throw new Error((0,h.Z)(6));v(u)||(u=parseFloat(g(u,"rem"))/parseFloat(t));var c=null;o||(c=function(e){return(t=(n={size:e,grid:d({pixels:4,lineHeight:u,htmlFontSize:y.htmlFontSize})}).size)-(i=t-t%(r=n.grid))<(o=i+r)-t?i:o;var n,t,r,i,o}),y[e]=(0,s.Z)({},n,function(e){var n=e.cssProperty,t=e.min,r=e.max,i=e.unit,o=void 0===i?"rem":i,u=e.breakpoints,a=void 0===u?[600,960,1280]:u,s=e.transform,c=void 0===s?null:s,l=(0,m.Z)({},n,"".concat(t).concat(o)),f=(r-t)/a[a.length-1];return a.forEach((function(e){var r=t+f*e;null!==c&&(r=c(r)),l["@media (min-width:".concat(e,"px)")]=(0,m.Z)({},n,"".concat(Math.round(1e4*r)/1e4).concat(o))})),l}({cssProperty:"fontSize",min:i,max:r,unit:"rem",breakpoints:S,transform:c}))}})),f}var y=t(5987),g=t(9196),S=t.n(g),b=t(6010),T=t(8679),k=t.n(T);var x=function(e){var n=function(e){return function(n){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=r.name,o=(0,y.Z)(r,["name"]),u=i,a="function"==typeof n?function(e){return{root:function(t){return n((0,s.Z)({theme:e},t))}}}:{root:n},l=(0,c.Z)(a,(0,s.Z)({Component:e,name:i||e.displayName,classNamePrefix:u},o));n.filterProps&&(t=n.filterProps,delete n.filterProps),n.propTypes&&(n.propTypes,delete n.propTypes);var f=S().forwardRef((function(n,r){var i,o,u,a=n.children,c=n.className,f=n.clone,h=n.component,m=(0,y.Z)(n,["children","className","clone","component"]),v=l(n),p=(0,b.Z)(v.root,c),d=m;if(t&&(i=d,o=t,u={},Object.keys(i).forEach((function(e){-1===o.indexOf(e)&&(u[e]=i[e])})),d=u),f)return S().cloneElement(a,(0,s.Z)({className:(0,b.Z)(a.props.className,p)},d));if("function"==typeof a)return a((0,s.Z)({className:p},d));var Z=h||e;return S().createElement(Z,(0,s.Z)({ref:r,className:p},d),a)}));return k()(f,e),f}}(e);return function(e,t){return n(e,(0,s.Z)({defaultTheme:l.Z},t))}},w=t(3291),F=t(8920),P=t(4670),E=t(159);function R(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).defaultTheme;return function(n){var t=S().forwardRef((function(t,r){var i=t.innerRef,o=(0,y.Z)(t,["innerRef"]),u=(0,E.Z)()||e;return S().createElement(n,(0,s.Z)({theme:u,ref:i||r},o))}));return k()(t,n),t}}R();var z=R({defaultTheme:l.Z}),M=t(5671),N=t(3144),_=t(4013),C=t(6975),H=t(5034),j=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,M.Z)(this,e),this.options=n}return(0,N.Z)(e,[{key:"collect",value:function(e){var n=new Map;this.sheetsRegistry=new _.xE;var t=(0,H.Z)();return S().createElement(C.ZP,(0,s.Z)({sheetsManager:n,serverGenerateClassName:t,sheetsRegistry:this.sheetsRegistry},this.options),e)}},{key:"toString",value:function(){return this.sheetsRegistry?this.sheetsRegistry.toString():""}},{key:"getStyleElement",value:function(e){return S().createElement("style",(0,s.Z)({id:"jss-server-side",key:"jss-server-side",dangerouslySetInnerHTML:{__html:this.toString()}},e))}}]),e}(),A=t(3800),q=t(7076),G=function(e){var n=e.children,t=e.theme,r=(0,E.Z)(),i=S().useMemo((function(){var e=null===r?t:function(e,n){return"function"==typeof n?n(e):(0,s.Z)({},e,n)}(r,t);return null!=e&&(e[q.Z]=null!==r),e}),[t,r]);return S().createElement(A.Z.Provider,{value:i},n)},L=t(246)}}]);