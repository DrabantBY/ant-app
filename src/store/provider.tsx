import type { ActionDispatch, ReactNode } from "react";
import { createContext, useReducer } from "react";
import type { DataTableAction } from "./actions.ts";
import { type DataTableState, dataTableInitialState } from "./initialState";
import { dataTableReducer } from "./reducer";

interface DataTableProviderProps {
	children: ReactNode;
}

export const DataTableSourceContext = createContext<DataTableState>(
	dataTableInitialState,
);
export const DataTableSetterContext = createContext<
	ActionDispatch<[DataTableAction]>
>(() => {});

export const DataTableStateProvider = ({
	children,
}: DataTableProviderProps) => {
	const [state, dispatch] = useReducer(dataTableReducer, dataTableInitialState);

	return (
		<DataTableSetterContext value={dispatch}>
			<DataTableSourceContext value={state}>{children}</DataTableSourceContext>
		</DataTableSetterContext>
	);
};
