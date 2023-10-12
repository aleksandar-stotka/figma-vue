<template>
  <div class="flex items-center justify-center">
    <Header/>
  </div>

  <div>
    <slot />
  </div>
  <div class="w-3/4 mx-auto">
  <Footer/>
  </div>
</template>

<script>

import { navLinks } from "~/data";
import Footer from '@/components/Footer.vue';
import Header from "~/components/Header.vue";

export default {
  components: {
    Footer,
    Header
  },
  data() {
    return {
      linksSource: navLinks,
      
    };
  },

};
</script>

<style scoped>


</style>
