<template>
  <button
    @click="toggleTheme"
    class="btn btn-ghost"
    :title="isDark ? 'Включить светлую тему' : 'Включить тёмную тему'"
  >
    <!-- Иконка солнца для светлой темы -->
    <SunIcon v-if="isDark" class="size-5 text-primary-500" />
    <!-- Иконка луны для темной темы -->
    <MoonIcon v-else class="size-5 text-primary-500" />
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { MoonIcon, SunIcon } from '@heroicons/vue/24/solid'

const isDark = ref(false)

// Настройки тем DaisyUI
const LIGHT_THEME = 'light'
const DARK_THEME = 'dark'

const updateTheme = (dark) => {
  isDark.value = dark

  document.documentElement.classList.toggle('dark', dark)
  document.documentElement.setAttribute('data-theme', dark ? DARK_THEME : LIGHT_THEME)
  localStorage.setItem('theme', dark ? 'dark' : 'light')
}

const toggleTheme = () => {
  updateTheme(!isDark.value)
}

const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)')
const handleSystemThemeChange = (e) => {
  if (!localStorage.getItem('theme')) {
    updateTheme(e.matches)
  }
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    updateTheme(savedTheme === 'dark')
  } else {
    updateTheme(systemDarkMode.matches)
  }

  systemDarkMode.addEventListener('change', handleSystemThemeChange)
})

// Очищаем слушатель при размонтировании
onUnmounted(() => {
  systemDarkMode.removeEventListener('change', handleSystemThemeChange)
})
</script>
