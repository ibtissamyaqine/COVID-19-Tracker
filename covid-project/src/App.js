import React from 'react';
import {
  MenuItem,
  FormControl,
  Select,
}from "@material-ui/core";
import './App.css';

function App() {
  return (
    //BEM naming convention 
    <div className="app"> 
    <div className="app__header">
    <h1>COVID 19 TRACKER</h1>
      <FormControl className="app__dropdown">
        <Select
          variant="outlined"
          value="abc"
        >

          <MenuItem value="worldwide">WorldWide</MenuItem>
          <MenuItem value="worldwide">Option two</MenuItem>
          <MenuItem value="worldwide">Option tree</MenuItem>
          <MenuItem value="worldwide">Option four</MenuItem>
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
