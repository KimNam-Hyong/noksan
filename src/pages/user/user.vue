<template>
  <div class="user">
    <!-- 用户后台 -->
    <div class="leftUser">
      <div class="top">
        <img src="../../assets/image/admin.png" alt="" />
      </div>
      <div class="userText">
        <h3>User Name</h3>
        <p>User Log In Data/Tiome</p>
        <span class="iconfont icon-gantanhaozhong"></span>
      </div>
      <ul class="menuList">
        <li
          v-for="item in MenuList"
          :key="item.id"
          @click="routerMain(item.id, $event)"
        >
          <!-- active-class="active" -->
          <span class="triangle iconfont icon-sanjiao3"></span>
          <!-- <router-link class="link" :to="item.router">{{
            item.text
          }}</router-link> -->
          <span class="link">{{ item.text }}</span>
          <!-- <p v-for="item1 in item.children" :key="item1.id">{{ item1.text }}</p> -->
        </li>
      </ul>
      <!-- 回首页 -->
      <button class="goindex" @click="gotoMain">Go to Main</button>
    </div>
    <div class="centrtUser" v-if="SecondaryMenu">
      <div class="centrText">
        <span class="iconfont icon-wenhao"></span>
        <h3>Description</h3>
        <p>Here is the description for the Menu</p>
      </div>
      <div class="btn">
        <template v-for="item in MenuListTwoMenu" :key="item.id">
          <button @click="gotoMaintwo(item.router)">{{ item.text }}</button>
        </template>
      </div>
    </div>
    <div class="rightUser">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import { ElMessageBox, ElMessage } from "element-plus";
