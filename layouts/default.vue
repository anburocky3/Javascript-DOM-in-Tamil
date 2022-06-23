<script setup lang="ts">
import { ref } from "vue";

const isShown = ref(true);

const toggleView = () => {
  isShown.value = !isShown.value;
  console.log("isShown.value", isShown.value);
};
</script>

<template>
  <div class="">
    <div class="flex p-10">
      <div class="flex-1 pr-5">
        <slot />
      </div>
      <div>
        <div
          class="px-4 py-2 bg-indigo-500 rounded font-black text-sm self-start shadow"
          title="You are doing a great job!"
        >
          Q({{ $slidev.nav.currentPage - 1 }} / {{ $slidev.nav.total }})
        </div>
        <div class="m-0 flex gap-4 mt-2 ml-3">
          <a
            href="https://bit.ly/JS-DOM-Tamil"
            target="_blank"
            class="text-xl hover:text-orange-500 shadow"
          >
            <carbon-logo-youtube />
          </a>
          <a
            href="https://github.com/anburocky3/Javascript-DOM-in-Tamil"
            target="_blank"
            alt="GitHub"
            class="text-xl hover:text-orange-500 shadow"
          >
            <carbon-logo-github />
          </a>
        </div>
      </div>
    </div>

    <div class="absolute bottom-10 right-10">
      <div
        class="text-xs uppercase border-2 border-orange-600 rounded"
        v-if="$slots.refvideo && isShown"
      >
        <div
          class="flex justify-between bg-orange-600 text-white px-4 py-1 text-xs"
        >
          <span> <carbon-PlayFilled class="mr-2" /> Video Reference</span>
          <mdi-windowClose
            @click="toggleView"
            class="cursor-pointer hover:shadow"
          />
        </div>
        <slot name="refvideo" />
      </div>
      <div
        class="w-12 h-12 bg-orange-500 rounded-full p-2 flex justify-center items-center cursor-pointer hover:pointer"
        @click="toggleView"
        v-else
      >
        <mdi-BeakerQuestionOutline />
      </div>
    </div>
  </div>
</template>
