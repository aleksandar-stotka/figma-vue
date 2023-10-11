<template>
  <div class="flex items-center justify-center">
    <header class="w-3/4 h-[919px] mx-auto">
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
  </div>

  <div>
    <slot />
  </div>
  <footer class="w-3/4 mx-auto">
    <div class="bg-gray-900 text-white p-4">
    <div class="md:flex flex-wrap justify-center">
      <!-- Loop through the columns -->
      <div v-for="(column, index) in columns" :key="index" class="w-full md:w-2/5 lg:w-1/3 p-4">
        <div class="bg-blue-500 text-center p-4 space-x-1" :style="getStyles(column)">
          {{ column.label }}
        </div>
      </div>
    </div>
  </div>
  </footer>
</template>

<script>
import { navLinks } from "~/data";

export default {
  data() {
    return {
      linksSource: navLinks,
      columns: [
        {
          label:
            "Creative Labs, a web agency based in Sweden, is expanding its   reach and opening a new office in Macedonia. The agency is  well-known for providing cutting-edge solutions to businesses across a wide range of industries, and their expansion to Macedonia is a testament to their commitment to delivering exceptional results for their clients on a global scale.",
          width: "466px",
          height: "149px",
        },
        { label: "Second Column", width: "252px", height: "197px" },
        { label: "Third Column", width: "252px", height: "197px" },
      ],
    };
  },
  methods: {
    getStyles(column) {
      return {
        width: column.width,
        height: column.height,
      };
    },
  },
};
</script>

<style scoped>
header {
  background-image: url("~/assets/images/Rectangle 12.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.active-link {
  color: red; /* Change the color for active links */
}
</style>
