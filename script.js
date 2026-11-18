
const loginForm = document.getElementById("studentLoginForm");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const studentId =
        document.getElementById("studentNumber").value;

    const password =
        document.getElementById("studentPassword").value;

    const loginMessage =
        document.getElementById("loginMessage");

    // Check the demo login details
    if (studentId === "student01" &&
        password === "12345") {

        document.getElementById("loginScreen")
            .classList.add("hide-section");

        document.getElementById("dashboardLayout")
            .classList.remove("hide-section");

        loginMessage.textContent = "";

    } else {
        loginMessage.textContent =
            "Invalid Student ID or Password!";
    }
});

// LOGOUT

document.getElementById("logoutButton")
    .addEventListener("click", function() {

        document.getElementById("dashboardLayout")
            .classList.add("hide-section");

        document.getElementById("loginScreen")
            .classList.remove("hide-section");

        loginForm.reset();
    });

// SIDEBAR MENU

const menuLinks = document.querySelectorAll(".side-menu nav a");

menuLinks.forEach(link => {
    link.addEventListener("click", function() {

        menuLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });
});
