<script setup lang='ts'>

</script>

<template>
  <div class="p rounded-md bg-black p-2" flex justify-center>
    <div id="cnae" overflow-hidden class="aspect-[2/3] w-full border-[0.25rem] b-gray-600 md:w-290px">
      <img h-full w-full object-cover src="https://images.unsplash.com/photo-1520210599173-ba8e9fc44395?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80">
    </div>
    <svg style="display: none;">
      <defs>
        <filter id="cnae-n">
          <feTurbulence
            baseFrequency="0.7,0.8"
            seed="0"
            type="fractalNoise"
            result="static4"
          >
            <animate
              attributeName="seed"
              values="0;100"
              dur="800ms"
              repeatCount="1"
              begin="cnae.mouseenter"
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="static4" scale="0">
            <animate
              attributeName="scale"
              values="0;40;0"
              dur="800ms"
              repeatCount="1"
              begin="cnae.mouseenter"
            />
          </feDisplacementMap>
        </filter>
      </defs>
    </svg>
  </div>
</template>

<style>
 @keyframes pulse {
  from, to {
    scale: 1;
  }

  50% {
    scale: 1.08
  }
 }

 #cnae:hover > img {
  animation: pulse 800ms ease-in-out;
 }

 #cnae > img {
  filter: url(#cnae-n);
 }
</style>
