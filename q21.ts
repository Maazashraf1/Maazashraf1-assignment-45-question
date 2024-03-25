interface item {
    name: string
    price: number
}
var fruits: item = {
    name: "mango",
    price: 250
}
var book: item = {
    name: "computer science",
    price: 300
}
console.log(`fruits: ${fruits.name}, price: ${fruits.price}`);
console.log(`book: ${book.name}, price: ${book.price}`);
