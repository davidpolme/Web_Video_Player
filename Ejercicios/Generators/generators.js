function* simpleGenerator() {
  console.log("Generator Start");
  yield 1;
  yield 2;
  yield 3;
  console.log("Generator End");
}
const gen = simpleGenerator();
// //////////

function* idMaker() {
  let id = 1;
  while (true) {
    yield id;
    id++;
  }
}

const ids = idMaker();
// //////////////
function* idMakerwithReset() {
  let id = 1;
  let reset;
  while (true) {
    if (reset) {
      id = 1;
    } else {
      id++;
    }
    yield id;
  }
}

const idsReset = idMakerwithReset();

function* fibonacci() {
  let a = 1;
  let b = 1;
  while (true) {
    const nextNumber = a + b;
    a = b;
    b = nextNumber;
    yield nextNumber;
  }
}
const fiboGen = fibonacci();
