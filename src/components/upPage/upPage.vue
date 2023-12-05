<template>
    <div>
        <div class="content">
            <p>Digital-Twin Service Platform</p>
            <vProgressbar :width="200" :progress="progressNum" :strokeWidth="10" :showInfo="false"></vProgressbar>
            <p>Version 1.0</p>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
let progressNum = ref(0)
let numJiaTimer = null
const numJia = function () {
    numJiaTimer = setInterval(() => {
        progressNum.value++
        if (progressNum.value >= 100) {
            progressNum.value = 100
            clearInterval(numJiaTimer)
        }
    }, 30);
}
onMounted(() => {
    // setInterval(() => {
    numJia()
    // }, 30);
})
// const Random = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
</script>

<style lang="less">
// @import "@/assets/less/uppage.less";
.content {
    position: fixed;
    top: 55%;
    left: 50%;
    width: 12.5rem;
    height: 6.25rem;
    transform: translate(-50%, -50%);
    // border: 1px solid red;

    p:nth-of-type(1) {
        font-size: .375rem;
        font-weight: bold;
        text-align: center;
        color: #a19c9c;
        margin-bottom: 1.45rem;
    }

    p:nth-of-type(2) {
        font-size: .175rem;
        font-weight: bold;
        text-align: center;
        color: #a19c9c;
        // margin-bottom: 1.75rem;
    }
}
</style>