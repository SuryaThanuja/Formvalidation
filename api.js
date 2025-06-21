

async function fetchCountryByName(name) {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    if (!response.ok) throw new Error('Country not found');
    const data = await response.json();
    return data[0]; // Return the first match
  } catch (error) {
    alert(error.message);
    return null;
  }
}
