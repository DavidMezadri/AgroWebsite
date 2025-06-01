import "./styles.module.css";
import { useState } from "react";
import { type ChartDataItem, Charts } from "../../components/Charts/Charts";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import {
	TableAnalysis,
	type TableDataProps,
} from "../../components/TableAnalysis/TableAnalysis";

const data = [
	{ id: 1, name: "Amostra 1", date: new Date("2008-02-01") },
	{ id: 2, name: "Amostra 1", date: new Date("2008-02-01") },
	{ id: 3, name: "Amostra 1", date: new Date("2008-02-01") },
	{ id: 4, name: "Amostra 1", date: new Date("2008-02-01") },
	{ id: 1, name: "Amostra 1", date: new Date("2008-02-01") },
	{ id: 2, name: "Amostra 1", date: new Date("2008-02-01") },
	{ id: 3, name: "Amostra 1", date: new Date("2008-02-01") },
	{ id: 4, name: "Amostra 1", date: new Date("2008-02-01") },
	{ id: 1, name: "Amostra 1", date: new Date("2008-02-01") },
	{ id: 2, name: "Amostra 1", date: new Date("2008-02-01") },
	{ id: 3, name: "Amostra 1", date: new Date("2008-02-01") },
	{ id: 4, name: "Amostra 1", date: new Date("2008-02-01") },
	{ id: 1, name: "Amostra 1", date: new Date("2008-02-01") },
	{ id: 2, name: "Amostra 1", date: new Date("2008-02-01") },
	{ id: 3, name: "Amostra 1", date: new Date("2008-02-01") },
	{ id: 4, name: "Amostra 1", date: new Date("2008-02-01") },
	{ id: 1, name: "Amostra 1", date: new Date("2008-02-01") },
	{ id: 2, name: "Amostra 1", date: new Date("2008-02-01") },
	{ id: 3, name: "Amostra 1", date: new Date("2008-02-01") },
	{ id: 4, name: "Amostra 1", date: new Date("2008-02-01") },
	{ id: 1, name: "Amostra 1", date: new Date("2008-02-01") },
	{ id: 2, name: "Amostra 1", date: new Date("2008-02-01") },
	{ id: 3, name: "Amostra 1", date: new Date("2008-02-01") },
	{ id: 4, name: "Amostra 1", date: new Date("2008-02-01") },
];

const dataTable: TableDataProps = {
	title: "Lista de Análises",
	headLabels: ["Número ID", "Name da Amostra", "Data"],
	data: data,
};

const chartData: ChartDataItem[][] = [
	[
		{ element: "pH", current: 450, missing: 300 },
		{ element: "CO", current: 380, missing: 420 },
		{ element: "MO", current: 520, missing: 120 },
		{ element: "CO", current: 140, missing: 550 },
		{ element: "P", current: 600, missing: 350 },
		{ element: "K", current: 480, missing: 400 },
		{ element: "Ca", current: 480, missing: 500 },
		{ element: "Mg", current: 480, missing: 500 },
		{ element: "S", current: 140, missing: 550 },
		{ element: "B", current: 600, missing: 350 },
		{ element: "Zn", current: 480, missing: 400 },
		{ element: "Cu", current: 480, missing: 500 },
		{ element: "Mn", current: 480, missing: 500 },
		{ element: "Fe", current: 480, missing: 400 },
		{ element: "Al", current: 480, missing: 500 },
		{ element: "CTC", current: 480, missing: 500 },
		{ element: "V%", current: 140, missing: 550 },
		{ element: "H+Al", current: 600, missing: 350 },
	],
	[
		{ element: "pH", current: 450, missing: 300 },
		{ element: "CO", current: 380, missing: 420 },
		{ element: "MO", current: 520, missing: 120 },
		{ element: "CO", current: 140, missing: 550 },
		{ element: "P", current: 600, missing: 350 },
		{ element: "K", current: 480, missing: 400 },
		{ element: "Ca", current: 480, missing: 500 },
		{ element: "Mg", current: 480, missing: 500 },
		{ element: "S", current: 140, missing: 550 },
		{ element: "B", current: 600, missing: 350 },
		{ element: "Zn", current: 480, missing: 400 },
		{ element: "Cu", current: 480, missing: 500 },
		{ element: "Mn", current: 480, missing: 500 },
		{ element: "Fe", current: 480, missing: 400 },
		{ element: "Al", current: 480, missing: 500 },
		{ element: "CTC", current: 480, missing: 500 },
		{ element: "V%", current: 140, missing: 550 },
		{ element: "H+Al", current: 600, missing: 350 },
	],
];

const chartConfig = {
	current: {
		label: "Atual",
		color: "hsl(var(--chart-1))",
	},
	missing: {
		label: "Ideal",
		color: "hsl(var(--chart-2))",
	},
};

export const Table = () => {
	const [tableEye, setTableEye] = useState(true);
	return (
		<div>
			<Sidebar />
			{/* grafico */}
			<div className="fixed left-1/2 -translate-x-1/2 translate-y-[5vh] bg-background">
				<div className="lg:w-[60vw] w-[100vw] h-[80vh]">
					<div className="rounded-lg shadow-xl">
						<Charts
							title={"alo"}
							chartConfig={chartConfig}
							chartData={chartData}
							onToggle={() => setTableEye(!tableEye)}
						/>
					</div>
				</div>
			</div>
			{/* tabela */}
			<div
				className={`fixed h-full w-full bg-background ${tableEye ? "z-1 opacity-100" : "-z-1 opacity-0"} duration-800`}
			>
				<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background overflow-y-auto rounded-lg border-1 border-border">
					<div className="lg:w-[70vw] w-[100vw] h-[81vh] text-text">
						<div>
							<TableAnalysis
								{...dataTable}
								/* aqui eu preciso pegar o index da tabela e melhor alterar no grafico em z */
								onToggle={() => setTableEye(!tableEye)}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
