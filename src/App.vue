<template>
  <div :class="['min-h-screen']">
    <div :class="['relative', 'min-h-screen transition-colors']">
      <BlurredSphere />
      <Navbar :isMobile="isMobile" />

      <!-- Основной контент -->
      <main
        :class="[!isMobile ? 'ml-16' : 'ml-0', 'relative overflow-hidden max-w-screen']"
      >
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { watch } from 'vue'
import BlurredSphere from '@/components/BlurredSphere.vue'
import Navbar from '@/components/AppNavbar.vue'

export default {
  name: 'App',
  components: { BlurredSphere, Navbar },
  data() {
    return {
      isMobile: false,
      imagePosition: null
    }
  },
  watch: {
    imagePosition: {
      handler(newPosition) {
        if (newPosition !== null) {
          document.documentElement.style.setProperty('--image-position', `${newPosition}px`)
        }
      },
      immediate: true
    }
  },
  created() {
    const { t, locale } = useI18n()

    this.$mitt.on('image-position-changed', (position) => {
      this.imagePosition = position
    })

    const updateTitle = () => {
      document.title = t('title')
    }

    watch(locale, updateTitle)
    updateTitle()

    this.checkDevice()
    window.addEventListener('resize', this.checkDevice)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkDevice)
    this.$mitt.off('image-position-changed')
  },
  methods: {
    checkDevice() {
      this.isMobile = window.innerWidth <= 768
    },
  },
}
</script>

<style>
:root {
  --image-position: 0px;
}

:root[data-theme="light"] {
  background: linear-gradient(
    to right,
    transparent var(--image-position),
    #1E293B var(--image-position)
  ) !important;
}
</style>
