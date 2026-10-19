import type { BrowserStorage } from './types'
import browser from 'webextension-polyfill'
import { STORAGE_NAME } from './constants'

export class BrowserStorageService implements BrowserStorage {
  async setBuilds<T>(value: T): Promise<void> {
    const builds = await this.getBuilds()
    return browser.storage.local.set({ [STORAGE_NAME]: [value] })
  }

  async getBuilds<T>(): Promise<T | null> {
    const data = await browser.storage.local.get(STORAGE_NAME)

    return data[STORAGE_NAME] as (T | null)
  }
}

export const browserStorageService = new BrowserStorageService()