let route = useRoute();
let router = useRouter();
let Tag = ref(false);
let SecondaryMenu = ref(false);
let MenuList = ref([
  {
    id: 0,
    text: "Info",
    // router: "/user/mainview",
    expand: false,
    children: [
      {
        nid: 0,
        id: 0,
        text: "Notice",
        router: "/user/notice",
      },
    ],
  },
  {
    id: 1,
    text: "View",
    // router: "/user/view",
    expand: false,
    children: [
      {
        nid: 1,
        id: 1,
        text: "Main View",
        router: "/user/mainview",
      },
      {
        nid: 1,
        id: 2,
        text: "Mini View",
        router: "/user/miniview",
      },
      {
        nid: 1,
        id: 3,
        text: "Quick View",
        router: "/user/quickview",
      },
    ],
  },
  {
    id: 2,
    text: "System",
    router: "/user/1",
    expand: false,
  },
  {
    id: 3,
    text: "Event",
    router: "/user/1",
    expand: false,
  },
  {
    id: 4,
    text: "CBS",
    router: "/user/1",
    expand: false,
  },
  {
    id: 5,
    text: "Statistics",
    router: "/user/1",
    expand: false,
  },
]);
let MenuListTwoMenu = ref([]);
// let username = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')).user : '';
let gotoMain = function () {
  router.push({
    path: "/index",
    query: "",
  });
};
let newId = ref("");
let routerMain = function (id: any, e: any) {
  const triangle = document
    .getElementsByClassName("menuList")[0]
    .getElementsByClassName("triangle");
  const link = document.getElementsByClassName("link");
  const oLi = document
    .getElementsByClassName("menuList")[0]
    .getElementsByTagName("li");
  //   if (MenuList.value[id].expand) {
  //     link[id].className = "link";
  //     triangle[id].className = "triangle iconfont icon-sanjiao3";
  //     SecondaryMenu.value = false;
  //     return;
  //   }
  for (var i = 0; i < triangle.length; i++) {
    triangle[i].className = "triangle iconfont icon-sanjiao3";
    link[i].className = "link";
    oLi[i].style.background = "";
    // MenuList.value[i].expand = false;
    //   MenuListTwoMenu.value = [];
  }
  link[id].className = "link active";
  triangle[id].className = "triangle triangle1 iconfont icon-sanjiao3";
  SecondaryMenu.value = true;
  oLi[id].style.background = "#bfbfbf";
  newId.value = id;
  //MenuList.value[id].expand = true;
  //MenuListTwoMenu.value = [];
  MenuList.value.filter((item, index) => {
    if (item.id == id) {
      //   console.log(item.children);
      //   return item.children;
      MenuListTwoMenu.value = item.children;
    }
  });
  //   console.log(MenuListTwoMenu.value);
};
let gotoMaintwo = function (path: any) {
  console.log(path, 1);
  router.push({
    path: path,
    query: "",
  });
};
</script>
<style scoped lang="less">
.user {
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
  .leftUser {
    width: 15vw;
    border-right: 0px solid #ccc;
    background: #353A35;
    .top {
      width: 1.75rem;
      height: 1.75rem;
      margin: 1rem auto 0 auto;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 0.0625rem solid #ccc;
      }
    }
    .userText {
      width: 80%;
      //height: 0.625rem;
      margin: 0.625rem auto;
      text-align: center;
      color: #a2a1a1;
      font-weight: bold;
      h3 {
        line-height: 0.425rem;
      }
      p {
        line-height: 0.425rem;
      }
      span {
        font-size: 0.375rem;
      }
    }
    .goindex {
      width: 1.6rem;
      height: 0.375rem;
      border-radius: 0.0625rem;
      border: none;
      background: #535353;
      color: #fff;
      margin: 0.5rem 0.8rem;
      cursor: pointer;
    }
  }
  // 二级菜单
  .centrtUser {
    width: 15vw;
    border-right: 0px solid #ccc;
    background: #bfbfbf;
    .centrText {
      width: 80%;
      //height: 0.625rem;
      margin: 0.625rem auto;
      text-align: center;
      color: #a2a1a1;
      font-weight: bold;
      span {
        font-size: 0.315rem;
      }
      h3 {
        line-height: 0.425rem;
        color: #fff;
      }
      p {
        margin: 0.6rem auto;
        width: 1rem;
        color: #fff;
        line-height: 0.18rem;
      }
    }
    .btn {
      margin-top: 1.8rem;
      // background: red;
      text-align: center;
      button {
        width: 90%;
        height: 0.375rem;
        border: none;
        border-radius: 0.0625rem;
        // background: #a2a1a1;
        background: #ccc;
        color: #666;
        cursor: pointer;
        margin-bottom: 0.6rem;
      }
    }
  }
  .menuList {
    width: 100%;
    // height: 100%;
    // background: rgb(187, 185, 185);
    text-align: left;
    li {
      font-size: 0.25rem;
      line-height: 0.8rem;
      width: 100%;
      cursor: pointer;
      //   background: red;
      .triangle {
        display: inline-block;
        margin-left: 0.375rem;
        color: rgb(160, 155, 155);
        transform: rotate(180deg);
      }
      .triangle1 {
        display: inline-block;
        margin-left: 0.375rem;
        color: rgb(160, 155, 155);
        transform: rotate(270deg);
      }
    }
    li:hover {
      background: #bfbfbf;
    }
    .link {
      color: #fff;
      margin-left: 0.625rem;
    }
    .active {
      color: #fff;
    }
  }
  .rightUser {
    width: 70vw;
    // float: right;
    // background: red;
  }
}

.user .el-aside {
  min-width: 2.5rem;
  /* height: 800px; */
}

.el-header {
  /* width: 1500px; */
  background-color: rgb(8, 8, 8);
  display: flex;
  justify-content: space-between;
}

.left {
  color: #fff;
  font-size: 0.375rem;
  line-height: 0.75rem;
  /*PT Serif: 一种沉稳儒雅、大气的字体*/
  /* font-family: 'PT Serif', serif; */
  /*Montserrat: 清晰明快、简单大方的字体*/
  /* font-family: 'Montserrat', sans-serif; */
  /*Roboto: 一种流畅简洁、具有现代感的字体*/
  /* font-family: 'Roboto', sans-serif; */
  /*Merriweather: 一种优美流畅、充满文艺气息的字体*/
  /* font-family: 'Merriweather', serif; */
  /*Open Sans: 一种结构清晰、通透明亮的字体*/
  font-family: "Open Sans", sans-serif;
  font-style: italic;
}

.right {
  margin-top: 20px;
}

.el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  color: #fff;
  /* display: flex; */
  /* align-items: center; */
}
</style>