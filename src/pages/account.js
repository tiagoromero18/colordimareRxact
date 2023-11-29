import React from 'react';
import AccountView from '../components/Accountview/Accountview';
import Header from'../components/Header/Header.jsx'
import Navegation from'../components/Navegation/Navegation.jsx'
import Footer from'../components/Footer/Footer.jsx'


const account = () => {
    return (
        <div>
            <Header/>
            <Navegation/>
            <AccountView/>
            <Footer/>
        </div>
    );
  };
  
  export default account;