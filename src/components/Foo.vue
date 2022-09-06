<script setup>
import {ref} from 'vue'
const message = ref('Hello Unocss')
</script>

<template lang="pug">
.Foo.bg-green.mt7.p05.fz1-8.bc-gray500.ho_bg-red300.son_cl-gray600.son_m0.son_fz12x.son_mt05
    | {{message}}
    p 本样式是由unocss生成, 右键+检查
</template>

<style lang="less">
@import "src/styles/mixins.less";
.Foo{
    border-style: solid;
}
</style>
