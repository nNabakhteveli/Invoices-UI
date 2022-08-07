import { LoginPage } from "components/LoginPage";
import { ChooseGroupPage } from "components/ChooseGroupPage";
import { StartCreatingInvoicePage } from "components/StartCreatingInvoicePage";
import { FinishedInvoicePage } from "components/FinishedInvoicePage";
import { NotFoundPage } from "components/NotFoundPage";
import { InvoicesListPage } from "components/InvoicesListPage";
import { Navbar } from "components/Common";

// Must add permissions for certain routes later
const routes = [
	{
		path: "/",
		element: <LoginPage />,
	},
	{
		path: "/choose-group",
		element: (
			<>
				<Navbar />
				<ChooseGroupPage />
			</>
		),
	},
	{
		path: "/start-creating-invoice",
		element: (
			<>
				<Navbar />
				<StartCreatingInvoicePage />
			</>
		),
	},
	{
		path: "/finished-invoice",
		element: <FinishedInvoicePage />,
	},
	{
		path: "/invoices-list",
		element: (
			<>
				<Navbar activeItem="invoice-list" />
				<InvoicesListPage />
			</>
		),
	},
	{
		path: "*",
		element: <NotFoundPage />,
	},
];

export default routes.map((route, index) => ({
	id: index,
	...route,
}));
