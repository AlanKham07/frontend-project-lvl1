import readlineSync from 'readline-sync';

const greetings = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have tour name? ');
  console.log(`Hello, ${userName}!`);
};
export default greetings;
