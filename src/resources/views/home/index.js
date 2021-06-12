import { computed } from 'vue';
import { useStore, mapGetters } from 'vuex';

export default {
	setup() {
		const store = useStore();

		return {
			repos: computed(() => store.state.homeModel.repos)
		};
	},
	methods: {
		get: function() {
			this.$http
				.get('https://api.github.com/users/andrecarello/repos')
            // .then(({data}) => console.log(data))
				.then(({ data }) => this.$store.dispatch('homeModel/repos', data));
		}
	}

	//   computed: mapGetters({
	//     repos: "homeModel/count",
	//   }),
};
