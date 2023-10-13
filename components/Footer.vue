<template>
  <section
    class="bg-black py-20 grid sm:grid-cols-3 lg:grid-cols-3 h-auto gap-10 bg-black"
    id="footer"
  >
    <div>
        <div class="flex items-center space-x-4">
            <img src="@/assets/images/logo2.png" alt="Logo" />
            <img src="@/assets/images/logo.png" alt="img" class="w-150 h-119" />
          </div>
        
      <p class="text-footerPara pl-10">
        Creative Labs, a web agency based in Sweden, is expanding its reach and
        opening a new office in Macedonia. The agency is well-known for
        providing cutting-edge solutions to businesses across a wide range of
        industries, and their expansion to Macedonia is a testament to their
        commitment to delivering exceptional results for their clients on a
        global scale.
      </p>
    </div>  
    <div class="p-10 ml-10">
      <h1 class="text-white font-bold">Ceative labs</h1>
      <div v-for="(link, index) in linksSource" :key="index">
      
        <router-link
          class="text-linkColors w-106 h-41 leading-relaxed hover:bg-activeBgColors hover:rounded p-2"
          :to="link"
          target="_blank"
          >{{ link.text }}</router-link
          
        >
      </div>
    </div>
    <div>
   
        <li class="text-white flex flex-col p-10">
          Contact us <br>Creative Labs <br>
           Pelagonka 2 <br>
           Bitola, Macedonia <br>

          hi@creativelabs.se <br>
           LinkedIn
        </li>
     
    </div>
    <p class="text-white p-4  ">© COPYRIGHT 2023 Creative Labs. All rights reserved. Privacy policy   |  Cookie policy </p>
  </section>
</template>

<script>
import { navLinks } from "~/data";
export default {
  name: "FigmaDesignFooter",

  data() {
    return {
      linksSource: navLinks,
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
