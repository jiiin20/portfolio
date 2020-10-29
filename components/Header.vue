<template>
    <header>
        <div>Soojin's portfolio</div>
        <div @click="moveSection('.about')">About</div>
        <div @click="moveSection('.skill')">Skill</div>
        <div @click="moveSection('.work')">Work</div>
        <div @click="moveSection('.contact')">Contact</div>
    </header>
</template>

<script>

import scrollTo from 'scroll-to'

export default {
    methods:{
        moveSection(section){
            const top = document.querySelector(section).offsetTop-document.querySelector('header').offsetHeight
            scrollTo(0, top, {
                ease: 'out-bounce'
            })
        }
    }
}

</script>

<style scoped>

Header {
    display: flex;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 70px;
}

div{
    flex: 1;
    padding: 1%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

</style>