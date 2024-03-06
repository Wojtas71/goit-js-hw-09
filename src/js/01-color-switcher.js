function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
  const startBtn = document.querySelector('[data-start]');
  const stopBtn = document.querySelector('[data-stop]');
  const body = document.body;
  let intervalId = null;
  
  function changeBackgroundColor() {
    body.style.backgroundColor = getRandomHexColor();
  }
  
  startBtn.addEventListener('click', () => {
    intervalId = setInterval(changeBackgroundColor, 1000); 
    startBtn.disabled = true; 
    stopBtn.disabled = false; 
  });
  
  stopBtn.addEventListener('click', () => {
    clearInterval(intervalId); 
    startBtn.disabled = false; 
    stopBtn.disabled = true; 
  });
