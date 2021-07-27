const requestDB = async (url, method, body = null) => {
	let response;

	if (method === 'POST') {
		response = await fetch(url, {
			method: method,
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify(body)
		});
	} else if (method === 'GET') {
		response = await fetch(url);
	}

	return await response.json();
};

export default requestDB;
