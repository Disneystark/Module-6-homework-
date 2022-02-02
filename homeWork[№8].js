//ответ на задание 1 ,(раздел 6.2)
function numbers() {
  let zeros = 0;
  let strs = 0;
  let countables = 0;
  let uncountables = 0;
  let nulls = 0;
  let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, null, "dog"];
  for (i = 0; i < array.length; i++) {
    if (typeof array[i] == "string") {
      strs++;
    } else if (array[i] == 0) {
      zeros++;
    } else if (array[i] == nulls) {
      nulls++;
    } else if (array[i] % 2 == 0) countables++;
    else {
      uncountables++;
    }
  }
  alert(
    `Нулей - ${zeros} \n Строк - ${strs} \n Нуллов - ${nulls} \n Четных - ${countables} \n Нечетных - ${uncountables}`
  );
}
numbers();

//ответ на задание 2

function prime(n) {
  let _true = "число простое",
    _false = "число не простое";
  if (n === 1) {
    return _false;
  } else if (n === 2) {
    return _true;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return _false;
    }
    return _true;
  }
}

console.log(prime(2));

//ответ на задание 3
function add(b) {
  return function (a) {
    return a + b;
  };
}

const result = add(5)(6);

console.log(result);

//ответ на Задание 4.
function arrNumbers(a, b) {
  let current = a;

  let timerId = setInterval(function () {
    alert(current);
    if (current == b) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}

arrNumbers(1, 15);

//ответ на задание 5

const  pow  =(x, n)=> {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
  alert( pow(x, n) );
}