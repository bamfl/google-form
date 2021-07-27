import createModal from "./createModal";
import authWithEmailAndPassword from "../services/auth";

const auth = () => {
	const openAuth = document.querySelector('.auth-btn');

	openAuth.addEventListener('click', () => {
		createModal();

		const modalAuth = document.getElementById('auth-form');
		const email = modalAuth.querySelector('#email');
		const password = modalAuth.querySelector('#password');
		const authBtnSubmit = modalAuth.querySelector('#auth-btn');		
		
		modalAuth.addEventListener('input', () => {
			email.value.length >= 6 && password.value.length >= 6 ? authBtnSubmit.removeAttribute('disabled') : authBtnSubmit.setAttribute('disabled', true);
		});
		
		modalAuth.addEventListener('submit', (event) => {
			event.preventDefault();

			authWithEmailAndPassword(email.value, password.value)
				.then(data => data.idToken)
				.then(token => console.log(token));
		});
	});
};

export default auth;
