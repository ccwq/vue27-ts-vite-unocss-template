import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'

import extractorPug from '@unocss/extractor-pug'
import { extractorSplit } from '@unocss/core'

import {rules, extractorPugFactory} from "luss/dist/unocss-luss.js"
import {presetUno} from "unocss";


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Unocss({
            //@ts-ignore
            rules:[...rules,],
            presets:[presetUno()],
            extractors: [
                extractorPug(),
                extractorSplit,
            ],
        }),
    ]
})
