// timer.js

// Check if the user joined the server before
const joinTime = sessionStorage.getItem('joinTime');

if (!joinTime) {
  // If not, set the join time
  const currentTime = new Date().getTime();
  sessionStorage.setItem('joinTime', currentTime);
}

// Function to get the elapsed time since joining
function getElapsedTime() {
  const joinTime = sessionStorage.getItem('joinTime');

  if (joinTime) {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - parseInt(joinTime, 10);
    return elapsedTime;
  } else {
    return 0;
  }
}

// Function to format milliseconds into a readable format
function formatTime(milliseconds) {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
}

// Function to update the timer display
function updateTimer() {
  const timerElement = document.getElementById('timer');

  if (timerElement) {
    const elapsedTime = getElapsedTime();
    timerElement.textContent = formatTime(elapsedTime);
  }
}

// Update the timer every second
setInterval(updateTimer, 1000);
