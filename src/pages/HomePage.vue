<template>
  <div>
    <outer-nav :singleBtn="isShow"> </outer-nav>
  </div>
</template>

<script>
import OuterNav from "../components/OuterNav.vue";
export default {
  components: { OuterNav },
  data() {
    return {
      isShow: "",
    };
  },
};
</script>
