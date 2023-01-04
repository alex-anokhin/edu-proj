//Пишем в тег <script>
//document.write("Hello world!");
//Пишем в консоль
//console.log("Hello World! LOG");
//console.info("Hello World! INFO");
//console.error("Hello World! ERROR");
//console.warn("Hello World! WARNING");

//ПЕРЕМЕННЫЕ

//объявляем переменную:
//var num = 12;
//выводим переменную в консоль:
//console.log(num)
//объеденяем переменную со строкой:
//console.log("Переменная: " + num + ".")

//ПОСТОЯННЫЕ

//объявляем константу и выводим в консоль:
//const number = 3;
//console.log(number)

//арифметические операции с постоянными и переменными и вывод результата в консоль:
//var result = num / number;
//console.log(result);

//типы данных числовой, строчный, логический:
//var num_1 = 5;
//var num_2 = "Hello World";
//var num_3 = true;
//console.log(num_1, num_2, num_3)

//математические операции

//var num_1 = 13;
//var num_2 = 7;
//var res = num_1 - num_2

//вывод результата высичлений в консоль через создание переменной
//console.log("Вычитание: " + res);

//вычисление результата внутри консоли
//console.log("Вычитание: " + (num_1-num_2));

//var num_3;
//num_3 = 6;
//прибавить 1:
//num_3++;
//вычесть 1:
//num_3--;
//умножить на 2:
//num_3 *= 2;
//разделить на 2:
//num_3 /= 2;

//console.log(num_3);

//var str_1 = "Hello";
//var str_2 = "World";
//console.log("Сложение строк: " + (str_1 + " " + str_2 + "!"));

//трансформация строчного значения в числовое:
//var str_1 = Number("5");
//var str_2 = Number("7");
//console.log("Сложение строк: " + (str_1 + str_2));

//console.log("Pi: " + Math.PI);
//console.log("Exp: " + Math.E);
//console.log("Min: " + Math.min(2, 5, -3));
//console.log("2^3 = " + Math.pow(2, 3))


//Условные конструкции

// var num_1 = 15;
// var num_2 = true;

//последовательность условий:
/* if (num_1 == 5) {
    console.log("Equal 5")
} else if (num_1 < 5) {
    console.log("Less 5")
} else {
    console.log("More 5")
} */


//короткая форма сравнения с ИСТИНА
/* if (num_2) {
    console.log("TRUE")
} */
//короткая форма сравнения с ЛОЖЬ
/* if (!num_2)
{
    console.log("TRUE")
} else {
    console.log("FALSE")
} */

// Комбинация из условий
// ИЛИ
/* num_1 = 1;
if (num_1 < 2 || !num_2)
{
    console.log("YES")
} else {
    console.log("NO")
}

// И
num_1 = 1;
if (num_1 < 2 && num_2 == true)
{
    console.log("YES")
} else {
    console.log("NO")
} */




//МАССИВЫ

/*var arr = [1, 43, 0, -5, "do", false, 5, -84];
console.log(arr);

var matrix = [[1, 1, 1,], [1, 1, 1,], [1, 1, 1,]];
console.log(matrix);*/



//ЦИКЛЫ
/* FOR (переменная, условие до которого выполнять, что делать с переменной) {
    что делать каждый раз;
}*/

/* for (var i = 100; i > 5; i /= 2) {
    console.log(i);
}

for (var i = 1; i <= 10; i++) {
    console.log(i);
}*/

// for (var i = 10; i <= 20; i += 2) {
//     if (i > 15)
//     break;
//     console.log(i);
// }

// for (var i = 10; i <= 20; i ++) {
//     if (i % 2 == 0)
//     continue;
//     console.log(i);
// }

//WHILE
/*
var j = 1000;
while (j >= 100) {
    console.log(j);
    j -=100;
}*/

//DO WHILE

/*var d = 100;
do {
    console.log(d);
} while (d < 50);*/



//ВСПЛЫВАЮЩИЕ ОКНА

//ALERT
/*
alert("Hello World!");
*/

//CONFIRM - logical
/*
var data = confirm("Hello World?");
if (data) {
    console.log("YES");
} else {
    console.log("NO")
}
*/


//PROMPT
/* (Вопрос, Ответ)
var answer = prompt("Hello World!", "Hello!");
console.log(answer);
*/


//ФУНКЦИИ
/*
function console2strings(str_1, str_2) {
    console.log(str_1);
    console.log(str_2 + "!")
}
*/

/*
//среднее арифметическое для массива произвольной длинны:
function sredArifm(arr) {
    //объявляем локальную переменную суммы со значением 0
    var sum = 0;
    //запускаем цикл перебора массива по порядковым номерам с ограничением на длинне массива
    for (var i = 0; i < arr.length; i++)
    //каждый раз прибавляем полученное значение из масива к переменной суммы    
    sum += arr[i];
    //объявляем локальную переменную результата среднего арифметического, равную делению суммы массива на его длинну
    var res = sum / arr.length;
    //выводим в консоль значение суммы массива
    console.log(sum);
    //возврящаем значение среднего арифметического в результате работы функции
    return res;
}
//создаём массив произвольной длинны
let a = [1, 4, 9, 2, -23, -12, -5, 0, 42];
//объявляем переменную которая принимает значение функцию нахождения среднего арифметического для массива
let data = sredArifm(a);
//выводим в консоль название результата и его значение
console.log("Среднее арифметическое: " + data);
*/

//ОБРАБОТЧИК СОБЫТИЙ

let clickCounter = 0;
function onClickButton(el) {
    clickCounter++;
    el.innerHTML = "PUSHED: " + clickCounter;
    el.style.background = "silver";
    el.style.cssText = "border-radius: 5px; font-size: 20px; background: #aaa; border: 0";
    console.log(el.name);
}
function onInput(el) {
    if (el.value == "Hello")
        alert("Hello World!")
    console.log(el.value);
}