let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(months[4], months[10]);
months.sort(); console.log(months);
months.unshift("Inicio"); months.push("Fin");
months.shift(); months.pop();
months.reverse();
let joinedMonths = months.join("-");
let monthsCopy = months.slice(4, 11);
