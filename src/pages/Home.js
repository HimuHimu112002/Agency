import React from 'react'
import Account from '../Components/Account';
import ChooseUs from '../Components/ChooseUs';
import Crypto from '../Components/Crypto';
import Financy from '../Components/Financy';
import Footer from '../Components/Footer';
import HeroSection from '../Components/HeroSection';
import LogoSection from '../Components/LogoSection';
import Menu from '../Components/Menu';
import PaymentsForm from '../Components/PaymentsForm';
import PaymentsSection from '../Components/PaymentsSection';
import Residence from '../Components/Residence';
import Testomonial from '../Components/Testomonial';

const Home = () => {
  return (

    <>

        <Menu></Menu>
        <HeroSection></HeroSection>
        <LogoSection></LogoSection>
        <PaymentsSection></PaymentsSection>
        <PaymentsForm></PaymentsForm>
        <Financy></Financy>
        <Testomonial></Testomonial>
        <Residence></Residence>
        <Account></Account>
        <ChooseUs></ChooseUs>
        <Crypto></Crypto>
        <Footer></Footer>
    </>
  )
}

export default Home