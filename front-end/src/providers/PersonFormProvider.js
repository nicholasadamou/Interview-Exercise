import React from 'react';

import PersonFormContext from '../contexts/PersonFormContext';

const PersonFormProvider = (props) => {
	const [canAddPerson, setCanAddPerson] = React.useState(false);
	const [person, setPerson] = React.useState({});

	return (
		<PersonFormContext.Provider
			value={{
				canAddPerson,
				setCanAddPerson,
				person,
				setPerson
			}}
		>
			{props.children}
		</PersonFormContext.Provider>
	)
}

export default PersonFormProvider;
