<template>
    <section class='py-20 align-element' id="about" >
        <div class="py-16 grid gap-8 md:grid-cols-1 lg:grid-cols-2">
            <div v-for="(item, index) in aboutSection" :key="index" :class="{ 'bg-green-200': index % 2 === 0, 'bg-orange-50	': index % 2 === 1 }" class="p-10 h-[352px] " >
            <h4 class="mt-6 font-bold text-black">{{ item.titleOne }}</h4>
            <h1 class="text-3xl font-bold text-black">{{ item.titleTwo }}</h1>
            <p class="mt-2  text-base text-black">{{ item.text }}</p>
          
        </div>

        </div>

        
        
    </section>
</template>

<script>
import { aboutSection } from '~/data';


export default {
 
    data() {
        return {
            aboutSection:aboutSection,
        
          
            
            
        }

    }
   
  
};
</script>

<style  scoped>


</style>