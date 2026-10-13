function maskEmail(email) {
  const userName = email.slice(0, email.indexOf("@"));
  const domainName = email.slice(email.indexOf("@"));

  const firstCharacter = userName[0];
  const lastCharacter = userName[userName.length - 1];
  const repeatCount = userName.length - 2;
  const maskChar = "*";

  const masked = userName.replace(
    userName,
    firstCharacter + maskChar.repeat(repeatCount) + lastCharacter,
  );

  return masked + domainName;
}

const email = "apple.pie@example.com";

console.log(maskEmail(email));
console.log(maskEmail("freecodecamp@example.com"));
