let currentInput 	= "";
let currentOperator = "";

function clearinput()
{
	currentInput 	= '';
	currentOperator = '';

	document.getElementById('result').value = '';
}

function appendNumber(number)
{
	currentInput += number;

	document.getElementById('result').value = currentInput;
}

function add()
{
	currentOperator = "+";

	currentInput += currentOperator;

	document.getElementById('result').value = currentInput;
}

function minus()
{
	currentOperator = "-";

	currentInput += currentOperator;

	document.getElementById('result').value = currentInput;
}

function multiply()
{
	currentOperator = "*";

	currentInput += currentOperator;

	document.getElementById('result').value = currentInput;
}

function divide()
{
	currentOperator = "/";

	currentInput += currentOperator;

	document.getElementById('result').value = currentInput;
}

function calculate()
{
	const result = eval(currentInput);
	console.log(result);

	document.getElementById('result').value = result;
	currentInput.toString();
	currentOperator = '';
}