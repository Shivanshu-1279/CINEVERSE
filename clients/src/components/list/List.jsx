import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import "./list.scss";
import React, { useRef,useState } from 'react'
import ListItem from "../listItem/ListItem";


export default function List({list}) {

    const [slideNum, setslideNum] = useState(0);

    // A very common use case for using useRef is for when, suppose you click on a button, and then on its click you want an input to come into focus. To do this, we would need to access the DOM element of input and then call its function focus() to focus the input.
    const listRef = useRef();

    // function for moving of arrow key right/left.
     const handleClick = (direction)=>{
        let dist = listRef.current.getBoundingClientRect().x -50
            if(direction ==="left" && slideNum > 0){
                setslideNum(slideNum - 1);
             listRef.current.style.transform = `translateX(${230 + dist}px)`
            }
            // console.log(dist);
            if(direction ==="right" && slideNum < 2){
                listRef.current.style.transform = `translateX(${-230 + dist}px)`
                setslideNum(slideNum + 1);
               }
     }

  return (
    <div className="list">
      {/* props is given to show the title as provided */}
     <span className="listTitle">{list.title}</span>
     <div className="wrap">
             <ArrowBackIos className="arrow back"  onClick={()=>handleClick("left")}/>
             <div className="container" ref={listRef}>

              {/* map function is used  for displaying the content of the articles as provided.*/}
              {list.content.map((item, i) => (                   
              <ListItem index={i} item={item} />
              ))}
              </div>
             <ArrowForwardIos className="arrow forward"  onClick={()=>handleClick("right")}/>
     </div>
    </div>
  )
}