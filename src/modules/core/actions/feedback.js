import {browserHistory} from 'react-router';
import request from '../../core/helpers/request';

export default {
	feedback: (feedback) => {
		request.post('feedback', {text: feedback}, null, {noAuth: true}).end((err, res) => {
			if(err) throw new Error(err);
		});
	}
};
