const RoundedInputField = ({
	type,
	content,
	fieldName,
	required = true,
	formDataHandler,
	value = "",
	customClassForInput,
	placeholder,
}) => {
	return (
		<div>
			<label
				htmlFor={fieldName}
				className="ml-px pl-4 block text-sm font-medium text-gray-700">
				{content}
			</label>
			<div className="mt-1">
				<input
					type={type}
					required={required}
					className={`${
						customClassForInput ? customClassForInput : ""
					} shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 px-4 rounded-full`}
					placeholder={placeholder}
					value={value}
					onInput={e => formDataHandler(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default RoundedInputField;