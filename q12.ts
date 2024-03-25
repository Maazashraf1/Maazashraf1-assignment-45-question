//make array
let userName: string[] = ["arsalan","ahmed","shayan","rehan"];
let message: string = "would you like to learn some python today?";
//send message
for (let name of userName){
    console.log (`Hello ${name}, ${message}`);
}