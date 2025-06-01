import "./styles.module.css";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/card";

import { XIcon } from "lucide-react";
import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "../ui/chart";

export type ChartDataItem = {
	element: string;
	current: number;
	missing: number;
};

export function Charts({
	chartConfig,
	chartData,
	onToggle,
	title,
}: {
	chartConfig: ChartConfig;
	chartData: ChartDataItem[][];
	onToggle: () => void;
	title: string;
}) {
	const elements = chartData.map((item) => item[0].element);

	const max = Math.max(
		...chartData.map((item) => item[0].current + item[0].missing),
	);

	const steps = 15;
	const ticksArray = Array.from(
		{ length: steps + 1 },
		(_, i) => (i * max) / steps,
	);

	return (
		<Card>
			<CardHeader>
				<XIcon
					onClick={onToggle}
					className="relative -right-[98%] cursor-pointer"
				/>
				<CardTitle>{title}</CardTitle>
				<CardDescription>
					Default tooltip wiasdasdth ChartTooltipContent.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<BarChart accessibilityLayer data={chartData[0]}>
						<XAxis
							dataKey="Nutriente"
							angle={-45}
							textAnchor="end"
							interval={0}
							className=" text-[8px] sm:text-sm"
							tickLine={true}
							tickMargin={1}
							axisLine={true}
							tickFormatter={(_value, index) => elements[index]}
						/>
						<YAxis
							dataKey=""
							tickLine={true}
							tickMargin={10}
							axisLine={true}
							tickFormatter={(_value, index) => {
								if (index === undefined || index >= ticksArray.length)
									return "";
								return ticksArray[index].toFixed(0);
							}}
							ticks={ticksArray}
						/>
						<Bar
							dataKey="current"
							stackId="a"
							fill="var(--chart-2)"
							radius={[0, 0, 4, 4]}
						/>
						<Bar
							dataKey="missing"
							stackId="a"
							fill="var(--chart-1)"
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
