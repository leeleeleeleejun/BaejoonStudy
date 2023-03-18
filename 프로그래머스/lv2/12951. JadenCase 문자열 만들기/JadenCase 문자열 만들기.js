function solution(s) {
    return s.toLowerCase().split(' ').map(i => {
       return i ? i.replace(i[0], i[0].toUpperCase()) : ''
    }).join(' ')
}

