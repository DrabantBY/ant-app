import type { DataTableType } from "@types";
import { useCallback, useState } from "react";

export const useModalFormState = () => {
	const [state, setState] = useState<DataTableType.ModalState>({
		title: "",
		open: false,
		create: true,
	});

	const openModalForm = useCallback(
		(state: Partial<DataTableType.ModalState>) => {
			setState((prev) => ({ ...prev, ...state, open: true }));
		},
		[],
	);

	const closeModalForm = useCallback(() => {
		setState((prev) => ({ ...prev, open: false }));
	}, []);

	const openCreateModalForm = useCallback(() => {
		openModalForm({
			title: "Create Table Row",
			create: true,
			initialValues: undefined,
		});
	}, [openModalForm]);

	const openUpdateModalForm = useCallback(
		(initialValues: DataTableType.Row) => {
			openModalForm({
				title: "Update Table Row",
				create: false,
				initialValues,
			});
		},
		[openModalForm],
	);

	const { create, ...modalFormData } = state;

	return {
		create,
		modalFormData,
		openModalForm,
		closeModalForm,
		openCreateModalForm,
		openUpdateModalForm,
	};
};
