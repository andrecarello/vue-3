import { PROJECT_SLUG_NAME } from '@/settings'
import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const modules = {};
const models = require.context('@/models/', true, /\.js$/i);
models.keys().map((key) => {
	const name = key.split('/').pop().split('.')[0];
	modules[name] = models(key).default;
});

const store = createStore({
	plugins: [
		createPersistedState({
			key: '@' + PROJECT_SLUG_NAME
		})
	],
	modules: modules
});

export default store;
