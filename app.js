/* eslint-disable */
// 📝 Instructions
// Create a script that generate all the possible
// domain name combinations from a list of pronouns,
// adjectives and nouns, for example:

// Should generate something like:

// thegreatjogger.com
// thegreatracoon.com
// ourgreatjogger.com
// ourgreatracoon.com
// thebigjogger.com
// thebigracoon.com
// ourbigjogger.com
// ourbigracoon.com

window.onload = function () {
  //write your code here
  domainGen();
};

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let name = [];

const p = document.querySelector("#domain");
const lista = document.createElement("ul");

const domainGen = () => {
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        name.push(pronoun[i] + adj[j] + noun[k] + ".com");
      }
    }
  }

  for (let item of name) {
    let li = document.createElement("li");
    let text = document.createTextNode(item);
    li.appendChild(text);
    lista.appendChild(li);
  }

  p.appendChild(lista);
};
