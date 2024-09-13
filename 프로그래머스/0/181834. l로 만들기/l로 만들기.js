function solution(myString) {    
    return myString.split('').map(i => i < 'l' ? 'l' : i).join('');
}