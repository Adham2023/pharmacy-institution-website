<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)

const show_template = computed(() => breakpoints.greaterOrEqual('lg'))
</script>

<template>
  <div bg="#ebebeb" grid grid-cols="[1/2_auto]" grid-rows-1>
    <div v-if="show_template.value" grid-col-span-1 grid-col-start-2 grid-row-start-1>
      <img v-if="show_template.value" h-full w-full object-cover src="/images/cmp.png" alt="" srcset="">
    </div>
    <div grid-col-span-2 flex="~" grid-col-start-1 grid-row-start-1 mx-auto container>
      <div id="texts" bg="" flex="~ gap-5 col" w-full p-6 pb-0 lg:w="1/2">
        <h2 text-3xl text="#0037A0">
          Onlayn kutubxona
        </h2>
        <p>
          Onlayn kutubxonada farmatsevt pedagoglar tomonidan chiqarilgan kitoblar, maqolalar, ishlanmalar, tinglovchilar tomonidan yuklangan kitoblar hamda tizim administrator va moderator tomonidan yuklangan kitoblab qo‘yib boriladi. Bunda kitoblar yuklanganidan keyin sifat nazorati maqsadida tizim administrator ko‘rib chiqqandan keyin ommaviy ko‘rishga ruhsat e’tiladi. Eng ko‘p o‘qilgan kitoblar bo‘yicha filtrdan foydalanish. Kutubxonada qo‘shimcha quyidagi imkoniyatlar mavjud:
        </p>
        <div my-auto flex="~  gap-5 wrap">
          <div bg="#E5F4FF" flex="~ col gap-5" h-30 w-full items-center rounded-lg p-5 sm:w-30>
            <img h-5 src="/images/l1.png" alt="" srcset="">
            <div flex="~ col" text-xs>
              <span> ONLAYN</span>
              <span>
                KO‘RISH
              </span>
            </div>
          </div>
          <div bg="#E5F4FF" flex="~ col gap-5" h-30 w-full items-center rounded-lg p-5 sm:w-30>
            <img h-5 src="/images/l2.png" alt="" srcset="">
            <div flex="~ col" text-xs>
              <span> YUKLAB</span>
              <span>
                OLISH
              </span>
            </div>
          </div>
          <div bg="#E5F4FF" flex="~ col gap-5" h-30 w-full items-center rounded-lg p-5 sm:w-30>
            <img h-5 src="/images/l3.png" alt="" srcset="">
            <div flex="~ col" text-xs>
              <span> KITOB</span>
              <span>
                QO'SHISH
              </span>
            </div>
          </div>
          <div bg="#E5F4FF" flex="~ col gap-5" h-30 w-full items-center rounded-lg p-5 sm:w-40>
            <img h-5 src="/images/l4.png" alt="" srcset="">
            <div flex="~ col" text-xs>
              <span> QR KODI ORQALI</span>
              <span>
                TEZKOR OCHISH
              </span>
            </div>
          </div>
        </div>
      </div>
      <div text-transparent>
        a
      </div>
    </div>
  </div>
</template>
