// Dark mode
const toggleBtn = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

// Toggle dark mode
const toggle = document.getElementById("themeToggle");
const body = document.body;


toggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

//Filter projects
function filterProjects(category) {
  const projects = document.querySelectorAll(".project");

  projects.forEach(project => {
    if (category === "all") {
      project.style.display = "block";
    } else {
      project.style.display =
        project.classList.contains(category) ? "block" : "none";
    }
  });
}

//Form validation (contact forms)
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("formMessage");

    if (name === "" || email === "") {
      message.textContent = "Fyll i alla fält!";
      message.style.color = "red";
      return;
    }

    // Email-check
    if (!email.includes("@")) {
      message.textContent = "Ogiltig email!";
      message.style.color = "red";
      return;
    }

    message.textContent = "Meddelande skickat!";
    message.style.color = "green";

    form.reset();
  });
}

//Copy email and phone number in contact
const copyButtons = document.querySelectorAll(".copy-btn");

copyButtons.forEach(btn => {
  btn.addEventListener("click", async () => {
    const text = btn.getAttribute("data-copy");

    try {
      await navigator.clipboard.writeText(text);
      showToast("Kopierat till urklipp!");
    } catch (err) {
      showToast("Kunde inte kopiera");
    }
  });
});

//Style of copy the message
function showToast(message) {
  const toast = document.createElement("div");

  toast.textContent = message;
  toast.style.position = "fixed";
  toast.style.bottom = "30px";
  toast.style.left = "50%";
  toast.style.transform = "translateX(-50%)";
  toast.style.background = "var(--card)";
  toast.style.color = "var(--text)";
  toast.style.padding = "10px 20px";
  toast.style.border = "1px solid var(--border)";
  toast.style.zIndex = "9999";
  toast.style.fontFamily = "Poppins, sans-serif";
  toast.style.borderRadius = "0";

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2000);
}

//Burger menu for phone
const burger = document.getElementById("burger");
const menu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("closeMenu");

if (burger && menu) {
  burger.addEventListener("click", () => {
    menu.classList.add("active");
  });
}

if (closeBtn && menu) {
  closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
  });
}