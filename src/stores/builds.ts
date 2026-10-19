import type { IBuild } from '@/models/build/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { BuildImpl } from '@/models/build/buildImpl'
import { browserStorageService } from '@/services/browserStorageService/browserStorageService'

export const useBuildsStore = defineStore('builds', () => {
  const builds = ref<IBuild[]>([])
  const activeBuild = ref<IBuild>()

  const setActiveBuild = (build: IBuild) => {
    activeBuild.value = build
  }

  const getBuilds = async () => {
    const data = await browserStorageService.getBuilds<BuildImpl[]>()
    if (!data)
      return
    console.log(data, 'data')
    builds.value = data.map(build => new BuildImpl(build.order, build.name, build.sections))
    setActiveBuild(builds.value[0])
  }

  const createBuild = () => {
    const newBuild = new BuildImpl(builds.value?.length || 0)
    builds.value.push(newBuild)
    setActiveBuild(newBuild)
  }

  return {
    builds,
    getBuilds,
    activeBuild,
    setActiveBuild,
    createBuild,
  }
})
