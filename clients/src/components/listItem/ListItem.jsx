import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import "./listItem.scss"
import {useState,useEffect} from 'react'
import React from 'react'
import axios from "axios";
import {Link} from 'react-router-dom'

export default function ListItem({index,item}) {
  
const [hovered, setHovered] = useState(false);
const [movies, setMovies] = useState({});
   
         useEffect(() => {
                 const getMovie = async () =>{
                  try {
                    const res  = await axios.get("/movies/find/" + item, {
                      headers: {

                        // token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODhhMmE3OGZkYThiNzA5MGI0ZjA4NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NjgyMTAxNiwiZXhwIjoxNjg3MjUzMDE2fQ.573frXKtkfzeNet_jcLWPzatlhhakNBk8Q-7HBQmBHc"            
                        
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODhhMmE3OGZkYThiNzA5MGI0ZjA4NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODQ4OTA3MiwiZXhwIjoxNjg4OTIxMDcyfQ.sx4DZAUye0Lz9q2tCBbKX3dxLZ7yqYUxie5tZ4Biblw"     
                        
                      },
                    });
                    setMovies(res.data);
                  } catch (err) {
                    console.log(err);
                  }
             }
            getMovie();
                }, [item]);


  return (
    <Link to={{pathname:"/watch" , movie:movies}}>
    <div className="listItem" 
    style={{left: hovered && index*190 - 60 + index* 2.5 }}
    onMouseEnter={()=>setHovered(true)}
    onMouseLeave={()=>setHovered(false)}
    >
           <img src={movies.img}
            alt=""
             />

{/* condition-> if hovered then show below: */}
{hovered && (
    <>
<video src={movies.trailer} autoPlay={true} loop/>
           <div className="itemInfo">
                 <div className="icons">
                 <PlayArrow className="icon" />
                 <Add className="icon" />
                 <ThumbUpAltOutlined className="icon" />
                 <ThumbDownOutlined className="icon" />
                 </div>

                 <div className="itemInfoTop">
                    <span style={{color:"white" , fontWeight:"bold"}}>{movies.title}</span>
                    <span className="ageLimit"> +{movies.limit}  </span>
                    <span>{movies.year}</span>
                 </div>

                 <div className="desc">
                 {movies.desc}
                 </div>
                 <div className="genre">{movies.genre}</div>
           </div>
           </>
           )}
           
    </div>
    </Link>
  )
}