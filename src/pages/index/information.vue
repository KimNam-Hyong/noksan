<template>
    <div style="width: 500px; height: 500px; background-color: #00007d; margin: 50px auto; padding: 100px ;">
        <div style="margin: auto;margin-left: 30px;">
            <div class="box">
                <img style="width: 100%; height: 100%;" src="../../assets/image/road/58039b298b7e10527563dfd4eeea417.png"
                    alt="">
            </div>
            <el-table :data="tableData" :border="parentBorder" style="width: 400px; ">
                <el-table-column type="expand">
                    <template #default="props">
                        <div m="1">
                            <p m="t-0 b-2" class="nav"></p>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="" prop="date">

                </el-table-column>
                
            </el-table>
        </div>

    </div>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue'

const parentBorder = ref(false)
const childBorder = ref(false)
const tableData = [
    {
        date: 'ECP1 Main Gate',

    },
    {
        date: 'EOC Main Gate',

    },
    {
        date: 'Warehiuse Main Gate',

    },
    {
        date: 'FCC Main Entrance & Exit',

    },
    {
        date: 'Yabani Bridge Check Point',

    },

]
</script>

<style scoped lang="less">
.nav {
    width: 400px;
    height: 200px;
    background-color: #afadab;
    padding-top: 0;
}

.box {

    z-index: 9999;
    width: 400px;
    height: 40px;
    // background-color: pink;
    text-align: center;
    line-height: 40px;
}

/deep/ .el-table tr {
    background: #12c5d0 !important;
    // border-radius: 5px;
    height: 40px;
}

.el-table__row {
    background-color: pink !important;
}

/deep/ .el-table__header-wrapper {
    height: 2px;
}

/deep/ .el-table__body .el-table__row:hover {
    background-color: pink !important;
    font-size: 20px !important;
}

/deep/ .el-table {
    --el-table-row-hover-bg-color: none;
}
/deep/ .el-table .el-table__cell {
    padding: 0;
}
</style>
  