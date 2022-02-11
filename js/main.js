const filterBox = document.querySelectorAll('.script-group');



// Нету скрипта

function script_error(){
    console.error("Скрипт не рабочий")
}

// Группа Begin

// Задача 1

function script_begin1(){
    let a
    a = prompt('Введите значение стороны квадрата:')
    p = a*4
    alert('Значение периметра квадрата: ' + p)
}



// Задача 2

function script_begin2(){
    let a
    a = prompt('Введите значение стороны квадрата:')
    r = a**2
    alert('Значение площади квадрата: ' + r)
}


// Задача 3

function script_begin3(){
    let a, b
    a = +prompt('Введите значение первой стороны:') 
    b = + prompt('Введите значение второй стороны:') 
    s = a*b
    p = 2*(a+b)
    alert("Значение площади: " + s + "; Значение периметра: " + p)
}


// Задача 4

function script_begin4(){
    let a
    a = prompt('Введите значение диаметра') 
    l = a*Math.PI
    alert('Дина окружности: ' + l)
}

// Задача 5

function script_begin5(){
    let a
    a = prompt("Введите стороны куба")
    v = a**3 // Объём куба
    s = 6*(a**2) // Площадь куба
    alert("Объём куба: " + v  + "; Площадь куба: " + s)
}

// Задача 6

function script_begin6(){
    let a, b, c
    a = prompt ('Введите значение A:')
    b = prompt ('Введите значение B:')
    c = prompt ('Введите значение C:')
    e = a*b*c
    f = a*(a*b+b*c+c*a)
    alert("Объём: " + e  + "; Площадь: " + f)
}

// Задача 7

function script_begin7(){
    let a, b
    f= Math.PI
    a = prompt("Введите данные радиуса")
    l = 2*f*a
    s = f*(a**2)
    alert("Длина окружности" + l + "Площадь окружности" + s)
}

// Задача 8

function script_begin8(){
    let a, b 
    a = prompt("Введите значение А:")
    b = prompt("Введите значение В:")
    с = (a+b)/2
    alert("Среднее арефмитическое: " + c)
}

// Задача 9

function script_begin9(){
    let a, b
    a = prompt ("Введите число А:")
    b = prompt ("Введите число В:")
    j = Math.sqrt(a*b)
    alert("Среднее геометрическое чисел: " + j)
}

// Задача 10

function script_begin10() {
    let a, b
    a = +prompt("Введите значение А")
    b = +prompt("Введите значение B")
    c = a + b // вывести
    v = a - b // вывести
    j = a * b // вывести
    k = Math.pow(a, 2)
    l = Math.pow(b, 2)
    o = Math.pow(c, 2)
    alert("Сумма: " + c + " Разница: " + v + " Произведение: " + j + " Квадрат А: " + k + " Квадрат B: " + l + " Квадрат Суммы: " + o)
}

// // Задача 11
// function script_begin11() {
//     let a, b
//     a = +prompt("Введите значение А")
//     b = +prompt("Введите значение B")
//     c = a + b // вывести
//     v = a - b // вывести
//     j = a * b // вывести
//     k = Math.pow(a, 2)
//     l = Math.pow(b, 2)
//     o = Math.pow(c, 2)
//     alert("Сумма: " + c + " Разница: " + v + " Произведение: " + j + " Квадрат А: " + k + " Квадрат B: " + l + " Квадрат Суммы: " + o)
// }

function script_begin11(){
    alert("Я ЖЕ СКАЗАЛ НЕ ПАШЕТ!")
}

// Задача 12

function script_begin12(){
    let a, b, c
    a = +prompt("Введите число А")
    b = +prompt("Введите чесло В")
    c = +prompt("Введите число С")
    p = (a+b+c)
    m1 = Math.pow(a, 2) + Math.pow(b, 2)
    m2 = Math.sqrt(m1)
    alert("Гипотенуза: " + m2 + " Периметр: " + p)
}

// Задача 13

function script_begin13(){
    let r1, r2, p
    p = 3.14
    r1 = prompt("Радиус первого круга ( См )")
    r2 = prompt("Радиус второго круга ( См )")
    s1 = Math.pow(r1, 2)
    
    s12 = p*s1 // S1 
    s2 = Math.pow(r2, 2)
    s21 = p*s2 // S2
    s3 = s12-s21 // S3
    alert("Площадь первого круга: " + s12 + " См ; Площадь второго круга: " + s21 + " См ; Площадь третьего круга: " + s3 + " См ")
}

