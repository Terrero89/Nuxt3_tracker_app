import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "auth"
declare module "/home/terrero/Documents/2- Web Development/Frontend/Vue-Nuxt/Nuxt3_tracker_app/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}