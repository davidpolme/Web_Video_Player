function Hero(name) {
  this.name = name;
}
Hero.prototype.saludar = function () {
  console.log(`Hola, soy ${this.name}.`);
};
const zelda = new Hero("Zelda");

//Propiedades de la instancia
console.log(`Name: ${zelda.name}`);
// Propiedades de la clase
console.log(`Saludar: ${zelda.saludar}`);
// Propiedades Heredadas
console.log(`Saludar: ${zelda.toString}`);
// hasOwnProperty(de donde sale to String o esto?)
console.log(`zelda.hasOwnProperty("name"): ${zelda.hasOwnProperty("name")}`);
console.log(
  `zelda.hasOwnProperty("saludar"): ${zelda.hasOwnProperty("saludar")}`
);
/*
        Object.getPrototypeOf(zelda)
        const prototypeOfZelda = Object.getPrototypeOf(zelda)
        prototypeOfZelda === Hero.prototype
        //true
        Hero.prototype.figth = function(){console.log(""Figth!)}
        zelda.figth()
        zelda.hasOwnProperty("figth")
        //false
        zelda.toString()
        prototypeOfZelda.hasOwnProperty("toString")
        const prototypeOfprototypeOfZelda = Object.getPrototypeOf(Hero.prototype)
        prototypeOfprototypeOfZelda.hasOwnProperty("toString")
        */
