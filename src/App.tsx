import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Analysis, Farm, Login, Register, Table } from "./pages/index";

export const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/analysis" element={<Analysis />} />
				<Route path="/table" element={<Table />} />
				<Route path="/Farm" element={<Farm />} />
			</Routes>
		</Router>
	);
};

export default App;
