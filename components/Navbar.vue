<template>
  <div class="py-3.5 px-6 md:flex justify-between items-center">
    <div class="flex items-center">
      <span class="mr-1">
        <div class="flex items-center space-x-4">
          <img src="@/assets/images/logo2.png" alt="Logo" />
          <img src="@/assets/images/logo.png" alt="img" class="w-150 h-119" />
        </div>
      </span>
    </div>

    <span
      @click="MenuOpen()"
      class="absolute md:hidden right-6 top-1.5 cursor-pointer rounded text-4x1"
    >
      <i
        :class="[open ? 'bi bi-x text-5xl' : 'bi bi-filter-left 	text-7xl	']"
      ></i>
    </span>

    <ul
      class="md:flex md:items-center z-40 lg:bg-transparent md:px-0 px-6 md:pb-0 pb-10 md:static absolute bg-gray-900 md:w-auto w-full top-14 duration-100 easy-in"
      :class="[open ? 'left-0' : 'left-[-100%]']"
    >
      <div v-if="open">
        <img src="@/assets/images/logo2.png" alt="Logo" />
      </div>

      <li class="md:mx-4 md:my-0 my-6" v-for="link in navLinks" :key="link">
        <a
          class="text-xl text-white hover:bg-activeBgColors rounden p-2"
          :href="link.link"
          >{{ link.text }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { navLinks } from "~/data";
export default {
  setup() {
    let open = ref(true);

    function MenuOpen() {
      open.value = !open.value;
    }

    return { open, navLinks, MenuOpen };
  },
};
</script>

<style lang="scss" scoped></style>
