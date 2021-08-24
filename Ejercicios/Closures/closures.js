//IIFE:: Inmediatly Invoke Function Expresion
/*
        (function () {
            let color = 'green'

            function printColor() {
                console.log(color)
            }
            printColor();
        })()
        */

// Funciones que regresan funciones
/*
        function makeColorPrinter(color) {
            let colorMessage = `The color is ${color}`
            return function () {
                console.log(colorMessage)
            }            
        }
        let greenColorPrinter = makeColorPrinter("green")
        console.log(greenColorPrinter())
        */

// Variables Privadas
/*       
        const counter = {
            count: 3,
        }
        // Quisiera que no se pudiera acceder al valor de count
        // Sin embargo si puedo accederlo mediante la simple
        console.log(counter.count)
        */
//    Se realiza un closure para que la variable-
// sea privada
function makeCounter(n) {
  let count = n;

  return {
    increase: () => count++,
    decrease: () => count--,
    getCount: () => count,
  };
}
let counter = makeCounter(7);

console.log(`Get count ${counter.getCount()}`);
counter.increase();
console.log(`Get count ${counter.getCount()}`);
counter.decrease();
counter.decrease();
counter.decrease();
console.log(`Get count ${counter.getCount()}`);
