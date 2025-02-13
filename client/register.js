document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert("Please enter a username and password.");
        return;
    }

    if (localStorage.getItem(username)) {
        alert("Username already exists! Try another.");
        return;
    }

    localStorage.setItem(username, password);
    alert("Registration successful! Redirecting to login...");
    window.location.href = 'login.html'; 

    
});
