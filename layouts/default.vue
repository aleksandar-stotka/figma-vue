<template>
  <div class="w-full flex items-center justify-center">
    <header>
      <nav class="p-4 w-1246">
        <div class="container mx-auto flex justify-between items-center">
          <!-- Logo on the left -->
          <div class="flex items-center space-x-4">
            <img src="@/assets/images/logo2.png" alt="Logo" />
            <img src="@/assets/images/logo.png" alt="img" class="h-119 w-150" />
          </div>

          <!-- Links on the right -->
          <div class="basis-3/6 flex space-x-5">
            <div v-for="(link, index) in linksSource" :key="index">
              <a
                class="text-linkColors w-106 h-41 leading-relaxed"
                :href="link"
                target="_blank"
                >{{ link.text }}</a
              >
            </div>
          </div>
        </div>
      </nav>

      >
    </header>
  </div>

  <div>
    <slot />
  </div>
  <footer>footer</footer>
</template>

<script>
import { navLinks, imageLinks } from "~/data";

export default {
  data() {
    return {
      linksSource: navLinks,

      imageSources: imageLinks,
    };
  },
};
</script>

<style scoped>
header {
  background-image: url("~/assets/images/Rectangle 12.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 1426px;
  height: 919px;
}
.active-link {
  color: red; /* Change the color for active links */
}
</style>
