import React, { Fragment,useState,useEffect } from 'react'
import ReactDOM from 'react-dom';
import './index.scss';
import {firebase_app, auth0} from './data/config';
import {BrowserRouter,Switch,Route,Redirect , useParams} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react'
import store from './store'
import App from './components/app'
import { CSSTransition,TransitionGroup } from 'react-transition-group'
import {routes} from './route';
import ConfigDB  from './data/customizer/config'
import {configureFakeBackend ,authHeader, handleResponse} from './services/fack.backend'
import {FaArrowCircleUp} from 'react-icons/fa';



// Signin page
import Signin from './auth/signin'


// Vendor Signin page
import Vendorsignin from './auth/vendorsignin'

// User Login Page

import Usersignin from './auth/usersignin'

import Search from './website/search'

// Home Page
import Home from './website/home'
import Restaurants from './website/restaurants'
import Blog from './website/blog'
import Details from './website/resturent/details'
import Blogdetails from './website/blog/blogdetails'
import Searchresturent from './website/searchresturent'
import Gallery from './website/gallery'
import Aboutus from './website/aboutus'
import Customerservices from './website/customerservices'
import Technicalsupport from './website/technicalsupport'
import Sales from './website/sales'
import Privacypolicy from './website/privacypolicy'
import Howitwork from './website/howitwork'
import Returnpolicy from './website/returnpolicy'
import Termsofservice from './website/termsofservice'
import Contactus from './website/contactus'
import verifyEmail from './website/verifyEmail'
import Visitors from './website/visitors'


import Signupmsg from './pages/authentication/signupmessage'

import Emailvalidation from './pages/authentication/emailvalidation'

// Authentication
import Login from "./pages/authentication/login"
import LoginWithBgImage from "./pages/authentication/loginWithBgImage"
import LoginWithBgVideo from "./pages/authentication/loginWithBgVideo"
import LoginWithValidation from "./pages/authentication/loginwithValidation"
import Register from "./pages/authentication/register"
import RegisterWithBgImage from "./pages/authentication/registerWithBgImage"
import RegisterWithBgVideo from "./pages/authentication/registerWithBgVideo"
import UnlockUser from "./pages/authentication/unlockUser"
import Forgetpwd from "./pages/authentication/forgetpwd"
import Resetpwd from "./pages/authentication/resetpwd"

// Error page
import Error400 from "./pages/errors/error400"
import Error401 from "./pages/errors/error401"
import Error403 from "./pages/errors/error403"
import Error404 from "./pages/errors/error404"
import Error500 from "./pages/errors/error500"
import Error503 from "./pages/errors/error503"

// Comming soo
import Comingsoon from "./pages/comingSoon/comingsoon"
import ComingsoonImg from "./pages/comingSoon/comingsoonImg"
import ComingsoonVideo from "./pages/comingSoon/comingsoonVideo"

// Maintenance
import Maintenance from "./pages/maintenance"
import Callback from './auth/callback'
import { classes } from './data/layouts';
import {useAuth0} from '@auth0/auth0-react'

// setup fake backend
configureFakeBackend();

