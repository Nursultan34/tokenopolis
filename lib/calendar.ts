export const CONSTANT_DAYS_ORDER = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//Примерно так я представляю ивент
export interface IEvent {
	head: string;
	body: string;
}

export interface CalendarOptions {
	year?: number;
	month?: number;
}

export interface CalendarDaysData {
	day?: number | string;
	event: IEvent | null;
}

export interface CalendarData {
	year: number;
	month: number;
	totalDays?: number;
	monthName: string;
	days: CalendarDaysData[];
	daysOfWeek: string[];
	leapYear?: boolean;
	leapMonth?: boolean;
}

export interface createHTMLOptions {
	includeStyles?: boolean;
}

class Calendar {
	year: number;
	month: number;
	days: string[];
	months: string[];

	/**
	 * Creates new Calendar
	 * @example ```js
	 * const calendar = new Calendar({ year: 2021, month: 6 });
	 * console.log(calendar.create());
	 * ```
	 */
	constructor(options?: CalendarOptions) {
		/**
		 * Current year
		 */
		this.year = this._validate(options && typeof options.year === "number" ? options.year : new Date().getFullYear(), "number", "year");

		/**
		 * Current month
		 */
		this.month = this._validate(options && typeof options.month === "number" ? options.month : new Date().getMonth(), "number", "month");

		/**
		 * Days format
		 */
		this.days = ["ПОНЕДЕЛЬНИК", "ВТОРНИК", "СРЕДА", "ЧЕТВЕРГ", "ПЯТНИЦА", "СУББОТА", "ВОСКРЕСЕНЬЕ"];

		/**
		 * Months format
		 */
		this.months = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
	}

	/**
	 * Sets custom days notation
	 * @param days Days name
	 */
	public setDays(days: string[]): Calendar {
		const isValid = days.length === 7 && days.some((x) => typeof x === "string");
		if (!isValid) throw new Error("Invalid days data");

		this.days = days;
		return this;
	}

	/**
	 * Sets custom months notaiton
	 * @param months Months name
	 */
	public setMonths(months: string[]): Calendar {
		const isValid = months.length === 12 && months.some((x) => typeof x === "string");
		if (!isValid) throw new Error("Invalid months data");

		this.months = months;
		return this;
	}

	/**
	 * Returns total number of days in this month
	 */
	public get length(): number {
		if (this.month === 1 && ((this.year % 4 == 0 && this.year % 100 !== 0) || this.year % 400 === 0)) return 29;
		return CONSTANT_DAYS_ORDER[this.month];
	}

	public get lengthPastMonth(): number {
		if (this.month === 2 && ((this.year % 4 == 0 && this.year % 100 !== 0) || this.year % 400 === 0)) return 29;
		if (this.month === 0) return CONSTANT_DAYS_ORDER[11];
		return CONSTANT_DAYS_ORDER[this.month - 1];
	}

	/**
	 * If it is a leap year
	 */
	public get leap(): boolean {
		return (this.year % 4 == 0 && this.year % 100 !== 0) || this.year % 400 === 0;
	}

	/**
	 * Returns current month name
	 */
	public get monthName(): string {
		return this.months[this.month];
	}

	/**
	 * Creates calendar
	 * @example ```js
	 * const data = new Calendar({ year: 2020, month: 0 });
	 * console.log(data.create());
	 * ```
	 */
	public create(): CalendarData {
		const firstDay = new Date(this.year, this.month, 1);
		const intitalDay = firstDay.getDay();
		const length = this.length;
		const month = this.monthName;

		let days = [];

		let day = 1;

		for (let i = 0; i < 9; i++) {
			for (let j = 0; j < 7; j++) {
				if (day <= length && (i > 0 || j >= intitalDay)) {
					days.push({
						day: day < 10 ? `0${day}` : day,
						event: null,
					});
					day++;
				} else {
					days.push({
						day: null,
						event: null,
					});
				}
			}

			if (day > length) break;
		}

		if (days[0].day === "01") {
			for (let i = 0; i < 6; i++) {
				days.unshift({ day: null, event: null });
			}
			days.push({ day: null, event: null });
		} else {
			days.shift();
			days.push({ day: null, event: null });
		}

		if (days[0].day === null) {
			let i = 0;
			while (days[i].day === null) {
				i++;
			}
			for (let j = 0; j < i; j++) {
				days[j].day = this.lengthPastMonth - i + j + 1;
			}
		}

		let count = 1;
		for (let i in days) {
			if (days[i].day === null) {
				days[i].day = `0${count}`;
				count++;
			}
			if (count === 7) {
				for (let i = 0; i < 7; i++) days.pop();
			}
		}

		return {
			year: this.year,
			month: this.month,
			monthName: month,
			days: days,
			daysOfWeek: this.days,
		} as CalendarData;
	}

