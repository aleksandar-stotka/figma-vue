<template>
  <section class="contact my-3 relative ...">
    <div class="absolute bottom-10 left-10 w-1/2 p-4">
      <h1 class="text-white text-5xl p-1">
        Euismod elementum nisi quis eleifend quam proin sagittis.
      </h1>
      <p class="text-white p-2">
        Senectus et netus et malesuada fames. Sed augue lacus viverra vitae
        congue eu consequat. Cum sociis natoque penatibus et magnis dis
        parturient montes. Elementum nisi quis eleifend quam adipiscing vitae
        proin sagittis. Condimentum vitae sapien pellentesque habitant morbi
        tristique senectus et netus. Enim eu turpis egestas pretium aenean
        pharetra.
      </p>
      <!-- Overlay Content -->
    </div>
  </section>

  <div class="grid lg:grid-cols-2 gap-10 p-3 ">
    <div class="bg-cover bg-center bg-no-repeat h-[35rem] h-screen  sm:w-20rem md:w-15rem lg:w-10rem xl:w-5rem "   style="background-image: url('/girls.png')"></div>
    <div class="bg-gray-200 p-5">
      <div class=" flex flex-col 	p-8 m-5 ">
        <h4 class="text-sm-bold	font-bold p-2">Join our team</h4>
      <h1 class="text-4xl font-bold	p-2">Tincidunt tortor aliquam.</h1>
      <p>
        Quam nulla porttitor massa id neque aliquam. Quam elementum pulvinar
        etiam non quam lacus suspendisse faucibus interdum. Nunc lobortis mattis
        aliquam faucibus purus in. Facilisis volutpat est velit egestas dui id.
        Mollis aliquam ut porttitor leo a diam sollicitudin tempor.<br>
        <br>
          Netus et
        malesuada fames ac. Metus vulputate eu scelerisque felis imperdiet proin
        fermentum leo vel. Neque laoreet suspendisse interdum consectetur libero
        id faucibus nisl. Dictum sit amet justo donec enim diam vulputate.
        Condimentum id venenatis a condimentum vitae.<br>
        <br>
          Urna neque viverra justo
        nec ultrices dui sapien. Faucibus nisl tincidunt eget nullam. Maecenas
        ultricies mi eget mauris pharetra.
      </p>

      </div>
      
    </div>
  </div>
</template>

<script>
import { team } from "~/data";
export default {
  name: "FigmaDesignContactUs",

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
.imgCover {
  background-image: url("~/assets/images/girls.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 39rem;
}
</style>
