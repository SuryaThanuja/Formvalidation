
const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    localStorage.setItem('wanderUser', JSON.stringify({ username, password }));
    alert('Signup successful! Please login.');
    window.location.href = 'login.html';
  });
}

// Handle Login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value;

    const savedUser = JSON.parse(localStorage.getItem('wanderUser'));

    if (savedUser && savedUser.username === username && savedUser.password === password) {
      localStorage.setItem('isLoggedIn', 'true');
      window.location.href = 'dashboard.html';
    } else {
      alert('Invalid credentials');
    }
  });
}
