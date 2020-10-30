import React from "react";
import styled from "styled-components";

import useFilters from "../hooks/useFilters";

const StyledFilterContainer = styled.div`
	background-color: white;
`;

const initialFilter = {
	size: false,
	difficulty: false,
	watering: false,
	sunlight: false,
}

const Filters = props => {
	const [filter, handleFilter] = useFilters(initialFilter);

	return (
		<StyledFilterContainer>
			<a onClick={handleFilter}>Size</a>
			<a onClick={handleFilter}>Difficulty</a>
			<a onClick={handleFilter}>Watering Level</a>
			<a onClick={handleFilter}>Sunlight</a>
		</StyledFilterContainer>
	);
};

export default Filters;