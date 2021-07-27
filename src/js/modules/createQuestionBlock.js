const createQuestionBlock = ({ id, text, date }) => {
  const content = document.querySelector('#content');
  const container = document.querySelector('#container');
  const noQuestionsBlock = document.querySelector('.questions-no');

	content.style.display = 'block';
	
  const questionBlock = document.createElement('div');
  questionBlock.classList.add('question-block');

  if (noQuestionsBlock) {
    noQuestionsBlock.remove();
  }

  questionBlock.innerHTML = `<div class="mui--text-headline">Вопрос id ${id}</div>
	<div class="mui--text-black-54">${new Date(date).toLocaleDateString()} ${new Date(date).toLocaleTimeString()}</div>
	<div>${text}</div><div class="mui-divider"></div><br>
	`;

  container.append(questionBlock);
};

export default createQuestionBlock;
