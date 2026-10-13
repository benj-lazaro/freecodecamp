const lunches = [];

function addLunchToEnd(lunchMenu, lunchItem) {
  lunchMenu.push(lunchItem);
  console.log(`${lunchItem} added to the end of the lunch menu.`);
  return lunchMenu;
}

function addLunchToStart(lunchMenu, lunchItem) {
  lunchMenu.unshift(lunchItem);
  console.log(`${lunchItem} added to the start of the lunch menu.`);
  return lunchMenu;
}

function removeLastLunch(lunchMenu) {
  if (!lunchMenu.length) {
    console.log("No lunches to remove.");
  } else {
    const lunchItem = lunchMenu.pop();
    console.log(`${lunchItem} removed from the end of the lunch menu.`);
  }
  return lunchMenu;
}

function removeFirstLunch(lunchMenu) {
  if (!lunchMenu.length) {
    console.log("No lunches to remove.");
  } else {
    const lunchItem = lunchMenu.shift();
    console.log(`${lunchItem} removed from the start of the lunch menu.`);
  }
  return lunchMenu;
}

function getRandomLunch(lunchMenu) {
  if (!lunchMenu.length) {
    console.log("No lunches available.");
  } else {
    const randomLunchItem = Math.floor(Math.random() * lunchMenu.length);
    console.log(`Randomly selected lunch: ${lunchMenu[randomLunchItem]}`);
  }
}

function showLunchMenu(lunchMenu) {
  if (!lunchMenu.length) {
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${lunchMenu.join(", ")}`);
  }
}

// Test Case
console.log(lunches);
addLunchToEnd(lunches, "Roast Beef");
addLunchToEnd(lunches, "Vodka Pasta");
addLunchToEnd(lunches, "Fried Chicken");
addLunchToEnd(lunches, "New York Pizza");
addLunchToStart(lunches, "Pork Curry");
addLunchToStart(lunches, "Macaroni & Cheese");
addLunchToStart(lunches, "Chili Frank & Beans");
addLunchToStart(lunches, "Pork Chop");
console.log(lunches);
getRandomLunch(lunches);

removeLastLunch(lunches);
console.log(lunches);

removeFirstLunch(lunches);
console.log(lunches);

showLunchMenu(lunches);
