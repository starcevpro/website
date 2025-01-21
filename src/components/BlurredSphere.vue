<template>
  <div class="blur-sphere" />
</template>

<script>
export default {
  name: 'BlurredSphere'
}
</script>

<style lang="scss" scoped>
.blur-sphere {
  position: absolute;
  width: 70%;
  height: 20%;
  left: 0;
  top: -10%;

  background: radial-gradient(
      ellipse at center,
      rgba(233, 41, 59, 0.4) 70%,
      rgba(233, 41, 59, 0.25) 45%,
      rgba(233, 41, 59, 0.1) 70%,
      rgba(233, 41, 59, 0.02) 85%,
      rgba(233, 41, 59, 0) 100%
  );

  filter: blur(200px);
  border: none;
  outline: none;

  @apply mix-blend-normal dark:mix-blend-screen;

  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  perspective: 1000;
  -webkit-perspective: 1000;
}

.blur-sphere::after {
  content: '';
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  background: inherit;
  filter: blur(20px);
  opacity: 0.5;
}
</style>
