function solution(sizes) {
    let row = 0
    let col = 0
    
    sizes.map(size => size.sort((a,b) => a - b)).forEach(size => {
        row = row < size[0] ? size[0] : row
        col = col < size[1] ? size[1] : col
    })
    
    return row * col;
}