// pages/index.js

import Image from 'next/image';
import '../styles/Home.module.css';

export default function Home() {
  return (
    <div className="main" id="bo">
      <div className="head">
        <div className="left">
          <a href="#home">Home</a>
          <a href="#sec">Products</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </div>
        <div className="right">
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
        </div>
      </div>

      <div className="con">
        <h1>GB</h1>
        <div className="quote" id="qu">Discover Your Signature Look</div>
        <h3><a href="#">Shop Now</a></h3>
      </div>

      {/* Images */}
      <Image src="/—Pngtree—white circle background_6044507.png" alt="Circle Background" width={70} height={70} />
      <Image src="/—Pngtree—white circle background_6044507.png" alt="Circle Background" width={70} height={70} />

      {/* Shirt Section */}
      <div className="third" id="bo">
        <div className="le">
          <h1 style={{ position: 'relative', color: 'white', fontFamily: 'oswald', bottom: '200px', left: '450px', fontSize: '60px', fontWeight: '100', textShadow: '2px 2px 10px grey' }}>
            Shirts
          </h1>
          <h3 style={{ color: 'white', fontFamily: 'oswald', fontSize: '1.5rem', fontWeight: '100', textAlign: 'center', marginTop: '70px' }}>
            Shirts are a staple of every wardrobe, offering comfort and style in equal measure.<br />
            Whether buttoned-up for a professional look or casually untucked, they adapt to various settings effortlessly.
            The fabric choice—cotton, linen, or silk—adds texture and breathability, enhancing their appeal.
            Patterns like stripes, checks, or solids provide options for personal expression, while collar and cuff styles add subtle distinctions.
            Ultimately, shirts remain a timeless choice, balancing practicality with fashion.
          </h3>
        </div>

        <div className="ri">
          <Image src="/gokhan-keser-turkish-actor-and-fashion-model-fxb8vg78r4ez9q3m.png" alt="Shirt Model" width={500} height={500} />
        </div>
      </div>

      {/* Shoes Section */}
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

      {/* Products Section */}
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
