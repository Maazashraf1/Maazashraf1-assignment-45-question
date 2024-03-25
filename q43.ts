let megicians: string[] =[
    "Alice",
    "David",
    "Chris",
];
function show_megicians(megicians: string[]) {
    megicians.forEach((megicians) => {
        console.log(megicians);
    });
}
function make_great(megicians: string[]) {
    let greatmegicians: string[] = [];
    megicians.forEach((megicians) => {
        greatmegicians.push(`${megicians} The Great`);
    });
    return greatmegicians;
}
let greatmegicians = make_great(megicians.slice());
console.log("Original megicians:");
show_megicians(megicians);
console.log(`\nGreat megicians:`);
show_megicians(megicians);
