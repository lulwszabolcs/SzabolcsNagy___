console.log(42);
console.log("alma");
console.log('alma');
//ez egy komment
console.log(typeof 42);
console.log(typeof "alma");

var valami = 0; //nem használjuk
let valami2 = 0;
const valami3 = 0;

valami2 = "alma";

if (valami2 == 0)
    console.log("nulla");
else
    console.log("nem 0");

console.log(2 == 2, 2 == "2", 2 === "2",2 === 2);

for (let index = 1; index < 20; index--) {
    if(index % 2 === 0){
        console.log(index);
    }  
}
let num = 12
console.log(num++);
console.log(++num);

