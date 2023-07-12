import {React ,useState ,useEffect} from 'react'
// import {AcUnit} from '@material-ui/icons';
import Navbar from '../../components/navbar/Navbar'
import './home.scss';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import axios from "axios";
                                                               
const Home = ({type}) => {
                                                         
  const [lists, setlists] = useState([]);
  const [genre, setGenre] = useState(null);
  useEffect(() => {
   const randomLists = async ()=>{

 try {
  // linking api-directory using axios method.
  // and using query for selection of series/movies and for genre type. 
        const res = await axios.get(
             `lists${type ? "?type=" + type : ""}${genre ? "?&genre=" + genre : ""
            }`,
            
            // headers is used for verfying tokens
            {
            headers: {
                     
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODhhMmE3OGZkYThiNzA5MGI0ZjA4NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODQ4OTA3MiwiZXhwIjoxNjg4OTIxMDcyfQ.sx4DZAUye0Lz9q2tCBbKX3dxLZ7yqYUxie5tZ4Biblw"
              
              // token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODhhMmE3OGZkYThiNzA5MGI0ZjA4NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODMxMTA0NSwiZXhwIjoxNjg4NzQzMDQ1fQ.eEgrhQYNqVF1bvHTxh75eQP7tC0zRONRJm_gb0R2g0I"
          
            },
          }
        ); 
    //  console.log(res);
    setlists(res.data);
 } catch (err) {
  console.log(err);
 }
   };
   randomLists();
  },[type , genre]);
  // above depencies are used when ever we change our type or genre , it will automatically call useEffect and will automatically get changed.
  
  return (
    <div className='home'>
        {/* Home */}
        {/* <AcUnit/> */}
        <Navbar/>
        <Featured type={type} setGenre={setGenre} />

        {/* using map function for printing all data in one go */}
        {lists.map((list) => (
        <List list={list} />
        ))}     
    </div>
  )
}
    
export default Home