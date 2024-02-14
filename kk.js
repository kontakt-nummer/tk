"use strict";
var _extends = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e },
    _createClass = function() {
        function r(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(e, t, n) { return t && r(e.prototype, t), n && r(e, n), e } }();

function _classCallCheck(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
var ChatUrlHandler = function() {
    function t(e) { _classCallCheck(this, t), this.options = { chatLinkId: "" }, _extends(this.options, e) } return _createClass(t, [{ key: "_onChatMouseOver", value: function() { this._removeMouseOverListener, prepareChatUrl() } }, { key: "_removeMouseOverListener", value: function() { document.getElementById(this.options.chatLinkId).removeEventListener("mouseover", !1) } }, { key: "addMouseOverListener", value: function() { var e = document.getElementById(this.options.chatLinkId);
            e && e.addEventListener("mouseover", this._onChatMouseOver) } }]), t }();