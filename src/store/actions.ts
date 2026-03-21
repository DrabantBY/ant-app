import type { DataTableType } from "@types";

export const DATA_TABLE_ACTION_TYPE = {
	CREATE: "CREATE DATA TABLE ROW",
	UPDATE: "UPDATE DATA TABLE ROW",
	DELETE: "DELETE DATA TABLE ROW",
	SEARCH: "SEARCH DATA TABLE ROW",
} as const;

export type DataTableActionType =
	(typeof DATA_TABLE_ACTION_TYPE)[keyof typeof DATA_TABLE_ACTION_TYPE];

export interface DataTableAction {
	type: DataTableActionType;
	payload: DataTableType.Row | string;
}
