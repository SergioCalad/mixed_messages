let adj=['good','horrible','bad','amazing','beautiful','boring', 'wonderful', 'pretty'];
let anSubs=['cat','dog','horse','turtle','cheetah','lion','giraffe','gorilla','squirrell'];
let foodSubs=['meat','cheese','chocolate','brocolli','cocaine','ice cream']
let verbs=['eat','buy','kill','rent','hunt','pursue','sell','fuck'];

const ramWord=(array)=> array[Math.floor(Math.random()*array.length)];

/*
console.log(ramWord(adj));
console.log(ramWord(anSubs));
console.log(ramWord(verbs));
*/

function ramSentence(){
    let adjetive=ramWord(adj);
    let substantive=[ramWord(anSubs),ramWord(foodSubs)];
    let verb=ramWord(verbs);

    console.log(adjetive,substantive[Math.floor(Math.random()*2)],verb);

    let sentences=[
        `You’re having a ${adjetive} day! Maybe you should ${verb} a ${substantive[Math.floor(Math.random()*2)]}.`,
        `You’re looking ${adjetive} today! Keep ${verb}ing whatever is helping you.`, 
        `That ${substantive[Math.floor(Math.random()*2)]} is ${adjetive}! Why don’t you ${verb} it?`,
        `Do you see that ${substantive[0]}, please don’t ${verb} them.`,
        `The ${substantive[0]} is ${adjetive}, please don’t eat it.`,
        `Don’t feed your ${substantive[0]} with ${substantive[1]} or they will ${verb} you in a ${adjetive} way.`
    ];

    let ramdomSentence=ramWord(sentences);

    if (ramdomSentence===sentences[1] && verb==='pursue'){
        verb='pursuing';
    }

    return ramdomSentence;
};

console.log(ramSentence());