	toJSON(): CalendarData {
		return this.create();
	}

	/**
	 * Static calendar creator
	 * @param year Creates calendar of full year
	 * @example ```js
	 * const calendar = Calendar.createCalendar(2020);
	 * console.log(calendar.map(m => m.monthName));
	 * ```
	 */
	public static createCalendar(year = new Date().getFullYear()): CalendarData[] {
		const valid = typeof year === "number" && year >= 1000 && year <= 9999;
		if (!valid) throw new TypeError(`Invalid year: ${year}!`);

		const cal = [];
		for (let i = 0; i < 12; i++) {
			const st = new Calendar({
				year: year,
				month: i,
			});

			cal.push(st.create());
		}

		return cal;
	}

	/**
	 * Internal number validation method
	 * @param data data to validate
	 * @param vtype value data type
	 * @param dataType validation data type
	 */
	private _validate(data: number, vtype = "number", dataType: "year" | "month"): number {
		switch (dataType) {
			case "month":
				if (typeof data === vtype && !(data < 0 && data > 11)) return data;
				throw new TypeError(`Invalid month: ${data}!`);
			case "year":
				if (typeof data === vtype && !(data < 1000 && data > 9999)) return data;
				throw new TypeError(`Invalid year: ${data}!`);
			default:
				throw new Error("Invalid type");
		}
	}
}

export { Calendar };
export default Calendar;
//
export const CONSTANT_DAYS_ORDER = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//Примерно так я представляю ивент
export interface IEvent {
	head: string;
	body: string;
}

export interface CalendarOptions {
	year?: number;
	month?: number;
}

export interface CalendarDaysData {
	row: number;
	day?: number | string;
	event: IEvent | null;
}

export interface CalendarData {
	year: number;
	month: number;
	totalDays?: number;
	monthName: string;
	days: CalendarDaysData[];
	leapYear?: boolean;
	leapMonth?: boolean;
}

export interface createHTMLOptions {
	includeStyles?: boolean;
}

class Calendar {
	year: number;
	month: number;
	days: string[];
	months: string[];

