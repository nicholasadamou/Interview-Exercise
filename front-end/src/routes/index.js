import React from 'react';

import { withRouter } from 'react-router-dom';

import styled from 'styled-components';

import Layout from '../components/Layout';

import TableProvider from '../providers/TableProvider';

import PeopleTable from '../components/PeopleTable';
import ColorDropdownMenu from '../components/ColorDropdownMenu';
import FilterButton from '../components/FilterButton';
import ClearFilterButton from '../components/ClearFilterButton';
import AddPersonButton from '../components/AddPersonButton';

const ActionBarContainer = styled.div`
	display: grid;
	grid-template-columns: 3fr 0.5fr;
`;

const FilterContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	justify-content: flex-start;

	.bx--dropdown__wrapper {
		width: 25%;
		margin-right: 25px;
	}
`;

const IndexPage = () => (
	<Layout>
		<TableProvider>
			<ActionBarContainer>
				<FilterContainer>
					<ColorDropdownMenu />
					<FilterButton />
					<ClearFilterButton />
				</FilterContainer>
				<AddPersonButton />
			</ActionBarContainer>
			<PeopleTable />
		</TableProvider>
	</Layout>
);

export default withRouter(IndexPage);
