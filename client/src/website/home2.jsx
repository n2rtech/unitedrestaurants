import React,{useState,useMemo} from 'react';
import { Container } from 'reactstrap'
import Header2 from './header2.jsx'
import Footer2 from './footer2.jsx'
import SearchBar from './SearchBar.jsx'
import HotDeals2 from './HotDeals2.jsx'
import Featured2 from './Featured2.jsx'
import Advertise2 from './Advertise2.jsx'
import Latestadditions2 from './Latestadditions2.jsx'
import HomeBlog2 from './HomeBlog2.jsx'


const Home2 = () => {


  return (
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
  );
}

export default Home2;
