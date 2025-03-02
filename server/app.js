const express = require("express");
const app = express();
const port = 3000;

// 模拟用户数据
const users = [
  { username: "admin", password: "123456" },
  { username: "user1", password: "password1" },
];

// 登录接口
app.post("/api/login", express.json(), (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    res.json({ success: true, message: "登录成功" });
  } else {
    res.status(401).json({ success: false, message: "用户名或密码错误" });
  }
});

// 启动服务
app.listen(port, () => {
  console.log(`后端服务已启动，访问地址：http://localhost:${port}`);
});