function formatAmount(amount) {
  let format = amount / 100;

  // Add 0 if the last amount character is 0 to have 2 digits to cents
  if (String(amount).slice(-1) === '0') {
    format = format + '0';
  }

  // locale string to have a comma in the thousand
  return `$${format.toLocaleString()}`;
}

export default formatAmount;
