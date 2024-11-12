import readlineSync from 'readline-sync';

const greetUser = () => {
  const userName = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${userName}!`);
  return userName;
};
export default greetUser;
