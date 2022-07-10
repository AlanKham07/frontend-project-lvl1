#!/usr/bin/env node
import readlineSync from 'readline-sync';

const gameEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have tour name? ');
  const gameOver = `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`;
  const win = `Congratulations, ${userName}!`;
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i++) {
    const random = Math.round(Math.random() * 100);
    const zadanie = 'Question: ';
    console.log(zadanie + random);
    const otvet = readlineSync.question('Your answer: ');
    if (
      (random % 2 === 0 && otvet === 'yes') ||
      (random % 2 !== 0 && otvet === 'no')
    ) {
      console.log('Correct!');
    } else if (
      (random % 2 === 0 && otvet !== 'yes') ||
      (random % 2 !== 0 && otvet !== 'no')
    ) {
      console.log(gameOver);
      return;
    }
  }
  console.log(win);
};

gameEven();
