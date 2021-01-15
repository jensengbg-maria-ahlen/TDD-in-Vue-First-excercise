<template>
  <button @click='handleToggle()' > {{ isOn ? 'On' : 'Off' }} </button>
</template>

<script>
export default {
    name: 'OnOff',
    data: () => ({
        isOn: true
    }),
    methods: {
        handleToggle() {
            this.isOn = !this.isOn
        }
    }
}
</script>

<style>

</style>