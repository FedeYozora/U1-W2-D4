/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let l1 = 5;
let l2 = 3;

function area(l1, l2) {
  let areaR = l1 * l2;
  return areaR;
}
let finalArea = area(l1, l2);
console.log(finalArea);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let int1 = 3;
let int2 = 3;

function crazySum(int1, int2) {
  if (int1 === int2) {
    const sum = int1 + int2;
    return sum * 3;
  } else {
    const sum = int1 + int2;
    return sum;
  }
}
let finalSum = crazySum(int1, int2);
console.log("La somma dei due interi é", finalSum);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

val1 = 5;
val2 = 19;

function crazyDiff(val1) {
  diff = Math.abs(val1 - 19);
  if (diff > 19) {
    return diff * 3;
  } else {
    return diff;
  }
}
let finalDiff = crazyDiff(val1);
console.log("La differenza assoluta é ", finalDiff);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

n = 100;

function boundary(n) {
  if (n >= 20 && n <= 100) {
    console.log("function returns true");
    return true;
  } else if (n === 400) {
    console.log("function returns true");
    return true;
  } else {
    console.log("function returns false");
    return false;
  }
}

let confine = boundary(n);
console.log(confine);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let text = "Stringa";

function epify(text) {
  let textVerify = text.startsWith("EPICODE");
  if (text.startsWith("EPICODE")) {
    let result = text;
    return result;
  } else {
    let result = "EPICODE" + text;
    return result;
  }
}

let EPIC = epify(text);
console.log(EPIC);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let pos = 20;
function check3and7(pos) {
  let diviso3 = pos % 3;
  let diviso7 = pos % 7;
  if (diviso3 === 0) {
    let result = "il numero fornito é multiplo di 3";
    return result;
  } else if (diviso7 === 0) {
    let result = "il numero fornito é multiplo di 7";
    return result;
  } else if (diviso7 != 0) {
    let result = "il numero fornito non é multiplo ne di 7 ne di 3";
    return result;
  }
}

let divisione = check3and7(pos);
console.log(divisione);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let str = "Ciao";
function reverseString(str) {
  return str.split("").reverse("").join("");
}

let inversa = reverseString(str);
console.log(inversa);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let str2 = "ciao amici";

function upperFirst(str2) {
  const splitted = str2.split("");
  for (let i = 0; i < splitted.lenght; i++) {
    splitted[i] = splitted[1][0].toUpperCase() + splitted[1].substring(1);
  }
}
let finalStr = upperFirst(str2);
console.log(finalStr);

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let str3 = "Good";
function cutString(str3) {
  const withoutFirstAndLast = str3.slice(1, -1);
  return withoutFirstAndLast;
}

let firstlast = cutString(str3);
console.log(firstlast);

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let minRange = 0;
let maxRange = 10;

function giveMeRandom(n) {
  return Math.floor(Math.random() * (maxRange - minRange + 1));
}

let genNumbers = [];
let num = giveMeRandom(n);
genNumbers.push(num);
console.log(genNumbers);
