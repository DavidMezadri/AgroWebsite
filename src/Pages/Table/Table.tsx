import "./styles.module.css";
import "../../styles/theme.css";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
	ButtonPattern,
	Charts,
	Sidebar,
	type TableAllData,
	TableAnalysis,
} from "../../components/index";
import { api } from "../../services/api";

const chartData: TableAllData = {
	dataTableHeader: {
		title: "Lista de Análises",
		headLabels: ["Número ID", "Name da Amostra", "Data"],
	},
	dataLabelsInfo: [
		{
			labelInfo: { id: "1", name: "Amostra 1", date: new Date("2008-02-01") },
			dataInfoAnalysis: [
				{ element: "pH", current: "450", missing: "300" },
				{ element: "MO", current: "520", missing: "120" },
				{ element: "CO", current: "380", missing: "420" },
				{ element: "P", current: "600", missing: "350" },
				{ element: "K", current: "480", missing: "400" },
				{ element: "Ca", current: "480", missing: "500" },
				{ element: "Mg", current: "480", missing: "500" },
				{ element: "S", current: "140", missing: "550" },
				{ element: "B", current: "600", missing: "350" },
				{ element: "Zn", current: "480", missing: "400" },
				{ element: "Cu", current: "480", missing: "500" },
				{ element: "Mn", current: "480", missing: "500" },
				{ element: "Fe", current: "480", missing: "400" },
				{ element: "Al", current: "480", missing: "500" },
				{ element: "CTC", current: "480", missing: "500" },
				{ element: "V%", current: "140", missing: "550" },
				{ element: "H+Al", current: "600", missing: "350" },
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
	const [chartDataTable, setChartData] = useState(chartData);
	const navigate = useNavigate();
	const location = useLocation();
	console.log("location", location); //ID da fazenda

	useEffect(() => {
		const fetchFarms = async () => {
			const token = localStorage.getItem("token");
			const idFarm = localStorage.getItem("farm"); // Obtém o ID da fazenda do estado da navegação

			if (!token) {
				console.error("Token não encontrado");
				return;
			}

			try {
				const response = await api.get("/api/v1/analysis", {
					headers: {
						Authorization: `Bearer ${token}`,
					},
					params: {
						idFarm,
					},
				});
				console.log("response.data", response.data);
				setChartData(response.data);
			} catch (err) {
				console.error("Erro ao buscar fazendas:");
			}
		};

		fetchFarms();
	}, []);

	return (
		<div>
			<Sidebar />
			<div className="fixed bg-[var(--gray-100)] w-full h-full">
				<div className="fixed left-1/2 -translate-x-1/2 translate-y-[5vh] mt-5">
					<div className="lg:w-[60vw] w-[100vw] h-[80vh]">
						<div className="rounded-lg shadow-xl">
							<Charts
								title={idIndex}
								chartConfig={chartConfig}
								chartData={
									chartDataTable.dataLabelsInfo.find(
										(item) => item.labelInfo.id.toString() === idIndex,
									)?.dataInfoAnalysis ?? []
								}
								onToggle={() => setTableEye(!tableEye)}
							/>
						</div>
					</div>
				</div>
			</div>
			<div
				className={`fixed h-full w-full bg-[var(--gray-100)] ${
					tableEye ? "z-1 opacity-100" : "-z-1 opacity-0"
				} duration-800`}
			>
				<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
					<div className="lg:w-[70vw] w-[100vw] h-[81vh] text-[var(--text-default)] bg-[var(--gray-300)] overflow-y-auto rounded-lg border-1 border-border">
						<div>
							<TableAnalysis
								dataTableHeader={{
									title: chartDataTable.dataTableHeader.title,
									headLabels: chartDataTable.dataTableHeader.headLabels,
								}}
								dataLabelsInfo={chartDataTable.dataLabelsInfo}
								onTogglePenIcon={(e: React.MouseEvent<SVGSVGElement>): void => {
									const id = e.currentTarget.getAttribute("data-id") ?? "";
									console.log("data", id);
									const data = chartDataTable.dataLabelsInfo.find((item) => {
										return item.labelInfo.id === id;
									});
									console.log("data", data);
									navigate("analysis", { state: { data } });
								}}
								onToggleChartColumnStackedIcon={(
									e: React.MouseEvent<SVGSVGElement>,
								) => {
									setTableEye((prev) => !prev);
									setidIndex(e.currentTarget.getAttribute("data-id") ?? "");
								}}
								onToggleTrash2Icon={(e: React.MouseEvent<SVGSVGElement>) => {
									const id = e.currentTarget.getAttribute("data-id") ?? "";

									setChartData((prev) => ({
										...prev,
										dataLabelsInfo: prev.dataLabelsInfo.filter(
											(item) => item.labelInfo.id !== id,
										),
									}));
								}}
								classNameFilePenLineIcon="hidden"
								classNameCirclePlusIcon="hidden"
							/>
						</div>
					</div>
					<div className="flex justify-center">
						<div>
							<ButtonPattern
								type={"button"}
								value={"Nova"}
								functionOnClick={() => {
									navigate("analysis");
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
