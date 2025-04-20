var messageBox = document.getElementById('messageBox');
var charCount = document.getElementById('charCount');
var errorMsg = document.getElementById('errorMsg');
var maxChars = 200;

messageBox.addEventListener('input', () => {
    const text = messageBox.value;

    if (text.length > maxChars) {
      messageBox.value = text.substring(0, maxChars);
      errorMsg.style.display = 'block';
    } else {
      errorMsg.style.display = 'none';
    }

    charCount.textContent = `${messageBox.value.length} / ${maxChars} characters`;
  }); 