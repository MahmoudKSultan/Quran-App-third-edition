const paginate = (items, page, itemsPerPage) => {
	const firstIndex = (page - 1) * itemsPerPage;
	const lastIndex = firstIndex + itemsPerPage;
	const newItems = items.slice(firstIndex, lastIndex);
	return newItems;
};

export default paginate;
