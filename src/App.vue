<script setup>
   import { RouterLink, RouterView } from 'vue-router';
   import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
   <header>
      <div class="wrapper">
         <HelloWorld msg="You did it!" />

         <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>
         </nav>
      </div>
   </header>

   <main class="outlet">
      <RouterView />
   </main>

   <footer>footer</footer>
</template>

<style></style>
