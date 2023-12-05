<template>
    <div class="Index">
        <!-- <vHead></vHead> -->
        <!-- 二级路由出口 -->
        <div class="main">
            <router-view></router-view>
        </div>
    </div>
</template>
<script lang="ts" setup>

</script>
<style scoped>
.Index {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}

.main {
    /* position: fixed;
    top: .68rem;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ccc; */
}
</style>