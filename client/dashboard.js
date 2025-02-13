document.addEventListener('DOMContentLoaded', function() {
    const user = localStorage.getItem('loggedInUser');

    if (!user) {
        window.location.href = 'login.html'; 
    }

    document.getElementById('welcomeMessage').textContent = user;

    document.getElementById('logoutBtn').addEventListener('click', function() {
        localStorage.removeItem('loggedInUser'); 
        window.location.href = 'login.html';
    });
});
