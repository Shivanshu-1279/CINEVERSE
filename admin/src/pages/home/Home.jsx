import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
// import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useState,useEffect } from "react";
import axios from 'axios' ;
import { useMemo } from "react";
export default function Home() {
  
const MONTHS = useMemo(()=> [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
], []
); 

const [userStats, setUserStats] = useState([]);

useEffect(() => {
  const getStats = async()=>{

    try {
      const res = await axios.get("/users/stats" ,
      {
       headers:
       {

        // token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODhhMmE3OGZkYThiNzA5MGI0ZjA4NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NzQyNDYwMiwiZXhwIjoxNjg3ODU2NjAyfQ.isow0nXLi3PvrdUYXf2Ki3qPv9gZfKy4V5ecW5Z3drI"
        
        token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODhhMmE3OGZkYThiNzA5MGI0ZjA4NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODMxMTA0NSwiZXhwIjoxNjg4NzQzMDQ1fQ.eEgrhQYNqVF1bvHTxh75eQP7tC0zRONRJm_gb0R2g0I"
       },
      });

      // so here so have select the stat graph according to the user, so we used map function to set each data user along with the specified month. And since our months are in array which starts from 0, we will be subtracting it by -1;

      // here we are comparing and sorting total no. of users in each month the by values 
      const statsList = res.data.sort(function(a,b){
        return a._id - b._id;
      });
          statsList.map(item=> setUserStats(prev=>[...prev, {name:MONTHS[item._id-1], "New User": item.total },
        ]) 
);
    } catch (err) {
      console.log(err);
    }
  };
  getStats();
         
}, [MONTHS]);

// console.log(userStats);
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
