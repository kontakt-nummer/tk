"use strict";
var _extends = Object.assign || function(t) { for (var n = 1; n < arguments.length; n++) { var e, i = arguments[n]; for (e in i) Object.prototype.hasOwnProperty.call(i, e) && (t[e] = i[e]) } return t },
    _createClass = function() {
        function i(t, n) {
            for (var e = 0; e < n.length; e++) {
                var i = n[e];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }
        return function(t, n, e) { return n && i(t.prototype, n), e && i(t, e), t }
    }();

function _classCallCheck(t, n) { if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function") }
var ClearableHandler = function() {
    function n(t) { _classCallCheck(this, n), this.options = { inputClass: "tkapp-input--clearable", iconClass: "tkapp-input-clearable-xicon", iconVisibleClass: "xicon--is-visible" }, _extends(this.options, t), this.initListener() }
    return _createClass(n, [{
        key: "initListener",
        value: function() {
            var e = this,
                t = $("." + this.options.inputClass),
                n = "." + this.options.inputClass,
                i = "." + this.options.iconClass;
            t.each(function(t, n) { "" !== n.value && e.addRemoveClearButton(n) }), $(".layout-tk-viewport").on("blur", n, function(t) { e.addRemoveClearButton(this) }).on("focus", n, function(t) { e.addRemoveClearButton(this) }).on("click", i, function(t) { e.onClickX(this) }).on("keydown", n, function(t) { e._onPressTab(this, t) }).on("keyup", n, function(t) { e.addRemoveClearButton(this) })
        }
    }, { key: "addRemoveClearButton", value: function(t) { var n = this.fromInputToButton(t); "" !== $(t).val() ? n.hasClass(this.options.iconVisibleClass) || (n.addClass(this.options.iconVisibleClass), this._addTabindex(n)) : (n.removeClass(this.options.iconVisibleClass), this._removeTabindex(n)) } }, {
        key: "addClearButton",
        value: function(t) {
            t = this.fromInputToButton(t);
            t.hasClass(this.options.iconVisibleClass) || t.addClass(this.options.iconVisibleClass), this._addTabindex(t)
        }
    }, { key: "onClickX", value: function(t) { this.fromButtonToField(t).val("").focus() } }, {
        key: "_onPressTab",
        value: function(t, n) {
            var e = this.fromInputToButton(t);
            9 == (n.keyCode || n.which) && ($(t).is("empty") ? this._removeTabindex(e) : this._addTabindex(e))
        }
    }, { key: "fromInputToButton", value: function(t) { var n = void 0; return 1 == (n = $(t).next("button")).length || (n = $(t).parent().next("button")).length, n } }, { key: "fromButtonToField", value: function(t) { var n = void 0; return 1 == (n = $(t).prev("." + this.options.inputClass)).length || 1 == (n = $(t).prev(".tkapp-numberfield").children("." + this.options.inputClass)).length || (n = $(t).prev(".ui-autocomplete").children("." + this.options.inputClass)).length, n } }, { key: "_addTabindex", value: function(t) { $(t).attr("tabindex", "0"), $(t).attr("aria-hidden", "false") } }, { key: "_removeTabindex", value: function(t) { $(t).attr("tabindex", "-1"), $(t).attr("aria-hidden", "true") } }]), n
}();