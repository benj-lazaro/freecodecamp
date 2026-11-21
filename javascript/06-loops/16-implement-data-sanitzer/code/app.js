let logs_1 = [
  "INFO: Server started on port 3000",
  "DEBUG: user=admin token=abc123 connected",
  "WARN: High memory usage detected at 87%",
];

let logs_2 = [
  "FATAL: System overload detected, shutting down",
  "DEBUG: token=def456$ refreshed for session",
  "ERROR: Null pointer exception in module auth",
];

let logs_3 = [
  "ERROR: Failed to connect to db, retry=3",
  "DEBUG: api_key=XYZ789 used in request",
  "/INFO: Cache cleared successfully",
  "WARN: Disk usage at 92%, threshold=90%",
  "/INFO: Disk usage stabilized",
];

function sanitizeLog(entry, disallowedCharacters) {
  const prohibited = disallowedCharacters;
  const escaped = prohibited.map((character) =>
    character.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
  );
  const pattern = new RegExp(escaped.join("|"), "g");
  const result = entry.replace(pattern, "#");
  return result;
}

function cleanLogs(logs, disallowedCharacters) {
  let totalEntryCount = 0;
  let sanitizedEntryCount = 0;
  let informationalEntryCount = 0;

  for (const log of logs) {
    for (const character of log) {
      if (character === "$") {
        return "Sanitizing stopped. Failure Reason: Fatal character occurred.";
      }
    }

    if (log[0] === "/") {
      informationalEntryCount++;
    } else {
      sanitizeLog(log, disallowedCharacters);
      sanitizedEntryCount++;
    }

    totalEntryCount++;
  }

  return `Total Entry Count: ${totalEntryCount}. Sanitized Entry Count: ${sanitizedEntryCount}. Informational Entry Count: ${informationalEntryCount}. Finished sanitizing logs.`;
}

let result = cleanLogs(logs_1, ["a", "A", "c", "T"]);
console.log(result);

result = cleanLogs(logs_2, ["a", "A", "c", "T"]);
console.log(result);

result = cleanLogs(logs_3, ["a", "A", "c", "T"]);
console.log(result);
