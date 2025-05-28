import type React from "react";

type ButtonPatternsProps = {
	type: "button" | "submit" | "reset";
	value: string;
	className?: string;
	functionOnClick?: () => any;
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
			className={`mt-2 bottom-1/10 left-1/2 w-1/10 min-w-25 py-3 text-sm tracking-wider font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none cursor-pointer ${className}`}
			onClick={functionOnClick}
		>
			{value}
		</button>
	);
};
