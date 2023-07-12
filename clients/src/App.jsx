import './App.scss';
import Home from './pages/home/Home'
import Login from './pages/login/Login';
import Watch from './pages/watch/Watch';
import Register from './pages/register/Register';
// import Navbar from './featured/navbar/Navbar'
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  // Link
  // useRouteMatch,
} from "react-router-dom";
import { useContext } from 'react';
import {AuthContext} from './authContext/AuthContext'

const App =()=> {

  const {user} = useContext(AuthContext);
  return (

    <BrowserRouter>
      <Switch>

      <Route exact path="/">
        {user? <Home /> :  <Redirect to ="/register"/>}
      </Route>

      <Route path="/register">
        {!user? <Register/> :  <Redirect to ="/" />}
      </Route>

      <Route path="/login">
        {!user? <Login /> :  <Redirect to ="/" />}
      </Route>

{/* If user if true then show the below components */}
{user && (
  <>
       <Route path="/movies">
          <Home type = "movie"/>
        </Route>

        <Route path="/series">
          <Home type = "series"/>
        </Route>

      <Route path='/watch'>
        <Watch />
      </Route>
  </>
)}
      
    </Switch>
    </BrowserRouter>

  );
}

export default App;
