let promptOne = prompt('Enter a number please');
let promptTwo = prompt('Enter another number please');

console.log('The first input is a ' + typeof(promptOne),'The second input is a ' + typeof(promptTwo));

let promptNumberOne = parseInt(promptOne);
let promptNumberTwo = parseInt(promptTwo);;

console.log('The first input is a ' + typeof(promptNumberOne),'The second input is a ' + typeof(promptNumberTwo));

let sumNum = promptNumberOne + promptNumberTwo;
let restNum = promptNumberOne - promptNumberTwo;
let multNum = promptNumberOne * promptNumberTwo;
let divNum = promptNumberOne / promptNumberTwo;

document.write('<div class="sum">' + ' ' + promptNumberOne + ' ' + '+' + ' ' + promptNumberTwo + ' ' + '=' + ' ' + sumNum + '</div>');
document.write('<div class="subs">' + ' ' + promptNumberOne + ' ' + '-' + ' ' + promptNumberTwo + ' ' + '=' + ' ' + restNum + '</div>');
document.write('<div class="mult">' + ' ' + promptNumberOne + ' ' + '*' + ' ' + promptNumberTwo + ' ' + '=' + ' ' + multNum + '</div>');
document.write('<div class="divi">' + ' ' + promptNumberOne + ' ' + '/' + ' ' + promptNumberTwo + ' ' + '=' + ' ' + divNum + '</div>');

let promptTypeOne = prompt('Type something here');
let promptTypeTwo = prompt('Type something else');
let userTypedInput = promptTypeOne + promptTypeTwo;

document.write('<div class="typed">' + ' ' + 'You typed this' + ':' + ' ' + promptTypeOne + ' ' +  ' ' + promptTypeTwo + ' '+ '</div>');

document.write('<div class="chara">' + 'You typed' + ' ' + userTypedInput.length + ' ' + 'characters' + '</div>');

