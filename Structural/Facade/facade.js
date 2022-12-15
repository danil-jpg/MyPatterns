// Фасад — это структурный паттерн проектирования, который предоставляет простой интерфейс к сложной системе классов, библиотеке или фреймворку.
var GoogleFontsAPI = /** @class */ (function () {
    function GoogleFontsAPI() {
    }
    GoogleFontsAPI.prototype.helvetica = function () {
        return "This is helvetica font and its loaded|";
    };
    GoogleFontsAPI.prototype.timesNewRoman = function () {
        return "This is time new roman font and its loaded|";
    };
    GoogleFontsAPI.prototype.orbicle = function () {
        return "This is orbicle font and its loaded|";
    };
    return GoogleFontsAPI;
}());
var TextLoaderAPI = /** @class */ (function () {
    function TextLoaderAPI() {
    }
    TextLoaderAPI.prototype.greetingTextUser = function (font) {
        return "".concat(font, " Greetings,user!");
    };
    TextLoaderAPI.prototype.greetingTextAdmin = function (font) {
        return "".concat(font, " Greetings,admin!");
    };
    TextLoaderAPI.prototype.greetingTextWorker = function (font) {
        return "".concat(font, " Greetings,worker!");
    };
    return TextLoaderAPI;
}());
var Facade = /** @class */ (function () {
    function Facade() {
    }
    Facade.prototype.greetUser = function () {
        var fontForUser = new GoogleFontsAPI().helvetica();
        var textForUser = new TextLoaderAPI().greetingTextUser(fontForUser);
        return textForUser;
    };
    Facade.prototype.greetWorker = function () {
        var fontForWorker = new GoogleFontsAPI().timesNewRoman();
        var textForWorker = new TextLoaderAPI().greetingTextWorker(fontForWorker);
        return textForWorker;
    };
    Facade.prototype.greetAdmin = function () {
        var fontForAdmin = new GoogleFontsAPI().orbicle();
        var textForAdmin = new TextLoaderAPI().greetingTextAdmin(fontForAdmin);
        return textForAdmin;
    };
    return Facade;
}());
var facade1 = new Facade();
var greetUser = facade1.greetUser();
var greetAdmin = facade1.greetAdmin();
var greetWorker = facade1.greetWorker();
console.log(greetUser);
console.log("-");
console.log(greetAdmin);
console.log("-");
console.log(greetWorker);
