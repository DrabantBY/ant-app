import { DATA_TABLE_ACTION_TYPE, DataTableDispatchContext } from "@store";
import { debounce } from "lodash";
import {
	type ChangeEventHandler,
	useCallback,
	useContext,
	useMemo,
} from "react";

export const useDataTableSearch = () => {
	const dispatch = useContext(DataTableDispatchContext);

	const debouncedDispatch = useMemo(() => debounce(dispatch, 500), [dispatch]);

	const searchRow: ChangeEventHandler<HTMLInputElement> = useCallback(
		(event) => {
			debouncedDispatch({
				type: DATA_TABLE_ACTION_TYPE.SEARCH,
				payload: event.target.value,
			});
		},
		[debouncedDispatch],
	);

	const clearSearch = useCallback(() => {
		dispatch({
			type: DATA_TABLE_ACTION_TYPE.SEARCH,
			payload: "",
		});
	}, [dispatch]);

	return {
		searchRow,
		clearSearch,
	};
};
