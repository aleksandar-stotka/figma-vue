<template>
    <div class="w-full flex items-center justify-center">
        <header  >
            <nav class=" p-4">
  <div class="container mx-auto flex justify-between items-center">
    <!-- Logo on the left -->
    <div class="flex items-center space-x-4">
        <img src="~/assets/images/Group 4.png" alt="Logo" class="h-119 w-150">
      <img src="~/assets/images/Rectangle 1.png" alt="Logo" class="h-119 w-150">
      
    </div>
    
    <!-- Links on the right -->
    <div class="space-x-6 p-5 ">
      
      <a href="#" class=" text-linkColors hover:bg-green-500 p-5  w-78 h-41">Work</a>
      <a href="#" class=" text-linkColors  w-132 h-41 ">What we do</a>
      <a href="#" class=" text-linkColors  w-78 h-41">Stories</a>
      <a href="#" class=" text-linkColors  w-78 h-41">Contact</a>
      <a href="#" class=" text-linkColors  w-78 h-41">Careers</a>
      <a href="#" class=" text-linkColors  w-78 h-41">About us</a>
    </div>
  </div>
</nav>
     
>
        </header>
      
    </div>

   
    <div >
        <slot/>
    </div>
    <footer>
        footer
    </footer>
</template>

<script>
export default {
  setup() {

  }
};
</script>

<style  scoped>
  header {
    background-image: url('~/assets/images/Rectangle 12.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 1426px ;
    height:919px ;
  
  }
  .active-link {
  color: red; /* Change the color for active links */
}

</style>