// Задача 14

function script_begin14(){
    let l
    l = +prompt("Ведите длину круга ( См )")  
    p = 3.14
    r = l/(2*p)
    r2 = Math.pow(r, 2)
    s = p*r2
    alert("Полощадь круга: " + s + " См; Радиус круга: " + r + " См")
}

// Задача 15

function script_begin15(){
    let s
    s = +prompt("Введите площадь круга: ")
    p = 3.14
    d = Math.sqrt(s/4*p)
    l = d*p
    // console.log(d)
    // console.log(l + ' L')
    alert("Диаметр круга: " + d + " См; Длина круга: " + l + " См")
}

// Группа Integer

// Задача 10

function script_integer10(){
    let a
    a = +prompt("Введите число")

    b = a%10
    c = Math.round(a%100/10)

    alert("Еденицы: " + b + "; Десятки: " + c)
}

// Задача 11

function script_integer11(){
    let a
    a = +prompt("Введите число")

    b = a%10
    c = Math.round(a%100/10)
    e = Math.round(a%1000/100)

    sum = b+c+e
    p = b*c*e

    alert("Сумма: " + sum + " ; Произвидение: " + p)
}

// Задача 12

function script_integer12(){
    let a
    a = +prompt("Введите число")

    b = a%10
    c = Math.round(a%100/10)
    e = Math.round(a%1000/100)

    alert(b+""+""+c+""+""+e)
}

// Задача 19

function script_integre19(){
    let a
    a = prompt("Введите число секунд с начала суток ( целое )")
    if (a == 0){
        alert("Число не целое")
    }
    else {
        f = Math.trunc(a/60)
        if (f == 0){
            alert("Прошла только одна минута")
        }
        else {
            alert("С начала суток прошло " + f + " минут")
        }
    }
}




// Группа Boolean

// Задача 1

function script_boolean1(){
    let a
    a = +prompt("Введите число")

    if(a < 0){
        alert("Число отрицательное")
    }
    else{
        confirm("Число положительное")
    }
}

// Задача 2

function script_boolean2(){
    let a
    a = +prompt("Введите число")

    if(Number.isInteger(a) == 0){
        alert("Число являеться нечётным")
    }
    else {
        alert("Число являеться чётным")
    }
}

// Задача 3

function script_boolean3(){
    let a
    a = +prompt("Введите число")

    if(Number.isInteger(a) == 0){
        alert("Число являеться нечётным")
    }
    else {
        alert("Число являеться чётным")
    }
}

// Задача 4

function script_boolean4(){
    let a, b
    a = +prompt("Введите число")
    b = +prompt("Введите число")
    
    if((a > 2)&&(b <= 3)){
        confirm("Неравенство верно")
    }
    else {
        if (a > 2){
            alert("Число A должно быть больше 2")
        }
        if (b >= 3){
            alert("Число B должно быть меньше 3")
        }
        else {
            confirm("Неравенство верно")
        }
    }
}

// Задача 5

function script_boolean5(){
    let a, b
    a = +prompt("Введите число")
    b = +prompt("Введите число")
    
    if((a >= 0)&&(b < -2)){
        confirm("Неравенства верны")
    }
    else{
        alert("Неравенства не верны")
    }
}

// Задача 6

function script_boolean6(){
    let a, b, c
    a = +prompt("Введите число")
    b = +prompt("Введите число")
    c = +prompt("Введите число")

    if ((a < b)&(b < c)&(a < c)){
        confirm("Занчения верны")
    }
    else {
        alert("Перепроверьте значения")
    }
}

// Задача 7

function script_boolean7(){
    let a, b, c
    a = +prompt("Введите число")
    b = +prompt("Введите число")
    c = +prompt("Введите число")

    if ((a < b)&(b < c)&(a < c)){
        confirm("Число находиться между двумя числами")
    }
    else {
        alert("Перепроверьте значения")
    }
}

// Задача 8

// function script_boolean8(){
//     let a, b, c
//     a = +prompt("Введите число")
//     b = +prompt("Введите число")
//     c = +prompt("Введите число")
// }





// Группа If

//  Задача 12

