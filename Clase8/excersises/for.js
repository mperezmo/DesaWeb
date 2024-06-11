let words = ["Hola", "Mundo", "JavaScript", "Es", "Genial"];
for (let i = 0; i < words.length; i++) alert(words[i]);
for (let i = 0; i < words.length; i++) alert(words[i][0].toUpperCase() + words[i].substring(1).toLowerCase());
let sentence = ""; for (let i = 0; i < words.length; i++) sentence += words[i] + " "; alert(sentence.trim());
let numArray = []; for (let i = 0; i < 10; i++) numArray.push(i); console.log(numArray);
