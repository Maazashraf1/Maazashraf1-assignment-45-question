var guestList = ["rehan", "arsalan", "shayan"];
var dinnerInvitation = "you are invited today dinner at our home";
//can not attend
var cannotAttend = "huzaifa";
console.log("".concat(cannotAttend, ",is not coming for dinner"));
//guest replace
var newGuest = "shayan";
guestList[guestList.indexOf(cannotAttend)] = newGuest;
//update message
guestList.map(function (item) { return console.log("Dear ".concat(item, ",").concat(dinnerInvitation)); });
