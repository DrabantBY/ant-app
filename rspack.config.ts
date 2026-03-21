import { resolve } from "node:path";
import { defineConfig } from "@rspack/cli";
import type { SwcLoaderOptions } from "@rspack/core";
import { rspack } from "@rspack/core";
import { ReactRefreshRspackPlugin } from "@rspack/plugin-react-refresh";

const isDev = process.env.NODE_ENV === "development";

const targets = ["last 2 versions", "> 0.2%", "not dead", "Firefox ESR"];

export default defineConfig({
	entry: {
		main: "./src/main.tsx",
	},
	resolve: {
		extensions: ["...", ".ts", ".tsx", ".jsx"],
		tsConfig: resolve(import.meta.dirname, "./tsconfig.json"),
		alias: {
			"@types": resolve(import.meta.dirname, "./src/types/index.ts"),
			"@shared": resolve(import.meta.dirname, "./src/shared/index.ts"),
			"@store": resolve(import.meta.dirname, "./src/store/index.ts"),
			"@hooks": resolve(import.meta.dirname, "./src/hooks/index.ts"),
			"@components": resolve(import.meta.dirname, "./src/components/index.ts"),
		},
	},
	module: {
		rules: [
			{
				test: /\.svg$/,
				type: "asset",
			},
			{
				test: /\.(jsx?|tsx?)$/,
				use: [
					{
						loader: "builtin:swc-loader",
						options: {
							jsc: {
								parser: {
									syntax: "typescript",
									tsx: true,
								},
								transform: {
									react: {
										runtime: "automatic",
										development: isDev,
										refresh: isDev,
									},
								},
							},
							env: { targets },
						} satisfies SwcLoaderOptions,
					},
				],
			},
		],
	},
	plugins: [
		new rspack.HtmlRspackPlugin({
			template: "./index.html",
		}),
		isDev ? new ReactRefreshRspackPlugin() : null,
	],
	optimization: {
		minimizer: [
			new rspack.SwcJsMinimizerRspackPlugin(),
			new rspack.LightningCssMinimizerRspackPlugin({
				minimizerOptions: { targets },
			}),
		],
	},
	experiments: {
		css: true,
	},
});
