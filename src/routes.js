import LoginPage from './components/Login';
import ChooseCategory from './components/ChooseCategories';
import StartCreatingInvoice from './components/StartCreatingInvoice';
import ProcoeedWithInvoiceCreation from './components/ProceedWithInvoiceCreation';
import NotFoundResponse from './components/NotFoundResponse';

import categoriesData from "./categoryComponentsData";

// Must add permissions for certain routes later
const routes = [
	{
		path: "/",
		element: <LoginPage />
	},
	{
		path: "/categories",
		element: <ChooseCategory categoriesData={categoriesData} />
	},
	{
		path: "/create-invoice",
		element: <StartCreatingInvoice />
	},
	{
		path: "/proceed-with-invoice-creation",
		element: <ProcoeedWithInvoiceCreation />
	},
	{
		path: "*",
		element: <NotFoundResponse />
	}
];

export default routes
	.map((route, index) => ({
		id: index,
		...route
	}));
