<template>
    <main>
        <p> The toggle button: </p>
        <OnOff />
        <Counter />
        <Option />
        <ShowHide />
        <InputName />
        <Tabs />
    </main>
</template>

<script>
import OnOff from './components/onoff/OnOff.vue'
import Counter from './components/counter/Counter.vue'
import Option from './components/options/option.vue'
import ShowHide from './components/showHide/ShowHide.vue'
import InputName from './components/inputName/InputName.vue'
import Tabs from './components/tabs/Tabs.vue'

export default {
    name: 'App',
    components: {
        OnOff, Counter, Option, ShowHide, InputName, Tabs
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>