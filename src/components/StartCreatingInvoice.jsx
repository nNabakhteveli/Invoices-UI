import { useState, useEffect } from "react";
import { SimpleSingleListItem } from "./StartCreatingInvoiceComponents/SingleListItem";
import { RoundedInputField } from "./Input/InputField";
import { useNavigate } from "react-router-dom";
import Button from "./Button/Button";
import TableRowItem from "./Table/TableRowItem";
import TableHeader from "./Table/TableHeader";

import ListRow from "./StartCreatingInvoiceComponents/ListRow";

const instalments = {
	headerName: "განვადებები",
	listOfCategories: [
		{
			name: "ადგილზე განვადება",
			isChecked: false,
		},
		{
			name: "ონლაინ განვადება",
			isChecked: false,
		},
		{
			name: "კრედო განვადება",
			isChecked: false,
		},
		{
			name: "კრისტალი",
			isChecked: false,
		},
		{
			name: "ბოგ ქიუარ განვადება",
			isChecked: false,
		},
	],
};

const vouchers = {
	headerName: "ქულები და ვაუჩერები",
	listOfCategories: [
		{
			name: "+ქულები",
			isChecked: false,
		},
		{
			name: "mr ქულები",
			isChecked: false,
		},
		{
			name: "tbc ერთგული",
			isChecked: false,
		},
		{
			name: "სასაჩუქრე ვაუჩერები",
			isChecked: false,
		},
	],
};

const websites = {
	headerName: "ონლაინ გარე საიტები",
	listOfCategories: [
		{
			name: "ვოლტი",
			isChecked: false,
		},
		{
			name: "გლოვო",
			isChecked: false,
		},
		{
			name: "მაიმარკეტი",
			isChecked: false,
		},
		{
			name: "ვენდუ",
			isChecked: false,
		},
		{
			name: "ონოფი",
			isChecked: false,
		},
		{
			name: "ექსტრა",
			isChecked: false,
		},
	],
};

const categoriesArr = [instalments, vouchers, websites];

const StartCreatingInvoice = () => {
	const [addedItems, setAddedItems] = useState([]);
	const [nameForCertainItem, setNameForCertainItem] = useState("");
	const [priceForCertainItem, setPriceForCertainItem] = useState("");
	const [oneTimeSaleForCertainItem, setOneTimeSaleForCertainItem] =
		useState("");
	const [searchProductWithCode, setSearchProductWithCode] = useState("");
	const navigate = useNavigate();

	const setAddItemsHandler = () => {
		setAddedItems(
			addedItems.concat({
				name: nameForCertainItem,
				price: priceForCertainItem,
				oneTimeSale: oneTimeSaleForCertainItem,
			})
		);

		setNameForCertainItem("");
		setPriceForCertainItem("");
		setOneTimeSaleForCertainItem("");
		setSearchProductWithCode("");
	};

	const deleteItemFromList = name => {
		const instanceOfAddedItems = [...addedItems];
		const indexOfItemToDelete = addedItems.indexOf(name);

		instanceOfAddedItems.splice(indexOfItemToDelete, 1);
		setAddedItems(instanceOfAddedItems);
	};

	const continueOnNextPage = () => {
		const largestArray = Math.max(
			instalments.listOfCategories.length,
			vouchers.listOfCategories.length,
			websites.listOfCategories.length
		);
		const installsTemp = [],
			vouchersTemp = [],
			websitesTemp = [];

		for (let i = 0; i < largestArray; i++) {
			if (instalments.listOfCategories[i] && instalments.listOfCategories[i].isChecked) {
				installsTemp.push(instalments.listOfCategories[i].name);
			}

			if (vouchers.listOfCategories[i] && vouchers.listOfCategories[i].isChecked) {
				vouchersTemp.push(vouchers.listOfCategories[i].name);
			}

			if (websites.listOfCategories[i] && websites.listOfCategories[i].isChecked) {
				websitesTemp.push(websites.listOfCategories[i].name);
			}
		}
		return navigate(`/add-user-details-to-invoice?a=${addedItems}`, { replace: true })
	};

	return (
		<div className="h-3/4">
			<div className="mt-10 flex-row">
				<div className="flex justify-around">
					{categoriesArr.map((category, index) => (
						<ListRow category={category} key={index} />
					))}
				</div>
			</div>

			<div className="px-4 sm:px-6 lg:px-8">
				<div className="sm:flex sm:items-center">
					<div className="sm:flex-auto">
						<h1 className="text-xl font-semibold text-gray-900">
							დაამატე ნივთები
						</h1>
					</div>
				</div>

				<SimpleSingleListItem
					content="წინასწარი შეკვეთა"
					customClassName="mt-5"
				/>
				<div className="mt-8 flex flex-col">
					<div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
							<div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
								<table className="min-w-full divide-y divide-gray-300">
									<thead className="bg-gray-50">
										<tr>
											<TableHeader content="დასახელება" />
											<TableHeader content="ფასი" />
											<TableHeader content="ერთჯერადი ფასდაკლება" />
											<TableHeader content="" />
										</tr>
									</thead>
									<tbody className="divide-y divide-gray-200 bg-white">
										{addedItems.map((item, index) => (
											<tr key={index}>
												<TableRowItem content={item.name} />
												<TableRowItem content={item.price} />
												<TableRowItem content={item.oneTimeSale} />
												<td
													className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
													onClick={() =>
														deleteItemFromList(item.name)
													}>
													<a className="text-indigo-600 hover:text-indigo-900">
														წაშლა
													</a>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<div className="flex mt-10 sm:mt-0 sm:ml-16 sm:flex-none justify-start">
						<form className="space-y-8 divide-y divide-gray-200 bg-gray-200 p-5 rounded mt-5 px-5">
							<div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
								<div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
									<div>
										<h3 className="text-lg leading-6 font-medium text-gray-900">
											პროდუქტის დამატება
										</h3>
									</div>
									<div className="space-y-6 sm:space-y-5">
										<RoundedInputField
											placeholder="დასახელება"
											formDataHandler={inputedName =>
												setNameForCertainItem(inputedName)
											}
											type="text"
											value={nameForCertainItem}
											required={true}
										/>
										<RoundedInputField
											placeholder="ფასი"
											formDataHandler={inputedPrice =>
												setPriceForCertainItem(inputedPrice)
											}
											value={priceForCertainItem}
											type="number"
											required={true}
										/>
										<RoundedInputField
											placeholder="ერთჯერადი ფასდაკლება"
											formDataHandler={inputedPrice =>
												setOneTimeSaleForCertainItem(inputedPrice)
											}
											value={oneTimeSaleForCertainItem}
											type="number"
											required={true}
										/>
										<RoundedInputField
											placeholder="პროდუქტის კოდით მოძებნა"
											formDataHandler={inputedPrice =>
												setSearchProductWithCode(inputedPrice)
											}
											value={searchProductWithCode}
											type="number"
											required={true}
										/>
									</div>
								</div>
							</div>

							<div className="pt-5">
								<div className="flex justify-end">
									<button
										type="submit"
										onClick={() => setAddItemsHandler()}
										className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
										დამატება
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			<Button
				content="შემდეგი"
				onClick={() => continueOnNextPage()}
				customClassName="float-right mr-6"
			/>
		</div>
	);
};

export default StartCreatingInvoice;
