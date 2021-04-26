import React from 'react';

import { ModalHeader, ModalBody, ModalFooter, Button } from 'carbon-components-react';

import Modal from './Modal';

import AddPersonForm from './AddPersonForm';

import PersonFormContext from '../contexts/PersonFormContext';
import TableContext from '../contexts/TableContext';

const AddPersonModal = (props) => {
	const { person, canAddPerson } = React.useContext(PersonFormContext);
	const { addPerson } = React.useContext(TableContext);

	const handleOnSubmit = () => {
		const { hide } = props;

		if (person.firstName !== null && person.color !== null) {
			addPerson(person);

			hide();
		}
	}

	return (
		<Modal
			hide={props.hide}
		>
			<ModalHeader title="Add Person" />
			<ModalBody hasForm>
				<AddPersonForm />
			</ModalBody>
			<ModalFooter>
					<Button
						kind="secondary"
						onClick={props.hide}
					>
						Cancel
					</Button>
					<Button
						kind="primary"
						disabled={!canAddPerson}
						onClick={handleOnSubmit}
					>
						Add Person
					</Button>
				</ModalFooter>
		</Modal>
	)
}

export default AddPersonModal;
