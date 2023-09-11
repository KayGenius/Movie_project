import "./App.css";
import axios from "axios";
import { createContext,useEffect, useState } from "react";
import Main from "./page/main";
import First from "./page/first";
import Header from "./compo/header";
import SgModal from "./compo/signupmodal";
import LgModal from "./compo/loginmodal";
import $ from "jquery";



export let Context = createContext();


function App() {
  const [data, setdata] = useState([]);
  const [title, settitle] = useState("");
  const [Search,setSearch] =useState("")
  const [movieID, setmovieID] = useState(0);
  const [videoID, setvideoID] = useState(0);
  const [JoinModal,setJoinModal] = useState(0)
  const [LoginModal,setLoginModal] = useState(0)
  const [MoreModal,setMoreModal] = useState(0)
  const [User,setUser] =useState('')



  useEffect(() => {
    axios.post("/api/movie", { data: title }).then((x) => {
      return (
        setdata(x.data.results[0]),
        console.log('무슨영화들 받아오냐',x.data.results),
        setmovieID(x.data.results[0])
      );
    });
  }, [title]);

  useEffect(() => {
    if (title != '') {
      axios.post("/api/video", { video: movieID }).then((x) => {
    
      
        return (
          console.log(x.data.results[0]), setvideoID(x.data.results[0].key)
        ); //배열로 저장됨.
      });
    }
  }, [movieID]);

  return (
   
    <>
    <Context.Provider value={{setJoinModal,setLoginModal,setUser,User,data,setMoreModal,MoreModal,Search,setSearch}}>

      {data != undefined ? (
        <div
          className="main"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${data.backdrop_path})`,
          }}
        >
          <Header></Header>
          {LoginModal == 1 ?<LgModal></LgModal>:null}
          {JoinModal == 1 ?<SgModal></SgModal>:null}
        
          <div className="backdrop"></div>
          <Main settitle={settitle} video={videoID} img={data}></Main>
        </div>
      ) : (
        <div className="main">
         
          <div className="backdrop"></div>
          <Header></Header>
          {LoginModal == 1 ?<LgModal></LgModal>:null}
          {JoinModal == 1 ?<SgModal></SgModal>:null}
          <First settitle={settitle}></First>
        </div>
      )}
      </Context.Provider>
    </>
  );
}

export default App;
