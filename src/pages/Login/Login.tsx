import "./style.module.css";
import "../../styles/theme.css";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeButton } from "../../components";

type IconType = "hidden" | "show";

export const Login = () => {
	const navigate = useNavigate();
	const [icon, SetIcon] = useState<IconType>("hidden");
	const [showPassword, setShowPassword] = useState(false);
	const togglePassword = () => setShowPassword((prev) => !prev);

	const switchIcons = {
		hidden: (
			<EyeOffIcon
				color="var(--text-default)"
				className="w-4 h-4 absolute right-4 cursor-pointer"
				onClick={() => {
					SetIcon("show");
					togglePassword();
				}}
			/>
		),
		show: (
			<EyeIcon
				color="var(--text-default)"
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
			<div className="bg-[var(--gray-200)]">
				<div className="min-h-screen flex flex-col items-center justify-center py-6 px-4 bg-[var(--gray-200)]">
					<div className="max-w-md w-full">
						<div className="p-8 rounded-2xl bg-[var(--gray-300)]">
							<div className="flex justify-center items-center gap-6 mb-2">
								<h1 className="text-5xl font-bold text-[var(--text-default)] font-family-display text-center">
									Login
								</h1>
								<a href="">
									{
										<img
											src="./download.svg"
											alt="logo"
											className="w-24 h-24"
										/>
									}
								</a>
							</div>
							<form className="mt-12 space-y-6">
								<div>
									<label
										htmlFor="username"
										className="text-[var(--text-default)] text-sm font-medium mb-2 block"
									>
										Usuário
									</label>
									<div className="relative flex items-center">
										<input
											id="username"
											name="username"
											type="text"
											required
											className="w-full text-[var(--text-default)] text-sm border border-[var(--text-default)] px-4 py-3 rounded-md outline-[var(--link-color)]"
											placeholder="Digite o Usuário"
										/>

										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-4 h-4 absolute right-4 fill-[var(--text-default)]"
											viewBox="0 0 24 24"
										>
											<circle cx="10" cy="7" r="6" data-original="#000000" />
											<title>User</title>
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
										className="text-[var(--text-default)] text-sm font-medium mb-2 block"
									>
										Senha
									</label>
									<div className="relative flex items-center">
										<input
											id="password"
											name="password"
											type={showPassword ? "text" : "password"}
											required
											className="w-full text-[var(--text-default)] text-sm border border-[var(--text-default)] px-4 py-3 rounded-md outline-[var(--link-color)]"
											placeholder="Digite a Senha"
										/>
										{switchIcons[icon]}
									</div>
								</div>

								<div className="flex flex-wrap items-center justify-between gap-4">
									<div className="flex items-center">
										<input
											id="remember-me"
											name={showPassword ? "text" : "password"}
											type="checkbox"
											className="h-4 w-4 shrink-0 text-[var(--link-color)] focus:ring-[var(--link-color)] border-slate-300 rounded"
										/>
										<label
											htmlFor="remember-me"
											className="ml-3 block text-sm text-[var(--text-default)]"
										>
											Lembrar Usuário
										</label>
									</div>
									<div className="text-sm">
										<a
											href="jajvascript:void(0);"
											className="text-[var(--link-color)] hover:underline font-semibold"
										>
											Esqueceu sua senha?
										</a>
									</div>
								</div>

								<div className="!mt-12">
									<button
										type="button"
										className="w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-[var(--text-default)] bg-[var(--link-color)] hover:bg-[var(--link-hover)] focus:outline-none cursor-pointer"
									>
										Logar
									</button>
								</div>
								<div className="relative w-full mt-6 pr-16">
									<p className="text-[var(--text-default)] text-sm !mt-6 text-center">
										Não possui uma conta?{" "}
										<a
											href="www"
											className="text-[var(--link-color)] hover:underline ml-1 whitespace-nowrap font-semibold"
											onClick={(e) => {
												e.preventDefault();
												navigate("/register");
											}}
										>
											Registrar
										</a>
									</p>
									<div className="absolute right-0 top-1/2 -translate-y-1/2">
										<ThemeButton />
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>{" "}
		</>
	);
};
