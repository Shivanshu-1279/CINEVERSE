// import React from 'react'
// import {Search} from '@material-ui/icons';
// import {Notifications} from '@material-ui/icons';
// import {ArrowDropDown} from '@material-ui/icons';
// import {useState} from 'react'
// import "./navbar.scss"
// import { Link } from "react-router-dom";


// const Navbar = () => {
  
//   // Function made to make the navbar highlight in black color while scrolling down 
//     const [isScrolled, setIsScrolled] = useState(false);
//     // console.log()
//     window.onscroll =()=>{
//         setIsScrolled(window.pageYOffset === 0 ? false : true);
//         return () => (window.onscroll = null);
//     };
    
//   return (
//     <div className={isScrolled ? "navbar scrolled" : "navbar" }>
//       <div className="container">
//         <div className="left">
//             <img           
//               src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
//               alt="" />

         
//             <Link to="/" className="link">
//             <span>Home</span>
//             </Link>

//             <Link to="/movies" className="link"> 
//               <span>Movies</span>
//             </Link>

//             <Link to="/series" className="link">
//               <span>Series</span>
//             </Link>
       
//             <span>New and Popular</span>
//             <span>My list</span>
//             </div>

//         <div className="right">
//              <Search   className='icons'/>
//             <span>KID</span>
//             <Notifications className='icons'/>
//             <img src="https://media.gettyimages.com/id/1208363215/photo/online-streaming-with-tablet-pc.jpg?s=612x612&w=0&k=20&c=LsGt9o6745wOHFsMcSO9LtMckU2IxNYpC9J4q88vNeU=" alt="" />
            
//             <div className="profile">
//             <ArrowDropDown  className='icons'/>
//                     <div className="options">
//                         <span>Settings</span>
//                         <span>Logout</span>
//                     </div>
//             </div>
//         </div>
       

//       </div>
//     </div>
//   )
// }

// export default Navbar






import React, { useContext } from 'react'
import {Search} from '@material-ui/icons';
import {Notifications} from '@material-ui/icons';
import {ArrowDropDown} from '@material-ui/icons';
import {useState} from 'react'
import "./navbar.scss"
import { Link } from "react-router-dom";
import {AuthContext} from '../../authContext/AuthContext'
import { logout } from '../../authContext/AuthActions';


const Navbar = () => {
  

  // Function made to make the navbar highlight in black color while scrolling down 
    const [isScrolled, setIsScrolled] = useState(false);
    // console.log()
    const {dispatch} = useContext(AuthContext);

    window.onscroll =()=>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };
    
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar" }>
      <div className="container">
        <div className="left">
            <img           
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
              alt="" />

         
            <Link to="/" className="link">
            <span>Home</span>
            </Link>

            <Link to="/movies" className="link"> 
              <span className='mainLink'>Movies</span>
            </Link>

            <Link to="/series" className="link">
              <span className='mainLink'>Series</span>
            </Link>
       
            <span>New and Popular</span>
            <span>My list</span>
            </div>

        <div className="right">
             <Search   className='icons'/>
            <span>KID</span>
            <Notifications className='icons'/>
            <img src="https://media.gettyimages.com/id/1208363215/photo/online-streaming-with-tablet-pc.jpg?s=612x612&w=0&k=20&c=LsGt9o6745wOHFsMcSO9LtMckU2IxNYpC9J4q88vNeU=" alt="" />
            
            <div className="profile">
            <ArrowDropDown  className='icons'/>
                    <div className="options">
                        <span>Settings</span>
                        <span onClick={() => dispatch(logout())}>Logout</span>
                    </div>
            </div>
        </div>
       

      </div>
    </div>
  )
}

export default Navbar