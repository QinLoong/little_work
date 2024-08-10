<template>
  <div>
    <outer-nav :singleBtn="isShow">
      <template>
        <div class="five" v-for="item in shopingImage" :key="item.id">
          <div class="shadow-top-five"></div>
          <img :src="item.imgPath" class="image-five" />
          <div class="but-five">
            <div class="title-boxs">
              <div class="title">
                {{ item.title }}
              </div>
              <img src="../assets/ic_click.svg" alt="" class="icon-five" />
              <!-- <div class="icon-five"></div> -->
            </div>
            <text class="enth">{{ item.enth }}</text>
          </div>
          <div class="bottom-five"></div>
        </div>
      </template>
    </outer-nav>
  </div>
</template>
<script>
import OuterNav from "../components/OuterNav.vue";
export default {
  components: { OuterNav },
  data() {
    return {
      isShow: "showOne",
      shopingImage: [
        {
          id: 1,
          imgPath: require("../assets/jrcs_01.svg"),
          enth: "Deposit Money",
          title: "存款",
        },
        {
          id: 2,
          imgPath: require("../assets/jrcs_02.svg"),
          enth: "Financial Planning",
          title: "理财规划",
        },
        {
          id: 3,
          imgPath: require("../assets/jrcs_03.svg"),
          enth: "Financial Planning",
          title: "存款保险",
        },
        {
          id: 4,
          imgPath: require("../assets/jrcs_04.svg"),
          enth: "Loan",
          title: "贷款",
        },
      ],
    };
  },
};
</script>
<style scoped lang="css">
.logo {
  display: flex;
  height: 2.5vw;
  width: 17.083vw;
  margin-left: 4.167vw;
  margin-top: 1.354vw;
}

.conter-box {
  display: flex;
  margin-left: 8.333vw;
  margin-top: 5.208vw;
  height: 37.5vw;
  width: 83.333vw;
  overflow: hidden;
  background-image: linear-gradient(180deg, #ffffff 81%, #fbf5ef 100%);
  border: 0px solid rgba(199, 137, 58, 0.3);
  box-shadow: 0.208vw 0.208vw 0.833vw 0.208vw rgba(199, 137, 58, 0.15);
  border-radius: 0.833vw;
}

.lists {
  display: flex;
  width: 16.25vw;
  height: 100%;
  flex-direction: column;
  border-right: 1px solid #d6c185;
}

.lists .theme {
  display: flex;
  height: 5.521vw;
  width: 100%;
  background-image: radial-gradient(circle at 12% 6.8%,
      #d9cba6 0%,
      #725228 123%);
  border-radius: 0.833vw 0px 0px 0px;
}

.theme-i {
  display: flex;
  height: 2.5vw;
  width: 8.958vw;
  margin-top: 0.99vw;
  margin-left: 3.646vw;
}

.theme-img {
  display: flex;
  height: 2.5vw;
  width: 2.5vw;
  background-image: url("../assets/jrkt_w.svg");
}

.theme-text {
  height: 1.458vw;
  width: 5.833vw;
  margin-top: 0.521vw;
  margin-left: 0.625vw;
  font-family: SourceHanSansCN-Bold;
  font-size: 1.458vw;
  color: #ffffff;
  letter-spacing: 0;
  font-weight: 700;
  line-height: 1.458vw;
}

.list {
  display: flex;
  position: relative;
  cursor: pointer;
  margin-top: 0.26vw;
  width: 100%;
  height: 4.531vw;
  box-shadow: 0 0.208vw 0.26vw 0 rgba(0, 0, 0, 0.2),
    0 0.313vw 0.521vw 0 rgba(0, 0, 0, 0.19);
  background-image: linear-gradient(0deg,
      rgba(214, 193, 133, 0.4) 0%,
      rgba(242, 230, 202, 0.4) 100%);
}

.txt {
  display: flex;
  position: relative;
  font-family: SourceHanSansCN-Normal;
  font-size: 1.458vw;
  color: #000000;
  letter-spacing: 0;
  font-weight: 400;
  margin-left: 1.25vw;
  margin-top: 1.505vw;
  z-index: 1;
}

.list:hover {
  background: #d6c185;
  opacity: 0.8;
}

.list.active {
  background-image: linear-gradient(0deg, #d6c185 0%, #f2e6ca 100%);
  opacity: 1;
  font-family: SourceHanSansCN-Bold;
  font-size: 1.25vw;
  color: #735227;
  letter-spacing: 0;
  font-weight: 700;
}

.active .txt {
  opacity: 1;
  font-family: SourceHanSansCN-Bold;
  font-size: 1.25vw;
  color: #735227;
  letter-spacing: 0;
  font-weight: 700;
}

.media {
  display: flex;
  height: 33.333vw;
  width: 63.75vw;
  margin-top: 2.083vw;
  margin-left: 1.667vw;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(0deg, #d6c185 0%, #f2e6ca 100%);
}

.media-image {
  display: flex;
  height: 33.333vw;
  width: 63.75vw;
}

h2,
p {
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  color: #ffffff;
  letter-spacing: 0;
  font-weight: 700;
}

.button {
  margin-left: 1.667vw;
  background-image: linear-gradient(180deg, #cfac75 0%, #a1753a 98%);
  border-radius: 0.417vw;
  height: 4.167vw;
  width: 18.229vw;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  outline: none;
  border: none;
  font-family: SourceHanSansCN-Medium;
  font-size: 1.953vw;
  color: #ffffff;
  text-align: center;
  line-height: 1.563vw;
  font-weight: 500;
  cursor: pointer;
}

.button:hover {
  background-image: linear-gradient(180deg, #a1753a 0%, #cfac75 98%);
}
</style>
