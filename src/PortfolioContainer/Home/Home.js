import React from 'react';
import Header from './Header/Header';
import Profile from './Profile/Profile';
import './Home.css';
import FooterHome from './FooterHome/FooterHome';

//Componente Home con los componentes dentro
export default function Home() {
  return (
  <div className='home-container'>
    <Header/>
    <Profile/>
    <FooterHome/>
  </div>
  )
}
