import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Analysis, Login, Register, Table } from "./Pages/index";

export const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/analysis" element={<Analysis />} />
				<Route path="/table" element={<Table />} />
			</Routes>
		</Router>
	);
};

export default App;
