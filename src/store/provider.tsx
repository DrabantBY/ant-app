import type { ReactNode } from "react";
import { useReducer } from "react";
import { DataTableDispatchContext, DataTableStateContext } from "./context";
import { dataTableInitialState } from "./initialState";
import { dataTableReducer } from "./reducer";

interface DataTableProviderProps {
	children: ReactNode;
}

export const DataTableStateProvider = ({
	children,
}: DataTableProviderProps) => {
	const [state, dispatch] = useReducer(dataTableReducer, dataTableInitialState);

	return (
		<DataTableDispatchContext value={dispatch}>
			<DataTableStateContext value={state}>{children}</DataTableStateContext>
		</DataTableDispatchContext>
	);
};
