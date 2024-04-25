<template>
    <div class="node" :style="{ backgroundColor: node.data.color }">
        <div class="title">{{ node.name }}</div>
        <div class="output" v-for="output in node.outputs.values()" :key="output.key">
            <div class="output-port" :style="{ backgroundColor: output.port.data.color }"></div>
            <div class="output-name">{{ output.key }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ReteNode } from 'rete-vue-render-plugin';

const node = props.node as ReteNode;
</script>

<style scoped>
.node {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title {
    font-size: 14px;
    font-weight: bold;
}

.output {
    display: flex;
    align-items: center;
}

.output-port {
    width: 20px;
    height: 20px;
    background-color: #ccc;
    border-radius: 50%;
    margin-right: 5px;
}

.output-name {
    font-size: 12px;
}
</style>