import greetUser from '../src/cli.js';
import { randomNumber } from '../bin/scripts.js';
import verifyAnswer from '../src/index.js';

export default () => {
  const userName = greetUser();
  console.log('Responde "yes" si el número es par, de lo contrario responde "no".');

  for (let round = 1; round <= 3; round += 1) {
    const number = randomNumber(1, 100);
    console.log(`Pregunta: ${number}`);

    // Determina la respuesta correcta
    const result = (number % 2 === 0) ? 'yes' : 'no';

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

  return true;
};
