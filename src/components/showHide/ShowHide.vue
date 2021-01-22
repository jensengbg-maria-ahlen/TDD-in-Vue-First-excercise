<template>
  <div>
      <button class="clickButton" @click="toggleVisible">Visa/dölj alternativ</button>
      <p class="content" v-show="isVisible">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>
</template>

<script>
export default {
    data: () => ({
        isVisible: true
    }),
    methods: {
        toggleVisible() {
            this.isVisible = !this.isVisible;
        }
    }

}
</script>

<style scoped>
.clickButton {
    margin: 0.5em;
    padding: 0.5em;
}

.content{
    color: teal;
    font-weight: bolder;
}

</style>