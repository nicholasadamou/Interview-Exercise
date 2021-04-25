import React from 'react';

import TableContext from '../contexts/TableContext';

import {Button} from 'carbon-components-react';

const ClearFilterButton = (props) => {
	const { canFilter, setCanFilter, setSelectedColor, getPeople } = React.useContext(TableContext);

	const handleOnClick = () => {
		getPeople();
		setCanFilter(false);
		setSelectedColor({});
	}

	return (
		<Button
			kind="primary"
			disabled={!canFilter}
			onClick={handleOnClick}
			style={{ marginLeft: 10 }}
		>
			Clear Filter
		</Button>
	)
}

export default ClearFilterButton;
