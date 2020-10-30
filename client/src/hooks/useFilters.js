import { useState } from "react";

const useFilters = (initValue) => {
	const [filter, setFilter] = useState(initValue);

	const handleFilter = (type) => {
		setFilter(type);
		// filterResults();
	};

	return [filter, handleFilter];
};

export default useFilters;