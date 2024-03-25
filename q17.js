var guestList = ["arsalan", "rehan", "ahmed", "huzaifa"];
console.log("Unfortunately,I can only invite two people for dinner.");
//remove guest
var removeguest = "ahmed";
while (guestList.length > 2) {
    var removeguest_1 = guestList.pop();
    console.log("Sorry ".concat(removeguest_1, ",\n    I can not invited to you dinner."));
}
;
guestList.forEach(function (guestList) {
    console.log("Dear ".concat(guestList, ",\n    you are still invited to dinner."));
});
guestList.splice(guestList.length);
console.log(guestList); // Shows an empty list