function script_if12(){
    let a, b, c
    a = Number(prompt("Введите число"))
    b = Number(prompt("Введите число"))
    c = Number(prompt("Введите число"))

    if((a < b)&&(b < c)){
        alert("Число A " + a + " меньше")
    }

    if((b < a)&&(a < c)){
        alert("Число B " + b + " меньше")
    }

    if((c < b)&&(b < a)){
        alert("Число C " + c + " меньше")
        console.log(a, b, c) 
    }    
}

//  Задача 13

function script_if13(){
    let a, b, c
    a = Number(prompt("Введите А число"))
    b = Number(prompt("Введите B число"))
    c = Number(prompt("Введите C число"))

        if((a < b)&&(b < c)){
            alert("Число B "  + b + " центральное")
        }
        else{
            if((b < a)&&(a < c)){
                alert("Число А " + a + " центральное")
            }
        else{
            if((b < c)&&(c < a)){
                alert("Число C " + c + " центральное")
            }    
        }
    }
}

//  Задача 14

function script_if14(){
    let a, b, c
    a = Number(prompt("Введите А число"))
    b = Number(prompt("Введите B число"))
    c = Number(prompt("Введите C число"))

    if((a < b)&&(b < c)){
        alert("Число A "  + a + " меньше;" + " Число С " + c + " больше")
    }
    else {
        if((b < a)&&(a < c)){
            alert("Число B "  + b + " меньше;" + " Число С " + c + " больше")
        }
        else {
            if((c < b)&&(b < a)){
                alert("Число C "  + c + " меньше;" + " Число А " + a + " больше")
            }
        }
    }
}

// Задача 15 

function script_if15(){
    let a, b, c
    a = Number(prompt("Введите А число"))
    b = Number(prompt("Введите B число"))
    c = Number(prompt("Введите C число"))

    if((a < b)&&(b < c)){
        f = (b+c)
        alert("Сумма: " + f)
    }
    else {
        if((b < a)&&(a < c)){
            f = (a+c)
            alert("Сумма: " + f)
        }
        else {
            if((c < b)&&(b < a)){
                f = (b+a)
                alert("Сумма: " + f)
            }
        }
    }
}

// Задача 16

function script_if16(){
    let a, b, c
    a = +prompt("Введите первое число: ")
    b = +prompt("Введите второе число: ")
    c = +prompt("Введите третье число: ")
    
    if((a < b)&&(b < c)){
        a = a*2
        b = b*2
        c = c*2
        alert("Удвоение чисел: " + a + " " + b + " " + c)
    }
    else {
        a = -a
        b = -b
        c = -c
        alert("Противоположное значение чисел: " + a + " " + b + " " + c)
    }
}

// Задача 17

function script_if17(){
    let a, b, c
    a = +prompt("Введите первое число: ")
    b = +prompt("Введите второе число: ")
    c = +prompt("Введите третье число: ")
    
    if(((a < b)&&(b < c))||((c < b)&&(b < a))){
        a = a*2
        b = b*2
        c = c*2
        alert("Удвоение чисел: " + a + " " + b + " " + c)
    }
    else {
        a = -a
        b = -b
        c = -c
        alert("Противоположное значение чисел: " + a + " " + b + " " + c)
    }
}

// Задача 18

function script_if18(){
    let a, b, c
    a = +prompt("Введите первое число: ")
    b = +prompt("Введите второе число: ")
    c = +prompt("Введите третье число: ")
    
    if((a != b)&&(b != c)&&(a != c)){
        alert("Нет 2-ух равных чисел")
    }
    else {
        if((a == b)&&(b == c)&&(a == c)){
            alert("Число имеет общий приоритет")
        }
        else {
            if((a < b)&&(b < c)){
                alert("Число имеет низший приоритет")
            }
            else {
                if((b < a)&&(a < c)){
                    alert("Число имеет низший приоритет")
                }
                else {
                    if((c < b)&&(b < a)){
                        alert("Число имеет низший приоритет")
                    }
                    else {
                        alert("ERROR")
                    }
                }
            }
        }
    }
}





// Задача 23

// function script_if23(){
//     let a, b, c
//     a = +prompt("Введите число А")
//     b = +prompt("Введите число В")
//     c = +prompt("Введите число С")
// }

// Задача 24

function script_if24(){
    let a
    a = +prompt("Введите число")
    if (a >= 0){
        x = 2*Math.sin(a)
        alert("Ответ: " + x)
        if (a <= 0){
            x = 6 - a
            alert("Ответ: " + x)
        }
    }
}

