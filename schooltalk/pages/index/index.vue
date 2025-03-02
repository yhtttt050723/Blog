<template>
  <view class="login-container">
    <image src="/static/background.jpg" alt="Background Image" class="background-image"></image>
    <view class="welcome-text">欢迎来到云理工社区</view>
    <view class="login-form">
      <view class="form-item">
        <text>用户名:</text>
        <input v-model="username" placeholder="请输入用户名" />
      </view>
      <view class="form-item">
        <text>密码:</text>
        <input v-model="password" type="password" placeholder="请输入密码" />
      </view>
      <button @click="handleLogin">登录</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      // 调用后端登录接口
      uni.request({
        url: "http://localhost:3000/api/login",
        method: "POST",
        data: {
          username: this.username,
          password: this.password,
        },
        success: (res) => {
          if (res.data.success) {
            uni.showToast({
              title: "登录成功",
              icon: "success",
            });
            setTimeout(() => {
              uni.navigateTo({
                url: "/pages/home/home",
              });
            }, 1000);
          } else {
            uni.showToast({
              title: res.data.message || "登录失败，请重试",
              icon: "none",
            });
          }
        },
        fail: () => {
          uni.showToast({
            title: "网络错误，请检查后端服务",
            icon: "none",
          });
        },
      });
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.welcome-text {
  font-size: 24px;
  color: #ADD8E6;
  margin-bottom: 20px;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 8px;
}

.form-item {
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
}

.form-item text {
  margin-right: 10px;
}
</style>