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
show_megicians(megicians);
//add function to modifies array
function make_great(megicians) {
    for (var i = 0; i < megicians.length; i++) {
        megicians[i] = megicians[i] + " " + "The Great";
    }
}
make_great(megicians);
show_megicians(megicians);
