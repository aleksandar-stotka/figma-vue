<template>
    <div class="w-3/4 mx-auto  p-0">
     
    <AboutUs/>
    <ContactUs/>
  <p>{{ menus }}</p>
    </div>
</template>

<script>
import AboutUs from '~/components/AboutUs.vue';
import ContactUs from '~/components/ContactUs.vue';
import gql from "graphql-tag"
export default {
  components: {
    AboutUs,
    ContactUs,

  },
  data() {
    return {
      menus:[]
    }
  },
  apollo: {
    menus: {
      query: gql`
      query  {
menus {
  data {
    id,
    attributes{
      ingrediants,
      price,
      
    }
}
}
}
         
      `
    }

  }
}


 
 
 

</script>

<style lang="scss" scoped>

</style>