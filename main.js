const profile = {
  name: "Elijah Charles Bundu",
  role: "MSc Computer Science (Data Engineering)",
  mission: "Building AI-powered solutions for education, agriculture, and social impact in Africa."
};

document.getElementById("name").textContent = profile.name;
document.getElementById("intro").textContent =
  `${profile.role} | ${profile.mission}`;
