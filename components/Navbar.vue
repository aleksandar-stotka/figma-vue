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

    <span @click="MenuOpen()" class="absolute md:hidden right-6 top-1.5 cursor-pointer">
           <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']">gg</i>
    </span>

    <ul class="md:flex md:items-center z-40 md:px-0 px-6 md:pb-0 pb-10 md:static absolute
     md:w-auto w-full top-14 duration-100 easy-in"
    :class="[open ? 'left-0':'left-[-100%]']">
    <img src="@/assets/images/logo2.png" alt="Logo" />

      <li class="md:mx-4 md:my-0 my-6 " v-for="link in navLinks" :key="link">
        <a class="text-xl text-white hover:text-green-500" :href="link.link">{{ link.text }}</a>
          
        
      </li>
    </ul>
  </div>
</template>

<script>
import { navLinks } from '~/data';
export default {
    setup() {
        let open = ref(true)

        function MenuOpen() {
            open.value = !open.value
        }
       
        return {open,navLinks,MenuOpen}
    }
}
 
</script>


<style lang="scss" scoped></style>
