const certToggle = document.getElementById("certToggle");
const certList = document.getElementById("certList");
const cvToggle = document.getElementById("cvToggle");
const cvSection = document.getElementById("cvSection");

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });
  document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
});

document.getElementById("certToggle").addEventListener("click", function () {
  const certList = document.getElementById("certList");
  const expanded = this.getAttribute("aria-expanded") === "true";
  certList.style.display = expanded ? "none" : "block";
  this.setAttribute("aria-expanded", !expanded);
  this.textContent = expanded ? "Show Certifications" : "Hide Certifications";
});

document.getElementById("cvToggle").addEventListener("click", function () {
  const cvSection = document.getElementById("cvSection");
  const cvFrameContainer = document.getElementById("cvFrameContainer");
  const expanded = this.getAttribute("aria-expanded") === "true";
  cvSection.style.display = expanded ? "none" : "block";
  this.setAttribute("aria-expanded", !expanded);
  this.textContent = expanded ? "Show CV" : "Hide CV";

  // Only add iframe if opening and not already present
  if (!expanded && !cvFrameContainer.querySelector("iframe")) {
    cvFrameContainer.innerHTML = `
      <iframe
        src="Portfolio CV.pdf"
        width="100%"
        height="400px"
        frameborder="0"
      ></iframe>
    `;
  }
  // Optionally remove iframe when hiding
  if (expanded) {
    cvFrameContainer.innerHTML = "";
  }
});

document
  .getElementById("projectsToggle")
  .addEventListener("click", function () {
    const projectsSection = document.getElementById("projectsSection");
    const expanded = this.getAttribute("aria-expanded") === "true";
    projectsSection.style.display = expanded ? "none" : "block";
    this.setAttribute("aria-expanded", !expanded);
    this.textContent = expanded ? "Show Projects" : "Hide Projects";
  });

document
  .querySelector('a[href="#projectsSection"]')
  ?.addEventListener("click", function (event) {
    event.preventDefault();
    const projectsSection = document.getElementById("projectsSection");
    const projectsToggle = document.getElementById("projectsToggle");
    if (projectsSection && projectsToggle) {
      projectsSection.style.display = "block";
      projectsToggle.setAttribute("aria-expanded", "true");
      projectsToggle.textContent = "Hide Projects";
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  });
