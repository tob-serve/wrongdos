// DOM Elements
const messageBanner = document.getElementById('messageBanner');
const signinForm = document.getElementById('signinForm');
const forgotBtn = document.getElementById('forgotBtn');
const oldServicesBtn = document.getElementById('oldServicesBtn');

// Helper to show banners
function showMessage(text, type) {
  messageBanner.innerText = text;
  messageBanner.className = `message-banner ${type}`;
  messageBanner.style.display = 'block';
}

function clearMessageBanner() {
  messageBanner.style.display = 'none';
  messageBanner.innerText = '';
}

// Forgot Password Link Click Handler
forgotBtn.addEventListener('click', (e) => {
  e.preventDefault();
  showMessage('Reset instructions have been sent to your email.', 'success');
});

// Old Services Link Click Handler
oldServicesBtn.addEventListener('click', (e) => {
  e.preventDefault();
  showMessage('Redirecting to legacy systems...', 'success');
});

// Password Visibility Toggle
document.querySelectorAll('.password-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const passwordInput = document.getElementById(targetId);
    
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      // Change icon to Eye Off
      button.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
          <line x1="1" y1="1" x2="23" y2="23"></line>
        </svg>
      `;
    } else {
      passwordInput.type = 'password';
      // Change icon to Eye Open
      button.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      `;
    }
  });
});

// Form Submission Handler
signinForm.addEventListener('submit', (e) => {
  e.preventDefault();
  clearMessageBanner();

  const usernameVal = document.getElementById('signinUsername').value;
  const passwordVal = document.getElementById('signinPassword').value;

  // Simple credential check
  if (usernameVal === 'account1' && passwordVal === 'rosery95') {
    // Redirect to home page
    window.location.href = 'home.html';
    return;
  }
  
  if (passwordVal.length < 6) {
    showMessage('Validation Error: Password must be at least 6 characters.', 'error');
    return;
  }

  // Button spinner simulation
  const btn = document.getElementById('signinBtn');
  const btnText = btn.querySelector('.btn-text');
  const spinner = btn.querySelector('.spinner');

  btn.disabled = true;
  btnText.style.opacity = '0';
  spinner.style.display = 'block';

  setTimeout(() => {
    btn.disabled = false;
    btnText.style.opacity = '1';
    spinner.style.display = 'none';
    
    showMessage(`Success: Welcome back, ${usernameVal}!`, 'success');
    signinForm.reset();
  }, 1200);
});
