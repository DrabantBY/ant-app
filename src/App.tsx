import { DataTable, SearchBar } from "./components";

export const App = () => {
	return (
		<div id="shell">
			<header>
				<SearchBar />
			</header>
			<hr />
			<main>
				<DataTable />
			</main>
		</div>
	);
};
