
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Sign Up Form Handler
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
      signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
  
        if (username && email && password) {
          try {
            const user = { username, email, password };
            localStorage.setItem('user', JSON.stringify(user));
            alert('Sign-up successful! You can now log in.');
            window.location.href = 'login.html';
          } catch (error) {
            console.error('Error saving user data:', error);
          }
        } else {
          alert('Please fill in all fields.');
        }
      });
    }
  
    // Login Form Handler
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailLogin = document.getElementById('emailLogin').value.trim();
        const passwordLogin = document.getElementById('passwordLogin').value.trim();
  
        if (emailLogin && passwordLogin) {
          try {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            if (storedUser && emailLogin === storedUser.email && passwordLogin === storedUser.password) {
              alert('Login successful!');
              window.location.href = 'index.html';
            } else {
              alert('Incorrect email or password. Please try again.');
            }
          } catch (error) {
            console.error('Error retrieving user data:', error);
          }
        } else {
          alert('Please fill in all fields.');
        }
      });
    }
  });