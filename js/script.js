const counters = document.querySelectorAll('.counter');
        let started = false;
      
        function runCounters() {
          if (!started && window.scrollY + window.innerHeight > document.getElementById("stats").offsetTop) {
            started = true;
            counters.forEach(counter => {
              const target = +counter.getAttribute('data-target');
              let count = 0;
      
              const update = () => {
                const increment = target / 50;
                count += increment;
                if (count < target) {
                  counter.textContent = Math.ceil(count);
                  requestAnimationFrame(update);
                } else {
                  counter.textContent = target;
                }
              };
              update();
            });
          }
        }
      
        window.addEventListener('scroll', runCounters);
        // Typing Animation
const typingText = document.querySelector('.typing-text');
const words = ["Web Designer", "UI/UX Designer", "Photographer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isEnd = false;

function type() {
  const currentWord = words[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);
  typingText.textContent = currentChar;
  
  if (!isDeleting && charIndex < currentWord.length) {
    // Typing
    charIndex++;
    setTimeout(type, 100);
  } else if (isDeleting && charIndex > 0) {
    // Deleting
    charIndex--;
    setTimeout(type, 50);
  } else {
    // Change word
    isDeleting = !isDeleting;
    if (!isDeleting) {
      wordIndex = (wordIndex + 1) % words.length;
    }
    setTimeout(type, 1000);
  }
}
//typing animation 
document.addEventListener("DOMContentLoaded", () => {
    const typingElement = document.querySelector(".typing");
    const words = ["Web Designer", "Photographer","Freelancer"]; // Words to type
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
  
    function type() {
      const currentWord = words[wordIndex];
      const currentText = currentWord.substring(0, charIndex);
      typingElement.textContent = currentText;
  
      if (!isDeleting && charIndex < currentWord.length) {
        // Typing
        charIndex++;
        setTimeout(type, 100); // Typing speed
      } else if (isDeleting && charIndex > 0) {
        // Deleting
        charIndex--;
        setTimeout(type, 50); // Deleting speed
      } else {
        // Switch to the next word
        if (!isDeleting) {
          isDeleting = true;
          setTimeout(type, 1000); // Pause before deleting
        } else {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length; // Loop through words
          setTimeout(type, 500); // Pause before typing the next word
        }
      }
    }
  
    type();
  });

  //switching between dark and light mode
  document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;
  
    darkModeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
  
      // Toggle between moon and sun icons
      if (body.classList.contains("dark-mode")) {
        darkModeToggle.classList.remove("fa-moon");
        darkModeToggle.classList.add("fa-sun");
      } else {
        darkModeToggle.classList.remove("fa-sun");
        darkModeToggle.classList.add("fa-moon");
      }
    });
  });

  //smooth scrolling when navigating to sections
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  //implementing the search bar functionality
  document.addEventListener("DOMContentLoaded", function () {
    // Search feature
    const searchToggle = document.getElementById("search-toggle");
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("search-input");
    const searchClose = document.getElementById("search-close");
  
    searchToggle.addEventListener("click", function (e) {
      e.preventDefault();
      searchForm.style.display = "flex";
      searchInput.focus();
    });
  
    searchClose.addEventListener("click", function () {
      searchForm.style.display = "none";
      searchInput.value = "";
    });
  
    document.addEventListener("mousedown", function (e) {
      if (
        searchForm.style.display === "flex" &&
        !searchForm.contains(e.target) &&
        e.target !== searchToggle
      ) {
        searchForm.style.display = "none";
        searchInput.value = "";
      }
    });
  
    // Enhanced search: scroll to section if found
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const value = searchInput.value.trim().toLowerCase();
      const sectionMap = {
        "home": "hero",
        "hero": "hero",
        "about": "about",
        "services": "services",
        "portfolio": "portfolio",
        "contact": "contact",
        "skills": "skills",
        "success": "success-work",
        "success work": "success-work",
        "banner": "green-banner"
      };
      let found = false;
      for (const key in sectionMap) {
        if (value === key) {
          const section = document.getElementById(sectionMap[key]);
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            found = true;
            break;
          }
        }
      }
      if (!found) {
        alert("Section not found!");
      }
      searchForm.style.display = "none";
      searchInput.value = "";
    });
  });

  // Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileNavToggle = document.createElement('div');
    mobileNavToggle.className = 'mobile-nav-toggle';
    mobileNavToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('.navbar .container').appendChild(mobileNavToggle);
    
    const navLinks = document.querySelector('.nav-links');
    
    mobileNavToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      mobileNavToggle.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileNavToggle.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });
  });