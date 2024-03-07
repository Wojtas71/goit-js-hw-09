function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
  const startBtn = document.querySelector('[data-start]');
  const stopBtn = document.querySelector('[data-stop]');
  const body = document.body;

  
  function changeBackgroundColor() {
    body.style.backgroundColor = getRandomHexColor();
    setTimeout(changeBackgroundColor, 1000);
  }
  
  startBtn.addEventListener('click', function() {
    startBtn.disabled = true; 
    stopBtn.disabled = false; 
    changeBackgroundColor();
  });
  
  stopBtn.addEventListener('click', function() {
    startBtn.disabled = false; 
    stopBtn.disabled = true; 
  });
