var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.intro = function () {
        return "I'm " + this.name;
    };
    return Person;
}());
var nick = new Person("Nick");
nick.intro(); //=> I'm Nick
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(id, name) {
        var _this = _super.call(this, name) || this;
        _this.id = id;
        return _this;
    }
    User.prototype.showIdName = function () {
        console.log(this.id, this.name);
    };
    return User;
}(Person));
var user1 = new User(1, "John");
user1.intro();
user1.showIdName();
