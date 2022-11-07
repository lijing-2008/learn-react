export function calcNumTotal(num) {
	console.log("计算发生了")
	let total = 0
	for (let i = 0; i < num; i++) {
		total += i
	}
	return total
}

