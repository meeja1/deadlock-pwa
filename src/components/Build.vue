<script setup lang="ts">

import BuildSection from "@/components/BuildSection/BuildSection.vue";
import {useBuildsStore} from "@/stores/builds";

const buildStore = useBuildsStore()
</script>

<template>
  <template v-if="buildStore.activeBuild?.sections?.length">

    <BuildSection
      v-for="{ id, name, items } of buildStore.activeBuild.sections"
      :key="id"
      :name
      :items
      :isEdit="buildStore.activeBuild.isEdit"
    />
  </template>
</template>

<style scoped>

</style>