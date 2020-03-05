<template>
  <div id="app" class="bg-fixed bg-teal-900 h-screen">
    <div class="bg-gray-900 flex justify-between  w-full h-12">
      <div class="logo text-pink-700 p-3">
        <span>{{ 'Dark Notes'.toUpperCase() }}</span>
      </div>
      <div class="links text-right text-green-500 p-3">
        <router-link class="hover:text-purple-700" to="/">Home</router-link> |
        <router-link class="hover:text-purple-700" to="/about"
          >About</router-link
        >
      </div>
    </div>
    <div id="router" class="p-5">
      <router-view />
    </div>
  </div>
</template>
