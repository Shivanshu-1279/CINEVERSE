import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useState,useEffect } from "react";
import axios from 'axios';

export default function WidgetSm() {
     
 const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {

      try {

        // condition given is that if there new users then it will fetch and show latest users through api.
        const res = await axios.get("/users?new=true",
        {
          headers:
          {

            // token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODhhMmE3OGZkYThiNzA5MGI0ZjA4NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODMxMTA0NSwiZXhwIjoxNjg4NzQzMDQ1fQ.eEgrhQYNqVF1bvHTxh75eQP7tC0zRONRJm_gb0R2g0I"
          

           token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODhhMmE3OGZkYThiNzA5MGI0ZjA4NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODc1MTY1NSwiZXhwIjoxNjg5MTgzNjU1fQ.IziRbj9tbZnwcUiaI16qHnq3o5FHF0u7Cp64zagGwjc"
          
          },
         });

        //  so here we have updated our data successfully.
         setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    // function call
    getNewUsers();
  }, [])

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        
        
        {/* using map function, so that each user can be called and be placed in the given format below */}
        {newUsers.map((user) => (

        <li className="widgetSmListItem">
          <img
            // src={user.profilePic || "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"}
            src={user.profilePic? user.profilePic : "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"  }
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
 ))}
      </ul>
    </div>
  );
}