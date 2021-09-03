function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4) {
        return pin;
    }else{
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('get-number').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
    }else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
    
})

function submit() {
    const pin = document.getElementById('get-number').value;
    const calcInput = document.getElementById('typed-numbers').value;
    const pinFail = document.getElementById('pin-fail');
    const pinSuccess = document.getElementById('pin-success');

    if(pin == calcInput) {
        pinSuccess.style.display = 'block';
        pinFail.style.display = 'none';
    }else {
        pinFail.style.display = 'block';
        pinSuccess.style.display = 'none';
    }
}

