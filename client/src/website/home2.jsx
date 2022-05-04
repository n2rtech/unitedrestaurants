import React, { lazy,Suspense } from "react";
import { Container } from 'reactstrap'

import Header2 from "./header2.jsx";
import Footer2 from "./footer2.jsx";
import SearchBar from "./SearchBar.jsx";


const Home2 = () => {
  localStorage.removeItem('catid');
  localStorage.removeItem('filter');
  localStorage.removeItem('address');
  localStorage.removeItem('latitude');
  localStorage.removeItem('longitude');

  
  return (
    <Suspense fallback={<div></div>}>
       <Container fluid={true} className="p-0">
        <Header2/>
        <SearchBar/>
        <HotDeals2/>
        <Featured2/>
        <Advertise2/>
        <Latestadditions2/>
        <HomeBlog2/>
        <Footer2/>
      </Container>
    </Suspense>
     
  );
}

const HotDeals2 = lazy(() => import("./HotDeals2.jsx"));
const Featured2 = lazy(() => import("./Featured2.jsx"));
const Advertise2 = lazy(() => import("./Advertise2.jsx"));
const Latestadditions2 = lazy(() => import("./Latestadditions2.jsx"));
const HomeBlog2 = lazy(() => import("./HomeBlog2.jsx"));

export default Home2;
