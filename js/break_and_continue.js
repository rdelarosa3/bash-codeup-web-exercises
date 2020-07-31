//1

while(true){
    var message = parseInt(prompt("Please enter odd number between 1 and 50"));
    if(
        message%2 !== 0 &&
        !isNaN(message) &&
        message>0 &&
        message<51
    ){
        break;
    }
    alert("Invalid Number");
}
console.log(`Number to skip: ${message}`)
// for(let i = 1; i<=50;i+=2)---clever way of solving
for(let i = 1; i<=50;i++){
    if(i%2 !== 0){
        if(i === message){
            continue;
        }
        console.log(`Here is an odd number: ${i}`)
    }
}