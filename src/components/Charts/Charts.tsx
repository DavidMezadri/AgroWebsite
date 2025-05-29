import "./styles.module.css";
import { Bar, BarChart, XAxis } from "recharts";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/card";

import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "../ui/chart";

export type ChartDataItem = {
	element: string;
	running: number;
	swimming: number;
};

export function Charts({
	chartConfig,
	chartData,
}: {
	chartConfig: ChartConfig;
	chartData: ChartDataItem[];
}) {
	const elements = chartData.map((item) => item.element);
	return (
		<Card>
			<CardHeader>
				<CardTitle>Tooltip - Default</CardTitle>
				<CardDescription>
					Default tooltip wiasdasdth ChartTooltipContent.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<BarChart accessibilityLayer data={chartData}>
						<XAxis
							dataKey="Nutriente"
							tickLine={false}
							tickMargin={10}
							axisLine={false}
							tickFormatter={(_value, index) => elements[index]}
						/>
						<Bar
							dataKey="running"
							stackId="a"
							fill="var(--chart-1)"
							radius={[0, 0, 4, 4]}
						/>
						<Bar
							dataKey="swimming"
							stackId="a"
							fill="var(--chart-2)"
							radius={[4, 4, 0, 0]}
						/>
						<ChartTooltip
							content={<ChartTooltipContent />}
							cursor={false}
							defaultIndex={1}
						/>
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
