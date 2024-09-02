//Fazendo requisições usando o Fetch API_
const CEP = 55813390;
const API = `https://viacep.com.br/ws/${CEP}/json`;

const data = fetch(API)
.then(res => {
   if(!res.ok) throw new Error("Inválido!", res.statusText);
   return res.json();
}).then(dados => {
    if(!dados) throw new Error("Dados Inválidos!");
    console.log(dados);
})
.catch(err => {
    console.log("error: "+err);
});

//Fazendo requisições ussando o axios_
const axios = require("axios");
const CEPtwo = 55805000;
const APItwo = `https://viacep.com.br/ws/${CEPtwo}/json`;
axios.get(APItwo)
.then(res => console.log(res.data))
.catch(err => console.log(err));

//O axios é uma forma mais resumido de scripts para fazer requisições, porem com suas funcionalidades específicas;