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
    // Handle empty input
    if (display.value === '') {
      display.value = '0';
    }
    // Add a condition to handle the "+" operator
    if (display.value.includes('+')) {
      const operands = display.value.split('+');
      if (operands.length === 2) {
        const result = parseFloat(operands[0]) + parseFloat(operands[1]);
        display.value = result.toString();
      }
    } else {
      display.value = eval(display.value);
    }
  } catch (error) {
    display.value = 'Error';
  }
  break;

      default:
        display.value += buttonText;
    }
  });
});
