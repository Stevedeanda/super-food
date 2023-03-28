<script setup>
	import { reactive } from 'vue';

	const monster = reactive({
		name: 'Steve',
		age: 33,
	});

	function saved() {
		alert('save');
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
</template>
