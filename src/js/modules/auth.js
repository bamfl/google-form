import createModal from "./createModal";
import authWithEmailAndPassword from "../services/auth";
import loadData from './loadData';
import form from "./form";

const url = `https://form-f194c-default-rtdb.europe-west1.firebasedatabase.app/questions.json?auth=`;

const auth = () => {
	const openAuth = document.querySelector('.auth-btn');

	openAuth.addEventListener('click', () => {
		createModal();

		const modalOverlay = document.querySelector('#mui-overlay');
		const modalAuth = document.getElementById('auth-form');
		const email = modalAuth.querySelector('#email');
		const password = modalAuth.querySelector('#password');
		const authBtnSubmit = modalAuth.querySelector('#auth-btn');		
		const noAuthBlock = document.querySelector('#no-auth');		
		
		modalAuth.addEventListener('input', () => {
			email.value.length >= 6 && password.value.length >= 6 ? authBtnSubmit.removeAttribute('disabled') : authBtnSubmit.setAttribute('disabled', true);
		});
		
		modalAuth.addEventListener('submit', (event) => {
			event.preventDefault();

			authWithEmailAndPassword(email.value, password.value)
				.then(data => data.idToken)
				.then(token => {
					loadData(url, token);
					return token;
				})
				.then(token => form(url, token))
				.then(() => {
					noAuthBlock.remove();
					modalAuth.innerHTML = '<h2>Успешный вход</h2>';
				})
				.catch(() => modalAuth.innerHTML = '<h2>Ошибка, неправильный email или пароль</h2>')
				.finally(() => {
					setTimeout(() => modalOverlay.remove(), 2000);
				});
		});
	});
};

export default auth;
