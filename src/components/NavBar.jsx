import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import   logo from '../../public/img/logo.png'
import './Navbar.scss'
export default function NavBar() {
  return (
    <div>
       <nav class="navbar navbar-expand-lg navbar-white bg-white">
  <div class="container">
<h1>       <img class="navbar-brand" src={logo}/>     Gemy</h1>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse"  id="navbarSupportedContent">
      <ul class="navbar-nav  mb-2 mb-lg-0 mt-2  w-100" style={{justifyContent:'end' , marginLeft:'70px'}}>
      
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">About</a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link " href="#skills" tabindex="-1" aria-disabled="true">Skills</a>
        </li>

        <li class="nav-item">
          <a class="nav-link " href="#Protfolio" tabindex="-1" aria-disabled="true">Protfolio</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#experience">Experience</a>
        </li>

        <li class="nav-item">
          <a class="nav-link " href="#contact" tabindex="-1" aria-disabled="true">Contact</a>
        </li>

        
      </ul>
    
    </div>
  </div>
</nav>
    </div>
  )
}
