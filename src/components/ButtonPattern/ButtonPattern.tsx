import type React from "react";

type ButtonPatternsProps = {
	type: "button" | "submit" | "reset";
	value: string;
	className?: string;
	functionOnClick?: () => void;
};

export const ButtonPattern: React.FC<ButtonPatternsProps> = ({
	type,
	value,
	className,
	functionOnClick,
}) => {
	return (
		<button
			type={type}
			className={`mt-2 bottom-1/10 left-1/2 w-1/10 min-w-25 py-3 text-sm tracking-wider font-medium rounded-md text-[var(--text-default)] bg-[var(--button-color)] hover:bg-[var(--link-hover)] focus:outline-none cursor-pointer transition ${className}`}
			onClick={functionOnClick}
		>
			{value}
		</button>
	);
};
