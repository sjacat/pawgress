// Wink animation after welcome message
window.addEventListener("load", function() {
  setTimeout(() => {
    const winkEye = document.getElementById("winkEye");
    // run the wink repeatedly so it blinks occasionally
    winkEye.style.animation = "wink 3s ease-in-out infinite"; // repeat

    // add a small wag to the pet image so it 'moves'
    const petImg = document.getElementById("petImg");
    if (petImg) {
      petImg.classList.add('wag');
    }
  }, 2500); // 2.5 seconds after page load
});

// Pet name interaction
document.getElementById("enterBtn").addEventListener("click", function() {
  const nameInput = document.getElementById("petName").value.trim();
  const petGreeting = document.getElementById("petGreeting");

  if (nameInput !== "") {
    // use a proper template literal (backticks) so JS parses correctly
    petGreeting.textContent = `Woof! Hi, I'm ${nameInput}, your new companion! 🐶`;
    petGreeting.classList.remove("hidden");
  } else {
    petGreeting.textContent = "Please enter a name first!";
    petGreeting.classList.remove("hidden");
  }
});
