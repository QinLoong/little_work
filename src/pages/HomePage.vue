<template>
  <div>
    <outer-nav :singleBtn="isShow">
        <div class="body">
            <div class="left-home">
                <img src="../assets/img_banner1.png" alt="" class="imgs" />
            </div>
            <div class="right-loading">
                <div class="right-top">
                    <div class="shadow"></div>
                    <div class="shopping-box"></div>
                    <div class="title-box">金融超市</div>
                    <button class="button-box" @click="$router.push('/financial-supermarket')">精选理财产品</button>
                </div>
                <div class="right-bottom">
                    <div class="bottom-left-top">更多精彩</div>
                    <div class="mid">
                        <div class="bottom-mid" v-for="(box, index) in boxes" :key="box.id"
                            @click="handleClick(index)">
                            <div class="round">
                                <img :src="box.imgPath" class="round-img" />
                            </div>
                            <div class="round-title" style="cursor: pointer">
                                {{ box.name }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </outer-nav>
  </div>
</template>

<script>
import OuterNav from "../components/OuterNav.vue";
export default {
  components: { OuterNav },
  data() {
    return {
      isShow: '',
      boxes: [
                { id: 1, imgPath: require("@/assets/ic_jrkt.svg"), name: "金融课堂" },
                { id: 2, imgPath: require("@/assets/ic_bdsh.svg"), name: "本地生活" },
                { id: 3, imgPath: require("@/assets/ic_yxhd.svg"), name: "营销活动" },
                { id: 4, imgPath: require("@/assets/ic_dzyh.svg"), name: "电子银行" },
                { id: 5, imgPath: require("@/assets/ic_hdyx.svg"), name: "互动游戏" },
            ],
    };
  },
  methods: {
    handleClick(i){
        if(i===0){
           this.$router.push('/financial-classroom')
        }
    }
  }
};
</script>
<style scoped>
.body{
    margin-top: -10vw;
    margin-left: -10vh;
}
.left-home {
    display: flex;
    margin-left: 8.333vw;
    margin-top: 3.125vw;
    overflow: hidden;
    width: 41.875vw;
    height: 43.75vw;
    /* background-image: linear-gradient(90deg, #E1DED2 0%, #D8CBA9 100%); */
    box-shadow: inset 0px 0px 0px 0px rgba(252, 250, 245, 1);
    border-radius: 32px;
}

.left-home img {
    width: 100%;
    height: 100%;
}

.right-loading {
    display: flex;
    flex-direction: column;
    margin-top: 3.125vw;
    margin-left: 2.083vw;
    height: 43.75vw;
    width: 39.375vw;
}

.right-top {
    display: flex;
    flex-direction: column;
    height: 31.25vw;
    width: 100%;
    background: linear-gradient(180deg, #ecd9a6 0%, #c5a56d 100%);
    border-radius: 1.667vw;
    z-index: 1;
}

.right-top .shadow {
    position: relative;
    top: 0;
    left: 14.375vw;
    right: 0;
    height: 25vw;
    width: 25vw;
    background-image: url("../assets/bg_dots1.png");
    background-repeat: no-repeat;
    background-position: left top;
    /* 显示图片的右下角内容 */
    background-size: 25vw 25vw;
}

.right-top .shopping-box {
    display: flex;
    height: 12.5vw;
    width: 12.5vw;
    margin-top: -20.417vw;
    margin-left: 13.464vw;
    /* background: #F8F7F3; */
    background-image: url("../assets/ic_jrcs_shadow.svg");
    background-repeat: no-repeat;
    /* 确保图片不会重复 */
    background-position: center;
    /* 图片居中 */
    background-size: cover;
    /* 图片完全覆盖容器 */
    background-size: contain;
    z-index: 1;
    /* 倒影效果 */
    background-position: center;
    background-size: cover;
    background-size: contain;
    z-index: 1;
    -webkit-box-reflect: below -4.688vw linear-gradient(transparent 55%, white 100%);
}

.right-top .title-box {
    display: flex;
    margin-top: 0.99vw;
    height: 3.125vw;
    width: 11.667vw;
    margin-left: 13.911vw;
    justify-content: center;
    align-items: center;
    font-family: SourceHanSansCN-Medium;
    font-size: 2.188vw;
    color: #ffffff;
    text-align: center;
    line-height: 2.5vw;
    font-weight: 500;
}

.right-top button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.042vw;
    width: 14.01vw;
    height: 2.813vw;
    background-image: linear-gradient(0deg, #d6c185 0%, #f2e6ca 100%);
    border-radius: 1.615vw;
    margin-left: 12.708vw;
    border: none;
    /* 去掉默认边框 */
    outline: none;
    /* 确保没有轮廓线 */
    z-index: 1;
    font-family: SourceHanSansCN-Medium;
    font-size: 1.458vw;
    color: #a1753a;
    text-align: center;
    font-weight: 500;
    cursor: pointer;
}

.right-top button:hover {
    background-image: linear-gradient(0deg, #c5b072 0%, #e2d5b3 100%);
    background-position-x: -280px;
    /* 按下时改变背景颜色 */
}

.right-bottom {
    display: flex;
    flex: 1;
    overflow: hidden;
    flex-direction: column;
    margin-top: 2.083vw;
    height: 11.458vw;
    width: 100%;
    background-image: radial-gradient(circle at 32% 19%, #f8f7f3 0%, #d1c297 92%);
    border-radius: 1.667vw;
    z-index: 1;
}

.bottom-left-top {
    display: flex;
    justify-content: center;
    height: 2.083vw;
    width: 8.021vw;
    margin-left: 1.25vw;
    background-image: radial-gradient(circle at 17% 6%, #d5c7a0 0%, #a1753a 136%);
    border-radius: 0px 0px 0.417vw 0.417vw;
    font-family: PingFangSC-Medium;
    font-size: 1.25vw;
    color: #ffffff;
    letter-spacing: 0;
    text-align: center;
    font-weight: 500;
}

.mid {
    display: flex;
    flex: 1;
    width: 100%;
    height: 7.656vw;
    margin-left: 1.927vw;
}

.bottom-mid {
    display: flex;
    width: 6.754vw;
    height: 7.656vw;
    margin-right: 0.452vw;
    flex-direction: column;
}

.round {
    margin-top: 1.042vw;
    margin-left: 1.294vw;
    height: 4.167vw;
    width: 4.167vw;
    opacity: 0.4;
    background: #ffffff;
    border-radius: 50%;
    box-shadow: 0.104vw 0.104vw 0.313vw 0px rgba(112, 83, 23, 0.06);
    cursor: pointer;
}

.round:hover {
    opacity: 0.6;
    background: #d5c7a0;
}

.bottom-mid text {
    display: flex;
    height: 1.458vw;
    width: 6.719vw;
    margin-top: 0.625vw;
    justify-content: center;
    align-items: center;
    font-family: SourceHanSansCN-Medium;
    font-size: 1.146vw;
    color: #a1753a;
    text-align: center;
    font-weight: 500;
}

.round-img {
    display: flex;
    height: 2.5vw;
    width: 2.5vw;
    margin-top: 0.833vw;
    margin-left: 0.833vw;
}

.round-title {
    display: flex;
    height: 1.458vw;
    width: 6.719vw;
    margin-top: 0.625vw;
    justify-content: center;
    align-items: center;
    font-family: SourceHanSansCN-Medium;
    font-size: 1.146vw;
    color: #a1753a;
    text-align: center;
    font-weight: 500;
}
</style>
