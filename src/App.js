import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import routes from "./routes";

const App = () => {
	return (
		<Router>
			<Routes>
				{
          routes.map(route => (
            <Route key={route.id} path={route.path} {...route} />
          ))
        }
			</Routes>
		</Router>
	);
};

export default App;