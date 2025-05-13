// Store user preference
function savePreference() {
  const theme = document.querySelector('input[name="theme"]:checked').value;
  localStorage.setItem('userTheme', theme);
}

// Retrieve user preference
function loadPreference() {
  const theme = localStorage.getItem('userTheme');
  if (theme) {
    document.body.classList.add(theme); // Adds the saved theme class to body
  }
}