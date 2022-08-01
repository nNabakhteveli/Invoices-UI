import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";
import { nanoid } from "nanoid";

import Button from "./Button/Button";
import SingleField from "./ProceedWithInvoiceCreationComponents/SingleField";

const ProceedWithInvoiceCreation = () => {
	const [isReadyForPrint, setIsReadyForPrint] = useState(false);
	const navigate = useNavigate();
	const { state } = useLocation();

	const {
		address,
		branch,
		chosenGroup,
		email,
		idNumber,
		mobileNumber,
		numberForCard,
		paymentMethod,
		productsData,
	} = state;

	useEffect(() => {
		if (isReadyForPrint) {
			window.print();
		}
		setIsReadyForPrint(false);
	}, [isReadyForPrint]);

	const sumOfProducts = productsData.reduce((a, b) => a.price + b.price);

	return (
		<div className="px-4 sm:px-6 lg:px-8">
			<Button
				isReadyForPrint={isReadyForPrint}
				onClick={() => navigate("/choose-group", { replace: true })}
				content="უკან დაბრუნება"
			/>
			<div className="sm:flex sm:items-center">
				<div className="sm:flex-auto">
					<h1 className="text-xl font-semibold text-gray-900">ინვოისი</h1>

					<p className="mt-2 text-sm text-gray-700">
						ინვოისის ინდივიდუალური ნომერი: {nanoid(10)}
					</p>
					<p className="mt-2 text-sm text-gray-700">
						თარიღი:{" "}
						{new Date().toLocaleString("en-GB", {
							timeZone: "Asia/Tbilisi",
						})}
					</p>
				</div>
			</div>
			<div className="-mx-4 mt-8 flex flex-col sm:-mx-6 md:mx-0">
				<div>
					<div className="bg-white shadow overflow-hidden sm:rounded-lg">
						<div className="border-t border-gray-200 px-4 py-5 sm:px-6">
							<dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
								<SingleField title="კატეგორია" content={chosenGroup} />
								<SingleField
									title="პირადი / საიდენთიფიკაციო ნომერი"
									content={idNumber}
								/>
								<SingleField title="იმეილი" content={email} />
								<SingleField
									title="მობილურის ნომერი"
									content={mobileNumber}
								/>
								<SingleField title="მისამართი" content={address} />
								<SingleField
									title="ლოიალობის ბარათის შესავსები ნომერი"
									content={numberForCard}
								/>
								<SingleField title="ფილიალი" content={branch} />
								<SingleField
									title="გადახდის მეთოდი"
									content={paymentMethod}
								/>
							</dl>
						</div>
					</div>
				</div>

				<table className="min-w-full divide-y divide-gray-300">
					<thead>
						<tr>
							<th
								scope="col"
								className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0">
								პროდუქტის სახელწოდება
							</th>
							<th
								scope="col"
								className="py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6 md:pr-0">
								ფასი
							</th>
						</tr>
					</thead>
					<tbody>
						{productsData.map((project, id) => (
							<tr key={id} className="border-b border-gray-200">
								<td className="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
									<div className="font-medium text-gray-900">
										{project.name}
									</div>
								</td>
								<td className="py-4 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-6 md:pr-0">
									{project.price}
								</td>
							</tr>
						))}
					</tbody>
					<tfoot>
						<tr>
							<th
								scope="row"
								colSpan={3}
								className="hidden pt-6 text-right text-sm font-normal text-gray-500 sm:table-cell md:pl-0 font-bold">
								ჯამი:
							</th>
							<td className="pt-6 text-right text-sm text-gray-500 sm:pr-6 md:pr-0">
								{typeof sumOfProducts === 'object' ? sumOfProducts.price : sumOfProducts}
							</td>
						</tr>

						{chosenGroup === "დიპლომატი" ? (
							<tr>
								<th
									scope="row"
									colSpan={3}
									className="hidden pl-6 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell md:pl-0">
									-18% (დიპლომატი)
								</th>
								<th
									scope="row"
									className="pl-4 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden">
									Discount
								</th>
								<td className="pl-3 pr-4 pt-4 text-right text-sm text-gray-500 sm:pr-6 md:pr-0">
									$585.00
								</td>

								<tr>
									<th
										scope="row"
										colSpan={3}
										className="hidden pl-6 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell md:pl-0">
										Total
									</th>
									<th
										scope="row"
										className="pl-4 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden">
										Total
									</th>
									<td className="pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-6 md:pr-0">
										{typeof sumOfProducts === "object"
											? sumOfProducts.price
											: sumOfProducts}
									</td>
								</tr>
							</tr>
						) : null}
					</tfoot>
				</table>
			</div>
			<div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none"></div>
			<Button
				isReadyForPrint={isReadyForPrint}
				onClick={() => setIsReadyForPrint(true)}
				content="გადმოწერე PDF ფორმატში"
			/>
		</div>
	);
};

export default ProceedWithInvoiceCreation;
