process.stdin.on("data", function(inputFromUser) {
	let firstWeekDay = parseInt(inputFromUser.toString().trim());
	let numberOfDays = 7; // or set to desired number of days
	const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
	for (let i = 0; i < numberOfDays; i++) {
		let dayIndex = (firstWeekDay - 1 + i) % 7;
		process.stdout.write(days[dayIndex] + "\n");
	}
});