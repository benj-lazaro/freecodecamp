function repeatStringNumTimes(string, number) {
  let result = "";
  if (number <= 0) {
    return result;
  } else {
    for (let index = 0; index < number; index++) {
      result += string;
    }
    return result;
  }
}

// Test Case
console.log(repeatStringNumTimes("*", 10));
