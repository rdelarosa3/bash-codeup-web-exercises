// 2. multiplication table
function showMultiplicationTable(){
    let num = parseInt(prompt("Enter Number to multiply"));
    if(isNaN(num)) {
        return showMultiplicationTable();
    }
    for(let i = 1; i <= 10; i++){
        console.log(`${num} x ${i} = ${num*i}`)
    }
}
showMultiplicationTable();

// 3. get random number in a range
// Math.random() * (max - min) + min

for(var x = 1; x <= 10; x++){
    var randomNum = Math.floor(Math.random() * (200 - 20) + 20);
    console.log(`${randomNum} is ${randomNum%2 ===0 ? "even" : "odd"}`);
}
// 4. repeat number n times
for(var j = 1; j < 10; j++){
    console.log(j.toString().repeat(j));
}

// 5. Count down by 5 from 100
for(var y = 100; y > 0; y-=5){
    console.log(y);
}
