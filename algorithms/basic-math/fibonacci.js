// 0,1,1,2,3,5,8,13,21 ...
// Given the number n , find the first n element of the fibonacci sequence 
function fibonacci(n){
    let fib = [0,1];
    for(let i=2; i<n; i++){
        let next= fib[i-1]+ fib[i-2];
        fib.push(next);
    }
    return fib;
}

console.log(fibonacci(5));  // [ 0, 1, 1, 2, 3 ]