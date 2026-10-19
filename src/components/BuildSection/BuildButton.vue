<script setup lang="ts">
import { computed } from 'vue'

interface Icons {
  arrowDown: string
  arrowUp: string
  delete: string
}

type ButtonVariant = keyof Icons

const { variant } = defineProps<{
  variant: ButtonVariant
}>()

const icons: Icons = {
  arrowDown: '<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000"><path d="M480-384 288-576h384L480-384Z"/></svg>',
  arrowUp: '<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000"><path d="m288-384 192-192 192 192H288Z"/></svg>',
  delete: '<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000"><path d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z"/></svg>',
}

const icon = computed(() => icons[variant])
</script>

<template>
  <button class="build-button" v-html="icon" />
</template>

<style scoped>
.build-button {
  border-radius: 3px;
  padding: 2px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(178, 187, 192);
}
</style>
