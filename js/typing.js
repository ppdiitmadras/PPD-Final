document.addEventListener('DOMContentLoaded', function () {
    var words = ["ersonal", "rofessional"];
    var index = 0;
    var speedType = 150; // Adjust the typing speed (milliseconds)
    var speedErase = 200; // Adjust the erasing speed (milliseconds)
    var cursorBlinkSpeed = 1000; // Adjust the cursor blinking speed (milliseconds)

    function typeText() {
      var currentWord = words[index];
      var targetElement = document.getElementById('typing-text');
      var currentText = targetElement.textContent;
      var length = currentText.length;

      if (length < currentWord.length) {
        targetElement.textContent = currentWord.substring(0, length + 1);
        setTimeout(typeText, speedType);
      } else {
        setTimeout(eraseText, speedType * 3); // Pause before erasing
      }
    }

    function eraseText() {
      var targetElement = document.getElementById('typing-text');
      var currentText = targetElement.textContent;
      var length = currentText.length;

      if (length > 0) {
        targetElement.textContent = currentText.substring(0, length - 1);
        setTimeout(eraseText, speedErase); // Adjust the erasing speed
      } else {
        index = (index + 1) % words.length; // Move to the next word
        setTimeout(typeText, speedType); // Start typing the next word
      }
    }

    function blinkCursor() {
      var cursorElement = document.querySelector('.cursor');
      cursorElement.style.visibility = (cursorElement.style.visibility === 'visible') ? 'hidden' : 'visible';
      setTimeout(blinkCursor, cursorBlinkSpeed);
    }

    // Initial start
    setTimeout(typeText, speedType);
    blinkCursor();
  });