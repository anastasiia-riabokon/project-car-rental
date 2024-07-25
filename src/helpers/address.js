export function cityAndCountry(address) {
  const parts = address.split(",");

  if (parts.length >= 3) {
    const city = parts[parts.length - 2].trim();
    const country = parts[parts.length - 1].trim();
    return {city, country};
  } else {
    return null;
  }
}
