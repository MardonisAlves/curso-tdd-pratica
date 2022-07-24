import Variaveis from "./cursoEs6/arrays.js";
/* FIlter array */
const Mardonis = new Variaveis();
const people = await Mardonis.variavelConsts();
const filtername = await Mardonis.filtername(people);
/* VALOR DEFAULT */
const defaultParams = await Mardonis.defaultParams(filtername);
console.log(defaultParams);

/* METODOS STRING INICIAR COM */
const stringIniciarCom = await Mardonis.stringIniciarCom(filtername);
console.log(stringIniciarCom);

/* ARRAY OF */
const arrayOf = await Mardonis.arrayOf(filtername);
console.log(arrayOf);

/* ARRAY FIND */
const arrayFind = await Mardonis.arrayFind(arrayOf);
console.log(arrayFind);


/* ARRAY FIND INDEX */
const arrayIndex = await Mardonis.arrayIndex(arrayFind);
console.log(arrayIndex);

/* ARRAY FILL */
const arrayFill = await Mardonis.arrayFill();
console.log(arrayFill);

/* ARRAy DESTRUCTURE */
const arrayDestruObj = await Mardonis.desTructureObj(people);
console.log(arrayDestruObj);

/* spread operator */
const arraySpread = await Mardonis.spreadOprator(arrayFind);
console.log(arraySpread);
