const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, strokes) {
  if (strokes === 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes === par - 1) {
    return names[2];
  } else if (strokes === par) {
    return names[3];
  } else if (strokes === par + 1) {
    return names[4];
  } else if (strokes === par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  }
}

// Test Case
console.log(golfScore(1, 1)); // Holes-in-one!
console.log(golfScore(3, 1)); // Holes-in-one!
console.log(golfScore(4, 1)); // Holes-in-one!
console.log(golfScore(5, 1)); // Holes-in-one!
console.log(golfScore(4, 2)); // Eagle
console.log(golfScore(5, 2)); // Eagle
console.log(golfScore(3, 2)); // Birdie
console.log(golfScore(4, 3)); // Birdie
console.log(golfScore(5, 4)); // Birdie
console.log(golfScore(3, 3)); // Par
console.log(golfScore(4, 4)); // Par
console.log(golfScore(5, 5)); // Par
console.log(golfScore(3, 4)); // Bogey
console.log(golfScore(4, 5)); // Bogey
console.log(golfScore(5, 6)); // Bogey
console.log(golfScore(3, 5)); // Double Bogey
console.log(golfScore(4, 6)); // Double Bogey
console.log(golfScore(5, 7)); // Double Bogey
console.log(golfScore(3, 7)); // Go Home!
console.log(golfScore(4, 8)); // Go Home!
console.log(golfScore(5, 9)); // Go Home!
