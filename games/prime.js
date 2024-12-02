import greetUser from '../src/cli.js';
import { randomNumber } from '../bin/scripts.js';
import verifyAnswer from '../src/index.js';

export default () => {
  const isPrime = (num) => {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const userName = greetUser();
  console.log('Responde "yes" si el número dado es primo. De lo contrario, responde "no".');

  for (let round = 1; round <= 3; round += 1) {
    const number = randomNumber(1, 100);
    const correctAnswer = isPrime(number) ? 'yes' : 'no';

    console.log(`Pregunta: ${number}`);

    if (!verifyAnswer(correctAnswer, userName)) {
      break;
    }

    if (round === 3) {
      console.log(`¡Felicidades, ${userName}!`);
    }
  }
};
