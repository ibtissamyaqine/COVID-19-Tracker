import React, {useState, useEffect} from 'react';
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent
}from "@material-ui/core";
import './App.css';
import InfoBox from "./InfoBox";
import Map from "./Map";

function App() {

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  // STATE = how to write a variable in React 

  // USEEFFECT runs a peice of code 
  // based on a given condition 

  useEffect(() => {

    // async -> send a request, wait for it, do somthing with info
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => (
          {
            name:country.country, 
            value: country.countryInfo.iso2
          }
        ));
        setCountries(countries);
      })
    }
    getCountriesData();
  }, [])
  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);

    const url = countryCode === 'worldwide' ? "https://disease.sh/v3/covid-19/all" :
     `https://disease.sh/v3/covid-19/countries/${countryCode}`;
     await fetch(url)
     .then(response => response.json())
  };
  return (
    //BEM naming convention 
    <div className="app">
      <div className="app__left">
        <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
          <FormControl className="app__dropdown">
            <Select variant="outlined" onChange={onCountryChange} value={country}>
              {/* Loop through all the countries and show a drop down list of the options */}
              
              <MenuItem value="worldwide">WorldWide</MenuItem>
              {
                countries.map(country => (
                  <MenuItem value={country.value}>{country.name}</MenuItem>
                ))
              }

              {/* <MenuItem value="worldwide">WorldWide</MenuItem>
              <MenuItem value="worldwide">Option two</MenuItem>
              <MenuItem value="worldwide">Option tree</MenuItem>
              <MenuItem value="worldwide">Option four</MenuItem> */}
            </Select>
          </FormControl>
        </div>
      
        <div className="app__stats">
          <InfoBox title="Coronavirus Cases" cases={1243} total={2000} />

          <InfoBox title="Recovered" cases={1243} total={300} />

          <InfoBox title="Deaths" cases={1243} total={4000} />

        </div>
          {/* Map */}
          <Map />
      </div>
      <Card className="app__right">
        <CardContent>
          <h3>Live Cases by country</h3>
          {/* Tble */}
          <h3>worldWide New Cases</h3>
          {/* Graph */}
        </CardContent>

      </Card>
    </div>
  );
}

export default App;
