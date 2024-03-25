//meaking a function
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love programing"; }
    console.log("\ncreating a \"".concat(size, "\" t-shirt with the message \"").concat(message, "\"printed on it."));
}
//calling function withby difault-value
make_shirt();
//calling function with new size & by-default values;
make_shirt("medium");
//calling function with new values
make_shirt("small", "Hello world");
