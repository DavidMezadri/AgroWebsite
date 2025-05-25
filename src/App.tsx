import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Register, Analysis } from "./pages";

export const App = () => {
	return (
		<Router>
			<Routes>
				<Route
					path="/login"
					element={<Login />}
				/>
				<Route
					path="/register"
					element={<Register />}
				/>
				<Route
					path="/analysis"
					element={<Analysis />}
				/>
			</Routes>
		</Router>
	);
};

export default App;
