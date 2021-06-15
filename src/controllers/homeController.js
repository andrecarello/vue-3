import Controller from './controller';

class homeController extends Controller {
	getRepos(user) {
		this.http('get', `https://api.github.com/users/${user}/repos`).then(({ data }) =>
			this.dispatch('home', {
        user,
				repos: data
			})
		);
	}
}

export default homeController;
