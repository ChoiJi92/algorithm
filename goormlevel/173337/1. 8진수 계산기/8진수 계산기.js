// Run by Node.js
const readline = require('readline');
const solution = (data) => {
	const array = data.pop().split(' ').map(Number)
	const sum = array.reduce((acc, cur) => acc+cur, 0)
	console.log(sum.toString(8))
}
(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let data =[]
	for await (const line of rl) {
		data.push(line)
		rl.close();
	}
	solution(data)
	process.exit();
})();
