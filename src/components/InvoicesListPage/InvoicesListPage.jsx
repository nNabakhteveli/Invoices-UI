import { useState } from "react";

import Table from "./Table";
import invoices from "./invoicesData";
import SendEmailPopup from "./SendEmailPopup";

const InvoicesList = () => {
	const [showPopup, setShowPopup] = useState(false);

	const togglePopup = () => {
		setShowPopup(true);
	};

	return (
		<div className="px-4 sm:px-6 lg:px-8">
			{showPopup ? <SendEmailPopup changePopupState={setShowPopup} /> : null}
			<div className="sm:flex sm:items-center">
				<div className="sm:flex-auto">
					<h1 className="text-xl font-semibold text-gray-900 mt-4">
						არსებული ინვოისები
					</h1>

					<div className="relative w-1/4">
						<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
							<svg
								aria-hidden="true"
								className="w-5 h-5 text-gray-500 dark:text-gray-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path
									fill-rule="evenodd"
									d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
									clip-rule="evenodd"></path>
							</svg>
						</div>
						<input
							datepicker={true}
							type="text"
							className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Select date"
						/>
					</div>
				</div>
			</div>
			<Table data={invoices} togglePopup={togglePopup} />
		</div>
	);
};

export default InvoicesList;
