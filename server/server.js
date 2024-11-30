const express = require("express");
const app = express();
const routes = require("./routes/index");

app.use(express.json());

//Routing is controller of API
app.use("/api", routes);  // "/api" 경로 하위에 설정된 모든 라우팅을 처리

app.listen(3001, () => {
   console.log("Server running on http://localhost:3001");
});
