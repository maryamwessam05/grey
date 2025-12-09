window.addEventListener("load", () => {
    setTimeout(() => {
      document.getElementById("preloader").style.display = "none";
    }, 3000);
  });





function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    let creds = JSON.parse(localStorage.getItem('login'))


        if (username == creds.username && password == creds.password) {
            window.location = 'profile.html'
        } else {
            document.getElementById("error").style.display = 'flex'
        }
    }

