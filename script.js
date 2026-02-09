document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the page from reloading

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulation of a login process
    if (email && password) {
        console.log("Authentication initiated for:", email);
        
        // In a real app, you'd use fetch() to send this to a server
        alert("Login functionality is connected! In a real scenario, this would check the database for: " + email);
    } else {
        alert("Please fill in all fields.");
    }
});
