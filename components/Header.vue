<template>
    
        <header class="w-3/4 h-[919px] mx-auto bg-cover bg-center bg-no-repeat  sm:w-20rem md:w-15rem lg:w-20rem xl:w-10rem"  style="background-image: url('man.png')" >
            
      <nav class="p-4">
        <div class="container mx-auto flex justify-between items-center">
          <div class="flex items-center space-x-4">
            <img src="@/assets/images/logo2.png" alt="Logo" />
            <img src="@/assets/images/logo.png" alt="img" class="w-150 h-119" />
          </div>

          <div class="basis-3/6 flex space-x-5">
            <div v-for="(link, index) in linksSource" :key="index">
              <router-link
                class="text-linkColors w-106 h-41 leading-relaxed hover:bg-activeBgColors hover:rounded-full p-2"
                :to="link"
                target="_blank"
                >{{ link.text }}</router-link
              >
            </div>
          </div>
        </div>
        <div class="bg-Rectbg w-[512px] h-[226px] float-right mr-5">ansans</div>
      </nav>
    </header>
    
</template>

<script>
import { navLinks } from '~/data';
export default {
    name: 'FigmaDesignHeader',

    data() {
    return {
      linksSource: navLinks,
      
    };
  },


   
};
</script>

<style  scoped>

</style>