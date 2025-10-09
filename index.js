const certToggle = document.getElementById("certToggle");
const certList = document.getElementById("certList");
const cvToggle = document.getElementById("cvToggle");
const cvSection = document.getElementById("cvSection");

certToggle.addEventListener("click", function () {
  const isVisible = certList.classList.toggle("visible");
  certToggle.textContent = isVisible
    ? "Hide Certifications"
    : "Show Certifications";
  certToggle.setAttribute("aria-expanded", isVisible);
  // Hide CV if showing certificates
  cvSection.style.display = "none";
  cvToggle.textContent = "Show CV";
  cvToggle.setAttribute("aria-expanded", false);
});

cvToggle.addEventListener("click", function () {
  const isVisible = cvSection.style.display === "block";
  cvSection.style.display = isVisible ? "none" : "block";
  cvToggle.textContent = isVisible ? "Show CV" : "Hide CV";
  cvToggle.setAttribute("aria-expanded", !isVisible);
  // Hide certificates if showing CV
  if (!isVisible) {
    certList.classList.remove("visible");
    certToggle.textContent = "Show Certifications";
    certToggle.setAttribute("aria-expanded", false);
  }
});

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
