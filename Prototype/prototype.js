// The Prototype design pattern is good for when creating new objects requires more resources than you want to use or have available.
var Robot = /** @class */ (function () {
    function Robot(height, width, color, price) {
        this.height = height;
        this.width = width;
        this.color = color;
        this.price = price;
        this.defConfig = {
            defInfo: "SomeInformation"
        };
        // this.height = height
    }
    Robot.prototype.clone = function () {
        return new Robot(this.height, this.width, this.color, this.price);
    };
    return Robot;
}());
var prototype = new Robot(150, 70, "grey", 1500);
var testVar = Object.create(prototype);
// Скопирует все,кроме
for (var i in testVar) {
    console.log(testVar[i]);
    console.log(testVar);
}
var robot1 = prototype.clone();
robot1.color = "Red";
console.log(prototype);
