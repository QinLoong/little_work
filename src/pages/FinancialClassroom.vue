<template>
  <div>
    <!-- <el-button @click="$router.push('/')">返回首页</el-button>
    <el-button @click="$router.go(-1)">返回上一页</el-button>
    <el-row>
      <el-col :span="6">
        <el-menu @select="handleSelect">
          <el-menu-item index="启用常识">信用卡启用小常识</el-menu-item>
          <el-menu-item index="申请额度">信用卡申请及额度</el-menu-item>
          <el-menu-item index="预授权">信用卡预授权</el-menu-item>
          <el-menu-item index="分期付款">分期付款</el-menu-item>
          <el-menu-item index="计算器">计算偿还信用卡金额</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="18">
        <component :is="currentComponent"></component>
      </el-col>
    </el-row> -->
    <outer-nav :singleBtn="isShow">
    <template>
        <div class="lists">
          <div class="theme">
            <div class="theme-i">
              <div class="theme-img"></div>
              <div class="theme-text">金融课堂</div>
            </div>
          </div>
          <div
            class="list"
            v-for="(item, index) in shopingData"
            :key="item.id"
            @click="showContent(index)"
            :class="{ active: selectedIndex === index }"
          >
            <div class="txt">{{ item.title }}</div>
            <!-- {{ item.title }} -->
          </div>
        </div>
        <div class="media">
          <div v-if="selectedItem">
            <div v-if="selectedItem.imgPath">
              <img :src="selectedItem.imgPath" class="media-image" />
            </div>
            <div v-else>
              <h2>{{ selectedItem.title }}</h2>
            </div>
          </div>
        </div>
      </template>
    </outer-nav>
  </div>
</template>

<script>
import OuterNav from "../components/OuterNav.vue";
import CreditCardActivation from "./CreditCardActivation.vue";
import CreditCardApplication from "./CreditCardApplication.vue";
// 导入其他组件

export default {
  components: { OuterNav },
  data() {
    return {
      isShow: 'showTow',
      currentComponent: "CreditCardActivation", // 默认组件
      shopingData: [
        {
          id: 1,
          imgPath: require("../assets/image.png"),
          title: "信用卡启用小常识",
        },
        {
          id: 2,
          imgPath: require("../assets/v1.png"),
          title: "信用卡申请及额度",
        },
        {
          id: 3,
          imgPath: require("../assets/v2.png"),
          title: "信用卡预授权",
        },
        {
          id: 4,
          imgPath: require("../assets/v3.png"),
          title: "分期付款",
        },
        {
          id: 5,
          imgPath: require("../assets/v4.png"),
          title: "计算偿还信用卡金额",
        },
      ],
      selectedItem: null,
      selectedIndex: null,
    };
  },
  mounted(){
    this.showContent(0)
  },
  methods: {
    handleSelect(index) {
      if (index === "启用常识") this.currentComponent = CreditCardActivation;
      else if (index === "申请额度")
        this.currentComponent = CreditCardApplication;
      // 处理其他选项
    },
    showContent(index) {
      // 检查索引是否在范围内
      if (index >= 0 && index < this.shopingData.length) {
        this.selectedIndex = index;
        this.selectedItem = this.shopingData[index];
      } else {
        return;
      }
    },
  },
};
</script>
<style scoped lang="css">
.mid-box[data-v-7186f250] {
    display: flex;
    margin-top: 4vw;
    margin-left: 4vw;
}   
.logo {
  display: flex;
  height: 48px;
  width: 328px;
  margin-left: 80px;
  margin-top: 26px;
}
.conter-box {
  display: flex;
  margin-left: 160px;
  margin-top: 100px;
  height: 720px;
  width: 1600px;
  overflow: hidden;
  background-image: linear-gradient(180deg, #ffffff 81%, #fbf5ef 100%);
  border: 0px solid rgba(199, 137, 58, 0.3);
  box-shadow: 4px 4px 16px 4px rgba(199, 137, 58, 0.15);
  border-radius: 16px;
}
.lists {
  display: flex;
  width: 312px;
  height: 100%;
  flex-direction: column;
  /* border: 1px solid #d6c185; 黑色边框，宽度为1像素，实线 */
}
.lists .theme {
  display: flex;
  height: 106px;
  width: 100%;
  background-image: radial-gradient(
    circle at 12% 6.8%,
    #d9cba6 0%,
    #725228 123%
  );
  border-radius: 16px 0px 0px 0px;
}
.theme-i {
  display: flex;
  height: 48px;
  width: 172px;
  margin-top: 19px;
  margin-left: 70px;
}
.theme-img {
  display: flex;
  height: 48px;
  width: 48px;
  background-image: url("../assets/jrkt_w.svg");
}
.theme-text {
  height: 28px;
  width: 112px;
  margin-top: 10px;
  margin-left: 12px;
  font-family: SourceHanSansCN-Bold;
  font-size: 28px;
  color: #ffffff;
  letter-spacing: 0;
  font-weight: 700;
  line-height: 28px;
}
.list {
  display: flex;
  position: relative;
  cursor: pointer;
  margin-top: 5px;
  width: 100%;
  height: 87px;

  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
  /* background-image: linear-gradient(0deg, #d6c185 0%, #f2e6ca 100%);
  opacity: 0.4; */
  /* transition: background-image 0.3s, opacity 0.3s;  */
  background-image: linear-gradient(
    0deg,
    rgba(214, 193, 133, 0.4) 0%,
    rgba(242, 230, 202, 0.4) 100%
  );
}
.txt {
  display: flex;
  position: relative;
  font-family: SourceHanSansCN-Normal;
  font-size: 28px;
  color: #000000;
  letter-spacing: 0;
  font-weight: 400;
  margin-left: 24px;
  margin-top: 28.89px;
  z-index: 1; /* Ensure text is above other elements */
}
.list:hover {
  background: #d6c185;
  opacity: 0.8;
}
.list.active {
  background-image: linear-gradient(
    0deg,
    #d6c185 0%,
    #f2e6ca 100%
  ); /* 点击后的颜色 */
  opacity: 1;
  font-family: SourceHanSansCN-Bold;
  font-size: 24px;
  color: #735227;
  letter-spacing: 0;
  font-weight: 700;
}
.active .txt {
  opacity: 1;
  font-family: SourceHanSansCN-Bold;
  font-size: 24px;
  color: #735227;
  letter-spacing: 0;
  font-weight: 700;
}
.media[data-v-24d1806e] {
    display: flex;
    height: 567px;
    width: 850px;
    margin-top: -100px;
    margin-left: 32px;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(0deg, #d6c185 0%, #f2e6ca 100%);
}
.media-image {
  display: flex;
  height: 640px;
  width: 1224px;
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
  margin-left: 32px;
  background-image: linear-gradient(180deg, #cfac75 0%, #a1753a 98%);
  border-radius: 8px;
  height: 80px;
  width: 350px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  outline: none;
  border: none;
  font-family: SourceHanSansCN-Medium;
  font-size: 37.5px;
  color: #ffffff;
  text-align: center;
  line-height: 30px;
  font-weight: 500;
  cursor: pointer;
}
.button:hover {
  background-image: linear-gradient(180deg, #a1753a 0%, #cfac75 98%);
}
.lists[data-v-24d1806e] {
    height: 585px;
    margin-top: -100px;
}
</style>