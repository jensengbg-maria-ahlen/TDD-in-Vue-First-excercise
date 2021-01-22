<template>
  <div class="tabs">
      <div class="Header">
          <button 
          v-for="item in changeableContent" 
          :key="item.heading"
          @click="changeContent(item.heading)" > 
            {{ item.heading }} 
          </button>
      </div>
      <TabContent :content=selectedContent />
  </div>
</template>

<script>
import TabContent from './TabContent'

export default {
    components: {
        TabContent
    },
    data: () => ({
        selectedContent: '',
        changeableContent: [
             {
                heading: 'find()',
                content: 'wrapper.find(selector) leter upp ett HTML-element med hjälp av CSS-selektor'
            },
            {
                heading: 'exist()',
                content: 'wrapper.exist() returnerar true om wrappern innehåller ett element'
            },
            {
                heading: 'element',
                content: 'wrapper.element är DOM-elementet som wrappern representerar'
            }
        ]   
    }),
    methods: {
        changeContent(heading) {
            const element = this.changeableContent.find(item => heading === item.heading)
            this.selectedContent = element.content;
        }
    }
}
</script>

<style scoped>

button {
    margin: 0.3em;
}

</style>