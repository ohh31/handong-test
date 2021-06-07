
var express = require('express'); // 라이브러리 첨부
const app = express(); //객체 생성 
const api = require('./router/index');
var cors = require('cors'); // 라이브러리 첨부
app.use(cors());
app.use('/api', api);
const port = 3001;
app.listen(port, ()=> console.log(`Listening on port ${port}`));