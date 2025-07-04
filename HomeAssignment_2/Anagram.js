function isAnagram(str1, str2) {
  // Step 1: Remove spaces and convert to lowercase
  const cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/\s/g, '').toLowerCase();

  // Step 2: Sort the characters
  const sortedStr1 = cleanStr1.split('').sort().join('');
  const sortedStr2 = cleanStr2.split('').sort().join('');

  // Step 3: Compare sorted strings
  return sortedStr1 === sortedStr2;
}

// Example usage:
console.log(isAnagram('listen', 'silent')); // true
console.log(isAnagram('hello', 'world'));   // false
