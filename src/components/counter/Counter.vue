<template>
	<div class="component">
		<button @click="increase" class="increaseButton"> Öka värde </button>
		<button @click="decrease" class="decreaseButton"> Minska värde </button>
		<span class="result"> {{ value }} </span>
	</div>
</template>

<script>
export default {
	data: () => ({
		value: 1
	}),
	methods: {
		increase() {
			this.value++
		},
		decrease() {
			this.value--
		}
	}
}
</script>

<style scoped>

.component {
	margin: 1em;
}

.component button {
	margin: 1em;
}

</style>