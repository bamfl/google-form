import '../scss/style.scss';
import form from './modules/form';
import loadData from './modules/loadData';
import auth from './modules/auth';

const url = `https://form-f194c-default-rtdb.europe-west1.firebasedatabase.app/questions.json`;

window.addEventListener('DOMContentLoaded', () => {
	auth();
	loadData(url);
	form(url);
});
