import React, { Suspense } from "react";
import { Container } from 'reactstrap'
import Header2 from "./header2.jsx";
import Footer2 from "./footer2.jsx";
import SearchBar from "./SearchBar.jsx";
const HotDeals2 = React.lazy(() => import("./HotDeals2.jsx"));
const Featured2 = React.lazy(() => import("./Featured2.jsx"));
const Advertise2 = React.lazy(() => import("./Advertise2.jsx"));
const Latestadditions2 = React.lazy(() => import("./Latestadditions2.jsx"));
const HomeBlog2 = React.lazy(() => import("./HomeBlog2.jsx"));

const Home2 = () => {
  localStorage.removeItem('catid');
  localStorage.removeItem('filter');
  localStorage.removeItem('address');
  localStorage.removeItem('address1');
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

export default Home2;