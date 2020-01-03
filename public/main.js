function operate(x, operator, y){
    if (operator == '+') {
        return Number(x) + Number(y);
    }
    if (operator == '-') {
        return Number(x) - Number(y);
    }
    if (operator == '*') {
        return Number(x) * Number(y);
    }
    if (operator == '/') {
        if (Number(x) / Number(y) == Infinity)  {
            return 'Really?';
        }
        return Number(x) / Number(y);
    }
}

const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators');
const equalsign = document.querySelector('.equal-sign');
const reset = document.querySelector('.reset');
const dot = document.querySelector('.dot');
const temp = document.querySelector('.temp')
const backspace = document.querySelector('.backspace');

const result = document.querySelector('.result');
const cOperator = document.querySelector('.cOperator');

function addNumberListeners() {
    numbers.forEach((number) => {
        number.addEventListener('click', () => {
            result.innerHTML += number.innerHTML;
        });
    });
}

function addOperatorListeners() {
    operators.forEach((operator) => {
        operator.addEventListener('click', () => {
            if (result.innerHTML != '' && temp.innerHTML != '') {
                const leftSide = result.getAttribute('left-side');
                const rightSide = result.innerHTML;
                const op = cOperator.innerHTML;
                result.innerHTML = operate(leftSide, op, rightSide);
            }
            cOperator.innerHTML = operator.innerHTML;
            result.setAttribute('left-side', `${result.innerHTML}`);
            temp.innerHTML = result.innerHTML;
            result.innerHTML = '';
        })
    });
}


function addDotListener() {
    dot.addEventListener('click', () => {
        let available = dot.getAttribute('available');
        if (result.innerHTML.includes('.')) {
            return;
        }
        else {
            result.innerHTML += '.'
        }
    });
}

function addEqualListener() {
    equalsign.addEventListener('click', () => {
        const leftSide = result.getAttribute('left-side');
        const rightSide = result.innerHTML;
        const op = cOperator.innerHTML;
        result.innerHTML = operate(leftSide, op, rightSide);
    })
}

function addCEListener() {
    reset.addEventListener('click', () => {
        result.setAttribute('left-side', '');
        result.innerHTML = '';
        temp.innerHTML = '';
        cOperator.innerHTML = '';
    })
}

function addBackspaceListener() {
    backspace.addEventListener('click', () => {
        if (result.innerHTML != '') {
            result.innerHTML = result.innerHTML.slice(0, -1);
        }
    })
}

function addListeners() {
    

    // Add number functionality
    addNumberListeners();
    
    // Add operator functionality
    addOperatorListeners();
    
    // Add dot functionality
    addDotListener();

    // Add equal functionality
    addEqualListener();

    // Add clear functionality
    addCEListener();

    // Add backspace functionality
    addBackspaceListener();
}