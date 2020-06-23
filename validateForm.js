const form = document.querySelector('form');
const inputContainer = document.querySelector('.input-container')
const textInput = inputContainer.firstElementChild;

function validateNotEmpty(s) {
	return s.length !== 0;
}

function validateEmailFormat(s) {
	let pattern = /(\w+)@(\w+)\.(\w+)/g;
	return pattern.test(s);
}

function appendError(msg) {
	const childError = document.createElement('p');
	const text = document.createTextNode(msg);
	childError.appendChild(text);
	childError.style.color = 'var(--bright-red)';
	inputContainer.appendChild(childError);
}

function clearError() {
	const listChild = inputContainer.children;
	if (listChild.length > 1) {
		inputContainer.removeChild(listChild[1]);
	}
}

function onSubmit(e) {
	const s = textInput.value;
	clearError();
	if (!validateNotEmpty(s)) {
		appendError('Input cannot be empty');
	} else if (!validateEmailFormat(s)) {
		appendError('Please insert a valid email');
	}

	e.preventDefault()
}

form.addEventListener('submit', onSubmit);