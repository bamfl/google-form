const authWithEmailAndPassword = async (email, password) => {
	const apiKey = "AIzaSyBRlhWhaJdchO5qmrX2XZbzM3DW5dz0Yt4";

	const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
		body: JSON.stringify({
			email,
			password,
			returnSecureToken: true
		})
	});

	if (!response.ok) {
		throw new Error('Ошибка, неправильный email или пароль');
	}
	
	return await response.json();
};

export default authWithEmailAndPassword;
