function suma(a, b) { return a + b; }
let resultado = suma(3, 4); console.log(resultado);

function suma(a, b) { if (typeof a !== "number" || typeof b !== "number") { alert("Uno de los parámetros tiene error"); return NaN; } return a + b; }

function validateInteger(num) { return Number.isInteger(num); }

function suma(a, b) { if (!validateInteger(a) || !validateInteger(b)) { alert("Error: números decimales"); a = Math.round(a); b = Math.round(b); } return a + b; }

function validateInteger(num) { return Number.isInteger(num); }
function suma(a, b) { if (!validateInteger(a) || !validateInteger(b)) { alert("Error: números decimales"); a = Math.round(a); b = Math.round(b); } return a + b; }
