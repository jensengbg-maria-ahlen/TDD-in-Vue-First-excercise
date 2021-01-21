<template>
  <div class="inputWrapper">
      <input type="text" v-model="localValue" placeholder="Enter your name" @keyup.enter="name">
      <p class="inputName" >{{ textInfo || 'Anonymous' }}</p>
  </div>
</template>

<script>
export default {
    props: {
        value: String,
    },
    data() {
        return {
          localValue: ''
        }        
    },
    computed: {
        textInfo() {
            return this.localValue
        }
    },
    created() {
        this.localValue = this.value;
        this.$watch('localValue', value => {
            this.$emit('input', value)
        })
    }

}
</script>

<style scoped>
</style>