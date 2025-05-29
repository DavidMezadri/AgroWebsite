import "./styles.module.css";
import { type ChartDataItem, Charts } from "../../components/Charts/Charts";
import { Sidebar } from "../../components/Sidebar/Sidebar";

const chartData: ChartDataItem[] = [
	{ element: "pH", current: 450, missing: 300 },
	{ element: "CO", current: 380, missing: 420 },
	{ element: "MO", current: 520, missing: 120 },
	{ element: "CO", current: 140, missing: 550 },
	{ element: "P", current: 600, missing: 350 },
	{ element: "K", current: 480, missing: 400 },
	{ element: "Ca", current: 480, missing: 500 },
	{ element: "Mg", current: 480, missing: 500 },
	{ element: "S", current: 140, missing: 550 },
	{ element: "B", current: 600, missing: 350 },
	{ element: "Zn", current: 480, missing: 400 },
	{ element: "Cu", current: 480, missing: 500 },
	{ element: "Mn", current: 480, missing: 500 },
	{ element: "Fe", current: 480, missing: 400 },
	{ element: "Al", current: 480, missing: 500 },
	{ element: "CTC", current: 480, missing: 500 },
	{ element: "V%", current: 140, missing: 550 },
	{ element: "H+Al", current: 600, missing: 350 },
];

const chartConfig = {
	current: {
		label: "Atual",
		color: "hsl(var(--chart-1))",
	},
	missing: {
		label: "Ideal",
		color: "hsl(var(--chart-2))",
	},
};

export const Table = () => {
	return (
		<div>
			<Sidebar />
			<div className="grid place-items-center h-screen bg-background">
				<div className="lg:w-[70vw] w-[100vw] h-[95vh]">
					<div className="rounded-lg shadow-xl">
						<Charts chartConfig={chartConfig} chartData={chartData} />
					</div>
				</div>
			</div>
		</div>
	);
};