const Root = (props) =>  {
  const [anim, setAnim] = useState("");
  const animation = localStorage.getItem("animation") || ConfigDB.data.router_animation || 'fade'
  const abortController = new AbortController();
  const [currentUser, setCurrentUser] = useState(false);
  const [authenticated,setAuthenticated] = useState(false)
  const jwt_token = localStorage.getItem('token'); 
  const defaultLayoutObj = classes.find(item => Object.values(item).pop(1) === 'compact-wrapper');
  const layout = localStorage.getItem('layout') ||  Object.keys(defaultLayoutObj).pop();

  // const queryParams = new URLSearchParams(window.location.search);
  // const user_id = queryParams.get('id');
  // console.log(localStorage.getItem("role"))
  

  useEffect(() => {

      const requestOptions = { method: 'GET', headers: authHeader() };
      fetch('/users', requestOptions).then(handleResponse)
      setAnim(animation)
      firebase_app.auth().onAuthStateChanged(setCurrentUser);
      setAuthenticated(JSON.parse(localStorage.getItem("authenticated")))
      console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];
      console.disableYellowBox = true;
      return function cleanup() {
          abortController.abort();
      }
      
      // eslint-disable-next-line 
    }, []);

    if(localStorage.getItem('country_code') == null) {
      localStorage.setItem('country_code' , 'usa');
    }

 

    return(
      <Fragment>
        <Auth0Provider domain={auth0.domain} clientId={auth0.clientId} redirectUri={auth0.redirectUri}>
        <Provider store={store}>
        <BrowserRouter basename={`/`}>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
          <Route exact path={`${process.env.PUBLIC_URL}/search/:id`} component={Search} />
          <Route  path={`${process.env.PUBLIC_URL}/login`} component={Signin} />
          <Route  path={`${process.env.PUBLIC_URL}/message`} component={Signupmsg} />
          <Route  path={`${process.env.PUBLIC_URL}/verifiedemail/:id`} component={Emailvalidation} />
          <Route  path={`${process.env.PUBLIC_URL}/vendor/login`} component={Vendorsignin} />
          <Route  path={`${process.env.PUBLIC_URL}/user/login`} component={Usersignin} />
          <Route  path={`${process.env.PUBLIC_URL}/home`} component={Home} />
          <Route  path={`${process.env.PUBLIC_URL}/restaurants/:id`} component={Restaurants} />
          <Route  path={`${process.env.PUBLIC_URL}/resturent/details/:id`} component={Details} />
          <Route  path={`${process.env.PUBLIC_URL}/blog/blogdetails/:id`} component={Blogdetails} />
           <Route  path={`${process.env.PUBLIC_URL}/restaurants`} component={Restaurants} />
           <Route  path={`${process.env.PUBLIC_URL}/blog`} component={Blog} />
           <Route  path={`${process.env.PUBLIC_URL}/searchresturent`} component={Searchresturent} />
           <Route  path={`${process.env.PUBLIC_URL}/gallery`} component={Gallery} />
           <Route  path={`${process.env.PUBLIC_URL}/aboutus`} component={Aboutus} />
           <Route  path={`${process.env.PUBLIC_URL}/customerservices`} component={Customerservices} />
           <Route  path={`${process.env.PUBLIC_URL}/technicalsupport`} component={Technicalsupport} />
           <Route  path={`${process.env.PUBLIC_URL}/sales`} component={Sales} />
           <Route  path={`${process.env.PUBLIC_URL}/privacypolicy`} component={Privacypolicy} />
           <Route  path={`${process.env.PUBLIC_URL}/howitwork`} component={Howitwork} />
           <Route  path={`${process.env.PUBLIC_URL}/returnpolicy`} component={Returnpolicy} />
           <Route  path={`${process.env.PUBLIC_URL}/termsofservice`} component={Termsofservice} />
           <Route  path={`${process.env.PUBLIC_URL}/contactus`} component={Contactus} />
           <Route  path={`${process.env.PUBLIC_URL}/verifyEmail`} component={verifyEmail} />
           <Route  path={`${process.env.PUBLIC_URL}/visitors`} component={Visitors} />
           
          <Route  path={`${process.env.PUBLIC_URL}/pages/auth/login`} component={Login}>
          </Route>
          <Route  path={`${process.env.PUBLIC_URL}/pages/auth/loginWithBgImg1`} component={LoginWithBgImage}></Route>
          <Route  path={`${process.env.PUBLIC_URL}/pages/auth/loginWithBgImg2`} component={LoginWithBgVideo}></Route>
          <Route  path={`${process.env.PUBLIC_URL}/pages/auth/loginWithValidation`} component={LoginWithValidation}></Route>
          <Route  path={`${process.env.PUBLIC_URL}/pages/auth/signup`} component={Register}></Route>
          <Route  path={`${process.env.PUBLIC_URL}/signup`} component={Register}></Route>
          <Route  path={`${process.env.PUBLIC_URL}/pages/auth/signupWithImg1`} component={RegisterWithBgImage}></Route>
          <Route  path={`${process.env.PUBLIC_URL}/pages/auth/signupWithImg2`} component={RegisterWithBgVideo}></Route>
          <Route  path={`${process.env.PUBLIC_URL}/pages/auth/forgetPwd`} component={Forgetpwd}></Route>
          <Route  path={`${process.env.PUBLIC_URL}/pages/auth/unlockUser`} component={UnlockUser}></Route>
          <Route  path={`${process.env.PUBLIC_URL}/pages/auth/resetPwd`} component={Resetpwd}></Route>

          <Route  path={`${process.env.PUBLIC_URL}/pages/errors/error400`} component={Error400}></Route>
          <Route  path={`${process.env.PUBLIC_URL}/pages/errors/error401`} component={Error401}></Route>
          <Route  path={`${process.env.PUBLIC_URL}/pages/errors/error403`} component={Error403}></Route>
          <Route  path={`${process.env.PUBLIC_URL}/pages/errors/error404`} component={Error404}></Route>
          <Route  path={`${process.env.PUBLIC_URL}/pages/errors/error500`} component={Error500}></Route>
          <Route  path={`${process.env.PUBLIC_URL}/pages/errors/error503`} component={Error503}></Route>
          
          <Route  path={`${process.env.PUBLIC_URL}/pages/comingsoon/comingsoon`} component={Comingsoon}></Route>
          <Route  path={`${process.env.PUBLIC_URL}/pages/comingsoon/comingsoonImg`} component={ComingsoonImg}></Route>
          <Route  path={`${process.env.PUBLIC_URL}/pages/comingsoon/comingsoonVideo`} component={ComingsoonVideo}></Route>

          <Route  path={`${process.env.PUBLIC_URL}/pages/maintenance`} component={Maintenance}></Route>
          
          <Route  path={`${process.env.PUBLIC_URL}/callback`} render={() => <Callback/>} />

          {/* <Route  path={`${process.env.PUBLIC_URL}/permissions/add`} component={Permissions} />
           */}
          {currentUser !== null || authenticated || jwt_token  ?
          
          <App>
          <Route exact path={`${process.env.PUBLIC_URL}/`} render={() => {
            if(localStorage.getItem("role") == 'admin') {
              return (<Redirect to={`${process.env.PUBLIC_URL}/dashboard/admin/`} />)
            } else {
              return (<Redirect to={`${process.env.PUBLIC_URL}/dashboard/vendor/`} />)
            }
              
          }} /> 
          <TransitionGroup>
              {routes.map(({ path, Component }) => (
                <Route key={path}  exact  path={`${process.env.PUBLIC_URL}${path}`}>
                    {({ match }) => (
                        <CSSTransition 
                          in={match != null}
                          timeout={100}
                          classNames={anim} 
                          unmountOnExit>
                          <div><Component/></div>
                        </CSSTransition> 
                    )}
                </Route>
                ))}
          </TransitionGroup> 
          
          </App>
          :
          <Redirect to={`${process.env.PUBLIC_URL}/home/usa`} />


          }      
        </Switch>
        </BrowserRouter>
        </Provider>
        </Auth0Provider>
      </Fragment>
      )
}

ReactDOM.render(<Root/>,
  document.getElementById('root')
);
serviceWorker.unregister();
