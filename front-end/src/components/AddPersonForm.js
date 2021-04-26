import React from 'react';

import {Form, FormGroup, TextInput} from 'carbon-components-react';

import PersonFormContext from '../contexts/PersonFormContext';

const AddPersonForm = (props) => {
	const [firstName, setFirstName] = React.useState("");
	const [color, setColor] = React.useState("");

	const { setPerson, setCanAddPerson } = React.useContext(PersonFormContext);

	const handleOnChange = (e) => {
		const ref = e.target;

		let value = ref.value;

		if (ref.value === "") {
			value = null;
		}

		if (ref.id === "first-name") {
			setFirstName(value);
		} else if (ref.id === "color") {
			setColor(value);
		}

		if (
			(firstName !== "" && firstName !== null) &&
			(color !== "" && color !== null)
		) {
			setCanAddPerson(true);
		} else {
			setCanAddPerson(false);
		}

		setPerson({
			firstName,
			color
		});
	}

	return (
		<Form>
			<FormGroup>
				<TextInput
					id="first-name"
					labelText="First Name"
					invalidText="Please enter the person's first name"
					invalid={firstName === null || firstName.length > 80}
					onChange={handleOnChange}
					onBlur={handleOnChange}
					style={{ marginBottom: 10 }}
				/>
				<TextInput
					id="color"
					labelText="Color"
					invalidText="Please enter the person's favorite color"
					invalid={color === null || color.length > 80}
					onChange={handleOnChange}
					onBlur={handleOnChange}
				/>
			</FormGroup>
		</Form>
	)
}

export default AddPersonForm;
