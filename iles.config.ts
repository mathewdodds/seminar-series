import { defineConfig } from 'iles'
import windicss from 'vite-plugin-windicss'

export default defineConfig({
    vite: {
        plugins: [
          windicss(),
        ],
      },
})
