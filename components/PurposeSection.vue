<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)

const show_template = computed(() => breakpoints.greaterOrEqual('lg'))
</script>

<template>
  <div bg="#0037A0" grid grid-cols="[1/2_auto]" grid-rows-1 text-white>
    <div v-if="show_template.value" grid-col-span-1 grid-col-start-2 grid-row-start-1>
      <img v-if="show_template.value" h-full w-full object-cover src="/images/aa.jpg" alt="" srcset="">
    </div>
    <div grid-col-span-2 flex="~" grid-col-start-1 grid-row-start-1 mx-auto container>
      <div id="texts" bg="#0037A0" flex="~ gap-5 col" w-full p-6 lg:w="1/2">
        <h2 text-3xl>
          SAYTNING MAQSADI
        </h2>
        <p>
          Uzluksiz malaka oshirish imkonini yaratadi hamda dual ta’lim tamoyillari asosida ta’lim berayotgan professional ta’lim muassasalari rahbar va pedagog xodimlarining onlayn metodik ta’minotini amalga oshirish, ularning masofaviy malaka oshirish kurslarida mustaqil ta’lim olishlari uchun xizmat qiladi.
        </p>
        <div my-auto flex="~ col gap-5" text-white>
          <div flex="~ gap-3" items-center>
            <img h-5 w-5 src="/images/p1.png"> <span>Foydalanuvchilarning shaxsiy ma’lumotlari asosida ularga login parol yaratish, mazkur login parol yaratish asosida ular shaxsiy kabinetiga kirib malaka oshirishini ta’minlash</span>
          </div>
          <div flex="~ gap-3" items-center>
            <img h-5 w-5 src="/images/p2.png"> <span>Ma’lumotlarni uzoq vaqt saqlash, shaxsiy ma’lumotlar va ma’lumotlar bazasi xavfsizligini ta’minlash</span>
          </div>
          <div flex="~ gap-3" items-center>
            <img h-5 w-5 src="/images/p3.png"> <span>Uzluksiz va mustaqil vaqt belgilab malaka oshirishni ta’minlash</span>
          </div>
          <div flex="~ gap-3" items-center>
            <img h-5 w-5 src="/images/p4.png"> <span>Respublika bo‘yicha farmatsevtika tizimida faoliyat yuritayotgan rahbar va ishchi xodimlarning elektron bazasini shakllantirish</span>
          </div>
          <div flex="~ gap-3" items-center>
            <img h-5 w-5 src="/images/p6.png"> <span>Foydalanuvchilarning o‘zaro bir birlari bilan doimiy onlayn muloqotini tashkil etish</span>
          </div>
          <div flex="~ gap-3" items-center>
            <img h-5 w-5 src="/images/p7.png"> <span>Dori-darmon mahsulotlarini qonuniy rasmiylashtirish va ro‘yhatga olish</span>
          </div>
        </div>
      </div>
      <div text-transparent>
        a
      </div>
    </div>
  </div>
</template>
