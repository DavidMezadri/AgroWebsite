import "./style.module.css";
import "../../styles/theme.css";
import { useState } from "react";
import { ButtonPattern, InputElements, Sidebar } from "../../components/index";

const labelClassNormal = "text-center font-semibold min-w-20 max-w-20";

const farm = "fazenda bocaial";

const labels = [
	"ID",
	"Nome",
	"Data",
	"pH",
	"MO",
	"CO",
	"P",
	"K",
	"Ca",
	"Mg",
	"S",
	"B",
	"Zn",
	"Cu",
	"Mn",
	"Fe",
	"Al",
	"CTC",
	"V%",
	"H+Al",
] as const;
type FormLabel = (typeof labels)[number];
type FormTemplate = { [key in FormLabel]: string };

export const Analysis = () => {
	const formTemplate: FormTemplate = Object.fromEntries(
		labels.map((label) => [label, ""])
	) as FormTemplate;

	const [infos, setInfos] = useState([formTemplate]);

	function addNewInfoItem() {
		setInfos([...infos, formTemplate]);
	}

	function removeInfoItem(index: number) {
		const itensCopy = Array.from(infos);
		if (Object.values(infos[index]).some((value) => value.trim() !== ""))
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

	function updateInfosItem(position: number, field: string, item: string) {
		const updatedInfoItems = infos.map((standardItem, index) => {
			if (index === position) {
				return { ...standardItem, [field]: item };
			}

			return standardItem;
		});
		setInfos(updatedInfoItems);
	}

	return (
		<div>
			<Sidebar />
			<div className="bg-[var(--gray-100)] text-center pt-[0vh] h-[100vh]">
				<h1 className="text-4xl text-[var(--text-default)] lg:pt-[3vh] pt-[8vh] mb-[3vh] font-family-display">
					Cadastro de Análises
				</h1>
				<div className="flex items-center justify-center bg-opacity-50">
					<div className="lg:w-[80vw] w-[100vw] h-[75vh] overflow-y-auto scrollbar p-6 rounded-lg shadow-xl bg-[var(--gray-300)]">
						<div className="flex w-max mb-5 px-2 rounded-md gap-2 items-center bg-white-150 shadow-lg bg-surface text-[var(--text-default)]">
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
										strokeWidth="2"
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

						<div className="flex flex-col gap-y-">
							{infos.map((_item, index) => {
								return (
									<div
										key={index}
										className="w-max bg-surface rounded-md shadow-lg pb-1 px-2 mt-3"
									>
										<div className="w-[70vw]">
											<h3 className="text-[var(--text-default)] mb-2 capitalize w-full">
												Amostra {index + 1} - {farm}
											</h3>
										</div>
										<div className="flex gap-2">
											<button
												type="button"
												className="flex justify-center items-center rounded-md focus:outline-none cursor-pointer min-w-10 max-w-10"
												onClick={(_e) =>
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
														d="M4 6H20M16 6L15.7294 5.18807C15.4671 .40125 15.3359 .00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 .00784 8.53292 .40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17"
														stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
												</svg>
											</button>
											<InputElements
												placeholder={labels[0]}
												infos={infos}
												index={index}
												function={updateInfosItem}
											/>
											<InputElements
												placeholder={labels[1]}
												infos={infos}
												index={index}
												type="text"
												width="30"
												function={updateInfosItem}
											/>
											<InputElements
												placeholder={labels[2]}
												infos={infos}
												index={index}
												width="30"
												type="date"
												function={updateInfosItem}
											/>
											<InputElements
												placeholder={labels[3]}
												infos={infos}
												index={index}
												function={updateInfosItem}
											/>
											<InputElements
												placeholder={labels[4]}
												infos={infos}
												index={index}
												function={updateInfosItem}
											/>
											<InputElements
												placeholder={labels[5]}
												infos={infos}
												index={index}
												function={updateInfosItem}
											/>
											<InputElements
												placeholder={labels[6]}
												infos={infos}
												index={index}
												function={updateInfosItem}
											/>
											<InputElements
												placeholder={labels[7]}
												infos={infos}
												index={index}
												function={updateInfosItem}
											/>
											<InputElements
												placeholder={labels[8]}
												infos={infos}
												index={index}
												function={updateInfosItem}
											/>
											<InputElements
												placeholder={labels[9]}
												infos={infos}
												index={index}
												function={updateInfosItem}
											/>
											<InputElements
												placeholder={labels[10]}
												infos={infos}
												index={index}
												function={updateInfosItem}
											/>
											<InputElements
												placeholder={labels[11]}
												infos={infos}
												index={index}
												function={updateInfosItem}
											/>
											<InputElements
												placeholder={labels[12]}
												infos={infos}
												index={index}
												function={updateInfosItem}
											/>
											<InputElements
												placeholder={labels[13]}
												infos={infos}
												index={index}
												function={updateInfosItem}
											/>
											<InputElements
												placeholder={labels[14]}
												infos={infos}
												index={index}
												function={updateInfosItem}
											/>
											<InputElements
												placeholder={labels[15]}
												infos={infos}
												index={index}
												function={updateInfosItem}
											/>
											<InputElements
												placeholder={labels[16]}
												infos={infos}
												index={index}
												function={updateInfosItem}
											/>
											<InputElements
												placeholder={labels[17]}
												infos={infos}
												index={index}
												function={updateInfosItem}
											/>
											<InputElements
												placeholder={labels[18]}
												infos={infos}
												index={index}
												function={updateInfosItem}
											/>
											<InputElements
												placeholder={labels[19]}
												infos={infos}
												index={index}
												function={updateInfosItem}
											/>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>

				<ButtonPattern
					type={"button"}
					value={"Salvar"}
					functionOnClick={() => console.log(infos)}
				/>
			</div>
		</div>
	);
};
