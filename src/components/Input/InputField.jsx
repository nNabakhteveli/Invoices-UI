const RoundedInputField = ({
	type,
	content,
	fieldName,
	required = true,
	formDataHandler,
	value = '',
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
					className={`${customClassForInput ? customClassForInput : ''} shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 px-4 rounded-full`}
					placeholder={placeholder}
					value={value}
					onInput={e => formDataHandler(e.target.value)}
				/>
			</div>
		</div>
	);
}

const SquareInputField = ({
	type,
	content,
	fieldName,
	required = true,
	formDataHandler,
	placeholder,
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
				placeholder={placeholder ?? ""}
				className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
				onInput={e => formDataHandler(fieldName, e.target.value)}
			/>
		</div>
	);
};

export { SquareInputField, RoundedInputField };