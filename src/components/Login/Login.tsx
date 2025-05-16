import "./style.module.css";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type IconType = "hidden" | "show";

export const Login = () => {
	const navigate = useNavigate();
	const [icon, SetIcon] = useState<IconType>("hidden");
	const [showPassword, setShowPassword] = useState(false);
	const togglePassword = () => setShowPassword((prev) => !prev);

	const switchIcons = {
		hidden: (
			<EyeOffIcon
				color="#9ca3af"
				className="w-4 h-4 absolute right-4 cursor-pointer"
				onClick={() => {
					SetIcon("show");
					togglePassword();
				}}
			/>
		),
		show: (
			<EyeIcon
				color="#9ca3af"
				className="w-4 h-4 absolute right-4 cursor-pointer"
				onClick={() => {
					SetIcon("hidden");
					togglePassword();
				}}
			/>
		),
	};

	return (
		<>
			{/* Toggle Button */}
			<div className="bg-gray-50">
				<div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
					<div className="max-w-md w-full">
						<a href="www">
							{
								<img
									src="./download.svg"
									alt="logo"
									className="w-20 mb-8 mx-auto block"
								/>
							}
						</a>

						<div className="p-8 rounded-2xl bg-white shadow">
							<h2 className="text-slate-900 text-center text-3xl font-semibold">
								Página de Login
							</h2>
							<form className="mt-12 space-y-6">
								<div>
									<label
										htmlFor="username"
										className="text-slate-800 text-sm font-medium mb-2 block"
									>
										Usuário
									</label>
									<div className="relative flex items-center">
										<input
											id="username"
											name="username"
											type="text"
											required
											className="w-full text-slate-800 text-sm border border-slate-300 px-4 py-3 rounded-md outline-green-600"
											placeholder="Digite o Usuário"
										/>

										{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="#bbb"
											stroke="#bbb"
											className="w-4 h-4 absolute right-4"
											viewBox="0 0 24 24"
										>
											<circle cx="10" cy="7" r="6" data-original="#000000" />
											<path
												d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
												data-original="#000000"
											/>
										</svg>
									</div>
								</div>

								<div>
									<label
										htmlFor="password"
										className="text-slate-800 text-sm font-medium mb-2 block"
									>
										Senha
									</label>
									<div className="relative flex items-center">
										<input
											id="password"
											name="password"
											type={showPassword ? "text" : "password"}
											required
											className="w-full text-slate-800 text-sm border border-slate-300 px-4 py-3 rounded-md outline-green-600"
											placeholder="Digite a Senha"
										/>
										{/* {showPassword ? (
											<EyeIcon
												color="#9ca3af"
												className="w-4 h-4 absolute right-4 cursor-pointer"
												onClick={togglePassword}
											/>
										) : (
											<EyeOffIcon
												color="#9ca3af"
												className="w-4 h-4 absolute right-4 cursor-pointer"
												onClick={togglePassword}
											/>
										)} */}
										{switchIcons[icon]}
									</div>
								</div>

								<div className="flex flex-wrap items-center justify-between gap-4">
									<div className="flex items-center">
										<input
											id="remember-me"
											name={showPassword ? "text" : "password"}
											type="checkbox"
											className="h-4 w-4 shrink-0 text-green-600 focus:ring-green-500 border-slate-300 rounded"
										/>
										<label
											htmlFor="remember-me"
											className="ml-3 block text-sm text-slate-800"
										>
											Lembrar Usuário
										</label>
									</div>
									<div className="text-sm">
										<a
											href="jajvascript:void(0);"
											className="text-green-600 hover:underline font-semibold"
										>
											Esqueceu sua senha?
										</a>
									</div>
								</div>

								<div className="!mt-12">
									<button
										type="button"
										className="w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none cursor-pointer"
									>
										Logar
									</button>
								</div>
								<p className="text-slate-800 text-sm !mt-6 text-center">
									Não possui uma conta?{" "}
									<a
										href="www"
										className="text-green-600 hover:underline ml-1 whitespace-nowrap font-semibold"
										onClick={(e) => {
											e.preventDefault();
											navigate("/register");
										}}
									>
										Registrar
									</a>
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>{" "}
		</>
	);
};
