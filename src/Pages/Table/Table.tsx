import "./styles.module.css";
import { Charts } from "../../components/Charts/Charts";

export const Table = () => {
	return (
		<div className="bg-background text-center pt-[0vh] h-[100vh]">
			<div className="flex items-center justify-center bg-opacity-50 ">
				<div className="bg-surface-variant lg:w-[80vw] w-[100vw] h-[75vh] overflow-y-auto p-6 rounded-lg shadow-xl">
					<Charts />
				</div>
			</div>
		</div>
	);
};
