import { X } from "lucide-react";
import type {
	DataLabelInfo,
	TableAllData,
} from "../TableAnalysis/TableAnalysis";
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
	setDataTableFarm: React.Dispatch<React.SetStateAction<TableAllData>>;
};

export const TableIputFarmer = ({
	dataFarm,
	onToggle,
	setDataTableFarm,
}: Props) => {
	return (
		<Table>
			<TableCaption className="caption-top p-3 text-3xl text-[var(--text-default)]">
				<div className="flex justify-between">
					Tabela de dados da Fazenda
					<X className="cursor-pointer" onClick={onToggle} />
				</div>
			</TableCaption>

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
								setDataTableFarm((prev) => ({
									...prev,
									dataLabelsInfo: prev.dataLabelsInfo.map((info) => ({
										...info,
										labelInfo: {
											...info.labelInfo,
											name:
												info.labelInfo.id === dataFarm?.id
													? e.target.value
													: info.labelInfo.name,
										},
									})),
								}))
							}
							value={dataFarm?.name.toString() ?? ""}
							className="overflow-hidden text-sm border border-[var(--text-default)] placeholder:text-xs placeholder-[var(--text-default)] text-[var(--text-default)] px-3 py-2 rounded-md outline-green-600 max-w-40"
						/>
					</TableCell>
					<TableCell className="flex justify-self-center">
						<input
							onChange={(e) =>
								setDataTableFarm((prev) => ({
									...prev,
									dataLabelsInfo: prev.dataLabelsInfo.map((info) => ({
										...info,
										labelInfo: {
											...info.labelInfo,
											farmer:
												info.labelInfo.id === dataFarm?.id
													? e.target.value
													: info.labelInfo.farmer,
										},
									})),
								}))
							}
							value={dataFarm?.farmer.toString() ?? ""}
							className="text-sm border border-[var(--text-default)] placeholder:text-xs placeholder-[var(--text-default)] text-[var(--text-default)] px-3 py-2 rounded-md outline-green-600 min-w-30 max-w-30"
						/>
					</TableCell>
					<TableCell className="flex justify-self-center">
						<input
							onChange={(e) =>
								setDataTableFarm((prev) => ({
									...prev,
									dataLabelsInfo: prev.dataLabelsInfo.map((info) => ({
										...info,
										labelInfo: {
											...info.labelInfo,
											date:
												info.labelInfo.id === dataFarm?.id
													? e.target.value
													: info.labelInfo.date,
										},
									})),
								}))
							}
							value={dataFarm?.date.toString()}
							type="date"
							className="text-sm border border-[var(--text-default)] placeholder:text-xs placeholder-[var(--text-default)] text-[var(--text-default)] px-3 py-2 rounded-md outline-green-600 min-w-40 max-w-40"
						/>
					</TableCell>
					<TableCell className="flex justify-self-center">
						<input
							onChange={(e) =>
								setDataTableFarm((prev) => ({
									...prev,
									dataLabelsInfo: prev.dataLabelsInfo.map((info) => ({
										...info,
										labelInfo: {
											...info.labelInfo,
											localize:
												info.labelInfo.id === dataFarm?.id
													? e.target.value
													: info.labelInfo.localize,
										},
									})),
								}))
							}
							value={dataFarm?.localize.toString() ?? ""}
							className="text-sm border border-[var(--text-default)] placeholder:text-xs placeholder-[var(--text-default)] text-[var(--text-default)] px-3 py-2 rounded-md outline-green-600 min-w-30 max-w-30"
						/>
					</TableCell>
					<TableCell className="flex justify-self-center">
						<input
							onChange={(e) =>
								setDataTableFarm((prev) => ({
									...prev,
									dataLabelsInfo: prev.dataLabelsInfo.map((info) => ({
										...info,
										labelInfo: {
											...info.labelInfo,
											area:
												info.labelInfo.id === dataFarm?.id
													? e.target.value
													: info.labelInfo.area,
										},
									})),
								}))
							}
							value={dataFarm?.area.toString() ?? ""}
							className="flex text-sm border border-[var(--text-default)] placeholder:text-xs placeholder-[var(--text-default)] text-[var(--text-default)] px-3 py-2 rounded-md outline-green-600 min-w-30 max-w-30"
						/>
					</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
};
