import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import queryString from "query-string";
import { nanoid } from "nanoid";

import Button from './ProceedWithInvoiceCreationComponents/Button';
import SingleField from "./ProceedWithInvoiceCreationComponents/SingleField";

const ProcoeedWithInvoiceCreation = () => {
   const [isReadyForPrint, setIsReadyForPrint] = useState(false);
   const navigate = useNavigate();

	const parsed = queryString.parse(document.location.search);
	const {
		address,
		branch,
		chosenCategory,
		email,
		idNumber,
		mobileNumber,
		numberForCard,
		paymentMethod,
	} = parsed;

	useEffect(() => {
      if (isReadyForPrint) {
         window.print();
      }
      setIsReadyForPrint(false)
	}, [isReadyForPrint]);

	return (
		<div>
         <Button isReadyForPrint={isReadyForPrint} onClick={() => navigate('/choose-category', { replace: true })} content='უკან დაბრუნება' />
			<div className="bg-white shadow overflow-hidden sm:rounded-lg">
				<div className="px-4 py-5 sm:px-6">
					<div className="flex justify-between">
						<h3 className="text-lg leading-6 font-medium text-gray-900">
							ინვოისი
						</h3>
						<h3 className="text-gray-500">
							შევსებულია: "username"-ს მიერ
						</h3>
					</div>
					<p className="mt-1 max-w-2xl text-sm text-gray-500">
						ინდივიდუალური ნომერი: {nanoid(10)}
					</p>

					<p className="mt-1 max-w-2xl text-sm text-gray-500">
						შექმნის თარიღი:{" "}
						{new Date().toLocaleString("en-GB", {
							timeZone: "Asia/Tbilisi",
						})}
					</p>
				</div>
				<div className="border-t border-gray-200 px-4 py-5 sm:px-6">
					<dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
						<SingleField title="კატეგორია" content={chosenCategory} />
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
         <Button isReadyForPrint={isReadyForPrint} onClick={() => setIsReadyForPrint(true)} content='გადმოწერე PDF ფორმატში' />
		</div>
	);
};

export default ProcoeedWithInvoiceCreation;
