const defaultState = {
	user: '',
	repos: []
};

const homemodel = {
	namespaced: true,

	state: () => defaultState,

	getters: {
		user: (state) => state.user,
		repos: (state) => state.repos
	},

	actions: {
		user: ({ commit }, payload) => commit('user', payload),
		repos: ({ commit }, payload) => commit('repos', payload)
	},

	mutations: {
    user: (state, payload) => (state.user = payload),
		repos: (state, payload) => (state.repos = payload)
	}
};

export default homemodel;
