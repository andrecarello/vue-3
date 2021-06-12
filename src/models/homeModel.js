const defaultState = {
	repos: []
};

const homemodel = {
	namespaced: true,

	state: () => defaultState,

	getters: {
		repos: (state) => state.repos
	},

	actions: {
		repos: ({ commit }, payload) => commit('repos', payload)
	},

	mutations: {
		repos: (state, payload) => (state.repos = payload)
	}
};

export default homemodel;
