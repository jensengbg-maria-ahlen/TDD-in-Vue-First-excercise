<template>
    <main>
        <p> The toggle button: </p>
        <OnOff />
        <Counter />
        <Option />
        <InputName />
        <ShowHide />
        <Tabs />
        <Chuck />
    </main>
</template>

<script>
import OnOff from './components/onoff/OnOff.vue'
import Counter from './components/counter/Counter.vue'
import Option from './components/options/option.vue'
import InputName from './components/inputName/InputName.vue'
import Chuck from './components/mock-ajax/ChuckNorris';
import ShowHide from './components/showHide/ShowHide';
import Tabs from './components/tabs/Tabs';

export default {
    name: 'App',
    components: {
        OnOff, Counter, Option, InputName, Chuck, ShowHide, Tabs,
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