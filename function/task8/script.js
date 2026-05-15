// Task 1
// Напишите pure функцию t1, которая принимает два аргумента и выводит в .out-1 cумму всех целых чисел от первого аргумента(включительно) до второго(включительно). Функция запускается по кнопке .b-1. 

function t1(min, max) {
    let sum = 0
    for (i = min; i <= max; i++) {
        sum = sum + i
    }
    return sum
}

document.querySelector('.b-1').addEventListener('click', function () {
    document.querySelector('.out-1').textContent = t1(10, 20)
})




// Task 2
// Напишите pure функцию t2, которая принимает два аргумента и выводит в .out-2 больше число. Используйте Math.max. Функция запускается по кнопке .b-2. 
function t2(a, b) {
    return Math.max(a, b)
}

document.querySelector('.b-2').addEventListener('click', () => {
    document.querySelector('.out-2').textContent = t2(8, 19)
})

// Task 3.
// Напишите pure функцию t3 ( принимает 3 аргумента), которая делит число a на b и результат выводит в out-3. Если b равно нулю, то в out-3 выводится аргумент c. Функция запускается по кнопке .b-3. 

function t3(a, b, c) {
    if (b === 0) return c
    else return a / b
}

document.querySelector('.b-3').addEventListener('click', () => {
    document.querySelector('.out-3').textContent = t3(10, 0, 8)
})

// Task 4
// Давайте напишем pure функцию t4, которая выводит переданный ей массив (как аргумент arr) в блок (переданный как аргумент block) через пробел. Функция запускается по кнопке .b-4. 

const t4 = (arr, block) => {
    block.textContent = arr.join(' ')
}

document.querySelector('.b-4').addEventListener('click', () => {
    t4([1, 55, 89], document.querySelector('.out-4'))
})

// Task 5
// Давайте напишем pure функцию t5, которая проверяет наличие элемента класс которой передан ей как аргумент (например '.out-5') на странице и возвращает true или false. Функция запускается по кнопке .b-5. 

function t5(element) {
    if (element) return true
    else return false
}

document.querySelector('.b-5').addEventListener('click', () => {
    document.querySelector('.out-5').textContent = t5(document.querySelector('.out-5'))
})
// Task 6
// Давайте напишем pure функцию t6, которая получает массив и возвращает его развернутым на 180 градусов ( чистый аналог reverse ). Функция запускается по кнопке .b-6. Для проверки - выводите результат на страницу, через пробел.

const t6 = (arr) => {
    return arr.reverse()
}

document.querySelector('.b-6').addEventListener('click', () => {
    document.querySelector('.out-6').textContent = t6([10, 30, 50])
})

// Task 7
// Давайте напишем функцию t7, которая позволяет выводить текст переданный ей в качестве аргумента text в блок block. При этом переданный текст с помощью trim очищается от пробелов до и после и переводится в нижний регистр. Ваша задача модицифировать функцию и запуск так, чтобы она стала pure.


function t7(block, text) {
    block.textContent = text.trim().toLowerCase()
}

document.querySelector('.b-7').addEventListener('click', function () {
    out7 = document.querySelector('.out-7')
    t7(out7, ' HelLO wORLd       ');
})
