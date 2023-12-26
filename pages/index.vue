<template>
    <div class="w-3/4 mx-auto  p-0">
     
    <AboutUs/>
    <ContactUs/>
    <div v-for="menu in menus.data" :key="menu.id">
      <p>Ingredients: {{ menu.attributes.ingrediants }}</p>
      <p>Price: {{ menu.attributes.price }}</p>
      <!-- Display other attributes here -->
    </div>
    </div>
</template>

<script >
import AboutUs from '~/components/AboutUs.vue';
import ContactUs from '~/components/ContactUs.vue';
import {GET_MENUS_QUERY} from "@/apollo/index/menuQueries"
export default {
  components: {
    AboutUs,
    ContactUs,

  },
  data() {
    return {
      menus: [],
    };
  },
  apollo: {
    menus: {
      query: GET_MENUS_QUERY, // Use the imported query
      // Apollo options
    },
  },
}


 
 
 

</script>

<style lang="scss" scoped>

</style>