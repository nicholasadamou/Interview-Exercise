import React from 'react';

import API from '../../api';

import NotificationContext from '../../contexts/NotificationContext';
import TableContext from '../../contexts/TableContext';

import { Dropdown, DropdownSkeleton } from 'carbon-components-react';

const ColorDropdownMenu = (props) => {
	const [isLoading, setIsLoading] = React.useState(true);
	const [data, setData] = React.useState([]);

	const { showNotification } = React.useContext(NotificationContext);
	const { selectedColor, setSelectedColor, setCanFilter } = React.useContext(TableContext);

	React.useEffect(() => {
		API.getColorOptions().then(response => {
			let data = response;

			if (data === undefined) {
				showNotification({
					success: false,
					kind: 'error',
					subtitle: 'Unable to retrieve data.',
					timeout: 5000
				});
			} else {
				setData(data);
			}

			setIsLoading(false);
		})
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
				items={data}
				label="Color dropdown menu options"
				onChange={handleOnChange}
				selectedItem={selectedColor}
			/>
		)
	)
}

export default ColorDropdownMenu;
