<script setup lang="ts">
import { ref, inject } from "vue";
import { injectionSlidevContext } from "@slidev/client/constants";
const $slidev = inject(injectionSlidevContext);

const props = withDefaults(
  defineProps<{
    video: boolean;
    class: string;
  }>(),
  {
    video: true,
  }
);

const isShown = ref(props.video);

const toggleView = () => {
  isShown.value = !isShown.value;
};
</script>

<template>
  <div class="slidev-layout two-columns w-full h-full">
    <div class="grid grid-cols-2">
      <div :class="props.class">
        <slot />
      </div>
      <div class="flex justify-center items-center px-5">
        <div :class="props.class">
          <slot name="right" />
        </div>
      </div>
    </div>
    <div
      class="absolute bottom-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <div
        class="px-4 py-2 bg-indigo-500 rounded font-black text-sm self-start shadow"
        title="You are doing a great job!"
      >
        Q({{ $slidev.nav.currentPage - 1 }} / {{ $slidev.nav.total }})
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
