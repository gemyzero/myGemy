import React, { useRef, useState } from 'react'

export default function Contact() {
const InputPhone = useRef();
const Inputname = useRef();
const InputArea = useRef();
const [sendMassage , setSendMassage] = useState([])


const HandelSubmit =(event)=>{
  event.preventDefault()
  let mass = {
    phone: InputPhone.current.value,
    name: Inputname.current.value,
    massage :InputArea.current.value,
  }
 
  const newOpj = [...sendMassage]
  newOpj.push(mass)
  setSendMassage(newOpj)
  console.log(newOpj)

  localStorage.setItem('massage' , JSON.stringify(newOpj))
}

  return (
      
<section id="contact" className="contanier cuntact mt-5" >

  <div className="start text-center">
    <h1>Cuntact Us</h1>
</div>

  <div className="row mt-5 mb-0  text-center ms-auto d-flex justify-content-center">
    <div className="  info-contact col-lg-3 col-md-6  col-12">
      <a href="#"><i className="fa-solid fa-paper-plane"></i></a>
        <h2>Aderess</h2>
<p>	5 Ahmed Shawky Street, Gamal Abdel Nasser Street - Manti - Qalyoub Center – Qalyubia</p>
      </div>
    <div className=" info-contact  col-lg-3 col-md-6  col-12">
<a href="#"><i className="fa-solid fa-envelope"></i></a>
        <h2>Email</h2>
<p>mohamed0110gemy@gmail.com</p>
    </div>
    <div className=" info-contact  col-lg-3 col-md-6  col-12">
<a href="#"><i className="fa-solid fa-phone"></i></a>
        <h2>Phone</h2>
<p>+20 010 13 909 816</p>
    </div>
    
</div>

<form onSubmit={HandelSubmit} action="" className="form-contact w-75 mx-auto">
 <div className="log d-flex">
  <input ref={InputPhone} type="text" id="disabledTextInput" className="form-control mx-2 my-3 py-2" placeholder="Please Enter Youer Phone"/>
  <input ref={Inputname} type="text" id="disabledTextInput" className="form-control mx-2 my-3 py-2" placeholder="Please Enter Youer Name"/>
 </div>
 <textarea ref={InputArea} className="form-control " id="exampleFormControlTextarea1 my-3 py-2" placeholder="Masseage" rows="3"/>
<button className="btn btn-dark m-2 p-2  w-100">Supmet</button>
</form>
</section>    


    
  )
}
