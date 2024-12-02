import greetUser from '../src/cli.js';
import { randomNumber } from '../bin/scripts.js';
import verifyAnswer from '../src/index.js';

export default () => {
  const progressionFunction = (initial, step, length) => {
    const progression = [];
    for (let i = 0; i < length; i += 1) {
      progression.push(initial + i * step);
    }
    return progression;
  };

  const userName = greetUser();
  console.log('¿Qué número falta en la progresión?');
  const progresionLenght = randomNumber(5, 10);
  for (let round = 1; round <= 3; round += 1) {
    const initial = randomNumber(1, 11);
    const step = randomNumber(1, 6);
    const progression = progressionFunction(initial, step, progresionLenght);
    const hiddenElementIndex = randomNumber(0, progresionLenght - 1);
    const hiddenElement = progression[hiddenElementIndex];
    progression[hiddenElementIndex] = '..';

    console.log(`Pregunta: ${progression.join(' ')}`);
    if (!verifyAnswer(hiddenElement, userName)) {
      break;
    }
    if (round === 3) {
      console.log(`¡Felicidades, ${userName}!`);
      break;
    }
  }
};
