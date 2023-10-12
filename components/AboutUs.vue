<template>
    <section class='py-20 align-element' id="about" >
        <div class="py-16 grid gap-8 md:grid-cols-1 lg:grid-cols-2">
            <div v-for="res in aboutSectionResurce" :key="res" >
            <h4 class="mt-6 font-bold">{{ res.titleOne }}</h4>
            <h1 class="text-3xl">{{ res.titleTwo }}</h1>
            <p class="mt-2 text-slate-500 text-base">{{ res.text }}</p>
          
        </div>

        </div>
        
    </section>
</template>

<script>
import { aboutSection } from '~/data';


export default {
 
    data() {
        return {
            aboutSectionResurce:aboutSection
        }

    }
   
  
};
</script>

<style lang="scss" scoped>

</style>