document.addEventListener('DOMContentLoaded', () => {
  
  // --- MODULE 1: DARK / LIGHT ENGINE CONTROLLER ---
  const themeToggle = document.getElementById('themeToggle');
  const currentTheme = localStorage.getItem('theme') || 'light';

  // Apply cache configurations initialization
  document.documentElement.setAttribute('data-theme', currentTheme);
  lucide.createIcons(); 

  themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    let targetTheme = (theme === 'dark') ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);

    lucide.createIcons();
  });


  // --- MODULE 2: RESPONSIVE BURGER HAMBURGER NAV CONTEXT ---
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinkItems = document.querySelectorAll('.nav-link-item');

  function closeMobileMenu() {
    menuToggle.classList.remove('active');
    navMenu.classList.remove('active');
  }

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Structural drop listeners to collapse screen overlays upon jumping blocks
  navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
      
      // Update clean highlight target arrays natively
      navLinkItems.forEach(item => item.classList.remove('active'));
      link.classList.add('active');
    });
  });


  // --- MODULE 3: INTERACTIVE PROJECTS PORTFOLIO FILTER ---
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove selection classes safely
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'block';
          // Quick layout fade animation
          setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'scale(1)'; }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => { card.style.display = 'none'; }, 300);
        }
      });
    });
  });


  // --- MODULE 4: LIVE ACCESSIBLE CONTACT FORM VALIDATION ---
  const form = document.getElementById('portfolioContactForm');
  const nameInput = document.getElementById('clientName');
  const emailInput = document.getElementById('clientEmail');
  const messageInput = document.getElementById('clientMessage');
  const successBanner = document.getElementById('formSuccessMessage');

  // Strict structural formatting parameters
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  function validateInputField(inputElement, condition) {
    const parentGroup = inputElement.parentElement;
    if (condition) {
      parentGroup.classList.remove('invalid');
      return true;
    } else {
      parentGroup.classList.add('invalid');
      return false;
    }
  }

  // Real-time keyboard checking functions to clear errors on typing
  nameInput.addEventListener('input', () => validateInputField(nameInput, nameInput.value.trim() !== ''));
  emailInput.addEventListener('input', () => validateInputField(emailInput, emailRegex.test(emailInput.value.trim())));
  messageInput.addEventListener('input', () => validateInputField(messageInput, messageInput.value.trim() !== ''));

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Stop raw data reloads

    const isNameValid = validateInputField(nameInput, nameInput.value.trim() !== '');
    const isEmailValid = validateInputField(emailInput, emailRegex.test(emailInput.value.trim()));
    const isMessageValid = validateInputField(messageInput, messageInput.value.trim() !== '');

    if (isNameValid && isEmailValid && isMessageValid) {
      // Form execution simulates delivery
      successBanner.style.display = 'block';
      form.reset();
      
      // Clear valid class flags
      setTimeout(() => { successBanner.style.display = 'none'; }, 5000);
    }
  });
});

