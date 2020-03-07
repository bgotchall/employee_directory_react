import React from 'react';
import Grid from '@material-ui/core/Grid';
import './App.css';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Table2 from './components/Table2.js';

function createData( name,image, phone, email, dob) {
  return { name, image,phone, email, dob };
}

const tableData = [
  createData('Joe Smith','profile1.jpg', 5125436789, "joe@company.com", 21081990),
  createData('Sally Jones','images2.png', 5125551234, "sally@company.com", 21081985),
  createData('Kris Jacobs','images3.jpg', 5121668765, "kris@company.com", 21081975),
  createData('Lucas Morris','images4.jpg', 5124326578, "lucas@company.com", 21081970),
  createData('Sandy Rudell','images5.jpg', 5126789876, "sandy@company.com", 21081969)
 
];



function App() {
  return (
    <div className="App">

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Header id="header" />
        </Grid>
        
        <Grid item xs={12}>
          <Table2 data={tableData}/>
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>

      </Grid>



    </div>
  );
}

export default App;
