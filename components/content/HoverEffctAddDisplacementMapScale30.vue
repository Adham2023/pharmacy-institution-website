<script setup lang='ts'>
</script>

<template>
  <div class="p rounded-md bg-black p-2" flex justify-center>
    <div id="card-noise-2" overflow-hidden class="aspect-[2/3] w-full border-[0.25rem] b-gray-600 md:w-290px">
      <img h-full w-full object-cover src="https://images.unsplash.com/photo-1520210599173-ba8e9fc44395?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80">
    </div>
    <svg style="display: none;">
      <defs>
        <filter id="noisedisplacement30">
          <feTurbulence
            baseFrequency="0.7,0.8"
            seed="0"
            type="fractalNoise"
            result="static2"
          />
          <feDisplacementMap in="SourceGraphic" in2="static2" :scale="20" />
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

 #card-noise-2:hover > img {
  animation: pulse 800ms ease-in-out;
 }

 #card-noise-2 > img {
  filter: url(#noisedisplacement30);
 }
</style>
