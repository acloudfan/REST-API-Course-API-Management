
Demo is part of a course on 
REST API Design, Development & Management
http://acloudfan.com/learn-REST-API

Demo#1
======
walmart.js
Demonstrates how Walmart applies the Rate limiting policy on API.
In order to run the test:
1. Register your app on https://developer.walmartlabs.com  to get an API Key
2. Update Walmart.js with your Key

> npm install
> node walmart

Test will show that in 1 sec Walmart API will execute successfully on 5 times and 
that is because their is a Rate limit of 5 calls/sec set by Walmart.

Demo#2
======
traffictest.js

