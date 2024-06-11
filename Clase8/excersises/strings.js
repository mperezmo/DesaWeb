let text, result, firstFive, lastThree, firstSpace;

text = "universidad abierta interamericana"; text = text.toUpperCase();

text = "univeridad abierta interamericana", firstFive = text.substring(0, 5);

text = "univeridad abierta interamericana", lastThree = text.substring(text.length - 3);

text = "univeridad abierta interamericana", capitalized = text[0].toUpperCase() + text.substring(1).toLowerCase();

text = "univeridad abierta interamericana", firstSpace = text.indexOf(" ");

text = "univeridad interamericana", firstSpace = text.indexOf(" "), result = text[0].toUpperCase() + text.substring(1, firstSpace).toLowerCase() + " " + text[firstSpace + 1].toUpperCase() + text.substring(firstSpace + 2).toLowerCase();