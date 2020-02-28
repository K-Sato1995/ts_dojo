// When we use the static keyword on properties we define on a class, they belong to the class itself.
var Klass = /** @class */ (function () {
    function Klass() {
    }
    Klass.hoge = "文字列";
    return Klass;
}());
console.log(Klass.hoge);
