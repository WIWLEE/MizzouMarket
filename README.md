서버 시작 : node server.js
클라이언트 시작 : (sudo) npm start

--server : 포트 3001
config/db : DB 연결 기능만 함
models/ : 연결한 DB의 엔티티 값을 저장함, 이때 실제 DB function (INSERT 등) 기능은 model에서 정의됨.
api/ : 각 라우트에 대한 model function을 지정해줌
routes/ : 각 api route에 대한 방향을 지정해줌. (ex) api/items 이면 api/ItemAPI로 가라!), 일종의 controller 역할 -> app.use를 이용함
* 단, 제일 기본적인 /api 기본 라우트는 server.js 에서 지정해줌 -> 이후 routes/index로 넘어감


--client : 포트 3000
App.js : 기본적으로 실행되는 페이지. 여기서 분리된 pages들을 렌더시킨다. 
pages : 각 페이지를 저장함
components : 페이지에 들어가는 요소 저장도 괜찮을듯 (난안씀)
