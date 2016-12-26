import superagent from 'superagent';

const API_URL = process.env.API_URL || 'http://localhost:8000/api/';

export default {
	del: function(path, fn) {
		return (
			superagent
				.del(API_URL + path, fn)
				.set('Authorization', 'JWT ' + localStorage.token)
		);
	},

	get: function(path, data, fn) {
		return (
			superagent
				.get(API_URL + path, data, fn)
				.set('Authorization', 'JWT ' + localStorage.token)
		);
	},

	patch: function(path, data, fn) {
		return (
			superagent
				.patch(API_URL + path, data, fn)
				.set('Authorization', 'JWT ' + localStorage.token)
		);
	},

	post: function(path, data, fn) {
		return (
			superagent
				.post(API_URL + path, data, fn)
				.set('Authorization', 'JWT ' + localStorage.token)
		);
	},

	put: function(path, data, fn) {
		return (
			superagent
				.put(API_URL + path, data, fn)
				.set('Authorization', 'JWT ' + localStorage.token)
		);
	}
};
