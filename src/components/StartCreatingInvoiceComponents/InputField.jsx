const InputField = ({
	type,
	content,
	fieldName,
	required = true,
	formDataHandler,
	placeholder
}) => {
	return (
		<div className="col-span-6 sm:col-span-3">
			<label
				htmlFor={fieldName}
				className="block text-sm font-medium text-gray-700">
				{content}
			</label>
			<input
				type={type}
				id={fieldName}
				required={required}
				placeholder={placeholder ?? ''}
				className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
				onInput={e => formDataHandler(fieldName, e.target.value)}
			/>
		</div>
	);
};

export default InputField;