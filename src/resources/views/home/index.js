import { computed } from 'vue';
import { useStore, mapGetters } from 'vuex';

export default {
	setup() {
		const store = useStore();

		return {
      user: computed(() => store.state.homeModel.user),
			repos: computed(() => store.state.homeModel.repos)
		};
	},

	methods: {
		get: function() {
      _.controller('home').getRepos('andrecarello')
		}
	}

	//   computed: mapGetters({
	//     repos: "homeModel/count",
	//   }),
};
