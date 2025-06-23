import "./styles.module.css";
import { X, XIcon } from "lucide-react";
import { type SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeButton } from "../../components";

export const Register = () => {
	const navigate = useNavigate();
	const [showTerms, setShowTerms] = useState(false);
	const [email, setEmail] = useState("");
	const [erroEmail, setErroEmail] = useState("");
	const [password, setPassword] = useState("");
	const [erroPassword, setErroPassword] = useState("");
	const [passwordConfirmation, setPasswordConfirmation] = useState("");
	const [checkbox, setCheckbox] = useState(false);
	const [erroCheckbox, setErroCheckbox] = useState("");

	const handleChangeEmail = (e: {
		target: { value: SetStateAction<string> };
	}) => {
		setEmail(e.target.value);
		setErroEmail("");
	};

	const handleChangePassword = (e: {
		target: { value: SetStateAction<string> };
	}) => {
		setPassword(e.target.value);
		setErroPassword("");
	};

	const handleChangePasswordConfirmation = (e: {
		target: { value: SetStateAction<string> };
	}) => {
		setPasswordConfirmation(e.target.value);
		setErroPassword("");
	};

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
			setErroEmail("E-mail inválido");
			return;
		}
		if (password !== passwordConfirmation) {
			setErroPassword("As senhas não coincidem");
			return;
		}
		if (password.length <= 6) {
			setErroPassword("Senha deve ter pelo menos 6 caracteres");
			return;
		}
		if (!checkbox) {
			setErroCheckbox("Você deve aceitar os termos e condições");
			return;
		}

		// prosseguir com envio
		console.log("Email válido:", email);
	};

	return (
		<div className="flex flex-col justify-center sm:h-screen p-4 bg-[var(--gray-200)]">
			{showTerms && (
				<div className="z-30 bg-[var(--gray-300)] fixed w-[80vw] h-[90vh] text-[var(--text-default)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-y-auto p-6">
					<div className="flex justify-end">
						<XIcon
							className="cursor-pointer"
							onClick={() => setShowTerms(false)}
						/>
					</div>
					<h1 className="text-2xl font-bold mb-4">Termos de Uso</h1>

					<p className="mb-4">
						Bem-vindo ao nosso site de análise de solo. Ao utilizar esta
						plataforma, você concorda com os seguintes termos:
					</p>

					<h2 className="text-xl font-semibold mt-6 mb-2">
						1. Uso da Plataforma
					</h2>
					<p className="mb-4">
						Nosso site oferece ferramentas para análise, visualização e
						interpretação de dados relacionados à qualidade do solo. O uso é
						destinado a fins informativos, educacionais e profissionais.
					</p>

					<h2 className="text-xl font-semibold mt-6 mb-2">
						2. Coleta e Tratamento de Dados
					</h2>
					<p className="mb-4">
						Você pode enviar dados relacionados ao solo (amostras, coordenadas,
						análises laboratoriais etc.). Esses dados poderão ser armazenados e
						utilizados para melhoria dos nossos serviços, sempre respeitando a
						privacidade e confidencialidade.
					</p>

					<h2 className="text-xl font-semibold mt-6 mb-2">
						3. Responsabilidades
					</h2>
					<p className="mb-4">
						A interpretação dos resultados é de responsabilidade do usuário. As
						análises fornecidas são baseadas em algoritmos e modelos que podem
						apresentar limitações ou variações.
					</p>

					<h2 className="text-xl font-semibold mt-6 mb-2">
						4. Propriedade Intelectual
					</h2>
					<p className="mb-4">
						Todos os direitos sobre o conteúdo, design, código e ferramentas do
						site pertencem aos seus desenvolvedores. É proibido copiar,
						distribuir ou modificar qualquer parte da plataforma sem
						autorização.
					</p>

					<h2 className="text-xl font-semibold mt-6 mb-2">5. Privacidade</h2>
					<p className="mb-4">
						Nos comprometemos a proteger os dados pessoais fornecidos pelos
						usuários. Não compartilhamos informações com terceiros sem
						consentimento.
					</p>

					<h2 className="text-xl font-semibold mt-6 mb-2">6. Modificações</h2>
					<p className="mb-6">
						Estes termos podem ser atualizados a qualquer momento. É
						responsabilidade do usuário revisar periodicamente os termos
						vigentes.
					</p>

					<hr className="my-4" />

					<p className="font-semibold">
						<strong>
							Ao continuar utilizando o site, você concorda com todos os termos
							acima.
						</strong>
					</p>
				</div>
			)}

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
								value={email}
								onChange={handleChangeEmail}
								type="text"
								className="text-[var(--text-default)] bg-[var(--gray-300)] border border-[var(--text-default)] w-full text-sm px-4 py-3 rounded-md outline-green-500"
								placeholder="Digite o e-mail"
							/>
							{erroEmail && <span style={{ color: "red" }}>{erroEmail}</span>}
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
								value={password}
								onChange={handleChangePassword}
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
								value={passwordConfirmation}
								onChange={handleChangePasswordConfirmation}
								type="password"
								className="text-[var(--text-default)] bg-[var(--gray-300)] border border-[var(--text-default)] w-full text-sm px-4 py-3 rounded-md outline-green-500"
								placeholder="Digite a confirmação da senha"
							/>
							{erroPassword && (
								<span style={{ color: "red" }}>{erroPassword}</span>
							)}
						</div>

						<div className="flex items-center">
							<input
								id="remember-me"
								name="remember-me"
								onChange={(e) => {
									setCheckbox(e.target.checked);
									setErroCheckbox("");
								}}
								type="checkbox"
								className="h-4 w-4 shrink-0 text-[var(--link-color)] focus:ring-green-500 border-slate-300 rounded"
							/>
							<label
								htmlFor="remember-me"
								className="text-[var(--text-default)] ml-3 block text-sm"
							>
								Eu aceito os{" "}
								<button
									type="button"
									onClick={() => setShowTerms(true)}
									className="text-[var(--link-color)] font-medium hover:underline ml-1 cursor-pointer bg-transparent border-0 p-0"
								>
									Termos e Condições
								</button>
							</label>
						</div>
						{erroCheckbox && (
							<span style={{ color: "red" }}>{erroCheckbox}</span>
						)}
					</div>

					<div className="mt-12">
						<button
							type="button"
							onClick={handleSubmit}
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
									navigate("/");
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
