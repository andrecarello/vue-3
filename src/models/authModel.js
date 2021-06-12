const defaultState = {
	count: 0,
};

const authmodel = {
	namespaced: true,

	state: () => defaultState,

	getters: {
		count: (state) => state.count
	},

	actions: {
		increment: ({ commit }, payload) => commit('increment', payload)
	},

	mutations: {
      increment: (state, payload) => (state.count = payload)
	}
};

export default authmodel;