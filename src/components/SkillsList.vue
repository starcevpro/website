<template>
  <div class="flex flex-wrap gap-5">
    <a
      v-for="skill in skills"
      :key="skill.id"
      class="skill"
      :class="{ 'animate-wave': isAnimating }"
      :style="{ animationDelay: `${skill.id * 200}ms` }"
      :href="skill.link"
      target="_blank"
      v-tooltip="skill.name"
    >
      <img :src="skill.icon" alt="" />
    </a>
  </div>
</template>

<script>
function getImageUrl(name) {
  return new URL(`../assets/skills/${name}`, import.meta.url).href
}

export default {
  name: 'SkillsList',
  data() {
    return {
      skills: [
        { id: 1, name: 'Laravel', icon: getImageUrl('laravel.svg'), link: "https://laravel.com/" },
        { id: 2, name: 'Livewire', icon: getImageUrl('livewire.svg'), link: "https://livewire.laravel.com/" },
        { id: 3, name: 'Vue', icon: getImageUrl('vue.svg'), link: "https://vuejs.org/" },
        { id: 4, name: 'SASS', icon: getImageUrl('sass.svg'), link: "https://sass-lang.com/" },
        { id: 5, name: 'Tailwind', icon: getImageUrl('tailwind.svg'), link: "https://tailwindcss.com/" },
        { id: 6, name: 'Docker', icon: getImageUrl('docker.svg'), link: "https://www.docker.com/" },
        { id: 7, name: 'Python', icon: getImageUrl('python.svg'), link: "https://www.python.org/" },
      ],
      isAnimating: false,
      animationInterval: null
    }
  },
  mounted() {
    this.startWaveAnimation();
  },
  beforeUnmount() {
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
    }
  },
  methods: {
    startWaveAnimation() {
      // Запускаем первую анимацию
      this.isAnimating = true;

      // Устанавливаем интервал для повторения анимации каждые 5 секунд
      this.animationInterval = setInterval(() => {
        this.isAnimating = false;
        // Небольшая задержка перед повторным запуском анимации
        setTimeout(() => {
          this.isAnimating = true;
        }, 100);
      }, 5000); // 5000ms = 5 секунд между анимациями
    }
  }
}
</script>

<style scoped>
.skill {
  width: 59px;
  height: 59px;
  left: 314px;
  top: 400px;
  background: #26344C;
  border: 1px solid #2F405D;
  border-radius: 10px;
  @apply flex items-center justify-center
  transition-transform duration-200 rounded-xl bg-base-200 border-2 border-base-100;
}

@keyframes wave {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
  100% {
    transform: translateY(0);
  }
}

.animate-wave {
  animation: wave 1s ease-in-out;
}

/* Отключаем hover эффект во время анимации волны */
.animate-wave:hover {
  transform: none;
}
</style>
