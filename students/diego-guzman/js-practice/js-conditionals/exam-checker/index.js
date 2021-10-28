let testResult = parseInt(prompt('Enter your score'));

if(testResult < 5){
    document.write('<p>You have failed the test</p>');
}
else if(testResult >= 5 && testResult< 7){
document.write('<p>You have passed the test with an A-</p>');
}
else if(testResult >= 7 && testResult <9){
    document.write('<p>You have passed the test with an A</p>');
    }
else if(testResult >= 9 && testResult <10){
    document.write('<p>You have passed the test with an A+</p>');
}
else if(testResult===10){
    document.write('<p>You have an A++</p>');
}
else{
    document.write('<p>There was an error. Please contact your teacher</p>');
}
