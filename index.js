// Code your solutions in this file
let names = [];
function writeCards(names, event) {
const message = [];
for (let i = 0; i < names.length; i++) {
    const text = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    message.push(text);
}
return message;
}
function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}
