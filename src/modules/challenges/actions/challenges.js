export default {
	getChallenges() {
		return new Promise((resolve, reject) => {
			request.get('http://localhost:8000/api/challenges').end((err, res) => {
				if(err) {
					reject(err);
				}

				let challenges = (res.body || []).map((c) => {
					c.path = `/challenges/${c.slug}/`;
					return c;
				});

				resolve(challenges)
			});
		});
	}
}
