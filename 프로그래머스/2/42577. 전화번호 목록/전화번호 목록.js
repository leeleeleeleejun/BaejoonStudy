function solution(phone_book) {
    var answer = true;
    phone_book.sort()
    for(let i = 0; i < phone_book.length - 1; i++){
        const curr = phone_book[i]
        const prev = phone_book[i+1].slice(0, curr.length)            
            if(curr === prev){
                return false;
            }
        
    }
    
    
    return answer;
}