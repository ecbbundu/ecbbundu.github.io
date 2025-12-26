// main.js
document.addEventListener("DOMContentLoaded", () => {
  const profile = {
    name: "Elijah Charles Bundu",
    role: "MSc Computer Science (Data Engineering)",
    mission: "Building AI-powered solutions for education, agriculture, and social impact in Africa."
  };

  const nameEl = document.getElementById("name");
  const introEl = document.getElementById("intro");

  if (nameEl) nameEl.textContent = profile.name;
  if (introEl) introEl.textContent = `${profile.role} | ${profile.mission}`;

  // small debug helper: add test marker so you can confirm JS ran
  const debug = document.createElement("div");
  debug.style.fontSize = "12px";
  debug.style.marginTop = "8px";
  debug.style.opacity = "0.8";
  debug.textContent = "DEBUG: JS loaded";
  document.querySelector(".hero")?.appendChild(debug);
});
