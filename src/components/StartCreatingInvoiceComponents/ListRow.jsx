import { SingleListItemForList } from "./SingleListItem";

const List = ({ category }) => {
	if (typeof category === "object") {
		return (
			<fieldset>
				<legend className="text-lg font-medium text-gray-900">
					{category.headerName}
				</legend>
				
				<SingleListItemForList category={category} />
			</fieldset>
		);
	}
	return (
		<fieldset>
			<legend className="text-lg font-medium text-gray-900">
				{category.headerName}
			</legend>
			<SingleListItemForList category={category} />
		</fieldset>
	);
};

export default List;
