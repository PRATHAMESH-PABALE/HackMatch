document.getElementById('login-container').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    const storedPassword = localStorage.getItem(username);

    if (storedPassword && storedPassword === password) {
        localStorage.setItem('loggedInUser', username); 
        alert("Login successful! Redirecting to dashboard...");
        window.location.href = 'dashboard.html';  
    } else {
        alert("Invalid username or password.");
    }
});
