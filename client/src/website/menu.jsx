import React,{useState,useEffect,Fragment} from 'react';
import Dropdown from 'react-multilevel-dropdown';
import { Container, Row, Col, Navbar, NavbarToggler, Collapse, NavItem, NavLink, Nav } from 'reactstrap'
import axios from 'axios'

const Menu = (props) => {
const [isOpen, setIsOpen] = React.useState(false);
const [categoryData, setCategoryData] = useState([]);

const addDefaultSrc = (ev) => {
  ev.target.src = `${process.env.PUBLIC_URL}/assets/images/menuicon/restaurant_Ic.png`;
}
const [isMenu, setisMenu] = useState(false);
    const [menusData, setMenusData] = useState([]);
    const [isResponsiveclose, setResponsiveclose] = useState(false);

    useEffect(() => {

      (async () => {
        axios.get(`/api/categories/listAndSubCategory`)
        .then((result_data) => {
          const result = result_data.data;
          setCategoryData(result);
        }); 
      })();
      

    }, []);

console.log('categoryData',categoryData);

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
                  navbar>
                  {categoryData && categoryData.length ? categoryData.map((item , i) => (
                    <NavItem key={i}>
                    <a href={`${process.env.PUBLIC_URL}/BusinessListing/${item.id}`}>  <img onError = {addDefaultSrc} src={`${process.env.PUBLIC_URL}/api/uploads/categories/${item.image}`} alt="Menu-Icon"/> </a>
                    {item.children && (item.children.length > 0) && <Dropdown title={item.name} key={i}>
                    {item.children && (item.children).map((item1 , i) => (<Fragment key={i}>
                      <Dropdown.Item> <a href={`${process.env.PUBLIC_URL}/BusinessListing/${item1.id}`}>{item1.name}</a>
                      {item1.children &&
                        <Fragment>
                        {item1.children && (item1.children.length > 0) &&
                          <Dropdown.Submenu >
                        {(item1.children).map((item2 , i) => (
                          <Dropdown.Item key={i}><NavLink href={`${process.env.PUBLIC_URL}/BusinessListing/${item2.id}`} >{item2.name} </NavLink>
                          {item2.children &&
                            <Fragment>
                            {(item2.children).map((item3 , i) => (
                              <Dropdown.Submenu key={i}>
                              <Dropdown.Item><NavLink href={`${process.env.PUBLIC_URL}/BusinessListing/${item3.id}`}>{item3.name}</NavLink></Dropdown.Item>
                              </Dropdown.Submenu>
                              ))}
                            </Fragment>
                          }

                          </Dropdown.Item>   
                          ))}
                          </Dropdown.Submenu>
                        }
                        </Fragment>
                      }
                      </Dropdown.Item>
                      </Fragment>
                      ))}
                    </Dropdown>
                  }
                  {item.children && (item.children.length === 0) && <div className="sigle-title">{item.name}</div> }
                  </NavItem>
                  )) : '' }                  
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
