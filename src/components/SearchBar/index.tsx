import { SearchOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import { useDataTableSearch } from "../../hooks";

export const SearchBar = () => {
	const { searchRow, clearSearch } = useDataTableSearch();

	return (
		<div className="__container">
			<Space.Compact size="large">
				<Space.Addon>
					<SearchOutlined />
				</Space.Addon>
				<Input
					placeholder="Search..."
					allowClear
					onChange={searchRow}
					onClear={clearSearch}
				/>
			</Space.Compact>
		</div>
	);
};
