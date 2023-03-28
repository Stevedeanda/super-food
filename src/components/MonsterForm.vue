<script setup>
	import { reactive } from 'vue';
	import { useMonsterStore } from '@/stores/monsters';

	const monsters = useMonsterStore();

	const monster = reactive({
		name: '',
		age: '',
	});

	function saved() {
		const record = {
			name: monster.name,
			age: monster.age,
		};
		monsters.add(record);
		clear();
	}

	function clear() {
		monster.name = '';
		monster.age = '';
	}
</script>

<template>
	<form @submit.prevent="saved()">
		<div class="field">
			<label for="w">Monster Name</label>
			<input id="w" type="text" v-model="monster.name" />
		</div>
		<div class="field">
			<label for="h">Age</label>
			<input id="h" type="number" v-model="monster.age" />
		</div>
		<button type="submit">Submit</button>
	</form>

	<ul>
		<li v-for="monster in monsters.list">{{ monster.name }}</li>
	</ul>
</template>
