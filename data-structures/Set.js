let s1 = new Set([10, 30, 30, 40, 40]);
console.log(s1);

for(let item of s1){
  console.log(item);
}

// s1.add(50);
s1.delete(40)
console.log(s1);

console.log(s1.has(30))
s1.clear();
console.log(s1.size)