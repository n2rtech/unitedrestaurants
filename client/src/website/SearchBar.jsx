import React,{useState,useEffect} from 'react';
import { Container, Row,Form, Input, InputGroup, InputGroupAddon, InputGroupText, Button } from 'reactstrap'
import './css/style.css'
import { useHistory } from 'react-router-dom';
import SweetAlert from 'sweetalert2'         
const SearchBar = () => {
  var base64 = require('base-64');
  const history = useHistory()
  const [countries , setCountries] = useState([]);
  const [categories , setCategories] = useState([]);
  const [address , setAddress] = useState(localStorage.getItem('address'));
  const [latitude , setLatitude] = useState(localStorage.getItem('latitude'));
  const [longitude , setLongitude] = useState(localStorage.getItem('longitude'));
  useEffect( async () => {
  
    const config = {
        headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*', 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNjcwMzYxOCwiZXhwIjoxNjY4MjYwNTQ0fQ.eIG5Q29TaWU_B3-SpXQp38ROC3lO7dRCUTog5wkPWwQ'}
        };
 
    // fetch('/api/countries' , config)
    //   .then(res => res.json())
    //   .then(
    //     (result) => {  
    //         setCountries(result);
    //     },
    //     (error) => {
          
    //     }
    //     );

        await fetch('/api/categories/top-menu' , config)
        .then(res => res.json())
        .then(
          (result) => {  
            setCategories(result);
          },
          (error) => {
            
          }
          )
  }, []);

  const handleCountrychange = (event) => {
     localStorage.setItem('country_code' , event.target.value);
  }


  const [searchinput, setSearchInput] = useState(localStorage.getItem('filter') || '');
  const [catid, setCatid] = useState(localStorage.getItem('catid'));

  const OnChangeSearch = (event) => {
      setSearchInput(event.target.value);
  }

  const handleAddressChange = (event) => {
      setAddress(event.target.value);
  }

  const handleLatitudeChange = (event) => {
      setLatitude(event.target.value);
  }

  const handleLongitudeChange = (event) => {
      setLongitude(event.target.value);
  }  

  const OnChangecatid = (event) => {
    setCatid(event.target.value);
  }

  const HandleSearch = (searchvalue , catid) => {
    const cat = parseInt(catid);
    const address = localStorage.getItem('address');
    const latitude = parseFloat(localStorage.getItem('latitude'));
    const longitude = parseFloat(localStorage.getItem('longitude'));
    const country_code = localStorage.getItem('country_code');

    if(isNaN(cat)) {
      SweetAlert.fire(
        'Alert!',
        'Choose category first.',
        'danger '
      )
    } else {
      localStorage.setItem('catid' , catid);
      localStorage.setItem('filter' , searchvalue);
      const url = base64.encode(`&country=${country_code}&filter=${searchvalue}&category=${catid}&address=${address}&latitude=${latitude}&longitude=${longitude}`)
      history.push(`/search/${url}`);

      window.location.reload(false);
    }
  }

  return (
      <div className="Homebanner">
        <Container>
          <Form className="browse">
            <Row>
              <div className="col-sm-3 p-0">
                <InputGroup>
                  <InputGroupAddon addonType="prepend"><InputGroupText><i className="fa fa-cube"></i></InputGroupText></InputGroupAddon>
                  <Input type="select" name="select" className="form-control digits" value = {catid} placeholder="Please select categories" onChange = {OnChangecatid}>
                  <option value="0">Please Select Category</option>
                    {categories && categories.map((item,i) => (
                        <option key={i} value={item.id}>{item.name}</option>
                      ))}
                  </Input>
                </InputGroup>
              </div>
              <div className="col-sm-8 p-0">
                <InputGroup>
                  <InputGroupAddon addonType="prepend"><InputGroupText><i className="fa fa-globe"></i></InputGroupText></InputGroupAddon>
                  <Input type="text" name="address" id="searchAddress" defaultValue={address} className="form-control digits" placeholder="Search Address" />                
                  <Input type="hidden" name="latitude" defaultValue={latitude} id="search_address_lat" />                
                  <Input type="hidden" name="longitude" defaultValue={longitude} id="search_address_lan" />                
                  </InputGroup>
              </div>
              <div className="col-sm-1">
                <Button color="primary" onClick={() => HandleSearch(searchinput,catid)}><i className="fa fa-search"></i></Button>
              </div>
            </Row>
          </Form>
        </Container>
      </div>
  );

}
export default SearchBar;
