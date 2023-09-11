const express = require('express');
const path = require('path');
const app = express();
var cors = require('cors');
var client_id = 'cx19axToQKgHxLRoRdEk';
var client_secret = 'f0YR0jIaHp';
const fetch = require('node-fetch');
const conn = require('./config/database')
app.use(express.json());
app.use(cors());



  app.get('/api', function (req, res) {
   

    const url = 'https://api.themoviedb.org/3/movie/movie_id/images';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZGY3MzVkMjg1ODQ3NWU4MGFiMTMzODk1Y2VlZTlkMyIsInN1YiI6IjY0ZjMxNDViNzdkMjNiMDBjYjg3MTA1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z-E0Cizv8nDJJccSkhgLqH0Fy9V_FxCLHaLvFz_m9Jk'
      }
    };

    fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));


  
  });

app.post('/api/movie',(req,res)=>{
     console.log('이거뭐냐',req.body.data)
    let 영화제목인코딩 = encodeURI(req.body.data)
        
  const url = `https://api.themoviedb.org/3/search/movie?query=${영화제목인코딩}&include_adult=false&language=ko&page=1`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZGY3MzVkMjg1ODQ3NWU4MGFiMTMzODk1Y2VlZTlkMyIsInN1YiI6IjY0ZjMxNDViNzdkMjNiMDBjYjg3MTA1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z-E0Cizv8nDJJccSkhgLqH0Fy9V_FxCLHaLvFz_m9Jk'
      } 
    };

    fetch(url, options)
    .then(res => res.json())
    .then(json =>res.json(json) )
    .catch(err => console.error('error:' + err));


})
app.post('/api/video',(req,res)=>{
  console.log('이거뭐냐',req.body.video.id)
  
  const url = `https://api.themoviedb.org/3/movie/${req.body.video.id}/videos?language=ko`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZGY3MzVkMjg1ODQ3NWU4MGFiMTMzODk1Y2VlZTlkMyIsInN1YiI6IjY0ZjMxNDViNzdkMjNiMDBjYjg3MTA1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z-E0Cizv8nDJJccSkhgLqH0Fy9V_FxCLHaLvFz_m9Jk'
  }
};

fetch(url, options)
  .then(res => res.json(res))
  .then(json => res.json(json))
  .catch(err => console.error('error:' + err));

})

app.post('/api/signup',(req,res)=>{
    let {id,pw,nick} = req.body
    let sql ="insert into user (user_id,user_pw,user_nick) values(?,?,?)"
  conn.query(sql,[id,pw,nick],(err,rows)=>{
    if(rows.affectedRows == 1){
      res.json('저장완료')
    }
  })
})

app.post('/api/search',(req,res)=>{
    console.log(req.body.search)
  const url = 'https://api.themoviedb.org/3/search/movie?query=%ED%85%8C%EB%84%B7&include_adult=false&language=ko&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZGY3MzVkMjg1ODQ3NWU4MGFiMTMzODk1Y2VlZTlkMyIsInN1YiI6IjY0ZjMxNDViNzdkMjNiMDBjYjg3MTA1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z-E0Cizv8nDJJccSkhgLqH0Fy9V_FxCLHaLvFz_m9Jk'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));

})

app.post('/api/login',(req,res)=>{
  let {id,pw} = req.body
  let sql ="select * from user where user_id=? and user_pw = ?"
conn.query(sql,[id,pw],(err,rows)=>{
      res.json(rows)
})
})



app.listen(3030, function () {
  console.log('listening on 8080')
  
}); 