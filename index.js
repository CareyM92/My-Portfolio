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

// Certifications toggle
certToggle.addEventListener("click", function () {
  const expanded = this.getAttribute("aria-expanded") === "true";
  certList.style.display = expanded ? "none" : "block";
  this.setAttribute("aria-expanded", !expanded);
  this.textContent = expanded ? "Show Certifications" : "Hide Certifications";
});

// CV toggle with dynamic iframe and fallback link
cvToggle.addEventListener("click", function () {
  const cvFrameContainer = document.getElementById("cvFrameContainer");
  const expanded = this.getAttribute("aria-expanded") === "true";
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
        onerror="this.style.display='none';document.getElementById('cvDownloadLink').style.display='block';"
      ></iframe>
      <a id="cvDownloadLink" href="Portfolio CV.pdf" target="_blank" rel="noopener" style="display:none;">
        Download/View CV PDF
      </a>
    `;
  }
  if (expanded) {
    cvFrameContainer.innerHTML = "";
  }
});

// Projects toggle
document
  .getElementById("projectsToggle")
  .addEventListener("click", function () {
    const projectsSection = document.getElementById("projectsSection");
    const expanded = this.getAttribute("aria-expanded") === "true";
    projectsSection.style.display = expanded ? "none" : "block";
    this.setAttribute("aria-expanded", !expanded);
    this.textContent = expanded ? "Show Projects" : "Hide Projects";
  });

// Projects nav link scroll and open
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
