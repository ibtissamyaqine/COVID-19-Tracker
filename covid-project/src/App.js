import React, {useState, useEffect} from 'react';
import {
  MenuItem,
  FormControl,
  Select,
}from "@material-ui/core";
import './App.css';

function App() {

  const [countries, setCountries] = useState(["use","uk","india"]);

  // STATE = how to write a variable in React 

  // USEEFFECT runs a peice of code 
  // based on a given condition 

  useEffect(() => {
    // async -> send a request, wait for it, do somthing with info
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/jhucsse/counties")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => (
          {
            name:country.country, 
            value: country.countryInfo.iso2
          }
        ))
      })
    }
  }, [])
  return (
    //BEM naming convention 
    <div className="app"> 
    <div className="app__header">
    <h1>COVID-19 TRACKER</h1>
      <FormControl className="app__dropdown">
        <Select
          variant="outlined"
          value="abc"
        >
          {/* Loop through all the countries and show a drop down list of the options */}
          {
            countries.map(country => (
              <MenuItem value={country}>{country}</MenuItem>
            ))
          }

          {/* <MenuItem value="worldwide">WorldWide</MenuItem>
          <MenuItem value="worldwide">Option two</MenuItem>
          <MenuItem value="worldwide">Option tree</MenuItem>
          <MenuItem value="worldwide">Option four</MenuItem> */}
        </Select>
      </FormControl>
    </div>
  

      {/* Header */}
      {/* Title + Select input dropdown field */}

      {/*  InfoBoxs  */}
      {/*  InfoBoxs */}
      {/* Infoboxs */}

      {/* Tble */}
      {/* Graph */}

      {/* Map */}
    </div>
  );
}

export default App;
