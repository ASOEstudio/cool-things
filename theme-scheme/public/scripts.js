"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Core =
/*#__PURE__*/
function () {
  function Core() {
    _classCallCheck(this, Core);

    hour;
    hasNotSupport;
    this.init();
  }

  _createClass(Core, [{
    key: "init",
    value: function init() {
      this.hour = new Date().getHours();
      var isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var isLightMode = window.matchMedia('(prefers-color-scheme: light)').matches;
      var isNotSpecified = window.matchMedia('(prefers-color-scheme: no-preference)').matches;
      this.hasNotSupport = !isDarkMode && !isLightMode && !isNotSpecified;
      console.log('verificando a Media Query "prefers-color-scheme": é dark = ', isDarkMode, ' é light = ', isLightMode, ' não é definido ', isNotSpecified, ' não é suportado ', hasNotSupport);
      if (this.hasNotSupport || isNotSpecified) themeDesabled();
    }
  }, {
    key: "themeDesabled",
    value: function themeDesabled() {
      var element = document.getElementsByTagName('button')[0];
      element.setAttribute('disabled', 'true');
      console.log(element);
      if (this.hour < 6 || this.hour >= 12) nightMode();
    }
  }, {
    key: "themeSchemeButton",
    value: function themeSchemeButton() {
      console.log('função do botão');
      var element = document.querySelector(':root');
      element.classList.toggle('dark-mode');
      console.log(element);
    } // navegadores que não suportam classList

  }, {
    key: "nightMode",
    value: function nightMode() {
      console.log('função pelo horário');
      var element = document.getElementsByTagName('body')[0];
      element.className += ' night-mode';
      console.log(element);
    }
  }]);

  return Core;
}();