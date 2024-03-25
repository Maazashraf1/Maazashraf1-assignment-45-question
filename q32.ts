let current_users: string[] = ["admin","user1","user2","user3","user4"];
let new_users: string[] = ["admin","user3","user5","user6","user7"];

let current_users_lower:string[] = current_users.map(user=> user.toLowerCase());

for (let new_user of new_users){
    if (current_users_lower.includes (new_user.toLocaleLowerCase())){
        console.log(`Sorry ${new_user},that name is taken.`)
    } else {
        console.log(`Yeah ${new_user},is still in list.`)
    }
}















let current_useres: string[] = ["admin","user1","user2","user3","user4"];
let new_useres: string[] = ["admin","user3","user5","user6","user7"];

new_useres.forEach(newUsere => {
    if (current_useres.some(currentUser => currentUser.toLocaleLowerCase()===
    newUsere.toLocaleLowerCase())) {
        console.log(`${newUsere} will need to enter a new username.`);
    } else {
        console.log(`${newUsere} is available`);
    }
})