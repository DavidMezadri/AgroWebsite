import { SunIcon, MoonIcon } from "lucide-react";
import { useEffect, useState } from "react";

type AvailableThemes = "dark" | "light";

type ThemeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ThemeButton = ({ className = "", ...props }: ThemeButtonProps) => {
	const [theme, setTheme] = useState(() => {
		const StorageTheme =
			(localStorage.getItem("theme") as AvailableThemes) || "dark";

		return StorageTheme;
	});

	const handleThemeEvent = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		event.preventDefault();

		setTheme((prevTheme) => {
			const nextTheme = prevTheme === "dark" ? "light" : "dark";

			return nextTheme;
		});
	};

	useEffect(() => {
		localStorage.setItem("theme", theme);

		document.documentElement.setAttribute("data-theme", theme);

		return () => {
			//
		};
	}, [theme]);

	return (
		<button
			onClick={handleThemeEvent}
			className={
				"bg-green-600 rounded hover:bg-[var(--link-hover)] b-1 p-1 transition hover:cursor-pointer " +
				className
			}
			{...props}
		>
			{theme === "dark" ? <SunIcon size={30} /> : <MoonIcon size={30} />}
		</button>
	);
};
