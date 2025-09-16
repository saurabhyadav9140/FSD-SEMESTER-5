let row = 5;
for(let i=1 ;i<=row; i++){
    let line =" "
    for(let j=1; j<=2*row - 1;j++){
        if(i+j>row && j-1<row){
            line+="*";
        }else{
            line+=" ";
        }
    }
    console.log(line);
}

// for each loop
let arr=[1,2,3,4,5,['1','2','3','4']];
arr.forEach((i)=> console.log(i))
{}