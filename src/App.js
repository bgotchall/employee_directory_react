import React from 'react';
import Grid from '@material-ui/core/Grid';
import './App.css';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Table from './components/Table.js';
import TableSave from './components/TableSave.js';
import Table2 from './components/Table2.js';


function App() {
  return (
    <div className="App">

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Header id="header" />
        </Grid>
        
        <Grid item xs={12}>
          <Table2 />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>

      </Grid>



    </div>
  );
}

export default App;
