import React from 'react';

import TableContext from '../../contexts/TableContext';

import { Dropdown, DropdownSkeleton } from 'carbon-components-react';

const ColorDropdownMenu = (props) => {
	const {
		isLoading,
		selectedColor,
		setSelectedColor,
		setCanFilter,
		colorOptions,
		getColorOptions
	} = React.useContext(TableContext);

	React.useEffect(() => {
		getColorOptions();
	}, [])

	const handleOnChange = ({ selectedItem }) => {
		setSelectedColor(selectedItem);
		setCanFilter(true);
	}

	return (
		isLoading ? (
			<div style={{ width: 300, marginRight: 10 }}>
				<DropdownSkeleton />
			</div>
		) : (
			<Dropdown
				items={colorOptions}
				label="Color dropdown menu options"
				titleText="Select a color:"
				onChange={handleOnChange}
				selectedItem={selectedColor}
			/>
		)
	)
}

export default ColorDropdownMenu;
