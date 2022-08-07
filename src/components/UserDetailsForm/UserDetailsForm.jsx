import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import queryString from "query-string";

import { SquareInputField } from "components/Common";
import NextStepOrSaveButton from "./NextStepOrSaveButton";
import SecondStepOfCreatingInvoice from "./SecondStepOfCreatingInvoice";

const UserDetailsForm = ({
	productsData,
	instalments,
	vouchers,
	websites,
	chosenGroupFromFirstStep,
}) => {
	const [chosenGroup, setChosenGroup] = useState("");
	const [proceed, setProceed] = useState(false);
	const [idNumber, setIdNumber] = useState("");
	const [address, setAddress] = useState("");
	const [mobileNumber, setMobileNumber] = useState("");
	const [email, setEmail] = useState("");
	const [numberToFillCard, setNumberToFillCard] = useState("");
	const [branch, setBranch] = useState("");
	const [paymentMethod, setPaymentMethod] = useState("");
	const navigate = useNavigate();

	const dataToPassNextComponent = {
		address,
		branch,
		chosenGroup,
		email,
		idNumber,
		mobileNumber,
		numberForCard: numberToFillCard,
		paymentMethod,
		productsData,
		instalments,
		vouchers,
		websites,
	};

	useEffect(() => {
		const parsedQuery = queryString.parse(document.location.search);
		console.log(parsedQuery);
		setChosenGroup(parsedQuery.group);
	}, []);

	const formDataHandler = (action, data) => {
		switch (action) {
			case "id-number":
				return setIdNumber(data);

			case "address":
				return setAddress(data);

			case "phone-number":
				return setMobileNumber(data);

			case "email":
				return setEmail(data);

			case "number-for-card":
				return setNumberToFillCard(data);

			case "branch":
				return setBranch(data);

			case "payment-method":
				return setPaymentMethod(data);

			default:
				break;
		}
	};

	const referenceToFormDataHandler = formDataHandler;

	const nextStepHandler = e => {
		e.preventDefault();
		setProceed(true);
	};

	const urlToProceed = `/finished-invoice`;

	return (
		<div className="mt-10 sm:mt-0 flex h-screen items-center">
			<div className="md:grid md:gap-6">
				<h1 className="font-semibold">ინფორმაცია მომხმარებელზე</h1>
				<form>
					<div className="shadow overflow-hidden sm:rounded-md">
						<div className="px-4 py-5 bg-white sm:p-6">
							<div className="grid grid-cols-6 gap-6">
								<SquareInputField
									type="text"
									content="პირადი / საიდენთიფიკაციო ნომერი"
									fieldName="id-number"
									formDataHandler={referenceToFormDataHandler}
								/>
								<SquareInputField
									type="text"
									content="მისამართი"
									fieldName="address"
									formDataHandler={referenceToFormDataHandler}
								/>
								<SquareInputField
									type="number"
									content="ტელეფონის ნომერი"
									fieldName="phone-number"
									formDataHandler={referenceToFormDataHandler}
								/>
								<SquareInputField
									type="email"
									content="მეილი"
									fieldName="email"
									formDataHandler={referenceToFormDataHandler}
								/>
								<SquareInputField
									type="text"
									content="ლოიალობის ბარათის შესავსები ნომერი"
									fieldName="number-for-card"
									formDataHandler={referenceToFormDataHandler}
								/>
							</div>
							{proceed ? (
								<SecondStepOfCreatingInvoice
									formDataHandler={referenceToFormDataHandler}
								/>
							) : null}
						</div>

						<div className="px-4 py-3 bg-gray-50 text-right sm:px-6"></div>
						{!proceed ? (
							<NextStepOrSaveButton
								onClick={e => nextStepHandler(e)}
								content="შემდეგი"
								customClassName="ml-5 mb-5"
							/>
						) : (
							<NextStepOrSaveButton
								customClassName="ml-5 mb-5"
								onClick={() =>
									navigate(urlToProceed, {
										state: dataToPassNextComponent,
									})
								}
								content="შენახვა"
							/>
						)}
					</div>
				</form>
			</div>
		</div>
	);
};

export default UserDetailsForm;
