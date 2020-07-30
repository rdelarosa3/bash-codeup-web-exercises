// while
let z = 2;
while(z<=65536){
    console.log(z);
    z *= 2;
}
// do while
var conesAvailable = Math.floor(Math.random() * 50) + 50;
do{
    console.log(`${conesAvailable} cones available.`)
    var conesSold = Math.floor(Math.random() * 5) + 1;
    if(conesAvailable >= conesSold){
        console.log(conesSold +" cones sold");
        conesAvailable -= conesSold;
    }
    else if(conesAvailable < conesSold){
        console.log(`Cannot sell you ${conesSold} cones I only have ${conesAvailable}`);
    }
}while( conesAvailable > 0)
console.log("Yay! I sold them all!");