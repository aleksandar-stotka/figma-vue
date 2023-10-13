<template>
  <header
    class="w-3/4 h-[919px] mx-auto bg-cover bg-center bg-no-repeat sm:w-20rem md:w-15rem lg:w-20rem xl:w-10rem"
    style="background-image: url('man.png')"
  >
   <Navbar/>
     <div class="absolute bottom-10 w-1/2 overflow-hidden p-4">
        <h1 class="lg:text-5xl md:text-xs p-5  text-white font-black p-2">
          Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor
          incididunt.
        </h1>
        <p class="text-white  p-2">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia.
        </p>
      </div>
  </header>
</template>

<script>

import Navbar from "./Navbar.vue";
export default {
  name: "FigmaDesignHeader",
 components: {
    Navbar
 },
  data() {
    return {
    
    
      
    };
  },

};
</script>

<style scoped></style>
