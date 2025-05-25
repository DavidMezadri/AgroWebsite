import "./style.module.css";
import { useState } from "react";

const inputClassNormal =
	"flex-1 text-slate-800 text-sm border border-slate-300 px-3 py-3 rounded-md outline-green-600 min-w-20 max-w-20";
const labelClassNormal = "text-center font-semibold min-w-20 max-w-20";

const farm = "fazenda bocaial";

type initalInfo = {
	info1: "";
	info2: "";
	info3: "";
	info4: "";
	info5: "";
	info6: "";
	info7: "";
	info8: "";
	info9: "";
	info10: "";
	info11: "";
	info12: "";
	info13: "";
	info14: "";
	info15: "";
	info16: "";
	info17: "";
	info18: "";
	info19: "";
	info20: "";
};

export const Analysis = () => {
	const [infos, setInfos] = useState([
		{
			info1: "",
			info2: "",
			info3: "",
			info4: "",
			info5: "",
			info6: "",
			info7: "",
			info8: "",
			info9: "",
			info10: "",
			info11: "",
			info12: "",
			info13: "",
			info14: "",
			info15: "",
			info16: "",
			info17: "",
			info18: "",
			info19: "",
			info20: "",
		},
	]);

	function addNewInfoItem() {
		setInfos([
			...infos,
			{
				info1: "",
				info2: "",
				info3: "",
				info4: "",
				info5: "",
				info6: "",
				info7: "",
				info8: "",
				info9: "",
				info10: "",
				info11: "",
				info12: "",
				info13: "",
				info14: "",
				info15: "",
				info16: "",
				info17: "",
				info18: "",
				info19: "",
				info20: "",
			},
		]);
	}

	function removeInfoItem(index: number) {
		const itensCopy = Array.from(infos);
		if (Object.values(infos[index]).some((valor) => valor.trim() !== ""))
			if (
				!window.confirm(
					"Você possui informaçoes digitadas. Tem certeza que deseja remover?"
				)
			) {
				return;
			}

		itensCopy.splice(index, 1);

		setInfos(itensCopy);
	}

	function updateInfosItem(position: number, field: string, item) {
		const updatedInfoItems = infos.map((standardItem, index) => {
			if (index === position) {
				return { ...standardItem, [field]: item };
			}

			return standardItem;
		});

		setInfos(updatedInfoItems);
	}

	return (
		<div className="bg-gray-50 text-center pt-[3vh] h-[100vh]">
			<h1 className="text-4xl font-bold text-green-700 mb-4 tracking-tight drop-shadow-sm">
				Cadastro de Análises
			</h1>
			<div className="flex items-center justify-center bg-opacity-50 ">
				<div className="bg-green-100  md:w-3/4 sm:w-[90vw] w-[95vw] h-[80vh] overflow-y-auto p-6 rounded-lg shadow-xl">
					<div className="flex w-max mb-5 px-2 rounded-md gap-2 items-center bg-white-150 shadow-lg bg-gray-100">
						<button
							type="button"
							className="flex justify-center items-center w-10 h-11 tracking-wider rounded-md focus:outline-none cursor-pointer"
							onClick={addNewInfoItem}
						>
							<svg
								className="w-8 text-green-600 hover:text-green-500 hover:drop-shadow-[0_0_6px_green] transition-all duration-200"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<title id="iconTitle">Adicionar item</title>
								<path
									xmlns="http://www.w3.org/2000/svg"
									d="M8 12H12M12 12H16M12 12V16M12 12V8M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
									stroke="currentColor"
									stroke-width="2"
								/>
							</svg>
						</button>
						<label
							htmlFor=""
							className={labelClassNormal}
						>
							ID da Amostra
						</label>
						<label
							htmlFor=""
							className="text-center font-semibold min-w-30 max-w-20"
						>
							Nome da Amostra
						</label>
						<label
							htmlFor=""
							className="text-center font-semibold min-w-30 max-w-30"
						>
							Data da Amostra
						</label>
						<label
							htmlFor=""
							className={labelClassNormal}
						>
							pH do Solo
						</label>
						<label
							htmlFor=""
							className={labelClassNormal}
						>
							Matéria Orgânica
						</label>
						<label
							htmlFor=""
							className={labelClassNormal}
						>
							Carbono Orgânico
						</label>
						<label
							htmlFor=""
							className={labelClassNormal}
						>
							Fósforo (P)
						</label>
						<label
							htmlFor=""
							className={labelClassNormal}
						>
							Potássio (K)
						</label>
						<label
							htmlFor=""
							className={labelClassNormal}
						>
							Cálcio (Ca)
						</label>
						<label
							htmlFor=""
							className={labelClassNormal}
						>
							Magnésio (Mg)
						</label>
						<label
							htmlFor=""
							className={labelClassNormal}
						>
							Enxofre (S)
						</label>
						<label
							htmlFor=""
							className={labelClassNormal}
						>
							Boro (B)
						</label>
						<label
							htmlFor=""
							className={labelClassNormal}
						>
							Zinco (Zn)
						</label>
						<label
							htmlFor=""
							className={labelClassNormal}
						>
							Cobre (Cu)
						</label>
						<label
							htmlFor=""
							className={labelClassNormal}
						>
							Manganês (Mn)
						</label>
						<label
							htmlFor=""
							className={labelClassNormal}
						>
							Ferro (Fe)
						</label>
						<label
							htmlFor=""
							className={labelClassNormal}
						>
							Alumínio (Al³⁺)
						</label>
						<label
							htmlFor=""
							className={labelClassNormal}
						>
							CTC
						</label>
						<label
							htmlFor=""
							className={labelClassNormal}
						>
							(V%)
						</label>
						<label
							htmlFor=""
							className={labelClassNormal}
						>
							(H+Al)
						</label>
					</div>

					<div className="flex flex-col gap-y-4">
						{infos.map((item, index) => {
							return (
								<div
									key={index}
									className="w-max bg-green-200 rounded-md shadow-lg pb-1 px-2"
								>
									<div className="w-[70vw]">
										<h2 className="mb-2 capitalize w-full">
											Amostra {index + 1} - {farm}
										</h2>
									</div>
									<div className="flex gap-2">
										<button
											type="button"
											className="flex justify-center items-center rounded-md focus:outline-none cursor-pointer min-w-10 max-w-10"
											onClick={(e) =>
												removeInfoItem(index)
											}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="w-5 h-5 text-red-600 hover:text-red-500 hover:drop-shadow-[0_0_6px_red] transition-all duration-200"
												fill="none"
												viewBox="0 0 24 24"
											>
												<title id="iconTitle">
													Remover item
												</title>
												<path
													d="M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</button>
										<input
											className={inputClassNormal}
											placeholder="ID"
											required
											type="text"
											onChange={(e) =>
												updateInfosItem(
													index,
													"info1",
													e.target.value
												)
											}
											value={infos[index].info1}
										/>
										<input
											className="flex-1 text-slate-800 text-sm border border-slate-300 px-3 py-2 rounded-md outline-green-600 min-w-30 max-w-30"
											placeholder="Nome"
											required
											type="text"
											onChange={(e) =>
												updateInfosItem(
													index,
													"info2",
													e.target.value
												)
											}
											value={infos[index].info2}
										/>
										<input
											className="flex-1 text-slate-800 text-sm border border-slate-300 px-3 py-2 rounded-md outline-green-600 min-w-30 max-w-30"
											placeholder="Data"
											required
											type="date"
											onChange={(e) =>
												updateInfosItem(
													index,
													"info3",
													e.target.value
												)
											}
											value={infos[index].info3}
										/>
										<input
											className={inputClassNormal}
											placeholder="pH"
											required
											step="0.1"
											min="0"
											type="number"
											onChange={(e) =>
												updateInfosItem(
													index,
													"info4",
													e.target.value
												)
											}
											value={infos[index].info4}
										/>
										<input
											className={inputClassNormal}
											placeholder="MO"
											required
											step="0.1"
											min="0"
											type="number"
											onChange={(e) =>
												updateInfosItem(
													index,
													"info5",
													e.target.value
												)
											}
											value={infos[index].info5}
										/>
										<input
											className={inputClassNormal}
											placeholder="CO"
											required
											step="0.1"
											min="0"
											type="number"
											onChange={(e) =>
												updateInfosItem(
													index,
													"info6",
													e.target.value
												)
											}
											value={infos[index].info6}
										/>
										<input
											className={inputClassNormal}
											placeholder="P"
											required
											step="0.1"
											min="0"
											type="number"
											onChange={(e) =>
												updateInfosItem(
													index,
													"info7",
													e.target.value
												)
											}
											value={infos[index].info7}
										/>
										<input
											className={inputClassNormal}
											placeholder="K"
											required
											step="0.1"
											min="0"
											type="number"
											onChange={(e) =>
												updateInfosItem(
													index,
													"info8",
													e.target.value
												)
											}
											value={infos[index].info8}
										/>
										<input
											className={inputClassNormal}
											placeholder="Ca"
											required
											step="0.1"
											min="0"
											type="number"
											onChange={(e) =>
												updateInfosItem(
													index,
													"info9",
													e.target.value
												)
											}
											value={infos[index].info9}
										/>
										<input
											className={inputClassNormal}
											placeholder="Mg"
											required
											step="0.1"
											min="0"
											type="number"
											onChange={(e) =>
												updateInfosItem(
													index,
													"info10",
													e.target.value
												)
											}
											value={infos[index].info10}
										/>
										<input
											className={inputClassNormal}
											placeholder="S"
											required
											step="0.1"
											min="0"
											type="number"
											onChange={(e) =>
												updateInfosItem(
													index,
													"info11",
													e.target.value
												)
											}
											value={infos[index].info11}
										/>
										<input
											className={inputClassNormal}
											placeholder="B"
											required
											step="0.1"
											min="0"
											type="number"
											onChange={(e) =>
												updateInfosItem(
													index,
													"info12",
													e.target.value
												)
											}
											value={infos[index].info12}
										/>
										<input
											className={inputClassNormal}
											placeholder="Zn"
											required
											step="0.1"
											min="0"
											type="number"
											onChange={(e) =>
												updateInfosItem(
													index,
													"info13",
													e.target.value
												)
											}
											value={infos[index].info13}
										/>
										<input
											className={inputClassNormal}
											placeholder="Cu"
											required
											step="0.1"
											min="0"
											type="number"
											onChange={(e) =>
												updateInfosItem(
													index,
													"info14",
													e.target.value
												)
											}
											value={infos[index].info14}
										/>
										<input
											className={inputClassNormal}
											placeholder="Mn"
											required
											step="0.1"
											min="0"
											type="number"
											onChange={(e) =>
												updateInfosItem(
													index,
													"info15",
													e.target.value
												)
											}
											value={infos[index].info15}
										/>
										<input
											className={inputClassNormal}
											placeholder="Fe"
											required
											step="0.1"
											min="0"
											type="number"
											onChange={(e) =>
												updateInfosItem(
													index,
													"info16",
													e.target.value
												)
											}
											value={infos[index].info16}
										/>
										<input
											className={inputClassNormal}
											placeholder="Al"
											required
											step="0.1"
											min="0"
											type="number"
											onChange={(e) =>
												updateInfosItem(
													index,
													"info17",
													e.target.value
												)
											}
											value={infos[index].info17}
										/>
										<input
											className={inputClassNormal}
											placeholder="CTC"
											required
											step="0.1"
											min="0"
											type="number"
											onChange={(e) =>
												updateInfosItem(
													index,
													"info18",
													e.target.value
												)
											}
											value={infos[index].info18}
										/>
										<input
											className={inputClassNormal}
											placeholder="V%"
											required
											step="0.1"
											min="0"
											type="number"
											onChange={(e) =>
												updateInfosItem(
													index,
													"info19",
													e.target.value
												)
											}
											value={infos[index].info19}
										/>
										<input
											className={inputClassNormal}
											placeholder="H+Al"
											required
											step="0.1"
											min="0"
											type="number"
											onChange={(e) =>
												updateInfosItem(
													index,
													"info20",
													e.target.value
												)
											}
											value={infos[index].info20}
										/>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>

			<button
				type="submit"
				className="mt-2 bottom-1/10 left-1/2 w-1/10 min-w-25 py-3 text-sm tracking-wider font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none cursor-pointer"
				onClick={() => alert("Colocar funcao enviar")}
			>
				Salvar
			</button>
		</div>
	);
};
