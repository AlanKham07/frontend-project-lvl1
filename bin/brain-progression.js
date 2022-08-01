#!/usr/bin/env node
import readlineSync from 'readline-sync';

const progressionGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i++) {
    const zadanie = 'Question: ';
    const arrayNumber = [];
    const randomNumber = Math.floor(Math.random() * 100);
    const randomNumber1 = Math.floor(Math.random() * 10) + 1;
    arrayNumber.push(randomNumber);
    for (let a = 0; a < 10; a++) {
      const nextNumber = arrayNumber[arrayNumber.length - 1] + randomNumber1;
      arrayNumber.push(nextNumber);
    }
    const randomIndex = randomNumber1;
    const pravilniyOtvet = arrayNumber[randomIndex];
    arrayNumber[randomIndex] = '..';
    console.log(zadanie + arrayNumber);
    const otvet = readlineSync.question('Your answer: ');
    if (Number(otvet) === pravilniyOtvet) {
      console.log('Correct!');
    } else if (Number(otvet) !== pravilniyOtvet) {
      console.log(`'${otvet}' is wrong answer ;(. Correct answer was '${pravilniyOtvet}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
progressionGame();
