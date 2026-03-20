import type { Dayjs } from "dayjs";
import type { Key } from "react";

export namespace DataTableType {
	export interface Row {
		key: Key;
		name: string;
		date: Dayjs;
		salary: number;
	}

	export interface ModalState {
		title: string;
		open: boolean;
		create: boolean;
		initialValues?: DataTableType.Row;
	}
}
