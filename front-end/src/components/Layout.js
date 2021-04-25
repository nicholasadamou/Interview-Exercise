import React from 'react';

import { Header, HeaderName } from 'carbon-components-react'

import styled from 'styled-components';

const Container = styled.div`
	display: grid;
	place-content: center;
	grid-template-columns: 0.8fr;

	margin-top: 5rem;
`;

const Layout = (props) => (
	<>
		<Header
			aria-label="Front-End"
		>
			<HeaderName
				href="#"
				prefix=""
			>
				Front-End
			</HeaderName>
		</Header>
		<Container>
			{props.children}
		</Container>
	</>
)

export default Layout;
