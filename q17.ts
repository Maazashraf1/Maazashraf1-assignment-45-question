let guestList: string[] = ["arsalan","rehan","ahmed","huzaifa"];
console.log("Unfortunately,I can only invite two people for dinner.");

//remove guest
let removeguest: string = "ahmed";
while (guestList.length >2){
    let removeguest = guestList.pop();
    console.log(`Sorry ${removeguest},
    I can not invited to you dinner.`)
};
guestList.forEach(guestList =>{
    console.log(`Dear ${guestList},
    you are still invited to dinner.`);
});
guestList.splice(guestList.length);
console.log(guestList); // Shows an empty list