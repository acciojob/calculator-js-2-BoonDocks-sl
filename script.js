const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const buttonText = button.innerText;

    if (buttonText === '.' && display.value.includes('.')) {
      return;
    }

    switch (button.id) {
      case 'C':
        display.value = '';
        break;
      case 'back':
        display.value = display.value.slice(0, -1);
        break;
      case 'equal':
        try {
          display.value = eval(display.value);
        } catch (error) {
          display.value = 'Error';
        }
        break;
      default:
        display.value += buttonText;
    }
  });
});