import React from 'react'
import gemy from '../../public/img/gemy.jpg'
import './about.scss'
export default function About() {
  return (
    <div>
      <div className="container  about mt-5 p-4 " id='about'>
        <div className="row   my-5 py-5" style={{ alignItems:'center'}}>
            <div className="col-lg-6 ">
<div className='img-about' style={{ height:''}}>
<img src={gemy} alt="" className='object-fit-contain' style={{ height:'600px'}}/>

</div>
            </div>
            <div className="col-lg-6 about" >
                <p>About</p>
                <h2>mohamed gmal is A software developer specializing in front-end development  based in egypt.</h2>
                <p>I am Front-end engineer capable of developing reactive web applications using React.js. I am distinguished by my ability to transform designs into clean and effective code. I bring a passion for innovation in problem solving
                .</p>
           <a href='https://docs.google.com/document/d/1D5Q0H_EJSemOWASE_aDD1syUTpUoBJDb/edit?usp=sharing&ouid=114074409082178313136&rtpof=true&sd=true' className='btn btn-dark fw-bold p-2 px-5'>Download cv</a>
            </div>
        </div>
      </div>
    </div>
  )
}
