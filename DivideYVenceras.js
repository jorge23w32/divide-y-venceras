function encontrarMaximo(array) {
    if (array.length === 1) {
        return array[0];
    }
    if (array.length === 2) {
        return array[0] > array[1] ? array[0] : array[1];
    }

    const mitad = Math.floor(array.length / 2);
    const maximoIzquierda = encontrarMaximo(array.slice(0,mitad));
    const maximoDerecha = encontrarMaximo(array.slice(mitad));

    return maximoIzquierda > maximoDerecha ? maximoIzquierda : maximoDerecha;
}

let arr = [1,2,3,9,49,32,45,4,6,7,674,74,34,2,453,5,4,6,3,87374834,453,37,5,568,764,54,64564,35645,76,8,765,67,8,64532,4,5675,435,675,436];
console.log(`El numero maximo del la lista es: ${encontrarMaximo(arr)}`)