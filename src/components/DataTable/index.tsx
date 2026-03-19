import { DeleteFilled, EditFilled, PlusOutlined } from "@ant-design/icons";
import type { DataTableType } from "@types";
import { Button, Space, Table, Tooltip } from "antd";
import { useDataTableState } from "../../hooks";

export const DataTable = () => {
	const { result, deleteRow } = useDataTableState();

	return (
		<div className="__container">
			<Button
				size="large"
				color="default"
				variant="solid"
				icon={<PlusOutlined />}
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
					sorter={(a, b) => a.date.localeCompare(b.date)}
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
							<Tooltip title="delete row">
								<Button
									size="large"
									shape="circle"
									icon={<DeleteFilled />}
									onClick={() => deleteRow(row)}
								/>
							</Tooltip>

							<Tooltip title="update row">
								<Button
									size="large"
									shape="circle"
									icon={<EditFilled />}
									onClick={() => {
										console.log(row);
									}}
								/>
							</Tooltip>
						</Space>
					)}
				/>
			</Table>
		</div>
	);
};
