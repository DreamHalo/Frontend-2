"use strict";

let fullNameCountry = localStorage.getItem("fullname");
let baseURL = "https://restcountries.com/v2";

window.addEventListener('DOMContentLoaded', () => {
    getCountry(fullNameCountry);
})


async function getCountry (isName) {
    try{

        const res = await fetch(`${baseURL}/name/${isName}?fullText=true`);p
        const result = await res.json();
        const c=result[0]
        $('#result').innerHTML=`
        <h1>${c.name}</h1>
         `

        console.log(result[0]);
    }
    catch(err) {
        console.log("Error getting country");
    }
}