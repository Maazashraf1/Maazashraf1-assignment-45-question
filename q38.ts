//making a function
function describe_city(city: string, country: string = "Pakistan"){
    console.log(`${city} is in ${country}.`);
}
//calling function with city names & by-default country 
describe_city("Karachi")
describe_city("Islamabad")
describe_city("Lahore")
//calling function with city names & country name 
describe_city("tokyo" , "japan");
