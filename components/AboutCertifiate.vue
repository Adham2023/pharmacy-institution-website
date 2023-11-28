<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)

const show_template = computed(() => breakpoints.greaterOrEqual('lg'))
</script>

<template>
  <div flex="~" mx-auto justify-between p-6 text="#0037A0" container>
    <div id="texts" flex="~ gap-5 col">
      <h2 text-5xl>
        Yakuniy baholash va sertifikatsiya
      </h2>
      <p>
        Tugatilgan kursga muvofiq davlat na’munasidagi sertifikat avtomatik generatsiya bo‘ladi va onlayn bazaga kiritiladi.
      </p>
      <p>
        Shu bilan birga o‘zlashtirish va malaka oshirish yakunlari bo‘yicha hamda kiritilgan ma’lumotlardan kelib chiqib oy va yil kesimida, viloyatlar kesimida reyting shakllanadi.
      </p>
      <div my-auto flex="~ col gap-5" text-black>
        <div flex="~ gap-3">
          <img w-5 src="/images/point-icon.png"> <span>Davlat na’munasidagi sertifikat</span>
        </div>
        <div flex="~ gap-3">
          <img w-5 src="/images/point-icon.png"> <span>QR-kod yordamida xavfsizlikni ta’minlash</span>
        </div>
        <div flex="~ gap-3">
          <img w-5 src="/images/point-icon.png"> <span>Kredit modullar kesimida baholash</span>
        </div>
      </div>
    </div>
    <div>
      <img v-if="show_template.value" w-full src="/images/certificate template.png" alt="" srcset="">
    </div>
  </div>
</template>
