import store from '@/store';

class Controller {
	constructor() {
		self.store = this.store = store;
		self.state = this.state = store.state;
	}

	__store(model, key, payload) {
		if (key === 'reset') {
			this.store.dispatch(`${model}Model/${key}`);
		} else {
			this.store.dispatch(`${model}Model/${key}`, payload);
		}
	}

	dispatch(model, payload, extra = null) {
		if (typeof payload === 'object' && extra === null) {
			Object.keys(payload).map((row) => this.__store(model, row, payload[row]));
		} else {
			this.__store(model, payload, extra);
		}
	}

	http(method, url, data) {
		let config = {
			method: method,
			url: url.includes('http:') || url.includes('https:') ? url : this.api + url
		};

		if (method === 'post' || method === 'delete') {
			config = {
				...config,
				data
			};
		}

		return _.$axios(config);
	}
}

export default Controller;
