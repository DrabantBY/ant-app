import type { DataTableType } from "@types";

export interface DataTableState {
	list: DataTableType.Row[];
	search: string;
	result: DataTableType.Row[];
}

const INITIAL_DATA = [
	{
		key: 1,
		name: "Eugene",
		date: "1987",
		salary: 1000,
	},

	{
		key: 2,
		name: "Alex",
		date: "1990",
		salary: 1200,
	},

	{
		key: 3,
		name: "Simon",
		date: "2000",
		salary: 800,
	},
];

export const dataTableInitialState: DataTableState = {
	list: INITIAL_DATA,
	search: "",
	result: INITIAL_DATA,
};
