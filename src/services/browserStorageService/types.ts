export interface BrowserStorage {
  setBuilds: <T>(value: T) => Promise<void>
  getBuilds: <T>() => Promise<T | null>
}
