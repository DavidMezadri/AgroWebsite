import { ArrowBigRightIcon, MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import "./styles.module.css";

export const Sidebar = () => {
	const [onClickOpen, onClickClose] = useState(false);
	return (
		<div className="fixed z-50">
			<div
				className={`hidden lg:block ${onClickOpen ? "w-30" : "w-9"} duration-300 h-screen bg-surface relative`}
			>
				<ArrowBigRightIcon
					fill="none"
					className={`absolute hover:drop-shadow-[0_0_9px_white] cursor-pointer rounded-full -right-3 top-9 w-9 h-9 border-3 border-text-muted text-text-muted ${onClickOpen && "rotate-180"} duration-800`}
					onClick={() => onClickClose(!onClickOpen)}
					onKeyDown={(e) => {
						if (e.key === "Enter" || e.key === " ") {
							e.preventDefault();
							onClickClose(!onClickOpen);
						}
					}}
				/>
				<div className="absolute  right-0 top-30">
					<div className="flex flex-col gap-y-[15vh] w-30">
						<button
							type="button"
							className={`text-center border-accent bg-accent hover:bg-accent-hover hover:drop-shadow-[0_0_2px_white] rounded-full p-2 cursor-pointer text-lg text-text ${onClickOpen ? "w-30" : "w-9"} duration-300`}
						>
							Fazendas
						</button>
						<button
							type="button"
							className={`text-center border-accent bg-accent hover:bg-accent-hover hover:drop-shadow-[0_0_2px_white] rounded-full p-2 cursor-pointer text-lg text-text ${onClickOpen ? "w-30" : "w-9"} duration-300`}
						>
							Análises
						</button>
						<button
							type="button"
							className={`text-center border-accent bg-accent hover:bg-accent-hover hover:drop-shadow-[0_0_2px_white] rounded-full p-2 cursor-pointer text-lg text-text ${onClickOpen ? "w-30" : "w-9"} duration-300`}
						>
							Outros
						</button>
						<button
							type="button"
							className={`text-center border-accent bg-accent hover:bg-accent-hover hover:drop-shadow-[0_0_2px_white] rounded-full p-2 cursor-pointer text-lg text-text ${onClickOpen ? "w-30" : "w-9"} duration-300`}
						>
							Sobre
						</button>
					</div>
				</div>
			</div>
			<div
				className={`${onClickOpen ? "w-[100vw]" : "w-0"} duration-300 h-screen bg-surface relative`}
			>
				<XIcon
					fill="none"
					className="absolute lg:hidden hover:drop-shadow-[0_0_9px_white] cursor-pointer w-9 h-9 -right-[-2vw] top-5 border-text-muted text-text-muted"
					onClick={() => onClickClose(!onClickOpen)}
				/>
				<MenuIcon
					fill="none"
					className="absolute block lg:hidden hover:drop-shadow-[0_0_9px_white] cursor-pointer -right-11 top-5 w-9 h-9 border-text-muted text-text-muted"
					onClick={() => onClickClose(!onClickOpen)}
				/>
				<div className="absolute right-[50vw] top-20 translate-x-1/2">
					<div className="flex flex-col gap-y-[10vh] w-80">
						<button
							type="button"
							className={
								"h-[10vh] flex items-center text-3xl justify-center bg-accent hover:bg-accent-hover hover:drop-shadow-[0_0_2px_white] rounded-full p-2 text-text duration-300"
							}
						>
							Fazendas
						</button>
						<button
							type="button"
							className={
								"h-[10vh] flex items-center text-3xl justify-center bg-accent hover:bg-accent-hover hover:drop-shadow-[0_0_2px_white] rounded-full p-2 text-text duration-300"
							}
						>
							Análises
						</button>
						<button
							type="button"
							className={
								"h-[10vh] flex items-center text-3xl justify-center bg-accent hover:bg-accent-hover hover:drop-shadow-[0_0_2px_white] rounded-full p-2 text-text duration-300"
							}
						>
							Outros
						</button>
						<button
							type="button"
							className={
								"h-[10vh] flex items-center text-3xl justify-center bg-accent hover:bg-accent-hover hover:drop-shadow-[0_0_2px_white] rounded-full p-2 text-text duration-300"
							}
						>
							Sobre
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
