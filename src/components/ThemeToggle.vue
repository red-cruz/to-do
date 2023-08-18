<template>
  <div class="float-end">
    <div class="d-inline">
      <input type="checkbox" class="d-none" id="theme-switch-toggle" />
      <label for="theme-switch-toggle">
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
      </label>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
// system theme
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
const defaultTheme = prefersDarkMode.matches ? 'dark' : 'light';
const preferredTheme = ref(localStorage.getItem('theme') || defaultTheme);

switchTheme(preferredTheme.value);

function switchTheme(theme) {
  const body = document.querySelector('body');
  body.setAttribute('data-bs-theme', theme);
  localStorage.setItem('theme', theme);
  preferredTheme.value = theme;
}
</script>

<style lang="scss" scoped></style>
