import type { DataTableType } from "@types";
import { useCallback, useContext } from "react";
import {
	DATA_TABLE_ACTION_TYPE,
	DataTableDispatchContext,
	DataTableStateContext,
} from "../store";

export const useDataTableState = () => {
	const { result } = useContext(DataTableStateContext);
	const dispatch = useContext(DataTableDispatchContext);

	const createRow = useCallback(
		(payload: DataTableType.Row) => {
			payload.key = Date.now();
			dispatch({ type: DATA_TABLE_ACTION_TYPE.CREATE, payload });
		},
		[dispatch],
	);

	const updateRow = useCallback(
		(payload: DataTableType.Row) => {
			dispatch({ type: DATA_TABLE_ACTION_TYPE.UPDATE, payload });
		},
		[dispatch],
	);

	const deleteRow = useCallback(
		(payload: DataTableType.Row) => {
			dispatch({ type: DATA_TABLE_ACTION_TYPE.DELETE, payload });
		},
		[dispatch],
	);

	return {
		result,
		createRow,
		updateRow,
		deleteRow,
	};
};
