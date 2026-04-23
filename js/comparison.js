import { showEquestion } from './operators.js';

const showEquestionX = (strEquation, result) => {
    console.log("x =", x);
    showEquestion(strEquation, result);
}

let x = 10;
console.log("x =", x);
showEquestion("x > 7", x > 7)
showEquestion("x > 7", x < 7)
showEquestion("x == 10", x == 10)

showEquestion("4 >= 5", 4 >= 5)
showEquestion("4 <= 5", 4 <= 5)

showEquestion("10 != 6", 10 != 6)

console.log("== and === operators");

showEquestion("5 == \"5\"", 5 == "5");
showEquestion("5 === \"5\"", 5 === "5");

showEquestion("false == 0", false == 0);
showEquestion("false === 0", false === 0);
showEquestion("undefined == null", undefined == null);
showEquestion("undefined === null", undefined === null);
showEquestion("\"\" == 0", "" == 0);
showEquestion("\"\" === 0", "" === 0);

showEquestion("6 !== \"6\"", 6 !== "6");

