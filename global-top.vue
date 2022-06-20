<template>
  <footer
    class="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-indigo-500 rounded font-black text-sm"
    v-if="$slidev.nav.currentPage !== 1"
  >
    Question: {{ $slidev.nav.currentPage - 1 }} / {{ $slidev.nav.total }}
  </footer>
</template>
