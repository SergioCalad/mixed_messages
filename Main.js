let adj=['good','horrible','bad','amazing','beautiful','boring', 'wonderful', 'pretty'];
let anSubs=['cat','dog','horse','turtle','cheetah','lion','giraffe','gorilla','squirrell'];
let verbs=['eat','buy','kill','rent','hunt','pursue','sell'];

const ramWord=(array)=> array[Math.floor(Math.random()*array.length)];

console.log(ramWord(adj));
console.log(ramWord(anSubs));
console.log(ramWord(verbs));
