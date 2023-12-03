<template>
  <div text-red>
    aa
    <ContentSlot :use="$slots.default" unwrap="h1" />
  </div>
</template>
