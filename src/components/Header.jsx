import React from 'react'
import './Header.scss'
import { FaFacebookF, FaInstagram  , FaTwitter  ,FaLinkedinIn} from "react-icons/fa";
export default function Header() {
  return (
    <div>
        <section className="hero mt-5 ">
<div className="row main-vh-100 d-flex align-items-center text-center">
  <div className="col-12 text-center ">
    <div className="content text-center">
      <h1>Hello</h1>
      <br/>
<div className="chang">

  <p >I Am Mohamed Gmal I a software developer .</p>

</div>
      <div className="icon-content">
<ul>
  <li>
  <a href="https://www.facebook.com/profile.php?id=100043474942924"><FaFacebookF /></a>
</li>
<li className=''><a href="https://x.com/mohamedGmalZero"> <FaTwitter /></a>
 </li>
<li>   <a href="https://www.instagram.com/mohamedjim2022/"><FaInstagram /></a></li>
<li><a href="https://www.linkedin.com/in/mogamed-gmal-93a42b33a/"><FaLinkedinIn /></a>
</li>
</ul>







          

      </div>
    </div>
  </div>
</div>

  </section>
    </div>
  )
}
