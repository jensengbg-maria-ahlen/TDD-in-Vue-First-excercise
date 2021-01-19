<template>
    <div>
        <div class="option"> First </div>
        <div class="option"> Second </div>
        <div class="option"> Third </div>
        <div class="option"> Fourth </div>
        <div class="option"> Fifth </div>
    </div>
</template>

<script>
export default {
    name: 'Options',
    data: () => {

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
    background: teal;
    color: white;
}

</style>