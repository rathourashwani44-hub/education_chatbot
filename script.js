
const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn')

registerBtn.addEventListener('click',()=>{
    container.classList.add('active');
})

loginBtn.addEventListener('click',()=>{
    container.classList.remove('active');
})



// window.location.href = "dashboad.html";

// REGISTER
document.querySelector(".register form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    const res = await fetch("/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password })
    });

    const data = await res.json();
    alert(data.message);

     if (data.success) {
        window.location.href = "dashboad.html"; // redirect to next page
    }
});

// LOGIN
document.querySelector(".login form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;

    const res = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    });

    const data = await res.json();
    alert(data.message);

    if (data.success) {
        window.location.href = "dashboad.html"; // redirect to next page
    }
});


