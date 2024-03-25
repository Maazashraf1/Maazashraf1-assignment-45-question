//meaking a function
function make_shirt(
    size: string = "large",
message: string = "I love programing"
) {
    console.log(
        `\ncreating a "${size}" t-shirt with the message "${message}"printed on it.`
        );
}
//calling function withby difault-value
make_shirt();

//calling function with new size & by-default values;
make_shirt("medium");

//calling function with new values
make_shirt("small","Hello world");
