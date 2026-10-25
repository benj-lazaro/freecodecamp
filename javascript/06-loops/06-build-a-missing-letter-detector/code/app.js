function fearNotLetter(letters) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const firstLetter = letters[0];
  let alphabetIndex = alphabet.search(firstLetter);

  for (let index = 0; index < letters.length; index++) {
    if (letters[index] !== alphabet[alphabetIndex]) {
      return alphabet[alphabetIndex];
    }
    alphabetIndex++;
  }
}

// Test Case
console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
