let adj=['good','horrible','bad','amazing','beautiful','boring', 'wonderful', 'pretty'];
let anSubs=['cat','dog','horse','turtle','cheetah','lion','giraffe','gorilla','squirrell'];
let verbs=['eat','buy','kill','rent','hunt','pursue','sell'];

const ramAdj=()=> adj[Math.floor(Math.random()*adj.length)];

const ramAnSubs=()=> anSubs[Math.floor(Math.random()*anSubs.length)];

const ramVerbs=()=> verbs[Math.floor(Math.random()*verbs.length)];

console.log(ramAdj());
console.log(ramAnSubs());
console.log(ramVerbs());
