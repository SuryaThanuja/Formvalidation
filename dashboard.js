if (localStorage.getItem('isLoggedIn') !== 'true') {
  window.location.href = 'login.html';
}


async function searchCountry() {
  const countryName = document.getElementById('countryInput').value.trim();
  if (!countryName) {
    alert('Please enter a country name');
    return;
  }

  const data = await fetchCountryByName(countryName);
  if (data) {
    const display = `
      <div>
        <h3>${data.name.common}</h3>
        <img src="${data.flags.png}" width="100" />
        <p><strong>Capital:</strong> ${data.capital}</p>
        <p><strong>Currency:</strong> ${Object.values(data.currencies)[0].name} (${Object.values(data.currencies)[0].symbol})</p>
        <p><strong>Region:</strong> ${data.region}</p>
        <textarea id="reasonInput" placeholder="Why do you want to visit?" rows="3"></textarea><br>
        <button onclick='addToList(${JSON.stringify(data.name.common)})'>Add to My List</button>
      </div>
    `;
    document.getElementById('countryResult').innerHTML = display;
  }
}

// Add country + reason to localStorage
function addToList(countryName) {
  const reason = document.getElementById('reasonInput').value.trim();
  if (!reason) {
    alert('Please enter a reason');
    return;
  }

  const entry = { country: countryName, reason };
  const existing = JSON.parse(localStorage.getItem('travelList')) || [];
  existing.push(entry);
  localStorage.setItem('travelList', JSON.stringify(existing));
  alert('Added to your travel list!');
  loadTravelList();
}

// Load saved list
function loadTravelList() {
  const travelList = JSON.parse(localStorage.getItem('travelList')) || [];
  const ul = document.getElementById('travelList');
  ul.innerHTML = '';
  travelList.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${item.country} - "${item.reason}" <button onclick="deleteItem(${index})">Delete</button>`;
    ul.appendChild(li);
  });
}

// Delete from list
function deleteItem(index) {
  const travelList = JSON.parse(localStorage.getItem('travelList')) || [];
  travelList.splice(index, 1);
  localStorage.setItem('travelList', JSON.stringify(travelList));
  loadTravelList();
}

// Logout
function logout() {
  localStorage.removeItem('isLoggedIn');
  window.location.href = 'login.html';
}

// Load list on page load
window.onload = loadTravelList;
