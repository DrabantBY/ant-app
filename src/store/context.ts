import type { ActionDispatch } from "react";
import { createContext } from "react";
import type { DataTableAction } from "./actions.ts";
import { type DataTableState, dataTableInitialState } from "./initialState";

export const DataTableStateContext = createContext<DataTableState>(
	dataTableInitialState,
);
export const DataTableDispatchContext = createContext<
	ActionDispatch<[DataTableAction]>
>(() => {});
