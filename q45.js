function make_car(manufacturer, model) {
    var optional = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        optional[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    optional.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return (car[key] = value);
    });
    return car;
}
console.log(make_car("Toyota", "Supra", ["Colour", "White"], ["Year", "2023"]));
console.log(make_car("Nissan", "GTR", ["Colour", "Black"], ["Sunroof", "True"]));
