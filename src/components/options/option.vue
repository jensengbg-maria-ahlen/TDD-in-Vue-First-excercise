<template>
    <div>
        <div :class="{ 'option': true, 'selected': selectedIndex == 0 }" @click="select(0)"> {{items[0]}} </div>
        <div :class="{ 'option': true, 'selected': selectedIndex == 1 }" @click="select(1)"> {{items[1]}} </div>
        <div :class="{ 'option': true, 'selected': selectedIndex == 2 }" @click="select(2)"> {{items[2]}} </div>
        <div :class="{ 'option': true, 'selected': selectedIndex == 3 }" @click="select(3)"> {{items[3]}} </div>
        <div :class="{ 'option': true, 'selected': selectedIndex == 4 }" @click="select(4)"> {{items[4]}} </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        selectedIndex: null,
        items: ['Citron', 'Banan', 'Ananas', 'Äpple', 'Päron']
    }),
    methods: {
        select(index) {
            this.selectedIndex = index;

            this.items.forEach( item => {
                console.log(item)

                /*
                let existingObject = this.items.find(i => i.item.index === item.id);
                if(existingObject) {
                    console.log(existingObject);
                }
                */
            })
        },
    }
}
</script>

<style scoped>
.option {
    width: 16em;
    border: 1px solid teal;
    border-radius: 0.3em;
    padding: 0.3em;
    margin: 0.1em auto;
}
.option:hover {
    cursor: pointer;
}
.selected {
    background-color: teal;
    color: white;
}
</style>