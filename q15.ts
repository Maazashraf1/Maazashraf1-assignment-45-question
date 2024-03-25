let guestList: string[] = ["rehan","arsalan","shayan"];
let dinnerInvitation: string = "you are invited today dinner at our home";
//can not attend
let cannotAttend: string = "huzaifa"
console.log(`${cannotAttend},is not coming for dinner`);
//guest replace
let newGuest: string = "shayan";
guestList[guestList.indexOf(cannotAttend)]=newGuest;
//update message
guestList.map((item)=>console.log(`Dear ${item},${dinnerInvitation}`));