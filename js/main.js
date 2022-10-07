const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equal]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousoperandTextElement = document.querySelector(
	'[data-previous-operand]'
);
const currentoperandTextElement = document.querySelector(
	'[data-current-operand]'
);

const theme1 = document.getElementById(1);
const theme2 = document.getElementById(2);
const theme3 = document.getElementById(3);

const inputs = document.querySelector('.inputs');
const screen = document.querySelector('.calculator-screen');
const themeChanger = document.querySelector('.theme-changer');
const calculatorKeys = document.querySelector('.calculator-keys');
const eqalSign = document.querySelector('.equal-sign');
const deleteKey = document.querySelector('.delete');
const resetKey = document.querySelector('.reset');
const key7 = document.getElementById(700);
const key8 = document.getElementById(800);
const key9 = document.getElementById(900);
const key4 = document.getElementById(400);
const key5 = document.getElementById(500);
const key6 = document.getElementById(600);
const key1 = document.getElementById(100);
const key2 = document.getElementById(200);
const key3 = document.getElementById(300);
const key111 = document.getElementById(111);
const key222 = document.getElementById(222);
const key333 = document.getElementById(333);
const key444 = document.getElementById(444);
const key555 = document.getElementById(555);
const key666 = document.getElementById(666);

theme1.addEventListener('change', () => {
	theme1Function();
});

theme2.addEventListener('change', () => {
	theme2Function();
});

theme3.addEventListener('change', () => {
	theme3Function();
});

const theme1Function = () => {
	document.body.classList.remove('theme2');
	inputs.classList.remove('theme2');
	screen.classList.remove('theme2');
	themeChanger.classList.remove('theme2');
	calculatorKeys.classList.remove('theme2');
	eqalSign.classList.remove('theme2');
	deleteKey.classList.remove('theme2');
	resetKey.classList.remove('theme2');
	inputs.classList.remove('theme2');
	theme1.classList.remove('theme2');
	theme2.classList.remove('theme2');
	theme3.classList.remove('theme2');
	document.body.classList.remove('theme3');
	inputs.classList.remove('theme3');
	screen.classList.remove('theme3');
	themeChanger.classList.remove('theme3');
	calculatorKeys.classList.remove('theme3');
	eqalSign.classList.remove('theme3');
	deleteKey.classList.remove('theme3');
	resetKey.classList.remove('theme3');
	inputs.classList.remove('theme3');
	theme1.classList.remove('theme3');
	theme2.classList.remove('theme3');
	theme3.classList.remove('theme3');
	key7.classList.remove('theme3');
	key8.classList.remove('theme3');
	key9.classList.remove('theme3');
	key4.classList.remove('theme3');
	key5.classList.remove('theme3');
	key6.classList.remove('theme3');
	key1.classList.remove('theme3');
	key2.classList.remove('theme3');
	key3.classList.remove('theme3');
	key111.classList.remove('theme3');
	key222.classList.remove('theme3');
	key333.classList.remove('theme3');
	key444.classList.remove('theme3');
	key555.classList.remove('theme3');
	key666.classList.remove('theme3');
};

const theme2Function = () => {
	document.body.classList.remove('theme3');
	inputs.classList.remove('theme3');
	screen.classList.remove('theme3');
	themeChanger.classList.remove('theme3');
	calculatorKeys.classList.remove('theme3');
	eqalSign.classList.remove('theme3');
	deleteKey.classList.remove('theme3');
	resetKey.classList.remove('theme3');
	inputs.classList.remove('theme3');
	theme1.classList.remove('theme3');
	theme2.classList.remove('theme3');
	theme3.classList.remove('theme3');
	key7.classList.remove('theme3');
	key8.classList.remove('theme3');
	key9.classList.remove('theme3');
	key4.classList.remove('theme3');
	key5.classList.remove('theme3');
	key6.classList.remove('theme3');
	key1.classList.remove('theme3');
	key2.classList.remove('theme3');
	key3.classList.remove('theme3');
	key111.classList.remove('theme3');
	key222.classList.remove('theme3');
	key333.classList.remove('theme3');
	key444.classList.remove('theme3');
	key555.classList.remove('theme3');
	key666.classList.remove('theme3');
	document.body.classList.add('theme2');
	inputs.classList.add('theme2');
	screen.classList.add('theme2');
	themeChanger.classList.add('theme2');
	calculatorKeys.classList.add('theme2');
	eqalSign.classList.add('theme2');
	deleteKey.classList.add('theme2');
	resetKey.classList.add('theme2');
	inputs.classList.add('theme2');
	theme1.classList.add('theme2');
	theme2.classList.add('theme2');
	theme3.classList.add('theme2');
};

