var current_users = ["admin", "user1", "user2", "user3", "user4"];
var new_users = ["admin", "user3", "user5", "user6", "user7"];
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    if (current_users_lower.includes(new_user.toLocaleLowerCase())) {
        console.log("Sorry ".concat(new_user, ",that name is taken."));
    }
    else {
        console.log("Yeah ".concat(new_user, ",is still in list."));
    }
}
