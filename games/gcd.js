import greetUser from '../src/cli.js';
import { randomNumber } from '../bin/scripts.js';
import verifyAnswer from '../src/index.js';

export default () => {
// logica del maximo común divisor
  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  };

  const userName = greetUser();
  console.log('Encuentra el máximo común divisor de los números dados.');

  for (let round = 1; round <= 3; round += 1) {
    const first = randomNumber(1, 100);
    const second = randomNumber(1, 100);
    console.log(`Pregunta: ${first} ${second}`);

    // Determina la respuesta correcta
    const result = gcd(first, second);

    // Verifica si la respuesta es correcta
    if (!verifyAnswer(result, userName)) {
      break;
    }

    // Muestra el mensaje de victoria si responde 3x correctamente
    if (round === 3) {
      console.log(`¡Felicidades, ${userName}!`);
      break;
    }
  }
};
