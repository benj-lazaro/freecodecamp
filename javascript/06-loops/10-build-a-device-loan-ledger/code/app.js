const equipmentLedger = {
  1: {
    type: "PC",
    status: "CheckedOut",
    borrower: { name: "John Smith", email: "john@acme.org" },
    dueDate: "11/30/2025",
  },
  2: {
    type: "Laptop",
    status: "CheckedIn",
    borrower: { name: "", email: "" },
    dueDate: "",
  },
  3: {
    type: "Laptop",
    status: "CheckedOut",
    borrower: { name: "Jane Doe", email: "jane@acme.org" },
    dueDate: "10/31/2025",
  },
  4: {
    type: "iPad",
    status: "CheckedIn",
    borrower: { name: "", email: "" },
    dueDate: "",
  },
};

function checkoutDevice(ledger, assetTag, borrower) {
  const ledgerStringify = serializeLedger(ledger);
  const ledgerClone = loadLedger(ledgerStringify);

  let confirmationString = `Asset ${assetTag} checked out to ${borrower.name}`;

  if (ledgerClone[assetTag]) {
    if (ledgerClone[assetTag].status === "CheckedOut") {
      confirmationString = `Asset ${assetTag} already checked out`;
    } else {
      ledgerClone[assetTag].borrower = borrower;
      ledgerClone[assetTag].status = "CheckedOut";
    }
  } else {
    confirmationString = `Asset ${assetTag} not found`;
  }

  return { ledger: ledgerClone, message: confirmationString };
}

function checkinDevice(ledger, assetTag) {
  const ledgerStringify = serializeLedger(ledger);
  const ledgerClone = loadLedger(ledgerStringify);

  let confirmationString = `Asset ${assetTag} checked in`;

  if (ledgerClone[assetTag]) {
    ledgerClone[assetTag].borrower.name = "";
    ledgerClone[assetTag].borrower.email = "";
    ledgerClone[assetTag].dueDate = "";
    ledgerClone[assetTag].status = "CheckedIn";
  } else {
    confirmationString = `Asset ${assetTag} not found`;
  }

  return { ledger: ledgerClone, message: confirmationString };
}

function reformatDate(date) {
  const datePartsArray = date.split("/");
  let month = datePartsArray[0];
  let day = datePartsArray[1];
  const year = datePartsArray[2];

  month = month.padStart(2, "0");
  day = day.padStart(2, "0");

  const formattedDate = year + month + day;
  return parseInt(formattedDate, 10);
}

function listOverdueDevices(ledger, today) {
  const todayFormatted = reformatDate(today);
  const overdueDevices = [];

  for (const assetTag in ledger) {
    const item = ledger[assetTag];
    if (item.status === "CheckedOut" && item.dueDate) {
      if (reformatDate(item.dueDate) < todayFormatted) {
        overdueDevices.push(item);
      }
    }
  }

  return overdueDevices.sort((a, b) => {
    const [am, ad, ay] = a.dueDate.split("/").map(Number);
    const [bm, bd, by] = b.dueDate.split("/").map(Number);

    return ay - by || am - bm || ad - bd;
  });
}

function serializeLedger(ledger) {
  return JSON.stringify(ledger);
}

function loadLedger(json) {
  return JSON.parse(json);
}
