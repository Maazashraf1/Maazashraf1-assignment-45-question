let guestList: string[] = ["arsalan","rehan","ahmed"];
console.log("Great News! I found a bigger dinner table!");

//Adding more guest
guestList.unshift("huzaifa");
guestList.splice(guestList.length / 2, 0,"haris");
guestList.push("saad");

//send message
guestList.forEach(guest => {
    console.log(`"Dear" ${guest},would you like to join me for dinner?`);
});