// Get the input box and buttons
const inputBox = document.getElementById('inputBox');
const buttons = document.querySelectorAll('.button');

// Add event listeners to the buttons
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        // Get the clicked button's text content
        const buttonText = event.target.textContent;
        // Handle different button types
        switch (buttonText) {
            case 'AC':
                // Clear the input box
                inputBox.value = '';
                break;
            case 'DEL':
                // Delete the last character from the input box
                inputBox.value = inputBox.value.slice(0, -1);
                break;
            case '=':
                // Evaluate the expression in the input box
                try {
                    inputBox.value = eval(inputBox.value);
                } catch (error) {
                    inputBox.value = 'Error';
                }
                break;
            default:
                // Append the clicked button's text content to the input box
                inputBox.value += buttonText;
        }
    });
});
