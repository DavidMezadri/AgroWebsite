import "./style.module.css";
import { useState } from "react";

export const Analysis = () => {
	const [infos, setInfos] = useState([{ info1: "", info2: "", info3: "" }]);

	function addNewInfoItem() {
		setInfos([...infos, { info1: "", info2: "", info3: "" }]);
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
			{infos.map((item, index) => {
				return (
					<div key={index} className="bg-gray-50">>
						<button
							className="py-3 px-4 text-sm tracking-wider font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none cursor-pointer"
							onClick={(e) => removeInfoItem(index)}
						>
							{" "}
							Remover{" "}
						</button>
						<input
							className="w-full text-slate-800 text-sm border border-slate-300 px-4 py-3 rounded-md outline-green-600"
							placeholder="Digite o Usuário"
							required
							type="text"
							onChange={(e) => updateInfosItem(index, "info1", e.target.value)}
							value={infos[index].info1}
						/>
						<input
							className="w-full text-slate-800 text-sm border border-slate-300 px-4 py-3 rounded-md outline-green-600"
							placeholder="Digite o Usuário"
							required
							type="text"
							onChange={(e) => updateInfosItem(index, "info2", e.target.value)}
							value={infos[index].info2}
						/>
						<input
							className="w-full text-slate-800 text-sm border border-slate-300 px-4 py-3 rounded-md outline-green-600"
							placeholder="Digite o Usuário"
							required
							type="text"
							onChange={(e) => updateInfosItem(index, "info3", e.target.value)}
							value={infos[index].info3}
						/>
					</div>
				);
			})}
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
