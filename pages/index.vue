<template>
    <div class="w-3/4 mx-auto  p-0">
     
    <AboutUs/>
    <ContactUs/>
  
    </div>
</template>

<script setup>
import AboutUs from '~/components/AboutUs.vue';
import ContactUs from '~/components/ContactUs.vue';
import {ref,onMounted} from "vue"
   const url = "http://localhost:1337/api/menus"
  
  const fetcData = async () => {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data,'data')
  }

  onMounted(() => {

    fetcData()

  })
 
 
 

</script>

<style lang="scss" scoped>

</style>