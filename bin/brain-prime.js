#!/usr/bin/env node
import readlineSync from 'readline-sync';

const gamePrime = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  const win = `Congratulations, ${userName}!`;
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i++) {
    const randomNumber = Math.floor(Math.random() * 100);
    const zadanie = 'Questions: ';
    const primer = zadanie + randomNumber;
    console.log(primer);
    const responseFormation = () => {
      for (let a = 2; a < randomNumber; a++) {
        if (randomNumber % a === 0) {
          return 'no';
        }
      }
      return 'yes';
    };
    const pravilniiOtvet = responseFormation();
    const otvet = readlineSync.question('Your answer: ');
    if (otvet === pravilniiOtvet) {
      console.log('Correct!');
    } else if (otvet !== pravilniiOtvet) {
      const gameOver = `'${otvet}' is wrong answer ;(. Correct answer was '${pravilniiOtvet}'.\nLet's try again, ${userName}!`;
      console.log(gameOver);
      return;
    }
  }
  console.log(win);
};
gamePrime();
