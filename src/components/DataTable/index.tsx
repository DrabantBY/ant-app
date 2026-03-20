import { DeleteFilled, EditFilled, PlusOutlined } from "@ant-design/icons";
import type { DataTableType } from "@types";
import { Button, Space, Table, Tooltip } from "antd";
import { ModalForm } from "../../components";
import { useDataTableState, useModalFormState } from "../../hooks";

export const DataTable = () => {
	const { result, createRow, updateRow, deleteRow } = useDataTableState();
	const {
		create,
		modalFormData,
		closeModalForm,
		openCreateModalForm,
		openUpdateModalForm,
	} = useModalFormState();

	const submitModalForm = create ? createRow : updateRow;

	return (
		<div className="__container">
			<Button
				size="large"
				color="default"
				variant="solid"
				icon={<PlusOutlined />}
				onClick={openCreateModalForm}
			>
				Create Row
			</Button>

			<Table dataSource={result} pagination={false}>
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
						<Space>
							<Tooltip title="update row">
								<Button
									size="large"
									shape="circle"
									icon={<EditFilled />}
									onClick={() => openUpdateModalForm(row)}
								/>
							</Tooltip>

							<Tooltip title="delete row">
								<Button
									size="large"
									shape="circle"
									icon={<DeleteFilled />}
									onClick={() => deleteRow(row)}
								/>
							</Tooltip>
						</Space>
					)}
				/>
			</Table>
			<ModalForm
				onCancel={closeModalForm}
				onOk={closeModalForm}
				{...modalFormData}
				onFinish={submitModalForm}
			/>
		</div>
	);
};
