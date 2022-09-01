import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'

import extractorPug from '@unocss/extractor-pug'
import { extractorSplit } from '@unocss/core'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Unocss({
            extractors: [
                extractorPug(),
                extractorSplit,
            ],
        }),

    ]
})
