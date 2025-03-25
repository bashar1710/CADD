// Initialize Charts and Search
let contentChart, activityChart;
let searchTimeout = null;

document.addEventListener('DOMContentLoaded', function() {
  // Initialize navigation
  // Initialize navigation with active state and smooth scrolling
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove active class from all links
      navLinks.forEach(link => link.classList.remove('active'));
      
      // Add active class to clicked link
      this.classList.add('active');
      
      // Smooth scroll to section
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });


  // Handle search functionality
  // Initialize search functionality with theme colors
  const searchInput = document.getElementById('search');
  if (searchInput) {
    searchInput.style.backgroundColor = '#f5f5f5'; // Light background
    searchInput.style.color = '#333'; // Dark text
    searchInput.style.borderColor = '#ff5722'; // Primary color
    
    searchInput.addEventListener('input', function() {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        const query = this.value.toLowerCase();
        // Implement search functionality here
      }, 300);
    });
  }


  // Other initialization code...
});
