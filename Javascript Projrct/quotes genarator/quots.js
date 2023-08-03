// Define quotes and colors
var quotes = [
  "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
  "The way to get started is to quit talking and begin doing. -Walt Disney",
  "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs",
   "If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt",
 "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey",
 "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",
 "Life is what happens when you're busy making other plans. -John Lennon",
  // Add more quotes as needed
];

var colors = [
  "morning",
  "afternoon",
  "evening",
  // Add more colors as needed
];

// Function to get the time of day
function getTimeOfDay() {
  var currentHour = new Date().getHours();

  if (currentHour >= 5 && currentHour < 12) {
    return "morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    return "afternoon";
  } else {
    return "evening";
  }
}

// Function to generate a random quote and color
function generateRandomQuote() {
  var randomQuoteIndex = Math.floor(Math.random() * quotes.length);
  var randomColorIndex = Math.floor(Math.random() * colors.length);

  var randomQuote = quotes[randomQuoteIndex];
  var randomColor = colors[randomColorIndex];
  var timeOfDay = getTimeOfDay();

  document.getElementById("title").innerHTML = "Let's start our " + timeOfDay + " with a new quote";
  document.getElementById("quote").innerHTML = randomQuote;

  // Apply theme based on the time of day
  document.body.className = randomColor;
  document.getElementById("newQuoteButton").className = randomColor;
}

// Generate initial quote on page load
generateRandomQuote();

// Event listener for the New Quote button
document.getElementById("newQuoteButton").addEventListener("click", generateRandomQuote);
