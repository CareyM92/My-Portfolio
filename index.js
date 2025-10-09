const certToggle = document.getElementById("certToggle");
const certList = document.getElementById("certList");
const cvToggle = document.getElementById("cvToggle");
const cvSection = document.getElementById("cvSection");
const projectsToggle = document.getElementById("projectsToggle");
const projectsSection = document.getElementById("projectsSection");

// Accordion logic: close others when one opens
function closeAllExcept(open) {
  // Certifications
  if (open !== "cert") {
    certList.style.display = "none";
    certToggle.setAttribute("aria-expanded", "false");
    certToggle.textContent = "Show Certifications";
  }
  // CV
  if (open !== "cv") {
    cvSection.style.display = "none";
    cvToggle.setAttribute("aria-expanded", "false");
    cvToggle.textContent = "Show CV";
    document.getElementById("cvFrameContainer").innerHTML = "";
  }
  // Projects
  if (open !== "projects") {
    projectsSection.style.display = "none";
    projectsToggle.setAttribute("aria-expanded", "false");
    projectsToggle.textContent = "Show Projects";
  }
}

// Certifications toggle
certToggle.addEventListener("click", function () {
  const expanded = this.getAttribute("aria-expanded") === "true";
  if (!expanded) closeAllExcept("cert");
  certList.style.display = expanded ? "none" : "block";
  this.setAttribute("aria-expanded", !expanded);
  this.textContent = expanded ? "Show Certifications" : "Hide Certifications";
});

// CV toggle with dynamic iframe and fallback link
cvToggle.addEventListener("click", function () {
  const cvFrameContainer = document.getElementById("cvFrameContainer");
  const expanded = this.getAttribute("aria-expanded") === "true";
  if (!expanded) closeAllExcept("cv");
  cvSection.style.display = expanded ? "none" : "block";
  this.setAttribute("aria-expanded", !expanded);
  this.textContent = expanded ? "Show CV" : "Hide CV";

  if (!expanded && !cvFrameContainer.querySelector("iframe")) {
    cvFrameContainer.innerHTML = `
      <iframe
        src="Portfolio CV.pdf"
        width="100%"
        height="400px"
        frameborder="0"
        style="border-radius:8px;border:1px solid #ddd;background:#fff;"
      ></iframe>
    `;
  }
  if (expanded) {
    cvFrameContainer.innerHTML = "";
  }
});

// Projects toggle
projectsToggle.addEventListener("click", function () {
  const expanded = this.getAttribute("aria-expanded") === "true";
  if (!expanded) closeAllExcept("projects");
  projectsSection.style.display = expanded ? "none" : "block";
  this.setAttribute("aria-expanded", !expanded);
  this.textContent = expanded ? "Show Projects" : "Hide Projects";
});

// Projects nav link scroll and open (accordion logic)
document
  .querySelector('a[href="#projectsSection"]')
  ?.addEventListener("click", function (event) {
    event.preventDefault();
    closeAllExcept("projects");
    projectsSection.style.display = "block";
    projectsToggle.setAttribute("aria-expanded", "true");
    projectsToggle.textContent = "Hide Projects";
    projectsSection.scrollIntoView({ behavior: "smooth" });
  });

// Fade-in animation observer (unchanged)
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
