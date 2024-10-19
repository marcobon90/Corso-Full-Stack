var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pulsante = /** @class */ (function (_super) {
    __extends(Pulsante, _super);
    function Pulsante() {
        var _this = _super.call(this) || this;
        var shadow = _this.attachShadow({ mode: 'closed' });
        var template = document.getElementById('pulsante-template');
        var templateClonato = template.content.cloneNode(true);
        shadow.appendChild(templateClonato);
        _this.addEventListener('click', function () {
            _this.classList.toggle('giallo');
        });
        return _this;
    }
    return Pulsante;
}(HTMLElement));
customElements.define('mio-pulsante', Pulsante);
