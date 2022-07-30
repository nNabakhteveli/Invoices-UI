import LoginPage from './components/Login';
import ChooseCategory from './components/ChooseCategories';
import StartCreatingInvoice from './components/StartCreatingInvoice';
import ProcoeedWithInvoiceCreation from './components/ProceedWithInvoiceCreation';
import NotFoundResponse from './components/NotFoundResponse';
import InvoicesListPage from './components/InvoicesListPage';
import Navbar from './components/Navbar';

import categoriesData from "./categoryComponentsData";

// Must add permissions for certain routes later
const routes = [
	{
		path: "/",
		element: <LoginPage />
	},
	{
		path: "/choose-category",
		element: 
		<>
		<Navbar />
		<ChooseCategory categoriesData={categoriesData} />
		</>
	},
	{
		path: "/create-invoice",
		element:
		<>
			<Navbar />
			<StartCreatingInvoice />
		</>
	},
	{
		path: "/proceed-with-invoice-creation",
		element: <ProcoeedWithInvoiceCreation />
	},
	{
		path: "/invoices-list",
		element: 
		<>
		<Navbar activeItem='invoice-list' />
		<InvoicesListPage />
		</>
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
