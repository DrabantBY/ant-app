import { ModalForm } from "@components";
import { useDataTableState, useModalFormState } from "@hooks";
import { CreateActionBtn, DeleteActionBtn, UpdateActionBtn } from "@shared";
import type { DataTableType } from "@types";
import { Flex, Table } from "antd";
import { useCallback } from "react";

export const DataTable = () => {
	const { result, createRow, updateRow, deleteRow } = useDataTableState();
	const {
		create,
		modalFormData,
		closeModalForm,
		openCreateModalForm,
		openUpdateModalForm,
	} = useModalFormState();

	const submitModalForm = useCallback(
		(row: DataTableType.Row) => {
			if (create) {
				createRow({ ...row, key: Date.now() });
			} else {
				updateRow(row);
			}
			closeModalForm();
		},
		[create, createRow, updateRow, closeModalForm],
	);

	return (
		<div className="__container">
			<Flex gap="medium" vertical align="flex-end">
				<CreateActionBtn onClick={openCreateModalForm} />

				<Table
					dataSource={result}
					pagination={false}
					style={{ alignSelf: "stretch" }}
				>
					<Table.Column<DataTableType.Row>
						title="Name"
						dataIndex="name"
						sorter={(a, b) => a.name.localeCompare(b.name)}
					/>

					<Table.Column<DataTableType.Row>
						title="Date"
						dataIndex="date"
						sorter={(a, b) => a.date.valueOf() - b.date.valueOf()}
						render={(date) => date.format("YYYY-MM-DD")}
					/>

					<Table.Column<DataTableType.Row>
						title="Salary"
						dataIndex="salary"
						sorter={(a, b) => a.salary - b.salary}
					/>

					<Table.Column<DataTableType.Row>
						title="Actions"
						key="actions"
						render={(_, row) => (
							<Flex gap="small">
								<UpdateActionBtn<DataTableType.Row>
									action={openUpdateModalForm}
									value={row}
								/>

								<DeleteActionBtn<DataTableType.Row>
									action={deleteRow}
									value={row}
								/>
							</Flex>
						)}
					/>
				</Table>
			</Flex>

			<ModalForm
				onCancel={closeModalForm}
				onFinish={submitModalForm}
				{...modalFormData}
			/>
		</div>
	);
};
