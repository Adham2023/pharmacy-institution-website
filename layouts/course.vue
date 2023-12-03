<script setup>
// function isMatchedRouteForChapter(pth: string) {
//   const regex = /course\/[^\/]+\/[^\/]+/
//   return regex.test(pth)
// }
</script>

<template>
  <main flex="~ col" static min-h-full>
    <div grid grid-cols-1 grid-rows="[3rem,auto]">
      <ToolBar grid-col-start-1 grid-row-start-1 />
      <slot />
      <NavBar grid-col-start-1 grid-row-start-2 />
    </div>
    <Footer mt-auto />
  </main>
</template>

<style>
details > summary {
  background-color: rgb(243, 244, 255);
  cursor: pointer;
  padding: .5rem 1rem;
  border-radius: 10px;
}
</style>
