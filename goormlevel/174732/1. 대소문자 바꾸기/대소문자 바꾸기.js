// Run by Node.js
const readline = require('readline');
const solution = (data) => {
	const array = data.pop().split('').map(v => {
		if(v === v.toUpperCase()) return v.toLowerCase()
		else return v.toUpperCase()
	}).join('')
	
	
	console.log(array)
}
(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let data = [];
	for await (const line of rl) {
		data.push(line)
		rl.close();
	}
	solution(data)
	process.exit();
})();

