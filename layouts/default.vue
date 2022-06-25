<script setup lang="ts">
import { ref, inject } from "vue";
import { injectionSlidevContext } from "@slidev/client/constants";
const $slidev = inject(injectionSlidevContext);

const props = withDefaults(
  defineProps<{
    video: boolean;
  }>(),
  {
    video: true,
  }
);

const isShown = ref(props.video);

const toggleView = () => (isShown.value = !isShown.value);
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
          Q({{ $slidev?.nav.currentPage - 1 }} / {{ $slidev?.nav.total - 1 }})
        </div>
        <div class="m-0 flex gap-4 mt-2 ml-3">
          <a
            :href="$slidev?.configs.video_playlist"
            target="_blank"
            class="text-xl hover:text-orange-500 shadow"
          >
            <carbon-logo-youtube />
          </a>
          <a
            :href="$slidev?.configs.github"
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
