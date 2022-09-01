import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'

import extractorPug from '@unocss/extractor-pug'
import { extractorSplit } from '@unocss/core'

import {rules, extractorPugFactory} from "luss/dist/unocss-luss.js"
import {presetUno} from "unocss";

import path from 'path'

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
    ],
    resolve:{
        alias:{
            "src": path.join(__dirname, "src"),
        }
    },
    css:{
        preprocessorOptions: {

            // https://lesscss.org/usage/#less-options
            less: {
                javascriptEnabled: true,

                modifyVars: {

                    // 追加变量声明到 每个文件的末尾,覆盖变量
                    // "@formLabelColor":"#f00",

                    // 自动导入变量生命文件
                    hack: `true; @import (reference) "${path.resolve(__dirname, 'src/styles/config.less')}";`,
                },

            }
        }
    }
})
