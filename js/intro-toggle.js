// Select all .option elements
const options = document.querySelectorAll(".option");

// Select all .text elements
const texts = document.querySelectorAll(".text");

// If nothing is found, stop here to avoid JS error
if (options.length > 0 && texts.length > 0) {
  options.forEach(option => {
    option.addEventListener("click", () => {

      // Remove active class from all options
      options.forEach(opt => opt.classList.remove("is--active"));

      // Add active class to clicked option
      option.classList.add("is--active");

      // Get the target class name from data-target
      const targetClass = option.getAttribute("data-target");

      // Hide all text blocks
      texts.forEach(text => text.classList.remove("is--visible"));

      // Show the matching one
      const targetText = document.querySelector(`.text.${targetClass}`);
      if (targetText) {
        targetText.classList.add("is--visible");
      }
    });
  });
}
