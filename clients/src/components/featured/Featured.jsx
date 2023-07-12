import React from 'react'
import "./featured.scss";
import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import { useState , useEffect } from "react";
import axios from 'axios'
// import {Link} from 'react-router-dom'


const Featured = ({type , setGenre}) => {

const [content, setContent] = useState({});


useEffect(() => {
  const getRandomContent = async()=>{
try {

  //type is given so that if there is any query then this would work and if not it will just give any random movie/series. 
  const res = await axios.get(`/movies/random?type=${type}` ,
            {
            headers: {   
              
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODhhMmE3OGZkYThiNzA5MGI0ZjA4NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODQ4OTA3MiwiZXhwIjoxNjg4OTIxMDcyfQ.sx4DZAUye0Lz9q2tCBbKX3dxLZ7yqYUxie5tZ4Biblw"     

              // token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODhhMmE3OGZkYThiNzA5MGI0ZjA4NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODMxMTA0NSwiZXhwIjoxNjg4NzQzMDQ1fQ.eEgrhQYNqVF1bvHTxh75eQP7tC0zRONRJm_gb0R2g0I"
              
            },
          })
  setContent(res.data[0]);
} catch (err) {
  console.log(err); 
}
  }
  getRandomContent();
}, [type])

  return (
    <div className='featured'>
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre" 
          onChange={(e) => setGenre(e.target.value)}
          >
            <option>Genre</option>
            <option value="adventure">adventure</option>
            <option value="comedy">comedy</option>
            <option value="crime">crime</option>
            <option value="fantasy">fantasy</option>
            <option value="horror">horror</option>
            <option value="thrill">thrill</option>
            <option value="drama">drama</option>
            <option value="animations">animations</option>
          </select>
        </div>
      )}
      <img src={content.img} alt="" />
        
        <div className="info">
            <img src={content.imgTitle} alt="" />
            
            <span className='desc'>
                {content.title} - {content.desc}
            </span>
          
          <div className="buttons">
              {/* <Link to="/watch"> */}
                <button className='play'>
                    <PlayArrow/><span>Play</span>
                    </button>
                    {/* </Link> */}
                <button className='more'>
                    <InfoOutlined/>
                    <span>More</span>
                    </button>
            </div>
        </div>
    </div>
  )
}

export default Featured