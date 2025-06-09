import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	ButtonPattern,
	Sidebar,
	type TableAllData,
	TableAnalysis,
	TableIputFarmer,
} from "../../components";

const dataTableFarm: TableAllData = {
	dataTableHeader: {
		title: "Fazedas Cadastradas",
		headLabels: [
			"ID",
			"Nome da Fazenda",
			"Propietario",
			"Data",
			"Área",
			"Localização",
		],
	},
	dataLabelsInfo: [
		{
			labelInfo: {
				id: "1",
				name: "Amostra 1",
				farmer: "Joãozinho",
				date: new Date("2008-02-01"),
				area: "25",
				localize: "Chapecó",
			},
			dataInfoAnalysis: [{ element: "pH", current: "450", missing: "300" }],
		},
		{
			labelInfo: {
				id: "2",
				name: "Amostra 1",
				farmer: "Joãozinho",
				date: new Date("2008-02-01"),
				area: "2",
				localize: "Chapecó",
			},
			dataInfoAnalysis: [{ element: "pH", current: "450", missing: "300" }],
		},
		{
			labelInfo: {
				id: "3",
				name: "Amostra 1",
				farmer: "Joãozinho",
				date: new Date("2008-02-01"),
				area: "3",
				localize: "Chapecó",
			},
			dataInfoAnalysis: [{ element: "pH", current: "450", missing: "300" }],
		},
		{
			labelInfo: {
				id: "8",
				name: "Amostra 1",
				farmer: "Joãozinho",
				date: new Date("2008-02-01"),
				area: "8",
				localize: "Chapecó",
			},
			dataInfoAnalysis: [{ element: "pH", current: "450", missing: "300" }],
		},
	],
};

export const Farm = () => {
	const [tableEye, setTableEye] = useState(true);
	const [idIndex, setidIndex] = useState("");
	const [dataTableFarmState, setDataTableFarm] = useState(dataTableFarm);
	const navigate = useNavigate();

	return (
		<div>
			<Sidebar />

			<div className="fixed bg-[var(--gray-100)] w-full h-full">
				<div className="fixed left-1/2 -translate-x-1/2 translate-y-[5vh]">
					<div className="lg:w-[60vw] w-[100vw] h-[80vh]">
						<div className="rounded-lg shadow-xl border-1 border-border bg-[var(--gray-300)]">
							<TableIputFarmer
								dataFarm={
									dataTableFarmState.dataLabelsInfo.find(
										(item) => item.labelInfo.id === idIndex,
									)?.labelInfo
								}
								onToggle={() => {
									setTableEye((prev) => !prev);
								}}
							/>
						</div>
						<div className="flex justify-center">
							<div>
								<ButtonPattern type={"button"} value={"Salvar"} />
							</div>
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
				<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-y-auto ">
					<div className="lg:w-[70vw] w-[100vw] h-[81vh] text-[var(--text-default)] bg-[var(--gray-300)] rounded-lg border-1 border-border">
						<div>
							<TableAnalysis
								dataTableHeader={{
									title: dataTableFarmState.dataTableHeader.title,
									headLabels: dataTableFarmState.dataTableHeader.headLabels,
								}}
								dataLabelsInfo={dataTableFarmState.dataLabelsInfo}
								onTogglePenIcon={(e: React.MouseEvent<SVGSVGElement>): void => {
									setTableEye((prev) => !prev);
									setidIndex(e.currentTarget.getAttribute("data-id") ?? "");
								}}
								onToggleFilePenLineIcon={(
									e: React.MouseEvent<SVGSVGElement>,
								): void => {
									navigate("/table", {
										state: {
											id: e.currentTarget.getAttribute("data-id") ?? "",
										},
									});
								}}
								onToggleTrash2Icon={(
									e: React.MouseEvent<SVGSVGElement>,
								): void => {
									const id = e.currentTarget.getAttribute("data-id") ?? "";

									setDataTableFarm((prev) => ({
										...prev,
										dataLabelsInfo: prev.dataLabelsInfo.filter(
											(item) => item.labelInfo.id !== id,
										),
									}));
								}}
								classNameCirclePlusIcon="hidden"
								classNameChartColumnStackedIcon="hidden"
							/>
						</div>
					</div>
					<div className="flex justify-center">
						<div>
							<ButtonPattern
								type={"button"}
								value={"Nova"}
								functionOnClick={() => {
									setTableEye((prev) => !prev);
									setidIndex("");
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
