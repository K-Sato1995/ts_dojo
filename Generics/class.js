var Klass = /** @class */ (function () {
    function Klass(item) {
        this.item = item;
    }
    Klass.prototype.getItem = function () {
        return this.item;
    };
    return Klass;
}());
var strObj = new Klass("文字列１");
strObj.getItem(); //=> "文字列１"
var numObj = new Klass(5);
strObj.getItem(); //=> 5
