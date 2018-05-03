<template>
 <transition name="slide">
    <div class="page">
    <AppHeader> </AppHeader>
        进度表
    </div>
 </transition>
</template>

<script>
export default {
  name: 'progressForm'
}
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}
.slide-enter,
.slide-leave-to {
  transform: translate3d(100%, 0, 0);
}
.page {
  padding-top: 40px;
  background: #fff;
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
