import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	ButtonPattern,
	Sidebar,
	type TableAllData,
	TableAnalysis,
	TableIputFarmer,
} from "../../components";
import { api } from "../../services/api";

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
				date: "2008-02-01",
				area: "25",
				localize: "Chapecó",
			},
			dataInfoAnalysis: [{ element: "pH", current: "450", missing: "300" }],
		},
	],
};

export const Farm = () => {
	const [tableEye, setTableEye] = useState(true);
	const [idIndex, setidIndexFarm] = useState("");
	const [dataTableFarmState, setDataTableFarm] = useState(dataTableFarm); ///Descobri preciso passar ess use state para o inputs...
	const navigate = useNavigate();

	useEffect(() => {
		const fetchFarms = async () => {
			const token = localStorage.getItem("token");

			if (!token) {
				console.error("Token não encontrado");
				return;
			}

			try {
				const response = await api.get("/api/v1/farms", {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				setDataTableFarm(response.data);
			} catch (err) {
				console.error("Erro ao buscar fazendas:");
			}
		};

		fetchFarms();
	}, []);

	const putDataFarm = async (id: string) => {
		const editedFarm = dataTableFarmState.dataLabelsInfo.find(
			(item) => item.labelInfo.id === id,
		)?.labelInfo;

		const token = localStorage.getItem("token");

		if (!token) {
			console.error("Token não encontrado");
			return;
		}
		try {
			const response = await api.put("/api/v1/farms", editedFarm, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			alert(response.data);
		} catch (err) {
			console.error("Erro ao editar fazendas");
		}

		setTableEye(true);
	};

	const postDataFarm = async () => {
		const editedFarm = dataTableFarmState.dataLabelsInfo.find(
			(item) => item.labelInfo.id === "0",
		)?.labelInfo;
		const token = localStorage.getItem("token");

		if (!token) {
			console.error("Token não encontrado");
			return;
		}
		try {
			const response = await api.post("/api/v1/farms", editedFarm, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			alert(response.data);
		} catch (err) {
			console.error("Erro ao cadastrar fazendas");
		}
		window.location.reload();
	};

	const deleteDataFarm = async (id: string) => {
		const token = localStorage.getItem("token");
		if (!token) {
			console.error("Token não encontrado");
			return;
		}
		const confirmDelete = window.confirm(
			"Deseja realmente excluir esta fazenda?",
		);
		if (!confirmDelete) return;
		try {
			const response = await api.delete("/api/v1/farms", {
				headers: {
					Authorization: `Bearer ${token}`,
					id: id,
				},
			});
			alert(response.data);
			setTableEye(true);
		} catch (err) {
			console.error("Erro ao deletar fazendas");
		}
		window.location.reload();
	};
	return (
		<div>
			<Sidebar />
			<div className="fixed bg-[var(--gray-100)] w-full h-full">
				<div className="fixed left-1/2 -translate-x-1/2 translate-y-[5vh]">
					<div className="lg:w-[60vw] w-[100vw] h-[80vh]">
						<div className="rounded-lg shadow-xl border-1 border-border bg-[var(--gray-300)]">
							<TableIputFarmer
								setDataTableFarm={setDataTableFarm}
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
								<ButtonPattern
									functionOnClick={() =>
										idIndex !== "0" ? putDataFarm(idIndex) : postDataFarm()
									}
									type={"button"}
									value={"Salvar"}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* tabela */}
			<div
				className={`fixed h-full w-full bg-[var(--gray-100)] ${
					tableEye ? "z-1 opacity-100" : "-z-1 opacity-0"
				} duration-1000`}
				/* tooltip */
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
									setidIndexFarm(e.currentTarget.getAttribute("data-id") ?? "");
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

									deleteDataFarm(id);
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
									if (
										dataTableFarmState.dataLabelsInfo.find(
											(item) => item.labelInfo.id === "0",
										)?.labelInfo.id === "0"
									) {
										setidIndexFarm("0");
									} else {
										setDataTableFarm({
											...dataTableFarmState,
											dataLabelsInfo: [
												...dataTableFarmState.dataLabelsInfo,
												{
													labelInfo: {
														id: "0",
														name: "",
														farmer: "",
														date: "",
														area: "",
														localize: "",
													},
													dataInfoAnalysis: [],
												},
											],
										});
										setidIndexFarm("0");
									}
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
