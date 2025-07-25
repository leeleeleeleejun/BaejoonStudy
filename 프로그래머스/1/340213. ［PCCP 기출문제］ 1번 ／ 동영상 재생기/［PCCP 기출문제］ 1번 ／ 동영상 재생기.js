const formatArray = (answer) => {
    const copyAnswer = [...answer].map(Number)    
    if(answer[0] < 10){
        copyAnswer[0] = '0' + copyAnswer[0]
    }
    if(answer[1] < 10){
        copyAnswer[1] = '0' + copyAnswer[1]
    }
    return copyAnswer
}


const nextFn = (video_len, pos) => {
    let [m, s] = pos.map(Number)
    if(s >= 50){
        m++
        s -= 50
    }else{
        s += 10
    }
    
    if(video_len.join('') <= formatArray([m,s]).join('')){
        return video_len
    }else{
        return [m,s]
    }
}


const prevFn = (pos) => {
    let [m, s] = pos.map(Number)
    if(s < 10){
        if(m === 0){
            return [0,0]
        }
        m--
        s += 50
        
        return [m,s]
    }
    return [m, s - 10]
}


const opCheck = (pos, op_start, op_end) => {
    const copy_pos = pos.join('')
    const copy_op_start = op_start.replace(':','')
    const copy_op_end = op_end.replace(':','')  

    if(copy_op_start <= copy_pos && copy_pos <= copy_op_end){
        return op_end.split(':')
    }
    
    return pos
}


function solution(video_len, pos, op_start, op_end, commands) {
    var answer = '';
    video_len = video_len.split(':')
   
    pos = opCheck(pos.split(':'), op_start, op_end)
    
    
    
    answer = commands.reduce((accumulator, curr)=>{
        
        if(curr === 'next'){
            accumulator = (nextFn(video_len, accumulator))
        }else{
            accumulator = (prevFn(accumulator))
        }

        return opCheck(formatArray(accumulator), op_start, op_end)
    }, pos)
 

    
    return (answer).join(':');
}

