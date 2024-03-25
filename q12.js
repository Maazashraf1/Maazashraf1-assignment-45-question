//make array
var userName = ["arsalan", "ahmed", "shayan", "rehan"];
var message = "would you like to learn some python today?";
//send message
for (var _i = 0, userName_1 = userName; _i < userName_1.length; _i++) {
    var name_1 = userName_1[_i];
    console.log("Hello ".concat(name_1, ", ").concat(message));
}
;
