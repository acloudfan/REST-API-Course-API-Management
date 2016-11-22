// Demonstrates the API Managemement traffic managament capabilities
// Rate Limiting policy
// Uses the Walmart Search API which has Rate limiting set to 5 calls/second
var request = require('request')

// Please register on https://developer.walmartlabs.com to get an API key
// Substitute the key here to try out
var walmartApiKey = "PUT YOUR KEY HERE"
var walmartUrl = "http://api.walmartlabs.com/v1/search?query=ipod&format=json&apiKey="+walmartApiKey;

var numCalls = 6;
console.log("Invoking Walmart Search API ",numCalls, " times")
for(var i=0; i< numCalls ; i++){
    callWalmartAPI(i+1);
}

// Invokes the Walmart API with an ID that is printed on the console
function callWalmartAPI(id) {
    request({
        url: walmartUrl,
        method: "GET",

    }, function (error, response, body) {
        if (error) {
            var rcvd = id+": "+error
            console.log(rcvd)
        } else {
            var rcvd = id+": "+response.statusCode+"  "+response.statusMessage
            console.log(rcvd);
        }
    });
}