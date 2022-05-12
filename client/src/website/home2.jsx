import React, { Suspense , useState , useEffect} from "react";
import { Container } from 'reactstrap'
import Header2 from "./header2.jsx";
import Footer2 from "./footer2.jsx";
import SearchBar from "./SearchBar.jsx";
const HotDeals2 = React.lazy(() => import("./HotDeals2.jsx"));
const Featured2 = React.lazy(() => import("./Featured2.jsx"));
const Advertise2 = React.lazy(() => import("./Advertise2.jsx"));
const Latestadditions2 = React.lazy(() => import("./Latestadditions2.jsx"));
const HomeBlog2 = React.lazy(() => import("./HomeBlog2.jsx"));
const MaintenanceMode = React.lazy(() => import("../pages/maintenance.jsx"));

const Home2 = () => {
  localStorage.removeItem('catid');
  localStorage.removeItem('filter');
  localStorage.removeItem('address');
  localStorage.removeItem('address1');
  localStorage.removeItem('latitude');
  localStorage.removeItem('longitude');

  const [maintenance , setMaintenance] = useState(false);

  useEffect(() => {
  
    const config = {
        headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*', 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNjcwMzYxOCwiZXhwIjoxNjY4MjYwNTQ0fQ.eIG5Q29TaWU_B3-SpXQp38ROC3lO7dRCUTog5wkPWwQ'}
        };
 
        async function getResult() {
          await fetch('/api/site-settings/getsettings' , config)
          .then(res => res.json())
          .then(
            (result) => {  
              if(result.maintenance_mode === 'yes') {
                setMaintenance(true);
              }
            },
            (error) => {}
            )
        }
        getResult();
  }, []);

  return (
    <Suspense fallback={<div></div>}>
       <Container fluid={true} className="p-0">
         {maintenance ? 

          <MaintenanceMode/>
         
         :
         <div>
              <Header2/>
              <SearchBar/>
              <HotDeals2/>
              <Featured2/>
              <Advertise2/>
              <Latestadditions2/>
              <HomeBlog2/>
              <Footer2/>
         </div>
        
         
         }
        
      </Container>
    </Suspense>
  );
}

export default Home2;