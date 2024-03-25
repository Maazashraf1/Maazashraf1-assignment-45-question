var animal = ["cat", "dog", "rabbit"];
//using for loop
for (var _i = 0, animal_1 = animal; _i < animal_1.length; _i++) {
    var OnePet = animal_1[_i];
    console.log("A".concat(OnePet, " would make a great pet,"));
}
//print a message outside of for-loop
console.log("any of these animals would make a great pet,");
