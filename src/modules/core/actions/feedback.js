import {browserHistory} from 'react-router';

export default {
	feedback: ({feedback}) => {
		request.post('http://localhost:8000/api/feedback').send({
			feedback
		}).end((err, res) => {
			if(err) throw new Error(err);
		});
	}
};
