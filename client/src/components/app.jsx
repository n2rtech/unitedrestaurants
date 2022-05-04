import React, { Fragment } from 'react';
import Loader from "../layout/loader";
import Taptop from "../layout/tap-top";
import Header from '../layout/header'
import Sidebar from '../layout/sidebar'
import VendorSidebar from '../layout/vendorsidebar'
import UserSidebar from '../layout/usersidebar'
import Footer from '../layout/footer'
import {ToastContainer} from 'react-toastify'
import {withRouter} from 'react-router-dom'

const { sidebar } = ({ role }) => getSidebar({role});

const getSidebar = (role) => {
  if(role === 'admin') {
    return (<Sidebar />);
  } else if(role  === 'vendor') {
    return (<VendorSidebar />);
  } else {
    return (<UserSidebar />);
  }
}

console.info('ssdsd', localStorage.getItem('adminloggedin'));

const App = ({children , sidebar}) => {
  return (
    <Fragment>
      {   localStorage.getItem('adminloggedin') === 'true'
          ? 
          <div>
                <Loader/>
                <Taptop/>
                <div className="page-wrapper compact-wrapper" id="pageWrapper">
                  <Header/>
                  <div className="page-body-wrapper">
                    {getSidebar(localStorage.getItem("role"))}
                    <div className="page-body">
                      {children}
                    </div>
                    <Footer/>
                  </div>
                </div>
                <ToastContainer/>
          </div>
          
          :

          localStorage.getItem('vendorloggedin') === 'true' ?

                <div>
                    <Loader/>
                    <Taptop/>
                    <div className="page-wrapper compact-wrapper" id="pageWrapper">
                      <Header/>
                      <div className="page-body-wrapper">
                        {getSidebar(localStorage.getItem("role"))}
                        <div className="page-body">
                          {children}
                        </div>
                        <Footer/>
                      </div>
                    </div>
                    <ToastContainer/>
                </div> 

                : 
                
                <div>
                      <Loader/>
                      <Taptop/>
                        <div className="page-body-wrapper">
                          <div className="page-body">
                            {children}
                          </div>
                        </div>
                      <ToastContainer/>
                </div> 

          
      }

      
    </Fragment>
  );
}
export default withRouter(App);