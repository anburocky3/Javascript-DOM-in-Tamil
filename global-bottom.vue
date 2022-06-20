<template>
  <footer
    class="absolute top-10 left-10 px-4 py-2 bg-indigo-500 rounded font-black text-sm"
    v-if="$slidev.nav.currentPage !== 1"
  >
    ({{ $slidev.nav.currentPage - 1 }} / {{ $slidev.nav.total }})
  </footer>
</template>
