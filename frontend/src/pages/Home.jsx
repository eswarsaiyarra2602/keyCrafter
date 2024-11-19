import React from 'react';
import Navbar from '../components/Navbar/Navbar'; 
import InputField from '../components/InputField/InputField';
import Title from '../components/Title/Title';
import Card from '../components/Card/Card';
import Footer from '../components/Footer/Footer';
export const Home = () => {
  return (
    <div className='bg-gray-100'>
      <Navbar />
      <Title text="Instantly generate a secure password using the latest KeyCrafter Online Tool" />
      <InputField/>
      <Card></Card>
      <Footer></Footer> 
    </div>
  );
};