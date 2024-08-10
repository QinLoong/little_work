<template>
  <div class="arrow">
    <div class="over-header">
      <img src="../assets/logo_hk_top.png" class="logo" />
      <div class="date">{{ formattedDate }}</div>
      <div class="time">{{ formattedTime }}</div>
    </div>
    <div class="over-body">
      <div class="mid-box">
        <slot></slot>
      </div>
      <div class="botton-box" v-if="singleBtn === 'showOne'">
        <button @click="goBack">返回首页</button>
      </div>
      <div class="botton-box" v-else-if="singleBtn === 'showTow'">
        <button @click="getToBack">返回首页</button>
        <button @click="getBack" class="button" style="margin-left: 10px">
          返回上一页
        </button>
      </div>
    </div>
    <div class="feo"></div>
    <div v-if="loading" class="loading-overlay">
      <div class="spinner"></div>
      <p>加载中...</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["singleBtn"],
  data() {
    return {
      formattedDate: "",
      formattedTime: "",
      loading: false,
    };
  },
  mounted() {
    this.updateDateTime();
    this.timer = setInterval(this.updateDateTime, 1000); //每隔一秒更新时间
  },

  beforeDestroy() {
    clearInterval(this.timer); // 组件销毁前清除定时器
  },
  methods: {
    goBack() {
      this.loading = true;
      setTimeout(() => {
        this.$router.push("/");
        this.loading = false;
      }, 1000);
    },
    updateDateTime() {
      const now = new Date();

      // 获取星期几
      const weekdays = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ];
      const weekday = weekdays[now.getDay()];
      // 获取日期
      const date = now.toISOString().slice(0, 10); // YYYY-MM-DD

      // 获取时间，包含小时、分钟、秒
      const timeOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      const time = now.toLocaleTimeString("zh-CN", timeOptions); // 使用中文格式

      // 格式化日期和时间
      this.formattedDate = `${weekday} ${date}`;
      this.formattedTime = time;
    },
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

.mid-box {
  display: flex;
  margin-top: 9.896vw;
  margin-left: 8.333vw;
}

.mid-box .five {
  display: flex;
  margin: 0;
  height: 24.479vw;
  width: 18.49vw;
  overflow: hidden;
  background-image: linear-gradient(180deg, #fffefe 0%, #fff5ea 100%);
  /* border: 1px solid rgba(199, 137, 58, 0.3); */
  box-shadow: 0.208vw 0.208vw 0.833vw 0.208vw rgba(199, 137, 58, 0.1);
  border-radius: 1.667vw;
  margin-right: 3.125vw;
  z-index: 1;
  flex-direction: column;
}

.bottom-five {
  height: 7.187vw;
  width: 100%;
  margin-top: -6.147vw;
  background-image: linear-gradient(-12deg, #d6c185 0%, #f2e6ca 100%);
}

.shadow-top-five {
  display: flex;
  margin-left: 4.109vw;
  width: 14.375vw;
  height: 13.594vw;
  background-image: url("../assets/bg_dots3.png");
  background-repeat: no-repeat;
  background-position: left top;
  background-size: 14.583vw 14.583vw;
}

.image-five {
  display: flex;
  margin-top: -9.792vw;
  margin-left: 4.563vw;
  height: 8.333vw;
  width: 8.333vw;
}

.but-five {
  display: flex;
  position: relative;
  flex-direction: column;
  height: 7.813vw;
  margin-right: 0;
  width: 100%;
  margin-top: 3.491vw;
  margin-left: 1.667vw;
  background-image: linear-gradient(180deg, #efddab 0%, #a1753a 79%);
  border-radius: 1.667vw 0px 0px 1.667vw;
}

.but-five .title-boxs {
  display: flex;
  height: 3.333vw;
  width: 13.542vw;
  margin-top: 1.042vw;
  margin-left: 1.667vw;
  flex-direction: row;
}

.title-boxs .title {
  width: 10.104vw;
  height: 2.5vw;
  margin-top: 0.417vw;
  font-family: SourceHanSansCN-Medium;
  font-size: 2.396vw;
  color: #ffffff;
  letter-spacing: 0;
  text-shadow: 0.208vw 0.208vw 0.417vw rgba(175, 135, 77, 0.5);
  font-weight: 500;
  text-align: left;
  line-height: 2.396vw;
}

.icon-five {
  height: 3.333vw;
  width: 3.333vw;
  margin-left: 1px;
  cursor: pointer;
}

.icon-five:hover {
  transform: scale(1.5);
  transition: all 0.3s ease-in-out;
  /* background: #d5c083; */
}

.enth {
  width: 12.812vw;
  height: 1.146vw;
  margin-left: 1.667vw;
  margin-top: 0.521vw;
  font-family: SourceHanSansCN-Normal;
  font-size: 1.146vw;
  color: #ffffff;
  letter-spacing: 0;
  font-weight: 400;
  opacity: 0.8;
}
</style>
