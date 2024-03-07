function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
  const startBtn = document.querySelector('[data-start]');
  const stopBtn = document.querySelector('[data-stop]');
  const body = document.body;
  let continueChangingColor = true;

  
  function changeBackgroundColor() {
    if (!continueChangingColor) {
      return;}
    body.style.backgroundColor = getRandomHexColor();
    setTimeout(changeBackgroundColor, 1000);
  }
  
  startBtn.addEventListener('click', function() {
    startBtn.disabled = true; 
    stopBtn.disabled = false; 
    continueChangingColor = true;
    changeBackgroundColor();
  });
  
  stopBtn.addEventListener('click', function() {
    startBtn.disabled = false; 
    stopBtn.disabled = true; 
    continueChangingColor = false;
  });
