<template>
    <div class="member">
        <div class="logo">
            <span class="main-title-yellow">NOKSAN</span>&nbsp;&nbsp;
            <span class="main-title-white"> 부산녹산산업단지</span>
        </div>
        <div style="text-align: center;">
            <input type="text" placeholder="아이디" class="input" v-model="username">
            <input type="text" placeholder="비밀번호" class="input inptwsd"  v-model="password">
        </div>
        <div style="text-align: center; margin-top: 0.1rem;">
            <input type="checkbox" name="auto_login" id="login_auto_login" class="select_chk">
            <label for="login_auto_login">로그인 상태 유지</label>
        </div>

        <div style="text-align: center; margin-top: 0.2rem;">
            <button type="button" class="btn_submit family_medium" id="login-btn" @click="login">로그인</button>
        </div>
        <div id="lost_password" style="text-align: center;margin-top: 0.08rem;">
            <a href="#" class="family_medium" id="login_password_lost">아이디/비밀번호 찾기</a>
            <a href="#" class="family_medium" id="join">회원가입</a>
        </div>

    </div>
</template>
<script  setup>
import { ref } from "vue";
import { useRouter } from "vue-router"
const username = ref('')
const password = ref('')
const router = useRouter()
const login = ()=>{
    if(username.value==123456 && password.value==123456){
        router.push('index')
        username.value = ''
       password.value = ''
    }else{
       alert('账号密码不正确')
       username.value = ''
       password.value = ''
}
}
const radio = ref(3)
</script>

<style lang="less" scoped>
.member {
    width: 13rem;
    height: 7rem;
    border: 1px solid #eee;
    margin: 2rem auto;
    padding: 0.5rem;

    #login-btn {
        background-color: #0040FF;
        color: #FFF;
        font-size: 0.3rem;
        width: 8rem;
        height: 0.5rem;
        text-align: center;
        line-height: 0.5rem;
        border-radius: 0.2rem;

    }

    .input {

        width: 10rem;
        height: 0.5rem;
        border-radius: 0.2rem;
        margin-bottom: 0.3rem;
        border: 1px solid #eee;
        padding-left: 0.2rem;
    }

    .inptwsd {
        margin-bottom: 0;
    }

    .logo {
        // margin-top: -2rem;
        font-size: 0.4rem;
        margin-top: 1rem;
        font-weight: 400;
        text-align: center;
        margin-bottom: 0.5rem;

        .main-title-yellow {
            color: #d4a408;

        }

        .main-title-white {
            font-family: 'yg-jalnan' !important;
            font-weight: 400;
            font-size: 0.3rem;
        }
    }
}
</style>