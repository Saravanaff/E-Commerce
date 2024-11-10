// pages/index.js

import { useEffect, useState } from 'react';
import Image from 'next/image';
import '../styles/Home.module.css';
import StorefrontIcon from '@mui/icons-material/Storefront';

export default function Home() {
  return (
    <div className="main" id="bo">
      <div className='head'>
        <div className="left">
          <a href="#home">Home</a>
          <a href="#sec">Products</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </div>
        <div className="right">
          <a href="#" className='ins'><i className="fa-brands fa-instagram"></i></a>
          <a href="#" className='wha'><i className="fa-brands fa-whatsapp"></i></a>
        </div>
      </div>

      <div className="con">
        <h1>GB</h1>
        <div className="quote" id="qu">Discover Your Signature Look</div>
        <h3><a href="#"><StorefrontIcon id="ic" />Shop Now</a></h3>
      </div>

      <div className="third" id="bo" style={{border:"1px solid red"}}>
        <div className="le">
          <h1 style={{color:"white",fontSize:'8em',fontFamily:'oswald',fontWeight:'500'}}>Shirts</h1>
          <h2 style={{color:"rgba(255,255,255,0.6)",fontFamily:'arial',fontWeight:'200'}}>Shirts are a staple of every wardrobe, offering comfort and style in equal<br></br>measure.</h2>
          <a href='#'>Explore Collection</a>
        </div>

      </div>

      <div className="fourth" id="bo">
        <div className="l">
          <Image src="/shoe1.png" alt="Shoes" width={550} height={500} />
        </div>
        <div className="r">
          <h1 style={{ color: 'white', textAlign: 'center', fontFamily: 'oswald', fontSize: '60px', fontWeight: '100', marginTop: '60px' }}>Shoes</h1>
          <h3 style={{ color: 'white', fontFamily: 'oswald', fontSize: '30px', fontWeight: '100', textAlign: 'center', marginTop: '40px', padding: '50px' }}>
            Shoes are essential accessories that marry fashion with functionality, protecting our feet while completing our outfits.
            From sleek leather oxfords to sporty sneakers, they cater to diverse tastes and activities. Quality materials like suede, canvas,
            or synthetic blends ensure comfort and durability. Designs range from classic lace-ups to slip-on loafers, accommodating various preferences and occasions.
            Ultimately, shoes not only complement our style but also support our daily adventures with every step.
          </h3>
        </div>
      </div>

      <div className="second" id="sec">
        <h1 style={{ color: 'white', textAlign: 'center' }}>Our Products</h1>
        <div className="prod">
          <a href="shirt.html"><div className="shirts"></div></a>
          <div className="shoes"></div>
        </div>
      </div>
    </div>
  );
}
