function mutation(word) {
  const firstString = word[0].toLowerCase();
  const secondString = word[1].toLowerCase();

  let matchingLetters = 0;

  for (let char of secondString) {
    if (firstString.includes(char)) {
      matchingLetters++;
    }
  }

  if (matchingLetters === secondString.length) {
    return true;
  } else {
    return false;
  }
}

// Test Case
console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "Hello"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(mutation(["Mary", "Army"]));
console.log(mutation(["Mary", "Aarmy"]));
console.log(mutation(["Alien", "line"]));
console.log(mutation(["floor", "for"]));
console.log(mutation(["hello", "neo"]));
console.log(mutation(["voodoo", "no"]));
console.log(mutation(["ate", "date"]));
console.log(mutation(["Tiger", "Zebra"]));
console.log(mutation(["Noel", "Ole"]));
