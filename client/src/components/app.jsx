import React, { Fragment } from 'react';
import Loader from "../layout/loader";
import Taptop from "../layout/tap-top";
import Header from '../layout/header'
import Sidebar from '../layout/sidebar'
import VendorSidebar from '../layout/vendorsidebar'
import Footer from '../layout/footer'
import ThemeCustomize from "../layout/theme-customizer";
import {ToastContainer} from 'react-toastify'
import {withRouter} from 'react-router-dom'

const role = localStorage.getItem("role");
const { sidebar } = ({ role }) => (role == 'admin' ? <Sidebar /> : <VendorSidebar />);



const App = ({children , sidebar}) => {
  return (
    <Fragment>
      <Loader/>
      <Taptop/>
      <div className="page-wrapper compact-wrapper" id="pageWrapper">
        <Header/>
        <div className="page-body-wrapper">
        {localStorage.getItem("role") == 'admin' ? <Sidebar /> : <VendorSidebar />}
          <div className="page-body">
            {children}
          </div>
          <Footer/>
        </div>
      
      </div>
      <ToastContainer/>
    </Fragment>
  );
}
export default withRouter(App);