var School = /** @class */ (function () {
    function School() {
    }
    School.start = function () {
        console.log(School.startingTime + "!!!!!!!!");
    };
    School.startingTime = "9am";
    return School;
}());
School.startingTime; //=> 9am
School.start(); //=> 9am!!!!!!!!
