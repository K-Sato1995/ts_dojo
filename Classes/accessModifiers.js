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
var Pet = /** @class */ (function () {
    function Pet(type, name, age) {
        this.type = type;
        this.name = name;
        this.age = age;
    }
    Pet.prototype.lick = function () {
        console.log("Lick Lick Lick");
    };
    return Pet;
}());
var taro = new Pet("mammal", "Taro", 50);
console.log(taro.type); //=> mammal
taro.type = "reptile";
console.log(taro.type); //=> reptile
var SpecialPet = /** @class */ (function (_super) {
    __extends(SpecialPet, _super);
    function SpecialPet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpecialPet.prototype.roar = function () {
        console.log(this.name + "!!!!!!!!!"); //=> Property 'name' is private and only accessible within class 'Pet'
    };
    return SpecialPet;
}(Pet));
var goro = new SpecialPet("mammal", "Goro", 50);
goro.roar(); //=> "Goro!!!!!!!!!"
