<template>
    <div class="box">
        <div class="left">
            <div v-if="riseno" class="one" style="margin-top: 0.15rem;">
                <div class="popup-btn-div">
                    <div class="popup-btn-icon">NO</div>
                    <div @click="risenos" class="popup-btn-mini">-</div>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 0.2rem;border-bottom: 1px solid pink;">
                    <div>알림공지</div>
                    <div @click="videos">
                        <img style="width: 0.2rem; height: 0.2rem;" src="../../assets/icon/icon_go.png" alt="">
                    </div>
                </div>
                <ul class="leftbtn">
                    <li>- 3D 하이퍼보드 서비스 운영중입니다.</li>
                    <li>- 2023년 12월 05일 서비스 점검 예정입니다.</li>
                    <li>- 2023년 12월 05일 서비스 점검 완료되었습니다.</li>
                    <li>- 2024년 01월 중에 서비스 대폭 업데이트 예정입니다.</li>
                </ul>
            </div>
            <div class="one" v-show="riseta">
                <div class="popup-btn-div">
                    <div class="popup-btn-icon">EV</div>
                    <div @click="risetas" class="popup-btn-mini">-</div>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 0.2rem;border-bottom: 1px solid pink;">
                    <div>이벤트</div>link
                    <div @click="twos">
                        <img style="width: 0.2rem; height: 0.2rem;" src="../../assets/icon/icon_go.png" alt="">
                    </div>
                </div>
                <ul class="leftbtn">

                    <li>- 3D 하이퍼보드 서비스 운영중입니다.</li>
                    <li>- 2023년 12월 05일 서비스 점검 예정입니다.</li>
                    <li>- 2023년 12월 05일 서비스 점검 완료되었습니다.</li>
                    <li>- 2024년 01월 중에 서비스 대폭 업데이트 예정입니다.</li>
                </ul>
            </div>
            <div class="one" v-show="riseev">
                <div class="popup-btn-div">
                    <div class="popup-btn-icon">TA</div>
                    <div class="popup-btn-mini" @click="riseevs">-</div>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 0.2rem;border-bottom: 1px solid pink;">
                    <div>교통통계</div>
                    <div @click="threes">
                        <img style="width: 0.2rem; height: 0.2rem;" src="../../assets/icon/icon_go.png" alt="">
                    </div>
                </div>
                <div style="margin-top: 0.1rem;">
                    <img style="width: 100%; height: 100%;" src="../../assets/img/graph01.jpg" alt="">
                </div>
            </div>
            <div class="one" v-show="rises">
                <div class="popup-btn-div">
                    <div class="popup-btn-icon">SS</div>
                    <div @click="rise" class="popup-btn-mini">-</div>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 0.2rem;border-bottom: 1px solid pink;">
                    <div>센서통계</div>
                    <div @click="fives">
                        <img style="width: 0.2rem; height: 0.2rem;" src="../../assets/icon/icon_go.png" alt="">
                    </div>
                </div>
                <div>
                    <img style="width: 100%; height: 100%;" src="../../assets/img/graph02.jpg" alt="">
                </div>
            </div>
            <!-- v-show="three1" -->
            <div class="threes" v-show="three1">
                <div class="popup-btn-icon" v-show="no" @click="noo">NO</div>
                <div class="popup-btn-icon" v-show="ev" @click="taa">EV</div>
                <div class="popup-btn-icon" v-show="ta" @click="evv">TA</div>
                <div class="popup-btn-icon" v-show="ss" @click="sss">SS</div>

            </div>
        </div>
        <div class="model">
            <!-- 标题 -->
            <div class="main-title" style="font-weight: 700; background-color: #1d2228; padding: 0.2rem; opacity: 0.7; ">
                <span class="main-title-yellow"
                    style="color: #d4a408;font-family: 'tahoma';font-size:0.45rem;">NOKSAN</span> <span
                    class="main-title-white">
                    부산녹산산업단지</span>
            </div>
            <!-- 底部 -->
            <div class="main-footer" @click="user" style="text-align: center;">
                <img src="../../assets/image/index/39a6b2762d9b51d659a8641b19eaf12.png" alt=""
                    style="rgba(0,0,0,0.5);width:70%;margin-top:0.1rem">


            </div>
            <div class="main-footer main-footers">
                <div
                    style="width: 0.4rem; height: 0.4rem; background-color: #fff;margin-left: 0.2rem; margin-top: 0.1rem;border-radius: 50%; text-align: center; line-height: 0.4rem;">
                    <img style="width: 60%; height: 60%; margin-top: 0.1rem;" src="../../assets/image/index/speaker.png"
                        alt="">
                </div>
                <div style="margin-left: 2rem; font-size: 0.2rem;margin-top: 0.2rem; ">
                    녹산산업단지 7번 교차로에서 교통사고가 발생하였습니다.
                </div>

            </div>
            <!-- 地图 -->
            <div style="width: 100%; height: 100vh;">
                <vCesium></vCesium>
            </div>
            <!-- 点击左边第一个 -->
            <div class="modeplop" v-show="video">
                <div style="display: flex; justify-content: space-between; margin: 0.2rem;">
                    <div></div>
                    <div @click="comfiom"><el-icon>
                            <CloseBold />
                        </el-icon></div>

                </div>
                <img style="width: 90%; height: 50%;  margin: 1rem 0.6rem 0;"
                    src="../../assets/image/index/f0b781851e22d0bebd376352f911799.png" alt="">
            </div>

            <!-- 点击左边第二个 -->
            <div class="modeplop" v-show="two">
                <div style="display: flex; justify-content: space-between; margin: 0.2rem;">
                    <div></div>
                    <div @click="comfiom1"><el-icon>
                            <CloseBold />
                        </el-icon></div>

                </div>
                <img style="width: 90%; height: 50%;  margin: 1rem 0.6rem 0;"
                    src="../../assets/image/index/f0b781851e22d0bebd376352f911799.png" alt="">
            </div>

            <!-- 点击左边第三个 -->
            <div class="modeplop modeslsa" v-show="three">
                <div style="display: flex; justify-content: space-between; margin: 0.2rem;">
                    <div></div>
                    <div @click="comfiom2"><el-icon>
                            <CloseBold />
                        </el-icon></div>
                </div>
                <div style="text-align: center; font-size: 0.5rem;">교통통계</div>
                <img style="width: 90%; height: 70%;  margin: 1rem 0.6rem 0;" src="../../assets/image/index/p12.png" alt="">
            </div>

            <!-- 点击左边第四个 -->
            <div class="modeplop modeslsa" v-show="five">
                <div style="display: flex; justify-content: space-between; margin: 0.2rem;">
                    <div></div>
                    <div @click="comfiom3"><el-icon>
                            <CloseBold />
                        </el-icon></div>
                </div>
                <div style="text-align: center; font-size: 0.5rem;">센서통계 보고서</div>
                <img style="width: 90%; height: 70%;  margin: 1rem 0.6rem 0;" src="../../assets/image/index/popup_count.jpg"
                    alt="">
            </div>


            <!-- 点击右边第二个 -->
            <div class="modeplop " v-show="rightone">
                <div style="display: flex; justify-content: space-between; margin: 0.2rem;">
                    <div></div>
                    <div @click="comfiom4"><el-icon>
                            <CloseBold />
                        </el-icon></div>
                </div>
                <div style="text-align: center; font-size: 0.5rem;">이벤트 카메라</div>
                <ul class="naver">
                    <li style="margin-left: 0.5rem;">이벤트 타입</li>
                    <li>위치정보</li>
                    <li>GIS 정보</li>
                    <li style="margin-right: 0.5rem;">2023.12.09 13:06</li>
                </ul>
                <div class="respet">



                    <div class="left1">
                        <img style="width: 100%; height: 100%;" src="../../assets/image/index/event_camera.png" alt="">
                    </div>
                    <div class="middeo1">

                        <h4 style="margin-top: 0.4rem;">이벤트 요약</h4>
                        <p style="margin-top: 0.2rem; font-size: 0.15rem;">이벤트 요약 내용 넣는 곳입니다.</p>

                    </div>
                    <div class="right1">
                        <h4 style="margin-top: 0.4rem;">이벤트 요약</h4>
                        <ul style="margin-top: 0.2rem; font-size: 0.19rem;">
                            <li>2023.10.23 10.23 log </li>
                            <li>2023.10.23 10.23 log </li>
                            <li>2023.10.23 10.23 log </li>
                            <li>2023.10.23 10.23 log </li>
                            <li>2023.10.23 10.23 log </li>
                        </ul>
                    </div>
                </div>

            </div>

            <!-- 点击右边第三里面的第一个 -->
            <div class="modeplop " v-show="righttwo">
                <div style="display: flex; justify-content: space-between; margin: 0.2rem;">
                    <div></div>
                    <div @click="comfiom5"><el-icon>
                            <CloseBold />
                        </el-icon></div>
                </div>
                <div style="text-align: center; font-size: 0.5rem;">Security Camera01</div>
                <div class="leftvideo">
                    <div class="left1">
                        <video style="width: 100%;height: 100%;" src="../../assets/video/camera01.mp4" autoplay
                            loop></video>
                    </div>
                    <div class="rigth1">
                        <ul style="text-align: center;">
                            <li style="margin-top: 0.2rem;">ID<span>ASDF-1234</span></li>
                            <li>유형<span>AI 3D</span></li>
                            <li>상태<span>Working</span></li>
                            <li>위치<span>Area A</span></li>
                            <li>좌표<span>3423/13423</span></li>
                            <li>날짜<span>1990.10.10</span></li>
                            <li>담당자<span>MANAGER</span></li>
                        </ul>
                    </div>
                </div>


            </div>


            <!-- 点击右边第三里面的第二个 -->
            <div class="modeplop " v-show="rightthree">
                <div style="display: flex; justify-content: space-between; margin: 0.2rem;">
                    <div></div>
                    <div @click="comfiom6"><el-icon>
                            <CloseBold />
                        </el-icon></div>
                </div>
                <div style="text-align: center; font-size: 0.5rem;">Security Camera01</div>
                <div class="leftvideo">
                    <div class="left1">
                        <video style="width: 100%;height: 100%;" src="../../assets/video/camera02.mp4" autoplay
                            loop></video>
                    </div>
                    <div class="rigth1">
                        <ul style="text-align: center;">
                            <li style="margin-top: 0.2rem;">ID<span>ASDF-1234</span></li>
                            <li>유형<span>AI 3D</span></li>
                            <li>상태<span>Working</span></li>
                            <li>위치<span>Area A</span></li>
                            <li>좌표<span>3423/13423</span></li>
                            <li>날짜<span>1990.10.10</span></li>
                            <li>담당자<span>MANAGER</span></li>
                        </ul>
                    </div>
                </div>


            </div>

            <!-- 点击右边第三里面的第三个 -->
            <div class="modeplop " v-show="rightfive">
                <div style="display: flex; justify-content: space-between; margin: 0.2rem;">
                    <div></div>
                    <div @click="comfiom7"><el-icon>
                            <CloseBold />
                        </el-icon></div>
                </div>
                <div style="text-align: center; font-size: 0.5rem;">Security Camera01</div>
                <div class="leftvideo">
                    <div class="left1">
                        <video style="width: 100%;height: 100%;" src="../../assets/video/camera03.mp4" autoplay loop>
                        </video>
                    </div>
                    <div class="rigth1">
                        <ul style="text-align: center;">
                            <li style="margin-top: 0.2rem;">ID<span>ASDF-1234</span></li>
                            <li>유형<span>AI 3D</span></li>
                            <li>상태<span>Working</span></li>
                            <li>위치<span>Area A</span></li>
                            <li>좌표<span>3423/13423</span></li>
                            <li>날짜<span>1990.10.10</span></li>
                            <li>담당자<span>MANAGER</span></li>
                        </ul>
                    </div>
                </div>


            </div>

            <!-- 点击右边第三里面的第四个 -->
            <div class="modeplop " v-show="rightfor">
                <div style="display: flex; justify-content: space-between; margin: 0.2rem;">
                    <div></div>
                    <div @click="comfiom8"><el-icon>
                            <CloseBold />
                        </el-icon></div>
                </div>
                <div style="text-align: center; font-size: 0.5rem;">Security Camera01</div>
                <div class="leftvideo">
                    <div class="left1">
                        <video style="width: 100%;height: 100%;" src="../../assets/video/camera04.mp4" autoplay
                            loop></video>
                    </div>
                    <div class="rigth1">
                        <ul style="text-align: center;">
                            <li style="margin-top: 0.2rem;">ID<span>ASDF-1234</span></li>
                            <li>유형<span>AI 3D</span></li>
                            <li>상태<span>Working</span></li>
                            <li>위치<span>Area A</span></li>
                            <li>좌표<span>3423/13423</span></li>
                            <li>날짜<span>1990.10.10</span></li>
                            <li>담당자<span>MANAGER</span></li>
                        </ul>
                    </div>
                </div>


            </div>

            <!-- 点击右边第第四个 -->
            <div class="modeplop " v-show="rightbtn1">
                <div style="display: flex; justify-content: space-between; margin: 0.2rem;">
                    <div></div>
                    <div @click="comfrom"><el-icon>
                            <CloseBold />
                        </el-icon></div>
                </div>
                <div style="text-align: center; font-size: 0.5rem;">크루징 뷰 - 메모리</div>
                <video style="width: 100%;height: 60%; margin: 1rem 0.1rem ;" src="../../assets/video/camera04.mp4" autoplay
                    loop></video>
            </div>

            <!-- 点击右边第第四个下面 -->
            <div class="modeplop " v-show="rightbtn2">
                <div style="display: flex; justify-content: space-between; margin: 0.2rem;">
                    <div></div>
                    <div @click="comfrom1"><el-icon>
                            <CloseBold />
                        </el-icon></div>
                </div>
                <div style="text-align: center; font-size: 0.5rem;">크루징 뷰 - 메모리</div>
                <video style="width: 98%;height: 70%; margin: 1rem 0.1rem ;" src="../../assets/video/crusing.mp4" autoplay
                    loop></video>
            </div>

            <!-- 点击右边第第四个下面 -->
            <div class="modeplop" v-show="pause">
                <div style="display: flex; justify-content: space-between; margin: 0.2rem;">
                    <div></div>
                    <div @click="comfrom2"><el-icon>
                            <CloseBold />
                        </el-icon></div>
                </div>
                <div style="text-align: center; font-size: 0.5rem;">크루징 뷰 - 메모리</div>
                <video style="width: 98%;height: 70%; margin: 1rem 0.1rem ;" src="../../assets/video/crusing.mp4" autoplay
                    loop></video>
            </div>

        </div>
        <div class="right">
            <div class="one" style="margin-top: 0.15rem;" v-show="rightdv">
                <div class="popup-btn-div">
                    <div class="popup-btn-icon">DV</div>
                    <div @click="rightdvs" class="popup-btn-mini">-</div>
                </div>
                <div class="time">
                    <ul>
                        <li>
                            <img class="image" src="../../assets/img/cctv.png" alt="">
                        </li>
                        <li>56/56</li>
                        <li>100%</li>
                        <li>view</li>
                    </ul>
                    <ul>
                        <li>
                            <img class="image" src="../../assets/image/index/shutter.png" alt="">
                        </li>
                        <li>56/56</li>
                        <li>100%</li>
                        <li>view</li>
                    </ul>
                    <ul>
                        <li>
                            <img class="image" src="../../assets/image/index/memory.png" alt="">
                        </li>
                        <li>56/56</li>
                        <li>100%</li>
                        <li>view</li>
                    </ul>
                </div>
            </div>
            <div class="one " @click="rightones" v-show="rightec">
                <div class="popup-btn-div">
                    <div class="popup-btn-icon">EC</div>
                    <div @click="rightecs" class="popup-btn-mini">-</div>
                </div>
                <div style="padding: 0.3rem 0.2rem;">
                    <img style="width: 100%; height: 100%;" src="../../assets/img/event_car.png" alt="">
                </div>
            </div>
            <div class="one" v-show="rightac">
                <div class="popup-btn-div">
                    <div class="popup-btn-icon">AC</div>
                    <div @click="rightacs" class="popup-btn-mini">-</div>
                </div>
                <div style="padding: 0.3rem 0.2rem;" class="main">
                    <ul>
                        <li @click="righttwos">
                            <video style="width: 100%;height: 100%;" src="../../assets/video/camera01.mp4" autoplay
                                loop></video>
                        </li>
                        <li @click="rightthrees">
                            <video style="width: 100%;height: 100%;" src="../../assets/video/camera02.mp4" autoplay
                                loop></video>
                        </li>
                        <li @click="rightfives">
                            <video style="width: 100%;height: 100%;" src="../../assets/video/camera03.mp4" autoplay loop>
                            </video>
                        </li>
                        <li @click="rightfors">
                            <video style="width: 100%;height: 100%;" src="../../assets/video/camera04.mp4" autoplay
                                loop></video>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="one" v-show="rightcr">
                <div class="popup-btn-div">
                    <div class="popup-btn-icon">CR</div>
                    <div @click="rightdcrs" class="popup-btn-mini">-</div>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 0.2rem;border-bottom: 1px solid pink;">
                    <div>크루징 뷰</div>
                </div>
                <div style="" class="main-live-btn">
                    <ul>
                        <li>메모리</li>
                        <li @click="rightbtn1s">
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                            <span>4</span>
                            <span>5</span>
                        </li>
                    </ul>
                    <ul>
                        <li>메모리</li>
                        <li @click="rightbtn2s">
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                            <span>4</span>
                            <span>5</span>
                        </li>
                    </ul>
                </div>
                <div class="applot">
                    <ul style="display: flex; justify-content: space-evenly;">
                        <li @click="pauses">A</li>
                        <li @click="pauses">M</li>
                        <li @click="pauses">
                            <img class="img-filter" src="../../assets/img/refresh.png" alt="">
                        </li>
                        <li @click="pauses">
                            <img class="img-filter" src="../../assets/img/pause.png" alt="">
                        </li>
                        <li @click="pauses">
                            <img class="img-filter" src="../../assets/img/stop.png" alt="">
                        </li>
                        <li @click="pauses">
                            <img class="img-filter" src="../../assets/img/play.png" alt="">
                        </li>
                    </ul>
                </div>
            </div>
            <div class="threes" v-show="three2">
                <div class="popup-btn-icon" v-show="dv" @click="dvs">DV</div>
                <div class="popup-btn-icon" v-show="ec" @click="ecs">EV</div>
                <div class="popup-btn-icon" v-show="ac" @click="acs">AC</div>
                <div class="popup-btn-icon" v-show="cr" @click="crs">CR</div>
            </div>
        </div>

    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from "vue-router"

