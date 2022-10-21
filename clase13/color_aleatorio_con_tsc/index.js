var ColorClass = /** @class */ (function () {
    function ColorClass() {
        var _this = this;
        this.randomColor = function () { return Math.floor(Math.random() * 255); };
        this.generateColor = function () {
            return "rgb(".concat(_this.randomColor(), ", ").concat(_this.randomColor(), ", ").concat(_this.randomColor(), ")");
        };
    }
    return ColorClass;
}());
console.log(new ColorClass().generateColor());
