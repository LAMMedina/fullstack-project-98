import greetUser from '../src/cli.js';
import {
  randomNumber,
  randomOperator,
  sumRandomNumbers,
  restRandomNumbers,
  multiplyRandomNumbers,
} from '../bin/scripts.js';
import verifyAnswer from '../src/index.js';

export default () => {
  const userName = greetUser();
  console.log('¿Cuál es el resultado de la expresión?');

  for (let round = 1; round <= 3; round += 1) {
    const first = randomNumber(1, 100);
    const second = randomNumber(1, 100);
    const operator = randomOperator();
    console.log(`Pregunta: ${first} ${operator} ${second}`);

    // Determina la respuesta correcta
    let result;
    switch (operator) {
      case '+':
        result = sumRandomNumbers(first, second);
        break;
      case '-':
        result = restRandomNumbers(first, second);
        break;
      case '*':
        result = multiplyRandomNumbers(first, second);
        break;
      default:
        break;
    }

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
