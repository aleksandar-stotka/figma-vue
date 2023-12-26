<template>
  <div class="w-3/4 mx-auto p-0">
    <AboutUs />
    <ContactUs />
    <div v-for="menu in menus.data" :key="menu.id">
      <p>Ingredients: {{ menu.attributes.ingrediants }}</p>
      <p>Price: {{ menu.attributes.price }}</p>
      <p>Meal: {{ menu.attributes.mealName }}</p>
      <img
        v-if="menu.attributes.image && menu.attributes.image.data && menu.attributes.image.data.attributes.url"
        :src="`http://localhost:1337${menu.attributes.image.data.attributes.url}`"
        :alt="menu.attributes.ingrediants" 
      />
      <!-- Display other attributes here -->
    </div>
  </div>
</template>

<script>
import AboutUs from "~/components/AboutUs.vue";
import ContactUs from "~/components/ContactUs.vue";
import { GET_MENUS_QUERY } from "@/apollo/index/menuQueries";
//<img :src="menu.attributes.image.data.attributes.url" :alt="menu.mealName"
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
};
</script>

<style lang="scss" scoped></style>
