<script lang="ts" setup>

</script>

<template>
</template>

<style>
html,
body {
  width: 427px;
  height: 400px;
  max-height: 400px;
  padding: 5px;
  margin: 0;
}

body {
  background-color: #988057;
}

.p-tabpanel {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding: 5px;
}

.p-tabs {
  gap: 5px;
   border: 1px solid red;
}
.p-tablist-tab-list {
  gap: 5px;
  /* background-color: #fff; */
  /* width: fit-content; */
  justify-content: center;
}

.p-tab {
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  /* background-color: #fff; */
}

.builds {
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: sticky;
  top: 0;
}

.builds__button {
  /* --p-button-primary-color: #fff; */
  --p-button-primary-background: #fff;
  --p-button-border-radius: 5px;
  --p-button-padding-y: .6rem;
  /* --p-button-padding-x: 6rem; */
  &:not(:disabled):hover {
    --p-button-primary-hover-background: rgba(255, 255, 255, 0.8);
    /* --p-button-primary-hover-border-color: ;
    --p-button-primary-hover-color: ; */
  }
}

.app {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 10px;
  position: relative;
  height: 100%;
}

.builds__item {
  padding: 2px;
  background-color: #fff;
  border-radius: 5px;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.p-tab img {
  width: 40px;
  overflow: hidden;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 1 / 1;
}

.builds__items {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
