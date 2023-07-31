function solution(phone_book) {
    phone_book.sort();
    for (let i = 0; i < phone_book.length - 1; i++) {
        // 현재 전화번호가 다음 전화번호의 접두사인지 확인
        if (phone_book[i + 1].indexOf(phone_book[i]) === 0) {
            return false;
        }
    }

    return true;
}