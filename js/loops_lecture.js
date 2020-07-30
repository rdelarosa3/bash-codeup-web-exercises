console.log("Loops");

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