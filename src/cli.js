import readlineSync from 'readline-sync';
export const greetings = () => {
    const userName = readlineSync.question('May I have tour name? ');
    console.log('Hello, ' + userName + '!');
};
