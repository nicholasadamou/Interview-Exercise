import React from 'react';

import TableContext from '../contexts/TableContext';

import API from '../api';

const TableProvider = (props) => {
	// table properties
	const [data, setData] = React.useState({});
	const [page, setPage] = React.useState({});
	const [pageSize, setPageSize] = React.useState(10);
	let [pageNumber, setPageNumber] = React.useState(1);
	const [isLoading, setIsLoading] = React.useState(true);

	// dropdown/button properties
	const [selectedColor, setSelectedColor] = React.useState({});
	const [canFilter, setCanFilter] = React.useState(false);

	const calculatePagination = data => {
		const itemsAvailable = data.length;
		let pagesAvailable = Math.floor((itemsAvailable + pageSize - 1) / pageSize);

		if (pagesAvailable > pageSize * pagesAvailable) {
			setPage({
				...page,
				pagesAvailable: (pagesAvailable += 1),
			})
		}

		let subset = getSubSetOf(data, 1, pageSize);

		setData(subset);

		return {
			itemsAvailable,
			pagesAvailable,
			subset,
			data
		};
	}

	const getSubSetOf = (results, pageNumber, pageSize) => {
		let subset = [];

		const start = pageNumber * pageSize - (pageSize - 1) - 1;
		const end = Math.min(start + pageSize - 1, results.length) + 1;

		results.slice(start, end).map(item => subset.push(item));

		return subset;
	}

	const handleChangeTable = e => {
		let subset = getSubSetOf(page.data, e.page, e.pageSize);

		if (e.pageSize) {
			setPageSize(e.pageSize);
			setPageNumber(e.pageNumber);
		} else {
			setPageNumber(pageNumber += 1);
		}

		setData(subset);
	}

	const filterByColor = (showNotification) => {
		setIsLoading(true);

		API.getPeopleByColor(selectedColor).then(response => {
			const data = response;

			if (data === undefined) {
				showNotification({
					success: false,
					kind: 'error',
					subtitle: 'Unable to retrieve data.',
					timeout: 5000
				});
			} else {
				setPage(calculatePagination(data));
			}

			setIsLoading(false);
		});
	}

	const getPeople = (showNotification) => {
		setIsLoading(true);

		API.getPeople().then(response => {
			const data = response;

			if (data === undefined) {
				showNotification({
					success: false,
					kind: 'error',
					subtitle: 'Unable to retrieve data.',
					timeout: 5000
				});
			} else {
				setPage(calculatePagination(data));
			}

			setIsLoading(false);
		});
	}

	return (
		<TableContext.Provider
			value={{
				data,
				setData,
				page,
				pageSize,
				setPageSize,
				pageNumber,
				setPageNumber,
				setPage,
				isLoading,
				setIsLoading,
				calculatePagination,
				getSubSetOf,
				handleChangeTable,
				selectedColor,
				setSelectedColor,
				canFilter,
				setCanFilter,
				filterByColor,
				getPeople
			}}
		>
			{props.children}
		</TableContext.Provider>
	)
}

export default TableProvider;
