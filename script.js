// =======================
// Part 1: Event Handling
// =======================
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter Game
let count = 0;
const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");
incrementBtn.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

// ===========================
// Part 2: Interactive Elements
// ===========================
// FAQ collapsible
const questions = document.querySelectorAll(".faq-question");
questions.forEach((q) => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// =============================
// Part 3: Form Validation Logic
// =============================
const form = document.getElementById("signupForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission
  let isValid = true;

  // Name Validation
  const name = document.getElementById("name").value.trim();
  const nameError = document.getElementById("nameError");
  if (name.length < 3) {
    nameError.textContent = "Name must be at least 3 characters long.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Email Validation (simple regex)
  const email = document.getElementById("email").value.trim();
  const emailError = document.getElementById("emailError");
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Password Validation
  const password = document.getElementById("password").value.trim();
  const passwordError = document.getElementById("passwordError");
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters long.";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  // Final message
  const formMessage = document.getElementById("formMessage");
  if (isValid) {
    formMessage.textContent = "✅ Form submitted successfully!";
    formMessage.style.color = "green";
  } else {
    formMessage.textContent = "❌ Please fix the errors above.";
    formMessage.style.color = "red";
  }
});
