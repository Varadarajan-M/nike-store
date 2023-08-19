const EMAIL_REGEX: RegExp =
	/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export const getFields = (mode: 'login' | 'register') => {
	const fields = [
		{
			label: 'Email',
			id: 'email',
			type: 'email',
			validations: {
				required: 'This field is required',
				minLength: {
					value: 7,
					message: 'Email should be minimum 7 characters long',
				},
				pattern: {
					value: EMAIL_REGEX,
					message: 'Invalid Email',
				},
			},
		},
		{
			label: 'Password',
			id: 'password',
			type: 'password',
			validations: {
				required: 'This field is required',
				minLength: {
					value: 8,
					message: 'Password should be minimum 8 characters long',
				},
			},
		},
	];

	if (mode === 'register') {
		fields.unshift({
			label: 'Username',
			id: 'username',
			type: 'text',
			validations: {
				required: 'This field is required',
				minLength: {
					value: 5,
					message: 'Username should be minimum 5 characters',
				},
			},
		});
	}

	return fields;
};
