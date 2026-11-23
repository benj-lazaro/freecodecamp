function isPalindrome(word) {
  const reverse = [...word].reverse().join("");

  if (word.toLowerCase() === reverse.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

function findPalindromeBreaks(words) {
  const notPalindromes = [];

  if (words.length === 0) {
    return [];
  }

  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      notPalindromes.push(i);
    }
  }

  return notPalindromes;
}

function findRepeatedPhrases(words, phraseLength) {
  const repeatedIndices = [];

  if (phraseLength >= words.length) {
    return repeatedIndices;
  }

  for (let i = 0; i <= words.length - phraseLength; i++) {
    const indices = [];

    for (let j = 0; j <= words.length - phraseLength; j++) {
      let same = true;

      for (let k = 0; k < phraseLength; k++) {
        if (words[i + k] !== words[j + k]) {
          same = false;
          break;
        }
      }

      if (same) {
        indices.push(j);
      }
    }

    if (indices.length > 1 && indices[0] === i) {
      repeatedIndices.push(indices);
    }
  }

  return repeatedIndices;
}

console.log(findRepeatedPhrases(["the", "cat", "sat", "the", "cat"], 2));
// console.log(findRepeatedPhrases(["a", "b", "a", "b", "a"], 3));
