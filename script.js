function moveRandomEl(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
  elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function (e) {
  moveRandomEl(e.target);
});

function setOutputText() {
  // Get URL parameters
  const params = new URLSearchParams(window.location.search);

  // Get the name parameter from the URL
  const nameParam = params.get('name');
  const name = nameParam ? 'Do you love me? 😊 ' + nameParam : 'Do you love me? 😊';

  // Find the element with the specific ID and set its text content
  const outputElement = document.getElementById('output');
  if (outputElement) {
    outputElement.textContent = name;
  }
}

