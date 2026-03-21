import type { DataTableType } from "@types";
import dayjs from "dayjs";

export interface DataTableState {
	list: DataTableType.Row[];
	search: string;
	result: DataTableType.Row[];
}

const INITIAL_DATA = [
	{
		key: 1,
		name: "Eugene",
		date: dayjs("1987-10-16"),
		salary: 1000,
	},

	{
		key: 2,
		name: "Alex",
		date: dayjs("1990-03-12"),
		salary: 1200,
	},

	{
		key: 3,
		name: "Simon",
		date: dayjs("2000-08-11"),
		salary: 800,
	},
];

export const dataTableInitialState: DataTableState = {
	list: INITIAL_DATA,
	search: "",
	result: INITIAL_DATA,
};
