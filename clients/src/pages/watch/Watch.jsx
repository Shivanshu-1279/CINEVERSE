import { ArrowBackOutlined } from "@material-ui/icons"
import "./watch.scss"
// import logo from './components/tasveer.mov'
import React from 'react'
import { useLocation,Link } from "react-router-dom/cjs/react-router-dom.min"

export default function Watch() {


// The useLocation hook returns the location object that represents the current URL.
  const location = useLocation();
  // console.log(location);

  const movies = location.movie;

  return (

  
    <div className="watch">
        <Link to="/">
      <div className="back"> 
        <ArrowBackOutlined/>
        Home
      </div>
      </Link>
      <video className="video" autoPlay progress controls src={movies.video} ></video>
    </div>
  )
}