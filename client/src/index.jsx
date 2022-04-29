import React, { Fragment,useState } from 'react'
import ReactDOM from 'react-dom';
import './index.scss';
import {auth0} from './data/config';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react'
import store from './store'
import App from './components/app'
import { CSSTransition,TransitionGroup } from 'react-transition-group'
import {routes} from './route';
import Signin from './auth/signin'
import Vendorsignin from './auth/vendorsignin'
import Usersignin from './auth/usersignin'
import Search from './website/search'
import Sitemap from './website/sitemap'
import Home from './website/home2'
import Home2 from './website/home2'
import Restaurants from './website/restaurants'
import Blog from './website/blog'
import Details from './website/resturent/details'
import NewDetails from './website/resturent/newdetails'
import Blogdetails from './website/blog/blogdetails'
import Searchresturent from './website/searchresturent'
import Gallery from './website/gallery'
import Aboutus from './website/aboutus'
import Customerservices from './website/customerservices'
import Technicalsupport from './website/technicalsupport'
import Sales from './website/sales'
import BusinessListing from './website/BusinessListing'
import BusinessDetails from './website/BusinessDetails'
import Privacypolicy from './website/privacypolicy'
import Howitwork from './website/howitwork'
import Returnpolicy from './website/returnpolicy'
import Termsofservice from './website/termsofservice'
import Contactus from './website/contactus'
import verifyEmail from './website/verifyEmail'
import Visitors from './website/visitors'
import Signupmsg from './pages/authentication/signupmessage'
import Emailvalidation from './pages/authentication/emailvalidation'
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
import Error400 from "./pages/errors/error400"
// Maintenance
import Maintenance from "./pages/maintenance"
import Callback from './auth/callback'

const Root = (props) =>  {
  const anim = '';
  const currentUser = false;
  const authenticated = false;
  const jwt_token = localStorage.getItem('token'); 
    if(localStorage.getItem('country_code') == null) {
      localStorage.setItem('country_code' , 'usa');
    }

    return(
      <Fragment>
        <Auth0Provider domain={auth0.domain} clientId={auth0.clientId} redirectUri={auth0.redirectUri}>
        <Provider store={store}>
        <BrowserRouter basename={`/`}>
        <Switch>
          {/*<Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />*/}
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home2} />
          <Route exact path={`${process.env.PUBLIC_URL}/search/:id`} component={Search} />
          <Route  path={`${process.env.PUBLIC_URL}/login`} component={Signin} />
          <Route  path={`${process.env.PUBLIC_URL}/message`} component={Signupmsg} />
          <Route  path={`${process.env.PUBLIC_URL}/sitemap`} component={Sitemap} />
          <Route  path={`${process.env.PUBLIC_URL}/verifiedemail/:id`} component={Emailvalidation} />
          <Route  path={`${process.env.PUBLIC_URL}/vendor/login`} component={Vendorsignin} />
          <Route  path={`${process.env.PUBLIC_URL}/user/login`} component={Usersignin} />
          <Route  path={`${process.env.PUBLIC_URL}/home`} component={Home} />
          <Route  path={`${process.env.PUBLIC_URL}/restaurants/:id`} component={Restaurants} />
          <Route  path={`${process.env.PUBLIC_URL}/category/:cat/:id`} component={Restaurants} />
          <Route  path={`${process.env.PUBLIC_URL}/resturent/details/:id`} component={Details} />
          <Route  path={`${process.env.PUBLIC_URL}/resturent/newdetails/:id`} component={NewDetails} />
          <Route  path={`${process.env.PUBLIC_URL}/blog/blogdetails/:id`} component={Blogdetails} />
           <Route  path={`${process.env.PUBLIC_URL}/restaurants`} component={Restaurants} />
           <Route  path={`${process.env.PUBLIC_URL}/blog`} component={Blog} />
           <Route  path={`${process.env.PUBLIC_URL}/searchresturent`} component={Searchresturent} />
           <Route  path={`${process.env.PUBLIC_URL}/gallery`} component={Gallery} />
           <Route  path={`${process.env.PUBLIC_URL}/aboutus`} component={Aboutus} />
           <Route  path={`${process.env.PUBLIC_URL}/customerservices`} component={Customerservices} />
           <Route  path={`${process.env.PUBLIC_URL}/technicalsupport`} component={Technicalsupport} />
           <Route  path={`${process.env.PUBLIC_URL}/sales`} component={Sales} />
           <Route  path={`${process.env.PUBLIC_URL}/BusinessListing/:id`} component={BusinessListing} />
           <Route  path={`${process.env.PUBLIC_URL}/BusinessDetails/:id`} component={BusinessDetails} />
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
          <Route  path={`${process.env.PUBLIC_URL}/pages/maintenance`} component={Maintenance}></Route>
          
          <Route  path={`${process.env.PUBLIC_URL}/callback`} render={() => <Callback/>} />

        
          <Route exact path={`${process.env.PUBLIC_URL}/:any`} render={() => <Error400/>} />

          {currentUser !== null || authenticated || jwt_token  ?
          
          <App>
          <Route exact path={`${process.env.PUBLIC_URL}/`} render={() => {
            if(localStorage.getItem("role") === 'admin') {
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
