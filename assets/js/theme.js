// Runs as soon as the page loads
window.addEventListener("DOMContentLoaded", () => {
    const themeLink = document.getElementById("theme-stylesheet");
    const toggleBtn = document.getElementById("toggle-theme");
  
    // Check saved theme in localStorage
    const savedTheme = localStorage.getItem("theme");
  
    // If a theme was saved, use it
    if (savedTheme === "dark") {
      themeLink.setAttribute("href", "assets/css/darkmode.css");
      if (toggleBtn) toggleBtn.textContent = "Light Mode";
    }
  
    // Listen for toggle button click
    if (toggleBtn) {
      toggleBtn.addEventListener("click", (e) => {
        e.preventDefault();
  
        const isDarkMode = themeLink.getAttribute("href").includes("darkmode.css");
  
        if (isDarkMode) {
          themeLink.setAttribute("href", "assets/css/style.css");
          localStorage.setItem("theme", "light");
          toggleBtn.textContent = "Dark Mode";
        } else {
          themeLink.setAttribute("href", "assets/css/darkmode.css");
          localStorage.setItem("theme", "dark");
          toggleBtn.textContent = "Light Mode";
        }
      });
    }
  });