var guestList = ["rehan", "arsalan", "shayan"];
var dinnerInvitation = "you are invited today dinner at our home";
guestList.map(function (item) { return console.log("Dear ".concat(item, ",\n").concat(dinnerInvitation)); });
