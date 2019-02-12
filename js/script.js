var seconds = 234245645335;
var residue = (seconds/3600).toString().split('.')[1];
console.log(residue + "\n\n");

var text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, at.";
var indexCase = [];

for (i = 0; i <= text.length; i++){ if (text[i] == "a") { indexCase.push(i); }}

for (i = 0; i <= indexCase.length; i++) { console.log(indexCase[i]) }
