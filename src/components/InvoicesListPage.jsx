import { useState } from "react";
import TableHeader from "./InvoicesListPageComponents/TableHeader";
import TableRowItem from "./InvoicesListPageComponents/TableRowItem";
import invoices from "./InvoicesListPageComponents/invoicesData";
import SendEmailPopup from "./InvoicesListPageComponents/SendEmailPopup";

const InvoicesListPage = () => {
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

					<div className="mt-5">
						<p>გაფილტვრა თარიღის მიხედვით</p>
						<input
							name="start"
							type="date"
							className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Select date start"
						/>
					</div>
				</div>
			</div>
			<div className="mt-8 flex flex-col">
				<div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
						<div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
							<table className="min-w-full divide-y divide-gray-300">
								<thead className="bg-gray-50">
									<tr>
										<TableHeader content="კატეგორია" />
										<TableHeader content="პირადი / საიდ. ნომერი" />
										<TableHeader content="ტელ.ნომერი" />
										<TableHeader content="იმეილი" />
										<TableHeader content="მისამართი" />
										<TableHeader content="ლოიალ.ბარათის ნომერი" />
										<TableHeader content="ფილიალი" />
										<TableHeader content="გადახდის მეთოდი" />
									</tr>
								</thead>
								<tbody className="bg-white">
									{invoices.map((person, personIdx) => (
										<tr
											key={personIdx}
											className={
												personIdx % 2 === 0
													? undefined
													: "bg-gray-50"
											}>
											<TableRowItem
												content={person.chosenCategory}
											/>
											<TableRowItem content={person.idNumber} />
											<TableRowItem content={person.mobileNumber} />
											<TableRowItem content={person.email} />
											<TableRowItem content={person.address} />
											<TableRowItem content={person.numberForCard} />
											<TableRowItem content={person.branch} />
											<TableRowItem content={person.paymentMethod} />
											<button
												className="bg-gray-300 rounded mr-2"
												onClick={() => togglePopup()}>
												მეილზე გაგზავნა
											</button>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InvoicesListPage;
