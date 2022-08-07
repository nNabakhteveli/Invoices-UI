import Button from "../Common/Button";

import TableHeader from "../Common/Table/TableHeader";
import TableRowItem from "../Common/Table/TableRowItem";

const Table = ({ data, togglePopup }) => {
	return (
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
								{data.map((item, itemIdx) => (
									<tr
										key={itemIdx}
										className={
											itemIdx % 2 === 0 ? undefined : "bg-gray-50"
										}>
										<TableRowItem content={item.chosenCategory} />
										<TableRowItem content={item.idNumber} />
										<TableRowItem content={item.mobileNumber} />
										<TableRowItem content={item.email} />
										<TableRowItem content={item.address} />
										<TableRowItem content={item.numberForCard} />
										<TableRowItem content={item.branch} />
										<TableRowItem content={item.paymentMethod} />

										<Button
											content="მეილზე გაგზავნა"
											onClick={() => togglePopup()}
										/>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Table;
