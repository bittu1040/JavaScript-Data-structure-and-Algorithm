//4 - 4*3*2*1
//5 - 5*4*3*2*1

function factorial(n){
    let res=1;
    for(let i=n; i>1; i--){
        res= res*i;
    }
    return res;
}

console.log(factorial(4));
console.log(factorial(5));
