import React from "react";
import Navbar from "../compo/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import $ from "jquery";

<FontAwesomeIcon icon="fa-solid fa-star" style={{ color: "#f39512" }} />;





const Main = (props) => {
  let starvalue = props.img.vote_average;
  
  const vote = () => {
    let array = [1, 2, 3];

    console.log(starvalue);
    if (starvalue >= 8) {
      return (
        <>
          {array.map(() => {
            return <FontAwesomeIcon icon={faStar} />;
          })}
        </>
      );
    } else if (starvalue >= 6) {
      return (

        <>

          {array.map(() => {
            return <FontAwesomeIcon icon={faStar} />;
          })}
        </>
      );
    } else if (starvalue >= 4) {
      return (
        <>
          {array.map(() => {
            return <FontAwesomeIcon icon={faStar} />;
          })}
        </>
      );
    } else if (starvalue >= 2) {
      return (
        <>
          {array.map(() => {
            return <FontAwesomeIcon icon={faStar} />;
          })}
        </>
      );
    } else if (starvalue >= 0) {
      return (
        <>
          {array.map(() => {
            return <FontAwesomeIcon icon={faStar} />;
          })}
        </>
      );
    }
  };

  // useEffect(() => {
         
  //           setTimeout(()=>{Canvas()},2000)


  // }, []);

  
  const delUpdown=()=>{
    $('.movie-box').removeClass('updown')
}
useEffect(()=>{
  setTimeout(()=> {delUpdown()},2000)
},[])


  return (
    <div className="movie-box updown">
      <div>
        <img
          
          src={`https://image.tmdb.org/t/p/w500${props.img.poster_path}`}
          className="movie-img"
        ></img>
      </div>

      <div className="movie-content">
        <Navbar settitle={props.settitle}></Navbar>
        <h1 className="movie-content_title">{props.img.original_title}</h1>
        <h2 className="movie-content_date">{props.img.release_date}</h2>
        <h3 className="movie-content_star">
          <span>{Math.floor(props.img.vote_average * 10) / 10}</span>
          <span className="movie-content_star_icon">{vote(Math.floor(props.img.vote_average * 10) / 10)}</span>
        </h3>
        <p className="movie-content_overview">
          {overview(props.img.overview)}. . .{" "}
          <button className="movie-content_overview_btn">더보기</button>
        </p>

        <div className="movie-content_video">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${props.video}?controls=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const overview = (data) => {
  if (data !== undefined) {
    return data.slice(0, 150);
  }
};


const Canvas = ()=> {
       
        var image =  document.querySelector('.movie-img');
       
        var fixedX = 50; // 원하는 x 좌표
        var fixedY = 100;  // 원하는 y 좌표
        var canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0);
        var pixelData = ctx.getImageData(fixedX, fixedY, 1, 1).data;
        var rgbaValue = `rgba(${pixelData[0]},${pixelData[1]},${pixelData[2]},${(pixelData[0]/255).toFixed(2)})`
        console.log(rgbaValue)
}

export default Main;
