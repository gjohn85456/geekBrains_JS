        'use strict'       
        //-----------------------------------------Задание 1 -------------------------------------------------
        //пример 1 оператор ++ перед перемнной a, поэтому произошло увеличение на единицу значения a    
        leta  =  1,  b  =  1,  c,  d;         
        c  =  ++a;       
        console.log(c);
        //пример 2 оператор ++ после переменной b, поэтому сначало произошло присвоение значения b переменнойй d, потом значение переменной увеличилось на 1              
        d  =  b++;      
        console.log(d);
        //пример 3 начальное значение переменной a равно 2, значение сохранилось из расчёта выше, оператор ++ увеличил a на единицу, 2 + 3 равно 5                
        c  =  2  +   ++a;       
        console.log(c);        //пример 4               
        d  =  2  +  b++;

        //-----------------------------------------Задание 2 -------------------------------------------------
        //выражение a*=2, соответствует выражению a=a*2 т.к. a=2, следовательно a*=2 равно 4  и x= 1 +4 получается 5
        let a = 2;
        let x = 1 + (a *= 2);
        console.log(x);

        //-----------------------------------------Задание 3 -------------------------------------------------
        // генерирую два числа в промежутке от -100 до 100 включительно
        let randomNumber1 = Math.floor(Math.random() * (100 + 100 + 1) - 100);
        let randomNumber2 = Math.floor(Math.random() * (100 + 100 + 1) - 100);
        let result = 0;
        /**
         * Функция выполняет следующие действия:
         * 1. если первое и второе число положительные, выводит их разность(0 положительное число)
         * 2. если первое и второе число отрицательные, выводит их произведение
         * 3. если числа разных знаков, выводит их сумму
         *@param {number} Number1 первое чило
         *@param {number} Number2 второе чило
         *@returns {number} возвращает результат вычислений
         */
        function someCalculations(Number1, Number2) {
            if (Number1 >= 0 && Number2 >= 0) {
                result = Number1 - Number2;
            } else if (Number1 < 0 && Number2 < 0) {
                result = Number1 * Number2;
            } else {
                result = Number1 + Number2;
            }
            return result;
        };
        console.log(`Первое случайное число ${randomNumber1} второе случайное число ${randomNumber2} результат операции ${someCalculations(randomNumber1, randomNumber2)}`);

        //-----------------------------------------Задание 4 -------------------------------------------------
        /**
         * функция cкладывает два числа
         * @param {number} Number1 
         * @param {number} Number2 
         * @returns 
         */
        function addition(Number1, Number2) {
            result = Number1 + Number2;
            return result;
        }
        /**
         * функция вычитает одно число из другого 
         * @param {number} Number1 
         * @param {number} Number2 
         * @returns 
         */
        function subtraction(Number1, Number2) {
            result = Number1 - Number2;
            return result;
        }

        /**
         * функция перемножает два числа
         * @param {number} Number1 
         * @param {number} Number2 
         * @returns 
         */
        function multiplication(Number1, Number2) {
            result = Number1 * Number2;
            return result;
        }

        /**
         * функция делит одно число на другое
         * @param {number} Number1 
         * @param {number} Number2 
         * @returns 
         */
        function division(Number1, Number2) {
            result = Number1 / Number2;
            return result;
        }

        //-----------------------------------------Задание 5 -------------------------------------------------
        /**
         * Фунция принимает название операции, и выполняет соответствующие вычисления, вызывая другие фунции
         * @param {number} arg1 первое число
         * @param {number} arg2 вторе число
         * @param {string} operation название операции "сложение" "вычитание" "умножение" "деление"
         * @returns {number} возвращяет число(результат вычислений) или сообщает об ошибке 
         */
        function mathOperation(arg1, arg2, operation) {
            switch (operation) {
                case "сложение":
                    return addition(arg1, arg2);

                case "вычитание":
                    return subtraction(arg1, arg2);

                case "умножение":
                    return multiplication(arg1, arg2);

                case "деление":
                    return division(arg1, arg2);
                default:
                    alert("вы не верно ввели название операции");
                    break;
            }
        }
        let operation = (prompt(`Сгенерировано два числа, первое ${randomNumber1}, второе ${randomNumber2} введите одну из операций: Сложение, Вычитание, Умножение, Деление`)).toLowerCase();
        let qwe = mathOperation(randomNumber1, randomNumber2, operation);
        if (qwe !== undefined) {
            alert(`Результат ${mathOperation(randomNumber1, randomNumber2, operation)}`);
        }

        //-----------------------------------------Задание 6 -------------------------------------------------
        let money = +prompt("Какое количество денег вы хотите внести на счёт в банке");
        /**
         * Формирует и выводит сообщение 
         * @param {number} money сумма 
         * @param {string} endOfword окончание зависит от падежа
         * @returns выводит alert
         */
        const Message = (money, endOfword) => alert(`Ваша сумма в ${money} рубл${endOfword} успешно зачислена`);
        /**
         *  у большинства склонений окончание "ей", за кроме чисел 1,2,3,4 (исключение 10 11 12 13 14 15 16 17 18 19)
         * @param {number} cash сумма зачисления
         */
        function toPutMoney(cash) {
            //проверка на то что введено число
            if (cash !== undefined && isNaN(cash) !== true) {
                let strCash = String(cash);
                let arrayCash = strCash.split("");
                let endOfword = "";
                let char = parseInt(arrayCash[arrayCash.length - 2]);
                //вывод сообщения с окончанием "ей" для сумм оканчивающихся на 10 11 12 13 14 15 16 17 18 19"
                if (arrayCash.length >= 2 && char === 1) {
                    endOfword = "ей";
                    Message(cash, endOfword);

                } else {
                    char = arrayCash[arrayCash.length - 1];
                    switch (char) {
                        case "1":
                            endOfword = "ь";
                            Message(cash, endOfword);
                            break;
                        case "2":
                        case "3":
                        case "4":
                            endOfword = "я";
                            Message(cash, endOfword);
                            break;
                        case "5":
                        case "6":
                        case "7":
                        case "8":
                        case "9":
                        case "0":
                            endOfword = "ей";
                            Message(cash, endOfword);
                            break;
                    }
                }
            } else {
                alert("вы не верно ввели сумму");
            }
        }
        toPutMoney(money);