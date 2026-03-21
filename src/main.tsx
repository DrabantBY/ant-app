import { DataTableStateProvider } from "@store";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import "antd/dist/reset.css";
import "./index.css";

createRoot(document.getElementById("root") as HTMLElement).render(
	<StrictMode>
		<DataTableStateProvider>
			<App />
		</DataTableStateProvider>
	</StrictMode>,
);
