const SelectField = ({ formDataHandler, content, fieldName, optionsList, placeholder }) => {
	return (
		<div className="mt-3">
			<label
				htmlFor={fieldName}
				className="block text-sm font-medium text-gray-700">
				{content}
			</label>
			<select
				name={fieldName}
				autoComplete={fieldName}
				required
				onInput={e => formDataHandler(fieldName, e.target.value)}
				className="mt-1 block w-2/4 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option disabled selected>{placeholder}</option>
				{optionsList.map(option => (
					<option key={option} value={option}>{option}</option>
				))}
			</select>
		</div>
	);
};

export default SelectField;