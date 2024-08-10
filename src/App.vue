<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.arrow {
  width: 100vw;
  height: 100vh;
}

.header {
  display: flex;
  width: 100%;
  background-image: radial-gradient(
    circle at 88% 50%,
    #fbf3e2 0%,
    #d5c083 31%,
    #fef7e9 67%
  );
  height: 7.292vw;
}

.header img {
  /* display: flex;
  margin-left: 80px;
  margin-top: 26px;
  height: 48px;
  width: 328px; */
  display: flex;
  margin-left: 4.167vw;
  margin-top: 1.354vw;
  height: 2.5vw;
  width: 17.083vw;
}

.over-header {
  display: flex;
  position: relative;
  width: 100vw;
  height: 5.208vw;
  background-image: radial-gradient(
    circle at 88% 50%,
    #fbf3e2 0%,
    #d5c083 31%,
    #fef7e9 67%
  );
  border-radius: 0px 0px 1.875vw 1.875vw;
  z-index: 999;
}

.show-date {
  display: flex;
  height: 2.292vw;
  width: 4.948vw;
  margin-top: 1.458vw;
  margin-left: 60vw;
  font-family: SourceHanSansCN-Medium;
  font-size: 0.833vw;
  color: #735227;
  text-align: right;
  line-height: 1.146vw;
  font-weight: 500;
}

.shou-time {
  display: flex;
  height: 2.188vw;
  width: 8.802vw;
  font-family: SourceHanSansCN-Medium;
  font-size: 2.188vw;
  color: #735227;
  font-weight: 500;
  margin-left: 0.833vw;
  margin-top: 1.042vw;
}

.body {
  display: flex;
  margin-top: -2.083vw;
  width: 100%;
  /* height: calc(100vh - 5.208vw); */
  /* height: 100%; */
  height: 100%;
  /* height: 980px; */
  background-image: linear-gradient(180deg, #422b11 0%, #241f19 100%);
  border-radius: 1.875vw 1.875vw 0 0;
}

.over-body {
  background-image: linear-gradient(180deg, #422b11 0%, #241f19 100%);
  display: flex;
  width: 100%;
  /* height: 100%; */
  height: 100vh;
  margin-top: -2.083vw;
}

.feo {
  position: fixed;
  display: flex;
  bottom: 0;
  right: 0;
  height: 37.292vw;
  width: 32.813vw;
  background-image: url("./assets/logo_hk_bg.svg");
  background-repeat: no-repeat;
  background-position: left top;
  background-size: 40.833vw 41.302vw;
}

/* 底部标签 */
.botton-box {
  position: fixed;
  display: flex;
  margin-top: 8vw;
  bottom: 0;
  background-image: radial-gradient(
    circle at 91% 50%,
    #fef7e9 0%,
    #d5c083 41%,
    #fef7e9 91%
  );
  border-radius: 1.875vw 1.875vw 0px 0px;
  height: 7.292vw;
  width: 100%;
  position: fixed;
  z-index: 1;
  justify-content: center;
  align-items: center;
}

.botton-box button {
  display: flex;
  height: 4.167vw;
  width: 18.229vw;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(180deg, #ff9274 0%, #a14b3a 98%);
  border-radius: 0.417vw;
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

.botton-box button:hover {
  background-image: linear-gradient(180deg, #a14b3a 0%, #ff9274 98%);
  box-shadow: 0px 0.533vw 1.067vw rgba(175, 135, 77, 0.3);
  transition: all 0.3s ease-in-out;
}

.date {
  display: flex;
  height: 2.292vw;
  width: 4.948vw;
  margin-top: 1.458vw;
  margin-left: 60vw;
  font-family: SourceHanSansCN-Medium;
  font-size: 0.833vw;
  color: #735227;
  text-align: right;
  line-height: 1.146vw;
}

.time {
  display: flex;
  height: 2.188vw;
  width: 8.802vw;
  font-family: SourceHanSansCN-Medium;
  font-size: 2.188vw;
  color: #735227;
  font-weight: 500;
  margin-left: 0.833vw;
  margin-top: 1.042vw;
}

/* 加载动画效果 */
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1000;
}
.condition {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 33.333vw;
  width: 63.75vw;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.8);
  left: 510px;
}
.spinner {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #d6c185;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
