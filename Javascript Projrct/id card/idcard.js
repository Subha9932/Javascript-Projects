// Function to handle card generation
function generateCard() {
  var name = document.getElementById("name").value;
  var id = document.getElementById("id").value;
  var lo = document.getElementById("lo").value;
  var image = document.getElementById("image").files[0];

  var cardName = document.getElementById("cardName");
  var cardId = document.getElementById("cardId");
  var cardLo = document.getElementById("cardLo");
  var cardImage = document.getElementById("cardImage");

  // Update card details
  cardName.innerHTML = name;
  cardId.innerHTML = "Collage Name: " + id;
  cardLo.innerHTML = "Location: " + lo;
  if (image) {
    var reader = new FileReader();

    reader.onload = function (e) {
      cardImage.src = e.target.result;
    };

    reader.readAsDataURL(image);
  } else {
    cardImage.src = "";
  }
}

// Event listener for the Generate Card button
document.getElementById("generateCardButton").addEventListener("click", generateCard);
