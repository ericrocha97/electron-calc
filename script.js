var calc = ''
var result = document.getElementById('result')
result.value = '0'


document.addEventListener('keydown', listenkeys);

function listenkeys(e) {
  if (e.code.indexOf('Numpad') == 0) {
    if (e.key == 'Enter') return calculate();
    addChar(e.key);
  } else if (!isNaN(+e.key)) {
    addChar(e.key);
  } else if (
    e.key == '+' ||
    e.key == '-' ||
    e.key == '=' ||
    e.key == '/' ||
    e.key == '.'
  ) {
    clicked(e, e.key);
  } else if (e.key == 'Backspace') {
    backspace() ;
  } else if (e.key == 'C' || e.key == 'c') {
    erase();
  } else if (e.key == 'Enter') {
    calculate();
  }
}


function addChar(char, sym = false) {
    if (sym == false) {
        calc += char.toString()
        result.value = calc
    } else {
        calc += ' ' + char.toString() + ' '
        result.value = calc
    }
}

function erase() {
    calc = ''
    result.value = '0'
}


function backspace() {
  arr = result.value.split('');
  arr.pop();
  if(arr.length === 0) {
    erase()
  }else{
    calc = arr.join('');
    result.value = arr.join('');
  }
  
}

function calculate() {
    if (result.value === '0') {
      result.value = "ERROR"
    }else {
      result.value = eval(calc)
      calc = eval(calc)
    }
}