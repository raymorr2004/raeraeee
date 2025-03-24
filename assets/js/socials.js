document.addEventListener("DOMContentLoaded", function () {
    const socialBoxes = document.querySelectorAll(".social-link");
  
    socialBoxes.forEach((box) => {
      const img = box.querySelector("img");
      const header = box.querySelector("h4");
  
      // Toggle expansion on click of either image or header
      [img, header].forEach((element) => {
        element.addEventListener("click", function (e) {
          e.stopPropagation();
          box.classList.toggle("expanded");
        });
      });
    });
  });