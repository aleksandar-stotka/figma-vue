<template>
  <section class="contact my-3 relative ..." id="contact">
    <div class="absolute bottom-10 left-10 w-1/2 p-4">
      <h1 class="text-white lg:text-5xl sm:md:text-xs p-1 p-1">
        Euismod elementumnisi quis eleifend quam proin sagittis.
      </h1>
      <p class="text-white p-2">
        Senectus et netus et malesuada fames. Sed augue lacus viverra vitae
        congue eu consequat. Cum sociis natoque penatibus et magnis dis
        parturient montes. Elementum nisi quis eleifend quam adipiscing vitae
        proin sagittis. Condimentum vitae sapien pellentesque habitant morbi
        tristique senectus et netus. Enim eu turpis egestas pretium aenean
        pharetra.
      </p>
      <h1 class="text-white font-extrabold ">Contact us</h1>
      <h2 class="text-yellow-500 font-extrabold">-----------------></h2>
      <!-- Overlay Content -->
    </div>
  </section>
   <Team/>
 
  <div class="flex items-center justify-center h-screen my-5 flex flex-col ">
    <h1 class="font-bold sm:text-base lg:text-5xl 	p-5">Contact us</h1>
    <p>Do you want to be a part of this network and amazing journey? <br> Contact us, and we will get back to you.</p>
    <Form />
</div>
</template>

<script>
import { team } from "~/data";
import Team from "./Team.vue";
import Form from "./Form.vue";
export default {
  name: "FigmaDesignContactUs",
 components: {
  Form,
  Team
  

 },
  data() {
    return {
      teamSource: team,
    };
  },
};
</script>

<style scoped>
.contact {
  background-image: url("~/assets/images/contact.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 752px;
}

</style>
