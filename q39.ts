//making function 
function city_country(city: string, country: string): string{
    return (`${city}, ${country}`)
}
//calling function with adding value
let city1 = city_country("Karachi","Pakistan");
console.log(city1)
let city2 = city_country("Istanbul","Turkey");
console.log(city2)
let city3 = city_country("Sharjah","Dubai");
console.log(city3)
let city4 = city_country("Tokyo","Japan");
console.log(city4);
