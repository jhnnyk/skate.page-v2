<script setup></script>

<template>
  <header class="bg-gray-300 shadow-sm p-4">
    <nav>
      <RouterLink to="/" class="text-5xl">Skate.page</RouterLink>
    </nav>
  </header>

  <div class="container mx-auto">
    <RouterView />
  </div>
</template>
