function booWho(value) {
  if (typeof value === "boolean") {
    return true;
  } else {
    return false;
  }
}

console.log(booWho([1, 2, 3]));
console.log(booWho(true));
