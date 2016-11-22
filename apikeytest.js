

var request = require('request')


var apiKey = "bSYf2p1FIJW2sj4nAr1Gj5u90f5z1cr6";
var url = "http://acloudfan-test.apigee.net/geolocationapikey"

var numCalls = 100;
console.log("Invoking API KEY Test - Geolocation API ",numCalls, " times")
for(var i=0; i< numCalls ; i++){
    keyTest('0881'+i);
}

function    keyTest(zipcode){
    request({
        url: url,
        qs: { address: zipcode,apikey: apiKey },
        method: "GET"
    }, function (error, response, body) {
        if (error) {
            var rcvd = zipcode+": "+error
            console.log(rcvd)
        } else {
            var rcvd = zipcode+": "+response.statusCode+"  "+response.statusMessage
            console.log(rcvd);
        }
    });
}