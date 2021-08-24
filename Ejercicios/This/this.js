// Establece `this` usando `call`
function saludar() {
  console.log(`Hola, soy ${this.name} ${this.apellido}`);
}

const david = {
  name: "David",
  apellido: "Polania",
};
saludar.call(david);

// Establece `this` usando `call` y pasar argumentos a la funcion
function caminar(metros, direccion) {
  console.log(`${this.name} camina ${metros} m. hacia el ${direccion}.`);
}

caminar.call(david, 400, "Norte");

// Establece `this` usando `apply`  y pasar argumentos a la funcion
const valores = [800, "Noreste"];
caminar.apply(david, valores);
/*
            Call - Coma
            Appy - Arreglo
        */

// Establecer `this` en una nueva funcion usando `bind`
const oriana = {
  name: "Oriana",
  apellido: "Gutierrez ",
};
const orianaSaluda = saludar.bind(oriana);
orianaSaluda();

//Establecer `this` en una nueva funcion usando `bind` en una funion con argumentos

const orianaCamina = caminar.bind(oriana, 2000);
orianaCamina("Oeste");

//Cuando es usar uno de estos metodos?
const buttons = document.getElementsByClassName("call-to-action");
//Tener presente que buttons es un nodeList
// buttons.forEach(button => {
//     button.onclick = () => alert("Nunca pares de aprender")
// });

// Nodelist

Array.prototype.forEach.call(buttons, (button) => {
  button.onclick = () => alert("Nunca pares de aprender");
});