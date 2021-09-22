const search = (items, searchValue, field) => {
	return items.filter((item) => {
		if (searchValue === "") return item;
		else if (item[field].includes(searchValue)) return item;
	});
};

export default search;
