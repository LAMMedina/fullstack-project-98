import readlineSync from 'readline-sync';

const verifyAnswer = (result, userName) => {
  const userAnswer = readlineSync.question('Tu respuesta: ');
  if (String(userAnswer) === String(result)) {
    console.log('¡Correcto!');
    return true;
  }
  console.log(`¡'${userAnswer}', es una respuesta incorrecta ;(. La respuesta correcta era '${result}'.\n¡Intentémoslo de nuevo, ${userName}!`);

  return false;
};

export default verifyAnswer;
