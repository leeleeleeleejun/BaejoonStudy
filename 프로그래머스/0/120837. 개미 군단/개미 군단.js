function solution(hp) {
    var answer = 0;
    let _hp = hp;
    while(_hp > 0){
        if(_hp >= 5){
            answer += Math.floor(_hp /5); 
            _hp = _hp % 5;
        }else if(_hp >= 3){
            answer += Math.floor(_hp /3);
            _hp = _hp % 3;
        }else {
            
            answer +=_hp;
            _hp = 0;
        }
    }
    return answer;
}