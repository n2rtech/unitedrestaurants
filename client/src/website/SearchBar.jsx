import React,{useState,useEffect} from 'react';
import { Container, Row,Form, Input, InputGroup, InputGroupAddon, InputGroupText, Button } from 'reactstrap'
import './css/style.css'
import { useHistory } from 'react-router-dom';
import { Typeahead } from 'react-bootstrap-typeahead';
import TypeaheadOne from './typeahead-one';
import axios from 'axios'
import SweetAlert from 'sweetalert2'     

    
const SearchBar = () => {
  var base64 = require('base-64');
  const history = useHistory()
  const [countries , setCountries] = useState([]);
  const [categories , setCategories] = useState([]);
  const [address , setAddress] = useState(localStorage.getItem('address'));
  const [address1 , setAddress1] = useState(localStorage.getItem('address1'));
  const [latitude , setLatitude] = useState(localStorage.getItem('latitude'));
  const [longitude , setLongitude] = useState(localStorage.getItem('longitude'));
  useEffect( async () => {
  
    const config = {
        headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*', 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNjcwMzYxOCwiZXhwIjoxNjY4MjYwNTQ0fQ.eIG5Q29TaWU_B3-SpXQp38ROC3lO7dRCUTog5wkPWwQ'}
        };
 
       await fetch('/api/categories/all' , config)
        .then(res => res.json())
        .then(
          (result) => {  
            setCategories(result);
          },
          (error) => {
            
          }
          )
  }, []);

  const [searchinput, setSearchInput] = useState(localStorage.getItem('filter') || '');
  const [catid, setCatid] = useState(localStorage.getItem('catid'));

  const OnChangeSearch = (event) => {
      setAddress1(event.target.value);
  }

  const OnChangeFilter = (event) => {
      setSearchInput(event.target.value);
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

  const setCurrentLocation1 = () => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {          
            localStorage.setItem('longitude' , position.coords.longitude);
            localStorage.setItem('latitude' , position.coords.latitude);
          document.getElementById('search_address_lat').value=(position.coords.latitude);
          document.getElementById('search_address_lan').value=(position.coords.longitude);
          getReverseGeocodingData(position.coords.latitude,position.coords.longitude);
        });
      }
    }

    const  getReverseGeocodingData = (lat, lng) => {
      var latlng = new window.google.maps.LatLng(lat, lng);
      var geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ 'latLng': latlng },  (results, status) =>{
        if (status !== window.google.maps.GeocoderStatus.OK) {
          alert(status);
        }
        if (status == window.google.maps.GeocoderStatus.OK) {
          var address = (results[0].formatted_address);
          localStorage.setItem('address' , address);
          document.getElementById('searchAddress').value = address;
        }
      });
    }

  const HandleSearch = (searchvalue , catid, addresss) => {

    const cat = parseInt(catid);
    const address1 = addresss;
    const address = localStorage.getItem('address') || '';
    const latitude = parseFloat(localStorage.getItem('latitude') || 0);
    const longitude = parseFloat(localStorage.getItem('longitude') || 0);
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
      localStorage.setItem('address1' , address1);
      const url = base64.encode(`&country=${country_code}&filter=${searchvalue}&category=${catid}&address=${address}&address1=${address1}&latitude=${latitude}&longitude=${longitude}`)
      // const url = base64.encode(`&country=${country_code}&category=${catid}&address=${address}&latitude=${latitude}&longitude=${longitude}`)
      history.push(`/SearchBusiness/${url}`);
      // history.push(`/search/${url}`);
      window.location.reload(false);
    }
  }
  const multiple = false
    const [options,setOptions] = useState([])

    useEffect(() => {
        axios.get(`${process.env.PUBLIC_URL}/api/typeaheadData.json`).then(res => setOptions(res.data))
    },[])

  return (
      <div className="Homebanner">
        <Container>
          <Form className="browse">
            <Row>
              <div className="col-sm-3 p-0">
                <InputGroup>
                  <InputGroupAddon addonType="prepend"><InputGroupText><i className="fa fa-cube"></i></InputGroupText></InputGroupAddon>
                    {/*<Typeahead
                        id="basic-typeahead"
                        labelKey="name"
                        multiple={multiple}
                        options={options}
                        placeholder="Please Select Category"
                    />*/}
                  <Input type="select" name="select" className="form-control digits" value = {catid ? catid : "0" } placeholder="Please select categories" onChange = {OnChangecatid}>
                  <option value="0">Please Select Category</option>
                    {categories && categories.map((item,i) => (
                        <option key={i} value={item.id}>{item.name}</option>
                      ))}
                  </Input>
                </InputGroup>
              </div>
              <div className="col-sm-3 p-0">
                <InputGroup>

                  <InputGroupAddon addonType="prepend"><InputGroupText><i className="fa fa-cube"></i></InputGroupText></InputGroupAddon>

                  <Input type="text" defaultValue={searchinput} name="filter" className="form-control digits" onChange  = {OnChangeFilter} placeholder="Dish, Cuisine, Restaurant..." />                

                </InputGroup>
              </div>
              <div className="col-sm-5 p-0">
                <InputGroup>
                  <InputGroupAddon onClick={setCurrentLocation1} addonType="prepend"><InputGroupText><i  title="Use my Current Location" className="fa fa-globe"></i></InputGroupText></InputGroupAddon>
                  <Input type="text" defaultValue={address ? address : address1} name="address" id="searchAddress" className="form-control digits" onChange={OnChangeSearch} placeholder="Location.." />                
                  <Input type="hidden" defaultValue={latitude} name="latitude" id="search_address_lat" />                
                  <Input type="hidden" defaultValue={longitude} name="longitude" id="search_address_lan" />                
                  </InputGroup>
              </div>
              <div className="col-sm-1">
                <Button color="primary" onClick={() => HandleSearch(searchinput,catid,address1)}><i className="fa fa-search"></i></Button>
              </div>
            </Row>
          </Form>
        </Container>
      </div>
  );

}
export default SearchBar;
