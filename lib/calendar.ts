import * as R from "https://deno.land/x/ramda@v0.27.2/mod.ts";

function calendar<T>(month: number, year: number, f: (_: { date: Date; isInMonth: boolean }) => T): T[] {
	const firstDay = new Date(year, month, 1);
	const previousMonday = subtractDays(firstDay, firstDay.getDay() - 1);
	const nextSunday = new Date(year, month + 1, 0);

	return betweenDates(previousMonday, nextSunday)
		.map((d: Date) => f({ date: d, isInMonth: d.getMonth() == month }))
}

function subtractDays(date: Date, days: number): Date {
	const newDate = new Date(date);
	newDate.setDate(newDate.getDate() - days);
	return newDate;
}

const betweenDates = (start: Date, end: Date): Date[] =>
	start > end ? [] : [start, ...betweenDates(nextDay(start), end)];

// * 1000 to convert to milliseconds
const nextDay = (date: Date): Date =>
	new Date(date.getTime() + 60 * 60 * 24 * 1000);

console.log(R.splitEvery(7, calendar(3, 2023, ({ date, isInMonth }) => date.toDateString())));
