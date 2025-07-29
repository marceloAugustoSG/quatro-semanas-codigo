// Esse problema consite em dado um array de inteiros e um alvo, retornar os índices dos dois números que somados resultam no alvo.


function twoSun(nums, target) {
    /*O código abaixo é uma solução de força bruta, que verifica todos os pares possíveis
    Dessa forma, ele é bom para listas pequenas, mas não é eficiente para listas grandes.*/

    // Contador apenas para verificar quantas iterações foram feitas
    let contador = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {

            contador++;
            if (nums[i] + nums[j] === target) {
                console.log("Contador:", contador);
                return [i, j];
            }
        }
    }
}
// Chamando a função para verificar se está funcionando
console.log(twoSun([2, 7, 11, 15], 18)); 