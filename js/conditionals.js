"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

//Create a function named `analyzeColor` that accepts a string that is a color
function analyzeColor(color){
    color = color.toLowerCase()
    if(color === "blue"){
        return "Blue is the color of the sky";
    }
    else if(color === "red"){
        return "Strawberries are red";
    }
    else if(color === "cyan"){
        return "I dont know anything about cyan."
    }
    else{
        return `${color} does not pass my conditionals`;
    }
}
console.log(analyzeColor("blue"));
console.log(analyzeColor("red"));
console.log(analyzeColor("cyan"));
console.log(analyzeColor("tea"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

//Refactor your above function to use a switch-case statement
function analyzeColorRefactored(color){
    switch(color.toLowerCase()){
        case "blue":
            return "blue is the color of the sky";
        case "red":
            return "Strawberries are red";
        case "cyan":
            return "I dont know anything about cyan";
        default:
            return `${color.toLowerCase()} does not pass my conditionals`;
    }
}
// Pass the `randomColor` variable to your function and console.log the results.
console.log(analyzeColorRefactored(randomColor));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */
alert(analyzeColorRefactored(prompt("whats is your favorite color")));

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// Write a function named `calculateTotal` that accepts a lucky number and total
// amount, and returns the discounted price.
function calculateTotal(lucky,total) {
    let discount;
    if((!isNaN(parseInt(total)))){
        switch (lucky) {
            case 1:
                discount = .1;
                break;
            case 2:
                discount = .25;
                break
            case 3:
                discount = .35;
                break;
            case 4:
                discount = .50;
                break;
            case 5:
                discount = 1;
                break;
            default:
                discount = 0;
        }
        let discountedPrice = total - (total * discount);
        alert(`
                Your total before discount was: $${parseInt(total).toFixed(2)}.
                Your lucky number is: ${lucky}. 
                Your discount is: ${discount * 100}%.
                Your price after discount is $${discountedPrice.toFixed(2)}.
            `);
        return discountedPrice;
    }
    else{
        alert("Sorry, You did not enter a numerical value.")
    }
}
calculateTotal(0, 100);
calculateTotal(4, 100);
calculateTotal(5, 100);
calculateTotal(5, "eight");
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */

// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
calculateTotal(luckyNumber,prompt("what is your total?"));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

function oddEven(){
    // Does User want a number?
    if(confirm("Would you like to pick a number")){
        let num = parseInt(prompt("Enter a number:"));
        // is input a number?
        if(!isNaN(num)){
            // is even or odd?
            num % 2 === 0 ? alert("Your Number is Even") : alert("Your Number is Odd");
            // number + 100
            alert(`Your Number if added to 100 is: ${num + 100}`);
            // number - or +
            num >= 0 ? alert("Your Number is Positive") : alert("Your Number is Negative.");
        }
        else
        {
            alert("Sorry, You did not enter a numerical value.")
        }
    }
    else {
        alert("Thanks maybe next time.")
    }
}

oddEven();