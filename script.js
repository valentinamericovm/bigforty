const targetDate = new Date("2027-02-18T00:00:00-05:00").getTime();

function updateCountdown() {
  const distance = Math.max(0, targetDate - Date.now());
  document.getElementById("days").textContent = Math.floor(distance / 86400000);
  document.getElementById("hours").textContent = Math.floor((distance % 86400000) / 3600000);
  document.getElementById("minutes").textContent = Math.floor((distance % 3600000) / 60000);
  document.getElementById("seconds").textContent = Math.floor((distance % 60000) / 1000);
}
updateCountdown();
setInterval(updateCountdown, 1000);

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".main-nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-en][data-it]").forEach(el => {
    el.textContent = el.dataset[lang];
  });
  document.querySelectorAll(".lang").forEach(button => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });
  localStorage.setItem("valeLanguage", lang);
}
document.querySelectorAll(".lang").forEach(button => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});
setLanguage(localStorage.getItem("valeLanguage") || "en");

// Activities accordion
(function () {
  const trigger = document.querySelector(".activities-accordion__trigger");
  const panel   = document.querySelector(".activities-accordion__panel");
  if (!trigger || !panel) return;

  trigger.addEventListener("click", function () {
    const isOpen = this.getAttribute("aria-expanded") === "true";
    this.setAttribute("aria-expanded", String(!isOpen));
    panel.classList.toggle("is-open", !isOpen);
  });
})();
