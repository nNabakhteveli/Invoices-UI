import LoginPage from './components/Login';
import ChooseGroup from './components/ChooseGroup';
import StartCreatingInvoice from './components/StartCreatingInvoice';
import InvoiceUserDetails from './components/InvoiceUserDetails';
import ProcoeedWithInvoiceCreation from './components/ProceedWithInvoiceCreation';
import NotFoundResponse from './components/NotFoundResponse';
import InvoicesListPage from './components/InvoicesListPage';
import Navbar from './components/Navbar';
// import StepsCount from './components/StepsCount';

import categoriesData from "./categoryComponentsData";

// Must add permissions for certain routes later
const routes = [
	{
		path: "/",
		element: <LoginPage />
	},
	{
		path: "/choose-group",
		element: 
		<>
		<Navbar />
		{/* <StepsCount /> */}
		<ChooseGroup categoriesData={categoriesData} />
		</>
	},
	{
		path: "/start-creating-invoice",
		element:
		<>
			<Navbar />
			<StartCreatingInvoice />
		</>
	},
	{
		path: "/add-user-details-to-invoice",
		element:
		<>
			<Navbar />
			<InvoiceUserDetails />
		</>
	},
	{
		path: "/start-creating-invoice/proceed-with-invoice-creation",
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
