export namespace TableTypes {
	export interface Column {
		title: string;
		dataIndex: string;
		key: string;
	}

	export interface Row {
		key: number;
		name: string;
		date: string;
		age: number;
	}
}
