// IP address to show the popup
const targetIP = ' IP Here 
';

// Function to check if the current IP matches the target IP
function checkIP() {
  // Fetching the IP address using a third-party service
  fetch('https://api.ipify.org/?format=json')
    .then(response => response.json())
    .then(data => {
      const currentIP = data.ip;
      if (currentIP === targetIP) {
        showPopup();
      }
    })
    .catch(error => {
      console.error('Error fetching IP:', error);
    });
}

// Function to show the popup
function showPopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'flex';
}

// Function to close the popup
function closePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
}

// Checking the IP on page load
window.addEventListener('load', checkIP);
