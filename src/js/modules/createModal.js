const createModal = () => {
  const modalEl = document.createElement('div');

  modalEl.classList.add('modal-auth');
	modalEl.innerHTML = 
	`<h1>Авторизируйтесь</h1>
	<form class="mui-form" id="auth-form">
		<div class="mui-textfield mui-textfield--float-label">
			<input type="text" id="email" required">
			<label for="email">Email</label>
		</div>
		<div class="mui-textfield mui-textfield--float-label">
			<input type="text" id="password" required">
			<label for="password">Пароль</label>
		</div>
		<button type="submit" id="auth-btn" class="mui-btn mui-btn--raised mui-btn--primary" disabled>Войти</button>
	</form>
	`;

  mui.overlay('on', modalEl);
};

export default createModal;
