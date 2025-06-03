import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../ui/table";

export const TableIputFarmer = () => {
	return (
		<Table>
			<TableHeader>
				<TableCaption className="w-max text-3xl text-center text-[var(--text-default)]">
					Tabela de dados da Fazenda
				</TableCaption>
			</TableHeader>
			<TableHeader>
				<TableRow className="grid-cols-5">
					<TableHead className="text-center text-[var(--text-default)]">
						Invoice
					</TableHead>
					<TableHead className="text-center text-[var(--text-default)]">
						Status
					</TableHead>
					<TableHead className="text-center text-[var(--text-default)]">
						Method
					</TableHead>
					<TableHead className="text-center text-[var(--text-default)]">
						Amount
					</TableHead>
					<TableHead className="text-center text-[var(--text-default)]">
						Amount
					</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow className="grid-cols-5">
					<TableCell>
						<input className="`flex-1 text-sm border border-[var(--text-default)] placeholder:text-xs placeholder-[var(--text-default)] text-[var(--text-default)] px-3 py-2 rounded-md outline-green-600 min-w-20 max-w-20" />
					</TableCell>
					<TableCell>
						<input className="`flex-1 text-sm border border-[var(--text-default)] placeholder:text-xs placeholder-[var(--text-default)] text-[var(--text-default)] px-3 py-2 rounded-md outline-green-600 min-w-20 max-w-20" />
					</TableCell>
					<TableCell>
						<input className="`flex-1 text-sm border border-[var(--text-default)] placeholder:text-xs placeholder-[var(--text-default)] text-[var(--text-default)] px-3 py-2 rounded-md outline-green-600 min-w-20 max-w-20" />
					</TableCell>
					<TableCell>
						<input className="`flex-1 text-sm border border-[var(--text-default)] placeholder:text-xs placeholder-[var(--text-default)] text-[var(--text-default)] px-3 py-2 rounded-md outline-green-600 min-w-20 max-w-20" />
					</TableCell>
					<TableCell>
						<input className="`flex-1 text-sm border border-[var(--text-default)] placeholder:text-xs placeholder-[var(--text-default)] text-[var(--text-default)] px-3 py-2 rounded-md outline-green-600 min-w-20 max-w-20" />
					</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
};
