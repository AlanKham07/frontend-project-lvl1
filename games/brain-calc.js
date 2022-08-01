#!/usr/bin/env node
import readlineSync from 'readline-sync';

const gameCalc = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  const win = `Congratulations, ${userName}!`;
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i++) {
    const operand = ['+', '-', '*'];
    const rand = Math.floor(Math.random() * operand.length);
    const znakVichisleniya = operand[rand];
    const zadanie = 'Question: ';
    const numberOne = Math.round(Math.random() * 10);
    const numberTwo = Math.round(Math.random() * 10);
    const formirovanieOtvetaNaPrimer = () => {
      let otvetPrimera;
      if (znakVichisleniya === '+') {
        otvetPrimera = numberOne + numberTwo;
      } else if (znakVichisleniya === '-') {
        otvetPrimera = numberOne - numberTwo;
      } else if (znakVichisleniya === '*') {
        otvetPrimera = numberOne * numberTwo;
      }
      return otvetPrimera;
    };
    const otvetPrimera = formirovanieOtvetaNaPrimer();
    const primer = `${numberOne} ${znakVichisleniya} ${numberTwo}`;
    console.log(zadanie + primer);
    const otvet = readlineSync.question('Your answer: ');
    if (Number(otvet) === otvetPrimera) {
      console.log('Correct!');
    } else if (Number(otvet) !== otvetPrimera) {
      const gameOver = `'${otvet}' is wrong answer ;(. Correct answer was '${otvetPrimera}'.\nLet's try again, ${userName}!`;
      console.log(gameOver);
      return;
    }
  }
  console.log(win);
};
gameCalc();
