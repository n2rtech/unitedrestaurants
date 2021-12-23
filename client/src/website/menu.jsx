import React,{useState,useEffect,Fragment} from 'react';
import Dropdown from 'react-multilevel-dropdown';
import { Container, Row, Col, Navbar, NavbarBrand, NavbarToggler, Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Form, FormGroup, Input, InputGroup, select, option, Label, Button, NavItem, NavLink, Nav,TabContent,TabPane } from 'reactstrap'
import './css/style.css'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const Menu = (props) => {
const [isOpen, setIsOpen] = React.useState(false);

const [categoryData, setCategoryData] = useState([]);
const params = useParams();

const addDefaultSrc = (ev) => {
  ev.target.src = `${process.env.PUBLIC_URL}/assets/images/menuicon/restaurant_Ic.png`;
}

useEffect(() => {
  //    axios.get(`/api/categories/list`)
  // .then((result_data) => {
  //   const result = result_data.data;
  //   setCategoryData(result);
  // }); 

  axios.get(`/api/categories/list`)
    .then((result_data) => {
      const result = result_data.data;
      setCategoryData(result);
      for (const [i, element] of result.entries()) {
        
        result[i].parent = [];
        var parent = element.id;
        if(parent){
          axios.get("/api/categories/subcat/"+parent)
          .then((result1) => {
            result[i].parent = result1.data;
            setCategoryData(result);
            if(result1.data){
              const subparent = result1.data;
              for (const [j, element1] of subparent.entries()) {
                axios.get("/api/categories/subcat/"+element1.id)
                .then((result2) => {
                  if(result2.data){
                    result[i].parent[j].parent_2 = result2.data;
                  }
                  setCategoryData(result);
                  if(result2.data){
                    const subsubparent = result2.data;
                    for (const [k, element2] of subsubparent.entries()) {
                      axios.get("/api/categories/subcat/"+element2.id)
                      .then((result3) => {
                        if(result3.data){
                          result[i].parent[j].parent_2[k].parent_3 = result3.data;
                        }
                        setCategoryData(result);
                      })
                    }
                  }else{
                    setCategoryData(result);
                  }
                })
              }
            }else{
              setCategoryData(result);
            }
          });
        }
      }
    });

}, []);

console.log('Menu' , categoryData);

  return (
      <div className="headermenu">
        <Container fluid={true} className="p-0">
        <Row className="m-0">
          <Col sm="12" className="p-0">
            <Navbar expand="md" className="p-0 mmenu">
              <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
              <Collapse isOpen={isOpen} navbar>
                <Nav
                  className="me-auto"
                  navbar
                >



                    {categoryData.map((item , i) => (
                      <NavItem key={i}>
                            <img onError = {addDefaultSrc} src={`${process.env.PUBLIC_URL}/api/uploads/categories/${item.image}`} alt="Menu-Icon"/>
                      <Dropdown title={item.name} key={i}>
                      {item.parent &&
                        <Fragment>
{(item.parent).map((item1 , i) => (
  <Dropdown.Item>{item1.name}
{item1.parent_2 &&
                        <Fragment>
  {(item1.parent_2).map((item2 , i) => (
    <Dropdown.Submenu>
      <Dropdown.Item>{item2.name}
{item2.parent_3 &&
                        <Fragment>
      {(item2.parent_3).map((item3 , i) => (
        <Dropdown.Submenu>
          <Dropdown.Item><NavLink href="#">{item3.name}</NavLink></Dropdown.Item>
        </Dropdown.Submenu>
        ))}
      </Fragment>
    }

      </Dropdown.Item>   

    </Dropdown.Submenu>
    ))}
  </Fragment>
}
    
  </Dropdown.Item>
  ))}
</Fragment>
}

</Dropdown>
</NavItem>
))}


                   {/* {categoryData.map((item , i) => (
                          
                          <NavItem key={i}>
                            <img src={`${process.env.PUBLIC_URL}/assets/images/menuicon/restaurant_Ic.png`} alt="Menu-Icon"/>
                             {item.parent_id == 0 ? 

                               <Dropdown title={item.name} >
                                <Dropdown.Item>
                                {item.name}
                                                         
                              </Dropdown.Item>  
                              </Dropdown>     
                            
                              :

                              null
                          
                            }
                            
                          </NavItem>
                      ))}*/}
                
                  {/* <NavItem>
                      <img src={`${process.env.PUBLIC_URL}/assets/images/menuicon/restaurant_Ic.png`} 
               alt="Menu-Icon"/>
                      
                      <Dropdown
                    title='Restaurants'
                  >
                    <Dropdown.Item
                    >
                      3 Star
                      <Dropdown.Submenu>
                        <Dropdown.Item>
                          Indian
                          <Dropdown.Submenu>
                        <Dropdown.Item>
                        <NavLink href="#">
                          Veg
                        </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item>
                        <NavLink href="#">
                          Non Veg
                        </NavLink>
                        </Dropdown.Item>
                      </Dropdown.Submenu>
                        </Dropdown.Item>
                        <Dropdown.Item>
                        <NavLink href="#">
                          Chinese
                        </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item>
                        <NavLink href="#">
                          Italian
                        </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item>
                        <NavLink href="#">
                          Syrian
                        </NavLink>
                        </Dropdown.Item>
                      </Dropdown.Submenu>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      5 Star
                    </Dropdown.Item>
                    <Dropdown.Item>
                      7 Star
                    </Dropdown.Item>
                  </Dropdown>
                   
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">
                      <img src={`${process.env.PUBLIC_URL}/assets/images/menuicon/Food_ic.png`}
               alt="Menu-Icon"/>
                      Food Markets
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">
                      <img src={`${process.env.PUBLIC_URL}/assets/images/menuicon/beer_ic.png`}
               alt="Menu-Icon"/>
                      Beer & Alcohol
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">
                      <img src={`${process.env.PUBLIC_URL}/assets/images/menuicon/services_ic.png`}
               alt="Menu-Icon"/>
                      Services
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">
                      <img src={`${process.env.PUBLIC_URL}/assets/images/menuicon/supplires_ic.png`}
               alt="Menu-Icon"/>
                      Suppliers
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">
                      <img src={`${process.env.PUBLIC_URL}/assets/images/menuicon/buy&sell_ic.png`}
               alt="Menu-Icon"/>
                      Buy & Sell
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">
                      <img src={`${process.env.PUBLIC_URL}/assets/images/menuicon/jobs_ic.png`}
               alt="Menu-Icon"/>
                      Jobs
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">
                      <img src={`${process.env.PUBLIC_URL}/assets/images/menuicon/video.png`}
               alt="Menu-Icon"/>
                      Videos
                    </NavLink>
                  </NavItem>
                  <UncontrolledDropdown
                    inNavbar
                    nav
                  >
                    <DropdownToggle>
                      <img src={`${process.env.PUBLIC_URL}/assets/images/menuicon/others_ic.png`}
               alt="Menu-Icon"/>
                    
                      Others
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        Option 1
                      </DropdownItem>
                      <DropdownItem>
                        Option 2
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        Reset
                      </DropdownItem>
                    </DropdownMenu>
                    <DropdownMenu right>
                      <DropdownItem>
                        Option 1
                      </DropdownItem>
                      <DropdownItem>
                        Option 2
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        Reset
                      </DropdownItem>
                    </DropdownMenu>

                  </UncontrolledDropdown> */}


                  
                </Nav>
              </Collapse>
            </Navbar>
          </Col>
          </Row>
        </Container>
      </div>
  );
}

export default Menu;
