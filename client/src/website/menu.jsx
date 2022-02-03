import React,{useState,useMemo,Fragment} from 'react';
import Dropdown from 'react-multilevel-dropdown';
import { Container, Row, Col, Navbar, NavbarToggler, Collapse, NavItem, NavLink, Nav } from 'reactstrap'
import axios from 'axios'

const Menu = (props) => {
const [isOpen, setIsOpen] = React.useState(false);
const [categoryData, setCategoryData] = useState([]);

const addDefaultSrc = (ev) => {
  ev.target.src = `${process.env.PUBLIC_URL}/assets/images/menuicon/restaurant_Ic.png`;
}

useMemo(() => {
  axios.get(`/api/categories/top-menu`)
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
                  {categoryData.map((item , i) => (
                    <NavItem key={i}>
                    <a href={`${process.env.PUBLIC_URL}/restaurants/${item.id}`}>  <img onError = {addDefaultSrc} src={`${process.env.PUBLIC_URL}/api/uploads/categories/${item.image}`} alt="Menu-Icon"/> </a>
                    {item.parent && (item.parent.length > 0) && <Dropdown title={item.name} key={i}>
                    {item.parent && (item.parent).map((item1 , i) => (<Fragment key={i}>
                      <Dropdown.Item> <a href={`${process.env.PUBLIC_URL}/restaurants/${item1.id}`}>{item1.name}</a>
                      {item1.parent_2 &&
                        <Fragment>
                        {(item1.parent_2).map((item2 , i) => (
                          <Dropdown.Submenu key={i}>
                          <Dropdown.Item><NavLink href={`${process.env.PUBLIC_URL}/restaurants/${item2.id}`} >{item2.name} </NavLink>
                          {item2.parent_3 &&
                            <Fragment>
                            {(item2.parent_3).map((item3 , i) => (
                              <Dropdown.Submenu kay={i}>
                              <Dropdown.Item><NavLink href={`${process.env.PUBLIC_URL}/restaurants/${item3.id}`}>{item3.name}</NavLink></Dropdown.Item>
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
                      </Fragment>
                      ))}
                    </Dropdown>
                  }
                  {item.parent && (item.parent.length === 0) && <div className="sigle-title">{item.name}</div> }
                  </NavItem>
                  ))}                  
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
