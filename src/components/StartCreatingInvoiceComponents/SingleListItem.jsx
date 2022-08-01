const SimpleSingleListItem = ({ content, customClassName = '' }) => {
	return (
		<fieldset className={`${customClassName} space-y-5`}>
			<div className="relative flex items-start">
				<div className="flex items-center h-5">
					<input
						id="comments"
						aria-describedby="comments-description"
						name="comments"
						type="checkbox"
						className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
					/>
				</div>
				<div className="ml-3 text-sm">
					<label htmlFor="comments" className="font-medium text-gray-700">
						{content}
					</label>
				</div>
			</div>
		</fieldset>
	);
};

const SingleListItemForList = ({ category }) => {
	return (
		<div className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
			{category.listOfCategories.map((value, categoryIdx) => (
				<div key={categoryIdx} className="relative flex items-start py-4">
					<div className="min-w-0 flex-1 text-sm">
						<label className="font-medium text-gray-700 select-none">
							{value.name}
						</label>
					</div>
					<div className="ml-3 flex items-center h-5">
						<input
							type="checkbox"
							onClick={() => value.isChecked = !value.isChecked}
							className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
						/>
					</div>
				</div>
			))}
		</div>
	);
};

export { SingleListItemForList, SimpleSingleListItem };
