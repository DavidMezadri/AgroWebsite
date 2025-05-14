import "./styles.module.css";
import { useNavigate } from "react-router-dom";

export const Register = () => {
	const navigate = useNavigate();
	return (
		<div className="flex flex-col justify-center sm:h-screen p-4">
			<div className="max-w-md w-full mx-auto border border-slate-300 rounded-2xl p-8">
				<div className="text-center mb-5">
					<a href="login">
						<img src="download.svg" alt="logo" className="w-20 inline-block" />
					</a>
				</div>

				<form>
					<div className="space-y-6">
						<div>
							<label
								htmlFor="email"
								className="text-slate-800 text-sm font-medium mb-2 block"
							>
								Email
							</label>
							<input
								id="email"
								name="email"
								type="text"
								className="text-slate-800 bg-white border border-slate-300 w-full text-sm px-4 py-3 rounded-md outline-green-500"
								placeholder="Enter email"
							/>
						</div>
						<div>
							<label
								htmlFor="password"
								className="text-slate-800 text-sm font-medium mb-2 block"
							>
								Senha
							</label>
							<input
								id="password"
								name="password"
								type="password"
								className="text-slate-800 bg-white border border-slate-300 w-full text-sm px-4 py-3 rounded-md outline-green-500"
								placeholder="Enter password"
							/>
						</div>
						<div>
							<label
								htmlFor="cpassword"
								className="text-slate-800 text-sm font-medium mb-2 block"
							>
								Confirmação da Senha
							</label>
							<input
								id="cpassword"
								name="cpassword"
								type="password"
								className="text-slate-800 bg-white border border-slate-300 w-full text-sm px-4 py-3 rounded-md outline-green-500"
								placeholder="Enter confirm password"
							/>
						</div>

						<div className="flex items-center">
							<input
								id="remember-me"
								name="remember-me"
								type="checkbox"
								className="h-4 w-4 shrink-0 text-green-600 focus:ring-green-500 border-slate-300 rounded"
							/>
							<label
								htmlFor="remember-me"
								className="text-slate-800 ml-3 block text-sm"
							>
								Eu aceito os{" "}
								<a
									href="/termoscontrato"
									className="text-green-600 font-medium hover:underline ml-1"
								>
									Termos e Condições
								</a>
							</label>
						</div>
					</div>

					<div className="mt-12">
						<button
							type="button"
							className="w-full py-3 px-4 text-sm tracking-wider font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none cursor-pointer"
						>
							Create an account
						</button>
					</div>
					<p className="text-slate-800 text-sm mt-6 text-center">
						Já possui cadastro?{" "}
						<a
							href="/login"
							className="text-green-600 font-medium hover:underline ml-1"
							onClick={(e) => {
								e.preventDefault();
								navigate("/login");
							}}
						>
							Volte ao Login
						</a>
					</p>
				</form>
			</div>
		</div>
	);
};