const router = useRouter()
const user = () => {
    router.push('user')
}

// 地图
const cesium = ref(true)

// 右边
const dv = ref(false)
const ec = ref(false)
const ac = ref(false)
const cr = ref(false)
const three2 = ref(false)
const show1 = () => {
    if (dv.value === false && ec.value === false && ac.value === false && no.value === false) {
        three2.value = false
    }
}
// 点击第四个
const rightcr = ref(true)
const rightdcrs = () => {
    three2.value = true
    cr.value = true
    rightcr.value = false
}
const crs = () => {
    rightcr.value = true
    cr.value = false
    show1()
}
// 点击第三个
const rightac = ref(true)
const rightacs = () => {
    rightac.value = false
    ac.value = true
    three2.value = true
}
const acs = () => {
    rightac.value = true
    ac.value = false
    show1()
}

//点击第二个
const rightec = ref(true)
const rightecs = () => {
    rightec.value = false
    ec.value = true
    three2.value = true
}
const ecs = () => {
    rightec.value = true
    ec.value = false
    show1()
}
// 点击第一个
const rightdv = ref(true)
const rightdvs = () => {
    rightdv.value = false
    dv.value = true
    three2.value = true
}
const dvs = () => {
    rightdv.value = true
    dv.value = false
    show1()
}



