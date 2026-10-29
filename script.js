
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const backToTop = document.getElementById("backToTop");
const year = document.getElementById("year");

// Show or hide the mobile navigation
menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the mobile menu after clicking a link
navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Automatically update the copyright year
year.textContent = new Date().getFullYear();

// Show the back-to-top button when scrolling
window.addEventListener("scroll", () => {
  backToTop.classList.toggle("visible", window.scrollY > 300);
});

// Return to the top of the page
backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Play the visitor-provided song only when the visitor selects On.
const backgroundAudio = document.getElementById("backgroundAudio");
const musicOnButton = document.getElementById("musicOn");
const musicOffButton = document.getElementById("musicOff");
const musicStatus = document.getElementById("musicStatus");

backgroundAudio.volume = 0.35;

musicOnButton.addEventListener("click", async () => {
  try {
    await backgroundAudio.play();
    musicOnButton.setAttribute("aria-pressed", "true");
    musicOffButton.setAttribute("aria-pressed", "false");
    musicStatus.textContent = "Music: On";
  } catch (error) {
    musicStatus.textContent = "Music could not be played";
  }
});

musicOffButton.addEventListener("click", () => {
  backgroundAudio.pause();
  backgroundAudio.currentTime = 0;
  musicOnButton.setAttribute("aria-pressed", "false");
  musicOffButton.setAttribute("aria-pressed", "true");
  musicStatus.textContent = "Music: Off";
});