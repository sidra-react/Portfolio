
// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Get the animated text element
  const animatedText = document.querySelector('.animated-text');
  // Get the logo element
  const logo = document.getElementById('logo');
  
  // Add animationend event listener to the animated text
  animatedText.addEventListener('animationend', function() {
    // Show the logo
    logo.style.display = 'block';
  });

  // Get the button element
  var viewPortfolioBtn = document.getElementById("view-portfolio-btn");

  // Add click event listener to the button
  viewPortfolioBtn.addEventListener("click", function() {
    // Redirect to index2.html
    window.location.href = "index2.html";
  });
});