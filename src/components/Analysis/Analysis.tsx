import "./style.module.css";
import { useState } from "react";

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
			},
		]);
	}

	function removeInfoItem(index: number) {
		const itensCopy = Array.from(infos);

		itensCopy.splice(index, 1);

		setInfos(itensCopy);
	}

	function updateInfosItem(position: number, field, item) {
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
			<div className="flex gap-2 items-center ">
				<label
					htmlFor="www"
					className="text-center min-w-20 max-w-20 text-center"
				/>
				<label htmlFor="" className="text-center min-w-20 max-w-20">
					pH do Solo
				</label>
				<label htmlFor="" className="text-center min-w-20 max-w-20">
					Matéria Orgânica
				</label>
				<label htmlFor="" className="text-center min-w-20 max-w-20">
					Carbono Orgânico
				</label>
				<label htmlFor="" className="text-center min-w-20 max-w-20">
					Fósforo (P)
				</label>
				<label htmlFor="" className="text-center min-w-20 max-w-20">
					Potássio (K)
				</label>
				<label htmlFor="" className="text-center min-w-20 max-w-20">
					Cálcio (Ca)
				</label>
				<label htmlFor="" className="text-center min-w-20 max-w-20">
					Magnésio (Mg)
				</label>
				<label htmlFor="" className="text-center min-w-20 max-w-20">
					Enxofre (S)
				</label>
				<label htmlFor="" className="text-center min-w-20 max-w-20">
					Boro (B)
				</label>
				<label htmlFor="" className="text-center min-w-20 max-w-20">
					Zinco (Zn)
				</label>
				<label htmlFor="" className="text-center min-w-20 max-w-20">
					Cobre (Cu)
				</label>
				<label htmlFor="" className="text-center min-w-20 max-w-20">
					Manganês (Mn)
				</label>
				<label htmlFor="" className="text-center min-w-20 max-w-20">
					Ferro (Fe)
				</label>
				<label htmlFor="" className="text-center min-w-20 max-w-20">
					Alumínio (Al³⁺)
				</label>
				<label htmlFor="" className="text-center min-w-20 max-w-20">
					CTC
				</label>
				<label htmlFor="" className="text-center min-w-20 max-w-20">
					(V%)
				</label>
				<label htmlFor="" className="text-center min-w-20 max-w-20">
					(H+Al)
				</label>
			</div>

			<div className="flex flex-col gap-y-4">
				{infos.map((item, index) => {
					return (
						<div key={index} className="flex-col">
							<div className="mb-2">
								<h1 className="text-center ">Linha amostra {index + 1}</h1>
							</div>
							<div className="flex gap-2">
								<button
									className="py-3 px-2 text-sm tracking-wider font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none cursor-pointer min-w-20 max-w-30"
									onClick={(e) => removeInfoItem(index)}
								>
									{" "}
									Remover{" "}
								</button>
								<input
									className="flex-1 text-slate-800 text-sm border border-slate-300 px-3 py-2 rounded-md outline-green-600 min-w-20 max-w-20"
									placeholder="Digite o Usuário"
									required
									type="text"
									onChange={(e) =>
										updateInfosItem(index, "info1", e.target.value)
									}
									value={infos[index].info1}
								/>
								<input
									className="flex-1 text-slate-800 text-sm border border-slate-300 px-3 py-2 rounded-md outline-green-600 min-w-20 max-w-20"
									placeholder="Digite o Usuário"
									required
									type="text"
									onChange={(e) =>
										updateInfosItem(index, "info2", e.target.value)
									}
									value={infos[index].info2}
								/>
								<input
									className="flex-1 text-slate-800 text-sm border border-slate-300 px-3 py-2 rounded-md outline-green-600 min-w-20 max-w-20"
									placeholder="Digite o Usuário"
									required
									type="text"
									onChange={(e) =>
										updateInfosItem(index, "info3", e.target.value)
									}
									value={infos[index].info3}
								/>
								<input
									className="flex-1 text-slate-800 text-sm border border-slate-300 px-3 py-2 rounded-md outline-green-600 min-w-20 max-w-20"
									placeholder="Digite o Usuário"
									required
									type="text"
									onChange={(e) =>
										updateInfosItem(index, "info4", e.target.value)
									}
									value={infos[index].info4}
								/>
								<input
									className="flex-1 text-slate-800 text-sm border border-slate-300 px-3 py-2 rounded-md outline-green-600 min-w-20 max-w-20"
									placeholder="Digite o Usuário"
									required
									type="text"
									onChange={(e) =>
										updateInfosItem(index, "info5", e.target.value)
									}
									value={infos[index].info5}
								/>
								<input
									className="flex-1 text-slate-800 text-sm border border-slate-300 px-3 py-2 rounded-md outline-green-600 min-w-20 max-w-20"
									placeholder="Digite o Usuário"
									required
									type="text"
									onChange={(e) =>
										updateInfosItem(index, "info6", e.target.value)
									}
									value={infos[index].info6}
								/>
								<input
									className="flex-1 text-slate-800 text-sm border border-slate-300 px-3 py-2 rounded-md outline-green-600 min-w-20 max-w-20"
									placeholder="Digite o Usuário"
									required
									type="text"
									onChange={(e) =>
										updateInfosItem(index, "info7", e.target.value)
									}
									value={infos[index].info7}
								/>
								<input
									className="flex-1 text-slate-800 text-sm border border-slate-300 px-3 py-2 rounded-md outline-green-600 min-w-20 max-w-20"
									placeholder="Digite o Usuário"
									required
									type="text"
									onChange={(e) =>
										updateInfosItem(index, "info8", e.target.value)
									}
									value={infos[index].info8}
								/>
								<input
									className="flex-1 text-slate-800 text-sm border border-slate-300 px-3 py-2 rounded-md outline-green-600 min-w-20 max-w-20"
									placeholder="Digite o Usuário"
									required
									type="text"
									onChange={(e) =>
										updateInfosItem(index, "info9", e.target.value)
									}
									value={infos[index].info9}
								/>
								<input
									className="flex-1 text-slate-800 text-sm border border-slate-300 px-3 py-2 rounded-md outline-green-600 min-w-20 max-w-20"
									placeholder="Digite o Usuário"
									required
									type="text"
									onChange={(e) =>
										updateInfosItem(index, "info10", e.target.value)
									}
									value={infos[index].info10}
								/>
								<input
									className="flex-1 text-slate-800 text-sm border border-slate-300 px-3 py-2 rounded-md outline-green-600 min-w-20 max-w-20"
									placeholder="Digite o Usuário"
									required
									type="text"
									onChange={(e) =>
										updateInfosItem(index, "info11", e.target.value)
									}
									value={infos[index].info11}
								/>
								<input
									className="flex-1 text-slate-800 text-sm border border-slate-300 px-3 py-2 rounded-md outline-green-600 min-w-20 max-w-20"
									placeholder="Digite o Usuário"
									required
									type="text"
									onChange={(e) =>
										updateInfosItem(index, "info12", e.target.value)
									}
									value={infos[index].info12}
								/>
								<input
									className="flex-1 text-slate-800 text-sm border border-slate-300 px-3 py-2 rounded-md outline-green-600 min-w-20 max-w-20"
									placeholder="Digite o Usuário"
									required
									type="text"
									onChange={(e) =>
										updateInfosItem(index, "info13", e.target.value)
									}
									value={infos[index].info13}
								/>
								<input
									className="flex-1 text-slate-800 text-sm border border-slate-300 px-3 py-2 rounded-md outline-green-600 min-w-20 max-w-20"
									placeholder="Digite o Usuário"
									required
									type="text"
									onChange={(e) =>
										updateInfosItem(index, "info14", e.target.value)
									}
									value={infos[index].info14}
								/>
								<input
									className="flex-1 text-slate-800 text-sm border border-slate-300 px-3 py-2 rounded-md outline-green-600 min-w-20 max-w-20"
									placeholder="Digite o Usuário"
									required
									type="text"
									onChange={(e) =>
										updateInfosItem(index, "info15", e.target.value)
									}
									value={infos[index].info15}
								/>
								<input
									className="flex-1 text-slate-800 text-sm border border-slate-300 px-3 py-2 rounded-md outline-green-600 min-w-20 max-w-20"
									placeholder="Digite o Usuário"
									required
									type="text"
									onChange={(e) =>
										updateInfosItem(index, "info16", e.target.value)
									}
									value={infos[index].info16}
								/>
								<input
									className="flex-1 text-slate-800 text-sm border border-slate-300 px-3 py-2 rounded-md outline-green-600 min-w-20 max-w-20"
									placeholder="Digite o Usuário"
									required
									type="text"
									onChange={(e) =>
										updateInfosItem(index, "info17", e.target.value)
									}
									value={infos[index].info17}
								/>
							</div>
						</div>
					);
				})}
			</div>
			<pre> {JSON.stringify(infos, null, 4)} </pre>
			{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
			<button
				className="py-3 px-4 text-sm tracking-wider font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none cursor-pointer"
				onClick={addNewInfoItem}
			>
				{" "}
				Adicionar{" "}
			</button>
		</div>
	);
};
