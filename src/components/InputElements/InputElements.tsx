import type React from "react";
import type { FormTemplate } from "../../pages/Analysis/Analysis";

type InputElementsProps = {
	placeholder: string;
	type?: string;
	infos: FormTemplate[];

	index: number;
	width?: string;
	function: (index: number, field: string, valor: string) => void;
};

export const InputElements: React.FC<InputElementsProps> = ({
	placeholder,
	type = "number",
	infos,
	index,
	width = 20,
	function: handleClickUpdate,
}) => {
	const field = placeholder.trim();
	return (
		<div>
			<input
				className={`flex-1 text-sm border border-[var(--gray-600)] placeholder:text-xs placeholder-[var(--text-default)] text-[var(--text-default)] px-3 py-2 rounded-md outline-green-600 min-w-${width} max-w-${width}`}
				placeholder={placeholder}
				required
				type={type}
				onChange={(e) => handleClickUpdate(index, field, e.target.value)}
				value={infos[index][field as keyof FormTemplate]}
			/>
		</div>
	);
};
