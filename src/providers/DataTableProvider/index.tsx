import type { TableTypes } from "@types";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import { createContext, useState } from "react";

interface DataTableProviderProps {
	children: ReactNode;
}

type DataTableSource = TableTypes.Row[];
type DataTableSetter = Dispatch<SetStateAction<TableTypes.Row[]>>;

export const DataTableSourceContext = createContext<DataTableSource>([]);
export const DataTableSetterContext = createContext<DataTableSetter>(() => {});

export const DataTableProvider = ({ children }: DataTableProviderProps) => {
	const [value, setValue] = useState<TableTypes.Row[]>([]);

	return (
		<DataTableSetterContext value={setValue}>
			<DataTableSourceContext value={value}>{children}</DataTableSourceContext>
		</DataTableSetterContext>
	);
};
