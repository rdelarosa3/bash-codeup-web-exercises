console.log("Loops Lecture");
//// WHILE LOOPS
// while loop: if the condition is true execute code
while(confirm("while continue?")){
    console.log("while");
}

let count = 0
while(count <= 10){
    count++;
    console.log(count);
}
// do while loop: executes code at least once before checking the condition
do {
    console.log("do while");
}while(confirm("do while continue?"));

// countdown timer
var countDown = 10;
do {
    console.log(countDown);
    countDown --;
}while (countDown >= 0);

//// FOR LOOPS

// for (/*initialization*/; /*condition*/; /*increment*/) {
//     // body
// }

for(let x = 0; x <= 10; x++){
    console.log(`for loop: ${x}`);
}
// declaring multiple initializers; given a condition, multiple increments
for (
    var i = 0, j = 9;
     i < 10;
     i++, j--
) {
    console.log('for loop iteration #' + i + ', j = ' + j);
}

// for loop w/ break
for(let x = 0; x <= 10; x++){
    console.log(`for loop w/ break: ${x}`);
    if (x === 5){
        break;
    }

}

// for loop w/ continue ** skip the rest of the code for this one but continue for the rest;
for(let x = 0; x <= 10; x++){
    if (x === 5){
        continue;
    }
    console.log(`for loop w/ continue: ${x}`);
}

