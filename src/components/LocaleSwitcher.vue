<template>
  <div class="dropdown dropdown-top dropdown-end md:dropdown-right dropdown-hover">
    <label tabindex="0" class="btn btn-ghost">
      <span v-if="currentLocale === 'ru'">🇷🇺</span>
      <span v-else-if="currentLocale === 'en'">🇬🇧</span>
      <span v-else-if="currentLocale === 'de'">🇩🇪</span>
    </label>

    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
      <li v-for="lang in availableLocales" :key="lang.code">
        <a
          @click="changeLanguage(lang.code)"
          :class="{ 'active': currentLocale === lang.code }"
        >
          <span class="mr-2">{{ lang.flag }}</span>
          {{ lang.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { locale } = useI18n()

const availableLocales = [
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
]

const currentLocale = computed(() => locale.value)

const changeLanguage = (langCode) => {
  locale.value = langCode

  localStorage.setItem('user-locale', langCode)
}
</script>

<style scoped>
.dropdown-content {
  z-index: 1000;
}

.active {
  background-color: hsl(var(--p) / 0.1);
}
</style>
