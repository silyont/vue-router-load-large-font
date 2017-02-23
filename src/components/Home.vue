<template>
    <div id="homepage">
        <h1>This is home pages</h1>
        <div class="items">
            <router-link :to="{name: 'modal'}"><div class="item">你</div></router-link>
            <router-link :to="{name: 'modal'}"><div class="item">好</div></router-link>
            <router-link :to="{name: 'modal'}"><div class="item">嗎</div></router-link>
            <router-link :to="{name: 'modal'}"><div class="item">呀</div></router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home'
    }
</script>

<style lang="stylus">
.items
    display: flex
    justify-content: space-between
    align-items: center

.item
    display: inline-block
    width: 250px
    height: 250px
    background-color: green
    text-align: center
    cursor: pointer
</style>