import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Register } from "./components";

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
			</Routes>
		</Router>
	);
};

export default App;
