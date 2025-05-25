import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Register } from "./pages";

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