//左边收起来
const ss = ref(false)
const ta = ref(false)
const ev = ref(false)
const no = ref(false)
const three1 = ref(false)
// 点击ss
const rises = ref(true)
const rise = () => {
    // console.log(1231231)
    rises.value = false
    ss.value = true
    three1.value = true
}

const show = () => {
    if (ss.value === false && ta.value === false && ev.value === false && no.value === false) {
        three1.value = false
    }
}
const sss = () => {
    rises.value = true
    ss.value = false
    show()

}
// 点击ev 
const riseev = ref(true)
const riseevs = () => {
    riseev.value = false
    ta.value = true
    three1.value = true
}
const evv = () => {
    console.log(123123)
    riseev.value = true
    ta.value = false
    show()
}

// 点击ev
const riseta = ref(true)
const risetas = () => {
    riseta.value = false
    ev.value = true
    three1.value = true
}
const taa = () => {
    riseta.value = true
    ev.value = false
    show()
}

// 点击no 
const riseno = ref(true)
const risenos = () => {
    riseno.value = false
    no.value = true
    three1.value = true
}
const noo = () => {
    riseno.value = true
    no.value = false
    show()
}

// <!-- 点击左边第一个 -->
const video = ref(false)
const videos = () => {
    video.value = true
    cesium.value = false
}
const comfiom = () => {
    video.value = false
    cesium.value = true
}
// <!-- 点击左边第二个 -->
const two = ref(false)
const twos = () => {
    two.value = true
    cesium.value = false
}
const comfiom1 = () => {
    two.value = false
    cesium.value = true
}

