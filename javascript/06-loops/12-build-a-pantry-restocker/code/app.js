const pantry = [
  {
    sku: "A10",
    name: "Tomatoes",
    qty: 4,
    expires: "2027-01-01",
    zone: "fridge",
  },
  {
    sku: "D43",
    name: "Pineapples",
    qty: 2,
    expires: "2020-01-01",
    zone: "general",
  },
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge",
];

function parseShipment(rawData) {
  const shipment = [];
  const seenSku = new Set();

  for (const entry of rawData) {
    let [sku, name, qty, expires, zone] = entry.split("|");

    if (zone === undefined) {
      zone = "general";
    }

    if (!sku || seenSku.has(sku)) {
      continue;
    }
    seenSku.add(sku);

    shipment.push({ sku, name, qty: Number(qty), expires, zone });
  }

  return shipment;
}

const shipment = parseShipment(rawData);
console.log(shipment);

function planRestock(pantry, shipment) {
  let type = "";
  const actions = [];

  for (const item of shipment) {
    if (item.qty <= 0) {
      type = "discard";
    } else if (pantry.map((pantryItem) => pantryItem.sku).includes(item.sku)) {
      type = "restock";
    } else if (!pantry.map((pantryItem) => pantryItem.sku).includes(item.sku)) {
      type = "donate";
    }

    actions.push({ type, item });
  }

  return actions;
}

const actions = planRestock(pantry, shipment);
console.log(actions);

function groupByZone(actions) {
  const actionType = [];

  for (const action of actions) {
    if (actions.map((action) => action.item.zone).includes(action.item.zone)) {
      actionType.push(action.type);
      console.log(action.item.zone, actionType);
    }

    // console.log(`${action.item.zone}: [${action.type}]`);
  }
  console.log(actionType);
}

groupByZone(actions);
