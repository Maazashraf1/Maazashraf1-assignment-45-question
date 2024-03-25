//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let userName: string = "hello would";

//in lowercase 
console.log("lowercase:", userName.toLowerCase());

//in uppercase 
console.log("uppercase:", userName.toUpperCase());

//titlecase 

console.log("titlecase:", userName.replace(/\b\w/g,c=> c.toUpperCase()));