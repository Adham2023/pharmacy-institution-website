<script setup>
// const { status } = useAuth()
</script>

<template>
  <div class="herobg_home bg-cover bg-bottom" h-45rem w-full justify-center overflow-hidden px-1em>
    <div class="h-4rem" />
    <div grid grid-cols-1 grid-rows-1 mx-auto container>
      <!-- <div flex="~" h-full items-center> -->
      <div w="40%" xl:w="45%" class="h-[60%]" rounded-tl="120px" rounded-tr="50px" rounded-br="50px" flex="~ col" grid-col-start-1 grid-row-start-1 my-auto justify-between bg-white bg-opacity-30 p-3rem backdrop-blur-lg>
        <h3 text-center text-sm uppercase text="#0037A0">
          Muvaffaqiyatli murabbiylar ILMIY-METODIK MARKAZi
        </h3>
        <h1 text="#0037A0" text-3xl font-bold uppercase xl:text-5xl>
          Farmatsevtlar
          malakasini
          oshirish
        </h1>
        <h2 text-2xl>
          Ochiq <span text-red>ONLAYN</span> kurslar
          platformasi
        </h2>
      </div>

      <div flex="~" grid-col-start-1 grid-row-start-1 justify-center>
        <img scale-95 xl:scale-100 src="/images/hamshira.png" alt="" srcset="">
      </div>
      <div z-20 grid-col-start-1 grid-row-start-1 self-center justify-self-end>
        <LoginCard />
      </div>
    </div>
  </div>
</template>

<style>
.herobg_home {
    background-image: url('/images/c3.png');
}
</style>
