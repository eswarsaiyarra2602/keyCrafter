import React from 'react';
import Navbar from '../components/Navbar/Navbar'; 
import InputField from '../components/InputField/InputField';
import Title from '../components/Title/Title';
export const Home = () => {
  return (
    <div>
      <Navbar />
      <Title text="Instantly generate a secure password using the latest KeyCrafter Online Tool" />
      <InputField/>
    </div>
  );
};