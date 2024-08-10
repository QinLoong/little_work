<template>
  <div>
    <!-- <outer-nav :singleBtn="isShow">
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
            </div>
            <text class="enth">{{ item.enth }}</text>
          </div>
          <div class="bottom-five"></div>
        </div>
      </template>
    </outer-nav> -->
  </div>
</template>
<script>
import OuterNav from "../components/OuterNav.vue";
export default {
  components: { OuterNav },
  data() {
    return {
      isShow: "",
      boxes: [
        { id: 1, imgPath: require("@/assets/ic_jrkt.svg"), name: "金融课堂" },
        { id: 2, imgPath: require("@/assets/ic_bdsh.svg"), name: "本地生活" },
        { id: 3, imgPath: require("@/assets/ic_yxhd.svg"), name: "营销活动" },
        { id: 4, imgPath: require("@/assets/ic_dzyh.svg"), name: "电子银行" },
        { id: 5, imgPath: require("@/assets/ic_hdyx.svg"), name: "互动游戏" },
      ],
    };
  },
};
</script>
