let pronouns = ["the", "this", "that"];
let verbs = ["breach", "control", "support"];
let adjectives = ["slow", "fast", "agile"];

let domainGen = (pron, verb, adj) => {
    let finalName = "";
    for (let i = 0; i < pron.length; i++ ) {

        for (let j = 0; j < adj.length; j++) {
            

            for (let k = 0; k < verb.length; k++) {
                finalName = pron[i] + adj[j] + verb[k]
                console.log(finalName + ".cl");
            }
            
        }

       
        
    }

    
}

domainGen(pronouns, verbs,adjectives);

