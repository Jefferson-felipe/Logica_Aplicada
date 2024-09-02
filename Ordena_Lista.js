//Ordenando uma lista de elementos numéricos_
const Lista = [7,2,8,1,5,66,54,34,12,10,6,7,8];
console.log('Lista não ordenada: '+Lista);
for(let x = 0;x < Lista.length;x++){
    for(let y = 0; y< Lista.length - x - 1;y++){
        if(Lista[y] > Lista[y + 1]){
            let atual = Lista[y];
            Lista[y] = Lista[y + 1];
            Lista[y + 1] = atual;
        }
    }
}
console.log('Lista Ordenada: '+Lista);
