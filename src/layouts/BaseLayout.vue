<script setup lang="ts">
import type { TabsConfig } from '@/types/tabsConfig'
import Button from 'primevue/button'
import ScrollPanel from 'primevue/scrollpanel'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import Tabs from 'primevue/tabs'
import { onMounted } from 'vue'
import Build from '@/components/Build.vue'
import Item from '@/components/Item.vue'
import { itemSlotType } from '@/constants/itemSlotType'
import { useBuildsStore } from '@/stores/builds'
import { useItemsStore } from '@/stores/items'

const config: TabsConfig[] = [
  {
    tab: 'https://thumbs.dreamstime.com/b/google-407571048.jpg',
    value: '0',
  },
  {
    tab: 'https://deadlock.wiki/images/thumb/a/aa/Weapon_Icon.png/50px-Weapon_Icon.png',
    value: '1',
    type: itemSlotType.weapon,
  },
  {
    tab: 'https://deadlock.wiki/images/thumb/b/bf/Vitality_Icon.png/50px-Vitality_Icon.png',
    value: '2',
    type: itemSlotType.vitality,
  },
  {
    tab: 'https://deadlock.wiki/images/6/66/Spirit_icon.png',
    value: '3',
    type: itemSlotType.spirit,
  },
]

const itemsStore = useItemsStore()
const buildsStore = useBuildsStore()
onMounted(() => {
  buildsStore.getBuilds()
  itemsStore.getItems()
})
</script>

<template>
  <main class="app">
    <div class="builds">
      <Button class="builds__button" @click="buildsStore.createBuild()">
        add
      </Button>
      <ScrollPanel
        v-if="buildsStore.builds?.length"
        style="height: 299px"
      >
        <div class="builds__items">
          <Button
            v-for="build in buildsStore.builds"
            :key="build.id"
            class="builds__button"
            @click="buildsStore.setActiveBuild(build)"
          >
            {{ build.name }}
          </Button>
        </div>
      </ScrollPanel>
    </div>
    <Tabs :value="config[1].value">
      <TabList>
        <Tab
          v-for="tab of config"
          :key="tab.tab"
          :value="tab.value"
        >
          <img :src="tab.tab" alt="">
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel
          v-for="tab of config"
          :key="tab.tab"
          :value="tab.value"
        >
          <template v-if="buildsStore.activeBuild && !tab.type">
            <Build />
          </template>
          <template v-else>
            <Item
              v-for="item in itemsStore.getItemsByType(tab.type)"
              :id="item.id"
              :key="item.id"
              :title="item.title"
              :type="item.type"
              :image="item.image"
            />
          </template>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </main>
</template>

<style scoped>

</style>
