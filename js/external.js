"use strict";
console.log("Hello from external JavaScript");
alert("Welcome to my website");

//prompt users and response
var response = prompt("What's your favorite color?");
alert(`Great, ${response} is my favorite color too!`);

//Part 3 exercises
// Movie Rental
var priceDay=3.00,
    mermaid=3,
    brotherBear=5,
    hercules=1;

var total = "$" + Number(priceDay * (mermaid + brotherBear + hercules)).toFixed(2);

// Enroll student
var classLimit = 20,
    currentSize = 10,
    noConflict = true;

// Can the student be enrolled?
var enrollStudent = currentSize < classLimit && noConflict;

// Product Offer Exercise
var	items = 2,
    notExpired = true,
    premium = true;

// Can offer be applied?
var applyOffer = ((items > 2 || premium) && (notExpired));