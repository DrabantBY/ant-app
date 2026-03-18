import { Table } from "antd";
import { DataTable, SearchBar } from "./components";
import "antd/dist/reset.css";

export const App = () => {
	const dataSource = [
		{
			key: "1",
			name: "Mike",
			age: 32,
			address: "10 Downing Street",
		},
		{
			key: "2",
			name: "John",
			age: 42,
			address: "10 Downing Street",
		},
	];

	const columns = [
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
		},
		{
			title: "Age",
			dataIndex: "age",
			key: "age",
		},
		{
			title: "Address",
			dataIndex: "address",
			key: "address",
		},
	];

	return (
		<div id="shell">
			<header>
				<SearchBar />
			</header>
			<main>
				<DataTable />
				<div className="__container">
					<Table dataSource={dataSource} columns={columns} />
				</div>
			</main>
		</div>
	);
};
