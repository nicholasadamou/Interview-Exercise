import React from 'react';

import { withRouter } from 'react-router-dom';

import styled from 'styled-components';

import Layout from '../components/Layout';

import TableProvider from '../providers/TableProvider';

import PeopleTable from '../components/PeopleTable';
import ColorDropdownMenu from '../components/ColorDropdownMenu';
import FilterButton from '../components/FilterButton';
import ClearFilterButton from '../components/ClearFilterButton';

const FilterContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;

	margin-bottom: 16px;

	.bx--dropdown__wrapper {
		width: 25%;
		margin-right: 25px;
	}
`;

const IndexPage = () => (
	<Layout>
		<TableProvider>
			<FilterContainer>
				<ColorDropdownMenu />
				<FilterButton />
				<ClearFilterButton />
			</FilterContainer>
			<PeopleTable />
		</TableProvider>
	</Layout>
);

export default withRouter(IndexPage);
