import { reactive } from 'vue';
import { defineStore } from 'pinia';

export const useMonsterStore = defineStore('monsters', function () {
	// monster list
	const list = reactive([]);
	// add a monster
	function add(monster) {
		list.push(monster);
	}
	return { list, add };
});
