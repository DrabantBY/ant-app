import type { DataTableType } from "@types";
import dayjs from "dayjs";
import { DATA_TABLE_ACTION_TYPE, type DataTableAction } from "./actions";
import type { DataTableState } from "./initialState";

const filterRowData = (row: DataTableType.Row, search: string) =>
	search === "" ||
	Object.entries(row).some(
		([key, val]) =>
			key !== "key" &&
			((typeof val === "string" &&
				val.toLowerCase().includes(search.toLowerCase())) ||
				(typeof val === "number" && `${val}`.includes(search)) ||
				(dayjs.isDayjs(val) && val.format("YYYY-MM-DD").includes(search))),
	);

export const dataTableReducer = (
	state: DataTableState,
	{ type, payload }: DataTableAction,
) => {
	switch (type) {
		case DATA_TABLE_ACTION_TYPE.CREATE: {
			return typeof payload === "string"
				? state
				: {
						...state,
						list: [...state.list, payload],
						result: filterRowData(payload, state.search)
							? [...state.result, payload]
							: state.result,
					};
		}

		case DATA_TABLE_ACTION_TYPE.UPDATE: {
			if (typeof payload === "string") return state;

			const list = state.list.map((item) =>
				item.key === payload.key ? { ...item, ...payload } : item,
			);
			return {
				...state,
				list,
				result: list.filter((item) => filterRowData(item, state.search)),
			};
		}

		case DATA_TABLE_ACTION_TYPE.DELETE: {
			return typeof payload === "string"
				? state
				: {
						...state,
						list: state.list.filter(({ key }) => key !== payload.key),
						result: state.result.filter(({ key }) => key !== payload.key),
					};
		}

		case DATA_TABLE_ACTION_TYPE.SEARCH: {
			return typeof payload === "string"
				? {
						...state,
						search: payload,
						result: state.list.filter((item) => filterRowData(item, payload)),
					}
				: state;
		}

		default: {
			return state;
		}
	}
};
