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
    <!-- <outer-nav :singleBtn="isShow"> -->
    <!-- <template>
        <div class="five" v-for="item in shopingImage" :key="item.id">
          <div class="shadow-top-five"></div>
          <img :src="item.imgPath" class="image-five" />
          <div class="but-five">
            <div class="title-boxs">
              <div class="title">
                {{ item.title }}
              </div>
              <img src="../assets/ic_click.svg" alt="" class="icon-five" />
            </div>
            <text class="enth">{{ item.enth }}</text>
          </div>
          <div class="bottom-five"></div>
        </div>
      </template> -->
    <!-- </outer-nav> -->
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
      currentComponent: "CreditCardActivation", // 默认组件
    };
  },
  methods: {
    handleSelect(index) {
      if (index === "启用常识") this.currentComponent = CreditCardActivation;
      else if (index === "申请额度")
        this.currentComponent = CreditCardApplication;
      // 处理其他选项
    },
  },
};
</script>
