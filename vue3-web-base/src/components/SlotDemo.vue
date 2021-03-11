<script setup>
const info = "插槽中的信息"
</script>
<template>
    <div class="slot-demo">
        <u><h2>插槽中的内容</h2></u>
        <slot></slot>
        <p><slot name="s1">插槽s1默认值</slot></p>
        <p><slot name="s2">插槽s2默认值</slot></p>
        <p><slot name="s3" :info="info"></slot></p>
        <p><slot name="s4" :info="info"></slot></p>
        <p><slot name="s5">插槽s5默认内容</slot></p>
        <p><slot name="s6">插槽s6默认内容</slot></p>
    </div>
</template>
<style scoped>
.slot-demo {
    background-color: lightcyan;
    margin:10px auto;
    color: blue;
}
</style>
