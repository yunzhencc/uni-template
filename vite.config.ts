import Uni from '@uni-helper/plugin-uni'
import UniHelperComponents from '@uni-helper/vite-plugin-uni-components'
import { WotResolver } from '@uni-helper/vite-plugin-uni-components/resolvers'
import UniHelperLayouts from '@uni-helper/vite-plugin-uni-layouts'
import UniHelperManifest from '@uni-helper/vite-plugin-uni-manifest'
import UniHelperPages from '@uni-helper/vite-plugin-uni-pages'
import Optimization from '@uni-ku/bundle-optimizer'
import UniKuRoot from '@uni-ku/root'
import { UniEchartsResolver } from 'uni-echarts/resolver'
import { UniEcharts } from 'uni-echarts/vite'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import UniPolyfill from 'vite-plugin-uni-polyfill'

export default defineConfig({
  plugins: [
    UniHelperManifest(),
    UniHelperPages({
      dts: 'src/types/auto/uni-pages.d.ts',
    }),
    UniHelperLayouts(),
    UniHelperComponents({
      resolvers: [
        WotResolver(),
        UniEchartsResolver(),
      ],
      dts: 'src/types/auto/components.d.ts',
      directoryAsNamespace: true,
    }),
    UniKuRoot(),
    UniEcharts(),
    Uni(),
    UniPolyfill(),
    Optimization({
      logger: false,
      dts: {
        'async-import': {
          path: 'src/types/auto/async-import.d.ts',
        },
        'async-component': {
          path: 'src/types/auto/async-component.d.ts',
        },
      },
    }),
    AutoImport({
      imports: ['vue', '@vueuse/core', 'uni-app'],
      dts: 'src/types/auto/auto-imports.d.ts',
      dirs: ['src/composables', 'src/stores', 'src/utils'],
      vueTemplate: true,
    }),
    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    UnoCSS(),
  ],
})
