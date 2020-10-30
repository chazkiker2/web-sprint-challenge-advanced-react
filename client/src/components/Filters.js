import React from "react";
import useFilters from "../hooks/useFilters";

const initialFilter = {
	size: false,
	difficulty: false,
	watering: false,
	sunlight: false,
}

const Filters = props => {
	const [filter, handleFilter] = useFilters(initialFilter);

	return (
		<div>
			<a onClick={handleFilter}>Size</a>
			<a onClick={handleFilter}>Difficulty</a>
			<a onClick={handleFilter}>Watering Level</a>
			<a onClick={handleFilter}>Sunlight</a>
		</div>
	);
};

export default Filters;