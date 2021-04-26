import React from 'react';

import {Button} from 'carbon-components-react';

import ToggleContent from './Modal/ToggleContent';
import AddPersonModal from './AddPersonModal';

import PersonFormProvider from '../providers/PersonFormProvider';

const AddPersonButton = (props) => (
	<ToggleContent
		toggle={show => (
			<Button
				kind="primary"
				onClick={show}
			>
				Add Person
			</Button>
		)}
		content={hide => (
			<PersonFormProvider>
				<AddPersonModal hide={hide} />
			</PersonFormProvider>
		)}
	/>
)

export default AddPersonButton;
