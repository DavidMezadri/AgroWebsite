import {
	ChartColumnStackedIcon,
	CirclePlusIcon,
	FilePenLineIcon,
	PenIcon,
	Trash2Icon,
} from "lucide-react";
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

export type DataLabelInfo = {
	[key: string]: string | number | Date;
};

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
	onTogglePenIcon?: (e: React.MouseEvent<SVGSVGElement>) => void;
	classNamePenIcon?: string;
	onToggleCirclePlusIcon?: (e: React.MouseEvent<SVGSVGElement>) => void;
	classNameCirclePlusIcon?: string;
	onToggleChartColumnStackedIcon?: (e: React.MouseEvent<SVGSVGElement>) => void;
	classNameChartColumnStackedIcon?: string;
	onToggleFilePenLineIcon?: (e: React.MouseEvent<SVGSVGElement>) => void;
	classNameFilePenLineIcon?: string;
	onToggleTrash2Icon?: (e: React.MouseEvent<SVGSVGElement>) => void;
	classNameTrash2Icon?: string;
};

export const TableAnalysis = (tableData: TableAnalysisProps) => {
	return (
		<Table>
			<TableCaption className="caption-top text-2xl font-bold text-[var(--text-default)]">
				{tableData.dataTableHeader.title}
			</TableCaption>

			<TableHeader>
				<TableRow
					className={`grid-cols-${Object.keys(tableData.dataTableHeader.headLabels).length + 1}`}
				>
					{tableData.dataTableHeader.headLabels.map((i) => {
						return (
							<TableHead
								className="text-[var(--text-default)] text-center"
								key={i}
							>
								{i}
							</TableHead>
						);
					})}
					<TableHead className="text-[var(--text-default)] text-center">
						Ações
					</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{tableData.dataLabelsInfo.map((i) => {
					return (
						<TableRow
							key={i.labelInfo.id.toString()}
							className={`grid-cols-${Object.keys(tableData.dataTableHeader.headLabels).length + 1}`}
						>
							{Object.values(i.labelInfo).map((labelsValue, index) => (
								<TableCell
									key={`${i.labelInfo.id}-${index}`}
									className="font-medium text-center"
								>
									{labelsValue instanceof Date
										? labelsValue.toLocaleDateString("pt-BR")
										: labelsValue?.toString()}
								</TableCell>
							))}
							<TableCell className="flex gap-3 justify-center">
								<PenIcon
									data-id={i.labelInfo.id}
									className={`${tableData.classNamePenIcon} cursor-pointer`}
									onClick={tableData.onTogglePenIcon}
								/>
								<ChartColumnStackedIcon
									data-id={i.labelInfo.id}
									className={`${tableData.classNameChartColumnStackedIcon} cursor-pointer`}
									onClick={tableData.onToggleChartColumnStackedIcon}
								/>
								<CirclePlusIcon
									data-id={i.labelInfo.id}
									className={`${tableData.classNameCirclePlusIcon} cursor-pointer`}
									onClick={tableData.onToggleCirclePlusIcon}
								/>
								<FilePenLineIcon
									data-id={i.labelInfo.id}
									className={`${tableData.classNameFilePenLineIcon} cursor-pointer`}
									onClick={tableData.onToggleFilePenLineIcon}
								/>
								<Trash2Icon
									data-id={i.labelInfo.id}
									className={`${tableData.classNameFilePenLineIcon} cursor-pointer text-red-500`}
									onClick={tableData.onToggleTrash2Icon}
								/>
							</TableCell>
						</TableRow>
					);
				})}
			</TableBody>
		</Table>
	);
};
