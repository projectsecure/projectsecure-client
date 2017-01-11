import superagent from 'superagent';

const API_URL = process.env.API_URL || 'http://172.18.0.3:8000/api/';

const getAuthHeader = ({noAuth}) => {
	return noAuth ? {} : {'Authorization': 'JWT ' + localStorage.token};
};

export default {
	del: function(path, fn, options = {}) {
		return (
			superagent
				.del(API_URL + path, fn)
				.set(getAuthHeader(options))
		);
	},

	get: function(path, data, fn, options = {}) {
		return (
			superagent
				.get(API_URL + path, data, fn)
				.set(getAuthHeader(options))
		);
	},

	patch: function(path, data, fn, options = {}) {
		return (
			superagent
				.patch(API_URL + path, data, fn)
				.set(getAuthHeader(options))
		);
	},

	post: function(path, data, fn, options = {}) {
		return (
			superagent
				.post(API_URL + path, data, fn)
				.set(getAuthHeader(options))
		);
	},

	put: function(path, data, fn, options = {}) {
		return (
			superagent
				.put(API_URL + path, data, fn)
				.set(getAuthHeader(options))
		);
	}
};
