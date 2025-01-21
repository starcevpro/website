<template>
  <aside
    v-show="!isMobile"
    class="fixed top-0 left-0 h-screen w-16 py-3 transition-colors border-r border-black/10 dark:border-none bg-white/15 dark:bg-black/15 z-10"
  >
    <nav class="flex flex-col items-center gap-3 justify-between h-full">
      <div>
        <img src="@/assets/logo.svg" alt="" class="min-w-3/5 mx-auto mt-3" />
      </div>

      <div class="flex flex-col items-center gap-3">
        <LocaleSwitcher />
        <ThemeSwitcher />
      </div>
    </nav>
  </aside>

  <nav
    v-show="isMobile"
    :class="[
      'fixed bottom-0 left-0 right-0 border-t border-black/5 dark:border-none bg-base-200 shadow-lg z-10',
      'transition-transform duration-300',
      { 'translate-y-full': shouldHideNavbar }
    ]"
  >
    <div class="flex flex-row items-center gap-3 justify-between px-4 py-2">
      <img src="@/assets/logo.svg" alt="" class="m" />
      <div class="flex gap-3">
        <LocaleSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  </nav>
</template>

<script>
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'
import LocaleSwitcher from '@/components/LocaleSwitcher.vue'

export default {
  name: 'AppNavbar',
  components: { LocaleSwitcher, ThemeSwitcher },
  props: {
    isMobile: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentRoute: '/',
      menuItems: [
        { id: 1, title: 'Главная', link: '/', icon: 'i-home' },
        { id: 2, title: 'Проекты', link: '/projects', icon: 'i-projects' },
        { id: 3, title: 'Обо мне', link: '/about', icon: 'i-about' },
      ],
      navbarHidden: false,
      lastScrollPosition: 0,
      scrollThreshold: 60,
    }
  },
  computed: {
    shouldHideNavbar() {
      return this.navbarHidden
    }
  },
  mounted() {
    if (this.isMobile) {
      window.addEventListener('scroll', this.handleScroll, { passive: true })
    }
  },
  beforeUnmount() {
    if (this.isMobile) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  },
  methods: {
    handleScroll() {
      const currentScrollPosition = window.scrollY

      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < this.scrollThreshold) {
        return
      }

      this.navbarHidden = currentScrollPosition > this.lastScrollPosition

      this.lastScrollPosition = currentScrollPosition
    },
  },
}
</script>