const theme3Function = () => {
	document.body.classList.remove('theme2');
	inputs.classList.remove('theme2');
	screen.classList.remove('theme2');
	themeChanger.classList.remove('theme2');
	calculatorKeys.classList.remove('theme2');
	eqalSign.classList.remove('theme2');
	deleteKey.classList.remove('theme2');
	resetKey.classList.remove('theme2');
	inputs.classList.remove('theme2');
	theme1.classList.remove('theme2');
	theme2.classList.remove('theme2');
	theme3.classList.remove('theme2');
	document.body.classList.add('theme3');
	inputs.classList.add('theme3');
	screen.classList.add('theme3');
	themeChanger.classList.add('theme3');
	calculatorKeys.classList.add('theme3');
	eqalSign.classList.add('theme3');
	deleteKey.classList.add('theme3');
	resetKey.classList.add('theme3');
	inputs.classList.add('theme3');
	theme1.classList.add('theme3');
	theme2.classList.add('theme3');
	theme3.classList.add('theme3');
	key7.classList.add('theme3');
	key8.classList.add('theme3');
	key9.classList.add('theme3');
	key4.classList.add('theme3');
	key5.classList.add('theme3');
	key6.classList.add('theme3');
	key1.classList.add('theme3');
	key2.classList.add('theme3');
	key3.classList.add('theme3');
	key111.classList.add('theme3');
	key222.classList.add('theme3');
	key333.classList.add('theme3');
	key444.classList.add('theme3');
	key555.classList.add('theme3');
	key666.classList.add('theme3');
};

let currentoperand = '';
let previousoperand = '';
let operation = undefined;

const calculate = () => {
	let operate;
	if (!previousoperand || !currentoperand) {
		return;
	}

	const previous = parseFloat(previousoperand);
	const current = parseFloat(currentoperand);

	if (isNaN(previous || isNaN(current))) {
		return;
	}

	switch (operation) {
		case '+':
			operate = previous + current;
			break;
		case '-':
			operate = previous - current;
			break;
		case '×':
			operate = previous * current;
			break;
		case '/':
			if (current === 0) {
				clearCalculator();
				return;
			}
			operate = previous / current;
			break;
		default:
			break;
	}

	currentoperand = operate;
	operation = undefined;
	previousoperand = '';
};

const choseOperation = (operator) => {
	if (currentoperand === '') {
		return;
	}
	if (previousoperand !== '') {
		const previous = previousoperand.innerText;
		if (
			currentoperand.toString() === '0' &&
			previous[previous.length - 1] === '/'
		) {
			clearCalculator();
			return;
		}
		calculate();
	}
	operation = operator;
	previousoperand = currentoperand;
	currentoperand = '';
};

const actualResult = () => {
	currentoperandTextElement.innerText = currentoperand;
	if (operation != null) {
		previousoperandTextElement.innerText = previousoperand + operation;
	} else {
		previousoperandTextElement.innerText = '';
	}
};

const addNumber = (number) => {
	if (number === '•') {
		if (currentoperand.includes('.')) {
			return;
		}
		number = '.';
	}

	currentoperand = currentoperand.toString() + number.toString();
};

const deleteNumber = () => {
	currentoperand = currentoperand.toString().slice(0, -1);
};
numberButtons.forEach((number) => {
	number.addEventListener('click', () => {
		addNumber(number.innerText);
		actualResult();
	});
});

const clearCalculator = () => {
	currentoperand = '';
	previousoperand = '';
	operation = undefined;
};

deleteButton.addEventListener('click', () => {
	deleteNumber();
	actualResult();
});

operationButtons.forEach((operator) => {
	operator.addEventListener('click', () => {
		choseOperation(operator.innerText);
		actualResult();
	});
});

operationButtons.forEach((operator) => {
	operator.addEventListener('click', () => {
		choseOperation(operator.innerText);
		actualResult();
	});
});

equalsButton.addEventListener('click', () => {
	calculate();
	actualResult();
});

allClearButton.addEventListener('click', () => {
	clearCalculator();
	actualResult();
});
