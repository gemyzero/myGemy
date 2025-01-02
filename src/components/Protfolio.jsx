import React from 'react'
import klinik from '../../public/img/klinik.jpg'
import about from '../../public/img/about.jpg'
import Bricker from '../../public/img/Bricker.png'
import crud from '../../public/img/crud.png'
import ewallet from '../../public/img/ewallet.png'
import prayer from '../../public/img/prayer.png'
import Portfolio from '../../public/img/Portfolio.png'

import makaan from '../../public/img/makaan.jpg'
import restaurant from '../../public/img/restaurant.jpg'
import job from '../../public/img/job.jpg'



import './Protfolio.scss'
export default function Protofolio() {
  return (

    
    <div id='Protfolio'  className='container mt-5 '>
      
      <h1>Protofolio</h1>
  
 <div className="row mt-5 gap-0">
 <div className="col-lg-4 col-md-6  cards  p-3">
        <div className="card">
        <img src={crud} alt=""  className='w-100 object-fit-cover ' />
         
         <div className="details-protfolio text-center">
       <div className='details'>
  <div className='fw-bold'>
  <h3>crude_Sysem</h3>
<h5 className='py-2'>This is a simple wep site this is crude_Sysem that is responsive to all devices, built using HTML, CSS, and JavaScript..</h5>
<button className='btn btn-primary '><a className='text-white' href="https://gemyzero.github.io/crude_Sysem/">Live Demo</a></button>
  </div>
       </div>
           </div>
        </div>
        </div>
        <div className="col-lg-4 col-md-6  cards  p-3">
        <div className="card">
        <img src={ewallet} alt=""  className='w-100'/>
         
         <div className="details-protfolio text-center">
       <div className='details'>
  <div className='fw-bold'>
  <h3>ewallet</h3>
<h5 className='py-2'>This is a simple wep site this is ewallet that is responsive to all devices, built using react.js..</h5>
<button className='btn btn-primary '><a className='text-white' href="https://ewallet-chi.vercel.app/">Live Demo</a></button>
  </div>
       </div>
           </div>
        </div>
        </div>
        <div className="col-lg-4 col-md-6  cards  p-3">
        <div className="card">
        <img src={prayer} alt=""  className='w-100 object-fit-cover'/>
         
         <div className="details-protfolio text-center">
       <div className='details'>
  <div className='fw-bold'>
  <h3>prayer-time-with-react</h3>
<h5 className='py-2'>This is a simple wep site this is prayer-time that is responsive to all devices, built using react.js..</h5>
<button className='btn btn-primary '><a className='text-white' href="https://prayer-time-with-react.vercel.app/">Live Demo</a></button>
  </div>
       </div>
           </div>
        </div>
        </div>
        <div className="col-lg-4 col-md-6  cards  p-3">
        <div className="card">
        <img src={klinik} alt=""  className='w-100'/>
         
         <div className="details-protfolio text-center">
       <div className='details'>
  <div className='fw-bold'>
  <h3>Hospital</h3>
<h5 className='py-2'>This is a simple wep site to hospital that is responsive to all devices, built using HTML, CSS, and JavaScript..</h5>
<button className='btn btn-primary '><a className='text-white' href="https://gemyzero.github.io/hospital/">Live Demo</a></button>
  </div>
       </div>
           </div>
        </div>
        </div>
        <div className="col-lg-4 col-md-6  cards  p-3">
        <div className="card">
        <img src={restaurant} alt=""  className='w-100'/>
         
         <div className="details-protfolio text-center">
       <div className='details'>
  <div className='fw-bold'>
  <h3>restaurant</h3>
<h5 className='py-2'>  This is a simple wep site to restaurant that is responsive to all devices, built using HTML, CSS, and JavaScript
..</h5>
<button className='btn btn-primary '><a className='text-white' href="https://gemyzero.github.io/restaurant-template/">Live Demo</a></button>
  </div>
       </div>
           </div>
        </div>
        </div>

        <div className="col-lg-4 col-md-6  cards  p-3">
        <div className="card">
        <img src={makaan} alt=""  className='w-100'/>
         
         <div className="details-protfolio text-center">
       <div className='details'>
  <div className='fw-bold'>
  <h3>Makans</h3>
<h5 className='py-2'>  This is a simple wep site to Buying real estate that is responsive to all devices, built using HTML, CSS, and JavaScript..</h5>
<button className='btn btn-primary '><a className='text-white' href="https://gemyzero.github.io/Makans/">Live Demo</a></button>
  </div>
       </div>
           </div>
        </div>
        </div>

        <div className="col-lg-4 col-md-6  cards  p-3">
        <div className="card">
        <img src={job} alt=""  className='w-100'/>
         
         <div className="details-protfolio text-center">
       <div className='details'>
  <div className='fw-bold'>
  <h3>Jop</h3>
<h5 className='py-2'>This is a simple wep site to finde a jop that is responsive to all devices, built using HTML, CSS, and JavaScript..</h5>
<button className='btn btn-primary '><a className='text-white' href="https://gemyzero.github.io/Jop/">Live Demo</a></button>
  </div>
       </div>
           </div>
        </div>
        </div>

        <div className="col-lg-4 col-md-6  cards  p-3">
        <div className="card">
        <img src={Bricker} alt=""  className='w-100'/>
         
         <div className="details-protfolio text-center">
       <div className='details'>
  <div className='fw-bold'>
  <h3>Bricker</h3>
<h5 className='py-2'>This is a simple wep site that is responsive to all devices, built using HTML, CSS, and JavaScript..</h5>
<button className='btn btn-primary '><a className='text-white' href="https://gemyzero.github.io/Bricker-/">Live Demo</a></button>
  </div>
       </div>
           </div>
        </div>
        </div>
        <div className="col-lg-4 col-md-6  cards  p-3">
        <div className="card">
        <img src={Portfolio} alt=""  className='w-100  ' />
         
         <div className="details-protfolio text-center">
       <div className='details'>
  <div className='fw-bold'>
  <h3>Portfolio</h3>
<h5 className='py-2'>This is a simple wep site this is Portfolio that is responsive to all devices, built using HTML, CSS, and JavaScript..</h5>
<button className='btn btn-primary '><a className='text-white' href="https://gemyzero.github.io/Portfolio-Company/">Live Demo</a></button>
  </div>
       </div>
           </div>
        </div>
        </div>
   
     
 
      </div>
     
    </div>

  )
}
