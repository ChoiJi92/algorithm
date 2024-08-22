// Run by Node.js
const readline = require('readline');
const solution = (data) => {
	const [A,B] = data[0].split(' ').map(Number)
	console.log((A + B).toFixed(6))
}
(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let data = []
	for await (const line of rl) {
		data.push(line)
		rl.close();
	}
	solution(data)
	process.exit();
})();
