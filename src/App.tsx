import React from 'react';
import { Container } from '@material-ui/core';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar'
import SearchResult from './components/SearchResult'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.App}>
      <Navbar styleNavbar={styles.navbar} name="Bus E-ticketing" />
      <div className={`${styles.content} container`}>
        <SearchBar />
      </div>
      <Footer styleFooter={styles.footer} name="Copyright © 2020 E-ticketing. All Rights Reserved | Developed by Nazmul Hasan" />
    </div>
  );
}

export default App;