// <!-- 点击左边第三个 -->
const three = ref(false)
const threes = () => {
    three.value = true
    cesium.value = false
}
const comfiom2 = () => {
    three.value = false
    cesium.value = true
}

// <!-- 点击左边第四个 -->
const five = ref(false)
const fives = () => {
    five.value = true
    cesium.value = false
}
const comfiom3 = () => {
    five.value = false
    cesium.value = true
}

// <!-- 点击右边第一个 -->
const rightone = ref(false)
const rightones = () => {
    rightone.value = true
    cesium.value = false
}
const comfiom4 = () => {
    rightone.value = false
    cesium.value = true
}

// <!-- 点击右边第三里面的第一个 -->
const righttwo = ref(false)
const righttwos = () => {
    righttwo.value = true
    cesium.value = false
}
const comfiom5 = () => {
    righttwo.value = false
    cesium.value = true
}

// 点击右边第三里面的第二个 
const rightthree = ref(false)
const rightthrees = () => {
    rightthree.value = true
    cesium.value = false
}
const comfiom6 = () => {
    rightthree.value = false
    cesium.value = true
}

// 点击右边第三里面的第三个 
const rightfive = ref(false)
const rightfives = () => {
    rightfive.value = true
    cesium.value = false
}
const comfiom7 = () => {
    rightfive.value = false
    cesium.value = true
}
// 点击右边第三里面的第四个 
const rightfor = ref(false)
const rightfors = () => {
    rightfor.value = true
    cesium.value = false
}
const comfiom8 = () => {
    rightfor.value = false
    cesium.value = true
}

