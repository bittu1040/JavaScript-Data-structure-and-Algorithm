// 2, 3, 5, 7, 11, 13, 17, 19, ...
// A prime number (or prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself
function isPrime(n){
    if(n<=1){
        return false;
    }
    for(let i=2; i<n; i++){
        if(n%i===0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(2))