	/**
	 * Creates new Calendar
	 * @example ```js
	 * const calendar = new Calendar({ year: 2021, month: 6 });
	 * console.log(calendar.create());
	 * ```
	 */
	constructor(options?: CalendarOptions) {
		/**
		 * Current year
		 */
		this.year = this._validate(options && typeof options.year === "number" ? options.year : new Date().getFullYear(), "number", "year");

		/**
		 * Current month
		 */
		this.month = this._validate(options && typeof options.month === "number" ? options.month : new Date().getMonth(), "number", "month");

		/**
		 * Days format
		 */
		this.days = ["ПОНЕДЕЛЬНИК", "ВТОРНИК", "СРЕДА", "ЧЕТВЕРГ", "ПЯТНИЦА", "СУББОТА", "ВОСКРЕСЕНЬЕ"];

		/**
		 * Months format
		 */
		this.months = ["январь", "февоаль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
	}

	/**
	 * Sets custom days notation
	 * @param days Days name
	 */
	public setDays(days: string[]): Calendar {
		const isValid = days.length === 7 && days.some((x) => typeof x === "string");
		if (!isValid) throw new Error("Invalid days data");

		this.days = days;
		return this;
	}

	/**
	 * Sets custom months notaiton
	 * @param months Months name
	 */
	public setMonths(months: string[]): Calendar {
		const isValid = months.length === 12 && months.some((x) => typeof x === "string");
		if (!isValid) throw new Error("Invalid months data");

		this.months = months;
		return this;
	}

	/**
	 * Returns total number of days in this month
	 */
	public get length(): number {
		if (this.month === 1 && ((this.year % 4 == 0 && this.year % 100 !== 0) || this.year % 400 === 0)) return 29;
		return CONSTANT_DAYS_ORDER[this.month];
	}

	public get lengthPastMonth(): number {
		if (this.month === 1 && ((this.year % 4 == 0 && this.year % 100 !== 0) || this.year % 400 === 0)) return 29;
		return CONSTANT_DAYS_ORDER[this.month - 1];
	}

	/**
	 * If it is a leap year
	 */
	public get leap(): boolean {
		return (this.year % 4 == 0 && this.year % 100 !== 0) || this.year % 400 === 0;
	}

	/**
	 * Returns current month name
	 */
	public get monthName(): string {
		return this.months[this.month];
	}

	/**
	 * Creates calendar
	 * @example ```js
	 * const data = new Calendar({ year: 2020, month: 0 });
	 * console.log(data.create());
	 * ```
	 */
	public create(): CalendarData {
		const firstDay = new Date(this.year, this.month, 1);
		const intitalDay = firstDay.getDay();
		const length = this.length;
		const month = this.monthName;

		let days = [];

		let day = 1;

		for (let i = 0; i < 9; i++) {
			for (let j = 0; j < 7; j++) {
				if (day <= length && (i > 0 || j >= intitalDay)) {
					days.push({
						row: i,
						day: day < 10 ? `0${day}` : day,
						event: null,
					});
					day++;
				} else {
					days.push({
						row: i,
						day: null,
						event: null,
					});
				}
			}

			if (day > length) break;
		}

		if (days[0].day === null) {
			let i = 0;
			while (days[i].day === null) {
				i++;
			}
			for (let j = 0; j < i; j++) {
				days[j].day = this.lengthPastMonth - i + j + 1;
			}
		}

		if (days.at(-1).day === null) {
			let i = 0;
			while (days[days.length - 1 - i].day === null) {
				i++;
			}
			for (let j = 0; j < i; j++) {
				days[days.length - i].day = j + 1 < 10 ? `0${j + 1}` : j + 1;
				i--;
			}
		}

		return {
			year: this.year,
			month: this.month,
			monthName: month,
			days: days,
		} as CalendarData;
	}

	toJSON(): CalendarData {
		return this.create();
	}

	/**
	 * Static calendar creator
	 * @param year Creates calendar of full year
	 * @example ```js
	 * const calendar = Calendar.createCalendar(2020);
	 * console.log(calendar.map(m => m.monthName));
	 * ```
	 */
	public static createCalendar(year = new Date().getFullYear()): CalendarData[] {
		const valid = typeof year === "number" && year >= 1000 && year <= 9999;
		if (!valid) throw new TypeError(`Invalid year: ${year}!`);

		const cal = [];
		for (let i = 0; i < 12; i++) {
			const st = new Calendar({
				year: year,
				month: i,
			});

			cal.push(st.create());
		}

		return cal;
	}

	/**
	 * Internal number validation method
	 * @param data data to validate
	 * @param vtype value data type
	 * @param dataType validation data type
	 */
	private _validate(data: number, vtype = "number", dataType: "year" | "month"): number {
		switch (dataType) {
			case "month":
				if (typeof data === vtype && !(data < 0 && data > 11)) return data;
				throw new TypeError(`Invalid month: ${data}!`);
			case "year":
				if (typeof data === vtype && !(data < 1000 && data > 9999)) return data;
				throw new TypeError(`Invalid year: ${data}!`);
			default:
				throw new Error("Invalid type");
		}
	}
}

export { Calendar };
