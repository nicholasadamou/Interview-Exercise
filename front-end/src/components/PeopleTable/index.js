import React from 'react';

import { withRouter } from 'react-router-dom';

import styled from 'styled-components';

import NotificationContext from '../../contexts/NotificationContext';

import TableContext from '../../contexts/TableContext';

import { DataTable, DataTableSkeleton, Pagination } from 'carbon-components-react';

import headers from './data';

const { TableContainer, Table, TableHead, TableRow, TableBody, TableCell, TableHeader } = DataTable;

const Container = styled.div`
	min-width: 100%;
	max-width: 100%;
	margin-top: 0.75rem;
	#section-header {
		margin-bottom: 20px;
	}
	.tableContainer {
		overflow-x: unset !important;
		.bx--data-table--compact tbody tr {
			height: 2.5rem;
		}
		.tableHeader {
			padding: 0 20px !important;
			font-weight: 600;
			font-size: large;
			background-color: #e0e0e0;
			& > * {
				font-size: smaller !important;
				text-align: left;
			}
			.bx--table-header-label {
				background-color: #e0e0e0;
			}
		}
		.cell {
			padding-left: 15px !important;
			padding-bottom: 0 !important;
			font-size: small !important;
			text-align: left !important;
			background-color: #f4f4f4;
		}
		#error {
			margin-top: 10px;
			margin-left: 15px;
			font-size: 16px;
		}
	}
	.bx--select-input {
		padding: 0 !important;
		height: 1.2rem !important;
		width: 20px;
		font-size: 16px !important;
	}
	.bx--select__arrow {
		visibility: hidden;
	}
	.bx--pagination {
		padding: 0 !important;
		.bx--pagination__button {
			background-color: var(--admin-panel) !important;
		}
		.bx--pagination__button:disabled, .bx--pagination__button:hover:disabled, .bx--pagination__button:focus:disabled {
			cursor: not-allowed;
			color: #8d8d8d !important;
			background: #c6c6c6 !important;
			border-color: #c6c6c6 !important;
			-webkit-box-shadow: none;
			box-shadow: none;
			svg {
				fill: #8d8d8d !important;
			}
		}
	}
	.bx--pagination__text {
		font-size: 16px;
	}
	.bx--data-table td {
		background-color:  var(--admin-panel) !important;
	}
	.bx--data-table th {
		background-color: var(--admin-func-table) !important;
		height: 2.5rem!important;
		padding-top: 8px!important;
		padding-left: 15px!important;
		font-size: 16px;
		font-weight: bold;
	}
	.bx--table-header-label {
		background-color: var(--admin-func-table) !important;
	}
	.bx--data-table--compact tbody tr {
		height: 2.5rem;
	}
`;

const PaginationBar = styled.div`
	display: flex;
	flex-direction: row;

	.bx--pagination .bx--select-input:hover {
		background: #f4f4f4;
	}
`;

const PeopleTable = (props) => {
	const { showNotification } = React.useContext(NotificationContext);

	const {
		data,
		page,
		pageSize,
		pageNumber,
		isLoading,
		handleChangeTable,
		getPeople
	} = React.useContext(TableContext);

	const { itemsAvailable } = page;

	const pageSizes = [5, 10, 20, 50];

	React.useEffect(() => {
		getPeople(showNotification);
	}, []);

	return (
		<>
				{isLoading ? (
					<DataTableSkeleton
						headers={headers}
						showHeader={false}
						showToolbar={false}
					/>
				) : (
					<Container>
						<DataTable
							rows={data}
							headers={headers}
							isSortable={false}
							useZebraStyles={false}
							size={null}
							render={({ rows, headers }) => (
								<TableContainer className="tableContainer">
									<Table className="bx-data-table--compact">
										<TableHead>
											<TableRow>
												{headers.map(header => (
													<TableHeader key={header.key} className="tableHeader">
														{header.header}
													</TableHeader>
												))}
											</TableRow>
										</TableHead>
										{data.length === 0 ? (
											<TableBody>
												<TableRow>
													<div id="error">Could not find any people with a favorite color.</div>
												</TableRow>
											</TableBody>
										) : (
											<TableBody>
												{rows.map(row => (
													<TableRow key={row.id}>
														{row.cells.map(cell => (
															<TableCell
																key={cell.id}
																className="cell"
															>
																{cell.value}
															</TableCell>
														))}
													</TableRow>
												))}
											</TableBody>
										)}
									</Table>
								</TableContainer>
							)}
						/>
						<PaginationBar>
							<Pagination
								totalItems={itemsAvailable}
								pageSize={pageSize}
								pageSizes={pageSizes}
								page={pageNumber}
								onChange={handleChangeTable}
								style={{ padding: '0 1rem' }}
							/>
						</PaginationBar>
					</Container>
				)}
			</>
	)
}

export default withRouter(PeopleTable);
