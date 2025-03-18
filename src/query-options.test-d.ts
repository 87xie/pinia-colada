import { describe, it } from 'vitest'
import type { App } from 'vue'
import { PiniaColada } from './pinia-colada'

declare const app: App

describe('PiniaColada types', () => {
  it('works', () => {
    // @ts-expect-error: FIXME: can this be fixed?
    app.use(PiniaColada)
    app.use(PiniaColada, {})
  })

  it('allows global types', () => {
    app.use(PiniaColada, {
      enabled: true,
      refetchOnMount: true,
      refetchOnReconnect: true,
    })
  })
})
