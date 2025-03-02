<template>
  <view class="home-container">
    <view class="content">
      <text>欢迎来到校园论坛</text>
    </view>
    <view class="tabbar">
      <view @click="switchTab('profile')">个人信息</view>
      <view @click="switchTab('follow')">关注</view>
      <view @click="switchTab('fun')">趣事发现</view>
      <view @click="switchTab('chat')">好友交流</view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    switchTab(tab) {
      uni.showToast({
        title: `切换到${tab}`,
        icon: "none",
      });
    },
  },
};
</script>

<style>
.home-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tabbar {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background-color: #f5f5f5;
  border-top: 1px solid #ccc;
}
.tabbar view {
  cursor: pointer;
}
</style>