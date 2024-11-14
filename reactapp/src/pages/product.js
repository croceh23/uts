import React from 'react';
import foto1 from '../components/asset/foto1.jpg';
import foto2 from '../components/asset/foto2.jpg';
import foto3 from '../components/asset/foto3.jpg';
import foto4 from '../components/asset/foto4.jpg';
import foto5 from '../components/asset/foto5.jpg';
import foto6 from '../components/asset/foto6.jpg';
import foto7 from '../components/asset/foto7.jpg';
import foto8 from '../components/asset/foto8.jpg';

const Foto = () => {
  return (
    <div className='image'>
      <div>
        <img src={foto1} alt="1" />
        <h1>jumat berkah</h1>
      </div>
      <div>
        <img src={foto2} alt="2" />
        <h1>menu spesial</h1>
      </div>
      <div>
        <img src={foto3} alt="3" />
        <h1>menu baru</h1>
      </div>
      <div>
        <img src={foto4} alt="4" />
        <h1>spesial promo</h1>
      </div>
      <div>
        <img src={foto5} alt="5" />
        <h1>toping seblak</h1>
      </div>
      <div>
        <img src={foto6} alt="6" />
        <h1>menu minuman</h1>
      </div>
      <div>
        <img src={foto7} alt="7" />
        <h1>promo minuman</h1>
      </div>
      <div>
        <img src={foto8} alt="8" />
        <h1>voucher</h1>
      </div>
    </div>
  );
}

export default Foto;