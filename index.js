const certToggle = document.getElementById("certToggle");
const certList = document.getElementById("certList");
const cvToggle = document.getElementById("cvToggle");
const cvSection = document.getElementById("cvSection");
const projectsToggle = document.getElementById("projectsToggle");
const projectsSection = document.getElementById("projectsSection");
const cvFrameContainer = document.getElementById("cvFrameContainer");
const themeToggle = document.getElementById("themeToggle");

// Helper: close all sections except one
function closeAllExcept(open) {
  if (open !== "cert") {
    certList.style.display = "none";
    certToggle.setAttribute("aria-expanded", "false");
    certToggle.textContent = "Show Certifications";
  }
  if (open !== "cv") {
    cvSection.style.display = "none";
    cvToggle.setAttribute("aria-expanded", "false");
    cvToggle.textContent = "Show CV";
    cvFrameContainer.innerHTML = "";
  }
  if (open !== "projects") {
    projectsSection.style.display = "none";
    projectsToggle.setAttribute("aria-expanded", "false");
    projectsToggle.textContent = "Show Projects";
  }
}

// Toggle section with fade
function toggleSection(btn, section, openText, closeText, openKey, loader) {
  const isExpanded = btn.getAttribute("aria-expanded") === "true";
  if (!isExpanded) closeAllExcept(openKey);
  btn.setAttribute("aria-expanded", !isExpanded);
  btn.textContent = isExpanded ? openText : closeText;
  if (isExpanded) {
    section.style.opacity = "0";
    setTimeout(() => (section.style.display = "none"), 200);
  } else {
    section.style.display = "block";
    setTimeout(() => (section.style.opacity = "1"), 10);
    if (loader) loader();
  }
}

// === Event listeners ===
certToggle.addEventListener("click", () =>
  toggleSection(
    certToggle,
    certList,
    "Show Certifications",
    "Hide Certifications",
    "cert"
  )
);
cvToggle.addEventListener("click", () =>
  toggleSection(cvToggle, cvSection, "Show CV", "Hide CV", "cv", () => {
    if (!cvFrameContainer.querySelector("iframe")) {
      cvFrameContainer.innerHTML = `<iframe src="Portfolio CV (1).pdf" width="100%" height="400px" style="border-radius:8px;border:1px solid #333;background:#1b1b1b; transform: translateY(-4px);
  box-shadow: 0 6px 20px rgba(255, 140, 66, 0.3);
"></iframe>`;
    }
  })
);
projectsToggle.addEventListener("click", () =>
  toggleSection(
    projectsToggle,
    projectsSection,
    "Show Projects",
    "Hide Projects",
    "projects"
  )
);

// Smooth scroll
document
  .querySelector('a[href="#projectsSection"]')
  ?.addEventListener("click", (e) => {
    e.preventDefault();
    closeAllExcept("projects");
    projectsSection.style.display = "block";
    projectsSection.style.opacity = "1";
    projectsToggle.setAttribute("aria-expanded", "true");
    projectsToggle.textContent = "Hide Projects";
    projectsSection.scrollIntoView({ behavior: "smooth" });
  });

// Theme toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("light-mode") ? "light" : "dark"
  );
});

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
}

function displayName() {
  const nameEl = document.querySelector("#name");

  const typewriter = new Typewriter(nameEl, {
    strings: "Hi, I'm Carey-Ann Meinie",
    autoStart: true,
    delay: 70,
    cursor: "",
  });
}

document.addEventListener("DOMContentLoaded", displayName);
