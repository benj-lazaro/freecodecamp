function normalizeUnits(manifest) {
  let manifestCopy = {
    containerId: manifest.containerId,
    destination: manifest.destination,
    weight: manifest.weight,
    unit: manifest.unit,
    hazmat: manifest.hazmat,
  };

  if (manifestCopy.unit === "lb") {
    manifestCopy.weight *= 0.45;
    manifestCopy.unit = "kg";
  }
  return manifestCopy;
}

function validateManifest(manifest) {
  let manifestCopy = {};

  if (manifest.containerId === undefined) {
    manifestCopy.containerId = "Missing";
  } else if (
    (manifest.containerId && typeof manifest.containerId !== "number") ||
    manifest.containerId === null ||
    manifest.containerId <= 0 ||
    !Number.isInteger(manifest.containerId)
  ) {
    manifestCopy.containerId = "Invalid";
  }

  if (manifest.destination === undefined) {
    manifestCopy.destination = "Missing";
  } else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    manifestCopy.destination = "Invalid";
  }

  if (manifest.weight === undefined) {
    manifestCopy.weight = "Missing";
  } else if (
    typeof manifest.weight !== "number" ||
    manifest.weight <= 0 ||
    Number.isNaN(manifest.weight)
  ) {
    manifestCopy.weight = "Invalid";
  }

  if (manifest.unit === undefined) {
    manifestCopy.unit = "Missing";
  }

  if (manifest.unit && typeof manifest.unit !== "string") {
    manifestCopy.unit = "Invalid";
  } else if (manifest.unit && manifest.unit !== "lb") {
    if (manifest.unit && manifest.unit !== "kg") {
      manifestCopy.unit = "Invalid";
    }
  }

  if (manifest.hazmat === undefined) {
    manifestCopy.hazmat = "Missing";
  }

  if (manifest.hazmat && typeof manifest.hazmat !== "boolean") {
    manifestCopy.hazmat = "Invalid";
  }

  return manifestCopy;
}

function processManifest(manifest) {
  let normalizedManifest = normalizeUnits(manifest);
  let validatedManifest = validateManifest(manifest);

  // A validated manifest returns an empty object
  if (Object.keys(validatedManifest).length === 0) {
    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${normalizedManifest.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validatedManifest);
  }
}

// Test Case
// console.log(
//   normalizeUnits({
//     containerId: 68,
//     destination: "Salinas",
//     weight: 101,
//     unit: "lb",
//     hazmat: true,
//   }),
// );

console.log(validateManifest({ name: NaN, weight: 0 }));

// console.log(
//   validateManifest({
//     containerId: 0,
//     destination: 405,
//     weight: -84,
//     unit: "pounds",
//     hazmat: "no",
//   }),
// );

// processManifest({
//   containerId: 55,
//   destination: "Carmel",
//   weight: 400,
//   unit: "lb",
//   hazmat: false,
// });
