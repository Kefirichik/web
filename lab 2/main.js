function checkNumber(number){
    znak = ""
    chotnost = ""
    if (number > 0) 
        znak = " положительное, "
    else if (number == 0)
        znak = " не положительное и не отрицательное, "
    else 
        znak = " отрицательное, "
    if (number%2 == 0)
        chotnost = "четное"
    else
        chotnost = "нечетное"
    console.log(`${number} ${znak} ${chotnost}`)
}

function incorrectNumber(a, b, num){
        if (!num) {console.log("Нужна не пустая строка"); return true}
        if (num >= a && num <= b) return false
        else if (num < a || num > b) {console.log(`Число вне отрезка от ${a} до ${b}`); return true}
        else {console.log("Нужно число..."); return true}
}

function runTask(number){
    if (number == 1){
        checkNumber(20)
        checkNumber(11)
        checkNumber(0)
        checkNumber(-11)
        checkNumber(-20)
    }
    if (number == 2) {
        const numbers = [4, 8, 15, 16, 23, 42];
        let summa = 0;
        let highest = 0;
        let more_than_ten = [];
        for (let i in numbers){
            const current = numbers[i]
            summa += current
            if (current > highest){
                highest = current
            }
            if (current > 10){
                more_than_ten.push(current)
            }
        }
        console.log(`Сумма элементов: ${summa}\nСамое большое число: ${highest}\nМасив элементы больше 10: ${more_than_ten.join(", ")}`)
    }
    if (number == 2.5) {
        const numbers = [4, 8, 15, 16, 23, 42];
        let summa = numbers.reduce((accumulator, current) => accumulator + current, 0);
        let highest = numbers.toSorted((a, b) => b - a)[0];
        let more_than_ten = numbers.filter((num) => num > 10);
        console.log(`Сумма элементов: ${summa}\nСамое большое число: ${highest}\nМасив элементы больше 10: ${more_than_ten.join(", ")}`)
    }

    if (number == 3) {
        const students = [ 
            {
                name: "Ivan",
                grade: 3
            },
            {
                name: "Matvey",
                grade: 5
            },
            {
                name: "Bogdan",
                grade: 4
            },
            {
                name: "Danil",
                grade: 2
            },
            {
                name: "Anton",
                grade: 3
            }
        ]
        let minimal_grade;
        do {
        let minimal_grade_try = prompt("Минимальная оценка:")
        if (!(incorrectNumber(2, 5, minimal_grade_try))){minimal_grade = minimal_grade_try; break}
        } while (true);
        let great_students = []
        let average = 0
        for (i of students){
            if (i.grade > minimal_grade) great_students.push(i.name);
            average += i.grade
        }
        average /= students.length
        console.log(`Ученики с оценкой выше ${minimal_grade}: ${great_students.join(", ")}\nСредяня оценка всеш учащихся: ${average}`)
    }

    if (number == 4){
        let randnum = Math.ceil(Math.random() * 10)
        let tries = 0;
        let guess_number;
        while(true){
            if (tries <= 9) guess_number = prompt("Загадонное чилсло (от 1 до 10):");
            else guess_number = prompt("Уже бы мог перебрать...")
            if (incorrectNumber(1, 10, guess_number)) continue;
            if (guess_number < randnum) {console.log(`Загаданное число больше ${guess_number}`)}
            else if (guess_number > randnum) console.log(`Загаданное число меньше ${guess_number}`)
            else if (guess_number == randnum) {console.log(`Верно! Загаданное число ${randnum}`); break}
            tries++
        }
    }
}