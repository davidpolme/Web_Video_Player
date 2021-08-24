//Un objeto comun y corriente
/*
        const zelda = {
            name: "Zelda"
        }
        zelda.saludar = function () {
            console.log(`Hola, soy ${this.name}`)
        }
        zelda.saludar();

            //Otro objeto mas
        const link = {
            name: "Link"
        }
        link.saludar = function () {
            console.log(`Hola, soy ${this.name}`)
        }
        link.saludar();
        */
//Seamos un poco mas eficientes
/*function Hero(name) {
            const hero = {
                name: name
            }
            hero.saludar = function () {
                console.log(`Hola, soy ${this.name}`)
            }
            return hero
        }

        const zelda = Hero("Zelda")
        zelda.saludar();

        const link = Hero("Link")
        link.saludar();
        */

//Aun podemos mejorar mas y evitar tener que crear la misma funcion cada vez
/*
        const heroMethods = {
            saludar: function () {
                console.log(`Me llamo ${this.name}`)
            },
        }

        function Hero(name) {
            const hero = {
                name: name
            }
            hero.saludar = heroMethods.saludar
            return hero
        }

        const zelda = Hero("Zelda")
        zelda.saludar();

        const link = Hero("Link")
        link.saludar();
        */

// Object.create
// const nuevoObjeto = Object.create(objeto)
/*
        const heroMethods = {
            saludar: function () {
                console.log(`Soy ${this.name}`)
            },
        }

        function Hero(name) {
            const hero = Object.create(heroMethods)
            hero.name = name
            return hero
        }

        const zelda = Hero("Zelda")
        zelda.saludar();

        const link = Hero("Link")
        link.saludar();
        */

// Los metodos de Hero dentro de Hero

// Si es algo que le pertenece a Hero, lo debemos poner dentro de Hero
// const heroMethods = {
//     saludar: function () {
//         console.log(`Soy ${this.name}`)
//     },
// }
/*
                function Hero(name) {
                    const hero = Object.create(Hero.prototype)
                    hero.name = name
                    return hero
                }

                Hero.prototype.saludar = function () {
                    console.log(`Soy super heroina ${this.name}`)
                }
                

                const zelda = Hero("Zelda")
                zelda.saludar();

                const link = Hero("Link")
                link.saludar();
        */
// new es un atajo (Azucar sintactica) para llevar hero.prototype al objeto
function Hero(name) {
  // Al usar new, esto ocurre automaticamente
  // Siempre lo va a sacar del prototype del constructor
  // const hero = Object.create(Hero.prototype)
  // Sirve imaginarnos que va a ser guardado en this
  // this = Object.create(Hero.prototype)
  // Por lo tanto...
  // hero.name = name
  // ...Se convierte en:
  this.name = name;
  // El return ocurre implicitamente, no es necesario hacerlo
  // return hero
}

Hero.prototype.saludar = function () {
  console.log(`New Hero ${this.name}`);
};

const zelda = new Hero("Zelda");
zelda.saludar();

const link = new Hero("Link");
link.saludar();
