function findLongestWordLength(sentence) {
  const words = sentence.trim().split(" ");
  let longestWordLength = 0;

  for (const word of words) {
    if (word.length > longestWordLength) {
      longestWordLength = word.length;
    }
  }
  return longestWordLength;
}

// Test Case
const result = findLongestWordLength(
  "The quick brown fox jumped over the lazy dog",
);
console.log(result);
