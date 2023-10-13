<template>
  <div>
    <div class="">
      <nav
        class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center"
      >
        <div class="flex items-center justify-between">
          <router-link
            to="/"
            class="text-xl font-bold text-gray-800 md:text-2xl hover:text-blue-400"
          >
            <div class="flex items-center space-x-4" v-if="showMenu">
              <img src="@/assets/images/logo2.png" alt="Logo" />
              <img
                src="@/assets/images/logo.png"
                alt="img"
                class="w-150 h-119"
              />
            </div>
          </router-link>
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button
              type="button"
              class="text-white hover:text-gray-400 focus:outline-none focus:text-gray-400 w-200"
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="closeMenu ? 'side ' : 'hidden '"
          class="flex-col space-y-4 md:flex md:space-y-0 md:flex-col md:space-x-10 md:mt-0"
        >
          <div class="basis-3/6 flex links space-x-5">
            <div v-for="(link, index) in linksSource" :key="index">
              <a
                class="text-linkColors w-106 h-41 leading-relaxed hover:bg-activeBgColors hover:rounded-full p-2"
                :href="link.href"
                target="_blank"
                >{{ link.text }}</a
              >
            </div>
          </div>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
import { navLinks } from "~/data";

navLinks;
export default {
  data() {
    return {
      showMenu: false,
      linksSource: navLinks,
    };
  },

  computed: {
    closeMenu() {
      if (this.showMenu) {
        "side" && "links";
      }
      return this.showMenu;
    },
  },
};
</script>

<style scoped>
.side {
  background: black;
  width: 100%;
  height: 40rem;
  z-index: 1000;
  position: relative;

  display: flex;
}
.links {
  display: flex;
  flex-direction: column;
  padding: 5px;
}
</style>
