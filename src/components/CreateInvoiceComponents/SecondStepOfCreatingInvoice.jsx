import SelectField from "./SelectField";

const SecondStepOfCreatingInvoice = ({ formDataHandler }) => {
	return (
		<div className="col-span-6 sm:col-span-3 mt-10">
			<SelectField
				formDataHandler={formDataHandler}
				content="ფილიალი"
				fieldName="branch"
				placeholder="აირჩიე ფილიალი"
				optionsList={[
					"ფილიალი 1",
					"ფილიალი 2",
					"ფილიალი 3",
					"ფილიალი 4",
					"ფილიალი 5",
				]}
			/>

			<SelectField
				formDataHandler={formDataHandler}
				content="გადახდის მეთოდი"
				fieldName="payment-method"
				placeholder="აირჩიე გადახდის მეთოდი"
				optionsList={[
               "ბარათი",
               "ქეში",
               "კონსიგნაცია"
            ]}
			/>
		</div>
	);
};

export default SecondStepOfCreatingInvoice;