// Задача 25

function script_if25(){
    let a
    a = +prompt("Введите число")
    if ((a < -2)||(a > 2)){
        z = 2 * a
        alert("Ответ: " + z)
    }
    else {
        z = -3 * a
        alert("Ответ: " + z)
    }
}

// Задача 26

function script_if26(){
    let x
    x = +prompt("Введите число")

    if(x <= 0){
        x = -x
        alert("Отрицательное число: " + x)
    }
    else {
        if((0 < x)&&(x < 2)){
            x = x**2
            alert("Число в квадрате: " + x)
        }
        else {
            if(x >= 2){
                alert("4")
            }
        }
    }
}

// Case

// Скрипт 1

function script_case1(){
    let a
    a = +prompt("Введите номер месяца")
    switch (a) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            alert("В этом месяце 31 день")
            break;
        case (2):
            alert("В этом месяце 28 день")
            break;
        case (4,6,9,11):
            alert("В этом месяце 30 день")
            break;
        default:
            alert("Нет такого месяца")
            break;
    }
}

// For

// Скрипт 1

function script_for1(){
    let a
    a = prompt("число")
    j = +prompt("povrotu")

    for(let i = 0; i < j; i++) {
        console.log(a)
    }
}

// while

// Скритп 1


// series

function script_series_NaN(){
    let style = ["Джаз", "Блюз"]
    style.push("Рок-н-рол")

    middle = Math.trunc(style.length/2)
    style[middle] = 'Классика'
    style.shift()
    style.unshift("Реп", "Реггі");
    console.error("Из списка был удалён эллемент: Джаз")
    console.log(style)
}

// Задача 1
function script_series1(){
    let a = [], summa = 0
    for (let z = 0; z < 10; z++) {
        a[z] = Math.trunc(Math.random()*10-3)
        summa = summa+a[z]
        console.log(a[z])
    } 
    // console.error(a)
    console.log('-----------------')
    console.log(summa)
}
// Задача 2
function script_series2(){
    let a = [], summa = 1
    for (let z = 0; z < 10; z++) {
        a[z] = Math.trunc(Math.random()*1000-300)
        e = summa*a[z]
    } 
    e = e-1
    // console.error(a)
    console.log(e)
}
// Задача 3
function script_series3(){
    let a = [], summa = 1
    for (let z = 0; z < 10; z++) {
        a[z] = Math.trunc(Math.random()*10-3)
        e = summa*a[z]
        console.log(e)
    }
    l = e/10
    console.log("----------------------")
    console.log(l)
}

// Скрипт 4

function script_series4(){
    let h
    h = +prompt("Введите число ")
    
    let a = [], summa = 1
    for (let z = 0; z < h; z++) {
        a[z] = Math.trunc(Math.random()*10-3)
        e = summa*a[z]
    }
    console.log(summa)
}


// Скрипт 1
function script_proc1(){
    let a
    
    for(let i = 0; i < 5; i++){
        a = +prompt("введите число")


        function power(a){
            return a**3
        }
        let b = power(a)
        alert(b)
    }
}

// Скрипт 2

function script_proc2(){
    let a
    a = +prompt("введите число")
    
    function power2(a){
        return a**2
    }
    function power3(a){
        return a**3
    }
    function power4(a){
        return a**4
    }

    let b = power2(a)
    let c = power3(a)
    let d = power4(a)

    alert("Квадрат: " + b + "; Куб: " + c + "; 4-я степень:" + d)
}

// Задача 7

function script_proc7(){
    
    // for (let z = 0; z < 10; z++) {
    //     a[z] = Math.trunc(Math.random()*10-3)
    //     rez = rez+a[z]
    //     console.log(a[z])
    // }
    let k, S, z, p
    k = +prompt("Введите число")
    z = ''
    function InvDigits(k){
        while (k > 0) {
            S = k
            S = S%10
            p = p/10
            p = Math.trunc(p)
            console.log(S)
            z = z + S
        }
        return z
    }
}

// Скрипт 8

function script_proc8(){
    let k, d1, d2, z
    k = +prompt("Введите число")
    d1 = +prompt("Введите число")
    d2 = +prompt("Введите число")
    function add(k ,d1) {
        z = k + d1
        return z
    }
    alert(add(k, d1))
    alert(add(z, d2))
}