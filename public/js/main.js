let classe = [];
let nombre = prompt("donne le nombre d'élèves");
while (classe.length != nombre) {
    classe.push(prompt("mettez un nom d'élève"))
}
console.log(classe);