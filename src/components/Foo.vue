<script setup>
import {ref} from 'vue'
const message = ref('Foo:Hello World')
</script>

<template lang="pug">
.div.bg-green.mt10 {{message}}
</template>

<style lang="less">
@import "src/styles/mixins.less";
.div{
    border: 5px solid @formLabelColor;
}
</style>
