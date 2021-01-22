<template>
  <div class="inputWrapper">
      <input type="text" v-model="localValue" placeholder="Enter your name">
      <p class="inputName" >{{ textInfo || 'Anonymous' }}</p>
  </div>
</template>

<script>
export default {
    data() {
        return {
          localValue: ''
        }        
    },
    computed: {
        textInfo() {
            return this.localValue
        },
/*
        capitalize() {

        }
*/
    }
}
</script>

<style scoped>
</style>