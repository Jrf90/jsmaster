// let maxNumber = 20;
// let minNumber = 1;
// let random = Math.random() * (maxNumber - minNumber) + minNumber;
// random = parseInt(random);

// while (true) {
//   let user = prompt("Lanza un número");
//   if (user === ramdom) {
//     alert("Has ganado!");
//     break;
//   } else if (user === 0) {
//     break;
//   } else if (user < random) {
//     alert("Tú numero es menos que el aleatorio");
//   } else if (user > random) {
//     alert("Tú numero es mayor que el número aleatorio");
//   }
// }
random = parseInt(random);

while (true) {
  let user = prompt("Pon un número");
  console.log(user);

  if (user == random) {
    alert("¡Has acertado! 🎉");
    break;
  } else if (user == 0) {
    break;
  } else if (user < random) {
    alert("El numero es menor que el numero magico. Inténtalo de nuevo 🕳");
  } else if (user > random) {
    alert("EL numero es mayor que el numero magico Inténtalo de nuevo 🕳");
  }
}
