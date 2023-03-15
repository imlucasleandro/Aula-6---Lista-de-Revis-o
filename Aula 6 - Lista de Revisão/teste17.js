function juntarOrdenado(arr1, arr2) {
    const novoArray = arr1.concat(arr2); // concatenando os arrays
    novoArray.sort((a, b) => a - b); // ordenando em ordem crescente
    return novoArray; // retornando o novo array ordenado
  }
  
  // Exemplo de uso:
  const array1 = [3, 7, 1];
  const array2 = [5, 2, 9];
  const arrayOrdenado = juntarOrdenado(array1, array2);
  console.log(arrayOrdenado); // [1, 2, 3, 5, 7, 9]
  