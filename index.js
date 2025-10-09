// Fade-in animation for sections when they appear in the viewport
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

// Toggle certifications list visibility
document.getElementById("certToggle").addEventListener("click", function () {
  const certList = document.getElementById("certList");
  certList.classList.toggle("visible");
  const expanded = certList.classList.contains("visible");
  this.textContent = expanded ? "Hide Certifications" : "Show Certifications";
  this.setAttribute("aria-expanded", expanded);
});
