export default {
	getSteps() {
		request.get('https://api.github.com/repos/visionmedia/superagent').end((data) => {
			console.log(data);
		});
	}
}
