<template>
    <div id="wrap">
        <Header />
        <!-- <img id="imageA" src="assets/img/test-image.jpg" width="100%"> -->
        <About />
        <!-- <img id="imageB" src="assets/img/test-image.jpg" width="100%"> -->
        <Skill />
        <Work />
        <Contact />
    </div>
</template>

<script>

import Header from './components/Header'
import About from './components/About'
import Skill from './components/Skill'
import Work from './components/Work'
import Contact from './components/Contact'

export default {
    components:{
        Header,
        About,
        Skill,
        Work,
        Contact
    }
}

</script>

<style scoped>
    
</style>