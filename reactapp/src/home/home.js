import React from 'react'
import {FaWhatsapp} from 'react-icons/fa'
import './home.css'
const home = () => {
  return (
    <div>
        <div className='tengah'>
            <h1>Selamat datang di seblak sultan!</h1>
            <p>Kami adalah tempat yang bergerak di bidang pemasaran dan penjualan makanan dan minuman.</p>
            <p>Silahkan kunjungi kami di <a href="">seblaksultan.com</a> untuk informasi lebih lanjut.</p>
            <p>Jika anda ingin melakukan pemesanan, silahkan hubungi kami melalui <a href="wa.me/+62 838-9058-3876" className='icon'><FaWhatsapp/>Whatsapp</a>.</p>
            <p>Silahkan melakukan order dan pelunasan pembayaran sebelum hari H!!!</p>
            <p>Selamat berkunjung</p>
            <p>Terima kasih atas kepercayaan anda.</p>
        </div>
        <div>
            <h1>lokasi</h1>
            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.044774781284!2d114.12805697501045!3d-8.29834319173668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6ad004fcf0e15%3A0xf59024f1ad015a58!2sSEBLAK%20SULTAN%20PRASMANAN!5e0!3m2!1sid!2sid!4v1731569287484!5m2!1sid!2sid"
                width="600" 
                height="450" 
                style={{border:0}}
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            </div>
        </div>
    </div>
  )
}

export default home