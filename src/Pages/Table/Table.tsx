import "./styles.module.css";
import "../../styles/theme.css";
import { useState } from "react";

import {
	Charts,
	Sidebar,
	type TableAllData,
	TableAnalysis,
} from "../../components/index";

/* const data = [
	{ id: 1, name: "Amostra 1", date: new Date("2008-02-01") },
	{ id: 2, name: "Amostra 1", date: new Date("2008-02-01") },
	{ id: 3, name: "Amostra 1", date: new Date("2008-02-01") },
	{ id: 4, name: "Amostra 1", date: new Date("2008-02-01") },
	{ id: 5, name: "Amostra 1", date: new Date("2008-02-01") },
	{ id: 6, name: "Amostra 1", date: new Date("2008-02-01") },
	{ id: 7, name: "Amostra 1", date: new Date("2008-02-01") },
	{ id: 8, name: "Amostra 1", date: new Date("2008-02-01") },
	{ id: 9, name: "Amostra 1", date: new Date("2008-02-01") },
	{ id: 10, name: "Amostra 1", date: new Date("2008-02-01") },
	{ id: 11, name: "Amostra 1", date: new Date("2008-02-01") },
	{ id: 12, name: "Amostra 1", date: new Date("2008-02-01") },
	{ id: 13, name: "Amostra 1", date: new Date("2008-02-01") },
	{ id: 14, name: "Amostra 1", date: new Date("2008-02-01") },
	{ id: 15, name: "Amostra 1", date: new Date("2008-02-01") },
	{ id: 16, name: "Amostra 1", date: new Date("2008-02-01") },
	{ id: 17, name: "Amostra 1", date: new Date("2008-02-01") },
	{ id: 18, name: "Amostra 1", date: new Date("2008-02-01") },
	{ id: 19, name: "Amostra 1", date: new Date("2008-02-01") },
	{ id: 20, name: "Amostra 1", date: new Date("2008-02-01") },
	{ id: 21, name: "Amostra 1", date: new Date("2008-02-01") },
	{ id: 22, name: "Amostra 1", date: new Date("2008-02-01") },
	{ id: 23, name: "Amostra 1", date: new Date("2008-02-01") },
	{ id: 24, name: "Amostra 1", date: new Date("2008-02-01") },
]; */

const chartData: TableAllData = {
	dataTableHeader: {
		title: "Lista de Análises",
		headLabels: ["Número ID", "Name da Amostra", "Data"],
	},
	dataLabelsInfo: [
		{
			labelInfo: { id: 1, name: "Amostra 1", date: new Date("2008-02-01") },
			dataInfoAnalysis: [
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
		},
		{
			labelInfo: { id: 2, name: "Amostra 2", date: new Date("2022-05-15") },
			dataInfoAnalysis: [
				{ element: "pH", current: 500, missing: 250 },
				{ element: "CO", current: 300, missing: 400 },
				{ element: "MO", current: 450, missing: 150 },
				{ element: "P", current: 650, missing: 300 },
				{ element: "K", current: 470, missing: 390 },
				{ element: "Ca", current: 490, missing: 510 },
				{ element: "Mg", current: 460, missing: 520 },
				{ element: "S", current: 160, missing: 540 },
				{ element: "B", current: 620, missing: 340 },
				{ element: "Zn", current: 490, missing: 410 },
				{ element: "Cu", current: 470, missing: 490 },
				{ element: "Mn", current: 460, missing: 510 },
				{ element: "Fe", current: 470, missing: 420 },
				{ element: "Al", current: 460, missing: 520 },
				{ element: "CTC", current: 490, missing: 510 },
				{ element: "V%", current: 150, missing: 560 },
				{ element: "H+Al", current: 610, missing: 340 },
			],
		},
		{
			labelInfo: { id: 3, name: "Amostra 3", date: new Date("2023-11-10") },
			dataInfoAnalysis: [
				{ element: "pH", current: 430, missing: 320 },
				{ element: "CO", current: 310, missing: 430 },
				{ element: "MO", current: 510, missing: 130 },
				{ element: "P", current: 610, missing: 360 },
				{ element: "K", current: 460, missing: 410 },
				{ element: "Ca", current: 470, missing: 520 },
				{ element: "Mg", current: 450, missing: 530 },
				{ element: "S", current: 170, missing: 530 },
				{ element: "B", current: 630, missing: 330 },
				{ element: "Zn", current: 470, missing: 420 },
				{ element: "Cu", current: 460, missing: 510 },
				{ element: "Mn", current: 470, missing: 520 },
				{ element: "Fe", current: 460, missing: 430 },
				{ element: "Al", current: 470, missing: 510 },
				{ element: "CTC", current: 460, missing: 520 },
				{ element: "V%", current: 160, missing: 570 },
				{ element: "H+Al", current: 620, missing: 330 },
			],
		},
	],
};

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
	const [idIndex, setidIndex] = useState("0");

	return (
		<div>
			<Sidebar />
			{/* grafico */}
			<div className="fixed bg-[var(--gray-100)] w-full h-full">
				<div className="fixed left-1/2 -translate-x-1/2 translate-y-[5vh]">
					<div className="lg:w-[60vw] w-[100vw] h-[80vh]">
						<div className="rounded-lg shadow-xl">
							<Charts
								title={idIndex}
								chartConfig={chartConfig}
								chartData={
									chartData.dataLabelsInfo.find(
										(item) => item.labelInfo.id.toString() === idIndex,
									)?.dataInfoAnalysis ?? []
								}
								onToggle={() => setTableEye(!tableEye)}
							/>
						</div>
					</div>
				</div>
			</div>
			{/* tabela */}
			<div
				className={`fixed h-full w-full bg-[var(--gray-100)] ${
					tableEye ? "z-1 opacity-100" : "-z-1 opacity-0"
				} duration-800`}
			>
				<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--gray-300)] overflow-y-auto rounded-lg border-1 border-border">
					<div className="lg:w-[70vw] w-[100vw] h-[81vh] text-[var(--text-default)]">
						<div>
							<TableAnalysis
								dataTableHeader={{
									title: chartData.dataTableHeader.title,
									headLabels: chartData.dataTableHeader.headLabels,
								}}
								dataLabelsInfo={chartData.dataLabelsInfo}
								onToggle={(e: React.MouseEvent<SVGSVGElement>) => {
									setTableEye((prev) => !prev);
									setidIndex(e.currentTarget.getAttribute("data-id") ?? "");
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
