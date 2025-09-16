console.log("FSD Class");

let firstname = "Saurabh";
let lastname="yadav";
let message = "hello";
console.log(firstname);

let sum="22" +2 -2;
console.log(sum);

// typechecking
console.log(typeof(sum));

let op= "22" -2;
console.log(op +"type of op:" + typeof(op));
console.log(a);
var a=30;
console.log(a);
{
    var a=50;
    console.log(a);
}
console.log(a);

// var - redeclaration in var is possible, reassignment, takes global scope
// let - redeclsrstion of vslue is not possible
// explicit type conversion


let strToNum = Number("12345");
console.log(typeof(strToNum));


let numToBool = Boolean(8); //if value is there than it always return 2
console.log(numToBool);


//
for(let i=1;i<=4;i++){
    for(let j=1;j<4;j++){
        console.log(" ");
    }
    for(let j=1; j<=(2*i-1);j++){
        console.log("*");
    }
    console.log(" ");

}