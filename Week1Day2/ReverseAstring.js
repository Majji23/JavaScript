let name1 = "PraveenKumar";
let reversedName = '';

for (let i = name1.length - 1; i >= 0; i--) {
    reversedName = reversedName + name1[i];
}

console.log("Reversed Name:", reversedName); // Output: "ramuKneevarP"
let reversedNameUsingSplit = name1.split('').reverse().join('');
console.log("Reversed Name using split, reverse, join:", reversedNameUsingSplit); // Output: "ramuKneevarP"