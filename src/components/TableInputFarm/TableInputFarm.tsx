import { X } from "lucide-react";
import { useState } from "react";
import { ButtonPattern } from "../ButtonPattern/ButtonPattern";
import type { DataLabelInfo } from "../TableAnalysis/TableAnalysis";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../ui/table";

type Props = {
	dataFarm?: DataLabelInfo;
	onToggle: () => void;
};

export const TableIputFarmer = ({ dataFarm, onToggle }: Props) => {
	const [dataFarmInput, setDataFarm] = useState(dataFarm);
	return (
		<Table>
			<TableHeader>
				{" "}
				{/* Retirar esse table header e o jsx esta renderizando duas vezes */}
				<TableCaption className="w-full flex justify-between items-center p-3 text-3xl text-[var(--text-default)]">
					Tabela de dados da Fazenda
					<X className="cursor-pointer" onClick={onToggle} />
				</TableCaption>
			</TableHeader>
			<TableHeader>
				<TableRow className="grid grid-cols-5">
					<TableHead className="text-center text-[var(--text-default)]">
						Nome da Fazenda
					</TableHead>
					<TableHead className="text-center text-[var(--text-default)]">
						Proprietário
					</TableHead>
					<TableHead className="text-center text-[var(--text-default)]">
						Data Cadastro
					</TableHead>
					<TableHead className="text-center text-[var(--text-default)]">
						Localização
					</TableHead>
					<TableHead className="text-center text-[var(--text-default)]">
						Área
					</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow className="grid grid-cols-[minmax(180px,_1fr)_minmax(180px,_1fr)_minmax(180px,_1fr)_minmax(180px,_1fr)_minmax(180px,_1fr)]">
					<TableCell className="flex justify-self-center">
						<input
							onChange={(e) =>
								setDataFarm((prev) => ({ ...prev, name: e.target.value }))
							}
							value={dataFarm?.name.toString() ?? ""}
							className="overflow-hidden text-sm border border-[var(--text-default)] placeholder:text-xs placeholder-[var(--text-default)] text-[var(--text-default)] px-3 py-2 rounded-md outline-green-600 max-w-40"
						/>
					</TableCell>
					<TableCell className="flex justify-self-center">
						<input
							onChange={(e) =>
								setDataFarm((prev) => ({ ...prev, farmer: e.target.value }))
							}
							value={dataFarm?.farmer.toString() ?? ""}
							className="text-sm border border-[var(--text-default)] placeholder:text-xs placeholder-[var(--text-default)] text-[var(--text-default)] px-3 py-2 rounded-md outline-green-600 min-w-30 max-w-30"
						/>
					</TableCell>
					<TableCell className="flex justify-self-center">
						<input
							onChange={(e) =>
								setDataFarm((prev) => ({ ...prev, date: e.target.value }))
							}
							value={
								dataFarm?.date instanceof Date
									? dataFarm.date.toISOString().split("T")[0]
									: ""
							}
							type="date"
							className="text-sm border border-[var(--text-default)] placeholder:text-xs placeholder-[var(--text-default)] text-[var(--text-default)] px-3 py-2 rounded-md outline-green-600 min-w-40 max-w-40"
						/>
					</TableCell>
					<TableCell className="flex justify-self-center">
						<input
							onChange={(e) =>
								setDataFarm((prev) => ({ ...prev, localize: e.target.value }))
							}
							value={dataFarm?.localize.toString() ?? ""}
							className="text-sm border border-[var(--text-default)] placeholder:text-xs placeholder-[var(--text-default)] text-[var(--text-default)] px-3 py-2 rounded-md outline-green-600 min-w-30 max-w-30"
						/>
					</TableCell>
					<TableCell className="flex justify-self-center">
						<input
							onChange={(e) =>
								setDataFarm((prev) => ({ ...prev, area: e.target.value }))
							}
							value={dataFarm?.area.toString() ?? ""}
							className="flex text-sm border border-[var(--text-default)] placeholder:text-xs placeholder-[var(--text-default)] text-[var(--text-default)] px-3 py-2 rounded-md outline-green-600 min-w-30 max-w-30"
						/>
					</TableCell>
				</TableRow>
				<TableCell className="flex justify-self-center">
					<ButtonPattern type={"button"} value={"Editar"} />
				</TableCell>
			</TableBody>
		</Table>
	);
};
