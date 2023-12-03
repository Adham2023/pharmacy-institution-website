<template>
  <NuxtImg v-bind="$attrs" border class="mx-auto w-full b-[#e6f9e6]" rounded-xl dark:b-zinc-700 />
  <div class="text-center font-bold opacity-50" role="">
    <span class="text-sm font-italic">{{ $attrs.alt }}</span>
  </div>
</template>
