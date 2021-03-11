<script setup>
import SlotDemo from '../components/SlotDemo.vue'
const mySlotNames = [ 's5', 's6']
</script>
<template>
    <div>
        <h1>Demo</h1>
        <el-button type="primary" round>Primary</el-button>

        <SlotDemo>
            <!-- 插槽默认值 -->
            <!-- <template v-slot:default>父组件插槽入口值</template> -->
            父组件插槽入口值
            <!-- 具名插槽 v-slot:s1 -->
            <template v-slot:s1>父组件<u>插槽s1</u>内容</template>
            *** <!-- 插槽默认值的一部分，如果使用 v-slot:default 这里会报错 -->
            <!-- 具名插槽 #s2 -->
            <template #s2>父组件<u>插槽s2</u>内容</template>
            <!-- 作用域插槽 info 是在插槽组件中定义， 这里没有对 info 解构 -->
            <template #s3="info">{{ info }}</template>
            <!-- 作用域插槽 info 是在插槽组件中定义， 这里对 info 解构 -->
            <template #s4="{info}">{{ info }}</template>
            <!-- 动态插槽名，这里结合 v-for 使用 -->
            <template v-for="slotName in mySlotNames" #[slotName] :key="slotName">
                动态插槽名的内容 {{ slotName }}
            </template>
        </SlotDemo>
    </div>
</template>
<style scoped>
div {
    background-color: lightgrey;
    border-radius: 5px;
    padding: 20px;
    min-width: 80px;
}
</style>
