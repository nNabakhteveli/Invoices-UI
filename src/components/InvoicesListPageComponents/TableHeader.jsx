const TableHeader = ({ content }) => {
	return (
		<th
			scope="col"
			className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
			{content}
		</th>
	);
};


export default TableHeader;