const showBinEquestion = (strEquation, results) => {

    console.log(`a = ${a}\nb = ${b}`)
    let strPreShow = "";

    if (!Array.isArray(results)) {
        strPreShow = a + ` ${strEquation.at(0)} ` + b + " = " + results;
    }
    else {
        const lenght = (strEquation.length < results.length) ?
            showBinEquestion.length : results.length;

        for (let index = 0; index < lenght; ++index) {
            strPreShow += a + ` ${strEquation.at(index)} ` + b + " = " + results.at(index) + "\n";
        }
    }

    console.log(strPreShow);
}

const showEquestion = (strEquation, result) => {
    console.log(`a = ${a}\nb = ${b}`);
    console.log(strEquation + " = " + result);
}

let a = 10;
let b = 5;

showBinEquestion("+-*/", [a + b, a - b, a * b, a / b])

a = 11;
b = 2
showBinEquestion("%", a % b);

a = 2;
b = 4;
showBinEquestion(["**"], a ** b);

showEquestion("a + b * b", a + b * b)