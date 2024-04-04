<template>
  <div id="backdrop">
    <div class="text-center loading">
      <div class="spinner-border" role="status">
        <span class="sr-only"></span>
      </div>
    </div>
  </div>
</template>

<style>
.text-center {
  width: 65%;
  position: relative;
  top: 43%;
  left: 0;
}

.spinner-border {
  display: block;
  position: fixed;
  top: calc(50% - (58px / 2));
  right: calc(50% - (58px / 2));
  color: blue;
}

#backdrop {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
  background-color: rgb(0, 0, 0, 0.2);
}
</style>
