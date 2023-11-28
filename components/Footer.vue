<template>
  <div text="white" flex="~ col" bg="#0037A0" p-1em class="">
    <div flex="~ col" mx-auto mb-1em items-start gap-4 container>
      <div rounded-full bg-white p-2>
        <img xs:w-auto w-13rem src="/logo.png" alt="Pharma-Study web sahifasi" srcset="">
      </div>
      <div flex="~ col wrap gap-1em" md:flex="~ row" w-full md:justify-between>
        <div flex="~ col" w-20rem text-left xl:text-1em>
          <p text="1em">
            Bizning maqsadimiz - Pharmastudy ni hamma uchun haqiqatandan ham samarali va yoqimli faoliyatga aylantirish. Bizga qo'shiling!
          </p>
        </div>
        <div>
          <span font-bold>Havolalar</span>
          <ul>
            <li>Biz haqimizda</li>
            <li>Kurslar</li>
            <li>Modullar</li>
            <li>O’qituvchilar</li>
            <li>Webinarlar</li>
          </ul>
        </div>

        <div>
          <span font-bold>Biz bilan aloqa</span>
          <ul>
            <li flex="~ gap-1" items-center>
              <div i-carbon-phone /> +998 33 099-00-01
            </li>
            <li flex="~ gap-1" items-center>
              <div i-carbon-email /> info@pharmastudy.uz
            </li>
          </ul>
        </div>
        <div>
          <div flex="~ gap-1" items-center>
            <div i-carbon-location /> <span>
              Tashkent, Khorezm, Urgench
              Barcha filiallar
            </span>
          </div>
        </div>
      </div>
    </div>

    <div flex="~ gap-5" mx-auto border-t-1 py-5 container>
      <span>Copyright 2023 | All Rights Reserved </span>
      <div flex="~ gap-3" items-center>
        <img w-5 src="Icons/Facebook/Facebook.png" alt="" srcset="">
        <img w-5 src="Icons/Twitter/twitter.png" alt="" srcset="">
        <img w-5 src="Icons/Instagram/Instagram.png" alt="" srcset="">
      </div>
    </div>
  </div>
</template>
