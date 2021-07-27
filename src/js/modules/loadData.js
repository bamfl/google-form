import requestDB from "../services/requestDB";
import createQuestionBlock from './createQuestionBlock';

const loadData = (url) => {
	requestDB(url, 'GET')
		.then(data => {
			if (data) {
				Object.keys(data).forEach(key => {
					data[key].id = key;
					createQuestionBlock(data[key]);
				});
			}
		});
};

export default loadData;
