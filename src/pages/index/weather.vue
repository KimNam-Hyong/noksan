<template>
    <!-- <div>
        Weather
       
    </div> -->

    <div class="box">
        <div class="left">
            <div class="head">
                <div class="modedf"><el-icon>
                        <UserFilled />
                    </el-icon></div>
                <div style="margin-bottom: 0.2rem;">User Name</div>
                <div>User Log In Data/Time</div>
                <div class="question"><el-icon>
                        <Warning />
                    </el-icon></div>
                <div style="margin-top: 1rem;margin-bottom: 0.5rem;" @click="manu1">Menu 01</div>
                <div style="margin-top: 1rem;margin-bottom: 0.5rem;">Menu 02</div>
                <div style="margin-top: 1rem;margin-bottom: 0.5rem;">Menu 03</div>
                <div style="margin-top: 1rem;margin-bottom: 0.5rem;">Menu 04</div>
                <div style="margin-top: 1rem;margin-bottom: 0.5rem;">Menu 05</div>
            </div>


        </div>
        <div class="right">
            <div v-show="MenuOne" style="padding: 1rem;">
                <div>Sastem Operation Ratio</div>
                <div style="display: flex; justify-content: space-between;margin-top: 1rem;">
                    <div class="echartsleft left1">
                        <div>AI 3D Camera</div>
                    </div>
                    <div class="echartsmiddel left1"> 
                        <div>AI 3D Camera</div>
                    </div>
                    <div class="echartsright left1">
                        <div>AI 3D Camera</div>
                    </div>
                </div>

            </div>
            <!-- <div class="top"></div>
            <div class="bottom"></div> -->
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

// 点击menu01
const MenuOne = ref(true)
const manu1 = () => {
    // MenuOne.value = false
}
</script>
<style scoped lang="less">
.box {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;

    .left {
        width: 4rem;
        height: 100vh;
        background-color: #f2f2f2;
        border-right: 1px solid #000;
        margin: 0 auto;

        .head {
            text-align: center;
            line-height: 1.5rem;

            .modedf {
                width: 1.5rem;
                height: 1.5rem;
                border-radius: 50%;
                border: 1px solid #000;
                margin: 1rem auto 0.1rem;

                /deep/ .el-icon {
                    font-size: 1rem;
                    margin-top: 0.2rem;
                }

            }

            .question {
                font-size: 0.3rem;
                margin-top: 0.2rem;
            }

        }
    }

    .right {
        width: calc(100% - 4rem);
        height: 100vh;
        background-color: #f2f2f2;
        // padding: 0.1rem;
        padding: 0 0.3rem;

        .left1 {
            width: 30%;
            height: 6rem;
            background-color: aqua;
            text-align: center;
        }
        .echartsleft {
          

        }

        .echartsmiddel {
          
        }

        .echartsright {
        
        }

        // .top {
        //     width: 100%;
        //     height: 48%;

        //     border-bottom: 1px dashed #000;
        //     margin-top: 0.2rem;
        // }

        // .bottom {
        //     width: 100%;
        //     height: 48%;

        // }
    }
}</style>