import React from 'react';

import {Button} from 'carbon-components-react';

import TableContext from '../contexts/TableContext';

const FilterButton = (props) => {
	const { canFilter, filterByColor } = React.useContext(TableContext);

	return (
		<Button
			kind="primary"
			disabled={!canFilter}
			onClick={filterByColor}
		>
			Filter
		</Button>
	)
}

export default FilterButton;
