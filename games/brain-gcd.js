#!/usr/bin/env node
import readlineSync from 'readline-sync';

const gcdGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const win = `Congratulations, ${userName}!`;
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i++) {
    const zadanie = 'Question: ';
    const numberOne = Math.round(Math.random() * 10);
    const numberTwo = Math.round(Math.random() * 10);
    const primer = `${numberOne} ${numberTwo}`;
    console.log(zadanie + primer);
    const otvet = readlineSync.question('Your answer: ');
    const gcd = (a, b) => {
      if (b === 0) {
        return a;
      }
      return gcd(b, a % b);
    };
    const gcdOtvet = gcd(numberOne, numberTwo);
    if (Number(otvet) === gcdOtvet) {
      console.log('Correct!');
    } else if (Number(otvet) !== gcdOtvet) {
      const gameOver = `'${otvet}' is wrong answer ;(. Correct answer was '${gcdOtvet}'.\nLet's try again, ${userName}!`;
      console.log(gameOver);
      return;
    }
  }
  console.log(win);
};
gcdGame();
