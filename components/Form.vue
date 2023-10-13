<template>
  <section id="form" class="p-20 flex items-center">
    <form class="w-full max-w-lg w-[500rem]">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Name"
          />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Company"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="Email"
            placeholder="E-mail"
          />
          <textarea
            class="appearance-none block w-full bg-gray-200 h-[184px] text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            placeholder=" Message"
          ></textarea>
          <button
            class="bg-green-500 text-white font-bold py-2 px-4 rounded float-right w-[10rem] h-[3rem]"
          >
            Send
          </button>
        </div>
        <div></div>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "FigmaDesignForm",

  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
