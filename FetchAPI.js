const URL = "https://api.github.com/users";

//O fecth API vai iniciar uma requisição HTTP para a URL especificada, e ela vai me retornar uma promise_
const dataOne = fetch(URL)
.then(response =>{
/*Esse then servirá para obter o sucesso da requisição que será o retorno de uma promise;
Essa promise será armazenada no argumento response, e dentro dess then() irei fazer o tratamento dessa promise;*/

    //Esse response.ok vai indicar se a requisição http foi bem sucedida ou não_
    if(!response.ok) throw new Error("Valor Inválido!", response.statusText);

    //Aqui estou fazendo o tratamento da promise, convertendo os dados para um json();
    return response.json();//basicamente, aqui ele vai converter a primise para um objeto JSON;
    //e retorna para o proximo then();
})
.then(data => {
    //Obtendo os dados em formato JSON do then() anterior, e exibindo no console.
    if(!data) throw new Error("Inválido!");
    console.log(data);
})
.catch(err => {
    //exibindo uma mensagem de erro, caso a requisição der mal sucedida!
    console.log(err);
});
