//Get Query Parameters from URL
var getQuery = window.location.search;

let paramString = getQuery.split('?')[1]; 
  
let queryString = new URLSearchParams(paramString); 

for (let pair of queryString.entries()) { 
    console.log("Key is:" + pair[0]); 
    console.log("Value is:" + pair[1]); 
}

//Encode the Query Parameters
var encodedString = btoa(getQuery);
console.log(encodedString);

//Decode the Encoded Query Parameters
var decodedString = atob(encodedString);
console.log(decodedString);