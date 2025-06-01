import { EyeIcon, PenIcon } from "lucide-react";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../ui/table";

export type TableDataProps = {
	title: string;
	headLabels: string[];
	data: { id: number; name: string; date: Date }[];
};

type TableAnalysisProps = TableDataProps & {
	onToggle: () => void;
};

export const TableAnalysis = (tableData: TableAnalysisProps) => {
	return (
		<Table>
			<TableCaption className="caption-top text-2xl font-bold text-[var(--text-default)]">
				{tableData.title}
			</TableCaption>

			<TableHeader>
				<TableRow className="flex justify-between caption-top text-center">
					{tableData.headLabels.map((i) => {
						return (
							<TableHead
								className="text-[var(--text-default)]"
								key={i}
							>
								{i}
							</TableHead>
						);
					})}
					<TableHead className="text-[var(--text-default)]">
						Ações
					</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{tableData.data.map((i) => {
					return (
						<TableRow
							key={i.id}
							className="flex justify-between items-center "
						>
							<TableCell className="font-medium">
								{i.id}
							</TableCell>
							<TableCell className="font-medium">
								{i.name}
							</TableCell>
							<TableCell className="font-medium">
								{i.date.toLocaleDateString()}
							</TableCell>
							<TableCell className="flex gap-3">
								<EyeIcon
									className="cursor-pointer"
									onClick={tableData.onToggle}
								/>
								<PenIcon className="cursor-pointer" />
							</TableCell>
						</TableRow>
					);
				})}
			</TableBody>
		</Table>
	);
};
