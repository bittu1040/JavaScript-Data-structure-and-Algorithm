let m1= new Map([['a', 1], ['b', 2]]);
m1.set('c', 3)
for(let [key,value] of m1){
    console.log(key, ":", value)
}