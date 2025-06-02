import { EyeIcon, PenIcon } from "lucide-react";
import type { ChartDataItem } from "../Charts/Charts";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../ui/table";

export type DataLabelInfo = { id: number; name: string; date: Date };

export type TableDataProps = {
	title: string;
	headLabels: string[];
};

export type TableAllData = {
	dataTableHeader: TableDataProps;
	dataLabelsInfo: {
		labelInfo: DataLabelInfo;
		dataInfoAnalysis: ChartDataItem[];
	}[];
};

type TableAnalysisProps = TableAllData & {
	onToggle: (e: React.MouseEvent<SVGSVGElement>) => void;
};

export const TableAnalysis = (tableData: TableAnalysisProps) => {
	return (
		<Table>
			<TableCaption className="caption-top text-2xl font-bold text-[var(--text-default)]">
				{tableData.dataTableHeader.title}
			</TableCaption>

			<TableHeader>
				<TableRow className="flex justify-between caption-top text-center">
					{tableData.dataTableHeader.headLabels.map((i) => {
						return (
							<TableHead className="text-[var(--text-default)]" key={i}>
								{i}
							</TableHead>
						);
					})}
					<TableHead className="text-[var(--text-default)]">Ações</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{tableData.dataLabelsInfo.map((i) => {
					return (
						<TableRow
							key={i.labelInfo.id}
							className="flex justify-between items-center "
						>
							<TableCell className="font-medium">{i.labelInfo.id}</TableCell>
							<TableCell className="font-medium">{i.labelInfo.name}</TableCell>
							<TableCell className="font-medium">
								{i.labelInfo.date.toLocaleDateString()}
							</TableCell>
							<TableCell className="flex gap-3">
								<EyeIcon
									data-id={i.labelInfo.id}
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
