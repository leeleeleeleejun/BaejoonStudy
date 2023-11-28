function solution(s) {
	let target = s;
	let one = 0;
	let two = 0;

	while(true){
			const a = target.split('').filter(item => item === '1');
			one ++;
            two += target.length - a.length;
			target = (a.length).toString(2);
            if(target === '1') break;
	}
	
	return [one, two];
}