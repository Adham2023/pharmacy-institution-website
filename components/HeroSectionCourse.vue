<template>
  <div class="herobg bg-cover bg-bottom" h-35rem w-full justify-center overflow-hidden px-1em>
    <div h-17rem />
    <div grid grid-cols-1 grid-rows-1 mx-auto container>
      <!-- <div flex="~" h-full items-center> -->
      <div rounded-tr="50px" flex="~ col" rounded="50px" grid-col-start-1 grid-row-start-1 my-auto self-center justify-between bg-white bg-opacity-40 p-3rem backdrop-blur-lg>
        <!-- <h3 text-center text-sm uppercase text="#0037A0">
          Oliy ta‘lim muassasalari
          professor-o‘qituvchilari uchun
          masofaviy kurslar
        </h3> -->
        <h1 flex="~ col" items-start text-3xl font-bold xl:text-5xl>
          <span text="zinc-600">
            Oliy ta‘lim muassasalari
            professor-o‘qituvchilari uchun
          </span>
          <span text="#fde1c8" rounded-xl bg-red px-1 uppercase>masofaviy kurslar</span>
        </h1>
      </div>
    </div>
  </div>
</template>

<style>
.herobg {
    background-image: url('/images/c4.png');
    color: #974f4f;
}
</style>
