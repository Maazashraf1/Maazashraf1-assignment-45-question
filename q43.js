var megicians = [
    "Alice",
    "David",
    "Chris",
];
function show_megicians(megicians) {
    megicians.forEach(function (megicians) {
        console.log(megicians);
    });
}
function make_great(megicians) {
    var greatmegicians = [];
    megicians.forEach(function (megicians) {
        greatmegicians.push("".concat(megicians, " The Great"));
    });
    return greatmegicians;
}
var greatmegicians = make_great(megicians.slice());
console.log("Original megicians:");
show_megicians(megicians);
console.log("\nGreat megicians:");
show_megicians(megicians);
