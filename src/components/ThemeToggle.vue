<template>
  <Icon
    v-if="preferredTheme === 'dark'"
    @click="switchTheme('light')"
    icon="radix-icons:moon"
    width="22"
    role="button"
  />
  <Icon
    v-else
    @click="switchTheme('dark')"
    icon="radix-icons:sun"
    width="22"
    role="button"
  />
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
const preferredTheme = ref(localStorage.getItem('theme') || getTheme());

// Initial theme switch
switchTheme(preferredTheme.value);

// theme change event listener
prefersDarkMode.addEventListener('change', () => {
  switchTheme(getTheme());
});

function getTheme() {
  return prefersDarkMode.matches ? 'dark' : 'light';
}
function switchTheme(theme) {
  const body = document.querySelector('body');
  body.setAttribute('data-bs-theme', theme);
  localStorage.setItem('theme', theme);
  preferredTheme.value = theme;
}
</script>

<style lang="scss" scoped></style>
