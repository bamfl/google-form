import requestDB from "../services/requestDB";
import createQuestionBlock from './createQuestionBlock';

const form = (url, token) => {
	const form = document.getElementById('form'),
				input = form.querySelector('#question-input'),
				submitBtn = form.querySelector('#submitBtn');

	form.addEventListener('input', () => {
		input.value.length >= 10 ? submitBtn.removeAttribute('disabled') : submitBtn.setAttribute('disabled', true);
	});

	form.addEventListener('submit', (event) => {
		event.preventDefault();

		const question = {
			text: input.value.trim(),
			date: new Date().toJSON()
		};

		requestDB(url + token, 'POST', question)
			.then(data => {
				question.id = data.name;
				return question;
			})
			.then((data) => createQuestionBlock(data))
			.catch(err => console.error(err))
			.finally(() => {
				input.value = '';
				input.className = '';
				submitBtn.setAttribute('disabled', true);
			});
	});
};

export default form;