// 点击右边第四个
const rightbtn1 = ref(false)
const rightbtn1s = () => {
    rightbtn1.value = true
    cesium.value = false
}
const comfrom = () => {
    rightbtn1.value = false
    cesium.value = true
}

//  <!-- 点击右边第第四个下面 -->
const rightbtn2 = ref(false)
const rightbtn2s = () => {
    rightbtn2.value = true
    cesium.value = false
}
const comfrom1 = () => {
    rightbtn2.value = false
    cesium.value = true
}
// 点击右边第第四个下面
const pauseList =ref([
    {name:'A'},
    {name:'M'},
    {name:'../../assets/img/refresh.png'},
    {name:'../../assets/img/pause.png'},
    {name:'../../assets/img/stop.png'},
    {name:'../../assets/img/play.png'},
])
const pause =ref(false)
const pauses =()=>{
    pause.value = true
}
const comfrom2 =()=>{
    pause.value =false
}
</script>
<style scoped lang="less">
@font-face {
    font-family: 'NanumGothic';
    src: url('assets/fonts/NanumGothic.ttf') format('truetype');
    font-weight: 400;
}

body {
    font-family: 'NanumGothic' !important;
}

.box {
    width: 100vw;
    height: 100vh;
    background-color: #04111d;
    display: flex;
    justify-content: space-between;
    color: #fff;
    position: relative;
    // padding: 0.1rem;

    .el-icon {
        font-size: 0.5rem;
    }

    .leftvideo {
        display: flex;
        justify-content: space-between;
        margin: 0 0.2rem;
        width: 97%;
        height: 5rem;
        color: #000;
        margin-top: 0.5rem;
        font-size: 0.2rem;

        // background-color: #1b3e67;
        .left1 {
            width: 69%;
            height: 100%;
            margin-left: 0;
        }

        .rigth1 {
            width: 30%;
            height: 100%;
            background-color: pink;
            color: #fff;
            font-size: 0.2rem;
            box-sizing: border-box;
            background-color: #000;
            padding-top: 0.35rem;

            ul {
                li {
                    margin-bottom: 0.2rem;

                    span {
                        display: block;
                    }
                }
            }
        }
    }

    .respet {
        display: flex;
        justify-content: space-between;
        margin: 0 0.2rem;
        width: 97%;
        height: 5rem;
        color: #000;
        margin-top: 0.5rem;
        font-size: 0.2rem;
        // background-color: pink;
        overflow: hidden;


        .left1 {
            width: 50%;
            height: 5rem;
            background-color: #1b3e67;
            margin-left: 0;
        }

        .middeo1 {
            width: 23%;
            height: 100%;
            background-color: #000;
            text-align: center;
            color: #fff;
        }

        .right1 {
            width: 23%;
            height: 100%;
            background-color: #000;
            color: #fff;
            margin-right: 0;
            text-align: center;

            ul {
                li {
                    margin-bottom: 0.1rem;
                }
            }
        }
    }

    .naver {
        width: 97%;
        height: 0.5rem;
        background: #e0a72a;
        /*padding: 14px 0 6px 0;*/
        padding-top: 20px;
        color: #fff;
        font-size: 0.3rem;
        margin: 0 0.2rem;
        display: flex;
        justify-content: space-between;
        margin-top: 0.2rem;

    }

    .model {
        width: 100%;
        height: 97%;
        margin-top: 0.1rem;
        // background-color: pink;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        .main-footer {
            position: absolute;
            bottom: -4.5%;
            left: 50%;
            /*width: 60%;*/
            height: 0.7rem;
            /*background-color: #02080e;*/
            z-index: 99999;
            font-size: 0.4rem;
            transform: translate(-50%, -50%);
            padding-top: -10px;
        }

        .main-footers {
            position: absolute;
            bottom: 1%;
            left: 50%;
            width: 60%;
            height: 0.6rem;
            background-color: rgba(53, 51, 51, 0.5);
            z-index: 99999;
            font-size: 0.4rem;
            transform: translate(-50%, -50%);
            margin-bottom: 0.1rem;
            border-radius: 0.3rem;
            display: flex;
        }

        .main-title {
            position: absolute;
            top: 3%;
            left: 50%;
            z-index: 99999;
            font-size: 0.4rem;
            transform: translate(-50%, -50%);
        }

        .modeplop {
            width: 60%;
            height: 70%;
            background-color: rgb(61, 57, 56, 0.5);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%)
        }

        .modeslsa {
            height: 80%;
        }
    }

    .one {
        width: 100%;
        height: 23.4%;

        margin-bottom: 0.15rem;
        opacity: 0.7;
        background-color: #1d2228;
        position: relative;

        .applot {
            width: 75%;
            height: 0.4rem;
            margin: -0.3rem 0.5rem;
            line-height: 0.4rem;

            color: #000;

            ul {
                li:nth-child(1) {
                    background-color: #000;
                }

                li:nth-child(2) {
                    background-color: #000;
                }

                li {
                    width: 0.4rem;
                    height: 0.2rem;

                    border-radius: 0.1rem;
                    color: #fff;
                    font-size: 0.2rem;
                    text-align: center;


                    .img-filter {
                        width: 100%;
                        height: 111%;
                        filter: invert(100%) sepia(52%) saturate(20%) hue-rotate(315deg) brightness(103%) contrast(108%);

                    }
                }
            }
        }

        .popup-btn-div {
            position: absolute;
            top: -0.1rem;
            left: 0;
            width: 100%;
            display: flex;
            justify-content: space-between;

            .popup-btn-icon {
                width: 0.4rem;
                height: 0.2rem;
                background-color: rgb(2, 8, 14, 0.5);
                font-weight: bold;
                color: rgb(212, 164, 8);
                text-align: center;
                line-height: 0.2rem;
                margin-left: 0.2rem;
            }

            .popup-btn-mini {
                background-color: rgb(212, 164, 8, 0.5);
                font-weight: bold;
                color: #1d2228;
                width: 0.2rem;
                height: 0.2rem;
                text-align: center;

                line-height: 0.3rem;

                border: 1px solid #3c3837;

            }
        }

        .leftbtn {
            margin-top: 0.1rem;
            padding-left: 0.1rem;
        }

        .leftbtn li {
            text-overflow: ellipsis;
            overflow: hidden;
            word-break: break-all;
            white-space: nowrap;
            line-height: 0.5rem;
        }
    }


    .left {
        width: 15%;
        height: 100vh;
        // background-color: pink;
        margin-left: 0.2rem;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 9999;

        .threes {
            width: 15%;
            height: 0.5rem;
            background-color: rgb(29, 34, 40, 0.5) !important;
            opacity: 0.7;
            padding-top: 0.1rem;
            display: flex;
            justify-content: space-between;
            margin-left: 0.2rem;
            position: fixed;

            bottom: 0.2rem;
            left: 0;
            z-index: 99;

            .popup-btn-icon {
                width: 0.4rem;
                height: 0.2rem;
                background-color: rgb(2, 8, 14, 0.5);
                font-weight: bold;
                color: rgb(212, 164, 8);
                text-align: center;
                line-height: 0.2rem;
                margin-left: 0.2rem;
                margin-top: 0.1rem;
                // padding-top: 0.1rem;
            }

        }

    }

    .right {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 99999;
        width: 15%;
        height: 100vh;
        // background-color: pink;
        margin-right: 0.2rem;

        .threes {
            position: fixed;
            opacity: 0.7;
            bottom: 0.2rem;
            rigth: 0;
            z-index: 99;
            z-index: 999;
            width: 15%;
            height: 0.5rem;
            background-color: rgb(29, 34, 40, 0.5) !important;
            padding-top: 0.1rem;
            display: flex;
            justify-content: space-between;

            .popup-btn-icon {
                width: 0.4rem;
                height: 0.2rem;
                background-color: rgb(2, 8, 14, 0.5);
                font-weight: bold;
                color: rgb(212, 164, 8);
                text-align: center;
                line-height: 0.2rem;
                margin-left: 0.2rem;
                margin-top: 0.1rem;
                // padding-top: 0.1rem;
            }

        }

        .main-live-btn {
            padding: 0.2rem;

            ul {
                display: flex;
                justify-content: space-between;
                margin-bottom: 0.3rem;

                li {
                    span {
                        display: inline-block;
                        border: 1px solid #1b3e67;
                        background-color: #1b3e67;
                        color: #d2e1e5;
                        border-radius: 50%;
                        width: 0.3rem;
                        height: 0.3rem;
                        text-align: center;
                        line-height: 0.3rem;
                        margin: 0 0.05rem;
                    }
                }
            }
        }

        .main {
            ul {
                display: flex;
                flex-wrap: wrap;

                li {
                    width: 50%;
                    height: 1.2rem;
                    // background-color: pink;
                }
            }
        }

        .image {
            width: 0.4rem;
            height: 0.4rem;
            vertical-align: middle;
            margin-top: -0.1rem;

        }

        .time {
            padding: 0.5rem 0.5rem 0 0.3rem;

            ul {
                display: flex;
                justify-content: space-between;

                li {
                    height: 0.6rem;
                }
            }
        }
    }

}</style>