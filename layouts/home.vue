<template>
  <main flex="~ col" static min-h-full>
    <div grid grid-cols-1 grid-rows="[3rem,auto]">
      <ToolBar grid-col-start-1 grid-row-start-1 />
      <div grid-col-start-1 grid-row-start-2>
        <slot />
      </div>
      <NavBar grid-col-start-1 grid-row-start-2 />
    </div>
    <Footer mt-auto />
  </main>
</template>
