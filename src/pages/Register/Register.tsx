import "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { ThemeButton } from "../../components";

export const Register = () => {
	const navigate = useNavigate();
	return (
		<div className="flex flex-col justify-center sm:h-screen p-4 bg-[var(--gray-200)]">
			<div className="bg-white-500 max-w-md w-full mx-auto  rounded-2xl p-8 bg-[var(--gray-300)]">
				<div className="flex justify-center items-center gap-6 mb-2">
					<h1 className="text-5xl font-bold text-[var(--text-default)] font-family-display text-center">
						Registro
					</h1>
					<a href="login">
						<img
							src="download.svg"
							alt="logo"
							className="w-24 h-24 object-contain"
						/>
					</a>
				</div>
				<form>
					<div className="space-y-6">
						<div>
							<label
								htmlFor="email"
								className="text-[var(--text-default)] text-sm font-medium mb-2 block"
							>
								Email
							</label>
							<input
								id="email"
								name="email"
								type="text"
								className="text-[var(--text-default)] bg-[var(--gray-300)] border border-[var(--text-default)] w-full text-sm px-4 py-3 rounded-md outline-green-500"
								placeholder="Digite o email"
							/>
						</div>
						<div>
							<label
								htmlFor="password"
								className="text-[var(--text-default)] text-sm font-medium mb-2 block"
							>
								Senha
							</label>
							<input
								id="password"
								name="password"
								type="password"
								className="text-[var(--text-default)] bg-[var(--gray-300)] border border-[var(--text-default)] w-full text-sm px-4 py-3 rounded-md outline-green-500"
								placeholder="Digite a senha"
							/>
						</div>
						<div>
							<label
								htmlFor="cpassword"
								className="text-[var(--text-default)] text-sm font-medium mb-2 block"
							>
								Confirmação da Senha
							</label>
							<input
								id="cpassword"
								name="cpassword"
								type="password"
								className="text-[var(--text-default)] bg-[var(--gray-300)] border border-[var(--text-default)] w-full text-sm px-4 py-3 rounded-md outline-green-500"
								placeholder="Digite a confirmação da senha"
							/>
						</div>

						<div className="flex items-center">
							<input
								id="remember-me"
								name="remember-me"
								type="checkbox"
								className="h-4 w-4 shrink-0 text-[var(--link-color)] focus:ring-green-500 border-slate-300 rounded"
							/>
							<label
								htmlFor="remember-me"
								className="text-[var(--text-default)] ml-3 block text-sm"
							>
								Eu aceito os{" "}
								<a
									href="/termoscontrato"
									className="text-[var(--link-color)] font-medium hover:underline ml-1"
								>
									Termos e Condições
								</a>
							</label>
						</div>
					</div>

					<div className="mt-12">
						<button
							type="button"
							className="w-full py-3 px-4 text-sm tracking-wider font-medium rounded-md text-[var(--text-default)] bg-[var(--link-color)] hover:bg-[var(--link-hover)] focus:outline-none cursor-pointer"
						>
							Criar uma conta
						</button>
					</div>
					<div className="relative w-full mt-6 pr-16">
						<p className="text-[var(--text-default)] text-sm mt-6 text-center">
							Já possui cadastro?{" "}
							<a
								href="/login"
								className="text-[var(--link-color)] font-medium hover:underline ml-1"
								onClick={(e) => {
									e.preventDefault();
									navigate("/login");
								}}
							>
								Volte ao Login
							</a>
						</p>
						<div className="absolute right-0 top-1/2 -translate-y-1/2">
							<ThemeButton />
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};
