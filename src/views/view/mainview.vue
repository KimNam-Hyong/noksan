<template>
  <div class="mainList">
    <h3>Main View Settings</h3>
    <div class="content">
      <div class="top">
        <p>Initial Center Location:</p>
        <div style="width: 3.8rem">
          <span>LAT:123</span>
          <span>LNG:123</span>
        </div>
        <div class="icon">
          <span @click="isShow" class="iconfont icon-M_dingding2"></span>
        </div>
      </div>
      <div class="bottom">
        <p>Initial Zoom Level:</p>
        <van-slider v-model="value" active-color="#999">
          <template #button>
            <div class="custom-button">{{ value }}</div>
          </template>
        </van-slider>
        <div class="icon">
          <span>{{ value }}</span>
        </div>
      </div>
    </div>
    <div class="dialog" v-if="dialog">
      <div class="top">
        <div class="videoa"></div>
        <div class="text">
          <p>LAT</p>
          <p>1234</p>
          <p>Lng</p>
          <p>1234</p>
        </div>
      </div>
      <div class="bottom">
        <el-button plain @click="cancel">Cancel</el-button>
        <el-button plain @click="cancel">OK</el-button>
      </div>
    </div>
  </div>
</template >
<script lang="ts" setup>
import { ref } from "vue";
let isShow = function () {
  dialog.value = true;
};
let cancel = function () {
  dialog.value = false;
};
let dialog = ref(false);
const value = ref(30);
</script>
<style scoped lang='less'>
.mainList {
  position: relative;
  // border-top: 2px solid red;
  // border-bottom: 2px solid red;
  // width: 100%;
  // text-align: center;
  .dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 6.75rem;
    height: 3.95rem;
    background-color: #ccc;
    border-radius: 0.175rem;
    .top {
      display: flex;
      .videoa {
        width: 5rem;
        height: 3rem;
        margin: 10px;
        background: #fff;
      }
      .text {
        p {
          color: #fff;
          line-height: 0.3rem;
          font-size: 0.175rem;
          margin: 0 0.25rem;
        }
        p:nth-child(1) {
          margin-top: 0.775rem;
        }
        p:nth-child(3) {
          margin-top: 0.375rem;
        }
      }
    }
    .bottom {
      // margin:0 25%;
      text-align: center;
      .el-button {
        width: 1.2rem;
      }
    }
  }
  h3 {
    text-align: center;
    font-size: 0.315rem;
    line-height: 2.75rem;
    font-weight: normal;
  }
  .content {
    position: absolute;
    top: 6rem;
    // width: 60%;
    // margin: 0 auto;
    // width: 100px;
    height: 6rem;
    border-top: 2px solid #ccc;
    border-bottom: 2px solid #ccc;
    .top {
      display: flex;
      justify-content: space-around;
      margin-top: 1.25rem;
      margin-right: -0.6rem;
      color: #999;
      p {
        font-size: 0.2rem;
      }
      span {
        margin: 0 0.625rem;
      }
      .icon span {
        font-size: 0.3125rem;
        cursor: pointer;
      }
    }
    .bottom {
      display: flex;
      justify-content: space-around;
      margin-top: 1.25rem;
      color: #999;
      p {
        font-size: 0.2rem;
      }
      .custom-button {
        width: 26px;
        color: #fff;
        font-size: 10px;
        line-height: 18px;
        text-align: center;
        background-color: #999;
        border-radius: 100px;
      }
      .van-slider {
        width: 5rem;
      }
    }
  }
}
</style>

