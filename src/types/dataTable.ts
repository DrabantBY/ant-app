import type { Key } from "react";

export namespace DataTableType {
	export interface Row {
		key: Key;
		name: string;
		date: string;
		salary: number;
	}
}
