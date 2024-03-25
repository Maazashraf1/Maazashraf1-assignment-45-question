//making a function
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
//calling function with city names & by-default country 
describe_city("Karachi");
describe_city("Islamabad");
describe_city("Lahore");
//calling function with city names & country name 
describe_city("tokyo", "japan");
