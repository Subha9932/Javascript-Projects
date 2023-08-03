window.onload = function() {
  var clock = document.getElementById('clock');
  var date = document.getElementById('date');
  var startBtn = document.getElementById('startBtn');
  var stopBtn = document.getElementById('stopBtn');
  var timerId;

  // Function to update the clock and date display
  function updateClock() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var day = currentTime.getDate();
    var month = currentTime.getMonth() + 1;
    var year = currentTime.getFullYear();

    // Add leading zeros if necessary
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    month = (month < 10) ? "0" + month : month;
    day = (day < 10) ? "0" + day : day;

    // Display the current time and date
    clock.textContent = hours + ":" + minutes + ":" + seconds;
    date.textContent = day + "/" + month + "/" + year;
  }

  // Event listener for the start button
  startBtn.addEventListener('click', function() {
    // Update the clock every second
    timerId = setInterval(updateClock, 1000);
  });

  // Event listener for the stop button
  stopBtn.addEventListener('click', function() {
    // Clear the interval to stop updating the clock
    clearInterval(timerId);
  });

  // Initial clock update
  updateClock();
};
