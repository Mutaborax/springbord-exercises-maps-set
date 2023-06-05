// Quick Question #1
let set1 = new Set([1,1,2,2,3,4]);
console.log(set1); // returns Set {1, 2, 3, 4}

// Quick Question #2
let str = [...new Set("referee")].join("");
console.log(str); // returns 'ref'

// Quick Questions #3
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
console.log(m); // returns Map {Array(3) => false}, two different keys as arrays are objects and each object is unique.

// hasDuplicate function
function hasDuplicate(arr) {
  return new Set(arr).size !== arr.length;
}

console.log(hasDuplicate([1,3,2,1])); // true
console.log(hasDuplicate([1,5,-1,4])); // false

// vowelCount function
function vowelCount(str) {
  const vowels = 'aeiou';
  let map = new Map();
  for(let char of str.toLowerCase()) {
    if(vowels.includes(char)) {
      if(map.has(char)) {
        map.set(char, map.get(char) + 1);
      } else {
        map.set(char, 1);
      }
    }
  }
  return map;
}

console.log(vowelCount('awesome')); // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
console.log(vowelCount('Colt')); // Map { 'o' => 1 }
