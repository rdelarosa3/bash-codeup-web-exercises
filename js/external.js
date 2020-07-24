"use strict";
console.log("Hello from external JavaScript");
alert("Welcome to my website");

//prompt users and response
var response = prompt("What's your favorite color?");
alert(`Great, ${response} is my favorite color too!`);

//Part 3 exercises
// Movie Rental
var priceDay = 3,
    mermaid = prompt("How Many Days?"),
    brotherBear = prompt("How Many Days?"),
    hercules = prompt("How Many Days?"),
    subtotal = priceDay * (Number(mermaid) + Number(brotherBear) + Number(hercules));
var total = "Your total $"+subtotal.toFixed(2);

// Array of objects solution
var movies = [
    {title: "Brother Bear", days: 5},
    {title: "Hercules", days: 1},
    {title: "The little mermaid", days: 3};
]
var totalPrice = 0;
movies.forEach(function(movie){
    totalPrice += priceDay * movie.days;
});
console.log(totalPrice);
alert(total);

// Paycheck
var google = Number(prompt("How much do you get paid at google?")),
    facebook =Number(prompt("How much do you get paid at facebook?")),
    amazon= Number(prompt("How much do you get paid at amazon?"));
var ghours = Number(prompt("How many hours at ?")),
    fhours = Number(prompt("How many hours at ?")),
    ahours = Number(prompt("How many hours at ?"));
var paycheck = (google*ghours) + (facebook*fhours) + (amazon*ahours) ;
alert(`You are getting $${paycheck.toFixed(2)}. Cha-ching!!`);

// Array of objects solution
var jobsWorked=[
    {company: "google", rate: 400, hours: 6},
    {company: "facebook", rate: 350, hours:10},
    {company: "amazon", rate: 300, hours: 5};
]
var totalPayment = 0;

jobsWorked.forEach(function (job) {
    let amountPaid = job.rate * job.hours;
    console.log(`i made ${amountPaid} at ${job.company}`)
    totalPayment += amountPaid;
});
console.log(`total payment is ${totalPayment}`);

// Enroll student
var classLimit = prompt("What is the class size limit?"),
    currentSize = prompt("How many students currently enrolled?"),
    hasConflict = confirm("Conflicts with student schedule");

// Can the student be enrolled?
var canEnroll = ((currentSize < classLimit) && (!hasConflict));
alert("Student Enrolled: " + canEnroll)
// Product Offer Exercise
var	items = prompt("How many items are you purchasing?"),
    isExpired = confirm("Is coupon expired?"),
    isPremium = confirm("Is this a premium member?");

// Can offer be applied?
var canApplyOffer = ((items > 2 || isPremium) && (!isExpired));
alert("Offer Applied: " + canApplyOffer);