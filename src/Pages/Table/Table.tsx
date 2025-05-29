import "./styles.module.css";
import { type ChartDataItem, Charts } from "../../components/Charts/Charts";
import { Sidebar } from "../../components/Sidebar/Sidebar";

const chartData: ChartDataItem[] = [
	{ element: "pH", running: 450, swimming: 300 },
	{ element: "CO", running: 380, swimming: 420 },
	{ element: "MO", running: 520, swimming: 120 },
	{ element: "CO", running: 140, swimming: 550 },
	{ element: "P", running: 600, swimming: 350 },
	{ element: "K", running: 480, swimming: 400 },
	{ element: "Ca", running: 480, swimming: 500 },
	{ element: "Mg", running: 480, swimming: 500 },
	{ element: "S", running: 140, swimming: 550 },
	{ element: "B", running: 600, swimming: 350 },
	{ element: "Zn", running: 480, swimming: 400 },
	{ element: "Cu", running: 480, swimming: 500 },
	{ element: "Mn", running: 480, swimming: 500 },
	{ element: "Fe", running: 480, swimming: 400 },
	{ element: "Al", running: 480, swimming: 500 },
	{ element: "CTC", running: 480, swimming: 500 },
	{ element: "V%", running: 140, swimming: 550 },
	{ element: "H+Al", running: 600, swimming: 350 },
];

const chartConfig = {
	running: {
		label: "Atual",
		color: "hsl(var(--chart-1))",
	},
	swimming: {
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
